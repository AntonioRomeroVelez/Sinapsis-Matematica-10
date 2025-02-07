var cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

///// NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA
var ayudasActividad = [
    `En la actividad 1, 2, 5 y 6. Escribe en los recuadros de texto.  <br>`,
    `En la actividad 3. Completa el crucigrama correctamente.  <br>`,
    `En la actividad 4. Selecciona el tipo de tejido que corresponde a cada imagen.  <br>`,

]
var unidad = '1'
$("#numTema").html('2')
$("#temaActividad").html('Potenciación de números reales')
$("#n_pagina").html("22");
$(".numeroTemaColor").addClass(`unidad${unidad}numeroTema`)
$(".temaColor").addClass(`unidad${unidad}tema`)
/// FIN NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA


$(document).ready(function () {

})


var p1act = [
    {
        enunciado: `La propiedad de la división de potencias con la misma base establece que <img> para cualquier a ≠ 0.`, correcta: 'V'
    },
    { enunciado: ``, correcta: 'F' },
    { enunciado: ``, correcta: 'V' },
]

let p1respuestas = enunciadoSelectOpcion(p1act, "#p1act", '1', 'vof')
console.log(p1respuestas)


function pregunta1() {
    let core = validarExactas(p1respuestas, '#p1var')
    tpre1 = core * 1;
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}



palabrasCrucigrama = ['1MOLECULAR', '2POBLACIÓN', '3BIÓSFERA', '4ECOSISTEMA', '5TISULAR', '6INDIVIDUO']

function pregunta3() {
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
    tpre3 = ((nota / 10) * 1.5);
    $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}





var p4act = [
    { item: '<img src="img/i1_p22_act4.jpg" alt="">', resp: 'Tejido epitelial' },
    { item: '<img src="img/i2_p22_act4.jpg" alt="">', resp: 'Tejido conectivo' },
    { item: '<img src="img/i3_p22_act4.jpg" alt="">', resp: 'Tejido muscular' },
    { item: '<img src="img/i4_p22_act4.jpg" alt="">', resp: 'Tejido nervioso' },
];

var p4res = imgSelectRespuesta(p4act, 4);
let p4opciones = ['Tejido epitelial', 'Tejido conectivo', 'Tejido muscular', 'Tejido nervioso'];
asignarOpcionesAselect(p4opciones, ".p4sel")
divImagenesAleatorias(p4opciones, "#p4opciones");

function pregunta4() {
    let core = validarExactas(p4res, "#p4var");
    let total = core * 1.5;
    $("#pre4a").val(parseFloat(total).toFixed(2));
}


// function pregunta2() {
//     let core = 0

//     let total = (core / 1) * 2.5;
//     $("#pre2a").val(parseFloat(total).toFixed(2));
// }



var coevaluacion = [
    '¿Tomé en cuenta las opiniones de mis compañeros para realizar el trabajo?',
    '¿Participé con entusiasmo en las actividades que me encargaron?',
    '¿Aporté con el material necesario para desarrollar la actividad?',
]
var itemsReflexiono = [
    `¿En mi entorno, qué función cumplo según la organización de la materia? `
]


function total() {
    pregunta3();
    pregunta4();
    // pregunta5();
    // pregunta6();
    // pregunta7();
    var pre3a = parseFloat(document.getElementById("pre3a").value)
    // var pre3a = parseFloat(document.getElementById("pre3a").value)
    var pre4a = parseFloat(document.getElementById("pre4a").value)
    // var pre5a = parseFloat(document.getElementById("pre5a").value)
    // var pre6a = parseFloat(document.getElementById("pre6a").value)
    // var pre7a = parseFloat(document.getElementById("pre7a").value)
    cor = pre3a + pre4a
    // pre1a + pre2a + pre3a + pre4a + pre5a + pre6a + pre7a
    Calculo_nota();
    EndActivity()
}
