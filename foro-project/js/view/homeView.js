class HomeView {
    parentElement = document.querySelector('.app');
    
    clear() {
        this.parentElement.innerHTML = '';
    }

    generateMarkup() {
        return `        
    <div class="banner container-banner">
    <h2 class="brand-name">Foro</h2>
    <div class="login-form login-show">
        <form>
            <input class="login-input input-username" name="username" placeholder="Usuario">
            <input class="login-input input-password" name="password" type="password" placeholder="Contraseña">
            <input class="login-input input-submit show-login-btn" type="submit" value="Iniciar sesión">
        </form>
    </div>
</div>

<div class="main container-main">

    <div class=main-menu>
            <button class="menu-button local" value="Futbol local">Futbol local</button>
            <button class="menu-button internacional" value="Futbol internacional">Futbol internacional</button>
            <button class="menu-button institucional" value="Actualidad institucional">Actualidad institucional</button>
    </div>

    <div class=main-content>
        <div class="display-content">     
        <h1>
            Bienvenido al Foro
        </h1>           
        </div>
    </div>
</div>`

    }

    render() {
        this.clear();
        // this.addCloseLoginHandler();
        this.parentElement.insertAdjacentHTML('afterbegin', this.generateMarkup());
        // if (sessionStorage.getItem("currentUser")) {
        //     // document.querySelector('.input-new-thread').classList.remove('hidden');
        //     document.querySelector('.login-form').remove();
            
        //     const htmlGreeting = `
        //     <h3 style="margin-right: 2em">Bienvenido, ${sessionStorage.getItem("currentUser")}</h3>
        //     `
        //     document.querySelector('.banner').insertAdjacentHTML('beforeend',htmlGreeting);

        //     // this.addNewThreadViewHandler(handler);
        // }
    }

    // Sin uso por ahora
    addBlur() {
        // this.parentElement.style.filter = "blur(8px)";
        if (!this.parentElement.classList.contains('blurred')) this.parentElement.classList.add('blurred');
    }

    // Sin uso por ahora
    removeBlur() {
        // this.parentElement.style.filter = "blur(8px)";
        if (this.parentElement.classList.contains('blurred')) this.parentElement.classList.remove('blurred');
    }

    resetLoginForm() {
        document.querySelector('.input-username').value = '';
        document.querySelector('.input-password').value = '';
        document.querySelector('.input-username').style.backgroundColor = '#914242';
        document.querySelector('.input-password').style.backgroundColor = '#914242';

    }

    addSubforoHandler(handler) {
        document.querySelectorAll('.menu-button').forEach(subforo => subforo.addEventListener('click',function () {
            handler(this.value);
        }));
    }

    // Sin uso por ahora
    addShowLoginFormHandler(handler) {
        document.querySelector('.show-login-btn').addEventListener('click',function (e) {
            e.preventDefault();
            handler();
        });
    }

    addLoginHandler(handler) {
        document.querySelector('.show-login-btn').addEventListener('click', function (e) {
            e.preventDefault();
            const userData = {
                username: document.querySelector('.input-username').value,
                password: document.querySelector('.input-password').value
            }
            handler(userData);
        })
    }

    // Sin uso por ahora
    addCloseLoginHandler() {
        this.parentElement.addEventListener('click', function () {
            const loginForm = document.querySelector('#login-form');

            if (loginForm) loginForm.remove();
        });
    }

    // addNewThreadViewHandler(handler) {
    //     document.querySelector('.input-new-thread').addEventListener('click',handler);
    // }
}

export default new HomeView();