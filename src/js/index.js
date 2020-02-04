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