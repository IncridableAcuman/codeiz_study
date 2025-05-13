package com.backend.learning.auth.dto;

import java.time.LocalDateTime;

import lombok.Data;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;



@Data
@RequiredArgsConstructor
@Getter
@Setter
public class ErrorResponse {
    private LocalDateTime timestamp;
    private int status;
    private String error;
    private String message;
    private String path;

    public ErrorResponse(LocalDateTime timestamp,int status,String error,String message,String path){
        this.timestamp=timestamp;
        this.status=status;
        this.error=error;
        this.message=message;
        this.path=path;
    }
}
