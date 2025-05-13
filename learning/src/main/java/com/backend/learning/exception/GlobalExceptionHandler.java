package com.backend.learning.exception;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.backend.learning.auth.dto.ErrorResponse;

@ControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {
    // not found
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleResourceNotFound(ResourceNotFoundException exception,WebRequest request){
        ErrorResponse response=new ErrorResponse(
            LocalDateTime.now(),
            HttpStatus.NOT_FOUND.value(),
            "Resource not found",
            exception.getMessage(),
            request.getDescription(false)
        );
        return new ResponseEntity<>(response,HttpStatus.NOT_FOUND);
    }
    // Internal Server Error
    @ExceptionHandler(CustomException.class)
    public ResponseEntity<ErrorResponse> handleServerException(CustomException exception,WebRequest request){
        ErrorResponse response=new ErrorResponse(
            LocalDateTime.now(),
            HttpStatus.INTERNAL_SERVER_ERROR.value(),
            "Internal Server Error",
            exception.getMessage(),
            request.getDescription(false)
        );
        return new ResponseEntity<>(response,HttpStatus.INTERNAL_SERVER_ERROR);
    }
    // bad request exception handler
    public ResponseEntity<ErrorResponse> handleBadRequestException(BadRequestExceptionHandler exceptionHandler,WebRequest request){
        ErrorResponse response=new ErrorResponse(
            LocalDateTime.now(),
            HttpStatus.BAD_REQUEST.value(),
            "Bad request",
            exceptionHandler.getMessage(),
            request.getDescription(false)
        );
        return new ResponseEntity<>(response,HttpStatus.BAD_REQUEST);
    }
}
