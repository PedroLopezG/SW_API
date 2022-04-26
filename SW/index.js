"use-strict";

import { obtenerPeliculas, obtenerIdURLRecursoSWAPI } from "./apiSW.js";



let dom = {}

window.onload = async () => {
    dom['listado'] = document.getElementById('listado')
    dom['snippet'] = document.getElementById('snippet')

    await clear()

    await obtenerPeliculas()
    .then((r) => r.results.forEach(addItem))

}

function clear(){
    dom['snippet'].innerText = ''
    dom['listado'].innerHTML = '<ul></ul>'
    dom['ul'] = dom['listado'].getElementsByTagName('ul')[0]
}

function addItem(item){
    let a = document.createElement('a')
    let id = obtenerIdURLRecursoSWAPI(item.url)
    a.innerText = item.title
    a.href = `pelicula.html?id=${id}`

    let li = document.createElement('li')
    li.onmouseover = () => {
    dom['snippet'].innerHTML = item.opening_crawl
  }

  li.appendChild(a)
  dom['ul'].appendChild(li)
}