// 'use strict'

// export function renderHome(mainElement) {
//     const html = `
//     <div class="main-nav-bar">
//         <input type="button" value="Menu">
//     </div>
//     <div class="main">
//         <div class="ticket-list">
//         <table>
//             <tr>
//                 <th>Titulo</th>
//                 <th>Description</th>
//                 <th>Creador</th>
//             </tr>                        
//         </table>
//         </div>
//     </div>`
//     mainElement.innerHTML = "";
//     mainElement.insertAdjacentHTML('afterbegin',html);
// }

class HomeView {
    parentElement = document.querySelector('#app');

    clear() {
        this.parentElement.innerHTML = '';
    }

    generateMarkup() {
        return `
        <div class="main-nav-bar">
        <h1 id=title>Ticket manager</h1>
        </div>
        <div class="menu">
            <input type="button" class="menu-btn dashboard-button" value="Dashboard">
            <input type="button" class="menu-btn openedbyme-button" value="Opened by me">
        </div>
        <div class="main">
        </div>`;
    }

    render() {
        this.clear();
        this.parentElement.insertAdjacentHTML('afterbegin', this.generateMarkup());
    }

    addDashboardHandler(handler) {
        document.querySelector('.dashboard-button').addEventListener('click', handler);
    }
}

export default new HomeView();
