class StudentHistoryView {
    parentElement;
    data;
    

    setParentElement() {
        this.parentElement = document.querySelector('#main-content');
    }
    
    clear() {
        this.parentElement.innerHTML = '';
    }

    generateMarkup() {
        let html = `
        <div class="history-page">
            <h2>Historial académico</h2>
            <div class="history-nav">
                <ul>
                    <li>
                        <input class="history-type-btn passed-courses-btn" type="button" value="Cursadas aprobadas">
                    </li>
                    <li>
                        <input class="history-type-btn reg-courses-btn" type="button" value="Cursadas regularizadas">
                    </li>
                    <li>
                        <input class="history-type-btn other-courses-btn" type="button" value="Otras cursadas">
                    </li>
                </ul>
            </div>
            <div class="history-list">
                <table class="history-table">
                </table>
            </div>
        </div>`;
        return html;
    }

    render(userData) {
        this.data = userData;
        this.setParentElement();
        this.clear();
        this.parentElement.insertAdjacentHTML('afterbegin', this.generateMarkup());
    }

    addHistoryTypeHandler(handler) {
        document.querySelector('.passed-courses-btn').addEventListener('click',function (e) {
            handler("PASSED");
        });
        document.querySelector('.reg-courses-btn').addEventListener('click',function (e) {
            handler("REGULARIZED");
        });
        document.querySelector('.other-courses-btn').addEventListener('click',function (e) {
            handler("OTHER");
        });
    }
}

export default new StudentHistoryView();