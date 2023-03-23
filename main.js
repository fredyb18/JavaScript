
    const contAcertijos = document.querySelector("#acertijos")
    const acertijos = [
    { acertijo: "Tengo agujas pero no sé coser, tengo números pero no sé leer, ¿Sabes quién soy?", dificultad: 2, respuesta: "RELOJ", link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fes%2Fsearch%2Freloj-analogico&psig=AOvVaw0WzGdkCQz3p9fXYKgV34Cj&ust=1679348281527000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKCaxID66P0CFQAAAAAdAAAAABAT"},
    { acertijo: "No muerdo ni ladro, pero tengo dientes y la casa guardo. ¿Sabes quién soy?", dificultad: 3, respuesta: "LLAVE", link:"https://www.educima.com/dibujo-para-colorear-llave-dm22467.jpg"},
    { acertijo: "Soy como un caballo pero no me montan y no tengo color ¿Sabes quién soy?", dificultad: 1, respuesta: "CEBRA", linl:"https://i.pinimg.com/originals/07/1c/81/071c811138f4a2dbebb8a817e3ac447c.png"}
        ]

        const btnAgregar = document.getElementById('agregar');   
        const btnCerrar = document.getElementById('cerrar');
        const display = document.getElementById("acertijo-form");
        btnAgregar.addEventListener("click", () =>{
          display.classList.remove("noDisplay");
          display.classList.add("siDisplay");
        })
        btnCerrar.addEventListener("click", () =>{
          display.classList.remove("siDisplay");
          display.classList.add("noDisplay");
        })

        let nuevosAcertijos = [];
        let todosAcertijos = [...acertijos];
        if(localStorage.getItem("nuevosAcertijos") != null){
          nuevosAcertijos = JSON.parse(localStorage.getItem("nuevosAcertijos"))
        }
        display.addEventListener("submit", (event) => {
          event.preventDefault();
  
          const acertijoInput = document.getElementById("acertijo");
          const dificultadInput = document.getElementById("dificultad");
          const respuestaInput = document.getElementById("respuesta");
          const imagenInput = document.getElementById("imagen");
          const nuevoAcertijo = {
            acertijo: acertijoInput.value,
            dificultad: dificultadInput.value,
            respuesta: respuestaInput.value.toUpperCase(),
            link: imagenInput.value
          };
        
          nuevosAcertijos.push(nuevoAcertijo);
          localStorage.setItem("nuevosAcertijos", JSON.stringify(nuevosAcertijos));
          console.log(nuevosAcertijos);
          form.reset();

          display.classList.remove("siDisplay");
          display.classList.add("noDisplay");
        });



    let usarPredeterminados = true;
    const preUsar = document.getElementById("preUsar")
    preUsar.textContent = "se complico y esta pendiente"
  //  preUsar.addEventListener("click", () =>{
  //      if(preUsar.classList.contains("Usar")){
  //          preUsar.classList.remove("Usar");
  //          preUsar.classList.add("noUsar");
  //          preUsar.textContent = "No Usar Acertijos Por Defecto"
  //          usarPredeterminados = false
  //          console.log(usarPredeterminados)
  //      }else{
  //          preUsar.classList.remove("noUsar");
  //          preUsar.classList.add("Usar");
  //          preUsar.textContent = "Usar Acertijos Por Defecto"
  //          usarPredeterminados = true
  //          console.log(usarPredeterminados)
  //      }
  //  })        
    
 
   


      //iniciarJuego
      function iniciarJuego() {
        preUsar.classList.add("jugando")
        todosAcertijos = [...acertijos, ...nuevosAcertijos];
    const acertijosConNumero = todosAcertijos.map((acertijo, index) => {
      return {
        ...acertijo,
        numero: index + 1
      };

    });
        let cualsera = Math.floor(Math.random() * acertijosConNumero.length) + 1;
        if (cualsera > 3) {
          console.log("Te tocó tu acertijo número " + (cualsera - 3));
        }else{
          console.log("te toco el acertijo predeterminado numero " + cualsera);
        }
  
        const elementoAcertijo = document.querySelector("#mostrar");
        elementoAcertijo.classList.remove("textoAcertijo");
        elementoAcertijo.textContent = "";

        const tuRespuesta = document.querySelector("#tuRespuesta")
        tuRespuesta.classList.remove("entonces")
        tuRespuesta.classList.add("noEntonces")
      
        setTimeout(() => {
          const acertijoMostrar = acertijosConNumero.find(
            (acertijo) => acertijo.numero === cualsera
          );
          console.log(acertijoMostrar)
          elementoAcertijo.classList.add("textoAcertijo");
          elementoAcertijo.textContent = acertijoMostrar.acertijo;
          tuRespuesta.classList.remove("noEntonces")
          tuRespuesta.classList.add("entonces")
        }, 200);

        if(tuRespuesta.value.toUpperCase == acertijoMostrar.respuesta){

        } 
      }
      


        



const filtrar = acertijos.filter(acertijo => acertijo.dificultad <= dificultad)


let adivino = false;
let cualaacertijo =0;


function resultado(){
    if (adivino ){
        alert("Felicidades esa era la respuesta correcta" )
       }else{
           alert("Esa no era la respuesta correcta vuelve a intentar")
       }
       alert("Para ver detalles como la respuesta de los acertijoz y el numero de acertijo que te toco ve a la consola y para volver a jugar recarga la pagina")
}



