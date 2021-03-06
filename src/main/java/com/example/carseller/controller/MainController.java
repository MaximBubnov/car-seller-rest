package com.example.carseller.controller;

import com.example.carseller.domain.User;
import com.example.carseller.repo.CarRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.HashMap;

@Controller
@RequestMapping("/")
public class MainController {


    private final CarRepo carRepo;

    @Value("${spring.profiles.active}")
    private String profile;

    @Autowired
    public MainController(CarRepo carRepo) {
        this.carRepo = carRepo;
    }

    @GetMapping
    public String main(Model model, @AuthenticationPrincipal User user) {

        HashMap<Object, Object> data = new HashMap<>();

        data.put("profile", user);
        data.put("cars", carRepo.findAll());

        model.addAttribute("frontendData", data);
        model.addAttribute("isDevMode", "dev".equals(profile));
        return "index";
    }
}
