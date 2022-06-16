class StudentHistoryListView {
    parentElement;
    data;
    passedCourses;
    regCourses;
    otherCourses;
    

    setParentElement() {
        this.parentElement = document.querySelector('.history-table');
    }
    
    clear() {
        this.parentElement.innerHTML = '';
    }

    generateMarkup(historyType) {
        let html = '';
        if (historyType === "PASSED") {
            html += `
                <tr>
                    <th>Materia</th>
                    <th>Año de cursado</th>
                    <th>Fecha de regularización</th>
                    <th>Fecha de aprobación</th>
                    <th>Nota final</th>
                </tr>`;
            for (let course of this.passedCourses) {
                html += `
                <tr>
                    <td>${course.pastCourseName}</td>
                    <td>${course.pastCourseYear}</td>
                    <td>${course.pastCourseRegularizationDate}</td>
                    <td>${course.pastCoursePassDate}</td>
                    <td>${course.pastCourseFinalGrade}</td>
                </tr>`;
            }
            return html;
        }

        if (historyType === "REGULARIZED") {
            html += `
                <tr>
                    <th>Materia</th>
                    <th>Año de cursado</th>
                    <th>Fecha de regularización</th>
                </tr>`;
            for (let course of this.regCourses) {
                html += `
                <tr>
                    <td>${course.pastCourseName}</td>
                    <td>${course.pastCourseYear}</td>
                    <td>${course.pastCourseRegularizationDate}</td>
                </tr>`;
            }
            return html;
        }

        if (historyType === "OTHER") {
            html += `
                <tr>
                    <th>Materia</th>
                    <th>Año de cursado</th>
                </tr>`;
            for (let course of this.otherCourses) {
                html += `
                <tr>
                    <td>${course.pastCourseName}</td>
                    <td>${course.pastCourseYear}</td>
                </tr>`;
            }
            return html;
        }
    }

    filterCourses() {
        this.passedCourses = this.data.history.filter(course => course.pastCoursePassDate);
        this.regCourses = this.data.history.filter(course => !course.pastCoursePassDate && course.pastCourseRegularizationDate);
        this.otherCourses = this.data.history.filter(course => !course.pastCoursePassDate && !course.pastCourseRegularizationDate);
    }

    render(userData, historyType) {
        this.data = userData;
        this.setParentElement();
        this.clear();
        this.filterCourses();
        this.parentElement.insertAdjacentHTML('afterbegin', this.generateMarkup(historyType));
    }
}

export default new StudentHistoryListView();