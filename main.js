
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
        display.addEventListener("submit", (event) => {
          event.preventDefault();
  
  
          const acertijoForm = document.querySelector("#acertijo").value;
          const respuestaForm = document.querySelector("#respuesta").value;
          const dificultadForm = document.querySelector("#dificultad").value;
          const linkForm = document.querySelector("#link").value;
          nuevosAcertijos.push({acertijoForm, respuestaForm, dificultadForm, linkForm})
          console.log(nuevosAcertijos)
  
        })

    let usarPredeterminados = true;
    const preUsar = document.getElementById("preUsar")
    preUsar.addEventListener("click", () =>{
        if(preUsar.classList.contains("Usar")){
            preUsar.classList.remove("Usar");
            preUsar.classList.add("noUsar");
            preUsar.textContent = "No Usar Acertijos Por Defecto"
            usarPredeterminados = false
            console.log(usarPredeterminados)
        }else{
            preUsar.classList.remove("noUsar");
            preUsar.classList.add("Usar");
            preUsar.textContent = "Usar Acertijos Por Defecto"
            usarPredeterminados = true
            console.log(usarPredeterminados)
        }
    })

    const acertijosConNumero = nuevosAcertijos.map((acertijo, index) => {
        return {
          ...acertijo,
          numero: index + 1
        };
      });
      console.log(acertijosConNumero)

      //iniciarJuego
      function iniciarJuego() {
        preUsar.classList.add("jugando")
        const nuevosAcertijos = []
    if (usarPredeterminados = true) {
      nuevosAcertijos.push(...acertijos);
    } else{
      nuevosAcertijos = []
    }
        let cualsera = Math.floor(Math.random() * acertijosConNumero.length) + 1;
        console.log("te toco el acertijo numero " + cualsera);
        const elementoAcertijo = document.querySelector("#mostrar");
        elementoAcertijo.classList.remove("textoAcertijo");
        elementoAcertijo.textContent = "";
      
        setTimeout(() => {
          const acertijoMostrar = acertijosConNumero.find(
            (acertijo) => acertijo.numero === cualsera
          );
          elementoAcertijo.classList.add("textoAcertijo");
          elementoAcertijo.textContent = acertijoMostrar.acertijo;
        }, 200);
      }
      


        



const dificultad = parseInt(prompt("Elija la dificultad maxima que desea del 1 al 3"))
const filtrar = acertijos.filter(acertijo => acertijo.dificultad <= dificultad)
console.log("Estos son los acertijos que coincidian con la dificultad que escogiste")
console.log(filtrar)

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

if (jugar == "si" && adivino == false){   
 
   

let respuestax = ""
            switch (true) {
                case cualsera >= 66 && cualsera <= 99:
                    alert(acertijos[0].acertijo + " la dificultad es de " + acertijos[0].dificultad + "/3")
                    cualaacertijo = 0
                    while (respuestax.toUpperCase() != acertijos[0].respuesta){
                        respuestax = prompt("su respuesta solo escriba que es ejemplo (manzana)").toUpperCase();
                    }
                    if (respuestax == acertijos[0].respuesta){
                        adivino = true
                    }
                    resultado();
                    break;
                    
                  case cualsera >= 33 && cualsera <= 65:
                    alert(acertijos[1].acertijo + " la dificultad es de " + acertijos[1].dificultad + "/3");
                    cualaacertijo = 1
                    while (respuestax.toUpperCase() != acertijos[1].respuesta){
                        respuestax = prompt("su respuesta solo escriba que es ejemplo (manzana)").toUpperCase();
                    }
                    if (respuestax == acertijos[1].respuesta){
                        adivino = true
                        }
                        resultado();
                    break;

                  case cualsera >= 0 && cualsera <= 32:
                    alert(acertijos[2].acertijo + " la dificultad es de " + acertijos[2].dificultad + "/3");
                    cualaacertijo = 2
                    while (respuestax.toUpperCase() != acertijos[2].respuesta){
                        respuestax = prompt("su respuesta solo escriba que es ejemplo (manzana)").toUpperCase();
                    }
                    if (respuestax == acertijos[2].respuesta){
                        adivino = true
                        }
                        resultado();
                    break;
                }
};

if(!adivino){
alert("Vuelve a intentar suerte la proxima")
console.log("No adivinaste")
}else{
    console.log("adivinaste")
}

