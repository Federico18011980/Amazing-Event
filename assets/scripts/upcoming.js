
let principal=document.getElementById('principal');
let fragment = document.createDocumentFragment();
let upcoming=[];

for (let i = 0; i < data.events.length; i++) {

    if (data.events[i].date > data.currentDate) {
      upcoming.push(data.events[i]);    
    }
    
}
for (let i = 0; i < upcoming.length; i++) {

    let creaDiv = document.createElement('div');  
    let creaImg = document.createElement('img');
    let cardTexto = document.createElement('p');
    let cardtitulo = document.createElement('h5');
    let pieDeCard = document.createElement('footer');
    let pieTexto = document.createElement('h6');
    let btn = document.createElement('a');

    creaDiv.setAttribute('class','card');
    creaDiv.setAttribute('id',upcoming[i].category)
    creaImg.setAttribute('src',upcoming[i].image);
    creaImg.setAttribute('class','imagen');
    cardTexto.setAttribute('class','texto');
    cardtitulo.setAttribute('class','card-titulo')
    pieDeCard.setAttribute('class','pie');
    pieTexto.setAttribute('class','pie_texto');
    btn.classList.add('btn', 'btn-danger');
    btn.setAttribute('href', './details.html');
    
    cardtitulo.textContent=upcoming[i].name;
    cardTexto.innerHTML=upcoming[i].description;
    pieTexto.textContent='Price $'+upcoming[i].price;
    btn.textContent ='Ver Mas';
    
    pieDeCard.appendChild(pieTexto);
    creaDiv.appendChild(creaImg);
    creaDiv.appendChild(cardtitulo);
    creaDiv.appendChild(cardTexto);
    creaDiv.appendChild(pieDeCard)
    creaDiv.appendChild(btn);
    fragment.appendChild(creaDiv);
    
}
principal.appendChild(fragment);


//agregando filtro de texto en el input buscador

document.addEventListener('keyup', e=>{
  if (e.target.matches("#buscar")) {
      document.querySelectorAll(".card").forEach(tarjeta =>{
          tarjeta.textContent.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
          ?tarjeta.classList.remove("ocultar")
          :tarjeta.classList.add("ocultar");
      })
  } ;
  
})

let chek = [];
let listachek = " ";
let fieldset = document.getElementById('field-check');

// aquí obtenemos las categorias de evemtos
// y las guardamos en el array check[] 
// sin repetirlas

data.events.forEach(evento => {

    if(!chek.includes(evento.category)){
        chek.push(evento.category)
    }
    
});


/**Se cargan los checks dinámicamente 
 * le asigno el id de la categoria correspondiente
 * a los valores del atributo categoria
 * de los objetos en el array events.
 * De esta forma puedo luego comparar si la 
 * categoria es igual a la del elemento para así 
 * poder filtrar con los checkboxs
 */

chek.forEach(elemento => {
    
  let div = document.createElement('div')
  div.innerHTML=`<input type="checkbox" class="categoria" name="${elemento }" id="${elemento}"><label for="${elemento}">${elemento}</label>` 
  fieldset.appendChild(div)

});

//tomo todos los elementos checkbox
//que tienen la misma categoria
let checkBox =document.querySelectorAll('.categoria');

/*asigno a una variable el modo array
del htmlcolection de checkbox */
let checkArray= Array.from(checkBox);

/*capturo el boton buscar por medio de su ID */
let boton =document.getElementById('btn-buscar');


/** escucho el evento click sobre el boton  
 * para recorrer uno por uno los elementos 
 * con estado chequed
*/

boton.addEventListener('click',e=>{
  e.preventDefault();
  let card= document.querySelectorAll(".card")
  card.forEach(tarjeta =>{tarjeta.classList.add("ocultar")});
  
  checkArray.forEach(elemnto=>{
    
      
    if(elemnto.checked){
          
        card.forEach(el=>{

          if (elemnto.id === el.id ){el.classList.remove("ocultar")}
    
        })
      
      }

    })
  
});
  


/**document.addEventListener('keyup', e=>{
  if (e.target.matches("#buscar")) {
      document.querySelectorAll(".card").forEach(tarjeta =>{
          tarjeta.textContent.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
          ?tarjeta.classList.remove("ocultar")
          :tarjeta.classList.add("ocultar");
      })
  } ;
  
}) */


