package com.backend.learning.auth.controller;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.learning.auth.dto.AuthRequest;
import com.backend.learning.auth.dto.AuthResponse;
import com.backend.learning.auth.dto.RegisterRequest;
import com.backend.learning.auth.service.AuthService;

import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;

    // register
    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@RequestBody RegisterRequest request,HttpServletResponse response){
        return ResponseEntity.ok(authService.register(request, response));
    }
    // login
    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody AuthRequest request,HttpServletResponse response){
        return ResponseEntity.ok(authService.login(request, response));
    }
    // refresh
    @GetMapping("/refresh")
    public ResponseEntity<AuthResponse> refresh(@RequestHeader("Authorization") String authorization,HttpServletResponse response){
        String refreshToken=authorization.substring(7);
        return ResponseEntity.ok(authService.refresh(refreshToken,response));
    }
    // logout
    @PostMapping("/logout")
    public ResponseEntity<String> logout(@RequestHeader("Authorization") String authorization,HttpServletResponse response){
        String refreshToken=authorization.substring(7);
        authService.logout(refreshToken);
        return ResponseEntity.ok("User logged out");
    }
    // forgot password;
    @PostMapping("/forgot-password")
    public ResponseEntity<String> forgotPassword(@RequestBody Map<String,String> request){
        return ResponseEntity.ok(authService.forgotPassword(request.get("email")));
    }
    // reset password
    @PutMapping("/reset-password")
    public ResponseEntity<String> resetPassword(@RequestBody Map<String,String> request){
        return ResponseEntity.ok(authService.resetPassword(request.get("password"), request.get("refreshToken")));
    }
}
