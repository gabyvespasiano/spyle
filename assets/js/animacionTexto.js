const maquina = document.getElementById('maquina-escribir')

const fraces = ["eficiente","innovadora","efectiva","única","personalizada"]
let contadorPalabras = 0; 



function maquinaEscribir (text,tiempo = 500, etiqueta=''){

    
    console.log(contadorPalabras)
    let arraycaracteres = text.split("");
    console.log(text)
    etiqueta.innerHTML = '';
    let i=0
    let j= arraycaracteres.length;
    

    let escribir = setInterval(function(){
        
    if (i === arraycaracteres.length) {
        
        etiqueta.innerHTML = text.substring(0,j)
        j--;

        if (j===0) {
            if (contadorPalabras >= 4) {
                i=0
                etiqueta.innerHTML = '';
                j= arraycaracteres.length;
                clearInterval(escribir)
                contadorPalabras=0;
                maquinaEscribir(fraces[contadorPalabras],200,maquina)  
            }else{
                i=0
                etiqueta.innerHTML = '';
                j= arraycaracteres.length;
                clearInterval(escribir)
                maquinaEscribir(fraces[contadorPalabras++], 200,maquina)  
            }
           
        }
    } else {
        etiqueta.innerHTML += arraycaracteres[i]
        i++
    }
    },tiempo)

    
    
}


maquinaEscribir(fraces[contadorPalabras], 200,maquina)