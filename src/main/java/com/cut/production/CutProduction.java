package com.cut.production;

import com.cut.production.Repository.Repo;
import com.cut.production.entities.CutPlanning;
import com.cut.production.entities.Order;
import com.cut.production.entities.User;
import com.cut.production.services.CrudService;
import com.cut.production.services.CutPlanningService;
import com.cut.production.services.OrderService;
import com.cut.production.utils.Constants;
import org.elasticsearch.action.index.IndexRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.data.elasticsearch.core.ElasticsearchOperations;
import org.springframework.data.elasticsearch.core.query.IndexQuery;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@SpringBootApplication
public class CutProduction implements CommandLineRunner {

    @Autowired
    private OrderService service;

    @Autowired
    private CutPlanningService cutPlanningService;

    @Autowired
    ElasticsearchOperations elasticsearchOperations;

    @Override
    public void run(String... args) throws Exception {
        System.out.println("Starting ...");
//        repo.create(new User("user", "user", "user.user@gmail.com", "user", "user"));
        insertAdmin();

//        1- create :
//        service.create(new Order("new client", "new model", "new article", 2.36, 3.25));

//        2- update :
//        HashMap<String, Object> map = new HashMap<>();
//        map.put("client", "old client");
//        map.put("minConfection", 5.2);
//        service.update(map, "orders", "order", "d1b0771c-c934-4ac9-be2d-4d266656dd17");

//        3- getbyid :
//        Order object = (Order)service.getById("d1b0771c-c934-4ac9-be2d-4d266656dd17", "orders", "order");
//        System.out.println(object.toString());

//        4- findall :
//        List<Order> orders = service.findAllEntities("orders", "order");
//        orders.forEach(order -> {
//            System.out.println(order.toString());
//        });

//        service.create(new Order("newclient","newmodel","newarticle",5.25,2.14));
        // here was the last test :
//        cutPlanningService.calculateProduction(new CutPlanning(new Date(), 12, "newclient", "newmodel","newarticle", 1000, 50, 100, "Mardi", 07.20,"newresponpsable", 10));
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
