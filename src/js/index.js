"use strict";
// let favouriteFilm = {};
// favouriteFilm.name = "Maleficent";
// favouriteFilm.year = 2019;
// favouriteFilm.country = "USA";
// favouriteFilm.actor = {
//     name: "Angelina",
//     surname: "Joly"
// };
// favouriteFilm.timeLine = "119 min";
// favouriteFilm.genre = "fantasy";
// favouriteFilm.isWorthWatch = true;
// let question = confirm(`Have you watched ${favouriteFilm.name}?`);
// if (question) {
//     favouriteFilm.isWorthWatch = true;
// } else {
//     favouriteFilm.isWorthWatch = false;
// }
//
//
// alert("It worth watching");


$(document).ready(function() {
    $('select').select2({
        minimumResultsForSearch: -1,
    });
});