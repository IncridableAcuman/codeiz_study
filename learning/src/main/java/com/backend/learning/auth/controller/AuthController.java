package com.backend.learning.auth.controller;

import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<AuthResponse> register(@RequestBody RegisterRequest request){
        return ResponseEntity.ok(authService.register(request));
    }
    // login
    public ResponseEntity<AuthResponse> logni(@RequestBody AuthRequest request){
        return ResponseEntity.ok(authService.login(request));
    }
    // refresh
    public ResponseEntity<AuthResponse> refresh(String token){
        return ResponseEntity.ok(authService.refresh(token));
    }
    // logout
    public ResponseEntity<String> logout(String token){
        authService.logout(token);
        return ResponseEntity.ok("User logged out");
    }
    // forgot password
    public ResponseEntity<String> forgotPassword(@RequestBody String email){
        return ResponseEntity.ok(authService.forgotPassword(email));
    }
    // reset password
    public ResponseEntity<String> resetPassword(@RequestBody String password,String token){
        return ResponseEntity.ok(authService.resetPassword(password, token));
    }
}
