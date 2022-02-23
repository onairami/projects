import * as model from './model.js';
import dashboardView from './view/dashboardView.js';
import ticketView from './view/ticketView.js';
import homeView from './view/homeView.js';
import sectorView from './view/sectorView.js'
import userComboView from './view/userComboView.js';
import newTicketView from './view/newTicketView.js';
import userSelectNewTicketView from './view/userSelectNewTicketView.js';
import loginView from './view/loginView.js';

'use strict'


let currentUser;

///////////////////////////////////////////////////////

const clearTicketState = function () {
    model.state.ticket = {};
    model.state.sectorUsers = {};
    model.state.replies = {};
}

const homeViewController = function () {
    homeView.render();
}

const showDashboardViewController = async function () {
    try {
        await model.showDashboard();
        dashboardView.render(model.state.tickets);
        dashboardView.addHandlerTickets(showTicketController);
        dashboardView.addNewTicketHandler(showNewTicketViewController);
        clearTicketState();
    } catch (e) {
        if (e.message === 'Invalid or expired token') {
            init('Session expired');
            return;
        }
        alert(e);
    }
}


const showTicketController = async function (ticketId) {
    try {
        await model.loadTicket(ticketId);
        await model.loadReplies(ticketId);
        ticketView.render({ticket: model.state.ticket, replies: model.state.replies.replyList});
        ticketView.addSectorComboHandler(showSectorsController);
        ticketView.addUserComboHandler(showSectorUsersController);
        ticketView.addUpdateTicketHandler(updateTicketController);
        ticketView.addNewReplyHandler(newReplyController);
    } catch (e) {
        if (e.message === 'Invalid or expired token') {
            init('Session expired');
            return;
        }
        alert(e);
    }
}


const showSectorsController = async function (operationType, currentTicketSectorId) {
    try {
        if (model.state.sectors.length === 0) await model.loadSectors();

        if (operationType === 'UPDATE') {
            sectorView.render({sectors: model.state.sectors, currentTicketSectorId: currentTicketSectorId});
            userComboView.setEmptySelect();
        }

        if (operationType === 'NEW') userSelectNewTicketView.setEmptySelect();

    }  catch (e) {
        if (e.message === 'Invalid or expired token') {
            init('Session expired');
            return;
        }
        alert(e);
    }
}


const showSectorUsersController = async function (typeOperation, sectorId) {

    try {
        if (model.state.sectorUsers.sectorId !== sectorId) await model.loadSectorUsers(sectorId);

        if (typeOperation === 'UPDATE') {
            userComboView.render(model.state.sectorUsers.userList)
            return
        }

        if (typeOperation === 'NEW') {
            userSelectNewTicketView.render(model.state.sectorUsers.userList)
            return
        }
    }  catch (e) {
        if (e.message === 'Invalid or expired token') {
            init('Session expired');
            return;
        }
        alert(e);
    }
}


const updateTicketController = async function (updatedTicket) {
    try {
        await model.updateTicket(updatedTicket);
        await showTicketController(updatedTicket.ticketId);
    }  catch (e) {
        if (e.message === 'Invalid or expired token') {
            init('Session expired');
            return;
        }
        alert(e);
    }
}


const newReplyController = async function (replyText, ticketId) {

    try {
        await model.saveReply(replyText, ticketId,currentUser.userId);
        await showTicketController(ticketId);
    }  catch (e) {
        if (e.message === 'Invalid or expired token') {
            init('Session expired');
            return;
        }
        alert(e);
    }

}


const showNewTicketViewController = async function () {
    try {
        if (model.state.sectors.length === 0) await model.loadSectors();
        newTicketView.render(currentUser.userId, model.state.sectors);
        newTicketView.addSectorSelectHandler(showSectorsController);
        newTicketView.addUserSelectHandler(showSectorUsersController);
        newTicketView.addSubmitNewTicketHandler(saveNewTicketController);
    }  catch (e) {
        if (e.message === 'Invalid or expired token') {
            init('Session expired');
            return;
        }
        alert(e);
    }
}


const saveNewTicketController = async function (ticket) {

    try {
        await model.saveTicket(ticket);
        showDashboardViewController();
    }  catch (e) {
        if (e.message === 'Invalid or expired token') {
            init('Session expired');
            return;
        }
        alert(e);
    }
}


const loginController = async function (username, password) {
    const loginData = {
        username: username,
        password: password
    }

    try {
        const dataUser = await model.login(loginData);
        sessionStorage.setItem("token",dataUser.token);
        currentUser = dataUser;
        homeViewController();
        homeView.addDashboardHandler(showDashboardViewController);
        await showDashboardViewController();
    } catch (e) {
        if (e.message === 'Invalid username/password') {
            console.log(e.message)
            loginView.renderError(e.message);
            return;
        }
        alert(e)
    }   
}


const init = function (errorMessage) {
    loginView.render();
    loginView.renderError(errorMessage);
    loginView.addLoginHandler(loginController);
}

init();