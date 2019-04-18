package com.cut.production.services;

import com.cut.production.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class LoginService {

    public List<User> users;

    @Autowired
    private UserService service;

    public User authenticate(String index, String type, String username, String password) {
        User u = null;
        users = service.findAllEntities(index, type);
        for (User user : users) {
            if (user.getUsername().equals(username)
                    && user.getPassword().equals(password)) {
                System.out.println("This user exists already ");
                u = user;
                break;
            }
        }
        return u;
    }
}
