import * as model from './model.js'
import * as utils from './utils.js'
import loginView from './view/loginView.js'
import homeView from './view/homeView.js';
import studentScheduleView from './view/studentScheduleView.js';
import personalDataView from './view/personalDataView.js';
import courseEnrollView from './view/courseEnrollView.js';
import changeConfigView from './view/changeConfigView.js';
import studentHistoryView from './view/studentHistoryView.js';
import studentHistoryListView from './view/studentHistoryListView.js';
import teacherCoursesView from './view/teacherCoursesView.js';

'use strict'

let currentUser;


const studentScheduleController = async function () {
    try {
        await model.getStudentSchedule(model.state.currentUser.userId);
        studentScheduleView.render(model.state.studentSchedule);
    } catch (e) {
        if (e.message === 'Invalid or expired token') {
            init(/*'Session expired'*/);
            return;
        }
        
        alert('Hubo un errorrrrrrr corran por sus vidasssssssssss!!11!');        
    }
}

const updateDataController = async function (userData) {
    try{
        await model.updateUserData(userData);
        model.state.currentUser.personalData = null;
        alert('Datos actualizados correctamente');
    } catch (e) {
        if (e.message === 'Invalid or expired token') {
            init(/*'Session expired'*/);
            return;
        }
        
        alert('Hubo un errorrrrrrr corran por sus vidasssssssssss!!11!');
    }
}

const personalDataController = async function () {
    try{        
        await model.getUserPersonalData(model.state.currentUser.userId);
        personalDataView.render(model.state.currentUser);
        personalDataView.addSubmitDataHandler(updateDataController);
        personalDataView.addFieldCheckHandlers();
    } catch (e) {
        if (e.message === 'Invalid or expired token') {
            init(/*'Session expired'*/);
            return;
        }
        
        alert('Hubo un errorrrrrrr corran por sus vidasssssssssss!!11!');
    }
}

const courseEnrollController = async function () {
    courseEnrollView.render();
}

const submitConfigController = async function (configData) {
    try {
        await model.updateConfig(configData);
        alert("Cambios actualizados correctamente");
    } catch (e) {
        if (e.message === 'Invalid or expired token') {
            init(/*'Session expired'*/);
            return;
        }
        
        alert('Hubo un errorrrrrrr corran por sus vidasssssssssss!!11!');        
    }
}

const changeConfigController = async function () {
    try {
        await model.getUserConfig(model.state.currentUser.userId);
        changeConfigView.render(model.state.currentUser);
        changeConfigView.addEmailFieldCheck(utils.checkEmailField);
        changeConfigView.addSubmitDataHandler(submitConfigController);
    } catch (e) {
        if (e.message === 'Invalid or expired token') {
            init(/*'Session expired'*/);
            return;
        }
        
        alert('Hubo un errorrrrrrr corran por sus vidasssssssssss!!11!');        
    }
}

const getHistoryController = async function () {
    try {
        await model.getStudentHistory(model.state.currentUser.userId);
        studentHistoryView.render(model.state.currentUser);
        studentHistoryView.addHistoryTypeHandler(showHistoryListController);
        studentHistoryListView.render(model.state.currentUser,"PASSED");
    } catch (e) {
        if (e.message === 'Invalid or expired token') {
            init(/*'Session expired'*/);
            return;
        }
        
        alert('Hubo un errorrrrrrr corran por sus vidasssssssssss!!11!');        
    }
}

const showHistoryListController = function (historyType) {
    studentHistoryListView.render(model.state.currentUser,historyType);
}

const teacherCoursesController = async function () {
    try {
        await model.getTeacherCourses(model.state.currentUser.userId);
        teacherCoursesView.render(model.state.currentUser.teacherCourses);
    } catch (e) {
        if (e.message === 'Invalid or expired token') {
            init(/*'Session expired'*/);
            return;
        }
        
        alert('Hubo un errorrrrrrr corran por sus vidasssssssssss!!11!');
    }
}

const homeViewController = function () {
    homeView.render(model.state.currentUser);
    console.log(model.state.currentUser);
    homeView.addLogoutHandler(logoutController);
    homeView.addPersonalDataHandler(personalDataController);
    homeView.addChangeConfigHandler(changeConfigController);
    if (model.state.currentUser.defaultRole === 1) {
        homeView.addStudentScheduleHandler(studentScheduleController);
        homeView.addEnrollHandler(courseEnrollController);
        homeView.addHistoryHandler(getHistoryController);
        return;
    }
    if (model.state.currentUser.defaultRole === 2) {
        homeView.addTeacherCoursesHandler(teacherCoursesController);
        return;
    }
}

const logoutController = function () {
    sessionStorage.removeItem("token");
    model.clearState();
    loginView.render();
    loginView.addLoginHandler(loginController);
}

const loginController = async function (number, password) {
    const loginData = {
        userNo: number,
        userPassword: password
    } // Los nombres de los campos deben coincidir con los de LoginForm en el backend

    try {
        const initialData = await model.login(loginData);
        sessionStorage.setItem("token",initialData.token);
        await model.getUserData(initialData.userId);
        homeViewController();
    } catch (e) {
        if (e.message === 'Invalid username/password') {
            loginView.renderError();
            return;
        }
        alert(e)
    }   
}

const init = function(errorMessage) {
    loginView.render();
    loginView.addLoginHandler(loginController);
}

init();