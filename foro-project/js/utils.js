'use strict'

export const getFormattedDate = function () {
        let date = new Date();
        return date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear()+'   '+date.getHours()+':'+date.getMinutes();
}