package com.cut.production.services;


import com.cut.production.Repository.EntityRepository;
import com.cut.production.entities.CutPlanning;
import com.cut.production.entities.Order;
import com.cut.production.entities.WeekWork;
import com.cut.production.utils.Constants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.*;
import java.util.concurrent.CopyOnWriteArrayList;

import static com.cut.production.utils.Constants.*;

@SuppressWarnings("all")
@Service
public class CutPlanningService implements CrudService {

    @Autowired
    private EntityRepository repo;

    @Override
    public Object create(Object entity) {
        Object object = repo.create(entity);
        calculateProduction((CutPlanning) object);
        return object;
    }

    @SuppressWarnings("unchecked")
    @Override
    public Object update(Object entity, String index, String type, String id) {
        repo.update(entity, index, type, id);
        CutPlanning cutPlanning = (CutPlanning) repo.getById(id, index, type);
        List<String> calculatedTasks = recalculateProduction(cutPlanning);
        updateTasks(cutPlanning, calculatedTasks);
        return cutPlanning;
    }

    @Override
    public Object getById(String id, String index, String type) {
        return repo.getById(id, index, type);
    }

    @Override
    public List<CutPlanning> findAllEntities(String index, String type) {
        return repo.findAll(index, type, CutPlanning.class);
    }

    public WeekWork findAllWeekWorks(String index, String type) {
        return (WeekWork) getById(type, index, type);
    }

    @Override
    public void delete(Object entity) {
        repo.delete(entity);
    }

    @Override
    public void deleteById(String index, String type, String id) {
        CutPlanning cutPlanning = (CutPlanning) repo.getById(id, index, type);
        repo.deleteById(index, type, id);
        deleteTasks(cutPlanning);
    }

    @Override
    public void deleteAll(String index) {
        repo.deleteAll(index);

        Map<String, Object> entity = new HashMap<>();
        entity.put(CURRENT_WEEK_TASKS_FIELD, Collections.emptyList());
        entity.put(NEXT_WEEK_TASKS_FIELD, Collections.emptyList());
        try {
            repo.indexEntity(WEEK_WORK_INDEX, WEEK_WORK_ID, WEEK_WORK_ID, entity);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }


    private void deleteTasks(CutPlanning cutPlanning) {
        List<String> result = repo.getfieldValue(CURRENT_WEEK_TASKS_FIELD, WEEK_WORK_INDEX, WEEK_WORK_ID, WEEK_WORK_ID);
        List<String> nextResult = repo.getfieldValue(NEXT_WEEK_TASKS_FIELD, WEEK_WORK_INDEX, WEEK_WORK_ID, WEEK_WORK_ID);
        String taskName = cutPlanning.getClient() + cutPlanning.getArticle();
        result.removeIf(task -> task.equals(taskName));
        nextResult.removeIf(task -> task.equals(taskName));
        try {
            repo.indexEntity(WEEK_WORK_INDEX, WEEK_WORK_ID, WEEK_WORK_ID, Collections.emptyMap());
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
            entity.put(CURRENT_WEEK_TASKS_FIELD, firstSlice);
            entity.put(NEXT_WEEK_TASKS_FIELD, nextResult);

            repo.indexEntity(WEEK_WORK_INDEX, WEEK_WORK_ID, WEEK_WORK_ID, entity);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private void updateTasks(CutPlanning cutPlanning, List<String> calculatedNewTasks) {
        List<String> result = repo.getfieldValue(CURRENT_WEEK_TASKS_FIELD, WEEK_WORK_INDEX, WEEK_WORK_ID, WEEK_WORK_ID);
        List<String> nextResult = repo.getfieldValue(NEXT_WEEK_TASKS_FIELD, WEEK_WORK_INDEX, WEEK_WORK_ID, WEEK_WORK_ID);
        String taskName = cutPlanning.getClient() + cutPlanning.getArticle();
        int newTasksIndex = 0;
        if (result.contains(taskName)) {
            newTasksIndex = result.indexOf(taskName);
        }
        result.removeIf(task -> task.equals(taskName));
        nextResult.removeIf(task -> task.equals(taskName));

        try {
            repo.indexEntity(WEEK_WORK_INDEX, WEEK_WORK_ID, WEEK_WORK_ID, Collections.emptyMap());
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
            entity.put(CURRENT_WEEK_TASKS_FIELD, firstSlice);
            entity.put(NEXT_WEEK_TASKS_FIELD, nextResult);

            repo.indexEntity(WEEK_WORK_INDEX, WEEK_WORK_ID, WEEK_WORK_ID, entity);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    public List<CutPlanning> searchEntities(String index, Map searchCriteria) {
        return repo.searchEntities(index, searchCriteria);
    }

    @Override
    public boolean isEntityExist(String index, String type, Map entityAsMap) {
        return repo.isEntityExist(index, type, entityAsMap);
    }

    @SuppressWarnings("unchecked")
    private void calculateProduction(CutPlanning cutPlanning) {
        List<String> calculatedTasks = new ArrayList<>();
        List<String> currentWeek = new ArrayList<>();
        List<String> nextWeek = new ArrayList<>();
        Map<String, Object> map = new HashMap<>();
        try {
            map.put("client", cutPlanning.getClient());
            map.put("article", cutPlanning.getArticle());
            List<Order> list = repo.searchEntities(Constants.ORDER_INDEX, map);
            if (list.isEmpty()) {
                throw new IllegalArgumentException("Probablement il n'y a pas de commande pour le client '" + cutPlanning.getClient() + "' - article '" + cutPlanning.getArticle() + "'");
            }
            double production = (cutPlanning.getEfficiency() * cutPlanning.getPresenceTime() * cutPlanning.getEffective()) / (100 * list.get(0).getMinCut() * (1 - (cutPlanning.getAbsenteeismRate() / 100.0f)));
            System.out.println("Quantity : " + cutPlanning.getQuantity());
            System.out.println("Production : " + production);
            double piecePerHour = Math.round(cutPlanning.getQuantity() / production);
            System.out.println("=> Piece per hour : " + piecePerHour);
            if (piecePerHour < 1) {
                calculatedTasks.add(cutPlanning.getClient() + cutPlanning.getArticle());
            }
            for (int i = 0; i < piecePerHour; i++) {
                calculatedTasks.add(cutPlanning.getClient() + cutPlanning.getArticle());
            }
            List<String> weeklyTasks = new ArrayList<>();
            List<String> currentFromDB = repo.getfieldValue(CURRENT_WEEK_TASKS_FIELD, WEEK_WORK_INDEX, WEEK_WORK_ID, WEEK_WORK_ID);
            List<String> nextFromDB = repo.getfieldValue(NEXT_WEEK_TASKS_FIELD, WEEK_WORK_INDEX, WEEK_WORK_ID, WEEK_WORK_ID);
            if (currentFromDB != null) {
                weeklyTasks.addAll(currentFromDB);
                weeklyTasks.addAll(nextFromDB);
            }
            weeklyTasks.addAll(calculatedTasks);
            if (weeklyTasks.size() <= 95) {
                Map<String, Object> entity = new HashMap<>();
                entity.put(CURRENT_WEEK_TASKS_FIELD, weeklyTasks);
                repo.indexEntity(WEEK_WORK_INDEX, WEEK_WORK_ID, WEEK_WORK_ID, entity);
            } else {
                for (int i = 0; i < weeklyTasks.size(); i++) {
                    if (i <= 94) {
                        currentWeek.add(weeklyTasks.get(i));
                    } else {
                        nextWeek.add(weeklyTasks.get(i));
                    }
                }
                Map<String, Object> entity = new HashMap<>();
                entity.put(CURRENT_WEEK_TASKS_FIELD, currentWeek);
                entity.put(NEXT_WEEK_TASKS_FIELD, nextWeek);
                repo.indexEntity(WEEK_WORK_INDEX, WEEK_WORK_ID, WEEK_WORK_ID, entity);
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private List<String> recalculateProduction(CutPlanning cutPlanning) {
        List<String> calculatedTasks = new ArrayList<>();
        List<String> currentWeek = new ArrayList<>();
        List<String> nextWeek = new ArrayList<>();
        Map<String, Object> map = new HashMap<>();
        try {
            map.put("client", cutPlanning.getClient());
            map.put("article", cutPlanning.getArticle());
            List<Order> list = repo.searchEntities(Constants.ORDER_INDEX, map);
            if (list.isEmpty()) {
                throw new IllegalArgumentException("Probablement il n'y a pas de commande pour le client '" + cutPlanning.getClient() + "' - article '" + cutPlanning.getArticle() + "'");
            }
            double production = (cutPlanning.getEfficiency() * cutPlanning.getPresenceTime() * cutPlanning.getEffective()) / (100 * list.get(0).getMinCut() * (1 - (cutPlanning.getAbsenteeismRate() / 100.0f)));
            System.out.println("Quantity : " + cutPlanning.getQuantity());
            System.out.println("Production : " + production);
            double piecePerHour = Math.round(cutPlanning.getQuantity() / production) * 2;
            System.out.println("=> Piece per hour : " + piecePerHour);
            if (piecePerHour < 1) {
                calculatedTasks.add(cutPlanning.getClient() + cutPlanning.getArticle());
            }
            for (int i = 0; i < piecePerHour; i++) {
                calculatedTasks.add(cutPlanning.getClient() + cutPlanning.getArticle());
            }
            return calculatedTasks;
//            List<String> weeklyTasks = new ArrayList<>();
//            List<String> currentFromDB = repo.getfieldValue(CURRENT_WEEK_TASKS_FIELD, WEEK_WORK_INDEX, WEEK_WORK_ID, WEEK_WORK_ID);
//            List<String> nextFromDB = repo.getfieldValue(NEXT_WEEK_TASKS_FIELD, WEEK_WORK_INDEX, WEEK_WORK_ID, WEEK_WORK_ID);
//            if (currentFromDB != null) {
//                weeklyTasks.addAll(currentFromDB);
//                weeklyTasks.addAll(nextFromDB);
//            }
//            weeklyTasks.addAll(calculatedTasks);
//            if (weeklyTasks.size() <= 95) {
//                Map<String, Object> entity = new HashMap<>();
//                entity.put(CURRENT_WEEK_TASKS_FIELD, weeklyTasks);
//                repo.indexEntity(WEEK_WORK_INDEX, WEEK_WORK_ID, WEEK_WORK_ID, entity);
//            } else {
//                for (int i = 0; i < weeklyTasks.size(); i++) {
//                    if (i <= 94) {
//                        currentWeek.add(weeklyTasks.get(i));
//                    } else {
//                        nextWeek.add(weeklyTasks.get(i));
//                    }
//                }
//                Map<String, Object> entity = new HashMap<>();
//                entity.put(CURRENT_WEEK_TASKS_FIELD, currentWeek);
//                entity.put(NEXT_WEEK_TASKS_FIELD, nextWeek);
//                repo.indexEntity(WEEK_WORK_INDEX, WEEK_WORK_ID, WEEK_WORK_ID, entity);
//            }

        } catch (Exception e) {
            e.printStackTrace();
        }
        return Collections.emptyList();
    }
}
