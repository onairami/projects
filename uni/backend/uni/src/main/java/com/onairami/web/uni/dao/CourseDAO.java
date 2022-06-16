package com.onairami.web.uni.dao;

import com.onairami.web.uni.domain.Course;
import com.onairami.web.uni.domain.PastCourse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface CourseDAO extends JpaRepository<Course, Long>  {
}
