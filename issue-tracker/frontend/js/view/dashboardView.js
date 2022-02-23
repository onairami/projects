class DashboardView {
    parentElement;// = document.querySelector('.main');
    data;

    render(data) {
        this.data = data;
        this.setParentElement();
        this.clear();
        this.parentElement.insertAdjacentHTML('afterbegin', this.generateMarkup());
    }

    setParentElement() {
        this.parentElement = document.querySelector('.main');
    }

    clear() {
        this.parentElement.innerHTML = '';
    }
    
    generateMarkup() {
        let htmlDashboard = `
        <input class="search-textbox" type="text" placeholder="Search tickets...">
        <input class="standard-btn search-btn" type="button" value="Search">
        <input class="standard-btn new-ticket-btn" type="button" value="New ticket">
        <div class="ticket-list">
        <table class="ticket-table">
            <tr>
                <th>Number</th>
                <th>Status</th>
                <th>Summary</th>
                <th>Creator</th>
            </tr>`;
        for (let ticket of this.data) {htmlDashboard +=
            `<tr>
                <td><a class="ticket-link" href="#${ticket.ticketId}">${ticket.ticketId}</a></td>
                <td>${ticket.ticketStatus}</td>
                <td>${ticket.ticketSummary}</td>
                <td>${ticket.ticketCreator.username}</td>
            </tr>`}
        
        htmlDashboard += `   </table>
            </div>`;
            
        return htmlDashboard;
    }

    addHandlerTickets(handler) {
        for (let ticket of document.querySelectorAll('.ticket-link')) {
            ticket.addEventListener('click', function (e) {
                handler(this.textContent);
                })
        }
    }

    addNewTicketHandler(handler) {
        document.querySelector('.new-ticket-btn').addEventListener('click',handler);
    }
}

export default new DashboardView()