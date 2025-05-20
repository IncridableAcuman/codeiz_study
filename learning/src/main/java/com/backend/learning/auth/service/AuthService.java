package com.backend.learning.auth.service;


import java.sql.Date;
import org.springframework.stereotype.Service;

import com.backend.learning.auth.dto.AuthRequest;
import com.backend.learning.auth.dto.AuthResponse;
import com.backend.learning.auth.dto.RegisterRequest;
import com.backend.learning.auth.model.Token;
import com.backend.learning.auth.model.User;
import com.backend.learning.auth.repository.TokenRepository;
import com.backend.learning.exception.BadRequestExceptionHandler;
import com.backend.learning.exception.ResourceNotFoundException;

import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthService {
    // 
    private final TokenRepository tokenRepository;
    private final TokenService tokenService;
    private final MailService mailService;
    private final CookieService cookieService;
    private final UserService userService;
    private static final long accessTime=900000;

    private static final long refreshTime=604800000;

    // user sign Up
    public AuthResponse register(RegisterRequest request,HttpServletResponse response){
        userService.existUser(request.getEmail());
        User user=userService.createUser(request);
        userService.matchesPassword(request.getPassword(), user.getPassword());
        String refreshToken=tokenService.generateToken(user, refreshTime);
        Token token=new Token();
        token.setUser(user);
        token.setRefreshToken(refreshToken);
        token.setExpiryDate(new Date(System.currentTimeMillis()+refreshTime));
        tokenRepository.save(token);
        // cookie
        cookieService.addTokenToCookie(response, refreshToken);
        return new AuthResponse(user.getId(),user.getUsername(),
        user.getEmail(),user.getRole(),tokenService.generateToken(user, accessTime),
        refreshToken);
    }
    // user login
    public AuthResponse login(AuthRequest request,HttpServletResponse response){
        User user=userService.findUser(request.getEmail());
        userService.matchesPassword(request.getPassword(), user.getPassword());
        String accessToken=tokenService.generateToken(user, accessTime);
        Token token=tokenRepository.findByUser(user).orElseGet(()->{
            Token token1=new Token();
            token1.setUser(user);
            token1.setRefreshToken(tokenService.generateToken(user, refreshTime));
            token1.setExpiryDate(new Date(System.currentTimeMillis()+refreshTime));
            return tokenRepository.save(token1);
        });
        cookieService.addTokenToCookie(response, token.getRefreshToken());
        return new AuthResponse(user.getId(),
        user.getUsername(),user.getEmail(),
        user.getRole(),accessToken,
        token.getRefreshToken());
    }
    // refresh
    public AuthResponse refresh(String refreshToken,HttpServletResponse response){
        tokenService.existToken(refreshToken);
        if(!tokenService.validateToken(refreshToken)){
            throw new BadRequestExceptionHandler("Invalid token");
        }
        String email;
        try {
            email=tokenService.extractEmail(refreshToken);
        } catch (Exception e) {
            throw new BadRequestExceptionHandler("Invalid token");
        }
        User user=userService.findUser(email);
        Token token=tokenRepository.findByUser(user).orElseThrow(()->new ResourceNotFoundException("User not found"));
        if(!token.getRefreshToken().equals(refreshToken)){
            throw new BadRequestExceptionHandler("Token is mismatch");
        }
        String accessTokenNew=tokenService.generateToken(user, accessTime);
        // token.setUser(user);
        // token.setRefreshToken(refreshToken);
        // token.setExpiryDate(new Date(System.currentTimeMillis()+refreshTime));
        // tokenRepository.save(token);
        cookieService.addTokenToCookie(response, refreshToken);
        return new AuthResponse(user.getId(),
        user.getUsername(),user.getEmail(),
        user.getRole(),accessTokenNew,
        refreshToken);
    }
    public void logout(String refreshToken){
        tokenRepository.findByRefreshToken(refreshToken).ifPresent(tokenRepository::delete);
    }
    // fogot password
    public String forgotPassword(String email){
        if(email==null || email.isEmpty()){
            throw new BadRequestExceptionHandler("Email is error or not requied");
        }
        User user=userService.findUser(email);
        String refreshToken=tokenService.generateToken(user, accessTime);
        String resetLink="http://localhost:5173/reset-password?refreshToken=";
        mailService.sendMail(user.getEmail(), "Forgot Password", resetLink+refreshToken);
        return "Reset Password link sent to your email";
    }
    // reset password
    public String resetPassword(String password,String refreshToken){
        if(password==null || password.isEmpty() || refreshToken==null || refreshToken.isEmpty()){
            throw new BadRequestExceptionHandler("All fields are required");
        }
        
        boolean userPayload=tokenService.validateToken(refreshToken);
        if(!userPayload){
            throw new BadRequestExceptionHandler("Invalid token");
        }
        Token token=tokenService.findToken(refreshToken);
        User user=token.getUser();
        userService.updatUser(user, password);
        return "Password reseted successfully";
    }
}
