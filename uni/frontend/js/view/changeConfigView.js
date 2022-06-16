class ChangeConfigView {
    parentElement;
    userData;

    render(data) {
        this.userData = data;
        this.setParentElement();
        this.clear();
        this.parentElement.insertAdjacentHTML('afterbegin', this.generateMarkup());
    }

    setParentElement() {
        this.parentElement = document.querySelector('#main-content');
    }
    
    clear() {
        this.parentElement.innerHTML = '';
    }

    generateMarkup() {
        let htmlRoles;

        for (let role of this.userData.roles) {
            if (role.roleId === this.userData.defaultRole)
                htmlRoles += `
                    <option class="role-select-option" value="${role.roleId}" selected>${role.roleDescription}</option>
                    `
            else
                htmlRoles += `
                    <option class="role-select-option" value="${role.roleId}">${role.roleDescription}</option>
                    `
        }

        let html = `
        <div class="pers-config-page">
            <h2>Configuración</h2>
            <dl class="pers-config-form-group" data-userid="${this.userData.userId}">
                <dt>
                    <label>Perfil predeterminado</label>
                </dt>
                <dd>
                    <select class="role-select">`
                    +
                    htmlRoles
                    +
                    `</select>
                </dd>
                <dt>
                    <label>Mail de notificaciones</label>
                </dt>
                <dd>
                    <input class="email-config" type="text" value="${this.userData.notificationEmail}">
                    <p class="email-error hidden">Dirección de e-mail incorrecta</p>
                </dd>

                <input class="submit-changes-btn" type="submit" value="Actualizar configuración">
            </dl>
        </div>`;

        return html;
    }

    addSubmitDataHandler(handler){
        document.querySelector('.submit-changes-btn').addEventListener('click',function(e) {
            e.preventDefault();

            const configData = {
                userId:  document.querySelector('.pers-config-form-group').dataset.userid,
                userRole: document.querySelector('.role-select').value,
                userNotifEmail: document.querySelector('.email-config').value
            }

            handler(configData);
        });
    }

    addEmailFieldCheck(handler) {
        document.querySelector('.email-config').addEventListener('input', function(e) {
            if (!handler(document.querySelector('.email-config').value)) {
                document.querySelector('.email-error').classList.remove('hidden');
                document.querySelector('.submit-changes-btn').disabled = true;
            } else {
                document.querySelector('.email-error').classList.add('hidden');
                document.querySelector('.submit-changes-btn').disabled = false;
            }
        });
    }
}

export default new ChangeConfigView();