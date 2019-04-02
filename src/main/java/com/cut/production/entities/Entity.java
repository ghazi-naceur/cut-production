package com.cut.production.entities;

import org.springframework.data.annotation.Id;


public class Entity {

    @Id
    public String id;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}
