package com.cut.production.services;


import com.cut.production.Repository.Repo;
import com.cut.production.entities.CutPlanning;
import com.cut.production.entities.Order;
import com.cut.production.utils.Constants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class CutPlanningService implements CrudService {

    @Autowired
    private Repo repo;

    @Override
    public Object create(Object entity) {
        Object object = repo.create(entity);
        calculateProduction((CutPlanning) object);
        return object;
    }

    @Override
    public Object update(Object entity, String index, String type, String id) {
        return repo.update(entity, index, type, id);
    }

    @Override
    public Object getById(String id, String index, String type) {
        return repo.getById(id, index, type);
    }

    @Override
    public List<CutPlanning> findAllEntities(String index, String type) {
        return repo.findAll(index, type, CutPlanning.class);
    }

    @Override
    public void delete(Object entity) {
        repo.delete(entity);
    }

    @Override
    public void deleteById(String index, String type, String id) {
        repo.deleteById(index, type, id);
    }

    @Override
    public List<CutPlanning> searchEntities(String index, Map searchCriteria) {
        return repo.searchEntities(index, searchCriteria);
    }

    @Override
    public boolean isEntityExist(String index, String type, Map entityAsMap) {
        return repo.isEntityExist(index, type, entityAsMap);
    }

    public double calculateProduction(CutPlanning cutPlanning) {
        // TODO check if null
        Map<String, Object> map = new HashMap<>();
        map.put("client", cutPlanning.getClient());
        map.put("article", cutPlanning.getArticle());
        List<Order> list = repo.searchEntities(Constants.ORDER_INDEX, map);
        return (cutPlanning.getEfficiency() * cutPlanning.getPresenceTime() * cutPlanning.getEffective()) / (100 * list.get(0).getMinCut() * cutPlanning.getQuantity() * (1 - (cutPlanning.getAbsenteeismRate() / 100)));
    }
}
