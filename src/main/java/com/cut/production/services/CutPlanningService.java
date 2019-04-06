package com.cut.production.services;


import com.cut.production.Repository.EntityRepository;
import com.cut.production.entities.CutPlanning;
import com.cut.production.entities.Order;
import com.cut.production.entities.WeekWork;
import com.cut.production.utils.Constants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static com.cut.production.utils.Constants.*;

@Service
public class CutPlanningService implements CrudService {

    @Autowired
    private EntityRepository repo;

    @Override
    public Object create(Object entity) {
        Object object = repo.create(entity);
        // this is tempo
        calculateProduction((CutPlanning) object);
        return object;
    }

    @Override
    public Object update(Object entity, String index, String type, String id) {

        CutPlanning cutPlanning = (CutPlanning)repo.getById(id, index, type);
        deleteTasks(cutPlanning);
        CutPlanning cut = (CutPlanning)repo.update(entity, index, type, id);
        calculateProduction(cut);
        return cut;
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
        return  (WeekWork)getById(type, index, type);
    }

    @Override
    public void delete(Object entity) {
        repo.delete(entity);
    }

    @Override
    public void deleteById(String index, String type, String id) {
        CutPlanning cutPlanning = (CutPlanning)repo.getById(id, index, type);
        repo.deleteById(index, type, id);
        deleteTasks(cutPlanning);
    }

    private void deleteTasks(CutPlanning cutPlanning) {
        List<String> result = repo.getfieldValue(CURRENT_WEEK_TASKS_FIELD, WEEK_WORK_INDEX, WEEK_WORK_ID, WEEK_WORK_ID);
        List<String> nextResult = repo.getfieldValue(NEXT_WEEK_TASKS_FIELD, WEEK_WORK_INDEX, WEEK_WORK_ID, WEEK_WORK_ID);
        String taskName = cutPlanning.getClient() + cutPlanning.getArticle();
        result.removeIf(task -> task.equals(taskName));
        nextResult.removeIf(task -> task.equals(taskName));
        Map<String, Object> entity = new HashMap<>();
        entity.put(CURRENT_WEEK_TASKS_FIELD, result);
        entity.put(NEXT_WEEK_TASKS_FIELD, nextResult);
        try {
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

    public void calculateProduction(CutPlanning cutPlanning) {
        // TODO check if null
        List<String> tasks = new ArrayList<>();
        List<String> currentWeek = new ArrayList<>();
        List<String> nextWeek = new ArrayList<>();
        Map<String, Object> map = new HashMap<>();
        try {
            map.put("client", cutPlanning.getClient());
            map.put("article", cutPlanning.getArticle());
            List<Order> list = repo.searchEntities(Constants.ORDER_INDEX, map);
            if (list.isEmpty()){
                throw new IllegalArgumentException("Probablement il n'y a pas de commande pour le client '"+cutPlanning.getClient()+"' - article '"+cutPlanning.getArticle()+"'");
            }
            double production = (cutPlanning.getEfficiency() * cutPlanning.getPresenceTime() * cutPlanning.getEffective()) / (100 * list.get(0).getMinCut() * (1 - (cutPlanning.getAbsenteeismRate() / 100.0f)));
            System.out.println("Quantity : " + cutPlanning.getQuantity());
            System.out.println("Production : " + production);
            double piecePerHour = Math.round(cutPlanning.getQuantity() / production);
//            double piecePerHour = Math.round(55.0);
            System.out.println("Piece per hour : " + piecePerHour);
            for (int i = 0; i < piecePerHour; i++) {
                tasks.add(cutPlanning.getClient() +cutPlanning.getArticle());
            }
            List<String> weeklyTasks = new ArrayList<>();
            List<String> result = repo.getfieldValue(CURRENT_WEEK_TASKS_FIELD, WEEK_WORK_INDEX, WEEK_WORK_ID, WEEK_WORK_ID);
            if (result != null){
                weeklyTasks.addAll(result);
            }
            weeklyTasks.addAll(tasks);
            if (weeklyTasks.size() <= 51) {
                Map<String, Object> entity = new HashMap<>();
                entity.put(CURRENT_WEEK_TASKS_FIELD, weeklyTasks);
                repo.indexEntity(WEEK_WORK_INDEX, WEEK_WORK_ID, WEEK_WORK_ID, entity);
            } else {
                for (int i = 0 ; i < weeklyTasks.size() ; i++) {
                    if (i <= 50) {
                        currentWeek.add(weeklyTasks.get(i));
                    } else {
                        if (!currentWeek.isEmpty()){
                            currentWeek.remove(0);
                        }
                        nextWeek.add(weeklyTasks.get(i));
                    }
                }
//                repo.indexEntity(INDEX, TYPE, ID, currentWeek);
//                repo.indexEntity(INDEX, TYPE, ID, nextWeek);
//                repo.updatefield(CURRENT_WEEK_TASKS_FIELD, currentWeek);
                Map<String, Object> entity = new HashMap<>();
                entity.put(CURRENT_WEEK_TASKS_FIELD, currentWeek);
                entity.put(NEXT_WEEK_TASKS_FIELD, nextWeek);
//                NEXT_WEEK_WORK_ID
                repo.indexEntity(WEEK_WORK_INDEX, WEEK_WORK_ID, WEEK_WORK_ID, entity);
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
