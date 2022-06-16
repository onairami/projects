class StudentScheduleView {
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
        <div class="schedule-page">
            <h2>Cursos actuales</h2>
            <table class="courses-list">
                <tr>
                    <th>Código</th>
                    <th>Materia</th>
                    <th>Profesor</th>
                </tr>`;
        for (let course of this.data) {
            html += `
                <tr>
                    <td>${course.courseCode}</td>
                    <td>${course.courseName}</td>
                    <td>${course.courseTeacher}</td>
                </tr>`;
        }
        html += `
            </table>
        </div>`;

        return html;
    }
}

export default new StudentScheduleView();