//alert("Hola este es mi Javascript");

//let nombre = "Gianella";

//console.log(nombre);

//let contenidoTitulo = "Nombre";

//let titulo = document.querySelector(".logo .fuente-")
//titulo.innertHTML = contenidoTiulo;

//FUNCIONES

let para ="bebes";
let desde ="accesorios";
let de = "hogar";

let parrafo = document.querySelector(".parrafo2");

function cambiarTexto(para, desde, de) {
  let contenido = `Aquí encontrarás todo para los ${para} de casa, desde ${desde}, juguetes y camas para los engreidos de ${de}.`;

    return contenido;
}

parrafo.innerText = cambiarTexto(para, desde, de);