package com.backend.learning.auth.service;

import org.springframework.http.ResponseCookie;
import org.springframework.stereotype.Service;

import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CookieService {
    public void addTokenToCookie(HttpServletResponse response,String refreshToken){
        ResponseCookie cookie=ResponseCookie.from("refreshToken", refreshToken)
            .httpOnly(true)
            .secure(false)
            .path("/")
            .maxAge(604800000)
            .build();
            response.addHeader("Set-Cookie", cookie.toString());
    }
}
