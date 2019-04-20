package com.cut.production.services;

import com.cut.production.entities.Order;
import com.cut.production.entities.ProductionPlanning;
import com.cut.production.entities.ProdWeekWork;
import com.cut.production.repository.EntityRepository;
import com.cut.production.utils.Constants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.*;
import java.util.concurrent.CopyOnWriteArrayList;

import static com.cut.production.utils.Constants.*;

/**
 * Created by Ghazi Naceur on 20/04/2019
 * Email: ghazi.ennacer@gmail.com
 */
@Service
public class ProductionPlanningService implements CrudService {

    @Autowired
    private EntityRepository repo;

    @Override
    public Object create(Object entity) {
        Object object = repo.create(entity);
        calculateProduction((ProductionPlanning) object);
        return object;
    }

    @SuppressWarnings("unchecked")
    @Override
    public Object update(Object entity, String index, String type, String id) {
        repo.update(entity, index, type, id);
        ProductionPlanning productionPlanning = (ProductionPlanning) repo.getById(id, index, type);
        List<String> calculatedTasks = recalculateProduction(productionPlanning);
        updateTasks(productionPlanning, calculatedTasks);
        return productionPlanning;
    }

    @Override
    public Object getById(String id, String index, String type) {
        return repo.getById(id, index, type);
    }

    @Override
    public List<ProductionPlanning> findAllEntities(String index, String type) {
        return repo.findAll(index, type, ProductionPlanning.class);
    }

    public ProdWeekWork findAllProdWeekWorks(String index, String type) {
        return (ProdWeekWork) getById(type, index, type);
    }

    @Override
    public void delete(Object entity) {
        repo.delete(entity);
    }

    @Override
    public void deleteById(String index, String type, String id) {
        ProductionPlanning productionPlanning = (ProductionPlanning) repo.getById(id, index, type);
        repo.deleteById(index, type, id);
        deleteTasks(productionPlanning);
    }

    private void deleteTasks(ProductionPlanning productionPlanning) {
        List<String> result = repo.getfieldValue(PRODUCTION_CURRENT_WEEK_TASKS_FIELD, PRODUCTION_WEEK_WORK_INDEX, PRODUCTION_WEEK_WORK_TYPE_AND_ID, PRODUCTION_WEEK_WORK_TYPE_AND_ID);
        List<String> nextResult = repo.getfieldValue(PRODUCTION_NEXT_WEEK_TASKS_FIELD, PRODUCTION_WEEK_WORK_INDEX, PRODUCTION_WEEK_WORK_TYPE_AND_ID, PRODUCTION_WEEK_WORK_TYPE_AND_ID);
        String taskName = productionPlanning.getClient() + "/" + productionPlanning.getArticle();
        result.removeIf(task -> task.equals(taskName));
        nextResult.removeIf(task -> task.equals(taskName));
        try {
            repo.indexEntity(PRODUCTION_WEEK_WORK_INDEX, PRODUCTION_WEEK_WORK_TYPE_AND_ID, PRODUCTION_WEEK_WORK_TYPE_AND_ID, Collections.emptyMap());
            Map<String, Object> entity = new HashMap<>();
            result.addAll(nextResult);
            List<String> firstSlice = new ArrayList<>();
            nextResult = new ArrayList<>();
            for (int i = 0; i < result.size(); i++) {
                if (i <= 94) {
                    firstSlice.add(result.get(i));
                } else {
                    nextResult.add(result.get(i));
                }
            }
            entity.put(PRODUCTION_CURRENT_WEEK_TASKS_FIELD, firstSlice);
            entity.put(PRODUCTION_NEXT_WEEK_TASKS_FIELD, nextResult);

            repo.indexEntity(PRODUCTION_WEEK_WORK_INDEX, PRODUCTION_WEEK_WORK_TYPE_AND_ID, PRODUCTION_WEEK_WORK_TYPE_AND_ID, entity);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private void updateTasks(ProductionPlanning productionPlanning, List<String> calculatedNewTasks) {
        List<String> result = repo.getfieldValue(PRODUCTION_CURRENT_WEEK_TASKS_FIELD, PRODUCTION_WEEK_WORK_INDEX, PRODUCTION_WEEK_WORK_TYPE_AND_ID, PRODUCTION_WEEK_WORK_TYPE_AND_ID);
        List<String> nextResult = repo.getfieldValue(PRODUCTION_NEXT_WEEK_TASKS_FIELD, PRODUCTION_WEEK_WORK_INDEX, PRODUCTION_WEEK_WORK_TYPE_AND_ID, PRODUCTION_WEEK_WORK_TYPE_AND_ID);
        String taskName = productionPlanning.getClient() + "/" + productionPlanning.getArticle();
        int newTasksIndex = 0;
        if (result.contains(taskName)) {
            newTasksIndex = result.indexOf(taskName);
        }
        result.removeIf(task -> task.equals(taskName));
        nextResult.removeIf(task -> task.equals(taskName));

        try {
            repo.indexEntity(PRODUCTION_WEEK_WORK_INDEX, PRODUCTION_WEEK_WORK_TYPE_AND_ID, PRODUCTION_WEEK_WORK_TYPE_AND_ID, Collections.emptyMap());
            Map<String, Object> entity = new HashMap<>();
            CopyOnWriteArrayList<String> before = new CopyOnWriteArrayList<>();
            CopyOnWriteArrayList<String> after = new CopyOnWriteArrayList<>();
            before.addAll(result.subList(0, newTasksIndex));
            after.addAll(result.subList(newTasksIndex, result.size()));
            result = new ArrayList<>();
            result.addAll(before);
            result.addAll(calculatedNewTasks);
            result.addAll(after);
            result.addAll(nextResult);

            List<String> firstSlice = new ArrayList<>();
            nextResult = new ArrayList<>();
            for (int i = 0; i < result.size(); i++) {
                if (i <= 94) {
                    firstSlice.add(result.get(i));
                } else {
                    nextResult.add(result.get(i));
                }
            }
            entity.put(PRODUCTION_CURRENT_WEEK_TASKS_FIELD, firstSlice);
            entity.put(PRODUCTION_NEXT_WEEK_TASKS_FIELD, nextResult);
            repo.indexEntity(PRODUCTION_WEEK_WORK_INDEX, PRODUCTION_WEEK_WORK_TYPE_AND_ID, PRODUCTION_WEEK_WORK_TYPE_AND_ID, entity);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    public List<ProductionPlanning> searchEntities(String index, Map searchCriteria) {
        return repo.searchEntities(index, searchCriteria);
    }

    @Override
    public boolean isEntityExist(String index, String type, Map entityAsMap) {
        return repo.isEntityExist(index, type, entityAsMap);
    }

    @SuppressWarnings("unchecked")
    private void calculateProduction(ProductionPlanning productionPlanning) {
        List<String> calculatedTasks = new ArrayList<>();
        List<String> currentWeek = new ArrayList<>();
        List<String> nextWeek = new ArrayList<>();
        Map<String, Object> map = new HashMap<>();
        try {
            map.put("client", productionPlanning.getClient());
            map.put("article", productionPlanning.getArticle());
            List<Order> list = repo.searchEntities(Constants.ORDER_INDEX, map);
            if (list.isEmpty()) {
                throw new IllegalArgumentException("Probablement il n'y a pas de commande pour le client '" + productionPlanning.getClient() + "' - article '" + productionPlanning.getArticle() + "'");
            }
            // presence time = 30.0
            double production = (productionPlanning.getEfficiency() * 30.0 * productionPlanning.getEffective()) / (100 * list.get(0).getMinConfection() * (1 - (productionPlanning.getAbsenteeismRate() / 100.0f)));
            double piecePerHour = Math.round(productionPlanning.getQuantity() / production) * 1.86;
            if (piecePerHour < 1) {
                calculatedTasks.add(productionPlanning.getClient() + "/" + productionPlanning.getArticle());
            }
            for (int i = 0; i < piecePerHour; i++) {
                calculatedTasks.add(productionPlanning.getClient() + "/" + productionPlanning.getArticle());
            }
            List<String> weeklyTasks = new ArrayList<>();
            List<String> currentFromDB = repo.getfieldValue(PRODUCTION_CURRENT_WEEK_TASKS_FIELD, PRODUCTION_WEEK_WORK_INDEX, PRODUCTION_WEEK_WORK_TYPE_AND_ID, PRODUCTION_WEEK_WORK_TYPE_AND_ID);
            List<String> nextFromDB = repo.getfieldValue(PRODUCTION_NEXT_WEEK_TASKS_FIELD, PRODUCTION_WEEK_WORK_INDEX, PRODUCTION_WEEK_WORK_TYPE_AND_ID, PRODUCTION_WEEK_WORK_TYPE_AND_ID);
            if (currentFromDB != null) {
                weeklyTasks.addAll(currentFromDB);
                weeklyTasks.addAll(nextFromDB);
            }
            weeklyTasks.addAll(calculatedTasks);
            if (weeklyTasks.size() <= 95) {
                Map<String, Object> entity = new HashMap<>();
                entity.put(PRODUCTION_CURRENT_WEEK_TASKS_FIELD, weeklyTasks);
                repo.indexEntity(PRODUCTION_WEEK_WORK_INDEX, PRODUCTION_WEEK_WORK_TYPE_AND_ID, PRODUCTION_WEEK_WORK_TYPE_AND_ID, entity);
            } else {
                for (int i = 0; i < weeklyTasks.size(); i++) {
                    if (i <= 94) {
                        currentWeek.add(weeklyTasks.get(i));
                    } else {
                        nextWeek.add(weeklyTasks.get(i));
                    }
                }
                Map<String, Object> entity = new HashMap<>();
                entity.put(PRODUCTION_CURRENT_WEEK_TASKS_FIELD, currentWeek);
                entity.put(PRODUCTION_NEXT_WEEK_TASKS_FIELD, nextWeek);
                repo.indexEntity(PRODUCTION_WEEK_WORK_INDEX, PRODUCTION_WEEK_WORK_TYPE_AND_ID, PRODUCTION_WEEK_WORK_TYPE_AND_ID, entity);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private List<String> recalculateProduction(ProductionPlanning productionPlanning) {
        List<String> calculatedTasks = new ArrayList<>();
        Map<String, Object> map = new HashMap<>();
        try {
            map.put("client", productionPlanning.getClient());
            map.put("article", productionPlanning.getArticle());
            List<Order> list = repo.searchEntities(Constants.ORDER_INDEX, map);
            if (list.isEmpty()) {
                throw new IllegalArgumentException("Probablement il n'y a pas de commande pour le client '" + productionPlanning.getClient() + "' - article '" + productionPlanning.getArticle() + "'");
            }
            // Presence time = 30.0
            double production = (productionPlanning.getEfficiency() * 30.0 * productionPlanning.getEffective()) / (100 * list.get(0).getMinConfection() * (1 - (productionPlanning.getAbsenteeismRate() / 100.0f)));
            /**
             * piecePerHalfAnHour is calculated through multiplying by 1.86
             * We get it through Cross-multiplication:
             *      51  ===> 1
             *      95  ===> X
             *   => X = 95/51 = 1.86
             */
            double piecePerHalfAnHour = Math.round(productionPlanning.getQuantity() / production) * 1.86;
            if (piecePerHalfAnHour < 1) {
                calculatedTasks.add(productionPlanning.getClient() + "/" + productionPlanning.getArticle());
            }
            for (int i = 0; i < piecePerHalfAnHour; i++) {
                calculatedTasks.add(productionPlanning.getClient() + "/" + productionPlanning.getArticle());
            }
            return calculatedTasks;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return Collections.emptyList();
    }
}
