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
let popup = document.querySelectorAll('.popup');
let basketPopup = document.querySelector('.popup-basket');
let menuPopup = document.querySelector('.popup-menu');
let burgerBtn = document.querySelector(".burger");
basketBtn.addEventListener('click', () => {
    basketPopup.classList.add('active');
    document.body.classList.add('no-scroll');
});
burgerBtn.addEventListener('click', () => {
    menuPopup.classList.add('active');
    document.body.classList.add('no-scroll');
});
popup.forEach(el => {
    el.addEventListener('click', event => {
        if(event.target.classList.contains('popup') || event.target.closest('.close')){
            el.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    });
})
