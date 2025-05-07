package com.backend.learning.DTO;

import com.backend.learning.Roles.AuthRole;

import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class AuthResponse {
    private long id;
    private String username;
    private String email;
    private AuthRole authRole;

    public AuthResponse(Long id,String username,String email,AuthRole authRole){
        this.id=id;
        this.username=username;
        this.email=email;
        this.authRole=authRole;
    }
}
