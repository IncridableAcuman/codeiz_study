package com.backend.learning.auth.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.learning.auth.dto.CourseRequest;
import com.backend.learning.auth.dto.CourseResponse;
import com.backend.learning.auth.model.Category;
import com.backend.learning.auth.model.Course;
import com.backend.learning.auth.service.CourseService;

import lombok.RequiredArgsConstructor;

@Controller
@RestController
@RequestMapping("/api/courses")
@RequiredArgsConstructor
public class CourseController {
    private final CourseService courseService;

    // create course
    @PostMapping("/course/create")
    public ResponseEntity<CourseResponse> createCourse(@RequestBody CourseRequest request){
        return ResponseEntity.ok(courseService.createCourse(request));
    }
    // get a course by id
    @GetMapping("/course/{id}")
    public ResponseEntity<CourseResponse> getCourseByID(@PathVariable Long id){
        return ResponseEntity.ok(courseService.getCourseByID(id));
    }
    // get a course by category;
    @GetMapping("/course/categories/{category}")
    public ResponseEntity<CourseResponse> getCourseByCategory(@PathVariable Category category){
        return ResponseEntity.ok(courseService.getCourseByCategory(category));
    }
    // get all course
    public ResponseEntity<List<Course>> getAllCourses(){
        return ResponseEntity.ok(courseService.getAllCourses());
    }
    // update a course
    @PutMapping("/course/update/{id}")
    public ResponseEntity<CourseResponse> updateCourse(@PathVariable Long id,@RequestBody Course course){
        return ResponseEntity.ok(courseService.updateCourse(id, course));
    }
    // delete a course
    @DeleteMapping("/course/delete/{id}")
    public ResponseEntity<String> deleteCourse(@PathVariable Long id){
         courseService.deleteCourse(id);
         return ResponseEntity.ok("Course deleted!");
    }
}
