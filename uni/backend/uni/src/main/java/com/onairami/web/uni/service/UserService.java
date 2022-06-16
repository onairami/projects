package com.onairami.web.uni.service;

import com.onairami.web.uni.domain.PastCourse;
import com.onairami.web.uni.domain.User;
import com.onairami.web.uni.dto.PersonalDataDTO;
import com.onairami.web.uni.dto.UserDTO;
import com.onairami.web.uni.exception.EtAuthException;
import java.util.List;
import java.util.Map;

public interface UserService {
    User authenticateUser(String username, String password) throws EtAuthException;

    User getUserRoles(User user);

    UserDTO getUserData(Long userId);

    List<Map<String,String>> getStudentSchedule(Long userId);

    PersonalDataDTO getUserPersonalData(Long userId);

    Integer updateUserData(Map<String, String> userData);

    Integer updateUserConfig(Map<String, String> userConfigData);

    List<PastCourse> getStudentHistory(Long studentId);

    List<Map<String, String>> getTeacherCourses(Long teacherId);

    Map<String, String> getUserConfig(Long userId);
}
