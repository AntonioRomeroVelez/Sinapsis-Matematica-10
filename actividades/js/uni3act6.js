var cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

///// NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA
var ayudasActividad = [
    `En la actividad 1. Selecciona V o F.  <br>`,
    `En la actividad 2, 3, 5 y 6. Usa la pizarra para resolver cada ejercicio.  <br>`,
    `En la actividad 4. Escribe en los recuadros de texto.   <br>`,
    `En la actividad 7. Escribe la expresión en el campo de texto y luego presiona el botón 'Agregar expresión' para formatearla y agregarla correctamente.  <br>`,
]
var unidad = '3'
$("#numTema").html('6')
$("#temaActividad").html('Problemas con expresiones algebraicas')
$("#n_pagina").html("122");
$(".numeroTemaColor").addClass(`unidad${unidad}numeroTema`)
$(".temaColor").addClass(`unidad${unidad}tema`)

// FIN NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA


$(document).ready(function () {
    // addEquation()
    agregarEcuacion_campo(p1ecuaciones, "p1ecuacion")
})

// Lista de ecuaciones en LaTeX
const equations = [
    `\\[ \\frac{1}{9} \\]`,
    `\\[ \\int_{a}^{b} f(x) \\, dx \\]`,
    `\\[ x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} \\]`,
    `\\[ \\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6} \\]`,
    `\\[x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}\\]`,
    `\\(E = mc^2\\)`,
];

let equationIndex = 0;

// Función para agregar una ecuación dinámica
function addEquation() {
    equations.forEach((element, index) => {
        const equationElement = document.createElement('p');
        equationElement.classList.add('ecuacionCSS');
        equationElement.innerHTML = element;
        // Insertar la ecuación en el contenedor
        document.getElementById(`ecuacion${index}`).appendChild(equationElement);
        // Renderizar la ecuación con MathJax
        MathJax.typesetPromise();
    });
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


let p1ecuaciones = [
    `\\[ \\frac{1}{9} \\]`,
    `\\[ \\frac{1}{5} \\]`,
    `\\[ \\frac{3}{7} \\]`,
    `\\[ \\frac{3}{2} \\]`,
]

let p1actividad = [
    `La suma de la mitad y las dos quintas partes de un número es <i id="p1ecuacion0"></i>, <b>calcula</b> el número.`,
    `La suma de la mitad, la cuarta y octava parte de un número es <i>35</i>, <b>calcula</b> el número.`,
    `Si a la fracción <i id="p1ecuacion1"></i> se le resta al denominador el doble de un número se obtiene el número elevado a la potencia (- 1) , <b>determina</b> dicho número.`,
    `Si al numerador de la fracción <i id="p1ecuacion2"></i> se le suma el triple de cierto número y al denominador se le resta el cuádruplo del mismo número se obtiene una nueva fracción equivalente a <i id="p1ecuacion3"></i>. <b>Calcula</b> dicho número.`,
]
mezclar(p1actividad)

let p1items = p1actividad.map((e, i) => {
    let item = `<div class="p1_container">
        <div><b class="txt-azul">${letrasLista[i]}</b> ${e}</div>
        <div id="pizarra1${i}" class="pizarra-matematicas1"></div>
    </div>`
    return item
}).join('')
$("#p1act").html(p1items)

function pregunta1() {
    let core = validarExactas(p1respuestas, '#p1var')
    let total = (core) * 1;
    $("#pre1a").val(parseFloat(total).toFixed(2));
}



let p2actividad = [
    { item: `Sabiendo que su perímetro es 32 cm.`, img: '<img src="img/i1_p122_act2.png"/>', resp1: '10', resp2: '6', resp3: '8', resp4: '8' },
    { item: `Sabiendo que su perímetro es 26 cm.`, img: '<img src="img/i2_p122_act2.png"/>', resp1: '8', resp2: '5', resp3: '9', resp4: '4' },
];
mezclar(p2actividad)
let p2respuestas = [];

let p2items = p2actividad.map((p, i) => {
    p2respuestas.push(p.resp1, p.resp2, p.resp3, p.resp4)
    return `<div class="p2_container">
                <div class="p2_enunciado">
                    <b class="txt-azul">${letrasLista[i]}</b>
                     ${p.item} 
                </div>
                <div>${p.img}</div>
                <div class="pizarra-matematicas" id="pizarra2${i}"></div>
                <div>
                <i class="txt-naranja">Resp.</i>
                a = <input class="caracter2 p2var" data-info="${p.resp1}">
                b = <input class="caracter2 p2var" data-info="${p.resp2}">
                c = <input class="caracter2 p2var" data-info="${p.resp3}"> y 
                d = <input class="caracter2 p2var" data-info="${p.resp4}">
                </div>
            </div>`;
}).join('');
$("#p2act").html(p2items);
console.log(p2respuestas);

function pregunta2() {
    let core = validarCajas('p2var')
    let total = core * 1;
    $("#pre2a").val(parseFloat(total).toFixed(2));
}




let p3actividad = [
    `<img src="img/i1_p114_act3.png"/>`,
    `<img src="img/i2_p114_act3.png"/>`,
    `<img src="img/i3_p114_act3.png"/>`,
    `<img src="img/i4_p114_act3.png"/>`,
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








function mostrarExpresionPotencia() {
    let expresion = document.getElementById("expresion").value;
    expresion = expresion.replaceAll(/([a-zA-Z])(\d+)/g, (match, p1, p2) => {
        return p1 + `<sup>${p2}</sup>`;
    });
    document.getElementById("resultado").innerHTML = expresion;
}




// Función para formatear la expresión ingresada por el usuario
function formatearExpresionIngresada(id) {
    let expresion = $(`#expresion_${id}`).val().toLowerCase();
    expresion = expresion.replaceAll(/([a-zA-Z])(\d+)/g, (match, p1, p2) => {
        return p1 + `<sup>${p2}</sup>`;  // Convierte 'x2' en 'x<sup>2</sup>'
    });
    // console.log(expresion)
    $(`#resultado_${id}`).html(expresion);
    $(`#expresion_${id}`).val('')
}


let p7actividad = [
    { item1: `3x2 + 4x - 5`, respuesta: `3x2`, item2: `= 9x4 + 12  x3 - 15x2` },
    { item1: `4x3 + 6x2 - 9`, respuesta: `4x3`, item2: `= 16x6 + 24x5 - 36x3` },
    { item1: `5x4 y2 - 7xy + 3`, respuesta: `2x4 y2`, item2: `= 10x8 y4 - 14x5 y3  + 6x4 y2` },
    { item1: `2xy + 3y2 `, respuesta: `4x2 y2`, item2: `= 8x3 y3  + 12x2 y4` },
    { item1: `-x4  + 5x2 - 2`, respuesta: `x4`, item2: `= -x8  + 5x6 - 2x4` },
    { item1: `6x2 y3 - 4xy2 + 3`, respuesta: `3xy3`, item2: `= 18x3 y6 - 12x2 y5  + 9xy3` },
]
mezclar(p7actividad)
let p7respuestas = [];

let p7items = p7actividad.map((p, i) => {
    p7respuestas.push(p.respuesta);
    let expresion1 = ponerExpresionPotencia(p.item1);
    let expresion2 = ponerExpresionPotencia(p.item2);
    return `<tr>
                <td style="text-align:left;padding-left:3px">
                    <b class="txt-azul">${letrasLista[i]}</b> ${expresion1}
                </td>
                 <td style="width:100px">
                    <div style="padding:5px"><span id="resultado_${i}"></span></div>
                </td>
                <td style="width:140px" class="info">
                    <div style="padding:5px"><span id="resultado_${i}"></span></div>
                    <div class=" p2_input_boton" style="margin:0px 5px 5px 5px">
                        <input type="text" class="input-p2-expresion" id="expresion_${i}" placeholder="a2 b3 z"  autocomplete="off" style="width:100px;outline:none;margin:2px"/>
                        <center><button onclick="formatearExpresionIngresada('${i}')" class="btn-success" style="font-size:15px;border-radius:5px;border:none;display:block">Agregar expresión</button></center>
                    </div>
                </td>
                <td style="text-align:left;padding-left:3px">
                    ${expresion2} 
                </td>
                
            </tr>`;
}).join('');

// console.log(p7respuestas)

// Inyectamos los items generados en el DOM
$("#p7act").html(`<table class="table-bordered-1" style="width:600px">
        ${p7items}
    </table>`);


function pregunta7() {
    let core = 0
    for (let i = 0; i < p7respuestas.length; i++) {
        let dato = procesarTexto($("#resultado_" + i).html().replaceAll('<sup>', '').replaceAll('</sup>', ''))
        let correcto = procesarTexto(p7respuestas[i])
        // console.log(dato)
        // console.log(correcto)
        if (dato == correcto) {
            core++;
            $("#resultado_" + i).parent().parent().addClass('bien');
        } else {
            $("#resultado_" + i).parent().parent().addClass('mal');
        }
    }
    let total = (core / p7respuestas.length) * 1;
    $("#pre7a").val(parseFloat(total).toFixed(2));
}


// var coevaluacion = [
//     ``,
//     ``,
// ]

var itemsReflexiono = [`¿En qué contexto de mi vida cotidiana puedo utilizar las operaciones combinadas de fracciones algebraicas?`]

function total() {
    pregunta2();
    // pregunta7();
    var pre2a = parseFloat(document.getElementById("pre2a").value)
    // var pre7a = parseFloat(document.getElementById("pre7a").value)
    cor = pre2a
    Calculo_nota();
    EndActivity()
}
