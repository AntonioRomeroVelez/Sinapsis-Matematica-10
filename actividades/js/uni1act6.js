var cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

///// NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA
var ayudasActividad = [
    `En la actividad 1. Selecciona la palabra para completar cada oración, y llena el crucigrama.  <br>`,
    `En la actividad 2. Selecciona V o F.  <br>`,
    `En la actividad 3 y 6. Completa la tabla.  <br>`,
    `En la actividad 4. Usa la pizarra desarrollar el ejercicio.  <br>`,
    `En la actividad 5. Escribe en el recuadro de texto, usa la pizarra desarrollar el ejercicio y utiliza las herramientas de dibujo.  <br>`,
]
var unidad = '1'
$("#numTema").html('6')
$("#temaActividad").html('Características de variables cuantitativas para datos agrupados')
$("#n_pagina").html("42");
$(".numeroTemaColor").addClass(`unidad${unidad}numeroTema`)
$(".temaColor").addClass(`unidad${unidad}tema`)
/// FIN NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA


$(document).ready(function () {

})


var p1act = [
    { enunciado: 'Los datos que se agrupan en intervalos de igual tamaño se denominan intervalos de <select/>.', id: 'p1var0', clase: 'p1sel' },
    { enunciado: 'La variable <select/> expresa cantidades numéricas.', id: 'p1var1', clase: 'p1sel' },
    { enunciado: 'El <select/> de frecuencias es aquel que une los puntos medios del histograma.', id: 'p1var2', clase: 'p1sel' },
    { enunciado: 'La variable cuantitativa <select/> tiene un valor contable, como el número de hijos.', id: 'p1var3', clase: 'p1sel' },
    { enunciado: 'La variable <select/>  describe atributos o cualidades, como el color de ojos.', id: 'p1var4', clase: 'p1sel' },
    { enunciado: 'Un <select/> es una representación gráfica que utiliza barras para mostrar la distribución.', id: 'p1var5', clase: 'p1sel' },
    { enunciado: 'Los datos se tratan como <select/> cuando en la distribución se tienen varios valores distintos en lugar de repetidos.', id: 'p1var6', clase: 'p1sel' },
    { enunciado: 'La variable <select/> es un valor que está dentro de un rango, como la altura o el peso.', id: 'p1var7', clase: 'p1sel' },
    { enunciado: 'La <select/> absoluta es el número de veces que un valor específico aparece en un conjunto de datos', id: 'p1var8', clase: 'p1sel' },
    { enunciado: 'La regla de Sturges se utiliza para determinar el <select/> de la tabla de frecuencias.', id: 'p1var9', clase: 'p1sel' },
]
TextoConSelectp1(p1act, "#p1act")

function TextoConSelectp1(array, selector) {
    array.forEach((element, index) => {
        var valor = `<div style="margin:5px 0px;padding:5px;text-align:left;"><b class="txt-azul">${index})</b>  ${element.enunciado}</div>`;
        valor = valor.replace('<select/>', `<select id="${element.id}" class="${element.clase} selectbox2"></select>`);
        $(selector).append(valor);
    });
}

let p1opciones = ['clase', 'cuantitativa', 'polígono', 'discreta', 'cualitativa', 'histograma', 'agrupados', 'continua', 'frecuencia', 'intervalo']
asignarOpcionesAselect(p1opciones, '.p1sel')

palabrasCrucigrama = ['0clase', '1cuantitativa', '2polígono', '3discreta', '4cualitativa', '5histograma', '6agrupados', '7continua', '8frecuencia', '9intervalo']



function pregunta1() {
    let core = validarExactas(['clase', 'cuantitativa', 'polígono', 'discreta', 'cualitativa', 'histograma', 'agrupados', 'continua', 'frecuencia', 'intervalo'], '#p1var')
    var respuestas = document.getElementsByClassName("respuestasCrucigrama");
    var soluciones = document.getElementsByClassName("solucionCrucigrama");
    var valor = valor_pregunta(respuestas);
    var nota = 0;
    for (var i = 0; i < respuestas.length; i++) {
        if (
            verificar_contenido(
                respuestas[i].value.toLowerCase(),
                soluciones[i].value.toLowerCase().split("*")
            )
        ) {
            respuestas[i].classList.add("bien");
            respuestas[i].classList.remove("mal");
            nota += valor;
        } else {
            respuestas[i].classList.add("mal");
            respuestas[i].classList.remove("bien");
        }
    }
    tpre1 = ((nota / 10) * 1);
    let p1total = ((tpre1 + core) / 2) * 2
    $("#pre1a").val(parseFloat(p1total).toFixed(2));
}


var p2act = [
    { enunciado: `Las variables cuantitativas se dividen en discretas y continuas.`, correcta: 'V' },
    { enunciado: `Los intervalos de clases son utilizados para agrupar datos en tablas de frecuencias. `, correcta: 'V' },
    { enunciado: `Los datos se consideran agrupados cuando tienen pocos valores repetidos. `, correcta: 'F' },
    { enunciado: `Un histograma muestra la distribución de una variable utilizando líneas conectadas. `, correcta: 'F' },
    { enunciado: `El polígono de frecuencias se construye a partir de un histograma. `, correcta: 'V' },
    { enunciado: `La frecuencia relativa es una medida que se utiliza en las tablas de frecuencias. `, correcta: 'V' },
    { enunciado: `Las variables cualitativas pueden ser expresadas numéricamente.`, correcta: 'F' },
]

let p2respuestas = enunciadoSelectOpcion(p2act, "#p2act", '2', 'vof')
// console.log(p1respuestas)


function pregunta2() {
    let core = validarExactas(p2respuestas, "#p2var") /// validar
    let total = (core / 1) * 1.5;
    $("#pre2a").val(parseFloat(total).toFixed(2));
}


let p3actividad = ['[1,6 – 2) ', '[2 – 2,4) ', '[2,4 – 2,8) ', '[2,8 – 3,2) ', '[3,2 – 3,6) ', '[3,6 – 4) ', 'Total']

let p3items = p3actividad.map((element, index) => {
    let idp3 = index * 4

    if (element == 'Total') {
        return `
            <tr>
                <td>${element}</td>
                <td><input class="caracter2" id="p3var${idp3}"></td>
                <td></td>
                <td><input class="caracter4" id="p3var${idp3 + 1}"></td>
                <td></td>
            </tr>`
    } else {
        return `
            <tr>
                <td>${element}</td>
                <td><input class="caracter2" id="p3var${idp3}"></td>
                <td><input class="caracter2" id="p3var${idp3 + 1}"></td>
                <td><input class="caracter4" id="p3var${idp3 + 2}"></td>
                <td><input class="caracter4" id="p3var${idp3 + 3}"></td>
            </tr>`
    }

}).join('')
$("#p3act").html(`<table class="table-bordered-1" style="width:500px">
                        <tr>
                            <td class="bg-morado1">x<sub>i</sub></td>
                            <td class="bg-morado1">f<sub>i</sub></td>
                            <td class="bg-morado1">F<sub>i</sub></td>
                            <td class="bg-morado1">f<sub>%</sub></td>
                            <td class="bg-morado1">F<sub>%</sub></td>
                        </tr>
                        ${p3items}
                    </table>`)





function pregunta3() {
    let core = validarExactas([
        '4', '4', '8%', '8%',
        '5', '9', '10%', '18%',
        '10', '19', '20%', '38%',
        '13', '32', '26%', '64%',
        '10', '42', '20%', '84%',
        '8', '50', '16%', '100%',
        '50', '100%'
    ], "#p3var")
    let total = (core / 1) * 1.5;
    $("#pre3a").val(parseFloat(total).toFixed(2));
}









let p6actividad = [
    { item: '[50 – 55)', resp: '10' },
    { item: '[55 – 60)', resp: '8' },
    { item: '[60 – 65)', resp: '13' },
    { item: '[65 – 70)', resp: '12' },
    { item: '[70 – 75)', resp: '9' },
    { item: '[75 – 80)', resp: '7' },
    { item: '[80 – 85)', resp: '10' },
    { item: '[85 – 90)', resp: '6' },
    { item: '[90 – 95)', resp: '5' },
]

let p6items = p6actividad.map((element, i) => {

    return `
    <tr>
        <td>${element.item}</td>
        <td><input class="caracter3 p6var" data-info=${element}></input></td>
    </tr>`
}).join('')

$("#p6act").html(`
    <div style="margin:10px">
     <table class="table-bordered-1" style="width:300px">
        <tr>
            <td style="width:45%">Peso en kg</td>
            <td style="width:55%">Participantes</td>
        </tr>
        ${p6items}
    </table></div>`)



function pregunta6() {
    let core = validarCajaDataInfo('p6var')
    let total = (core / 1) * 2;
    $("#pre6a").val(parseFloat(total).toFixed(2));
}



var coevaluacion = [
    `¿Se describir cómo se construye unatabla de distribución de frecuenciapara una variable cuantitativa?`,
    `¿Puedo comparar un histograma y un polígono de frecuencias?`,
]


var itemsReflexiono = [
    `¿Cómo puedo mejorar mi habilidad para construir gráficos estadísticos?`
]


function total() {
    pregunta1();
    pregunta2();
    pregunta3();
    pregunta6();
    var pre1a = parseFloat(document.getElementById("pre1a").value)
    var pre2a = parseFloat(document.getElementById("pre2a").value)
    var pre3a = parseFloat(document.getElementById("pre3a").value)
    var pre6a = parseFloat(document.getElementById("pre6a").value)
    cor = pre1a + pre2a + pre3a + pre6a
    Calculo_nota();
    EndActivity()
}
