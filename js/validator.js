'use strict'

class Validator {

    constructor() {
        this._regForFullName = /^[А-ЯҐЄІЇ]{1}[а-яґєії]+\s{1}([а-яґєіїА-ЯҐЄІЇ]{1}.){2}$/;
        this._regForVarian = /^\d{2}$/;
        this._regForGroup = /^[А-ЯҐЄІЇ]{2}-\d{2}$/;
        this._regForPhNum = /^[(]*\d{3}[)]*-\d{3}-\d{2}-\d{2}$/;
        this._regForIdCard = /^[А-ЯҐЄІЇ]{2} №\d{6}$/;
    }

    checkFullName(fullName) {
        return this._regForFullName.test(fullName);
    }

    checkVariant(variant) {
        return this._regForVarian.test(variant);
    }

    checkGroup(group) {
        return this._regForGroup.test(group);
    }

    checkPhNum(phNum) {
        return this._regForPhNum.test(phNum);
    }

    checkIdCard(idCard) {
        return this._regForIdCard.test(idCard);
    }

    checkAll(fullName, variant, group, phNum, idCard) {
        return (this.checkFullName(fullName) && this.checkVariant(variant)
               && this.checkGroup(group) && this.checkPhNum(phNum) 
               && this.checkVariant(variant));
    }
}