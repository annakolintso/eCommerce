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

//basket
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
});

//forms
let registerForm = document.querySelector('.register');
let registerElements = registerForm.querySelectorAll('input');
registerForm.addEventListener('submit', e => {
    e.preventDefault();
    let data = {};
    registerElements.forEach(el => {
        if (el.type === "checkbox") {
            if (el.checked) {
                data[el.name] = el.value;
            }
        } else {
            data[el.name] = el.value;
        }
    });
    if (data.password===data.confirmPassword){
        let users = localStorage.getItem('users');
        let usersData;
        let similarEmail = false;
        if (users){
            usersData = JSON.parse(users);
            usersData.users.forEach(user => {
                if(user.email === data.email){
                    similarEmail = true;
                }
            });
            if(!similarEmail){
                usersData.users.push(data);
                localStorage.setItem('users', JSON.stringify(usersData));
            }else {
                // show error
            }
        }else {
            usersData = {
                users: [data],
            }
            localStorage.setItem('users', JSON.stringify(usersData));
        }
    }
});


let signInForm = document.querySelector('.sign-in');
let signInElements = signInForm.querySelectorAll('input');
signInForm.addEventListener('submit', e => {
    e.preventDefault();
    let data = {};
    let users = localStorage.getItem('users');
    let usersData;
    let similarEmail = false;
    signInElements.forEach(el => {
        data[el.name] = el.value;
    });
    if (users){
        usersData = JSON.parse(users);
        usersData.users.forEach(user => {
            if(user.email === data.email && user.password === data.password){
                console.log('loginned');
            }
        });
        if(!similarEmail){
            usersData.users.push(data);
            localStorage.setItem('users', JSON.stringify(usersData));
        }else {
            // show error
        }
    }else {
        // show error
    };
});


