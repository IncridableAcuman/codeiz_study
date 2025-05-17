package com.backend.learning.auth.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.backend.learning.auth.dto.CourseRequest;
import com.backend.learning.auth.dto.CourseResponse;
import com.backend.learning.auth.model.Category;
import com.backend.learning.auth.model.Course;
import com.backend.learning.auth.repository.CourseRepository;
import com.backend.learning.exception.BadRequestExceptionHandler;
import com.backend.learning.exception.ResourceNotFoundException;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CourseService {
    private final CourseRepository courseRepository;

    // create course
    public CourseResponse createCourse(CourseRequest request){
        Course course=new Course();
        course.setTitle(request.getTitle());
        course.setDescription(request.getDescription());
        course.setPrice(request.getPrice());
        course.setCategory(request.getCategory());
        course.setVideoUrl(request.getVideoUrl());
        courseRepository.save(course);
        return new CourseResponse(course.getId(), 
        course.getTitle(), course.getDescription(),
         course.getCourseImage(), course.getPrice(),
         course.getCategory(), course.getVideoUrl());
    }
    // get a course by id
    public CourseResponse getCourseByID(Long id){
        if(id==null){
            throw new BadRequestExceptionHandler("Course id is required");
        }
        Course course=courseRepository.findById(id).orElseThrow(()->new
         ResourceNotFoundException("Course not found"));
         return new CourseResponse(course.getId(), 
        course.getTitle(), course.getDescription(),
         course.getCourseImage(), course.getPrice(),
         course.getCategory(), course.getVideoUrl());
    }
    // get a course by category
    public CourseResponse getCourseByCategory(Category category){
        if(category==null){
            throw new BadRequestExceptionHandler("Course id is required");
        }
        Course course=courseRepository.findByCategory(category).orElseThrow(()->new 
        ResourceNotFoundException("Course not found"));
        return new CourseResponse(course.getId(), 
        course.getTitle(), course.getDescription(),
         course.getCourseImage(), course.getPrice(),
         course.getCategory(), course.getVideoUrl());
    }
    // get all courses
    public List<Course> getAllCourses(){
        List<Course> courses=courseRepository.findAll();
        return courses;
    }
    // update a course
    public CourseResponse updateCourse(Long id,Course course){
        Course course2=courseRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Course not found"));
        course2.setTitle(course.getTitle());
        course2.setDescription(course.getDescription());
        course2.setCourseImage(course.getCourseImage());
        course2.setPrice(course.getPrice());
        course2.setVideoUrl(course.getVideoUrl());
        courseRepository.save(course2);
        return new CourseResponse(course.getId(), 
        course.getTitle(), course.getDescription(),
         course.getCourseImage(), course.getPrice(),
         course.getCategory(), course.getVideoUrl());
    }
    // delete a course by id
    public void deleteCourse(Long id){
        Course course=courseRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Course not found"));
        if(course.getId()>0){
        courseRepository.delete(course);            
        }
    }
}
