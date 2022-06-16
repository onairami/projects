package com.onairami.web.uni.service;

import com.onairami.web.uni.dao.PastCourseDAO;
import com.onairami.web.uni.dao.UserDAO;
import com.onairami.web.uni.domain.Course;
import com.onairami.web.uni.domain.PastCourse;
import com.onairami.web.uni.domain.User;
import com.onairami.web.uni.dto.PersonalDataDTO;
import com.onairami.web.uni.dto.UserDTO;
import com.onairami.web.uni.exception.EtAuthException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataRetrievalFailureException;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@Transactional
public class UserServiceImpl implements UserService{

    @Autowired
    private UserDAO userDAO;
    @Autowired
    private PastCourseDAO pastCourseDAO;

    @Override
    public User authenticateUser(String userNo, String userPassword) throws EtAuthException {
        try {
            User user = userDAO.findByUserNumber(userNo);
            if (user == null) throw new EtAuthException("Invalid username/password");
            if (!userPassword.equals(user.getUserPassword())) throw new EtAuthException("Invalid username/password");
            return user;
        } catch (DataRetrievalFailureException e){
            throw new EtAuthException("Invalid username/password");
        }
    }

    @Override
    public User getUserRoles(User user) {
        user.setUserRoles(userDAO.getRoles(user.getUserId()));
        return user;
    }

    @Override
    public UserDTO getUserData(Long userId) {
        User user = userDAO.findByUserId(userId);
        return new UserDTO(user.getUserId(),user.getUserNumber(),user.getUserLastName(), user.getUserFirstName(), userDAO.getRoles2(user.getUserId()), user.getUserDefaultRole());
    }

    public String getUserFullName(Long userId) {
        User user = userDAO.findByUserId(userId);
        return user.getUserFirstName()+' '+user.getUserLastName();
    }

    @Override
    public List<Map<String,String>> getStudentSchedule(Long studentId) {
        List<Course> courses = userDAO.findAllCurrentCoursesByStudentId(studentId);
        List<Map<String,String>> coursesList = new ArrayList<>();
        for (Course course: courses) {
            Map<String,String> coursesMap = new HashMap<> ();
            coursesMap.put("courseId",course.getCourseId().toString());
            coursesMap.put("courseCode",course.getCourseCode());
            coursesMap.put("courseName",course.getCourseName());
            coursesMap.put("courseTeacher",this.getUserFullName(course.getCourseTeacherId()));
            coursesMap.put("courseYear",course.getCourseYear());
            coursesList.add(coursesMap);
        }
        return coursesList;
    }


    @Override
    public PersonalDataDTO getUserPersonalData(Long userId) {
        User user = userDAO.findByUserId(userId);
        return new PersonalDataDTO(user.getUserFirstName(),
                                                        user.getUserLastName(),
                                                        user.getUserBirthDate(),
                                                        user.getUserDniType(),
                                                        user.getUserDniNumber(),
                                                        user.getUserPhoneNumber(),
                                                        user.getUserLocation(),
                                                        user.getUserAddress());
    }

    @Override
    public Integer updateUserData(Map<String, String> userData) {
        return userDAO.updateUserData(userData.get("userId") ,userData.get("userPhone") ,userData.get("userLocation"),userData.get("userAddress"));
    }

    @Override
    public Integer updateUserConfig(Map<String, String> userConfigData) {
        return userDAO.updateUserConfig(userConfigData.get("userRole"), userConfigData.get("userNotifEmail"), userConfigData.get("userId"));
    }

    @Override
    public List<PastCourse> getStudentHistory(Long studentId) {
        List<PastCourse> pastCoursesList = pastCourseDAO.findPastCoursesByStudentId(studentId);
        for (PastCourse course : pastCoursesList) {
            course.setPastCoursesExams(pastCourseDAO.findPastExamsByPastCourseId(course.getPastCourseId()));
        }
        return pastCoursesList;
    }

    @Override
    public List<Map<String, String>> getTeacherCourses(Long teacherId) {
        return userDAO.findCoursesByTeacherId(teacherId);
    }

    @Override
    public Map<String, String> getUserConfig(Long userId) {
        User user = userDAO.findByUserId(userId);
        Map<String,String> configDataMap = new HashMap<> ();

        configDataMap.put("defaultRole", user.getUserDefaultRole().toString());
        configDataMap.put("notificationEmail", user.getUserNotificationEmail());

        return configDataMap;
    }
}
