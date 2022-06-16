class TeacherCoursesView {
    parentElement;
    data;

    render(data) {
        this.data = data;
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
        let html = `
        <div class="teacher-courses-page">
            <h2>Cursos actuales</h2>
            <table class="teacher-courses-list">
                <tr>
                    <th>Código</th>
                    <th>Materia</th>
                </tr>`;
        for (let course of this.data) {
            html += `
                <tr>
                    <td>${course.courseCode}</td>
                    <td>${course.courseName}</td>
                </tr>`;
        }
        html += `
            </table>
        </div>`;
        return html;
    }
}

export default new TeacherCoursesView();