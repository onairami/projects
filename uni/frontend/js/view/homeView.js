class HomeView {
    parentElement = document.querySelector('#app');
    data;


    clear() {
        this.parentElement.innerHTML = '';
    }

    navigationHTML() {
        if (this.data.defaultRole === 1) {
            return `<ul>
                        <li>
                            <input class="curr-courses nav-btn" type="button" value="Cursada">
                        </li>
                        <li>
                            <input class="pers-data nav-btn" type="button" value="Datos personales">
                        </li>
                        <li>
                            <input class="enroll-btn nav-btn" type="button" value="Inscripciones">
                        </li>
                        <li>
                            <input class="history-btn nav-btn" type="button" value="Historial académico">
                        </li>
                    </ul>`
        }
        
        if (this.data.defaultRole === 2) {            
            return `<ul>
                        <li>
                            <input class="teacher-curr-courses nav-btn" type="button" value="Cursos actuales">
                        </li>
                        <li>
                            <input class="pers-data nav-btn" type="button" value="Datos personales">
                        </li>
                        <li>
                            <input class="evaluations nav-btn" type="button" value="Evaluaciones" style="display: none;">
                        </li>
                    </ul>`
        }
    }

    generateMarkup() {        
            return `
            <div class="title">
                <h2> Sistema de gestión universitaria</h2>
            </div>
                    <div id='nav-bar'>
                        <div class="nav-buttons">`
                        +
                        this.navigationHTML()
                        +                        
                        `</div>
                        <div class="dropdown">
                            <span class="user-banner">${this.data.firstName} ${this.data.lastName}</span>
                            <ul class="dropdown-menu">
                                <li><button class="config-btn menu-btn" value="Configuración">Configuración</button></li>
                                <li><button class="logout-btn menu-btn" value="Cerrar sesión">Cerrar sesión</button></li>
                            </ul>
                        </div>
                    </div>
                    <div id='main-content'>
                        <h2 class="greeting-msg">¡Bienvenido, ${this.data.firstName} ${this.data.lastName}!</h2>
                    </div>`
    }

    render(userData) {
        this.data = userData;
        this.clear();
        this.parentElement.insertAdjacentHTML('afterbegin', this.generateMarkup());
    }

    addLogoutHandler(handler) {
        document.querySelector('.logout-btn').addEventListener('click', handler);
    }

    addStudentScheduleHandler(handler) {
        document.querySelector('.curr-courses').addEventListener('click',handler);
    }

    addPersonalDataHandler(handler) {
        document.querySelector('.pers-data').addEventListener('click',handler);
    }

    addEnrollHandler(handler){
        document.querySelector('.enroll-btn').addEventListener('click',handler);
    }

    addChangeConfigHandler(handler) {
        document.querySelector('.config-btn').addEventListener('click',handler);
    }

    addHistoryHandler(handler) {
        document.querySelector('.history-btn').addEventListener('click',handler);
    }

    addTeacherCoursesHandler(handler) {
        document.querySelector('.teacher-curr-courses').addEventListener('click',handler);
    }

    addEvaluationsHandler(handler) {
        document.querySelector('.evaluations').addEventListener('click',handler);
    }
}

export default new HomeView();