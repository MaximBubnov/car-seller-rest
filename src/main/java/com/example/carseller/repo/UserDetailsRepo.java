package com.example.carseller.repo;

import com.example.carseller.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDetailsRepo  extends JpaRepository<User, String>{
}
