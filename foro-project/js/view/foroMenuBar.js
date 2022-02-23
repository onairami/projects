class ForoMenuBar {
    parentElement;

    setParentElement() {
        this.parentElement = document.querySelector('.main-content');
    }

    clear() {
        this.parentElement.innerHTML = '';
    }

    generateMarkup() {
        return `<div class="foro-top-menu-bar">
                    <input class="input thread-search-textbox" type="text" placeholder="Buscar por título...">
                    <input class="std-button thread-search-btn" type="submit" value="Buscar tema">
                    <input class="std-button advanced-thread-search-btn" type="submit" value="Búsqueda avanzada">
                    <input class="std-button input-new-thread hidden" type="button" value="Nuevo tema">
                </div>
                <div class="display-content">
                </div>`
    }

    render(handler) {
        this.setParentElement();
        this.clear();
        this.parentElement.insertAdjacentHTML('afterbegin', this.generateMarkup());

        if (sessionStorage.getItem("currentUser")) {
            document.querySelector('.input-new-thread').classList.remove('hidden');
            // this.addNewThreadViewHandler(handler);
            document.querySelector('.input-new-thread').addEventListener('click',handler);
        }
    }

    addNewThreadViewHandler(handler) {
        document.querySelector('.input-new-thread').addEventListener('click',handler);
    }

    addSearchHandler(handler) {
        document.querySelector('.thread-search-btn').addEventListener('click', function () {
            handler(document.querySelector('.thread-search-textbox').value);
            document.querySelector('.thread-search-textbox').value = '';
        });
    }

    addAdvancedSearchHandler(handler) {
        document.querySelector('.advanced-thread-search-btn').addEventListener('click', handler);
    }
}

export default new ForoMenuBar();