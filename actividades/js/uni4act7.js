var cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

///// NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA
var ayudasActividad = [
    `En la actividad 1. Selecciona V o F.   <br>`,
    `En la actividad 2, 3, 4, 5, 6 y 7. Usa la pizarra para realizar el ejercicio, escribe la respuesta correctamente.  <br>`,
]

$("#temaActividad").html('Evaluación sumativa')
$("#n_pagina").html("168");
/// FIN NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA


$(document).ready(function () {

})



// Función para formatear la expresión ingresada por el usuario
function formatearExpresionIngresada(id, actividad) {
    let expresion = $(`#expresion_${id}${actividad}`).val().toLowerCase();
    expresion = expresion.replaceAll(/([a-zA-Z])(\d+)/g, (match, p1, p2) => {
        return p1 + `<sup>${p2}</sup>`;  // Convierte 'x2' en 'x<sup>2</sup>'
    });
    // console.log(expresion)
    $(`#resultado_${id}${actividad}`).html(expresion);
    $(`#expresion_${id}${actividad}`).val('')
}


let p1ecuacion1 = `\\[
    \\begin{cases}
    2x + 7y = -1 \\\\
    4x + 14y = -1
    \\end{cases}
    \\]`

let p1ecuacion2 = `\\[
    \\begin{cases}
    \\frac{1}{2}x + \\frac{3}{4}y = 1 \\\\
    2x + 3y = 1
    \\end{cases}
    \\]`

var p1act = [
    { enunciado: `Resolver un sistema de ecuaciones lineales permite resolver situaciones de la vida real donde se involucran varias incógnitas.`, correcta: 'V' },
    { enunciado: `Un sistema de ecuaciones lineales 2x2 siempre tienen una única solución.`, correcta: 'F' },
    { enunciado: `El siguiente sistema de ecuaciones tiene infinitas soluciones: ${p1ecuacion1}`, correcta: 'F' },
    { enunciado: `El siguiente sistema de ecuaciones no tiene solución: ${p1ecuacion2}`, correcta: 'F' },
    { enunciado: `Los métodos de reducción e igualación sirven para resolver sistemas de ecuaciones lineales de orden 2x2.`, correcta: 'V' },
    { enunciado: `En el método por determinante se utiliza los coeficientes de cada incógnita, en lugar de hacer  operaciones algebraicas.`, correcta: 'V' },
]

let p1respuestas = enunciadoSelectOpcion(p1act, "#p1act", '1', 'vof')
// console.log(p1respuestas)


function pregunta1() {
    let core = validarExactas(p1respuestas, '#p1var')
    let total = core * 1;
    $("#pre1a").val(parseFloat(total).toFixed(2));
}




let p2ecuaciones = [
    `\\[
        h + \\frac{37}{4} = \\
        \\frac{15}{7} t
        \\]`,
    `\\[ 12h = 20t - 80 \\]`
]



let p2actividad = [
    {
        item: `La ecuación de descarga de un tanque de agua es ${p2ecuaciones[0]}. Y para otro tanque su ecuación es ${p2ecuaciones[1]}. Donde h es la altura del tanque en metros y t el tiempo en segundos. ¿En qué tiempo los dos tanques alcanzan el mismo nivel?`, img: `<img src="img/i1_p168_act2.jpg" style="float:right">`, resp: `Los dos tanque alcanzan una altura de <input class="p2input" id="p2var0" placeholder="12,3" maxlength="5"> metros en un tiempo de <input class="p2input" id="p2var1" placeholder="12,3" maxlength="5"> segundos.`,
    },
    {
        item: `Andrés y Pablo pagaron $ 22,5 por 3 camisas playeras y 2 pantalonetas. Si el mes pasado compraron 5 camisas playeras y 4 pantalonetas y pagaron $ 39,5. ¿Cuánto cuesta cada camisa playera y pantaloneta?`, img: `<img src="img/i2_p168_act2.jpg" style="float:right">`, resp: `Cada camisa playera cuesta $ <input class="p2input" id="p2var2" placeholder="12,3" maxlength="3"> y cada pantaloneta vale $ <input class="p2input" id="p2var3" placeholder="12,3" maxlength="1">.`,
    },
]
mezclar(p2actividad)

let p2respuestas = ['2,375', '5,425', '5,5', '3']


let p2items = p2actividad.map((e, i) => {
    let divClass = ''
    if (i == 1) {
        divClass = `<div class="contenedor_dos_columnas_pregunta contenedor_dos_columnas_pregunta_silver_izq">`
    } else {
        divClass = `<div class="contenedor_dos_columnas_pregunta">`
    }
    let div = `${divClass}
        <div>
            ${e.img}
            <b class="txt-azul">${letrasLista[i]}</b>
            ${e.item}
        </div>
        <div id="pizarra2${i}" style="height:250px"></div>
        <div style="padding:5px"><i class="txt-morado">Respuesta:</i> ${e.resp} </div>
    </div>`
    return div
}).join('')
$("#p2act").html(p2items)



function pregunta2() {
    let core = 0
    for (let i = 0; i < p2respuestas.length; i++) {
        let data = reemplazar_punto_por_coma($("#p2var" + i).val());
        // console.log(data);
        data == p2respuestas[i] ? (core++, $("#p2var" + i).addClass('bien')) : $("#p2var" + i).addClass('mal');
    }
    let total = (core / p2respuestas.length) * 2;
    $("#pre2a").val(parseFloat(total).toFixed(2));
}

let p3actividad = [
    `Método de sustitución  \\[
    \\begin{cases}
        2x - y = 2260 \\\\
        \\;\\, x + y = 3560
    \\end{cases}
    \\]`,

    `Método de igualación  \\[
    \\begin{cases}
        -2m + 3n = 6 \\\\
        \\;\\; 5m - 4n = -1
    \\end{cases}
    \\]`,

    `Método de reducción  \\[
    \\begin{cases}
        2x + 9y = 4 \\\\
        6x + \\;y = 5
    \\end{cases}
    \\]`,

    `Método por determinante  \\[
    \\begin{cases}
        3x + 2y = 4 \\\\
        5x + 7y = 6
    \\end{cases}
    \\]`,
]
mezclar(p3actividad)

let p3items = p3actividad.map((e, i) => {
    let divClass = ''
    if (i == 1 || i == 3 || i == 5) {
        divClass = `<div class="contenedor_dos_columnas_pregunta contenedor_dos_columnas_pregunta_silver_izq">`
    } else {
        divClass = `<div class="contenedor_dos_columnas_pregunta">`
    }
    let div = `${divClass}
        <div>
            <b class="txt-azul">${letrasLista[i]}</b>
            ${e}
        </div>
        <div id="pizarra3${i}" style="height:250px"></div>
    </div>`
    return div
}).join('')
let p3act = document.getElementById('p3act')
p3act.innerHTML = p3items



let p4actividad = [
    { img: '<img src="img/i1_p169_act4.png">', item: 'El radio mide 2,5 m y el alto es de 9 m.', resp: '176,71', medida: 'm', max: '6' },
    { img: '<img src="img/i2_p169_act4.png">', item: 'El radio mide 8 dm y el alto es de 12 dm.', resp: '256', medida: '\\[ \\pi\\] &nbsp;   dm', max: '3' },
]
mezclar(p4actividad)
let p4respuestas = []

let p4items = p4actividad.map((e, i) => {
    p4respuestas.push(e.resp)
    let divClass = ''
    if (i == 1) {
        divClass = `<div class="contenedor_dos_columnas_pregunta contenedor_dos_columnas_pregunta_silver_izq">`
    } else {
        divClass = `<div class="contenedor_dos_columnas_pregunta">`
    }
    let div = `${divClass}
        <div>
            <b class="txt-azul">${letrasLista[i]}</b>
            ${e.item}
        </div>
        <div style="display:flex;justify-content:center;align-items:center;flex-wrap:wrap">
            ${e.img}
            <div id="pizarra4${i}" style="height:250px;width:100%"></div>
        </div>
        <div>
            <i class="txt-morado">Respuesta.</i>&emsp; V = <input class="p2input" id="p4var${i}" placeholder="12,3" maxlength="${e.max}"> ${e.medida}<sup>3</sup>
        </div>
    </div>`
    return div
}).join('')
let p4act = document.getElementById('p4act')
p4act.innerHTML = p4items






function pregunta4() {
    let core = 0
    for (let i = 0; i < p4respuestas.length; i++) {
        let data = reemplazar_punto_por_coma($("#p4var" + i).val());
        // console.log(data);
        data == p4respuestas[i] ? (core++, $("#p4var" + i).addClass('bien')) : $("#p4var" + i).addClass('mal');
    }
    let total = (core / p4respuestas.length) * 2;
    $("#pre4a").val(parseFloat(total).toFixed(2));
}

let p5respuestas = ['85000']
function pregunta5() {
    let core = 0
    for (let i = 0; i < p5respuestas.length; i++) {
        let data = reemplazar_punto_por_coma($("#p5var" + i).val());
        // console.log(data);
        data == p5respuestas[i] ? (core++, $("#p5var" + i).addClass('bien')) : $("#p5var" + i).addClass('mal');
    }
    let total = (core / p5respuestas.length) * 1;
    $("#pre5a").val(parseFloat(total).toFixed(2));
}





const reemplazar_punto_por_coma = (texto) => {
    if (texto) {
        // Usamos una expresión regular con el modificador 'g' para reemplazar todos los puntos
        let sin_punto = texto.replace(/\./g, ',');
        return sin_punto;
    } else {
        return texto;
    }
};






var autoregulacion = [
    `Planteo un sistema de ecuaciones lineales a partir de un problema real.`,
    `Resuelvo sistemas de ecuaciones lineales con cualquier método.`,
    `Entiendo las fórmulas para determinar el área y volumen de cuerpos geométricos.`,
]

function validarAutoregulacion() {
    let score = 0;
    for (let i = 0; i < autoregulacion.length; i++) {
        if ($(".AutoReg" + i + "0").text().includes('X')) {
            score += 3;
        } else if ($(".AutoReg" + i + "1").text().includes('X')) {
            score += 2;
        } else if ($(".AutoReg" + i + "2").text().includes('X')) {
            score += 1;
        }
    }
    let subtotal = score / (autoregulacion.length * 3)
    $("#inputAutoregulacion").val(parseFloat(subtotal).toFixed(2));
}



function total() {
    pregunta1();
    pregunta2();
    pregunta4();
    pregunta5();
    validarAutoregulacion()
    var pre1a = parseFloat(document.getElementById("pre1a").value)
    var pre2a = parseFloat(document.getElementById("pre2a").value)
    var pre4a = parseFloat(document.getElementById("pre4a").value)
    var pre5a = parseFloat(document.getElementById("pre5a").value)
    var inputAutoregulacion = parseFloat(document.getElementById("inputAutoregulacion").value)

    cor = pre1a + pre2a + pre4a + pre5a + inputAutoregulacion
    Calculo_nota();
    EndActivity()
}
