const jugar = prompt("deseas jugar acertijos? (si/no)").toLowerCase();
console.log("Tu respuesta a si querieas jugar fue " + jugar);

const acertijos = [
    { acertijo: "Tengo agujas pero no sé coser, tengo números pero no sé leer, ¿Sabes quién soy?", dificultad: 2, respuesta: "RELOJ"},
    { acertijo: "No muerdo ni ladro, pero tengo dientes y la casa guardo. ¿Sabes quién soy?", dificultad: 3, respuesta: "LLAVE"},
    { acertijo: "Soy como un caballo pero no me montan y no tengo color ¿Sabes quién soy?", dificultad: 1, respuesta: "CEBRA"}
    ]
    
const dificultad = parseInt(prompt("Elija la dificultad maxima que desea del 1-3"))
const filtrar = acertijos.filter(acertijo => acertijo.dificultad <= dificultad)
console.log("Estos son los acertijos que coincidian con la dificultad que escogiste")
console.log(filtrar)

let adivino = false;
let cualaacertijo =0;

if (jugar == "no"){
    for(let i=0; i<2; i+=1)
    alert("¿Estas seguro que no quieres probar nuestros maravillosos acertijoz?")
}
function resultado(){
    if (adivino ){
        alert("Felicidades esa era la respuesta correcta" )
       }else{
           alert("Esa no era la respuesta correcta vuelve a intentar")
       }
       alert("Para ver detalles como la respuesta de los acertijoz y el numero de acertijo que te toco ve a la consola y para volver a jugar recarga la pagina")
}

if (jugar == "si" && adivino == false){   
 
    let cualsera = Math.random() * 33 * dificultad;
    console.log(cualsera)
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

let Respuestas = acertijos.map(respuesta)
console.log (Respuestas)