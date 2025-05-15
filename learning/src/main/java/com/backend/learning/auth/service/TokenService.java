package com.backend.learning.auth.service;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.backend.learning.auth.model.User;
import com.backend.learning.exception.BadRequestExceptionHandler;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

@Service
public class TokenService {
    @Value("${secret}")
    private String secretKey;

    @Value("${access_time}")
    private long accessTime;

    @Value("${refresh_time}")
    private long refreshTime;


    // key generatsiya qilish.
    public Key getSigningKey(){
        secretKey=Base64.getEncoder().encodeToString(secretKey.getBytes(StandardCharsets.UTF_8));
        return Keys.hmacShaKeyFor(secretKey.getBytes(StandardCharsets.UTF_8));
    }
    // generate token
    public String generateToken(User user,long expirationTime){
        return Jwts
                    .builder()
                    .setSubject(user.getEmail())
                    .claim("username", user.getUsername())
                    .claim("role", user.getRole())
                    .setIssuedAt(new Date())
                    .setExpiration(new Date(System.currentTimeMillis()+expirationTime))
                    .signWith(getSigningKey(),SignatureAlgorithm.HS256)
                    .compact();
    }
    // generate access and refresh tokens
    public Map<String,String> generateTokens(User user){
        Map<String,String> tokens=new HashMap<>();
        tokens.put("accessToken", generateToken(user, accessTime));
        tokens.put("refreshToken", generateToken(user, refreshTime));
        return tokens;
    }
    // validate token
    public boolean validateToken(String token){
        try {
           Jwts
                .parserBuilder()
                .setSigningKey(getSigningKey())
                .build()
                .parseClaimsJws(token);
            return true; 
        } catch (Exception e) {
            return false;
        }
    }
    // extract email
    public String extractEmail(String token){
        return
                Jwts
                    .parserBuilder()
                    .setSigningKey(getSigningKey())
                    .build()
                    .parseClaimsJws(token)
                    .getBody()
                    .getSubject();
    }
    // token saving to database
    // public Token createToken(Token token,User user){
    //     Token token2=new Token();
    //     token.setUser(user);
    //     token.setRefreshToken(secretKey);
    // }

    // isToken
    public void existToken(String refreshToken){
        if(refreshToken==null || refreshToken.isEmpty()){
            throw new BadRequestExceptionHandler("Token is missing!");
        }
    }
}
