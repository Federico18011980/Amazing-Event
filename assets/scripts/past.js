
let past = [];
let principal=document.getElementById('principal');
let fragment = document.createDocumentFragment();
let chek = [];
let listachek = " ";
let fieldset = document.getElementById('field-check');



mostrarDatos = (datos) => {



  for (let i = 0; i < datos.events.length; i++) {

      if (datos.events[i].date < datos.currentDate) {
        past.push(datos.events[i]);    
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
      creaDiv.setAttribute('id',past[i].category);
      creaImg.setAttribute('src',past[i].image);
      creaImg.setAttribute('class','imagen');
      cardTexto.setAttribute('class','texto');
      cardtitulo.setAttribute('class','card-titulo')
      pieDeCard.setAttribute('class','pie');
      pieTexto.setAttribute('class','pie_texto');
      btn.classList.add('btn', 'btn-danger');
      btn.setAttribute('href', `./details.html?id=${past[i]._id}`);
      
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

  datos.events.forEach(evento => {

      if(!chek.includes(evento.category)){
          chek.push(evento.category)
      }
      
  });


  chek.forEach(elemento => {
      
    let div = document.createElement('div')
    div.innerHTML=`<input type="checkbox" class="categoria" name="${elemento }" id="${elemento}"><label for="${elemento}">${elemento}</label>` 
    fieldset.appendChild(div)

  });

  let checkBox =document.querySelectorAll('.categoria');
  let checkArray= Array.from(checkBox);

  checkArray.forEach(elemnto=>{
      elemnto.setAttribute('class','seleccion')
  })

  let card= document.querySelectorAll(".card")
  let checkboxs = document.querySelectorAll('.seleccion')
  let chequeados = 0;


  fieldset.addEventListener('change', function () {
    chequeados=0;

    checkboxs.forEach(e=>{
        
        if(e.checked){
            chequeados++;
        }
        console.log("contador: "+ chequeados);
    })

  
        checkboxs.forEach(ch=>{   
          
            if (ch.checked) {
              
                card.forEach(c=>{
                    
                  if (ch.id == c.id){
                    c.classList.add("seleccionado")
                    c.classList.remove("ocultar")
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
            }
        
            if(!ch.checked){
                card.forEach(c=>{
                    
                    if (ch.id == c.id){
                        c.classList.remove("seleccionado")
                        c.classList.add("ocultar")
                    }

                })
            
            }
        })

  
    if (chequeados == 0){
      card.forEach(c=>{
        c.classList.remove("ocultar")
        c.classList.remove("seleccionado")
      })
    }
    
        
  })


}
