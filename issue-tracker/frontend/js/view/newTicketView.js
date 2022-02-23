class NewTicketView {
    parentElement;
    data;
    currentUserId;

    setParentElement() {
        this.parentElement = document.querySelector('.main');
    }

    clear() {
        this.parentElement.innerHTML = '';
    }

    generateMarkup() {
        let htmlSectors;

    for (let sector of this.data) {
        htmlSectors += `
        <option class="sector-select-option-new-ticket" value="${sector.sectorId}">${sector.sectorName}</option>
        `
    }

    let htmlNewTicket = `
    <form data-currentuserid="${this.currentUserId}" class="new-ticket-view">
        <div class="new-ticket-div">
            <label class="new-ticket-label">Sector</label>
            <select class="new-ticket-select sector-select-new-ticket">`
                +
                htmlSectors
                +
            `</select>
        </div>
        <div class="new-ticket-div">
            <label class="new-ticket-label">Assignee</label>
            <select class="new-ticket-select assignee-select-new-ticket">
                <option value=""></option>
            </select>
        </div>
        <div class="new-ticket-div">
            <label class="new-ticket-label">Summary</label>
            <textarea class="new-ticket-summary new-ticket-input" type="text"></textarea>
        </div>
        <div class="new-ticket-div">
            <label class="new-ticket-label">Details</label>
            <textarea class="new-ticket-description new-ticket-input" type="text"></textarea>
        </div>
            <input class="standard-btn new-ticket-submit" type="submit" value="Submit">
    </form>`;
    
    return htmlNewTicket;

    }

    render(currentUserId, data) {
        this.data = data;
        this.currentUserId = currentUserId;
        this.setParentElement();
        this.clear();
        this.parentElement.insertAdjacentHTML('afterbegin', this.generateMarkup())
    }

    addSubmitNewTicketHandler(handler) {
        document.querySelector('.new-ticket-submit').addEventListener('click',function(e) {
            e.preventDefault();

            const newTicket = {
                ticketCreator: document.querySelector('.new-ticket-view').dataset.currentuserid,
                ticketAssignee: document.querySelector('.assignee-select-new-ticket').value,
                ticketSummary: document.querySelector('.new-ticket-summary').value,
                ticketDescription: document.querySelector('.new-ticket-description').value,
                ticketSector: document.querySelector('.sector-select-new-ticket').value,
                ticketStatus: 'OPEN'
            }

            handler(newTicket);
        })
    }

    addSectorSelectHandler(handler) {
        document.querySelector('.sector-select-new-ticket').addEventListener('click',function (e) {
            if (!e.target.classList.contains('sector-select-new-ticket')) return;
            // if (document.querySelector('.sector-select-new-ticket').value === '') return;

            handler('NEW', document.querySelector('.sector-select-new-ticket').value);
        });        
    }

    addUserSelectHandler(handler) {
        document.querySelector('.assignee-select-new-ticket').addEventListener('click',function (e) {
            if (!e.target.classList.contains('assignee-select-new-ticket')) return;
            if (document.querySelector('.sector-select-new-ticket').value === '') return;

            handler('NEW', document.querySelector('.sector-select-new-ticket').value);
        });
    }

}

export default new NewTicketView();