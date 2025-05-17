package com.backend.learning.auth.dto;

import com.backend.learning.auth.model.Category;

import lombok.Data;

@Data
public class CourseRequest {
    private String title;
    private String description;
    private String courseImage;
    private Double price;
    private Category category;
    private String videoUrl;
}
