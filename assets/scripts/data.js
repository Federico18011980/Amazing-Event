function generarTarjetas(array) {
    const contenedor = document.getElementById('principal');
    contenedor.innerHTML = '';
  
    array.forEach(dato => {
      const tarjeta = document.createElement('div');
      tarjeta.classList.add('card');
  
      const imagen = document.createElement('img');
      imagen.classList.add('imagen');
      imagen.src = dato.image;
      tarjeta.appendChild(imagen);
  
      const titulo = document.createElement('h5');
      titulo.classList.add('card-titulo')
      titulo.textContent = dato.name;
      tarjeta.appendChild(titulo);
  
      const categoria = document.createElement('p');
      categoria.classList.add('cat_evento');
      categoria.textContent = dato.categoria;
      tarjeta.appendChild(categoria);

      const descripcion = document.createElement('p');
      descripcion.classList.add('texto')
      descripcion.textContent = dato.description;
      tarjeta.appendChild(descripcion);
    
      const pieTexto = document.createElement('h6');
      pieTexto.classList.add('pie_texto');
      pieTexto.textContent =`precio $ ${dato.price}`;
      tarjeta.appendChild(pieTexto)

      const btn = document.createElement('a');
      btn.classList.add('btn', 'btn-danger');
      btn.textContent ='Ver Mas';
      btn.setAttribute('href', `./details.html?id=${dato._id}`);
      tarjeta.appendChild(btn)
      contenedor.appendChild(tarjeta);
    });
}
const url = 'https://mindhub-xj03.onrender.com/api/amazing';
const url2 = './assets/jsons/data.json' 

fetch(url/*url2 */)
    .then (response => response.json())
    .then(datos =>  mostrarDatos(datos))
    .catch(error=> console.log(error))

