var cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

///// NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA
var ayudasActividad = [
    `En la actividad 1, 2, 3 y 5. Escribe en los recuadros de texto.  <br>`,
    `En la actividad 4. Selecciona para pintar las opciones correctas.  <br>`,
]

$("#temaActividad").html('Evaluación diagnóstica')
$("#n_pagina").html("0");
/// FIN NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA


$(document).ready(function () {
    cajaUnir1_1(330, 500, 'none', 20, 0)
})

var arrayElemInicio = [
    '<div class="divinicio">4 de julio de 1776</div>',
    '<div class="divinicio">14 de julio de 1789</div>',
    '<div class="divinicio">2 de agosto de 1810</div>',
    '<div class="divinicio">9 de octubre de 1820</div>',
]
var arrayElemFin = [
    '<div class="divfin">Declaración de independencia de Estados Unidos de América.</div>',
    '<div class="divfin">Inicio de la Revolución francesa con la Toma de la Bastilla.</div>',
    '<div class="divfin">Matanza de los próceres de la independencia de Quito.</div>',
    '<div class="divfin">Proclamación de la independencia de Guayaquil.</div>',
]
function pregunta1() {
    let core = validarUnir1_1()
    let total = core * 2;
    $("#pre1a").val(parseFloat(total).toFixed(2));
}

var p3act = [
    { txt: 'Criollos', color: '#F9AD12' },
    { txt: 'Indígenas', color: '#2EBAD5' },
    { txt: 'Mestizos', color: '#E32A9E' },
    { txt: 'Afrodescendientes', color: '#7945A7' },
]

p3act.forEach(element => {
    $("#p3act").append(`
         <div class="p3d-i-f">
            <div class="txt-blanco" style="background-color: ${element.color} !important;-webkit-print-color-adjust: exact; print-color-adjust: exact;padding:10px;border-radius:10px 0px 0px 10px;width:160px;text-align: center;">
                ${element.txt}
            </div>
            <div class="p1campoTexto" style="background-color: ${element.color} !important;-webkit-print-color-adjust: exact; print-color-adjust: exact;padding:5px 10px;border-radius:0px 10px 10px 0px;width:100%;"></div>
        </div>`)
});


palabrasCrucigrama = ['1opcion', '2opcion', '3opcion', '4opcion']


FragmentoTexto(`El presidente Gonzalo Córdova, último representante del periodo plutocrático, fue derrocado el 9 de julio de 1929 por un grupo de jóvenes militares, que gobernó como Junta de Gobierno Plural. ¿Qué personaje se destacó en la Junta de Gobierno Plural?`, `#FEF0DD`, `p6cuento`)

var p6opciones = [
    { title: '<li>Velasco Ibarra</li>', resp: '0', }, //correcta
    { title: '<li>Napoleón Dillon</li>', resp: '1', }, //incorrecta
    { title: '<li>Isidro Ayora</li>', resp: '1', }, //incorrecta
    { title: '<li>Arroyo del Rio</li>', resp: '1', }, //incorrecta
];
SelSimple(p6opciones, "#p6act", 6)

function pregunta6() {
    let core = validarSelSimple(6)
    let total = core * 2;
    $("#pre6a").val(parseFloat(total).toFixed(2));
}


$("#p7act").html(`
    <center>
        <table style="width:100%;">
            <tr>
                <td>
                    <textarea class="form-control no-redimensionar  hvr-grow-shadow" rows="2" style="border:solid 2px #F14983" placeholder="Escribir"></textarea>
                </td>
                <td rowspan="3" style="width:100px;"><img src="img/i1_p4_act7.png" alt=""></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>
                    <textarea class="form-control no-redimensionar  hvr-grow-shadow" rows="2" style="border:solid 2px #BF8DCB" placeholder="Escribir"></textarea>
                </td>
            </tr>
            <tr>
                <td>
                    <textarea class="form-control no-redimensionar  hvr-grow-shadow" rows="2" style="border:solid 2px #F8A70C" placeholder="Escribir"></textarea>
                </td>
                <td></td>
            </tr>
        </table>
    </center>`)
var p8opciones = ''
var p8colores = ['#54C5BF', '#8057B1', '#F79A4E']
for (let i = 0; i < p8colores.length; i++) {
    p8opciones += `<textarea class="form-control no-redimensionar  hvr-grow-shadow" rows="1" style="border:solid 2px ${p8colores[i]};margin:5px" placeholder="Escribir"></textarea>`
}
$("#p8act").html(p8opciones)





var coevaluacion = [
    `¿Mis ideas fueron expresadas de manera clara y organizada?`,
    `¿Colaboré con la exposición del tema?`
]
var itemsReflexiono = [`¿Cómo han ayudado a la economía del país los diferentes auges económicos que ha tenido?`]


function total() {
    pregunta1();
    pregunta6();
    var pre1a = parseFloat(document.getElementById("pre1a").value)
    var pre6a = parseFloat(document.getElementById("pre6a").value)
    cor = pre1a + pre6a
    Calculo_nota();
    EndActivity()
}
