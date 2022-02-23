class SearchResultView {
    searchText;
    results;
    parentElement;

    setParentElement() {
        this.parentElement = document.querySelector('.display-content');
    }

    clear() {
        this.parentElement.innerHTML = '';
    }

    generateMarkup() {
        let html = `<h2 class="search-view-h2">Resultados de la búsqueda para: ${this.searchText}</h2>
                    <table class="threads-table">
                        <tr>
                            <th>Titulo</th>
                            <th>Creador</th>
                        </tr>`;

        for (let thread of this.results) {
            html += `<tr class="thread-row" data-idthread="${thread.threadId}">
                        <td class="thread-title">${thread.threadTitle}</td>
                        <td>${thread.threadCreator.username}</td>
                     </tr>`;
        }

        html += `</table>`;

        return html;
    }

    render(searchText, results) {
        this.searchText = searchText;
        this.results = results;
        this.setParentElement();
        this.clear();
        this.parentElement.insertAdjacentHTML('afterbegin', this.generateMarkup());
    }

    addOpenThreadHandler(handler) {
        document.querySelectorAll('.thread-row').forEach(row => row.addEventListener('click', function () {
            handler(this.dataset.idthread);
        }));
    }
}

export default new SearchResultView();