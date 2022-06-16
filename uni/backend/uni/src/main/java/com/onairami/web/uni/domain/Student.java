package com.onairami.web.uni.domain;

import java.util.ArrayList;

public class Student implements Role{

    String roleName;
    ArrayList<String> previousCourses;

    public Student(){

    }

    public Student(String roleName, ArrayList<String> previousCourses) {
        this.roleName = roleName;
        this.previousCourses = previousCourses;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    public ArrayList<String> getPreviousCourses() {
        return previousCourses;
    }

    public void setPreviousCourses(ArrayList<String> previousCourses) {
        this.previousCourses = previousCourses;
    }
}
