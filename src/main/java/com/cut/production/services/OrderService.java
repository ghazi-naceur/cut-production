package com.cut.production.services;

import com.cut.production.Repository.Repo;
import com.cut.production.entities.Order;
import com.cut.production.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class OrderService implements CrudService{

    @Autowired
    private Repo repo;

    @Override
    public Object create(Object entity) {
        return repo.create(entity);
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
    public List<Order> findAllEntities(String index, String type) {
        return repo.findAll(index, type, Order.class);
    }

    @Override
    public void delete(Object entity) {
        repo.delete(entity);
    }

    public void deleteById(String index, String type, String id) {
        repo.deleteById(index, type, id);
    }

    @Override
    public List<Order> searchEntities(String index, Map searchCriteria) {
        return (List<Order>) repo.searchEntities(index, searchCriteria);
    }


    @Override
    public boolean isEntityExist(String index, String type, Map entityAsMap) {
        return repo.isEntityExist(index, type, entityAsMap);
    }

}
