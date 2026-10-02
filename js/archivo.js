const vOla = "imagenes/mar2.jpg";
const vMarCalmo = "imagenes/mar1.jpg";
const vBarco = "imagenes/barco.jpg";
var vHubicacionBarco;
var vHubicacionBarco2;
var vHubicacionBarco3;
var vPartidoFinalizado = false;
var vResultado;
var vIntentos = 0; //cantidad de intentos del usuario
const vIntentosMaximos = 8; //cantidad maxima de intentos posibles
var vGblNombreUsuario; 


function ocultarBarco(){
    vHubicacionBarco = Math.floor(Math.random() * 16) + 1;
    vHubicacionBarco2 = Math.floor(Math.random() * 16) + 1;
    vHubicacionBarco3 = Math.floor(Math.random() * 16) + 1;
    
    
}


function mar(pElemento){
    //pElemento.src= vOla;
    if ((!vPartidoFinalizado) && (vIntentos < vIntentosMaximos)){
        if((pElemento.id == vHubicacionBarco) || (pElemento.id == vHubicacionBarco2) || (pElemento.id == vHubicacionBarco3)){
            pElemento.src = vBarco;
            vResultado = "Fin del juego, Ganaste";
            vPartidoFinalizado = true;
        }else {
            pElemento.src = vOla;
            vResultado = "Fin del juego, Perdiste"
            
           
        
        }
        vIntentos++;
        if(vIntentos == vIntentosMaximos){
            vPartidoFinalizado = true;
            
        } 
    }
    if (vPartidoFinalizado)
    {document.getElementById("informacion").innerHTML = vResultado + " " + vGblNombreUsuario;
        
    }
                       }
function reiniciar(){
    ocultarBarco();
    for (var i=1;i<=16;i++){
        document.getElementById(i).src = vMarCalmo;
    }
    vIntentos = 0;
    vPartidoFinalizado = false;
    document.getElementById("informacion").innerHTML = "";
}

function jugar(){
    var vNombreUsuario = document.getElementById("usuario").value;
    if (vNombreUsuario.trim() != ""){
        reiniciar();        document.getElementById("tablerodejuego").style.display = "";        document.getElementById("datosUsuario").style.display ="none";
        vGblNombreUsuario = vNombreUsuario;
    }
    else { 
    document.getElementById("informacion").innerHTML= "Ingresa tu nombre"}
}