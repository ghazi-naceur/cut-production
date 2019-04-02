package com.cut.production.controllers;


import com.cut.production.entities.User;
import com.cut.production.services.LoginService;
import com.cut.production.services.UserService;
import com.cut.production.utils.Constants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import com.cut.production.entities.Login;

@CrossOrigin(origins = "http://localhost:4200")
@Controller
@RequestMapping(value = "/production")
public class LoginController {

    @Autowired
    private LoginService loginService;

    @PostMapping(value = "/login", headers = "Accept=application/json")
    @ResponseBody
    public ResponseEntity authenticateTheUser(@RequestBody Login login) {
        System.out.println("Searching for User with the email : " + login);
        User user = loginService.authenticate(Constants.USER_INDEX, Constants.USER_TYPE,
                login.getUsername(), login.getPassword());
        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        } else {
            return ResponseEntity.status(HttpStatus.OK).body(user);
        }

    }
}
