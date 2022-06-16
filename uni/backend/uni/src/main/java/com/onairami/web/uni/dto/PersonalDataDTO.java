package com.onairami.web.uni.dto;

public class PersonalDataDTO {
    private String userFirstName;
    private String userLastName;
    private String userBirthDate;
    private String userDniType;
    private String userDni;
    private String userPhoneNumber;
    private String userLocation;
    private String userAddress;

    public PersonalDataDTO() {
    }

    public PersonalDataDTO(String userFirstName, String userLastName, String userBirthDate, String userDniType, String userDni, String userPhoneNumber, String userLocation, String userAddress) {
        this.userFirstName = userFirstName;
        this.userLastName = userLastName;
        this.userBirthDate = userBirthDate;
        this.userDniType = userDniType;
        this.userDni = userDni;
        this.userPhoneNumber = userPhoneNumber;
        this.userLocation = userLocation;
        this.userAddress = userAddress;
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

    public String getUserDni() {
        return userDni;
    }

    public void setUserDni(String userDni) {
        this.userDni = userDni;
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
}
