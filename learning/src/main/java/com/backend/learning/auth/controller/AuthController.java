package com.backend.learning.auth.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.learning.auth.dto.AuthRequest;
import com.backend.learning.auth.dto.AuthResponse;
import com.backend.learning.auth.dto.RegisterRequest;
import com.backend.learning.auth.service.AuthService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;

    // register
    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@RequestBody RegisterRequest request){
        return ResponseEntity.ok(authService.register(request));
    }
    // login
    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody AuthRequest request){
        return ResponseEntity.ok(authService.login(request));
    }
    // refresh
    @GetMapping("/refresh")
    public ResponseEntity<AuthResponse> refresh(String token){
        return ResponseEntity.ok(authService.refresh(token));
    }
    // logout
    @PostMapping("/logout")
    public ResponseEntity<String> logout(String token){
        authService.logout(token);
        return ResponseEntity.ok("User logged out");
    }
    // forgot password
    @PostMapping("/forgot-password")
    public ResponseEntity<String> forgotPassword(@RequestBody String email){
        return ResponseEntity.ok(authService.forgotPassword(email));
    }
    // reset password
    @PutMapping("/reset-password")
    public ResponseEntity<String> resetPassword(@RequestBody String password,String token){
        return ResponseEntity.ok(authService.resetPassword(password, token));
    }
}
