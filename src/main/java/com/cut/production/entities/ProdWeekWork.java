package com.cut.production.entities;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.data.elasticsearch.annotations.Document;

import java.util.List;

/**
 * Created by Ghazi Naceur on 20/04/2019
 * Email: ghazi.ennacer@gmail.com
 */
@Document(indexName = "prod_weekly_work", type = "prod_task")
public class ProdWeekWork extends Entity{

    List<String> prodCurrentWeekTasks;
    List<String> prodNextWeekTasks;

    @JsonCreator
    public ProdWeekWork(@JsonProperty(value = "prodCurrentWeekTasks") List<String> prodCurrentWeekTasks,
                    @JsonProperty(value = "prodNextWeekTasks") List<String> prodNextWeekTasks) {
        this.prodCurrentWeekTasks = prodCurrentWeekTasks;
        this.prodNextWeekTasks = prodNextWeekTasks;
    }

    // getters and setters are necessary for ES Object

    public List<String> getProdCurrentWeekTasks() {
        return prodCurrentWeekTasks;
    }

    public void setProdCurrentWeekTasks(List<String> prodCurrentWeekTasks) {
        this.prodCurrentWeekTasks = prodCurrentWeekTasks;
    }

    public List<String> getProdNextWeekTasks() {
        return prodNextWeekTasks;
    }

    public void setProdNextWeekTasks(List<String> prodNextWeekTasks) {
        this.prodNextWeekTasks = prodNextWeekTasks;
    }
}
