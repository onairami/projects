class UserMenu {
    userData;
    parentElement;

    setParentElement() {
        this.parentElement = document.querySelector('.banner');
    }

    generateMarkup() {
        return `
            <div class="dropdown-user-menu">
                <h3 class="greeting">Bienvenido, ${this.userData.username}</h3>
                <div class="dropdown-user-menu-content">
                    <p>Mi cuenta</p>
                    <p class="logout">Cerrar sesión</p>
                </div>
            </div>`
    }

    render(userData) {
        this.userData = userData;
        this.setParentElement();
        document.querySelector('.login-form').remove();
        this.parentElement.insertAdjacentHTML('beforeend',this.generateMarkup());
    }

    addLogoutHandler(handler) {
        document.querySelector('.logout').addEventListener('click',handler);
    }
}

export default new UserMenu();