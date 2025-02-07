var cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

///// NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA
var ayudasActividad = [
    `En la actividad 1. Selecciona el círculo amarillo luego selecciona el círculo azul para trazar una línea.  <br>`,
    `En la actividad 2, 4 y 5. Escribe en cada recuadro de texto.  <br>`,
    `En la actividad 3. Selecciona para encerrar la opción correcta.  <br>`,
]
var unidad = '2'
$("#numTema").html('4')
$("#temaActividad").html('El cuidado prenatal y la lactancia')
$("#n_pagina").html("76");
$(".numeroTemaColor").addClass(`unidad${unidad}numeroTema`)
$(".temaColor").addClass(`unidad${unidad}tema`)

/// FIN NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA


$(document).ready(function () {
    cajaUnir1_1(300, 500, 'none', 40, 0)
})

var arrayElemInicio = [
    '<div class="divinicio">Calcio y vitamina D</div>',
    '<div class="divinicio">Hierro</div>',
    '<div class="divinicio">Ácido fólico</div>',
]
var arrayElemFin = [
    '<div class="divfin">Necesarios para el crecimiento de los huesos y la función muscular y nerviosa</div>',
    '<div class="divfin">Participa en la formación de glóbulos rojos, previniendo la anemia.</div>',
    '<div class="divfin">Previene defectos en el tubo neuronal como la espina bífida.</div>',
]

function pregunta1() {
    let core = validarUnir1_1()
    let total = core * 2;
    $("#pre1a").val(parseFloat(total).toFixed(2));
}


var p3opciones = [
    { title: 'Leche de transición', resp: '1', },
    { title: 'Calostro ', resp: '0', },
    { title: 'Leche madura', resp: '1', },
];

SelSimple(p3opciones, "#p3act", 3)




function pregunta3() {
    let core = validarSelSimple(3)
    let total = core * 2;
    $("#pre3a").val(parseFloat(total).toFixed(2));
}


var rutinaPensamiento = [
    {
        img: '<img src="img/ico_loquese.png" alt="">', txt2: '¿Qué cuidados prenatales conozco?', color2: '#DCBCCD',
    },
    {
        img: '<img src="img/ico_loquequierosaber.png" alt="">', txt2: '¿Sobre qué cuidados prenatales me gustaría aprender?', color2: '#CCEDE8',
    },
    { img: '<img src="img/ico_loquehare.png" alt="">', txt2: '¿Qué haré para aprenderlos?', color2: '#FCDCC0', },
]
rutinaPensamiento.forEach(element => {
    /// lo que se, lo que quiero saber, lo que hare
    $("#rutinaPensamiento").append(`
        <div style="position: relative;border-radius:5px;width:280px;margin:5px;text-align:center">
            ${element.img}
            <div style="padding: 5px;margin: 5px;background-color: ${element.color2} !important;print-color-adjust: exact;border-radius: 5px;margin-top:-5px">
                <div>
                    <div style="margin-bottom: 5px;">
                       ${element.txt2}
                    </div>
                    <textarea class="form-control bg-blanco" placeholder="Escribir" rows="3"></textarea>
                </div>
            </div>
        </div>
    </div>`)
});



var coevaluacion = [
    `¿Contribuí activamente durante la discusión del equipo?`,
    `¿Escuché atentamente los argumentos del equipo contrario?`,
    `¿Reflexioné sobre los puntos discutidos?`
]

var itemsReflexiono = [`¿Cómo puedo explicarle este tema a un familiar que acaba de tener un bebé?`]


function total() {
    pregunta1();
    pregunta3();
    var pre1a = parseFloat(document.getElementById("pre1a").value)
    var pre3a = parseFloat(document.getElementById("pre3a").value)
    cor = pre1a + pre3a
    Calculo_nota();
    EndActivity()
}
