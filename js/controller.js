'use strict'

class Controller {

    constructor() {
        this._form = document.getElementById('form');
        this._validator = new Validator();

        this._fullName = document.getElementById('fullName');
        this._variant = document.getElementById('variant');
        this._group = document.getElementById('group');
        this._phNum = document.getElementById('phNum');
        this._idCard = document.getElementById('idCard');
    }

    addFullNameListener() {
        this._fullName.addEventListener('blur', () => {
            let fullNameIsValid = this._validator.checkFullName(this._fullName.value);
            if(fullNameIsValid)
            {
                this._fullName.style.boxShadow = '0 0 10px green';
            }
            else
            {
                this._fullName.style.boxShadow = '0 0 10px red';
            }
        });
    }

    addVariantListener() {
        this._variant.addEventListener('blur', () => {
            let variantIsValid = this._validator.checkVariant(this._variant.value);
            if(variantIsValid)
            {
                this._variant.style.boxShadow = '0 0 10px green';
            }
            else
            {
                this._variant.style.boxShadow = '0 0 10px red';
            }
        });
    }

    addGroupListener() {
        this._group.addEventListener('blur', () => {
            let groupIsValid = this._validator.checkGroup(this._group.value);
            if(groupIsValid)
            {
                this._group.style.boxShadow = '0 0 10px green';
            }
            else
            {
                this._group.style.boxShadow = '0 0 10px red';
            }
        });
    }

    addPhNumListener() {
        this._phNum.addEventListener('blur', () => {
            let phNumIsValid = this._validator.checkPhNum(this._phNum.value);
            if(phNumIsValid)
            {
                this._phNum.style.boxShadow = '0 0 10px green';
            }
            else
            {
                this._phNum.style.boxShadow = '0 0 10px red';
            }
        });
    }

    addIdCardListener() {
        this._idCard.addEventListener('blur', () => {
            let idCardIsValid = this._validator.checkIdCard(this._idCard.value);
            if(idCardIsValid)
            {
                this._idCard.style.boxShadow = '0 0 10px green';
            }
            else
            {
                this._idCard.style.boxShadow = '0 0 10px red';
            }
        });
    }

    addSubmitListener() {
        this._form.addEventListener('submit', (e) => {
            e.preventDefault();
            let formIsValid = this._validator.checkAll(this._fullName.value, this._variant.value, 
                this._group.value, this._phNum.value, this._idCard.value);
            if(formIsValid) {    
                this.displayData();
            } else {
                alert('Дані не прошли валідацію');
            }
        })
    }

    addAllListeners()
    {
        this.addFullNameListener();
        this.addVariantListener();
        this.addGroupListener();
        this.addPhNumListener();
        this.addIdCardListener();
        this.addSubmitListener();
    }

    displayData()
    {
        let outputData = document.getElementById('outputData');
        const data = `
            <p><b>Піб:</b> ${this._fullName.value}</p>
            <p><b>Варіант:</b> ${this._variant.value}</p>
            <p><b>Група:</b> ${this._group.value}</p>
            <p><b>Телефон:</b> ${this._phNum.value}</p>
            <p><b>ID-card:</b> ${this._idCard.value}</p>
        `;
        outputData.insertAdjacentHTML('afterbegin', data);
    }
}