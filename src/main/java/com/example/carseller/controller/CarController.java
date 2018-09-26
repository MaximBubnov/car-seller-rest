package com.example.carseller.controller;

import com.example.carseller.domain.Car;
import com.example.carseller.domain.Views;
import com.example.carseller.repo.CarRepo;
import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("cars")
public class CarController {

    private final CarRepo carRepo;

    @Autowired
    public CarController(CarRepo carRepo) {
        this.carRepo = carRepo;
    }

    @GetMapping
    @JsonView(Views.withoutDate.class)
    public List<Car> list() {
        return carRepo.findAll();
    }

    @GetMapping("{id}")
    @JsonView(Views.fullMess.class)
    public Car car(@PathVariable("id") Car car) {
        return car;
    }


    @PostMapping
    public Car createCar(@RequestBody Car car) {
        car.setCreationDate(LocalDateTime.now());
        return carRepo.save(car);
    }

    @PutMapping("{id}")
    public Car updateCar(@PathVariable("id") Car carFromDb,
                         @RequestBody Car car) {

        BeanUtils.copyProperties(car, carFromDb, "id");

        return carRepo.save(carFromDb);
    }

    @DeleteMapping("{id}")
    public void deleteCar(@PathVariable("id") Car car) {

        carRepo.delete(car);
    }
}
