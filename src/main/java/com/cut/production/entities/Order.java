package com.cut.production.entities;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.data.elasticsearch.annotations.Document;

import java.util.HashMap;
import java.util.Map;


@Document(indexName = "orders", type = "order")
public class Order extends Entity {

    private String client;
    private String model;
    private String article;
    private double minConfection;
    private double minCut;

    @JsonCreator
    public Order(@JsonProperty(value = "client") String client,
                 @JsonProperty(value = "model") String model,
                 @JsonProperty(value = "article") String article,
                 @JsonProperty(value = "minConfection") double minConfection,
                 @JsonProperty(value = "minCut") double minCut) {
        this.client = client;
        this.model = model;
        this.article = article;
        this.minConfection = minConfection;
        this.minCut = minCut;
    }

    public String getClient() {
        return client;
    }

    public void setClient(String client) {
        this.client = client;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getArticle() {
        return article;
    }

    public void setArticle(String article) {
        this.article = article;
    }

    public double getMinConfection() {
        return minConfection;
    }

    public void setMinConfection(float minConfection) {
        this.minConfection = minConfection;
    }

    public double getMinCut() {
        return minCut;
    }

    public void setMinCut(float minCut) {
        this.minCut = minCut;
    }

    @Override
    public String toString() {
        return "Order{" +
                "client='" + client + '\'' +
                ", model='" + model + '\'' +
                ", article='" + article + '\'' +
                ", minConfection=" + minConfection +
                ", minCut=" + minCut +
                ", id='" + id + '\'' +
                '}';
    }

    public Map<String, Object> toMap() {
        Map<String, Object> order = new HashMap<>();
        order.put("client", this.client);
        order.put("article", this.article);
        order.put("model", this.model);
        order.put("minConfection", this.minConfection);
        order.put("minCut", this.minCut);
        order.put("id", this.id);
        return order;
    }
}
