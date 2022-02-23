class ThreadView {
    parentElement;
    threadData;

    setParentElement() {
        this.parentElement = document.querySelector('.display-content');
    }

    clear() {
        this.parentElement.innerHTML = '';
    }

    generateMarkup() {
        return `
        <div class="post-contenido">
            <div class="post-user-data">
                <img class="user-avatar" src="${this.threadData.getThreadCreator().userAvatar}">
                <a>${this.threadData.getThreadCreator().username}</a>
            </div>
            <div class="post-content-data">
                <h1>${this.threadData.getThreadTitle()}</h1>
                <h4>${this.threadData.getThreadContent()}</h4>
            </div>
        </div>
        <h3>Respuestas</h3>
        <div class="thread-comment-section">
        </div>
        <button class="prev-page-comments">Página anterior</button>
        <button class="next-page-comments">Página siguiente</button>
        <div class="new-comment-section">
        </div>`;
    }

    render(thread) {
        this.threadData = thread;
        this.setParentElement();
        this.clear();
        this.parentElement.insertAdjacentHTML('afterbegin', this.generateMarkup());
    }

    addPrevCommentsPageHandler(handler) {
        document.querySelector('.prev-page-comments').addEventListener('click', handler);
    }

    addNextCommentsPageHandler(handler) {
        document.querySelector('.next-page-comments').addEventListener('click', handler);
    }

}

export default new ThreadView();