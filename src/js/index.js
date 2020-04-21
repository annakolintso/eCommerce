"use strict";

$(document).ready(function () {
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
let basketProducts = document.querySelector('.basket__main');
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
        if (event.target.classList.contains('popup') || event.target.closest('.close')) {
            el.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    });
});
basketProducts && basketProducts.addEventListener('click', (e) => {
    let target = e.target;
    if (target.classList.contains("close-sm") || target.closest('.close-sm')){
        $(target).closest('.basket__item').slideUp();
    };
});



//forms
let registerForm = document.querySelector('.register');
registerForm && registerForm.addEventListener('submit', e => {
    e.preventDefault();
    let data = {};
    let error = document.querySelector('.register .error');
    let registerElements = registerForm.querySelectorAll('input');
    registerElements.forEach(el => {
        if (el.type === "checkbox") {
            if (el.checked) {
                data[el.name] = el.value;
            }
        } else {
            data[el.name] = el.value;
        }
    });
    if (data.password === data.confirmPassword) {
        let users = localStorage.getItem('users');
        let usersData;
        let similarEmail = false;
        if (users) {
            usersData = JSON.parse(users);
            usersData.users.forEach(user => {
                if (user.email === data.email) {
                    similarEmail = true;
                }
            });
            if (!similarEmail) {
                usersData.users.push(data);
                localStorage.setItem('users', JSON.stringify(usersData));
                error.classList.remove('has-error');
                registerElements.forEach(el => {
                    el.value = '';
                });
                let success = document.querySelector('.success');
                success.classList.add('has-registration');

            } else {
                let errorMessage = error.querySelector('.error__message');
                errorMessage.innerHTML = "Enter another email";
                error.classList.add('has-error');
            }
        } else {
            usersData = {
                users: [data],
            };
            localStorage.setItem('users', JSON.stringify(usersData));
        }
    } else {
        let errorMessage = error.querySelector('.error__message');
        errorMessage.innerHTML = "Check your password";
        error.classList.add('has-error');
    }
});


let signInForm = document.querySelector('.sign-in');
signInForm && signInForm.addEventListener('submit', e => {
    e.preventDefault();
    let data = {};
    let users = localStorage.getItem('users');
    let usersData;
    let error = document.querySelector('.sign-in .error');
    let signInElements = signInForm.querySelectorAll('input');
    signInElements.forEach(el => {
        data[el.name] = el.value;
    });
    if (users) {
        usersData = JSON.parse(users);
        usersData.users.forEach(user => {
            if (user.email === data.email && user.password === data.password) {
                let userEmail = {
                    email: user.email,
                }
                localStorage.setItem('auth', JSON.stringify(userEmail));
                document.location.href = '/eCommerce';
                error.classList.remove('has-error');
            } else {
                error.classList.add('has-error');
            }
        });
    } else {
        error.classList.add('has-error')
    };
});

function authorization() {
    let header = document.querySelector('.header');
    let userName = document.querySelectorAll('.header__name');
    let authData = JSON.parse(localStorage.getItem('auth'));
    let popupMenu = document.querySelector('.mobile-menu');
    if (authData && authData.email){
        userName.forEach(el =>{
            el.innerHTML = authData.email;
        });
        header.classList.add('authorized');
        popupMenu.classList.add('authorized');
    } else {
        header.classList.remove('authorized');
        popupMenu.classList.remove('authorized');
    }
}
authorization();

function logOut() {
    let logOutBtn = document.querySelectorAll('.header__exit');
    logOutBtn.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('auth');
            authorization();
        });
    })
}
logOut();


//tabs

let tab = function () {
 let tabNav = document.querySelectorAll('.tabs__title');
 let tabContent = document.querySelectorAll('.tabs__content');
 let tabName;
 tabNav.forEach(item=>{
     item.addEventListener('click', (event) => {
         tabNav.forEach(i=> {
             i.classList.remove('active');
         });
         item.classList.add('active');
         tabName = item.getAttribute('data-tab-name');
         tabContent.forEach(content=> {
             content.classList.remove('active');
         });
         document.querySelector(`.${tabName}`).classList.add('active');
     });
 });
};
tab();