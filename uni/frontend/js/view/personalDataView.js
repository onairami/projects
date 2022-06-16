class PersonalDataView {
    parentElement;
    data;

    render(data) {
        this.data = data;
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
        let html = `
        <div class="pers-data-page" data-userid="${this.data.userId}">
            <h2>Datos personales</h2>
            <div class="pers-data-form-group">
                <dl class="user-first-name">
                    <dt>
                        <label>Nombre</label>
                    </dt>
                    <dd>
                        <input disabled type="text" value="${(this.data.personalData.userFirstName) ? this.data.personalData.userFirstName : ""}">
                    </dd>
                </dl>
                <dl>
                    <dt>
                        <label>Apellido</label>
                    </dt>
                    <dd>
                        <input disabled type="text" value="${(this.data.personalData.userLastName) ? this.data.personalData.userLastName : ""}">
                    </dd>
                </dl>
                <dl>
                    <dt>
                        <label>Fecha de nacimiento</label>
                    </dt>
                    <dd>
                        <input disabled type="text" value="${(this.data.personalData.userBirthDate) ? this.data.personalData.userBirthDate : ""}">
                    </dd>
                </dl>
                <div class="identification-section">
                    <dl class="identification-type">
                        <dt>
                            <label>Tipo de documento</label>
                        </dt>
                        <dd>
                            <select class="dni-type-select" disabled>
                                <option class="dni-type-select-option" value="dni" ${(this.data.personalData.userDniType === "DNI" ? "selected" : "")}>DNI</option>
                                <option class="dni-type-select-option" value="le" ${(this.data.personalData.userDniType === "LE" ? "selected" : "")}>LE</option>
                            </select>                        
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <label>Número de documento</label>
                        </dt>
                        <dd>
                            <input disabled type="text" value="${(this.data.personalData.userDni) ? this.data.personalData.userDni : ""}">
                        </dd>
                    </dl>
                </div>
                <dl>
                    <dt>
                        <label>Ubicación</label>
                    </dt>
                    <dd>
                        <input class="user-location" type="text" value="${(this.data.personalData.userLocation) ? this.data.personalData.userLocation : ""}">
                    </dd>
                </dl>
                <dl>
                    <dt>
                        <label>Dirección</label>
                    </dt>
                    <dd>
                        <input class="user-address" type="text" value="${(this.data.personalData.userAddress) ? this.data.personalData.userAddress : ""}">
                    </dd>
                </dl>
                <dl>
                    <dt>
                        <label>Teléfono</label>
                    </dt>
                    <dd>
                        <input class="user-phone-number" type="text" value="${(this.data.personalData.userPhoneNumber) ? this.data.personalData.userPhoneNumber : ""}">
                        <div class="phone-input-error hidden">Sólo números</div>
                    </dd>
                </dl>
            </div>
            <div>
                <button class="update-pers-data-btn" type="submit">Actualizar datos</button>
            </div>
        </div>
        `;
        return html;
    }

    addSubmitDataHandler(handler){
        document.querySelector('.update-pers-data-btn').addEventListener('click',function(e) {
            e.preventDefault();

            const personalData = {
                userId:  document.querySelector('.pers-data-page').dataset.userid,
                userPhone: document.querySelector('.user-phone-number').value,
                userLocation: document.querySelector('.user-location').value,
                userAddress: document.querySelector('.user-address').value
            }

            handler(personalData);
        });
    }

    addFieldCheckHandlers() {
        document.querySelector('.user-phone-number').addEventListener('input',function () {
            if (isNaN(document.querySelector('.user-phone-number').value)) {
                document.querySelector('.phone-input-error').classList.remove("hidden");
                document.querySelector('.update-pers-data-btn').disabled = true;
            } else {
                document.querySelector('.phone-input-error').classList.add("hidden");
                document.querySelector('.update-pers-data-btn').disabled = false;
            }
        });
    }
}

export default new PersonalDataView();