
let past = [];
let principal=document.getElementById('principal');
let fragment = document.createDocumentFragment();
let chek = [];
let listachek = " ";
let fieldset = document.getElementById('field-check');



mostrarDatos = (datos) => {
    let datos_truchos=[];
  for (let i = 0; i < datos.events.length; i++) {

      if (datos.events[i].date < datos.currentDate) {
        past.push(datos.events[i]);    
      }
      
  }


  datos.events.forEach(evento => {

      if(!chek.includes(evento.category)){
          chek.push(evento.category)
      }
      
  });


  chek.forEach(elemento => {
      
    let div = document.createElement('div')
    div.innerHTML=`<input type="checkbox" class="categoria" name="${elemento }" id="${elemento}" value="${elemento}"><label for="${elemento}">${elemento}</label>` 
    fieldset.appendChild(div)

  });

  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  let filtros=[];
  let mensaje=document.getElementById('mensaje')
  generarTarjetas(past);
  
              document.addEventListener('keyup', e=>{
         
                  if (e.target.matches("#buscar")) {
                      document.querySelectorAll(".card").forEach(tarjeta =>{
                          tarjeta.textContent.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
                          ?tarjeta.classList.remove("ocultar")
                          :tarjeta.classList.add("ocultar")
                          let ocult =document.querySelectorAll(".ocultar")
                            if(ocult.length == past.length){
                               mensaje.textContent="NO SE ENCONTRO SU BUSQUEDA";
                               console.log(mensaje);
                            }else if (ocult.length < past.length){
                                mensaje.textContent="";
                            }
                            if(datos_truchos.length>0){
                                if(ocult.length==datos_truchos.length){
                                    mensaje.textContent="NO SE ENCONTRO SU BUSQUEDA";
                                }else if (ocult.length==datos_truchos.length){
                                    mensaje.textContent="";
                                }
                                
                            }
                      })
                  };
              })

  checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', function() {
      
      datos_truchos=[];
        // Obtener los checkboxes seleccionados
       filtros = Array.from(checkboxes)
          .filter(checkbox => checkbox.checked)
          .map(checkbox => checkbox.value);
          console.log(filtros.length);
          

         for (let i = 0; i < filtros.length; i++) {
          
          past.forEach(eve=>{
              if (filtros[i] == eve.category ){
                  datos_truchos.push(eve);
              }
          })
          
         }
         if(datos_truchos.length>0){
              generarTarjetas(datos_truchos);
          }


          if (filtros.length==0){
              generarTarjetas(past)
              document.addEventListener('keyup', e=>{
         
                  if (e.target.matches("#buscar")) {
                      document.querySelectorAll(".card").forEach(tarjeta =>{
                          tarjeta.textContent.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
                          ?tarjeta.classList.remove("ocultar")
                          :tarjeta.classList.add("ocultar")
                      })
                  };
              })
          }

      });
      
    });  
  
}
