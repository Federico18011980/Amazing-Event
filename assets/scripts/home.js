
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
    creaImg.setAttribute('src',data.events[i].image);
    creaImg.setAttribute('class','imagen');
    cardTexto.setAttribute('class','texto');
    cardtitulo.setAttribute('class','card-titulo')
    pieDeCard.setAttribute('class','pie');
    pieTexto.setAttribute('class','pie_texto');
    btn.classList.add('btn', 'btn-danger');
    btn.setAttribute('href', './details.html');
    
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

//el siguiente código filtra en el input buscar y borra 
//las cards que no coinciden con el texto 

document.addEventListener('keyup', e=>{
    if (e.target.matches("#buscar")) {
        document.querySelectorAll(".card").forEach(tarjeta =>{
            tarjeta.textContent.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
            ?tarjeta.classList.remove("ocultar")
            :tarjeta.classList.add("ocultar");
        })
    } ;
    
})

// aplicando filtros por checkbox

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

//cargamos los check dinamicamente 

chek.forEach(elemento => {
    
    let div = document.createElement('div')
    div.innerHTML=`<input type="checkbox" name="${elemento }" id="${elemento}"><label for="${elemento}">${elemento}</label>` 
    fieldset.appendChild(div)

})





