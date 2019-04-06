package com.cut.production.entities;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.data.elasticsearch.annotations.Document;

import java.util.List;

/**
 * Created by Ghazi Naceur on 06/04/2019
 * Email: ghazi.ennacer@gmail.com
 */
@Document(indexName = "weekly_work", type = "task")
public class WeekWork extends Entity{

    List<String> currentWeekTasks;
    List<String> nextWeekTasks;

    @JsonCreator
    public WeekWork(@JsonProperty(value = "currentWeekTasks") List<String> currentWeekTasks,
                    @JsonProperty(value = "nextWeekTasks") List<String> nextWeekTasks) {
        this.currentWeekTasks = currentWeekTasks;
        this.nextWeekTasks = nextWeekTasks;
    }

    // getters and setters are necessary for ES Object
    public List<String> getCurrentWeekTasks() {
        return currentWeekTasks;
    }

    public void setCurrentWeekTasks(List<String> currentWeekTasks) {
        this.currentWeekTasks = currentWeekTasks;
    }

    public List<String> getNextWeekTasks() {
        return nextWeekTasks;
    }

    public void setNextWeekTasks(List<String> nextWeekTasks) {
        this.nextWeekTasks = nextWeekTasks;
    }
}
