var cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

///// NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA
var ayudasActividad = [
    `En la actividad 1. Usa la pizarra para resolver el ejercicio y selecciona la respuesta correcta.  <br>`,
    `En la actividad 2 y 3. Usa las herramientas de dibujo para graficar cada ecuación.  <br>`,
    `En la actividad 4. Selecciona V o F.  <br>`,
    `En la actividad 5. Escribe en los recuadros de texto.  <br>`,
    `En la actividad 6 y 7. Usa la pizarra para realizar cada ejercicio.  <br>`,
]
var unidad = '4'
$("#numTema").html('1')
$("#temaActividad").html('Sistema de ecuaciones lineales')
$("#n_pagina").html("134");
$(".numeroTemaColor").addClass(`unidad${unidad}numeroTema`)
$(".temaColor").addClass(`unidad${unidad}tema`)

/// FIN NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA



$(document).ready(function () {
    agregarEcuacion_campo(p3ecuaciones, "p3ecuacion")
})




// Lista de números a procesar
var p1actividad = [
    { item1: 'x + 3y = 44', item2: '2x - 5y = - 5', punto: '(5,3)', resp: 'Sí es solución' },
    { item1: 'x - 2y = 54', item2: '5x + 7y = 62', punto: '(6,2)', resp: 'No es solución' },
    { item1: '-9x - 3y = 21', item2: '10x + 8y = 0', punto: '(-4,5)', resp: 'Sí es solución' },
    { item1: '3x + 4y = 24', item2: '2x - y = 1', punto: '(2,3)', resp: 'No es solución' },
    { item1: '-6x + 2y = 12', item2: '8x - 5y = -17', punto: '(1,5)', resp: 'No es solución' },
];
mezclar(p1actividad)
let p1respuestas = []

let p1items = p1actividad.map((e, i) => {
    p1respuestas.push(e.resp)
    let resultado = `<div class="p1_container">
                    <div><b class="txt-azul">${letrasLista[i]}</b> &emsp;<i>${e.item1}</i>&emsp; y el punto &emsp;<i>${e.punto}</i></div>
                    <div>&emsp;&emsp;<i>${e.item2}</i></div>
                    <div id="pizarra1${i}" class="pizarra-matematica"></div>
                    <div><b class="txt-morado"><i>Resp: </i></b><select class="selectbox2 p1sel" id="p1var${i}"></select></div>
                </div>`;
    return resultado;
}).join('');
// Inyectamos el HTML generado en el DOM
$("#p1act").html(`${p1items}`);

let p1opciones = ['Sí es solución', 'No es solución']
asignarOpcionesAselect(p1opciones, '.p1sel')




function pregunta1() {
    let core = validarExactas(p1respuestas, "#p1var")
    let total = core * 1.5;
    $("#pre1a").val(parseFloat(total).toFixed(2));
}





var p2actividad = [
    { item1: '2 + 3y = 6', item2: '2x + 3y = 4', resp: 'paralelas' },
    { item1: 'x - 2y = 1', item2: '2x + y = 7', resp: 'secantes' },
    { item1: '-2x + 3y = -6', item2: '-4x + 6y = -12', resp: 'coincidentes' },
];
// mezclar(p2actividad)
let p2respuestas = []

let p2items = p2actividad.map((e, i) => {
    p2respuestas.push(e.resp)
    let resultado = `<div class="container_canvas">
                    <div><b class="txt-azul">${letrasLista[i]}</b> &emsp;<i>${e.item1}</i></div>
                    <div>&emsp;&emsp;<i>${e.item2}</i> &emsp;<b class="txt-morado"><i>Resp: </i></b><select class="selectbox2 p2sel" id="p2var${i}"></select></div>
                    <div class="my-drawing canvasp2" style="width:100%"></div>
                </div>`;
    return resultado;
}).join('');
// Inyectamos el HTML generado en el DOM
$("#p2act").html(p2items);

let p2opciones = ['paralelas', 'secantes', 'coincidentes']
asignarOpcionesAselect(p2opciones, '.p2sel')



function pregunta2() {
    let core = validarExactas(p2respuestas, "#p2var")
    let total = core * 1.5;
    $("#pre2a").val(parseFloat(total).toFixed(2));
}



function agregarEcuacion_campo(array, div_id) {
    array.forEach((element, index) => {
        const equationElement = document.createElement('p');
        equationElement.classList.add('ecuacionCSS');
        equationElement.innerHTML = element;
        // Insertar la ecuación en el contenedor
        document.getElementById(`${div_id}${index}`).appendChild(equationElement);
        // Renderizar la ecuación con MathJax
        MathJax.typesetPromise();
    });
}

// pregunta 3

let p3ecuaciones = [
    `\\[ \\ - \\frac{5}{4} x \\ + \\ 10 = y \\]`,
    `\\[ \\frac{1}{2} x \\ + 5 = \\frac{5}{6} y \\]`,
    `\\[ 2x - 12 = 3y \\]`,
    `\\[ 6x + 3y = - 18  \\]`,
]


let p3actividad = [
    `<span id="p3ecuacion0"></span>`,
    `<span id="p3ecuacion1"></span>`,
    `<span id="p3ecuacion2"></span>`,
    `<span id="p3ecuacion3"></span>`,
]
let p3items = p3actividad.map((e, i) => {
    let resultado = `<div class="container_canvas">
                    <div style="display:inline-flex;align-items:center;justify-content:center"><b class="txt-azul">${letrasLista[i]}</b> &emsp;${e}</div>
                    <div class="my-drawing canvasp3" style="width:100%"></div>
                </div>`;
    return resultado;
}).join('');
// Inyectamos el HTML generado en el DOM
$("#p3act").html(p3items);



var p4act = [
    { enunciado: 'Un sistema de ecuaciones lineales siempre tiene una solución única.', correcta: 'F' },
    { enunciado: 'Un sistema de ecuaciones lineales con dos incógnitas no puede tener más de una solución.', correcta: 'F' },
    { enunciado: 'Si las rectas son coincidentes puede tener infinitas soluciones.', correcta: 'V' },
    { enunciado: 'Para que un sistema tenga solución, las rectas deben cruzarse en algún punto.', correcta: 'V' },
    { enunciado: 'La solución de un sistema de ecuaciones lineales puede representarse gráficamente como el  punto de intersección de las rectas.', correcta: 'V' },
]

let p4respuestas = enunciadoSelectOpcion(p4act, "#p4act", '4', 'vof')
console.log(p4respuestas)


function pregunta4() {
    let core = validarExactas(p4respuestas, '#p4var')
    let total = (core / p4respuestas.length) * 1.5;
    $("#pre4a").val(parseFloat(total).toFixed(2));
}




var rutinaPensamiento = [
    //// antes pensaba, ahora pienso  
    { img: '<img src="img/icoAntesPensaba.png">', frase: '¿Cómo graficar una ecuación?', borderColor: '#7AD1E0', row: '5' },
    { img: '<img src="img/icoAhoraPienso.png">', frase: '¿Cómo me resulta más fácil graficar una ecuación?', borderColor: '#8BCB40', row: '5' },
]
rutinaPensamiento.forEach(element => {
    $("#rutinaPensamiento").append(`
        <div style="position: relative;border-radius:5px;width:40%;margin:20px 5px;border:solid 2px ${element.borderColor}">
            <div style="position: absolute;top:-35px;left:-7px;display: flex;align-items: end;justify-content: center;">
                ${element.img}
            </div>
            <div style="padding: 5px;margin: 5px;margin-top: 25px;background-color: white !important;print-color-adjust: exact;border-radius: 5px;">
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
//     `¿Inventé con mis compañeros una historia para un cuento ? `,
//     `¿Pude crear personajes y un lugar para el desarrollo de un cuento ? `,
//     `¿Expresé mis ideas y respeté las opiniones de mis compañeros ? `,
//     `¿Apoyé a mi equipo durante todo el trabajo ? `
// ]

var itemsReflexiono = [`¿Qué estrategias utilizo para identificar y resolver sistemas de ecuaciones lineales de manera eficiente?`]

function total() {
    pregunta1();
    pregunta2();
    pregunta4();
    var pre1a = parseFloat(document.getElementById("pre1a").value)
    var pre2a = parseFloat(document.getElementById("pre2a").value)
    var pre4a = parseFloat(document.getElementById("pre4a").value)
    cor = pre1a + pre2a + pre4a
    Calculo_nota();
    EndActivity()
}
