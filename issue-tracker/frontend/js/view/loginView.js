class LoginView {
    parentElement = document.querySelector('#app');
    userTextbox;
    passTextbox;
    data;

    setLoginElements() {
        this.userTextbox = document.querySelector('.username-textbox');
        this.passTextbox = document.querySelector('.pass-textbox');
        this.errorText = document.querySelector('.error-msg');
    }

    clear() {
        this.parentElement.innerHTML = '';
    }

    generateMarkup() {
        return `
                <div class='login-form'>
                    <input class="username-textbox login-elem" type="text" placeholder="username">
                    <input class="pass-textbox login-elem" type="password" placeholder="password">
                    <input class="login-btn login-elem" type="button" value="Login">
                    <p class="error-msg"></p>
                </div>`
    }

    render() {
        this.clear();
        this.parentElement.insertAdjacentHTML('afterbegin', this.generateMarkup());
        this.setLoginElements();
    }

    renderError(errorMessage) {
        if (errorMessage === 'Invalid username/password') {
            this.userTextbox.value = "";
            this.userTextbox.style.background = "#ec7575";
            this.passTextbox.value = "";
            this.passTextbox.style.background = "#ec7575";
        }
        this.errorText.textContent = errorMessage;
    }

    addLoginHandler(handler) {
        document.querySelector('.login-btn').addEventListener('click', function() {
            handler(document.querySelector('.username-textbox').value, document.querySelector('.pass-textbox').value);
        });
    }
}

export default new LoginView();