
    const contAcertijos = document.querySelector("#acertijos")
    const acertijos = [
    { acertijo: "Tengo agujas pero no sé coser, tengo números pero no sé leer, ¿Sabes quién soy?", dificultad: 2, respuesta: "RELOJ", link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fes%2Fsearch%2Freloj-analogico&psig=AOvVaw0WzGdkCQz3p9fXYKgV34Cj&ust=1679348281527000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKCaxID66P0CFQAAAAAdAAAAABAT"},
    { acertijo: "No muerdo ni ladro, pero tengo dientes y la casa guardo. ¿Sabes quién soy?", dificultad: 3, respuesta: "LLAVE", link:"https://www.educima.com/dibujo-para-colorear-llave-dm22467.jpg"},
    { acertijo: "Soy como un caballo pero no me montan y no tengo color ¿Sabes quién soy?", dificultad: 1, respuesta: "CEBRA", link:"https://i.pinimg.com/originals/07/1c/81/071c811138f4a2dbebb8a817e3ac447c.png"}
        ]

        const btnAgregar = document.getElementById('agregar');   
        const btnCerrar = document.getElementById('cerrar');
        const display = document.getElementById("acertijo-form");
        btnAgregar.addEventListener("click", function noDspl(){
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
          display.classList.remove("siDisplay");
          display.classList.add("noDisplay");
          const acertijoInput = document.getElementById("acertijo");
          const dificultadInput = document.getElementById("dificultad");
          const respuestaInput = document.getElementById("respuesta");
          const imagenInput = document.getElementById("imagen");
          const nuevoAcertijo = {
            acertijo: acertijoInput.value,
            dificultad: Number(dificultadInput.value),
            respuesta: respuestaInput.value.toUpperCase(),
            link: imagenInput.value,
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
  let compara = '';
  const imagen = document.querySelector("#imagen");
  const tuRespuesta = document.querySelector("#tuRespuesta");
  tuRespuesta.addEventListener("change", (event) => {
    compara = event.target.value.toUpperCase();
  });

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
    } else {
      console.log("te toco el acertijo predeterminado numero " + cualsera);
    }
  
    const elementoAcertijo = document.querySelector("#mostrar");
      function noMostrarAcertijo(){
      elementoAcertijo.classList.remove("textoAcertijo");
      elementoAcertijo.textContent = "";
      tuRespuesta.classList.remove("entonces")
      tuRespuesta.classList.add("noEntonces")
      imagen.classList.remove("entonces");
      imagen.classList.add("noEntonces");
      }
      function MostrarAcertijo(){
        elementoAcertijo.classList.add("textoAcertijo");
        elementoAcertijo.textContent = acertijoMostrar.acertijo;
        tuRespuesta.classList.remove("noEntonces");
        tuRespuesta.classList.add("entonces");
        imagen.classList.remove("noEntonces");
        imagen.classList.add("entonces");
}
      acertijoMostrar = acertijosConNumero.find(
        (acertijo) => acertijo.numero === cualsera
      );
      console.log(acertijoMostrar);
      elementoAcertijo.classList.add("textoAcertijo");
      elementoAcertijo.textContent = acertijoMostrar.acertijo;
      tuRespuesta.classList.remove("noEntonces");
      tuRespuesta.classList.add("entonces");
      imagen.classList.remove("noEntonces");
      imagen.classList.add("entonces");


      const intervalo = setInterval(() => {
        if (compara === acertijoMostrar.respuesta.toUpperCase()) {
          clearInterval(intervalo);
          tuRespuesta.classList.remove("incorrecta");
          tuRespuesta.classList.add("correcta");
 
          
          setTimeout(() => {
            Swal.fire({
              title: 'Has Adivinado',
              text: 'Bien Hecho',
              icon: 'success',
              toast: true,
              confirmButtonText: 'OK',
            })
            noMostrarAcertijo()
            tuRespuesta.value = ""
          }, 1000);
        } else {
          tuRespuesta.classList.add("incorrecta");
          setTimeout(() => {
            tuRespuesta.classList.remove("correcta");
          }, 1000);
        }
      }, 100);
      }

      // Obtener la imagen de perro al azar
function obtenerImagenAlAzar() {
  // Hacer una solicitud HTTP a la API
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
      const imagenF = data.message;
      const imagenElemento = document.getElementById("imagenPerro");
      imagenElemento.src = imagenF;
    });
}

// Agregar una función de clic al botón de cambiar imagen
const botonCambiarImagen = document.getElementById("boton-cambiar-imagen");





        



const filtrar = acertijos.filter(acertijo => acertijo.dificultad <= dificultad)
