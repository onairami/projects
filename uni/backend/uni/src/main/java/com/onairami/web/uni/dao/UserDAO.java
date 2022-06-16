package com.onairami.web.uni.dao;

import com.onairami.web.uni.domain.Course;
import com.onairami.web.uni.domain.User;
import com.onairami.web.uni.dto.PersonalDataDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Map;

@Repository
public interface UserDAO extends JpaRepository<User, Long> {

    User findByUserNumber(String userNumber);

    User findByUserId(Long userId);

    @Query("select ur.roleId from UserRoles ur where ur.userId = :user_id")
    List<Long> getRoles(@Param("user_id") Long userId);

    @Query(value = "select r.role_id \"roleId\",r.role_description \"roleDescription\" from roles r join user_roles ur on r.role_id = ur.role_id where ur.user_id = :user_id",nativeQuery = true)
    List<Map<String,String>> getRoles2(@Param("user_id") Long userId);

    @Query(value="select c from Course c join StudentsCourses sc on c.courseId = sc.courseId where sc.studentId = :student_id")
    List<Course> findAllCurrentCoursesByStudentId(@Param("student_id") Long studentId);

    @Modifying
    @Transactional
    @Query(value="update users u set u.user_phone_number = :phone, u.user_location = :location, u.user_address = :address where u.user_id = :userId",nativeQuery = true)
    Integer updateUserData(@Param("userId") String userId, @Param("phone") String phone, @Param("location") String location, @Param("address") String address);

    @Modifying
    @Transactional
    @Query(value="update users u set u.user_default_role = :default_role, u.user_notification_email = :user_notification_email where u.user_id = :user_id", nativeQuery = true)
    Integer updateUserConfig(@Param("default_role") String defaultRole, @Param("user_notification_email") String userNotifEmail, @Param("user_id") String userId);

    @Query(value="select c.course_id \"courseId\",c.course_code \"courseCode\",c.course_name \"courseName\" " +
            "from courses c join teachers_courses tc on c.course_id = tc.course_id " +
            "where tc.teacher_id = :teacher_id",nativeQuery = true)
    List<Map<String, String>> findCoursesByTeacherId(@Param("teacher_id") Long teacherId);
}
