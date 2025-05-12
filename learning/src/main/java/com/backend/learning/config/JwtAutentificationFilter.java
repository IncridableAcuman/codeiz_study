package com.backend.learning.config;

import java.io.IOException;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.backend.learning.auth.model.User;
import com.backend.learning.auth.repository.TokenRepository;
import com.backend.learning.auth.repository.UserRepository;
import com.backend.learning.auth.service.TokenService;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class JwtAutentificationFilter extends OncePerRequestFilter {
    private final TokenService tokenService;
    private final UserRepository userRepository;
    private final TokenRepository tokenRepository;

    @Override
    protected void doFilterInternal(
    @org.springframework.lang.NonNull HttpServletRequest request,
    @org.springframework.lang.NonNull HttpServletResponse response,
    @org.springframework.lang.NonNull FilterChain filterChain
    ) throws ServletException,IOException{

        final String authHeader=request.getHeader("Authorization");
        final String jwt;
        final String userEmail;

        if(authHeader==null || authHeader.isBlank() || !authHeader.startsWith("Bearer ")){
            filterChain.doFilter(request, response);
            return;
        }
        jwt=authHeader.substring(7);
        userEmail=tokenService.extractEmail(jwt);
        if(userEmail!=null && SecurityContextHolder.getContext().getAuthentication()==null){
            User user=userRepository.findByEmail(userEmail).orElse(null);

            boolean isTokenValid=tokenRepository.findByToken(jwt)
            .map(token->!token.isExpired() && !token.isRevoked())
            .orElse(false);

            if(user!=null && tokenService.isTokenValid(jwt, userEmail) && isTokenValid){
                UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(userEmail, null, user.getAuthorities());
                SecurityContextHolder.getContext().setAuthentication(authToken);
            }
        }
        filterChain.doFilter(request, response);
    }
}
