function obtenerNaves(id) {
    return fetch(id)
      .then((r) => r.json())
      .then((e) => {
        const nave = document.createElement('p');
        /*         let nombre = e.name; */
        nave.innerHTML = `<a href="nave.html?id=${id}">${e.name}</a>`;
  
        let li = document.createElement('li');
        li.appendChild(nave);
        dom['pjnv'].appendChild(li);
      });
  }