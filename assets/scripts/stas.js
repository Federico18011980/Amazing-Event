const url = 'https://mindhub-xj03.onrender.com/api/amazing';

//la siguiente variale se usara en caso de no
//tener conexion con la rura de la API 
const url2 = './assets/jsons/data.json'  
 
let arrPast = []; 
let arrUpcom = []; 
let mayorCapacidad =[];
let eventPorcMayor = [];
let eventPorcMenor = [];

function cargarTabla(vector){ //funcion para cargar las tablas que son parecidas
    
    let body =''
    for (let i = 0; i < vector.length; i++) {
        body += `<tr><td>${vector[i].category}</td><td>$${vector[i].recaudacion}</td><td>${vector[i].name}:     porcentaje: ${vector[i].porcentaje}% de la capacidad que es de: ${vector[i].capacity} personas</td></tr>`
    }
    return body;
}

fetch(url /*url2*/) //todo lo demas es igual
.then (response => response.json())
.then(datos =>  mostrarDatos(datos))
.catch(error=> console.log(error))

const mostrarDatos = (datos) => {
    //cargo vector con los datos  para luego ordenar con sort 
    // y no modificar el original

    for (let i = 0; i < datos.events.length; i++) {
        mayorCapacidad[i]=datos.events[i];
       
    }
    mayorCapacidad.forEach(element => {
       
        if (element.assistance) {
            element.porcentaje = Math.round((element.assistance*100)/(element.capacity))
        } else if(element.estimate) {
            element.porcentaje = Math.round((element.estimate*100)/(element.capacity))
        }
       
    });

    for (let i = 0; i < mayorCapacidad.length; i++) {
        
        eventPorcMayor.push(mayorCapacidad[i]);
        eventPorcMenor.push(mayorCapacidad[i]);
    }

    eventPorcMayor.sort((a,b) => b.porcentaje - a.porcentaje)//ordeno de may a men porcent
    eventPorcMenor.sort((a,b) => a.porcentaje - b.porcentaje)//ordeno de men a may porce
    mayorCapacidad.sort((a,b) => b.capacity - a.capacity)//ordeno de may a men capacidad

    let body1 ='';

    for (let i = 0; i < mayorCapacidad.length; i++) {
        body1 += `<tr><td>${eventPorcMayor[i].name}, porcentaje: ${eventPorcMayor[i].porcentaje}</td><td>${eventPorcMenor[i].name}, porcentaje: ${eventPorcMenor[i].porcentaje}</td><td>${mayorCapacidad[i].name}, capacidad: ${mayorCapacidad[i].capacity}</td></tr>`
        
    }
    document.getElementById('tbody1').innerHTML = body1; //fin de eventos generales
    
    //obtengo upcoming y past events comparando fechas

    for (let i = 0; i < datos.events.length; i++) {

        if (datos.events[i].date < datos.currentDate) {
          arrPast.push(datos.events[i]);    
        }else {
            arrUpcom.push(datos.events[i])
        }
        
    }
    
    //bloque donde calculo el porcenteja y la recaudacion

    arrUpcom.forEach(element=>{
        element.porcentaje = Math.round((element.estimate*100)/(element.capacity))
        element.recaudacion = Math.round((element.price)*(element.estimate))
    })
    arrPast.forEach(element=>{
        element.porcentaje = Math.round((element.assistance*100)/(element.capacity))
        element.recaudacion = Math.round((element.price)*(element.assistance)) 
    })

    //ordeno de Mayor a Menor los Vectoresç

    arrUpcom.sort((a,b) => b.porcentaje - a.porcentaje);
    arrPast.sort((a,b) => b.porcentaje - a.porcentaje);
    
    document.getElementById('tbody2').innerHTML = cargarTabla(arrUpcom); 
    document.getElementById('tbody3').innerHTML =cargarTabla(arrPast); 
    
}//fin de la función