package com.cut.production.entities;


import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.data.elasticsearch.annotations.Document;

@Document(indexName = "logins", type = "login")
public class Login extends Entity{

    private String username;
    private String password;

    @JsonCreator
    public Login(@JsonProperty(value = "username") String username,
                 @JsonProperty(value = "password") String password) {
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
