const url = 'https://mindhub-xj03.onrender.com/api/amazing';
const url2 = './assets/jsons/data.json' 

fetch(url/*url2 */)
    .then (response => response.json())
    .then(datos =>  mostrarDatos(datos))
    .catch(error=> console.log(error))