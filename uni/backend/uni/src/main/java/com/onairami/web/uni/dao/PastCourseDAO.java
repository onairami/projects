package com.onairami.web.uni.dao;

import com.onairami.web.uni.domain.PastCourse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Map;

public interface PastCourseDAO extends JpaRepository<PastCourse, Long> {
    @Query(value = "select pc.* from past_courses pc join students_past_courses spc on pc.past_course_id = spc.past_course_id" +
            " where spc.student_id = :student_id",nativeQuery = true)
    List<PastCourse> findPastCoursesByStudentId(@Param("student_id") Long studentId);

    @Query(value="select pce.* from past_courses_exams pce where pce.past_course_id = :past_course_id",nativeQuery = true)
    List<Map<String,String>> findPastExamsByPastCourseId(@Param("past_course_id") Long pastCourseId);
}
