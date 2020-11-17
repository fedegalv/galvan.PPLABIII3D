import { listaAnuncio, actualizarLista ,filtroPrecio} from "../scripts/scripts.js"
import crearTabla from "../scripts/tabla.js"

//GLOBALES
var transacciones = [];
let valorSeleccionado = 'Todos';

let select = document.getElementById("selectFiltros");

select.addEventListener('change', () => {
    //GUARDO EL VALOR SELECCIONADO EN SELECT
    valorSeleccionado = select.options[select.selectedIndex].text;
    //console.log(valorSeleccionado);
    if (valorSeleccionado === 'Todos') {
        actualizarLista();
    } else {
        var listaFiltrada = listaAnuncio.filter(anuncio => {
            return anuncio.transaccion === valorSeleccionado;
        });

        //LIMPIA TABLA Y USA LISTA FILTRADA PARA CREAR TABLA
        divTabla.innerHTML = "";
        const imgSource = document.createElement('img');
        imgSource.src = "../materials/208.gif";
        divTabla.appendChild(imgSource);
        setTimeout(() => {
            divTabla.innerHTML = "";
            divTabla.appendChild(crearTabla(listaFiltrada));
            filtroPrecio.value = filtrarPrecio(listaFiltrada);
        }, 500);


    }

});

export function llenarSelect() {
    var transacciones = Array.from(filtrarTransaccionesUnicas());
    //AGREGO OPCIONES AL SELECT, DE UN ARRAY CON VALORS UNICOS
    transacciones.forEach(transaccion => {
        var option = document.createElement("option");
        option.text = transaccion;
        option.value = transaccion;

        select.appendChild(option);
    });
}

export function filtrarTransaccionesUnicas() {
    listaAnuncio.forEach(anuncio => {
        transacciones.push(anuncio.transaccion);
    });
    var transaccionesUnicas = new Set(transacciones);
    //console.log(transaccionesUnicas);
    return transaccionesUnicas;
}

export function filtrarPrecio(lista) {
    //GUARDA EN ARRAY LOS PRECIOS DE ANUNCIO
    let listaPrecios = lista.map(anuncio => anuncio.precio);
    //SUMA LOS PRECIOS PARA CONSEGUIR TOTAL
    let sumaPrecios = listaPrecios.reduce((prev, actual) => {
        return prev + actual;
    });
    let promedio = sumaPrecios / listaPrecios.length;
    return promedio.toFixed(2);
}
