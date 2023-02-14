const jugar = prompt("deseas jugar acertijos? (si/no)").toLowerCase();
console.log("Tu respuesta a si querieas jugar fue " + jugar);

let adivino = false;
let cualaacertijo =0
if (jugar == "no"){
    for(let i=0; i<5; i+=1)
    alert("¿Estas seguro que no quieres probar nuestros maravillosos acertijoz?")
}
function resultado(){
    if (adivino == true){
        alert("Felicidades esa era la respuesta correcta" )
       }else{
           alert("Esa no era la respuesta correcta vuelve a intentar")
       }
       alert("Para ver detalles como la respuesta de los acertijoz y el numero de acertijo que te toco ve a la consola y para volver a jugar recarga la pagina")
}

if (jugar == "si" && adivino == false){   
    let cualsera = Math.random()*100;
    console.log(cualsera)
            switch (true) {
                case cualsera >= 67 && cualsera <= 100:
                    alert("Tengo agujas pero no sé coser, tengo números pero no sé leer, ¿Sabes quién soy?")
                    cualaacertijo = 1
                    console.log("Ese era el acertijo numero " + cualaacertijo + " de 3 acertijoz que tiene la pagina")
                    respuesta1 = prompt("su respuesta solo escriba que es ejemplo (manzana)").toUpperCase();
                    if (respuesta1 == "RELOJ"){
                        adivino = true
                    }
                    resultado();
                    break;
                  case cualsera >= 34 && cualsera <= 66:
                    alert("No muerdo ni ladro, pero tengo dientes y la casa guardo. ¿Sabes quién soy?");
                    cualaacertijo = 2
                    console.log("Ese era el acertijo numero " + cualaacertijo + " de 3 acertijoz que tiene la pagina")
                    respuesta2 = prompt("su respuesta solo escriba que es ejemplo (manzana)").toUpperCase();
                    if (respuesta2 == "LLAVE"){
                        adivino = true
                        }
                        resultado();
                    break;
                  case cualsera >= 1 && cualsera <= 33:
                    alert("Soy como un caballo pero no me montan y no tengo color ¿Sabes quién soy?");
                    cualaacertijo = 3
                    console.log("Ese era el acertijo numero " + cualaacertijo + " de 3 acertijoz que tiene la pagina")
                    respuesta3 = prompt("su respuesta solo escriba que es ejemplo (manzana)").toUpperCase();
                    if (respuesta3 == "CEBRA"){
                        adivino = true
                        }
                        resultado();
                    break;
                }
}

console.log(
   " Repuesta del acertijo num:1 (RELOJ)"
)
console.log(
    " Repuesta del acertijo num:2 (LLAVE)"
 )
 console.log(
    " Repuesta del acertijo num:3 (CEBRA)"
 )


