"use strict";

$(document).ready(function() {
    $('#currencySelect').select2({
        minimumResultsForSearch: -1,
        dropdownCssClass: 'currency-dropdown',
        width: '53px'
    });
    $('#colorSelect').select2({
        minimumResultsForSearch: -1,
        dropdownCssClass: 'settings-dropdown',
        placeholder: "Select color",
        width: '170px'
    });
    $('#sizeSelect').select2({
        minimumResultsForSearch: -1,
        dropdownCssClass: 'settings-dropdown',
        placeholder: "Select size",
        width: '170px'
    });
});


let basketBtn = document.querySelector('.header__button');
let basketPopup = document.querySelector('.popup-basket');
let closePopup = basketPopup.querySelector('.close');
basketBtn.addEventListener('click', () => {
    basketPopup.classList.add('active');
    document.body.classList.add('no-scroll');
});
basketPopup.addEventListener('click', event => {
    if(event.target.classList.contains('popup-basket') || event.target.closest('.close')){
        basketPopup.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }
});