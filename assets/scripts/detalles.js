//const url = 'https://mindhub-xj03.onrender.com/api/amazing';
const queryString = location.search;
const param = new URLSearchParams(queryString);
const id = param.get("id");


mostrarDatos = (datos) => {

  const eventos = datos.events.find(evento => evento._id == id );
  console.log(eventos);
  const div = document.querySelector(".contenedor")

  function crearTarjeta(contenedor){
    contenedor.innerHTML=`<div class="fila d-flex">
          <div class="imagen-detalles" id="img-detalles">
            <img src="${eventos.image}">
          </div>
          <div class="texto-detalles">
            <h3 class="titulo-evento">${eventos.name}</h3>
            <P id="ptexto-detalles">${eventos.description}</P>
            <p class="precio-detalles">Precio $${eventos.price}</p>
            
          </div>
        </div>`
  }

  crearTarjeta(div);
}