package com.onairami.web.uni.controller;

import com.onairami.web.uni.domain.PastCourse;
import com.onairami.web.uni.dto.PersonalDataDTO;
import com.onairami.web.uni.dto.UserDTO;
import com.onairami.web.uni.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(path="/api/protected")
public class ProtectedController {

    @Autowired
    UserServiceImpl userService;

    @CrossOrigin
    @PostMapping("/userdata")
    public UserDTO getUserData(@RequestBody Long userId) {
        return userService.getUserData(userId);
    }

    @CrossOrigin
    @GetMapping("/studentschedule/{studentId}")
    public List<Map<String,String>> getStudentSchedule(@PathVariable Long studentId) {
        return userService.getStudentSchedule(studentId);
    }

    @CrossOrigin
    @GetMapping("/userpersonaldata/{userId}")
    public PersonalDataDTO getUserPersonalData(@PathVariable Long userId) {
        return userService.getUserPersonalData(userId);
    }

    @CrossOrigin
    @PutMapping("/updateuser")
    public Integer updateUserData(@RequestBody Map<String,String> userdata){
        return userService.updateUserData(userdata);
    }

    @CrossOrigin
    @GetMapping("/getuserconfig/{userId}")
    public Map<String, String> getUserConfig(@PathVariable Long userId) {
        return userService.getUserConfig(userId);
    }

    @CrossOrigin
    @PutMapping("/updateconfig")
    public Integer updateUserConfig(@RequestBody Map<String,String> userConfigData) {
        return userService.updateUserConfig(userConfigData);
    }

    @CrossOrigin
    @GetMapping("/getstudenthistory/{studentId}")
    public List<PastCourse> getStudentHistory(@PathVariable Long studentId) {
        return userService.getStudentHistory(studentId);
    }

    @CrossOrigin
    @GetMapping("/teachercourses/{teacherId}")
    public List<Map<String,String>> getTeacherCourses(@PathVariable Long teacherId) {
        return userService.getTeacherCourses(teacherId);
    }
}
