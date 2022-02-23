class SectionView {
    parentElement;
    currentElement;
    category;
    threads;

    setParentElement() {
        this.parentElement = document.querySelector('.display-content');
        // this.parentElement = document.querySelector('.main-content');
    }

    setCurrentElement() {
        this.currentElement = document.querySelector('.display-content');        
    }

    clear() {
        this.parentElement.innerHTML = '';
    }

    // generateMarkup2 () {

    //     let html = `<table class="threads-table">
    //                     <tr>
    //                         <th>Titulo</th>
    //                         <th>Creador</th>
    //                     </tr>`;

    //     for (let thread of this.threads) {
    //         html += `<tr class="thread-row" data-idthread="${thread.id}">
    //                     <td class="thread-title">${thread.titulo}</td>
    //                     <td>${thread.creador.nombre}</td>
    //                  </tr>`;
    //     }
        
    //     html += `</table>`;

    //     return html;

    // }

    generateMarkup() {
        let html = `<table class="threads-table">
                            <tr>
                                <th>Titulo</th>
                                <th>Creador</th>
                            </tr>`;

        for (let thread of this.threads) {
            html += `<tr class="thread-row" data-idthread="${thread.threadId}">
                        <td class="thread-title">${thread.threadTitle}</td>
                        <td>${thread.threadCreator.username}</td>
                     </tr>`;
        }

        html += `</table>`;

        return html;
    }

    render (category, threads) {
        this.category = category;
        this.threads = threads;
        this.setParentElement();
        this.clear();
        // this.setCurrentElement();
        // if (this.currentElement) this.currentElement.innerHTML = '';
        // this.parentElement.insertAdjacentHTML('afterbegin', this.generateMarkup());
        this.parentElement.insertAdjacentHTML('beforeend', this.generateMarkup());
    }

    addOpenThreadHandler(handler) {
        document.querySelectorAll('.thread-row').forEach(row => row.addEventListener('click', function () {
            handler(this.dataset.idthread);
        }));
    }
}

export default new SectionView();