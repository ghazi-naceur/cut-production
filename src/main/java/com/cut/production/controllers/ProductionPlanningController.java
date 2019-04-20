package com.cut.production.controllers;

import com.cut.production.entities.ProdWeekWork;
import com.cut.production.entities.ProductionPlanning;
import com.cut.production.services.ProductionPlanningService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;
import java.util.Map;

import static com.cut.production.utils.Constants.*;

/**
 * Created by Ghazi Naceur on 20/04/2019
 * Email: ghazi.ennacer@gmail.com
 */

@CrossOrigin(origins = "http://localhost:4200")
@Controller
@RequestMapping(value = "/production_planning")
public class ProductionPlanningController {

    private static Logger logger = LoggerFactory.getLogger(ProductionPlanningController.class.getName());

    @Autowired
    private ProductionPlanningService service;

    @PostMapping
    public ResponseEntity<Void> createProdPlanning(@RequestBody ProductionPlanning productionPlanning, UriComponentsBuilder ucBuilder) {

        HttpHeaders headers = new HttpHeaders();
        try {
            if (service.isEntityExist(PRODUCTION_PLANNING_INDEX, PRODUCTION_PLANNING_TYPE, productionPlanning.toMap())) {
                logger.warn("This productionPlanning is already created {}", productionPlanning.toString());
                return new ResponseEntity<>(HttpStatus.CONFLICT);
            }
            service.create(productionPlanning);
            headers.setLocation(ucBuilder.path("/{id}").buildAndExpand(productionPlanning.getId()).toUri());
            logger.info("This productionPlanning is created successfully {}", productionPlanning.toString());
            return new ResponseEntity<>(headers, HttpStatus.CREATED);
        } catch (Exception e) {
            logger.error("An error occurred when trying to create an productionPlanning {}, caused by {}", productionPlanning.toString(), e);
            return new ResponseEntity<>(headers, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping
    public ResponseEntity<Void> updateProdPlanning(@RequestBody ProductionPlanning productionPlanning) {
        HttpHeaders headers = new HttpHeaders();
        try {
            service.update(productionPlanning, PRODUCTION_PLANNING_INDEX, PRODUCTION_PLANNING_TYPE, productionPlanning.getId());
            logger.info("This productionPlanning is updated successfully {}", productionPlanning.toString());
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            logger.error("An error occurred when trying to update a productionPlanning {}, caused by {}", productionPlanning.toString(), e);
            return new ResponseEntity<>(headers, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping()
    public ResponseEntity<List<ProductionPlanning>> findAllProdPlannings() {
        HttpHeaders headers = new HttpHeaders();
        try {
            List<ProductionPlanning> productionPlannings = service.findAllEntities(PRODUCTION_PLANNING_INDEX, PRODUCTION_PLANNING_TYPE);
            if (productionPlannings.isEmpty()) {
                logger.warn("Your productionPlannings index is empty.");
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(productionPlannings, HttpStatus.OK);
        } catch (Exception e) {
            logger.error("An error occurred when trying to retrieve the first page of productionPlannings, caused by {}", e);
            return new ResponseEntity<>(headers, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/prod_weekwork")
    public ResponseEntity<ProdWeekWork> findAllProdWeekWorks() {
        HttpHeaders headers = new HttpHeaders();
        try {
            ProdWeekWork prodWeekWorks = service.findAllProdWeekWorks(PRODUCTION_WEEK_WORK_INDEX, PRODUCTION_WEEK_WORK_TYPE);
            if (prodWeekWorks == null) {
                logger.warn("Your prodweekwork index is empty.");
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(prodWeekWorks, HttpStatus.OK);
        } catch (Exception e) {
            logger.error("An error occurred when trying to retrieve the first page of prodweekwork, caused by {}", e);
            return new ResponseEntity<>(headers, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<ProductionPlanning> findProdPlanningById(@PathVariable String id) {
        HttpHeaders headers = new HttpHeaders();
        try {
            ProductionPlanning productionPlanning = (ProductionPlanning) service.getById(id, PRODUCTION_PLANNING_INDEX, PRODUCTION_PLANNING_TYPE);
            if (productionPlanning == null) {
                logger.warn("ProductionPlanning with id {} is not found.");
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            logger.info("ProductionPlanning with id {} is retrieved.", productionPlanning.getId());
            return new ResponseEntity<>(productionPlanning, HttpStatus.OK);
        } catch (Exception e) {
            logger.error("An error occurred when trying to retrieve a ProductionPlanning with the id {}, caused by {}", id, e);
            return new ResponseEntity<>(headers, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping
    public ResponseEntity<ProductionPlanning> deleteProdPlanning(@RequestBody ProductionPlanning productionPlanning) {
        HttpHeaders headers = new HttpHeaders();
        try {
            service.delete(productionPlanning);
            logger.info("ProductionPlanning with id {} is deleted successfully.", productionPlanning.getId());
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            logger.error("An error occurred when trying to delete a productionPlanning with the id {}, caused by {}", productionPlanning.getId(), e);
            return new ResponseEntity<>(headers, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<ProductionPlanning> deleteProdPlanningById(@PathVariable String id) {
        HttpHeaders headers = new HttpHeaders();
        try {
            service.deleteById(PRODUCTION_PLANNING_INDEX, PRODUCTION_PLANNING_TYPE, id);
            logger.info("ProductionPlanning with id {} is deleted successfully.", id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            logger.error("An error occurred when trying to delete a ProductionPlanning with the id {}, caused by {}", id, e);
            return new ResponseEntity<>(headers, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "/search")
    public ResponseEntity<List<ProductionPlanning>> searchProdPlannings(@RequestBody Map<String, Object> searchCriteria, UriComponentsBuilder ucBuilder) {

        HttpHeaders headers = new HttpHeaders();
        try {
            List<ProductionPlanning> productionPlannings = service.searchEntities(PRODUCTION_PLANNING_INDEX, searchCriteria);
            logger.info("A productionPlannings search request is performed successfully.");
            return new ResponseEntity<List<ProductionPlanning>>(productionPlannings, headers, HttpStatus.CREATED);
        } catch (Exception e) {
            logger.error("An error occurred when trying to search for a ProductionPlanning, caused by {}", e);
            return new ResponseEntity<>(headers, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
