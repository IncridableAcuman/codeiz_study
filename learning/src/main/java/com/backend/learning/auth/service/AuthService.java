package com.backend.learning.auth.service;


import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
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
import com.backend.learning.exception.BadRequestExceptionHandler;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthService {
    // 
    private final UserRepository userRepository;
    private final TokenRepository tokenRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final TokenService tokenService;
    private final MailService mailService;
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
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        User user=userRepository.findByEmail(request.getEmail()).orElseThrow(()-> new RuntimeException("User not found"));
        if(!passwordEncoder.matches(request.getPassword(),user.getPassword())){
            throw new RuntimeException("Password incorrect!");
        }
        String jwt=tokenService.generateToken(user.getEmail());
        Token token=new Token();
        token.setToken(jwt);
        token.setUser(user);
        tokenRepository.save(token);

        return new AuthResponse(jwt);
    }
    // refresh 
    public AuthResponse refresh(String token){
        if(token.isEmpty() || token==null){
            throw new RuntimeException("Token not found or null");
        }
        String email=tokenService.extractEmail(token);
        if(email==null) throw new RuntimeException("Invalid token");

        User user=userRepository.findByEmail(email).orElseThrow(()-> new RuntimeException("User not found"));
        Token token2=tokenRepository.findByToken(token).orElseThrow(()->new RuntimeException("Token not found"));
        token2.setRevoked(true);
        tokenRepository.save(token2);
        String newToken=tokenService.generateToken(email);
        Token token3=new Token();
        token3.setToken(newToken);
        token3.setUser(user);
        tokenRepository.save(token3);
        return new AuthResponse(newToken);
    }
    // sign Out 
    public void logout(String token){
        Token token2=tokenRepository.findByToken(token).orElseThrow(()->new RuntimeException("Token not found"));
        if(token2.isExpired() || token2.isRevoked()){
            throw new BadRequestExceptionHandler("Token already expired or revoked");
        }
        token2.setRevoked(true);
        tokenRepository.save(token2);
    }
    // forgot password
    public String forgotPassword(String email){
        if(email==null || email.isEmpty()){
            throw new RuntimeException("Email should be required");
        }
        User user=userRepository.findByEmail(email).orElseThrow(()->new RuntimeException("User not found"));
        String token=tokenService.generateToken(email);
        String resetLink="http://localhost:5173/reset-password?token="+token;
        mailService.sendMail(user.getEmail(), "Forgot Password with codeiz_study", "CLick to this link for your account activation:"+resetLink);
        return "Reset password link sent to your email";
    }
    // reset password
    public String resetPassword(String password,String token){
        String email=tokenService.extractEmail(token);
        User user=userRepository.findByEmail(email).orElseThrow(()->new RuntimeException("User not found"));
        user.setPassword(passwordEncoder.encode(password));
        userRepository.save(user);

        tokenRepository.findByToken(token).ifPresent(t->{
           t.setRevoked(true);
            tokenRepository.save(t);
        });
        return "Password reset successfully";
    }
}
