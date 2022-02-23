import homeView from './view/homeView.js';
import * as model from './model.js';
import sectionView from './view/sectionView.js';
import threadView from './view/threadView.js';
import commentView from './view/commentView.js';
import newCommentView from './view/newCommentView.js';
import loginView from './view/loginView.js';
import newThreadView from './view/newThreadView.js';
import foroMenuBar from './view/foroMenuBar.js';
import userMenu from './view/userMenu.js';
import searchResultView from './view/searchResultView.js';

'use strict';

// let subforoActual;
// let usuarioActual;
// let threadActual;

// const banner = document.querySelector('.banner');
// const mainContent = document.querySelector('.main-content');
// const threadsSection = document.querySelector('.lista-threads');
// const displayThread = document.querySelector('.display-thread');
// const msjBienvenida = document.querySelector('.main-content h1');
// const container = document.querySelectorAll('.container');
// const loginForm = document.querySelector('.login-form');
// const btnLogin = document.querySelector('.input-submit');
// const btnCloseLogin = document.querySelector('.login-close');
// const inputUser = document.querySelector('.input-username');
// const inputPassword = document.querySelector('.input-password');
// const secNuevoComentario = document.querySelector('.nuevo-comentario-section');
// const displayContent = document.querySelector('.display-content');



// const Comentario = function (contenido, usuario) {
//     this.contenido = contenido;
//     this.usuario = usuario;
//     this.fecha = new Date();
// };

// const Thread = function (titulo, contenido, creador, categoria) {
//     this.titulo = titulo;
//     this.creador = creador;
//     this.categoria = categoria;
//     this.contenido = contenido;
//     this.comentarios = [];
// };


// const usuario1 = {
//     id: "0021",
//     username: "usuario1",
//     password: "12345",
//     foto: "pictures/escudoIndep3.png",
//     fechaRegistro: "01/01/2017"
// };

// const usuario2 = {
//     id: "0022",
//     username: "usuario2",
//     password: "12345",
//     foto: "pictures/escudoIndep2.png",
//     fechaRegistro: "01/01/2019"
// };

// const usuario3 = {
//     id: "0023",
//     username: "mariano",
//     password: "12345",
//     foto: "pictures/escudoIndep.png",
//     fechaRegistro: "01/01/2019"
// };

// const usuario4 = {
//     id: "0024",
//     username: "creador",
//     password: "12345",
//     foto: "pictures/escudoIndep3.png",
//     fechaRegistro: "01/01/2019"
// };

// const comentario1 = {
//     usuario: usuario2,
//     fecha: "01/01/2021",
//     contenido: "Sed tristique et ante ut sagittis. Suspendisse sed eleifend nibh. Nullam elementum nisi sed magna fringilla, non condimentum erat porta. Sed malesuada urna eget quam commodo pretium. Curabitur lacus purus, ultrices eu molestie a, fringilla et tellus. Donec ut diam quis elit consequat ultricies. Aenean quam ante, lacinia et orci ac, dictum dignissim arcu.",
//     threadId: "0001"
// };

// const comentario2 = {
//     usuario: usuario1,
//     fecha: "02/01/2021",
//     contenido: "Fusce hendrerit diam libero, ac finibus ipsum condimentum sollicitudin. Proin ut leo in mi hendrerit rutrum sed id metus. Duis condimentum ullamcorper maximus. Sed tempor risus quam, at facilisis sapien volutpat in. Phasellus vulputate egestas dapibus. Aliquam commodo mi nec neque pellentesque, auctor ultricies nisi egestas. Vivamus vitae pharetra velit. Nullam enim est, rhoncus vitae massa et, consequat feugiat metus. Cras ac luctus nisl, in porttitor libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed luctus massa mauris, ut lacinia augue sagittis auctor. Sed at auctor massa. Etiam et massa id ante interdum faucibus sed id tortor. Cras sed ex quis nulla convallis semper. Sed rhoncus dictum ligula, et imperdiet sem aliquam vitae.",
//     threadId: "0001"
// };

// const comentario3 = {
//     usuario: usuario3,
//     fecha: "02/01/2021",
//     contenido: "Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed et nibh quam. Donec nec dolor eget est pulvinar lobortis et vel leo. Nunc leo arcu, vestibulum sit amet neque vel, molestie aliquet nisi. Cras magna arcu, placerat vel suscipit dignissim, pharetra eget nunc. Aliquam sit amet tincidunt tellus. Donec arcu urna, condimentum cursus sem vel, efficitur convallis diam. Nunc bibendum commodo tincidunt. Sed quis libero pulvinar, commodo sapien vitae, imperdiet ex.",
//     threadId: "0002"
// };

// const comentario4 = {
//     usuario: usuario3,
//     fecha: "02/01/2021",
//     contenido: "A",
//     threadId: "0001"
// };

// const thread1 = {
//     id: "0001",
//     titulo: 'Tema 1',
//     creador: usuario3,
//     categoria: 'Futbol local',
//     contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur, sem ut dictum vehicula, dui lectus aliquet mauris, sit amet tristique leo magna at nunc. Phasellus auctor pharetra nibh id semper. Nulla turpis eros, dapibus at metus eu, congue egestas arcu. Curabitur vel imperdiet nulla, iaculis scelerisque velit. Curabitur elementum leo lorem, at luctus sapien varius a. Phasellus placerat aliquet enim vel cursus. Suspendisse venenatis lorem eu tortor fringilla interdum. In hac habitasse platea dictumst. Nullam eget auctor sem, eu consequat justo. ',
//     comentarios: [comentario1, comentario2, comentario4]
// };

// const thread2 = {
//     id: "0002",
//     titulo: "Tema 2",
//     creador: usuario2,
//     categoria: 'Futbol local',
//     contenido: 'Nada por aquí.',
//     comentarios: []
// };

// const thread3 = {
//     id: "0003",
//     titulo: "Tema 3",
//     creador: usuario3,
//     categoria: 'Futbol local',
//     contenido: 'Nada por allá.',
//     comentarios: []
// };

// const threadsTotales = [thread1, thread2, thread3];
// let threadList = [];
// let threadsFutLocal = [];
// let threadsFutInternacional = [];
// let threadsActInst = [];

// const usuariosTotales = [usuario1, usuario2, usuario3, usuario4];




// const mostrarThreads = function (threads) {

//     displayContent.innerHTML = '';
//     msjBienvenida.remove();
    
//     let html = `
//         <h2>${subforoActual}</h2>
//         <div class="thread-list-title">
//             <a>Título</a><a>Creador</a>
//         </div>
//     `
            
//     displayContent.insertAdjacentHTML('beforeend',html);
    
//     threads.forEach(function (thread) {

//         let html = `
//             <div class="thread-list-item">
//                 <a class="thread-title">${thread.titulo}</a><a>${thread.creador.nombre}</a>
//             </div>        
//         `
//         displayContent.insertAdjacentHTML('beforeend',html);

//     })

//     const threadTitle = document.querySelectorAll('.thread-title');
//     for (let i=0; i<threadTitle.length; i++)
//     threadTitle[i].addEventListener('click',handlerAbrirThread);
    
// }

// const cargarThreads = function(subforo) {

//     /* Deberia ir a buscar a algun almacen de datos */

//     return threadsTotales.filter(thread => thread.categoria === subforo);
// }

// const mostrarSubforo = function (subforo) {
//     subforoActual = subforo;
//     threadList = cargarThreads(subforo);
//     mostrarThreads(threadList);
// };

// const handlerSubforo = function() {

//     mostrarSubforo(this.textContent);

// };

// const agregarBtnNuevoThread = function () {
//     const htmlBtnNuevoThread = '<input class="new-thread-btn" type="button" value="Crear tema">';
//     document.querySelector('.foro-top-menu-bar').insertAdjacentHTML('afterbegin',htmlBtnNuevoThread);
//     const btnNuevoThread = document.querySelector('.new-thread-btn');
//     btnNuevoThread.addEventListener('click',handlerNewThread);
// };

// const handlerLogin = function(e) {
//     e.preventDefault();

//     const user = usuariosTotales.find(usuario => usuario.username === inputUser.value);

//     if (user.password === inputPassword.value) {
//         usuarioActual = user;
//         agregarBtnNuevoThread();
//         loginForm.style.opacity = "0";
        
//         const htmlSaludo = `
//         <h3 style="margin-right: 2em">Bienvenido, ${usuarioActual.username}</h3>
//         `
//         banner.insertAdjacentHTML('beforeend',htmlSaludo);
//     };

//     inputUser.value = "";
//     inputPassword.value = "";
// }

// const mostrarThread = function (thread) {

//     displayContent.innerHTML = '';
    
//     msjBienvenida.remove();

//     let htmlThread = `
//         <div class="post-contenido">
//             <div class="post-user-data">
//                 <img class="user-avatar" src="${thread.creador.foto}">
//                 <a>${thread.creador.username}</a>
//             </div>
//             <div class="post-content-data">
//                 <h1>${thread.titulo}</h1>
//                 <h4>${thread.contenido}</h4>
//             </div>
//         </div>
//     `;

//     const comentarios = thread.comentarios;

//     for (let i = 0; i < comentarios.length; i++) {
//         htmlThread += `
//         <div class="post-contenido">
//             <div class="post-user-data">
//                 <img class="user-avatar" src="${comentarios[i].usuario.foto}">
//                 <a>${comentarios[i].usuario.username}</a>
//             </div>
//             <div class="post-content-data">
//                 <p>${comentarios[i].contenido}<p>
//             </div>
//         </div>
//         `;
//     };

//     displayContent.insertAdjacentHTML('beforeend',htmlThread);

//     if (usuarioActual) {

//         const htmlComentarioBox = `
//             <div class="nuevo-comentario-section">
//                 <p>Nuevo comentario</p>
//                 <input class="textbox" type="text">
//                 <input class="submit-btn" type="submit" value="Enviar">
//             </div>
//         `;
    
//         displayContent.insertAdjacentHTML('beforeend',htmlComentarioBox);

//         const comentarioTextbox = document.querySelector('.textbox');

//         const btnComentario = document.querySelector('.submit-btn');

//         btnComentario.addEventListener('click', function () {
//             const nuevoComentario = new Comentario(comentarioTextbox.value,usuarioActual);
//             thread.comentarios.push(nuevoComentario);
//             mostrarThread(thread);
//         })

//     };

// };

// const handlerAbrirThread = function() {
    
//     threadActual = threadList.find(thread => thread.titulo === this.textContent);
//     mostrarThread(threadActual);

// };

// const handlerNewThread = function () {
    
//     displayContent.innerHTML = '';

//     const htmlNewThread = `
//             <div class="">
//                 <p>Nuevo tema</p>
//                 <p>Categoría</p>
//                 <select class="thread-category-select">
//                     <datalist>
//                         <option>Futbol local</option>
//                         <option>Futbol internacional</option>
//                         <option>Actualidad institucional</option>
//                     </datalist>
//                 </select>
//                 <p>Título</p>
//                 <input class="thread-title-textbox" type="textbox">
//                 <p>Contenido</p>
//                 <input class="thread-content-textbox" type="textbox">
//                 <input class="new-thread-submit-btn" type="submit" value="Crear tema">
//             </div>
//         `;

//     displayContent.insertAdjacentHTML('beforeend', htmlNewThread);

//     const threadTitleTextbox = document.querySelector('.thread-title-textbox');
//     const threadContentTextbox = document.querySelector('.thread-content-textbox');
//     const threadCategorySelect = document.querySelector('.thread-category-select');

//     const btnNewThreadSubmit = document.querySelector('.new-thread-submit-btn');
//     btnNewThreadSubmit.addEventListener('click',function () {
//         const nuevoThread = new Thread(threadTitleTextbox.value,
//             threadContentTextbox.value, usuarioActual,
//             threadCategorySelect.value);
//         threadsTotales.push(nuevoThread);
//         mostrarSubforo(threadCategorySelect.value);
//     });


// };





// const btnLocal = document.querySelector('.local');
// btnLocal.addEventListener('click',handlerSubforo);

// const btnInternacional = document.querySelector('.internacional');
// btnInternacional.addEventListener('click',handlerSubforo);

// const btnInstitucional = document.querySelector('.institucional');
// btnInstitucional.addEventListener('click',handlerSubforo);

// btnLogin.addEventListener('click',handlerLogin);



/////////////////////////////

const clearSessionStorage = function () {
    sessionStorage.removeItem('currentUser');
}


const newCommentController = function (commentContent) {
    model.saveNewComment(commentContent);
    // showThreadController(model.state.thread.getThreadId());
    model.loadComments(model.state.thread.getThreadId());
    commentView.render(model.state.comments);
    newCommentView.clearTextbox();
}


const newCommentFieldCheck = function (commentText, submitButton) {
    if (commentText) {
        submitButton.disabled = false;
        return;
    }
    submitButton.disabled = true;
}


const prevCommentsHandler = function () {
    if (model.state.commentPage === 1) return;
    model.state.commentPage--;
    model.loadComments(model.state.thread.getThreadId()/*, model.state.commentPage*/);
    commentView.render(model.state.comments);
}


const nextCommentsHandler = function () {
    model.state.commentPage++;
    model.loadComments(model.state.thread.getThreadId()/*, model.state.commentPage*/);
    commentView.render(model.state.comments);
}


const showThreadController = function (threadId) {
    model.state.commentPage = 1;
    model.loadThread(threadId/*, model.state.commentPage*/);
    threadView.render(model.state.thread);
    threadView.addPrevCommentsPageHandler(prevCommentsHandler);
    threadView.addNextCommentsPageHandler(nextCommentsHandler);
    commentView.render(model.state.comments);
    if (sessionStorage.getItem('currentUser')) {
        newCommentView.render();
        newCommentView.addNewcommentHandler(newCommentController);
        newCommentView.addFieldCheckHandler(newCommentFieldCheck);
    }
}


const showSubforoController = function (category) {
    model.loadThreads(category);
    foroMenuBar.render(showNewThreadViewController);
    foroMenuBar.addSearchHandler(searchByTitleController);
    foroMenuBar.addAdvancedSearchHandler(advancedSearchController);
    sectionView.render(category, model.state.threads);
    sectionView.addOpenThreadHandler(showThreadController);
}


const showLoginFormController = function () {
    loginView.render();
    loginView.addLoginHandler(loginController);
    loginView.addCloseLoginFormHandler(closeLoginFormController);
    homeView.addBlur();
}


const closeLoginFormController = function () {
    homeView.removeBlur();
    loginView.remove();
}


const newThreadController = function (threadTitle, threadContent, threadCategory) {
    model.saveNewThread(threadTitle, threadContent, threadCategory, model.state.currentUser);
    homeView.render();
    homeView.addSubforoHandler(showSubforoController);
    /*if (model.state.currentUser)*/ userMenu.render(model.state.currentUser);
    userMenu.addLogoutHandler(logoutController);
    foroMenuBar.render(showNewThreadViewController);
}


const newThreadFieldcheckController = function (title, content, submitButton) {
    if (title && content) {
        submitButton.disabled = false;
        return;
    }
    submitButton.disabled = true;
}


const showNewThreadViewController = function () {
    newThreadView.render();
    newThreadView.addNewThreadHandler(newThreadController);
    newThreadView.addFieldCheckHandler(newThreadFieldcheckController);
}


const logoutController = function () {
    model.logout();
    homeView.render();
    homeView.addSubforoHandler(showSubforoController);
    homeView.addLoginHandler(loginController);
    foroMenuBar.render();
    foroMenuBar.addSearchHandler(searchByTitleController);
    foroMenuBar.addAdvancedSearchHandler(advancedSearchController);
}


const searchByTitleController = function (titleText) {
    // alert('No implementado todavia');
    if (!titleText) return;
    const result = model.searchThreadByTitle(titleText);
    console.log(result);
    searchResultView.render(titleText, result);
    searchResultView.addOpenThreadHandler(showThreadController);
}


const advancedSearchController = function () {
    alert('Función no implementada todavía');
}


const loginController = function (formObject) {
    if (model.login(formObject)) {
    // /*if (model.currentUser)*/ if (sessionStorage.getItem('currentUser')) init(showNewThreadViewController);
    // init();
        homeView.render();
        homeView.addSubforoHandler(showSubforoController);
        userMenu.render(model.state.currentUser);
        userMenu.addLogoutHandler(logoutController);
        foroMenuBar.render(showNewThreadViewController);
        foroMenuBar.addSearchHandler(searchByTitleController);
        foroMenuBar.addAdvancedSearchHandler(advancedSearchController);
        return;
    }

    homeView.resetLoginForm();
}


const init = function (handlerNewThreadView) {
    homeView.render();
    // homeView.addNewThreadViewHandler(handlerNewThreadView);
    homeView.addSubforoHandler(showSubforoController);
    homeView.addLoginHandler(loginController);
    foroMenuBar.render();
    foroMenuBar.addSearchHandler(searchByTitleController);
    foroMenuBar.addAdvancedSearchHandler(advancedSearchController);
    // if (!sessionStorage.getItem('currentUser')) 
    // homeView.addShowLoginFormHandler(showLoginFormController);
}

clearSessionStorage();
init();









