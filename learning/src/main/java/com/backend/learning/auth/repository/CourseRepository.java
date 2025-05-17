package com.backend.learning.auth.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.learning.auth.model.Course;

public interface CourseRepository extends JpaRepository<Course,Long> {
    Optional<Course> findByCategory(String category);
}
