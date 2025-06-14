package com.backend.learning.auth.dto;

import lombok.Data;

@Data
public class CourseResponse {
    private Long id;
    private String title;
    private String description;
    private String courseImage;
    private Double price;
    private String category;
    private String videoUrl;

    public CourseResponse(Long id,String title,String description,String courseImage,Double price,String category,String videoUrl){
        this.id=id;
        this.title=title;
        this.description=description;
        this.courseImage=courseImage;
        this.price=price;
        this.category=category;
        this.videoUrl=videoUrl;
    }
}
