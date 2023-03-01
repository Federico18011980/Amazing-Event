let past = [];
let principal=document.getElementById('principal');
let fragment = document.createDocumentFragment();

for (let i = 0; i < data.events.length; i++) {

    if (data.events[i].date < data.currentDate) {
      past.push(data.events[i]);    
    }
    
}

for (let i = 0; i < past.length; i++) {

    let creaDiv = document.createElement('div');  
    let creaImg = document.createElement('img');
    let cardTexto = document.createElement('p');
    let cardtitulo = document.createElement('h5');
    let pieDeCard = document.createElement('footer');
    let pieTexto = document.createElement('h6');
    let btn = document.createElement('a');

    creaDiv.setAttribute('class','card');
    creaImg.setAttribute('src',past[i].image);
    creaImg.setAttribute('class','imagen');
    cardTexto.setAttribute('class','texto');
    cardtitulo.setAttribute('class','card-titulo')
    pieDeCard.setAttribute('class','pie');
    pieTexto.setAttribute('class','pie_texto');
    btn.classList.add('btn', 'btn-danger');
    btn.setAttribute('href', './details.html');
    
    cardtitulo.textContent=past[i].name;
    cardTexto.innerHTML=past[i].description;
    pieTexto.textContent='Price $'+past[i].price;
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