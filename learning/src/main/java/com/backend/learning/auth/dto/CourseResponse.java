package com.backend.learning.auth.dto;

import com.backend.learning.auth.model.Category;

import lombok.Data;

@Data
public class CourseResponse {
    private Long id;
    private String title;
    private String description;
    private String courseImage;
    private Double price;
    private Category category;
    private String videoUrl;

    public CourseResponse(Long id,String title,String description,String courseImage,Double price,Category category,String videoUrl){
        this.id=id;
        this.title=title;
        this.description=description;
        this.courseImage=courseImage;
        this.price=price;
        this.category=category;
        this.videoUrl=videoUrl;
    }
}
