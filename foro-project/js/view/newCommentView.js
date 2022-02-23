class NewCommentView {
    parentElement;

    setParentElement() {
        this.parentElement = document.querySelector('.new-comment-section');
    }

    clear() {
        this.parentElement.innerHTML = '';
    }

    clearTextbox() {
        document.querySelector('.new-comment-textarea').value = '';
        document.querySelector('.new-comment-btn').disabled = true;
    }

    generateMarkup() {
        return `<h3>Nuevo comentario</h3>
                <textarea class="new-comment-textarea textbox"></textarea>
                <input class="new-comment-btn submit-btn" type="submit" value="Enviar" disabled="true">`;
    }

    render() {
        this.setParentElement();
        this.clear();
        this.parentElement.insertAdjacentHTML('afterbegin', this.generateMarkup());
    }

    addNewcommentHandler(handler) {
        document.querySelector('.new-comment-btn').addEventListener('click', function () {
            handler(document.querySelector('.new-comment-textarea').value);
        });
    }

    addFieldCheckHandler(handler) {
        document.querySelector('.new-comment-textarea').addEventListener('input', function () {
            handler(this.value, document.querySelector('.new-comment-btn'));
        })
    }
}

export default new NewCommentView();