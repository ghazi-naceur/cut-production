package com.cut.production.services;

import com.cut.production.Repository.Repo;
import com.cut.production.entities.Order;
import com.cut.production.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class UserService implements CrudService {

    @Autowired
    private Repo repo;


    @Override
    public Object create(Object entity) {
        return null;
    }

    @Override
    public Object update(Object entity, String index, String type, String id) {
        return null;
    }

    @Override
    public Object getById(String id, String index, String type) {
        return null;
    }

    @Override
    public List<User> findAllEntities(String index, String type) {
        return repo.findAll(index, type, User.class);
    }

    @Override
    public void delete(Object entity) {

    }

    @Override
    public void deleteById(String index, String type, String id) {

    }

    @Override
    public List<Order> searchEntities(String index, Map searchCriteria) {
        return null;
    }

    @Override
    public boolean isEntityExist(String index, String type, Map entityAsMap) {
        return false;
    }
}
