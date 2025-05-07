package com.backend.learning.auth.service;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.backend.learning.auth.dto.AuthRequest;
import com.backend.learning.auth.dto.AuthResponse;
import com.backend.learning.auth.dto.RegisterRequest;
import com.backend.learning.auth.model.Role;
import com.backend.learning.auth.model.Token;
import com.backend.learning.auth.model.User;
import com.backend.learning.auth.repository.TokenRepository;
import com.backend.learning.auth.repository.UserRepository;

import lombok.RequiredArgsConstructor;
import lombok.var;

@Service
@RequiredArgsConstructor
public class AuthService {
    // 
    private final UserRepository userRepository;
    private final TokenRepository tokenRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final TokenService tokenService;
    // user sign Up
    public AuthResponse register(RegisterRequest request){
        User user=new User();
        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole(Role.USER);
        userRepository.save(user);

        String jwt=tokenService.generateToken(request.getEmail());
        Token token=new Token();
        token.setToken(jwt);
        token.setUser(user);
        tokenRepository.save(token);

        return new AuthResponse(jwt);
    }
    // user sign In
    public AuthResponse login(AuthRequest request){

    }
    // refresh 
    public AuthResponse refresh(String token){

    }
    // sign Out 
    public void logout(String token){

    }
    // forgot password
    public String forgotPassword(String email){

    }
    // reset password
    public String resetPassword(String password,String token){
        
    }
}
