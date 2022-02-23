class UserSelectNewTicketView {
    parentElement;
    data;

    setParentElement() {
        this.parentElement = document.querySelector('.assignee-select-new-ticket');
    }

    clear() {
        this.parentElement.innerHTML = '';
    }

    setEmptySelect() {
        this.setParentElement();
        this.parentElement.innerHTML = '<option value=""></option>';
    }

    generateMarkup() {
        let htmlUsers = '<option value=""></option>';
        
        for (let user of this.data) {
            htmlUsers += `
            <option value="${user.userId}">${user.username}</option>
            `
        };

        return htmlUsers;
    }

    render(data) {
        this.data = data;
        this.setParentElement();
        this.clear();
        this.parentElement.insertAdjacentHTML('afterbegin', this.generateMarkup());
    }

}

export default new UserSelectNewTicketView();