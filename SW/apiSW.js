"use strict";

function obtenerPeliculas(id){
    let URL = 'https://swapi.dev/api/films/${id}'
    return fetch(URL)
        .then(r => r.json())
}

function obtenerPersonaje(id){
    let URL = 'https://swapi.dev/api/people/${id}'
    return fetch(URL)
        .then(r => r.json())
}

function obtenerStarship(id){
    let URL = 'https://swapi.dev/api/starships/${id}'
    return fetch(URL)
        .then(r => r.json())
}

function obtenerVehicles(id){
    let URL = 'https://swapi.dev/api/vehicles/${id}'
    return fetch(URL)
        .then(r => r.json())
}

function obtenerPlanets(id){
    let URL = 'https://swapi.dev/api/planets/${id}'
    return fetch(URL)
        .then(r => r.json())
}

function obtenerSpecies(id){
    let URL = 'https://swapi.dev/api/species/${id}'
    return fetch(URL)
        .then(r => r.json())
}

