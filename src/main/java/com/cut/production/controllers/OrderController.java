package com.cut.production.controllers;

import com.cut.production.entities.Order;
import com.cut.production.services.OrderService;
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

import static com.cut.production.utils.Constants.ORDER_INDEX;
import static com.cut.production.utils.Constants.ORDER_TYPE;


@CrossOrigin(origins = "http://localhost:4200")
@Controller
@RequestMapping(value = "/orders")
public class OrderController {

    private static Logger logger = LoggerFactory.getLogger(OrderController.class.getName());

    @Autowired
    private OrderService service;

    @PostMapping
    public ResponseEntity<Void> createOrder(@RequestBody Order order, UriComponentsBuilder ucBuilder) {

        HttpHeaders headers = new HttpHeaders();
        try {
            if (service.isEntityExist(ORDER_INDEX, ORDER_TYPE, order.toMap())) {
                logger.warn("This order is already created {}", order.toString());
                return new ResponseEntity<>(HttpStatus.CONFLICT);
            }
            service.create(order);
            headers.setLocation(ucBuilder.path("/{id}").buildAndExpand(order.getId()).toUri());
            logger.info("This order is created successfully {}", order.toString());
            return new ResponseEntity<>(headers, HttpStatus.CREATED);
        } catch (Exception e) {
            logger.error("An error occurred when trying to create an order {}, caused by {}", order.toString(), e);
            return new ResponseEntity<>(headers, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping
    public ResponseEntity<Void> updateOrder(@RequestBody Order order) {
        HttpHeaders headers = new HttpHeaders();
        try {
            service.update(order, ORDER_INDEX, ORDER_TYPE, order.getId());
            logger.info("This order is updated successfully {}", order.toString());
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            logger.error("An error occurred when trying to update a order {}, caused by {}", order.toString(), e);
            return new ResponseEntity<>(headers, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping()
    public ResponseEntity<List<Order>> findAllOrders() {
        HttpHeaders headers = new HttpHeaders();
        try {
            List<Order> orders = service.findAllEntities(ORDER_INDEX, ORDER_TYPE);
            if (orders.isEmpty()) {
                logger.warn("Your orders index is empty.");
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(orders, HttpStatus.OK);
        } catch (Exception e) {
            logger.error("An error occurred when trying to retrieve the first page of orders, caused by {}", e);
            return new ResponseEntity<>(headers, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Order> findOrderById(@PathVariable String id) {
        HttpHeaders headers = new HttpHeaders();
        try {
            Order order = (Order) service.getById(id, ORDER_INDEX, ORDER_TYPE);
            if (order == null) {
                logger.warn("Order with id {} is not found.");
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            logger.info("Order with id {} is retrieved.", order.getId());
            return new ResponseEntity<>(order, HttpStatus.OK);
        } catch (Exception e) {
            logger.error("An error occurred when trying to retrieve a order with the id {}, caused by {}", id, e);
            return new ResponseEntity<>(headers, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping
    public ResponseEntity<Order> deleteOrder(@RequestBody Order order) {
        HttpHeaders headers = new HttpHeaders();
        try {
            service.delete(order);
            logger.info("Order with id {} is deleted successfully.", order.getId());
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            logger.error("An error occurred when trying to delete a order with the id {}, caused by {}", order.getId(), e);
            return new ResponseEntity<>(headers, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Order> deleteOrderById(@PathVariable String id) {
        HttpHeaders headers = new HttpHeaders();
        try {
            service.deleteById(ORDER_INDEX, ORDER_TYPE, id);
            logger.info("Order with id {} is deleted successfully.", id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            logger.error("An error occurred when trying to delete a order with the id {}, caused by {}", id, e);
            return new ResponseEntity<>(headers, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "/search")
    public ResponseEntity<List<Order>> searchOrders(@RequestBody Map<String, Object> searchCriteria, UriComponentsBuilder ucBuilder) {

        HttpHeaders headers = new HttpHeaders();
        try {
            List<Order> orders = service.searchOrders(ORDER_INDEX, searchCriteria);
            logger.info("A orders search request is performed successfully.");
            return new ResponseEntity<List<Order>>(orders, headers, HttpStatus.CREATED);
        } catch (Exception e) {
            logger.error("An error occurred when trying to search for a order, caused by {}", e);
            return new ResponseEntity<>(headers, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
