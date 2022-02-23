class NewThreadView {
    parentElement;
    currentUser;

    setParentElement() {
        this.parentElement = document.querySelector('.main-content');
    }

    clear() {
        this.parentElement.innerHTML = '';
    }

    generateMarkup() {
        return `
        <div class="new-thread-view">
            <h2 class="new-thread-title">Nuevo tema</h2>
            <div class="new-thread-category-section">
            <p>Categoría</p>
            <select class="thread-category-select">
                <datalist>
                    <option>Futbol local</option>
                    <option>Futbol internacional</option>
                    <option>Actualidad institucional</option>
                </datalist>
            </select>
            </div>
            <div class="new-thread-title-section">
            <p>Título</p>
            <textarea class="new-thread-title-textarea"></textarea>
            </div>
            <div class="new-thread-content-section">
            <p>Contenido</p>
            <textarea class="new-thread-content-textarea"></textarea>
            </div>
            <input class="new-thread-submit-btn" type="submit" value="Crear tema" disabled="true">
        </div>
    `;
    }

    render() {
        // this.currentUser = currentUser;
        this.setParentElement();
        this.clear();
        this.parentElement.insertAdjacentHTML('afterbegin', this.generateMarkup());
    }

    addNewThreadHandler(handler) {
        document.querySelector('.new-thread-submit-btn').addEventListener('click', function () {
            const newThread = {
                titulo: document.querySelector('.new-thread-title-textarea').value,
                contenido: document.querySelector('.new-thread-content-textarea').value,
                creador: {},//currentUser,
                categoria: document.querySelector('.thread-category-select').value,
                comentarios: []
            }

            // handler(newThread);
            handler(document.querySelector('.new-thread-title-textarea').value,
                    document.querySelector('.new-thread-content-textarea').value,
                    document.querySelector('.thread-category-select').value);
        })
    }

    addFieldCheckHandler(handler) {
        document.querySelector('.new-thread-view').addEventListener('input', function () {
            handler(document.querySelector('.new-thread-title-textarea').value,
                    document.querySelector('.new-thread-content-textarea').value,
                    document.querySelector('.new-thread-submit-btn'))
        })
    }
}

export default new NewThreadView();