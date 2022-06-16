package com.onairami.web.uni.domain;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="users")
public class User {

    @Id
    private Long userId;
    private String userNumber; // El legajo
    private String userFirstName;
    private String userLastName;
    private String userBirthDate;
    private String userDniType;
    private String userDniNumber;
    private String userPhoneNumber;
    private String userLocation;
    private String userAddress;
    private String userPassword;
    @Transient
    private Role userCurrentRole;
    private Long userDefaultRole;
    private String userEmail;
    private String userNotificationEmail;
    @Transient
    private List<Long> userRoles;

    public User() {
    }

    public User(Long userId, String userNumber, String userFirstName, String userLastName, String userBirthDate, String userDniType, String userDniNumber, String userPhoneNumber, String userLocation, String userAddress, String userPassword, Role userCurrentRole, Long userDefaultRole, String userEmail, String userNotificationEmail, List<Long> userRoles) {
        this.userId = userId;
        this.userNumber = userNumber;
        this.userFirstName = userFirstName;
        this.userLastName = userLastName;
        this.userBirthDate = userBirthDate;
        this.userDniType = userDniType;
        this.userDniNumber = userDniNumber;
        this.userPhoneNumber = userPhoneNumber;
        this.userLocation = userLocation;
        this.userAddress = userAddress;
        this.userPassword = userPassword;
        this.userCurrentRole = userCurrentRole;
        this.userDefaultRole = userDefaultRole;
        this.userEmail = userEmail;
        this.userNotificationEmail = userNotificationEmail;
        this.userRoles = userRoles;
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

    public String getUserFirstName() {
        return userFirstName;
    }

    public void setUserFirstName(String userFirstName) {
        this.userFirstName = userFirstName;
    }

    public String getUserLastName() {
        return userLastName;
    }

    public void setUserLastName(String userLastName) {
        this.userLastName = userLastName;
    }

    public String getUserBirthDate() {
        return userBirthDate;
    }

    public void setUserBirthDate(String userBirthDate) {
        this.userBirthDate = userBirthDate;
    }

    public String getUserDniType() {
        return userDniType;
    }

    public void setUserDniType(String userDniType) {
        this.userDniType = userDniType;
    }

    public String getUserDniNumber() {
        return userDniNumber;
    }

    public void setUserDniNumber(String userDniNumber) {
        this.userDniNumber = userDniNumber;
    }

    public String getUserPhoneNumber() {
        return userPhoneNumber;
    }

    public void setUserPhoneNumber(String userPhoneNumber) {
        this.userPhoneNumber = userPhoneNumber;
    }

    public String getUserLocation() {
        return userLocation;
    }

    public void setUserLocation(String userLocation) {
        this.userLocation = userLocation;
    }

    public String getUserAddress() {
        return userAddress;
    }

    public void setUserAddress(String userAddress) {
        this.userAddress = userAddress;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }

    public Role getUserCurrentRole() {
        return userCurrentRole;
    }

    public void setUserCurrentRole(Role userCurrentRole) {
        this.userCurrentRole = userCurrentRole;
    }

    public Long getUserDefaultRole() {
        return userDefaultRole;
    }

    public void setUserDefaultRole(Long userDefaultRole) {
        this.userDefaultRole = userDefaultRole;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getUserNotificationEmail() {
        return userNotificationEmail;
    }

    public void setUserNotificationEmail(String userNotificationEmail) {
        this.userNotificationEmail = userNotificationEmail;
    }

    public List<Long> getUserRoles() {
        return userRoles;
    }

    public void setUserRoles(List<Long> userRoles) {
        this.userRoles = userRoles;
    }
}
