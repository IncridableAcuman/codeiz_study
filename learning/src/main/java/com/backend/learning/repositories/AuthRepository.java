package com.backend.learning.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.learning.models.User;

public interface AuthRepository extends JpaRepository<User,Long> {
    Optional<User> findByEmail(String email);
}
