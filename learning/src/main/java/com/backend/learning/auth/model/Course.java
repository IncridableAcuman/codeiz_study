package com.backend.learning.auth.model;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "courses")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Data
public class Course implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    @Size(min = 2,max = 100)
    private String title;

    @Column(nullable = false)
    @Size(min = 10,max = 2000)
    private String description;

    @Column(nullable = false)
    private String courseImage;

    @Column(nullable = false)
    private Double price;

    @Column(nullable = false)
    private Category category;

    @Column(nullable = false)
    private String videoUrl;
}
