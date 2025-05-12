package com.backend.learning.auth.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.backend.learning.auth.model.User;
import com.backend.learning.auth.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    // create user and save to database
    public User createUser(User user){
        User userData=new User();
        userData.setUsername(user.getUsername());
        userData.setEmail(user.getEmail());
        userData.setPassword(passwordEncoder.encode(user.getPassword()));
        userData.setRole(user.getRole());
        return userRepository.save(user);
    }
    // find user from postgresql database
    public User findUser(String email){
        return userRepository.findByEmail(email).orElseThrow(()-> new RuntimeException("User not found"));
    }
}
