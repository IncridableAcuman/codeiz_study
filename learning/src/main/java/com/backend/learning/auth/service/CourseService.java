package com.backend.learning.auth.service;

import org.springframework.stereotype.Service;

import com.backend.learning.auth.repository.CourseRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CourseService {
    private final CourseRepository courseRepository;
}
