class LoginView {
    parentElement = document.querySelector('#app');
    userTextbox;
    passTextbox;
    data;

    setLoginElements() {
        this.userTextbox = document.querySelector('.userno-textbox');
        this.passTextbox = document.querySelector('.pass-textbox');
        this.errorText = document.querySelector('.error-msg');
    }

    clear() {
        this.parentElement.innerHTML = '';
    }

    generateMarkup() {
        return `
                <div class='login-container'>
                    <div class='login-form'>
                        <input class="userno-textbox login-elem" type="text" placeholder="Legajo">
                        <input class="pass-textbox login-elem" type="password" placeholder="Contraseña">
                        <input class="login-btn login-elem" type="button" value="Ingresar">
                        <p class="error-msg hidden">Legajo o contraseña incorrectos</p>
                    </div>
                </div>`
    }

    render() {
        this.clear();
        this.parentElement.insertAdjacentHTML('afterbegin', this.generateMarkup());
        this.setLoginElements();
    }

    renderError() {
        this.userTextbox.value = "";
        this.userTextbox.style.background = "#ec7575";
        this.passTextbox.value = "";
        this.passTextbox.style.background = "#ec7575";
        this.errorText.classList.remove('hidden');
    }

    addLoginHandler(handler) {
        document.querySelector('.login-btn').addEventListener('click', function() {
            handler(document.querySelector('.userno-textbox').value, document.querySelector('.pass-textbox').value);
        });
    }
}

export default new LoginView();