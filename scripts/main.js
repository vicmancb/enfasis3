/**
 * Created by vicman on 3/8/16.
 */
"use strict";

console.log("ya tengo el main");

var tal = "hola";
console.log(tal);

//https://restcountries.eu/rest/v1/alpha/co

$.ajax( "https://restcountries.eu/rest/v1/all" )
    .done(function(info) {
        for(var i=0; i< info.length; i++) {
            var data = info[i];
            console.log(data);
            $('.list-countries').append('' +
                '<div class="col-md-4">'+
                '<div class="country">'+
                '<div class="flag"> ' +
                '<img src="assets/flags/'+ data.alpha2Code +'.png"/> ' +
                '</div> ' +
                '<div class="info"> ' +
                '<div>Nombre: <span>' + data.name + '</span></div> ' +
                '<div>Capital: <span>' + data.capital + '</span></div> ' +
                '<div>Poblacion: <span>' + data.population + '</span></div> ' +
                '</div> ' +
                '</div> ' +
                '</div>');
        }
    })
    .fail(function(err) {
        console.log(err);
    });