package com.cut.production;

import com.cut.production.repository.ElasticMonitor;
import com.cut.production.entities.User;
import com.cut.production.services.CutPlanningService;
import com.cut.production.services.OrderService;
import com.cut.production.utils.Constants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.data.elasticsearch.core.ElasticsearchOperations;
import org.springframework.data.elasticsearch.core.query.IndexQuery;

import java.util.*;

@SpringBootApplication
public class CutProduction implements CommandLineRunner {

    @Autowired
    private OrderService service;

    @Autowired
    private CutPlanningService cutPlanningService;

    @Autowired
    ElasticsearchOperations elasticsearchOperations;

    @Autowired
    ElasticMonitor monitor;

    @Override
    public void run(String... args) throws Exception {
        List<String> allowedIndices = new ArrayList<>();
        allowedIndices.add(Constants.ORDER_INDEX);
        allowedIndices.add(Constants.USER_INDEX);
        allowedIndices.add(Constants.CUT_PLANNING_INDEX);
        allowedIndices.add(Constants.WEEK_WORK_INDEX);
        List<String> currentIndices = monitor.getIndicesList();

        allowedIndices.forEach(index -> {
            if (!currentIndices.contains(index)) {
                monitor.createIndex(index);
            }
        });

        insertAdmin();

        System.out.println("Started ...");
    }

    private void insertAdmin() {
        IndexQuery query = new IndexQuery();
        query.setIndexName(Constants.USER_INDEX);
        query.setType(Constants.USER_TYPE);
        query.setId("admin");
        query.setObject(new User("admin", "admin", "admin.admin@gmail.com", "admin", "admin"));
        elasticsearchOperations.index(query);
    }

    public static void main(String[] args) {
        new SpringApplicationBuilder(CutProduction.class)
                .logStartupInfo(false)
                .run(args);
    }
}
