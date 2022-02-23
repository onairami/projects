class SectorView {
    parentElement;
    data;

    setParentElement() {
        this.parentElement = document.querySelector('.ticket-sector-combo');
    }

    clear() {
        this.parentElement.innerHTML = '';
    }

    generateMarkup() {
        let htmlSectors;
        for (let sector of this.data.sectors) {
            if (this.data.currentTicketSectorId === sector.sectorId) {
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

    render(data) {
        this.data = data;
        this.setParentElement();
        this.clear();
        this.parentElement.insertAdjacentHTML('afterbegin', this.generateMarkup());
    }
}

export default new SectorView();