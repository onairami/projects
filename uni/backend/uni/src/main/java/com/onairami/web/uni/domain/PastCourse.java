package com.onairami.web.uni.domain;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;
import java.util.List;
import java.util.Map;

@Entity
@Table(name="past_courses")
public class PastCourse {
    @Id
    Long pastCourseId;
    String pastCourseName;
    String pastCourseYear;
    String pastCourseRegularizationDate;
    String pastCoursePassDate;
    Integer pastCoursePartialGrade;
    Integer pastCourseFinalGrade;
    @Transient
    List<Map<String,String>> pastCoursesExams;

    public PastCourse() {
    }

    public PastCourse(Long pastCourseId, String pastCourseName, String pastCourseYear, String pastCourseRegularizationDate, String pastCoursePassDate, Integer pastCourseFinalGrade, List<Map<String, String>> pastCoursesExams) {
        this.pastCourseId = pastCourseId;
        this.pastCourseName = pastCourseName;
        this.pastCourseYear = pastCourseYear;
        this.pastCourseRegularizationDate = pastCourseRegularizationDate;
        this.pastCoursePassDate = pastCoursePassDate;
        //this.pastCoursePartialGrade = pastCoursePartialGrade;
        this.pastCourseFinalGrade = pastCourseFinalGrade;
        this.pastCoursesExams = pastCoursesExams;
    }

    public Long getPastCourseId() {
        return pastCourseId;
    }

    public void setPastCourseId(Long pastCourseId) {
        this.pastCourseId = pastCourseId;
    }

    public String getPastCourseName() {
        return pastCourseName;
    }

    public void setPastCourseName(String pastCourseName) {
        this.pastCourseName = pastCourseName;
    }

    public String getPastCourseYear() {
        return pastCourseYear;
    }

    public void setPastCourseYear(String pastCourseYear) {
        this.pastCourseYear = pastCourseYear;
    }

    public String getPastCourseRegularizationDate() {
        return pastCourseRegularizationDate;
    }

    public void setPastCourseRegularizationDate(String pastCourseRegularizationDate) {
        this.pastCourseRegularizationDate = pastCourseRegularizationDate;
    }

    public String getPastCoursePassDate() {
        return pastCoursePassDate;
    }

    public void setPastCoursePassDate(String pastCoursePassDate) {
        this.pastCoursePassDate = pastCoursePassDate;
    }

    public Integer getPastCoursePartialGrade() {
        return pastCourseFinalGrade;
    }

    public void setPastCoursePartialGrade(Integer pastCourseFinalGrade) {
        this.pastCourseFinalGrade = pastCourseFinalGrade;
    }

    public Integer getPastCourseFinalGrade() {
        return pastCourseFinalGrade;
    }

    public void setPastCourseFinalGrade(Integer pastCourseFinalGrade) {
        this.pastCourseFinalGrade = pastCourseFinalGrade;
    }

    public List<Map<String, String>> getPastCoursesExams() {
        return pastCoursesExams;
    }

    public void setPastCoursesExams(List<Map<String, String>> pastCoursesExams) {
        this.pastCoursesExams = pastCoursesExams;
    }
}
