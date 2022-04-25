"use strict";

export function obtenerPeliculas(id){
    let URL = 'https://swapi.dev/api/films/${id}'
    return fetch(URL)
        .then(r => r.json())
}

export function obtenerPersonaje(id){
    let URL = 'https://swapi.dev/api/people/${id}'
    return fetch(URL)
        .then(r => r.json())
}

export function obtenerStarship(id){
    let URL = 'https://swapi.dev/api/starships/${id}'
    return fetch(URL)
        .then(r => r.json())
}

export function obtenerVehicles(id){
    let URL = 'https://swapi.dev/api/vehicles/${id}'
    return fetch(URL)
        .then(r => r.json())
}

export function obtenerPlanets(id){
    let URL = 'https://swapi.dev/api/planets/${id}'
    return fetch(URL)
        .then(r => r.json())
}

export function obtenerSpecies(id){
    let URL = 'https://swapi.dev/api/species/${id}'
    return fetch(URL)
        .then(r => r.json())
}

export function obtenerIdURLRecursoSWAPI(url) { 
    return Number(url.match(/([0-9]*)\/?$/)[1]) 
  }
