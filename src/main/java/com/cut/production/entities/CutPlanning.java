package com.cut.production.entities;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.data.elasticsearch.annotations.Document;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Document(indexName = "cut_plannings", type = "cut_planning")
public class CutPlanning extends Entity {

    private Date exportDate;
    private Integer planningWeek;
    private String client;
    private String model;
    private String article;
    private String commandNumber;
    private Integer quantity;
    private Integer efficiency; // Rendement
    private Integer effective; // effectif
    private Integer absenteeismRate;

    @JsonCreator
    public CutPlanning(@JsonProperty(value = "exportDate") Date exportDate,
                       @JsonProperty(value = "planningWeek") Integer planningWeek,
                       @JsonProperty(value = "client") String client,
                       @JsonProperty(value = "model") String model,
                       @JsonProperty(value = "article") String article,
                       @JsonProperty(value = "commandNumber") String commandNumber,
                       @JsonProperty(value = "quantity") Integer quantity,
                       @JsonProperty(value = "efficiency") Integer efficiency,
                       @JsonProperty(value = "effective") Integer effective,
                       @JsonProperty(value = "absenteeismRate") Integer absenteeismRate) {
        this.exportDate = exportDate;
        this.planningWeek = planningWeek;
        this.client = client;
        this.model = model;
        this.article = article;
        this.commandNumber = commandNumber;
        this.quantity = quantity;
        this.efficiency = efficiency;
        this.effective = effective;
        this.absenteeismRate = absenteeismRate;
    }

    public Date getExportDate() {
        return exportDate;
    }

    public void setExportDate(Date exportDate) {
        this.exportDate = exportDate;
    }

    public Integer getPlanningWeek() {
        return planningWeek;
    }

    public void setPlanningWeek(Integer planningWeek) {
        this.planningWeek = planningWeek;
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

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public double getEfficiency() {
        return efficiency;
    }

    public void setEfficiency(Integer efficiency) {
        this.efficiency = efficiency;
    }

    public Integer getEffective() {
        return effective;
    }

    public void setEffective(Integer effective) {
        this.effective = effective;
    }

    public Integer getAbsenteeismRate() {
        return absenteeismRate;
    }

    public void setAbsenteeismRate(Integer absenteeismRate) {
        this.absenteeismRate = absenteeismRate;
    }

    public String getCommandNumber() {
        return commandNumber;
    }

    public void setCommandNumber(String commandNumber) {
        this.commandNumber = commandNumber;
    }

    @Override
    public String toString() {
        return "CutPlanning{" +
                "exportDate=" + exportDate +
                ", planningWeek=" + planningWeek +
                ", client='" + client + '\'' +
                ", model='" + model + '\'' +
                ", article='" + article + '\'' +
                ", commandNumber='" + commandNumber + '\'' +
                ", quantity=" + quantity +
                ", efficiency=" + efficiency +
                ", effective=" + effective +
                ", absenteeismRate=" + absenteeismRate +
                ", id='" + id + '\'' +
                '}';
    }

    public Map<String, Object> toMap() {
        Map<String, Object> cutPlanning = new HashMap<>();
        cutPlanning.put("exportDate", this.exportDate);
        cutPlanning.put("planningWeek", this.planningWeek);
        cutPlanning.put("client", this.client);
        cutPlanning.put("model", this.model);
        cutPlanning.put("article", this.article);
        cutPlanning.put("commandNumber", this.commandNumber);
        cutPlanning.put("quantity", this.quantity);
        cutPlanning.put("efficiency", this.efficiency);
        cutPlanning.put("effective", this.effective);
        cutPlanning.put("absenteeismRate", this.absenteeismRate);
        cutPlanning.put("id", this.id);
        return cutPlanning;
    }
}
