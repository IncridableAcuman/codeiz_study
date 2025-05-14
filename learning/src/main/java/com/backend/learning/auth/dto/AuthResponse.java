package com.backend.learning.auth.dto;

import com.backend.learning.auth.model.Role;

import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class AuthResponse {
    private Long id;
    private String username;
    private String email;
    private Role role;
    private String accessToken;
    private String refreshToken;

    public AuthResponse(Long id,String username,String email,Role role,String accessToken,String refreshToken){
        this.id=id;
        this.username=username;
        this.email=email;
        this.role=role;
        this.accessToken=accessToken;
        this.refreshToken=refreshToken;
    }
}
