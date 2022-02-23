class TicketView {
    parentElement;
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

    renderSectorsCombo(sectors, ticketSectorId) {

        let htmlSectors;
    
        for (let sector of sectors) {
            if (ticketSectorId === sector.sectorId) {
                htmlSectors += `
                    <option class="ticket-sector-combo-option" value="${sector.sectorId}" selected>${sector.sectorName}</option>
                `;
            } else {
                htmlSectors += `
                    <option class="ticket-sector-combo-option" value="${sector.sectorId}">${sector.sectorName}</option>
                `;
    
            }
        }
    
        return htmlSectors;
    }

    renderStatusCombo(ticketStatus) {
        const ticketDifferentStatus = ['OPEN', 'PAUSED', 'CLOSED'];
    
        let htmlCombo;
    
        for (let status of ticketDifferentStatus) {
            if (ticketStatus === status) {
                htmlCombo += `
                    <option value="${ticketStatus}" selected>${ticketStatus}</option>
                `;
            } else {
                htmlCombo += `
                    <option value="${status}">${status}</option>
                `;
    
            }
        }
    
        return htmlCombo;
    }

    formatDate(dateString) {
        let date = new Date(dateString);
        date = date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear()+'   '+date.getHours()+':'+date.getMinutes();
        return date;
    }

    generateMarkup() {
        let html = `
    <div class="ticket-view" data-ticketnumber="${this.data.ticket.ticketId}">
        <div class="ticket-details">
            <label class="ticket-details-label">Number</label>
            <textarea readonly id="ticket-id" class="ticket-text-textarea ticket-id">${this.data.ticket.ticketId}</textarea>
        </div>
        <div class="ticket-details">
            <label class="ticket-details-label">Opened by</label>
            <textarea readonly id="ticket-creator" class="ticket-text-textarea ticket-creator" data-idcreator="${this.data.ticket.ticketCreator.userId}">${this.data.ticket.ticketCreator.username}</textarea>
        </div>
        <div class="ticket-details">
            <label class="ticket-details-label">Sector</label>        
            <select class="ticket-sector-combo">
                <option class="ticket-sector-combo-option" value="${this.data.ticket.ticketSectorId}" selected>${this.data.ticket.ticketSectorName}</option>
            </select>
        </div>
        <div class="ticket-details">
            <label class="ticket-details-label">Assigned to</label>     
            <select class="ticket-user-combo">
                <option class="ticket-user-combo-option" value=""></option>
                <option class="ticket-user-combo-option" value="${this.data.ticket.ticketAssignee.userId}" selected>${this.data.ticket.ticketAssignee.username}</option>
            </select>
        </div>            
        <div class="ticket-details">
            <label class="ticket-details-label">Status</label>
            <select class="ticket-status-combo">`
            +
            this.renderStatusCombo(this.data.ticket.ticketStatus)
            +
            `</select>
        </div>                        
        <div class="summary-section ticket-details">
            <label class="ticket-details-label">Summary</label>
            <textarea readonly class="ticket-text-textarea ticket-details-summary">${this.data.ticket.ticketSummary}</textarea>
        </div>                        
        <div class="details-section ticket-details">
            <label class="ticket-details-label">Details</label>
            <textarea readonly class="ticket-text-textarea ticket-details-description">${this.data.ticket.ticketDescription}</textarea>
        </div>    
        <input class="standard-btn update-ticket-btn" type="submit" value="Update ticket">
    </div>
    <div class="ticket-replies">
    <label class="">Replies</label>`;

    for (let reply of this.data.replies) {
        html += `
        <div class="reply-details">
            <span class="reply-author-span">${reply.replyAuthor}, </span>
            <span class="reply-date-span">${this.formatDate(reply.replyDate)}</span>
            <div class="reply-text">
                ${reply.replyText}    
            </div>
        </div>`
    }

    html += `
    </div>
    <div class="new-reply">
        <textarea class="new-reply-textbox" placeholder="New reply" type="text"></textarea>
        <input class="standard-btn new-reply-submit" type="submit" value="Submit">
    </div>`;

    return html;

    }

    addSectorComboHandler(handler) {
        document.querySelector('.ticket-sector-combo').addEventListener('click',function (e) {
            if (!e.target.classList.contains('ticket-sector-combo')) return;

            handler('UPDATE', document.querySelector('.ticket-sector-combo').value);
        })
    }

    addUserComboHandler(handler) {
        document.querySelector('.ticket-user-combo').addEventListener('click',function (e) {
            if (!e.target.classList.contains('ticket-user-combo')) return;

            handler('UPDATE', document.querySelector('.ticket-sector-combo').value);
        });
    }



    addUpdateTicketHandler(handler) {
        document.querySelector('.update-ticket-btn').addEventListener('click',function (e) {
            const updatedTicket = {
                ticketId: document.querySelector('#ticket-id').textContent,
                ticketCreator: document.querySelector('#ticket-creator').dataset.idcreator,
                ticketAssignee: document.querySelector('.ticket-user-combo').value,
                ticketSummary: document.querySelector('.ticket-details-summary').textContent,
                ticketDescription: document.querySelector('.ticket-details-description').textContent,
                ticketSector: document.querySelector('.ticket-sector-combo').value,
                ticketStatus: document.querySelector('.ticket-status-combo').value
            }

            handler(updatedTicket);
        });
    }


    addNewReplyHandler(handler) {
        document.querySelector('.new-reply-submit').addEventListener('click', function (e) {
            e.preventDefault();
            handler(document.querySelector('.new-reply-textbox').value,
                    document.querySelector('.ticket-view').dataset.ticketnumber);
        });        
    }
}

export default new TicketView();