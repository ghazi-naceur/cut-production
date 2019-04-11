package com.cut.production.Repository;

import java.util.List;
import java.util.Map;

public interface Repo<T> {

    T create(T entity);

    T update(T entity, String index, String type, String id);

    T getById(String id, String index, String type);

    List<T> findAll(String index, String type, Class<T> clazz);

    boolean isEntityExist(String index, String type, Map entityAsMap);

    void delete(T entity);

    void deleteById(String index, String type, String id);

    List<T> searchEntities(String index, Map<String, Object> searchEntities);

    void deleteAll(String index);
}
