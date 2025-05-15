package com.backend.learning.auth.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.backend.learning.auth.dto.RegisterRequest;
import com.backend.learning.auth.model.Role;
import com.backend.learning.auth.model.User;
import com.backend.learning.auth.repository.UserRepository;
import com.backend.learning.exception.BadRequestExceptionHandler;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    // create user and save to database
    public User createUser(RegisterRequest request){
        User userData=new User();
        userData.setUsername(request.getUsername());
        userData.setEmail(request.getEmail());
        userData.setPassword(passwordEncoder.encode(request.getPassword()));
        userData.setRole(Role.USER);
        return userRepository.save(userData);
    }
    // find user from postgresql database
    public User findUser(String email){
        return userRepository.findByEmail(email).orElseThrow(()-> new RuntimeException("User not found"));
    }
    public void existUser(String email){
        if(userRepository.findByEmail(email).isPresent()){
            throw new BadRequestExceptionHandler("User already exist");
        }
    }
    public void matchesPassword(String password,String userPassword){
        if(!passwordEncoder.matches(password,userPassword)){
            throw new BadRequestExceptionHandler("Invalid password");
        }
    }
}
