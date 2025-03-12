var cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

///// NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA
var ayudasActividad = [
    `En la actividad 1. Selecciona para tachar.  <br>`,
    `En la actividad 2. Selecciona el círculo amarillo luego selecciona el círculo azul para trazar una línea.  <br>`,
    `En la actividad 3, 4, 5, 6, 7. Usa la pizarra para resolver cada ejercicio.  <br>`,
    `En la actividad 8. Escribe en cada recuadro de texto.  <br>`,
]
var unidad = '3'
$("#numTema").html('3')
$("#temaActividad").html('Adición y sustracción de fracciones algebraicas')
$("#n_pagina").html("108");
$(".numeroTemaColor").addClass(`unidad${unidad}numeroTema`)
$(".temaColor").addClass(`unidad${unidad}tema`)

/// FIN NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA


$(document).ready(function () {
    cajaUnir1_1(380, 500, 'none', 0, 0)
})


let p1actividad = [
    { item: 'Si los denominadores de dos fracciones algebraicas son iguales, para sumarlas o restarlas solo se suman o restan los numeradores, manteniendo el mismo denominador.', resp: 'V' },
    { item: 'Para sumar fracciones algebraicas con denominadores distintos, siempre se debe multiplicar directamente los denominadores entre sí.', resp: 'F' },
    { item: 'En una resta de fracciones algebraicas, el signo menos solo afecta al primer término del numerador.', resp: 'F' },
    { item: 'En operaciones combinadas de fracciones algebraicas, los signos de agrupación como paréntesis, corchetes y llaves deben resolverse en último lugar.', resp: 'F' },
    { item: 'El denominador común en la suma de fracciones algebraicas con denominadores diferentes se encuentra calculando el mínimo  común múltiplo (m. c. m).', resp: 'V' },
]
mezclar(p1actividad)
let p1respuestas = []

let p1items = p1actividad.map((el, i) => {
    p1respuestas.push(el.resp)
    let color = generarColorSuave();
    let colorOscuro = oscurecerColorRGB(color, 20);
    let item = `<div class="p1_container" style="background-color:${color} !important;print-color-adjust: exact;border: solid 1px ${colorOscuro};">
                    <div><b class="txt-azul">${letrasLista[i]}</b></div>
                    <div class="p1_enunciado">
                        ${el.item}
                    </div>
                    <div class="p1_opciones">
                        <div class="p1opcion p1opcion${i}" style="border: solid 3px ${colorOscuro};box-shadow: 7px 0px 0px ${colorOscuro} !important;print-color-adjust: exact;">V</div>
                        <div class="p1opcion p1opcion${i}" style="border: solid 3px ${colorOscuro};box-shadow: 7px 0px 0px ${colorOscuro} !important;print-color-adjust: exact;">F</div>
                    </div>
                </div>`
    return item
}).join('')

$("#p1act").html(p1items)
agregarClaseMultiple('p1opcion', 'tacharp1')



function pregunta1() {
    let core = 0;
    for (let i = 0; i < p1respuestas.length; i++) {
        let cajas = document.querySelectorAll(`.p1opcion${i}`)
        cajas.forEach(caja => {
            if (caja.classList.contains('tacharp1')) {
                if (caja.textContent == p1respuestas[i]) {
                    core++; caja.classList.add('bien2')
                } else {
                    caja.classList.add('mal2')
                }
            }
        });
    }
    let total = Math.max((core / p1respuestas.length) * 1.25, 0);
    $("#pre1a").val(parseFloat(total).toFixed(2));
}


let arrayElemInicio = [
    `<div class="divinicio"><img src="img/i1_p108_act2.png"></div>`,
    `<div class="divinicio"><img src="img/i2_p108_act2.png"></div>`,
    `<div class="divinicio"><img src="img/i3_p108_act2.png"></div>`,
    `<div class="divinicio"><img src="img/i4_p108_act2.png"></div>`,
    `<div class="divinicio"><img src="img/i5_p108_act2.png"></div>`,
]
let arrayElemFin = [
    `<div class="divfin"><img src="img/i7_p108_act2.png"></div>`,
    `<div class="divfin"><img src="img/i6_p108_act2.png"></div>`,
    `<div class="divfin"><img src="img/i9_p108_act2.png"></div>`,
    `<div class="divfin"><img src="img/i8_p108_act2.png"></div>`,
    `<div class="divfin"><img src="img/i10_p108_act2.png"></div>`,
]
function pregunta2() {
    let core = validarUnir1_1()
    let total = Math.max((core * 1.25), 0)
    $("#pre2a").val(parseFloat(total).toFixed(2));
}




let p3actividad = [
    `<img src="img/i1_p108_act3.png"/>`,
    `<img src="img/i2_p108_act3.png"/>`,
    `<img src="img/i3_p108_act3.png"/>`,
    `<img src="img/i4_p108_act3.png"/>`,
    `<img src="img/i5_p108_act3.png"/>`,
    `<img src="img/i6_p108_act3.png"/>`,
    `<img src="img/i7_p108_act3.png"/>`,
    `<img src="img/i8_p108_act3.png"/>`,
    `<img src="img/i9_p108_act3.png"/>`,
];
mezclar(p3actividad)
let p3respuestas = [];

let p3items = p3actividad.map((p, i) => {
    return `<div class="p2_container">
                <div class="p2_enunciado">
                    <b class="txt-azul">${letrasLista[i]}</b> ${p} 
                </div>
                <div class="pizarra-matematicas" id="pizarra3${i}"></div>
            </div>`;
}).join('');
$("#p3act").html(p3items);





let p4actividad = [
    `<img src="img/i1_p109_act4.png"/>`,
    `<img src="img/i2_p109_act4.png"/>`,
    `<img src="img/i3_p109_act4.png"/>`,
    `<img src="img/i4_p109_act4.png"/>`,
];
mezclar(p4actividad)
let p4respuestas = [];

let p4items = p4actividad.map((p, i) => {
    return `<div class="p2_container">
                <div class="p2_enunciado">
                    <b class="txt-azul">${letrasLista[i]}</b> ${p} 
                </div>
                <div class="pizarra-matematicas" id="pizarra4${i}"></div>
            </div>`;
}).join('');
$("#p4act").html(p4items);




var rutinaPensamiento = [
    //// pienso, me interes, investigo
    {
        item: 'Pienso', img: '<img src="img/ico_pienso_cerebro.png">', frase: '¿Qué sé acerca de la adición y sustracción de fracciones algebraicas?', color1: '#00ABCF', color2: '#89CD7C', row: '5'
    },
    {
        item: 'Me interesa', img: '<img src="img/ico_me_interesa_cerebro.png">', frase: '¿Por qué es importante encontrar un denominador común en las fracciones algebraicas?', color1: '#1B62B7', color2: '#EF6119', row: '4'
    },
    {
        item: 'Investigo', img: '<img src="img/ico_investigo_cerebro.png">', frase: '¿Cómo puedo comprobar que las soluciones que obtengo al sumar o restar fracciones algebraicas son correctas?', color1: '#2065B2', color2: '#7FD4E2', row: '4'
    },
]
rutinaPensamiento.forEach(element => {
    $("#rutinaPensamiento").append(`
        <div style="position: relative;border-radius:5px;background-color: ${element.color2} !important;print-color-adjust: exact;width:280px;margin:20px 5px">
            <div style="position: absolute;top:-25px;left:20px;display: flex;align-items: center;justify-content: center;gap:10px;">
                <div style="padding: 1px 15px;border-radius:5px;background-color: ${element.color1} !important;print-color-adjust: exact;color: white !important;print-color-adjust: exact;font-weight:bolder;margin-bottom:7px">
                     ${element.item}
                </div>
                ${element.img}
            </div>
            <div style="padding: 5px;margin: 5px;margin-top: 45px;background-color: white !important;print-color-adjust: exact;border-radius: 5px;">
                <div>
                    <div style="margin-bottom: 5px;">
                       ${element.frase}
                    </div>
                    <textarea class="form-control " placeholder="Escribir" rows="${element.row}"></textarea>
                </div>
            </div>
        </div>
    </div>`)
});





// var coevaluacion = [
//     `Tomé en cuenta las ideas y opiniones de mis compañeros durante la actividad.`,
//     `Considero que mis aportes fueron valiosos para el resultado final.`
// ]

var itemsReflexiono = [`¿Qué obstáculos enfrenté durante el proceso de resolución de ejercicios?`]

function total() {
    pregunta1();
    pregunta2();
    // pregunta3();
    var pre1a = parseFloat(document.getElementById("pre1a").value)
    var pre2a = parseFloat(document.getElementById("pre2a").value)
    // var pre3a = parseFloat(document.getElementById("pre3a").value)
    cor = pre1a + pre2a
    Calculo_nota();
    EndActivity()
}
