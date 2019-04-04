package com.cut.production.services;

import com.cut.production.entities.Entity;
import com.cut.production.entities.Order;

import java.util.List;
import java.util.Map;

public interface CrudService<T> {

    T create(T entity);

    T update(T entity, String index, String type, String id);

    T getById(String id, String index, String type);

    List<Entity> findAllEntities(String index, String type);

    boolean isEntityExist(String index, String type, Map<String, Object> entityAsMap);

    void delete(T entity);

    void deleteById(String index, String type, String id);

    List<Order> searchEntities(String index, Map<String, Object> searchCriteria);
}
