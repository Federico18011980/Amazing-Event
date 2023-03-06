
let principal=document.getElementById('principal');
let fragment = document.createDocumentFragment();
let buscador = document.getElementById('buscar');

for (let i = 0; i < data.events.length; i++) {
    let creaDiv = document.createElement('div');  
    let creaImg = document.createElement('img');
    let cardTexto = document.createElement('p');
    let cardtitulo = document.createElement('h5');
    let pieDeCard = document.createElement('footer');
    let pieTexto = document.createElement('h6');
    let btn = document.createElement('a');

    creaDiv.setAttribute('class','card');
    creaDiv.setAttribute('id',data.events[i].category)
    creaImg.setAttribute('src',data.events[i].image);
    creaImg.setAttribute('class','imagen');
    cardTexto.setAttribute('class','texto');
    cardtitulo.setAttribute('class','card-titulo')
    pieDeCard.setAttribute('class','pie');
    pieTexto.setAttribute('class','pie_texto');
    btn.classList.add('btn', 'btn-danger');
    btn.setAttribute('href', `./details.html?id=${data.events[i]._id}`);
    
    cardtitulo.textContent=data.events[i].name;
    cardTexto.innerHTML=data.events[i].description;
    pieTexto.textContent='Price $'+data.events[i].price;
    btn.textContent ='Ver Mas';
    
    pieDeCard.appendChild(pieTexto);
    creaDiv.appendChild(creaImg);
    creaDiv.appendChild(cardtitulo);
    creaDiv.appendChild(cardTexto);
    creaDiv.appendChild(pieDeCard)
    creaDiv.appendChild(btn);
    fragment.appendChild(creaDiv);

}
// Obtener el elemento de entrada

principal.appendChild(fragment);

//agregando filtro de texto en el input buscador
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
 * le asigno el id de la categoria correspondiente del array events.
 * De esta forma puedo luego comparar si la 
 * categoria es igual a la del elemento, para así 
 * poder filtrar con los checkboxs
 */

chek.forEach(elemento => {
    
  let div = document.createElement('div')
  div.innerHTML=`<input type="checkbox" class="categoria" name="${elemento }" id="${elemento}"><label for="${elemento}">${elemento}</label>` 
  fieldset.appendChild(div)

});


let checkBox =document.querySelectorAll('.categoria');
let checkArray= Array.from(checkBox);
let boton =document.getElementById('btn-buscar');
let card= document.querySelectorAll(".card")
let contador = 0;

/**
 * EVENTO CLICK
 */

boton.addEventListener('click',eventoClick=>{
  eventoClick.preventDefault();
  contador=0;
  card.forEach(c=>{c.classList.remove("seleccionado")});
  card.forEach(tarjeta =>{tarjeta.classList.add("ocultar")});
  
  checkArray.forEach(check=>{
    if(check.checked){
      console.log("elemnto check " + check.id);
      card.forEach(c=>{

        if (c.id === check.id){
          c.classList.remove("ocultar");
          c.classList.add("seleccionado")
          document.addEventListener('keyup', e=>{
           
            if (e.target.matches("#buscar")) {
                document.querySelectorAll(".seleccionado").forEach(tarjeta =>{
                  tarjeta.textContent.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
                  ?tarjeta.classList.remove("ocultar")
                  :tarjeta.classList.add("ocultar")
                })
            };
          }) 
        }
      })
      contador++;
    }
  })
  
  if(contador == 0){
    card.forEach(tarjeta =>{tarjeta.classList.remove("ocultar")});
  }
  
})





