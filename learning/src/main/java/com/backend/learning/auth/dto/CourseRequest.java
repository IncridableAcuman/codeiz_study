package com.backend.learning.auth.dto;


import lombok.Data;

@Data
public class CourseRequest {
    private String title;
    private String description;
    private String courseImage;
    private Double price;
    private String category;
    private String videoUrl;
}
