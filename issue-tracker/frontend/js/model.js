import * as BuildRequest from './utils.js';

const buildRequest = BuildRequest.buildRequest;
const apiUrl = 'http://localhost:8085/api/public/'
const apiProtectedUrl = 'http://localhost:8085/api/protected/'

class Reply {
    ticketId;
    replies;

    constructor(ticketId, replies) {
        this.ticketId = ticketId;
        this.replies = replies;
    }
}

export const state = {
    tickets: [],
    ticket: {},
    replies: {},
    sectors: [],
    sectorUsers: {}
}


export const login = async function (loginData) {
    const resLogin = await fetch(apiUrl+'login', buildRequest('POST', loginData));
    const dataLogin = await resLogin.json();
    if (dataLogin.message === 'Invalid username/password') throw new Error(dataLogin.message);
    return dataLogin;
}

export const showDashboard = async function () {
    const resTickets = await fetch(apiProtectedUrl+'getassignedtickets',buildRequest('GET',));
    const dataTickets = await resTickets.json();
    if (dataTickets.message === 'Invalid or expired token') throw new Error(dataTickets.message);
    state.tickets =  dataTickets;    
}


export const loadTicket = async function (ticketId) {    
    const resTicket = await fetch(apiProtectedUrl+`getticket/${ticketId}`,buildRequest('GET',));
    const dataTicket = await resTicket.json();
    if (dataTicket.message === 'Invalid or expired token') throw new Error(dataTicket.message);
    state.ticket = dataTicket;
}


export const loadReplies = async function (ticketId) {    
    const resReplies = await fetch(apiProtectedUrl+`${ticketId}/getReplies`,buildRequest('GET',));
    const dataReplies = await resReplies.json();
    if (dataReplies.message === 'Invalid or expired token') throw new Error(dataReplies.message);
    this.state.replies = {ticketId: ticketId, replyList: dataReplies}
}


export const loadSectors = async function () {
    const resSectors = await fetch(apiProtectedUrl+'getsectors',buildRequest('GET',));
    const dataSectors = await resSectors.json();
    if (dataSectors.message === 'Invalid or expired token') throw new Error(dataSectors.message);
    this.state.sectors = dataSectors;
}


export const loadSectorUsers = async function (sectorId) {        
    const resUsers = await fetch (apiProtectedUrl+`sectorusersbyid/${sectorId}`,buildRequest('GET',));
    const dataUsers = await resUsers.json();
    if (dataUsers.message === 'Invalid or expired token') throw new Error(dataUsers.message);
    this.state.sectorUsers = {sectorId: sectorId, userList: dataUsers};
}


export const updateTicket = async function (updatedTicket) {
    const resUpdateTicket = await fetch(apiProtectedUrl+'updateticket',buildRequest('PUT', updatedTicket));
    const dataUpdateTicket = await resUpdateTicket.json();
    if (dataUpdateTicket.message === 'Invalid or expired token') throw new Error(dataUpdateTicket.message);
}


export const saveTicket = async function (newTicket) {
    const resNewTicket = await fetch(apiProtectedUrl+'newticket',buildRequest('POST',newTicket));
    const dataNewTicket = resNewTicket.json();
    if (dataNewTicket.message === 'Invalid or expired token') throw new Error(dataNewTicket.message);     
}


export const saveReply = async function (replyText, ticketId, currentUserId) {
    const reply = {
        ticketId: ticketId,
        author: currentUserId,
        text: replyText
        };
    const resSaveReply = await fetch (apiProtectedUrl+'newReply',buildRequest('POST', reply));
    const dataSaveReply = await resSaveReply.json();
    if (dataSaveReply.message === 'Invalid or expired token') throw new Error(dataSaveReply.message); 
}