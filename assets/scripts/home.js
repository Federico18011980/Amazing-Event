
let principal=document.getElementById('principal');
console.log(principal);
let fragment = document.createDocumentFragment();
let buscador = document.getElementById('buscar');
let chek = [];
let listachek = " ";
let fieldset = document.getElementById('field-check');


const mostrarDatos = (datos) => {
    
  for (let i = 0; i < datos.events.length; i++) {
    let creaDiv = document.createElement('div');  
    let creaImg = document.createElement('img');
    let cardTexto = document.createElement('p');
    let cardtitulo = document.createElement('h5');
    let pieDeCard = document.createElement('footer');
    let pieTexto = document.createElement('h6');
    let btn = document.createElement('a');

    creaDiv.setAttribute('class','card');
    creaDiv.setAttribute('id',datos.events[i].category)
    creaImg.setAttribute('src',datos.events[i].image);
    creaImg.setAttribute('class','imagen');
    cardTexto.setAttribute('class','texto');
    cardtitulo.setAttribute('class','card-titulo')
    pieDeCard.setAttribute('class','pie');
    pieTexto.setAttribute('class','pie_texto');
    btn.classList.add('btn', 'btn-danger');
    btn.setAttribute('href', `./details.html?id=${datos.events[i]._id}`);
    
    cardtitulo.textContent=datos.events[i].name;
    cardTexto.innerHTML=datos.events[i].description;
    pieTexto.textContent='Price $'+datos.events[i].price;
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

    checkArray.forEach(elemnto=>{
        elemnto.setAttribute('class','seleccion')
    })

    //let boton =document.getElementById('btn-buscar');
    let checkboxs = document.querySelectorAll('.seleccion')
    let card= document.querySelectorAll(".card")
    let chequeados = 0;
    let mensaje;
    let parrafo=document.querySelector('#mensaje')
    parrafo.classList.add("ocultar");
    console.log(checkboxs);
        
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
                                    mensaje=document.querySelectorAll(".ocultar");
                                    console.log("mensaje tiene: "+ mensaje.length+" elemntos");
                                    if (mensaje.length> card.length){
                                        parrafo.classList.remove("ocultar")
                                    }else{parrafo.classList.add("ocultar")}
                                   
                                    
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
