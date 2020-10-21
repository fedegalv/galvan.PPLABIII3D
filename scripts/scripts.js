import crearTabla from "./tabla.js";
import inicializarBotones from "./abm.js";

//const btnTabla;
export let listaAnuncio;
export let proximoId;
let divTabla;

export function aumentarProximoId() { proximoId++ }
window.addEventListener('load', inicializarManejadores);


function inicializarManejadores(){
  listaAnuncio= obtenerAnuncio();  
    proximoId = obtenerId();
      
    //console.log(listaPersonas);
    divTabla = document.getElementById('divTabla');

    //CARGA LA TABLA AL CARGAR LA PAGINA SI ESTA EXISTE
    actualizarLista();



    inicializarBotones(proximoId);
    
}

export function obtenerAnuncio(){
    // RETORNO EL  CONTENIDO DE LOCALSTORAGE , SI NO HAY SE CREA UN ARRAY VACIO
    return JSON.parse(localStorage.getItem('anuncios')) || [];

}
function obtenerId(){
    // RETORNO LA ID GuARDADA EN nextId SI ES QUE EXISTE SI NO 2000
    return JSON.parse(localStorage.getItem('nextId')) || 2000;

}



export function guardarDatos(){
    localStorage.setItem('anuncios', JSON.stringify(listaAnuncio));
    localStorage.setItem('nextId', proximoId);
}

export function actualizarLista(){
  //VACIA
  divTabla.innerHTML = "";
  //CREA ELEMENTO DE IMAGEN
  const imgSource = document.createElement('img');
  // SE AGREGA EL SRC
  imgSource.src =  "./materials/208.gif";
  //SE LO APENDEA A DIVTABLA
  divTabla.appendChild(imgSource);

  //TIMEOUT DE 3 SEG, LUEGO LIMPIA DE NUEVO Y CARGA LA TABLA
  setTimeout(() => {
    divTabla.innerHTML = "";
    divTabla.appendChild(crearTabla(listaAnuncio));
  }, 3000);  
}
