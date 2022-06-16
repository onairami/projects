import * as BuildRequest from './utils.js';

const buildRequest = BuildRequest.buildRequest;
const apiUrl = 'http://localhost:8080/api/public/'
const apiProtectedUrl = 'http://localhost:8080/api/protected/'

export const state = {
    currentUser: {},
    studentSchedule: null
}

export const clearState = function () {
    state.currentUser = {};
    state.currentUser = null;
}

export const login = async function (loginData) {
    const resLogin = await fetch(apiUrl+'login', buildRequest('POST', loginData));
    const dataLogin = await resLogin.json();
    if (resLogin.status !== 200) throw new Error(dataLogin.message);
    return dataLogin;
}

export const getUserData = async function (userId) {
    const resUser = await fetch(apiProtectedUrl+'userdata', buildRequest('POST', userId));
    const dataUser = await resUser.json();
    if (resUser.status !== 200) throw new Error(dataUser.message);
    state.currentUser = dataUser;
    return dataUser;
}

export const getStudentSchedule = async function (studentId) {
    const resSchedule = await fetch(apiProtectedUrl+'studentschedule/'+studentId, buildRequest('GET',));
    const dataSchedule = await resSchedule.json();
    if (resSchedule.status !== 200) throw new Error(dataSchedule.message);
    state.studentSchedule = dataSchedule;
}

export const getUserPersonalData = async function (userId) {
    const resPersData = await fetch(apiProtectedUrl+'userpersonaldata/'+userId, buildRequest('GET',));
    const dataPersData = await resPersData.json();
    if (resPersData.status !== 200) throw new Error(dataPersData.message);
    state.currentUser.personalData = dataPersData;
}

export const updateUserData = async function (userData) {
    const resUpdate = await fetch(apiProtectedUrl+'updateuser',buildRequest('PUT',userData));
    const dataUpdate = await resUpdate.json();
    if (resUpdate.status !== 200) throw new Error(dataUpdate.message);
}

export const getUserConfig = async function (userId) {
    const resConfig = await fetch(apiProtectedUrl+'getuserconfig/'+userId, buildRequest('GET',));
    const dataConfig = await resConfig.json();
    if (resConfig.status !== 200) throw new Error(dataUpdate.message);
    state.currentUser.notificationEmail = dataConfig.notificationEmail;  
    state.currentUser.defaultRole = parseInt(dataConfig.defaultRole, 10);
}

export const updateConfig = async function (configData) {
    const resUpdate = await fetch(apiProtectedUrl+'updateconfig',buildRequest('PUT',configData));
    const dataUpdate = await resUpdate.json();
    if (resUpdate.status !== 200) throw new Error(dataUpdate.message);
}

export const getStudentHistory = async function (studentId) {
    const resHistData = await fetch(apiProtectedUrl+'getstudenthistory/'+studentId, buildRequest('GET',));
    const dataHistData = await resHistData.json();
    if (resHistData.status !== 200) throw new Error(dataHistData.message);
    state.currentUser.history = dataHistData;
}

export const getTeacherCourses = async function (teacherId) {
    const resCoursesData = await fetch(apiProtectedUrl+'teachercourses/'+teacherId, buildRequest('GET',));
    const dataCoursesData = await resCoursesData.json();
    if (resCoursesData.status !== 200) throw new Error(dataCoursesData.message);
    state.currentUser.teacherCourses = dataCoursesData;
}