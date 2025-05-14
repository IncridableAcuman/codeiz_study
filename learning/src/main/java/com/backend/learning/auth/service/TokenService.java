package com.backend.learning.auth.service;

import java.nio.charset.StandardCharsets;
import java.security.Key;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.security.Keys;

@Service
public class TokenService {
    @Value("${secret}")
    private String secretKey;

    @Value("${access_time}")
    private String accessTime;

    @Value("${refresh_time}")
    private String refreshTime;

    // key generatsiya qilish.
    public Key getSigningKey(){
        return Keys.hmacShaKeyFor(secretKey.getBytes(StandardCharsets.UTF_8));
    }
}
