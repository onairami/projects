package com.onairami.web.uni.domain;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="students_courses")
public class StudentsCourses {

    @Id
    Long id;
    Long studentId;
    Long courseId;
}
