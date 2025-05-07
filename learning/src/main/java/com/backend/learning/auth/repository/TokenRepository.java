package com.backend.learning.auth.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.learning.auth.model.Token;
import com.backend.learning.auth.model.User;

public interface TokenRepository extends JpaRepository<Token,Integer> {
    List<Token> findAllByUser(User user);
    Optional<Token> findByToken(String token);
}
