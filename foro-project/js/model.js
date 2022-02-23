import Thread from "./domain/Thread.js";
import Comment from "./domain/Comment.js";
import * as utils from './utils.js'

'use strict'


export const state = {
    threads: [],
    thread: {},
    comments: [],
    currentUser: {},
    maxThreadId: 1,
    maxCommentId: 1,
    commentPage: 1
}

let threads = [];
let comments = [];


const generateThreadId = function () {
    return state.maxThreadId++;
}


const generateCommentId = function () {
    return state.maxCommentId++;
}


const usuario1 = {
    id: 21,
    username: "usuario1",
    password: "12345",
    foto: "pictures/escudoIndep3.png",
    fechaRegistro: "01/01/2017"
};

const usuario2 = {
    id: 22,
    username: "usuario2",
    password: "12345",
    foto: "pictures/escudoIndep2.png",
    fechaRegistro: "01/01/2019"
};

const usuario3 = {
    id: 23,
    username: "mariano",
    password: "12345",
    foto: "pictures/escudoIndep.png",
    fechaRegistro: "01/01/2019"
};

const usuario4 = {
    id: 24,
    username: "creador",
    password: "12345",
    foto: "pictures/escudoIndep3.png",
    fechaRegistro: "01/01/2019"
};


// state.maxCommentId++;

comments.push(new Comment(generateCommentId(),
                                {userId: usuario2.id,
                                username: usuario2.username,
                                userAvatar: usuario2.foto},
                                '01/01/2021',
                                'Sed tristique et ante ut sagittis. Suspendisse sed eleifend nibh. Nullam elementum nisi sed magna fringilla, non condimentum erat porta. Sed malesuada urna eget quam commodo pretium. Curabitur lacus purus, ultrices eu molestie a, fringilla et tellus. Donec ut diam quis elit consequat ultricies. Aenean quam ante, lacinia et orci ac, dictum dignissim arcu.',
                                1));

// state.maxCommentId++;

comments.push(new Comment(generateCommentId(),
                                {userId: usuario2.id,
                                username: usuario2.username,
                                userAvatar: usuario2.foto},
                                '02/01/2021',
                                'Fusce hendrerit diam libero, ac finibus ipsum condimentum sollicitudin. Proin ut leo in mi hendrerit rutrum sed id metus. Duis condimentum ullamcorper maximus. Sed tempor risus quam, at facilisis sapien volutpat in. Phasellus vulputate egestas dapibus. Aliquam commodo mi nec neque pellentesque, auctor ultricies nisi egestas. Vivamus vitae pharetra velit. Nullam enim est, rhoncus vitae massa et, consequat feugiat metus. Cras ac luctus nisl, in porttitor libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed luctus massa mauris, ut lacinia augue sagittis auctor. Sed at auctor massa. Etiam et massa id ante interdum faucibus sed id tortor. Cras sed ex quis nulla convallis semper. Sed rhoncus dictum ligula, et imperdiet sem aliquam vitae.',
                                1));

// state.maxCommentId++;

comments.push(new Comment(generateCommentId(),
                                {userId: usuario3.id,
                                username: usuario3.username,
                                userAvatar: usuario3.foto},
                                '02/01/2021',
                                'Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed et nibh quam. Donec nec dolor eget est pulvinar lobortis et vel leo. Nunc leo arcu, vestibulum sit amet neque vel, molestie aliquet nisi. Cras magna arcu, placerat vel suscipit dignissim, pharetra eget nunc. Aliquam sit amet tincidunt tellus. Donec arcu urna, condimentum cursus sem vel, efficitur convallis diam. Nunc bibendum commodo tincidunt. Sed quis libero pulvinar, commodo sapien vitae, imperdiet ex.',
                                2));

// state.maxCommentId++;

comments.push(new Comment(generateCommentId(),
                                {userId: usuario3.id,
                                username: usuario3.username,
                                userAvatar: usuario3.foto},
                                '02/01/2021',
                                'A',
                                1));


for (let i = 1; i<=22; i++) {
    comments.push(new Comment(generateCommentId(),
                                {userId: usuario3.id,
                                username: usuario3.username,
                                userAvatar: usuario3.foto},
                                utils.getFormattedDate(),
                                i,
                                3));    
}


// comments.push(comentario1);
// comments.push(comentario2);
// comments.push(comentario3);
// comments.push(comentario4);

// state.maxThreadId++;

const thread1 = new Thread(generateThreadId(),
                            'Tema 1',
                            {userId: usuario3.id,
                            username: usuario3.username,
                            userAvatar: usuario3.foto},
                            'Futbol local',
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur, sem ut dictum vehicula, dui lectus aliquet mauris, sit amet tristique leo magna at nunc. Phasellus auctor pharetra nibh id semper. Nulla turpis eros, dapibus at metus eu, congue egestas arcu. Curabitur vel imperdiet nulla, iaculis scelerisque velit. Curabitur elementum leo lorem, at luctus sapien varius a. Phasellus placerat aliquet enim vel cursus. Suspendisse venenatis lorem eu tortor fringilla interdum. In hac habitasse platea dictumst. Nullam eget auctor sem, eu consequat justo. ')
                            // [comentario1.getCommentId(), comentario2.getCommentId(), comentario4.getCommentId()]);



// state.maxThreadId++;

const thread2 = new Thread(generateThreadId(),
                            'Tema 2',
                            {userId: usuario2.id,
                            username: usuario2.username,
                            userAvatar: usuario2.foto},
                            'Futbol local',
                            'Nada por aquí.')
                            // [comentario3.getCommentId()]);


// state.maxThreadId++;

const thread3 = new Thread(generateThreadId(),
                            'Tema 3',
                            {userId: usuario3.id,
                            username: usuario3.username,
                            userAvatar: usuario3.foto},
                            'Futbol local',
                            'Nada por allá.')
                            // []);


// state.maxThreadId++;

const thread4 = new Thread(generateThreadId(),
                            'Tema 4',
                            {userId: usuario3.id,
                            username: usuario3.username,
                            userAvatar: usuario3.foto},
                            'Futbol internacional',
                            'Primer thread internacional.')
                            // []);


threads.push(thread1);
threads.push(thread2);
threads.push(thread3);
threads.push(thread4);
// let threadList = [];
// let threadsFutLocal = [];
// let threadsFutInternacional = [];
// let threadsActInst = [];

const usuariosTotales = [usuario1, usuario2, usuario3, usuario4];



const loadUser = function (userId) {
    return usuariosTotales.find(user => user.id === userId);
}



export const loadThreads = function (category) {
    state.threads = threads.filter(thread => thread.threadCategory === category);
}


export const loadComments = function (threadId/*, commentPage*/) {
    // state.commentPage++;
    const commentsList = comments.filter(comment => comment.getCommentThreadId() === +threadId).slice(state.commentPage * 10 - 10, state.commentPage * 10);

    if (commentsList.length === 0 && state.commentPage !== 1) {
        state.commentPage--;
        return;
    }
    state.comments = commentsList;
}


export const loadThread = function (threadId/*, commentPage*/) {
    state.thread = threads.find(thread => thread.threadId === +threadId);
    loadComments(threadId);
}


export const login = function (loginData) {
    const user = usuariosTotales.find(user => user.username === loginData.username);
    if (user && user.password === loginData.password) {
        state.currentUser = user;
        sessionStorage.setItem('currentUser', user.username);
        return true;
    }
    return false;
}


export const saveNewThread = function (title, content, category, creator) {
    // this.state.maxThreadId += 1;
    const newThread = new Thread(generateThreadId(),
                                    title, 
                                    {userId: creator.id,
                                    username: creator.username,
                                    userAvatar: creator.foto},
                                    category,
                                    content);
    // newThreadData.id = this.state.maxThreadId;
    threads.push(newThread);
}


export const saveNewComment = function (commentContent) {
    // let date = new Date();
    comments.push(new Comment(generateCommentId(),
                                {userId: state.currentUser.id,
                                username: state.currentUser.username,
                                userAvatar: state.currentUser.foto},
                                // date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear(),
                                utils.getFormattedDate(),
                                commentContent,
                                state.thread.getThreadId()));
}


export const logout = function () {
    state.currentUser = null;
    sessionStorage.removeItem('currentUser');
}


export const searchThreadByTitle = function (textTitle) {
    return threads.filter(thread => thread.getThreadTitle().toLowerCase().includes(textTitle));
}