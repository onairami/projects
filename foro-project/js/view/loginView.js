class LoginView {
    parentElement = document.querySelector('.app');
    // parentElement = document.querySelector('body');

    generateMarkup() {
        return `
                <div id='login-form'>
                    <input class="username-textbox login-elem" type="text" placeholder="username">
                    <input class="pass-textbox login-elem" type="password" placeholder="password">
                    <input class="login-btn login-elem" type="button" value="Login">
                    <a class="close-login">Close</a>
                    <p class="error-msg"></p>
                </div>`

    }

    render() {
        this.parentElement.insertAdjacentHTML('afterbegin', this.generateMarkup());
    }

    // Sin uso por ahora
    remove() {
        document.querySelector('#login-form').remove();
    }

    // Sin uso por ahora
    addLoginHandler(handler) {
        document.querySelector('.login-btn').addEventListener('click', function () {
            const userData = {
                username: document.querySelector('.username-textbox').value,
                password: document.querySelector('.pass-textbox').value
            }
            console.log(userData);
            handler(userData);
        })
    }

    // Sin uso por ahora
    addCloseLoginFormHandler(handler) {
        document.querySelector('.close-login').addEventListener('click',handler);
    }
}

export default new LoginView();