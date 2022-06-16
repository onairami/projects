class CourseEnrollView {
    parentElement;
    data;

    render() {
        this.setParentElement();
        this.clear();
        this.parentElement.insertAdjacentHTML('afterbegin', this.generateMarkup());
    }

    setParentElement() {
        this.parentElement = document.querySelector('#main-content');
    }

    clear() {
        this.parentElement.innerHTML = '';
    }

    generateMarkup() {
        return `
        <div class="enroll-page">
            <h2>Inscripciones</h2>
            <p>El período de inscripciones está cerrado.</p>
        </div>`
    }
}

export default new CourseEnrollView();