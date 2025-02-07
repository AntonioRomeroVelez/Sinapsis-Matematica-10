var cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

///// NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA
var ayudasActividad = [
    `En la actividad 1. Selecciona y completa correctamente.  <br>`,
    `En la actividad 2. Empareja con el literal que corresponde.  <br>`,
    `En la actividad 3. Selecciona para subrayar la opción correcta.  <br>`,
    `En la actividad 4. Escribe en cada recuadro de texto.  <br>`,
]
var unidad = '2'
$("#numTema").html('2')
$("#temaActividad").html('Producción de células sexuales masculinas y femeninas')
$("#n_pagina").html("62");
$(".numeroTemaColor").addClass(`unidad${unidad}numeroTema`)
$(".temaColor").addClass(`unidad${unidad}tema`)

/// FIN NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA


$(document).ready(function () {
    $("#p1actInicio").prepend(`<div class="p2Fase">Fase</div>`)
    $("#p1actFin").prepend(`<div class="p2Enunciado">Enunciado</div>`)
})

var p1act = [
    { img: '<img src="img/i1_p58_act1.jpg">', id: '0' },
    { img: '<img src="img/i2_p58_act1.jpg">', id: '1' },
    { img: '<img src="img/i3_p58_act1.jpg">', id: '2' },
];
ImagenesSelect(p1act, "#p1act", 1);

let p1opciones = ['Espermatogonia', 'Espermatocito secundario', 'Espermatozoide', 'Ovocito primario 2n', 'Óvulo maduro n', 'Cuerpos polares secundarios n']
asignarOpcionesAselect(p1opciones, '.p1sel')




function pregunta1() {
    let core = validarExactas(['Espermatogonia', 'Espermatocito secundario', 'Espermatozoide', 'Ovocito primario 2n', 'Cuerpos polares secundarios n', 'Óvulo maduro n'], '#p1var')
    let total = core * 2;
    $("#pre1a").val(parseFloat(total).toFixed(2));
}



let p2actividad = [
    {
        literal: 'Fase lútea', enunciado: 'Tiene una duración aproximada de 14 días. El folículo que liberó el óvulo produce progesterona, hormona que conserva el endometrio en caso de un embarazo.'
    },
    {
        literal: 'Fase folicular', enunciado: 'Dura 14 días y empieza con el desarrollo de un óvulo dentro de un saco. A la par, en el útero su revestimiento se engrosa.'
    },
    {
        literal: 'Fase de ovulación', enunciado: 'Suele durar entre 24 y 36 horas y consiste en la liberación del óvulo maduro situado en el ovario y su tránsito por las trompas de Falopio hacia el útero.'
    }
]

let p2respuestas = Relacionarliterales(p2actividad, '2')

function pregunta2() {
    let core = validarExactas(p2respuestas, "#p2var") /// validar
    let total = core * 2;
    $("#pre2a").val(parseFloat(total).toFixed(2));
}



var p3opciones = [
    { title: 'La liberación de un óvulo maduro del ovario.', resp: '1', },
    { title: 'El proceso de fertilización del óvulo por un espermatozoide', resp: '1', },
    { title: 'El sangrado que ocurre por desprendimiento del endometrio en el útero.', resp: '0', },
    { title: 'La implantación del embrión en el útero.', resp: '1', },
];
SelSimple(p3opciones, "#p3act", 3)

function pregunta3() {
    let core = validarSelSimple(3)
    let total = core * 2;
    $("#pre3a").val(parseFloat(total).toFixed(2));
}





var rutinaPensamiento = [
    //// antes pensaba, ahora pienso
    {
        img: '<img src="img/icoAntesPensaba.png" alt="">', txt2: '¿Cómo pensaba antes que se producían las células sexuales?',
        color1: '#48A9BC', row: '5',
    },
    {
        img: '<img src="img/icoAhoraPienso.png" alt="">', txt2: '¿Qué pienso ahora sobre la producción de los gametos?',
        color1: '#69BB28', row: '5',
    }
]
rutinaPensamiento.forEach(element => {
    $("#rutinaPensamiento").append(`
        <div style="border-radius:5px;border:solid 2px ${element.color1};width:45%;margin:20px 10px;position:relative">
            <div style="position:absolute;top:-30px;left:-9px">
                ${element.img}
            </div>
            <div style="padding: 5px;margin: 5px;background-color: white !important;print-color-adjust: exact;border-radius: 5px;margin-top:40px;">
                <div>
                    <div style="margin-bottom: 5px;">
                       ${element.txt2}
                    </div>
                    <textarea class="form-control " placeholder="Escribir" rows="${element.row}"></textarea>
                </div>
            </div>
        </div>
    </div>`)
});




var coevaluacion = [
    `¿Participé con entusiasmo en las actividades que me encargaron?`,
    `¿Aporté con el material necesario para desarrollar la actividad?`,
    `¿Contribuí al éxito de mi equipo durante el juego?`
]

var itemsReflexiono = [`¿Qué nuevas inquietudes tengo sobre la producción de células sexuales?`]


function total() {
    pregunta1();
    pregunta2();
    pregunta3();
    var pre1a = parseFloat(document.getElementById("pre1a").value)
    var pre2a = parseFloat(document.getElementById("pre2a").value)
    var pre3a = parseFloat(document.getElementById("pre3a").value)
    cor = pre1a + pre2a + pre3a
    Calculo_nota();
    EndActivity()
}
