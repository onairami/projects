package com.onairami.web.uni.dto;

import java.util.List;
import java.util.Map;

public class UserDTO {

    Long userId;
    String userNumber;
    String lastName;
    String firstName;
    //List<Long> roles;
    List<Map<String,String>> roles;
    Long defaultRole;

    public UserDTO() {
    }

    public UserDTO(Long userId, String userNumber, String lastName, String firstName, List<Map<String, String>> roles, Long defaultRole) {
        this.userId = userId;
        this.userNumber = userNumber;
        this.lastName = lastName;
        this.firstName = firstName;
        this.roles = roles;
        this.defaultRole = defaultRole;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getUserNumber() {
        return userNumber;
    }

    public void setUserNumber(String userNumber) {
        this.userNumber = userNumber;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public List<Map<String, String>> getRoles() {
        return roles;
    }

    public void setRoles(List<Map<String, String>> roles) {
        this.roles = roles;
    }

    public Long getDefaultRole() {
        return defaultRole;
    }

    public void setDefaultRole(Long defaultRole) {
        this.defaultRole = defaultRole;
    }
}
