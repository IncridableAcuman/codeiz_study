package com.backend.learning.auth.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.learning.auth.model.Category;
import com.backend.learning.auth.model.Course;

public interface CourseRepository extends JpaRepository<Course,Long> {
    List<Course> findByCategory(Category category);
}
