let formAnuncio;
import {ObtenerAnuncio_Auto} from "./anuncio.js";
import{listaAnuncio, guardarDatos, actualizarLista, proximoId, aumentarProximoId} from "./scripts.js";

export default function inicializarBotones(){

    //BOTON SUBMIT
    const btnAlta = document.getElementById('btnAlta');
    console.log(btnAlta);
    btnAlta.addEventListener('click', function() {

        formAnuncio = document.forms[0];
            const nuevoAnuncio = ObtenerAnuncio_Auto(proximoId, formAnuncio);
            console.log(nuevoAnuncio);
            if(nuevoAnuncio){
                listaAnuncio.push(nuevoAnuncio);
                aumentarProximoId();
                guardarDatos();
                formAnuncio.reset();
                divTabla.innerHTML = "";
                actualizarLista();
            }
            
    });

    //BOTON MODIFICAR
    const btnModificar = document.getElementById('btnModificar');
    btnModificar.addEventListener('click', function(e){
        let form = document.forms[0];
        console.log(listaAnuncio);
        console.log(listaAnuncio.length);

        for (let i = 0; i < listaAnuncio.length; i++) {
            if(listaAnuncio[i].id == form.id.value)
            {
                listaAnuncio[i] = ObtenerAnuncio_Auto(form.id.value, form);
                //console.log("PERSONA MODIFICADA");
                guardarDatos();
                actualizarLista();
                form.reset();
                ocultarBotones();
            }
          } 

    });

    //BOTON ELIMINAR
    const btnEliminar = document.getElementById('btnEliminar');
    btnEliminar.addEventListener('click', function(){
        let form = document.forms[0];
        for (let i = 0; i < listaAnuncio.length; i++) {
            if(listaAnuncio[i].id == form.id.value)
            {
                listaAnuncio.splice(i, 1);
                //console.log("PERSONA MODIFICADA");
                guardarDatos();
                actualizarLista();
                form.reset();
                ocultarBotones();
            }
          } 
    });

    const btnCancelar = document.getElementById('btnCancelar');
    btnCancelar.addEventListener('click', function(){
        ocultarBotones();
    })

    
    
    
}

function ocultarBotones(){
    document.getElementById('btnEliminar').className = "btn-opcional";
    document.getElementById('btnModificar').className = "btn-opcional";
    document.getElementById('btnCancelar').className = "btn-opcional";
}