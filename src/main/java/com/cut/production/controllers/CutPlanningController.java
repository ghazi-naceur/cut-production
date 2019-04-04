package com.cut.production.controllers;


import com.cut.production.entities.CutPlanning;
import com.cut.production.services.CutPlanningService;
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

import static com.cut.production.utils.Constants.CUT_PLANNING_INDEX;
import static com.cut.production.utils.Constants.CUT_PLANNING_TYPE;

@CrossOrigin(origins = "http://localhost:4200")
@Controller
@RequestMapping(value = "/cut_planning")
public class CutPlanningController {


    private static Logger logger = LoggerFactory.getLogger(CutPlanningController.class.getName());

    @Autowired
    private CutPlanningService service;

    @PostMapping
    public ResponseEntity<Void> createCutPlanning(@RequestBody CutPlanning cutPlanning, UriComponentsBuilder ucBuilder) {

        HttpHeaders headers = new HttpHeaders();
        try {
            // no such index exception
            if (service.isEntityExist(CUT_PLANNING_INDEX, CUT_PLANNING_TYPE, cutPlanning.toMap())) {
                logger.warn("This cutPlanning is already created {}", cutPlanning.toString());
                return new ResponseEntity<>(HttpStatus.CONFLICT);
            }
            service.create(cutPlanning);
            headers.setLocation(ucBuilder.path("/{id}").buildAndExpand(cutPlanning.getId()).toUri());
            logger.info("This cutPlanning is created successfully {}", cutPlanning.toString());
            return new ResponseEntity<>(headers, HttpStatus.CREATED);
        } catch (Exception e) {
            logger.error("An error occurred when trying to create an cutPlanning {}, caused by {}", cutPlanning.toString(), e);
            return new ResponseEntity<>(headers, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping
    public ResponseEntity<Void> updateCutPlanning(@RequestBody CutPlanning cutPlanning) {
        HttpHeaders headers = new HttpHeaders();
        try {
            service.update(cutPlanning, CUT_PLANNING_INDEX, CUT_PLANNING_TYPE, cutPlanning.getId());
            logger.info("This cutPlanning is updated successfully {}", cutPlanning.toString());
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            logger.error("An error occurred when trying to update a cutPlanning {}, caused by {}", cutPlanning.toString(), e);
            return new ResponseEntity<>(headers, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping()
    public ResponseEntity<List<CutPlanning>> findAllCutPlannings() {
        HttpHeaders headers = new HttpHeaders();
        try {
            List<CutPlanning> cutPlannings = service.findAllEntities(CUT_PLANNING_INDEX, CUT_PLANNING_TYPE);
            if (cutPlannings.isEmpty()) {
                logger.warn("Your cutPlannings index is empty.");
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(cutPlannings, HttpStatus.OK);
        } catch (Exception e) {
            logger.error("An error occurred when trying to retrieve the first page of cutPlannings, caused by {}", e);
            return new ResponseEntity<>(headers, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<CutPlanning> findCutPlanningById(@PathVariable String id) {
        HttpHeaders headers = new HttpHeaders();
        try {
            CutPlanning cutPlanning = (CutPlanning) service.getById(id, CUT_PLANNING_INDEX, CUT_PLANNING_TYPE);
            if (cutPlanning == null) {
                logger.warn("CutPlanning with id {} is not found.");
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            logger.info("CutPlanning with id {} is retrieved.", cutPlanning.getId());
            return new ResponseEntity<>(cutPlanning, HttpStatus.OK);
        } catch (Exception e) {
            logger.error("An error occurred when trying to retrieve a CutPlanning with the id {}, caused by {}", id, e);
            return new ResponseEntity<>(headers, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping
    public ResponseEntity<CutPlanning> deleteCutPlanning(@RequestBody CutPlanning cutPlanning) {
        HttpHeaders headers = new HttpHeaders();
        try {
            service.delete(cutPlanning);
            logger.info("CutPlanning with id {} is deleted successfully.", cutPlanning.getId());
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            logger.error("An error occurred when trying to delete a cutPlanning with the id {}, caused by {}", cutPlanning.getId(), e);
            return new ResponseEntity<>(headers, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<CutPlanning> deleteCutPlanningById(@PathVariable String id) {
        HttpHeaders headers = new HttpHeaders();
        try {
            service.deleteById(CUT_PLANNING_INDEX, CUT_PLANNING_TYPE, id);
            logger.info("CutPlanning with id {} is deleted successfully.", id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            logger.error("An error occurred when trying to delete a CutPlanning with the id {}, caused by {}", id, e);
            return new ResponseEntity<>(headers, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "/search")
    public ResponseEntity<List<CutPlanning>> searchCutPlannings(@RequestBody Map<String, Object> searchCriteria, UriComponentsBuilder ucBuilder) {

        HttpHeaders headers = new HttpHeaders();
        try {
            List<CutPlanning> cutPlannings = service.searchEntities(CUT_PLANNING_INDEX, searchCriteria);
            logger.info("A cutPlannings search request is performed successfully.");
            return new ResponseEntity<List<CutPlanning>>(cutPlannings, headers, HttpStatus.CREATED);
        } catch (Exception e) {
            logger.error("An error occurred when trying to search for a CutPlanning, caused by {}", e);
            return new ResponseEntity<>(headers, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
