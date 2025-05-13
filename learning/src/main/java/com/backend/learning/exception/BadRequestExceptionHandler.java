package com.backend.learning.exception;

public class BadRequestExceptionHandler extends RuntimeException {
    public BadRequestExceptionHandler(String message){
        super(message);
    }
}
