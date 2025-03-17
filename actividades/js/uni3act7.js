var cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

///// NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA
var ayudasActividad = [
    `En la actividad 1 y 3. Usa la pizarra para realizar el ejercicio, escribe la respuesta en el formato indicado y selecciona "Agregar respuesta".  <br>`,
    `En la actividad 2. Escribe la respuestas y selecciona "Agregar expresión" o selecciona "NO es factorizable".   <br>`,
    `En la actividad 4 y 5. Selecciona la opción luego selecciona el lugar para pegarla.  <br>`,
    `En la actividad 6 y 7. Usa la pizarra para realizar cada ejercicio.  <br>`,
]

$("#temaActividad").html('Evaluación sumativa')
$("#n_pagina").html("128");
/// FIN NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA


$(document).ready(function () {
    agregarEcuacion_campo(p1ecuaciones, "p1ecuacion")
    agregarEcuacion_campo(p2ecuaciones, "p2ecuacion")
    agregarEcuacion_campo(p3ecuaciones, "p3ecuacion")
    agregarEcuacion_campo(p4ecuaciones, "p4ecuacion")
    agregarEcuacion_campo(p5ecuaciones, "p5ecuacion")
    agregarEcuacion_campo(p6ecuaciones, "p6ecuacion")
})


// // USO DE LA FUNCION formatoFraccion
// formatoFraccion("%x - 27/%(x + 3)(x - 3)", "p3var0", 'p3var', '120');
// formatoFraccion("%x - 3/%x - 2", "p3var1", 'p3var', '80');



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

function no_factorizable(id, actividad) {
    let expresion = "No es factorizable";
    // console.log(expresion)
    $(`#resultado_${id}${actividad}`).html(expresion);
    $(`#expresion_${id}${actividad}`).val('')
}


let p1ecuaciones = [
    `\\[ 15x^2 y^2 + 30x^4 y^2 + 45x^3 y^3 ; 20x^3 y^2 + 10x^2 y^3 \\]`,
    `\\[ 12x^2 + 16x ; 18x + 24x^2 \\]`,
    `\\[ 12x^2 y^3  + 24x^3 y^2  + 36x^4 y; 18x^2 y^2  + 30x^3 y \\]`,
]

let p1actividad = [
    { item: `<div id="p1ecuacion0"></div>`, actividad: '1', resp: `30x 2 y 2 (1 + 2x 2 + 3xy) (2x + y)` },
    { item: `<div id="p1ecuacion1"></div>`, actividad: '1', resp: `12x (3x + 4)(3 + 4x)` },
    { item: `<div id="p1ecuacion2"></div>`, actividad: '1', resp: `12x 2 y(y 2 + 2xy + 3x 2 )(3y + 5x)` },
]
mezclar(p1actividad)

let p1respuestas = []
let p1items = p1actividad.map((e, i) => {
    p1respuestas.push(e.resp)
    let div = `<div class="p1_container">
        <div style="display:flex;gap:5px;align-items:start;justify-content:start"><b class="txt-azul">${letrasLista[i]}</b> ${e.item}</div>
        <div id="pizarra1${i}" class="pizarra-matematica"></div>
        <div style="padding:5px"><i class="txt-morado">m.c.m. = </i> <span id="resultado_${i}${e.actividad}"></span></div>
        <div class="info">
            <div style="padding:5px"><span id="resultado_${i}${e.actividad}"></span></div>
            <div class=" p2_input_boton" style="margin:0px 5px 5px 5px">
                <input type="text" class="input-p2-expresion" id="expresion_${i}${e.actividad}" placeholder="(x2 + y3 + z) - 5x2"  autocomplete="off" style="width:90%;outline:none;margin:2px"/>
                <center><button onclick="formatearExpresionIngresada('${i}',${e.actividad})" class="btn-success" style="font-size:15px border-radius:5px;border:none;display:block">Agregar expresión</button></center>
            </div>
        </div>
    </div>`
    return div
}).join('')
$("#p1act").html(p1items)
// console.log(p1respuestas);

function pregunta1() {
    let core = 0
    for (let i = 0; i < p1respuestas.length; i++) {
        let dato = procesarTexto($("#resultado_" + i + "1").html().replaceAll('<sup>', '').replaceAll('</sup>', ''))
        let correcto = procesarTexto(p1respuestas[i])
        // console.log(dato)
        // console.log(correcto)
        if (dato == correcto) {
            core++;
            $("#resultado_" + i + "1").parent().addClass('bien');
        } else {
            $("#resultado_" + i + "1").parent().addClass('mal');
        }
    }
    let total = (core / p1respuestas.length) * 1;
    $("#pre1a").val(parseFloat(total).toFixed(2));
}




let p2ecuaciones = [
    `\\[ 49x^2 - 70xy + 25y^2  =  \\]`,
    `\\[ 3x + 3z^2 - 7ax + 7az^2  = \\]`,
    `\\[ 16x^2 + 25y^2 = \\]`,
    `\\[ 42x^2 + 3x - 20 = \\]`,
    `\\[ 1 - 100x^4  = \\]`,
    `\\[ x^2 - 5x + 25 = \\]`,
]



let p2actividad = [
    { item: `<div id="p2ecuacion0"></div>`, actividad: '2', resp: `(7x - 5y)2` },
    { item: `<div id="p2ecuacion1"></div>`, actividad: '2', resp: `(3 - 7a)(z  + x)` },
    { item: `<div id="p2ecuacion2"></div>`, actividad: '2', resp: `No es factorizable` },
    { item: `<div id="p2ecuacion3"></div>`, actividad: '2', resp: `(2x - 5)(x + 4)` },
    { item: `<div id="p2ecuacion4"></div>`, actividad: '2', resp: `(1 + 10x2 )(1 - 10x 2)` },
    { item: `<div id="p2ecuacion5"></div>`, actividad: '2', resp: `No es factorizable` },
]
mezclar(p2actividad)

let p2respuestas = []
let p2items = p2actividad.map((e, i) => {
    p2respuestas.push(e.resp)
    let div = `<div class="p1_container" style="width:250px">
        <div style="display:flex;gap:5px;align-items:start;justify-content:start">
            <b class="txt-azul">${letrasLista[i]}</b>
            ${e.item}
        </div>
        <div style="padding:5px"><div id="resultado_${i}${e.actividad}" class="p2respuesta"><i class="txt-morado">Respuesta:</i></div></div>
        <div class="info">
            <div><span id="resultado_${i}${e.actividad}"></span></div>
            <div class="p2_input_boton" style="margin:0px 5px 5px 5px">
                <input type="text" class="input-p2-expresion" id="expresion_${i}${e.actividad}" placeholder="(x2 + y3 + z) - 5x2"  autocomplete="off" style="width:90%;outline:none;margin:2px"/>
                <center>
                    <button onclick="formatearExpresionIngresada('${i}',${e.actividad})" class="btn-success" style="font-size:15px border-radius:5px;border:none;margin:2px;border-radius:5px;display:block">Agregar expresión</button>
                    <button onclick="no_factorizable('${i}',${e.actividad})" class="btn-warning" style="font-size:15px border-radius:5px;border:none;margin:2px;border-radius:5px;display:block">No es factorizable</button>
                </center>
            </div>
        </div>
    </div>`
    return div
}).join('')
$("#p2act").html(p2items)



function pregunta2() {
    let core = 0
    for (let i = 0; i < p2respuestas.length; i++) {
        let dato = procesarTexto($("#resultado_" + i + "2").html().replaceAll('<sup>', '').replaceAll('</sup>', ''))
        let correcto = procesarTexto(p2respuestas[i])
        // console.log(dato)
        // console.log(correcto)
        if (dato == correcto) {
            core++;
            $("#resultado_" + i + "2").parent().addClass('bien');
        } else {
            $("#resultado_" + i + "2").parent().addClass('mal');
        }
    }
    let total = (core / p2respuestas.length) * 1;
    $("#pre2a").val(parseFloat(total).toFixed(2));
}


let p3ecuaciones = [
    `\\[ 106x^2 y^4 z^8  [años]  \\]`,
    `\\[ 64xy^6z^7  [años] \\]`,
]


let p3actividad = [
    { actividad: '3', resp: `2xy4z7` },
]
mezclar(p3actividad)

let p3respuestas = []
let p3items = p3actividad.map((e, i) => {
    p3respuestas.push(e.resp)
    let div = `<div>
        <div style="display:flex;width:400px">
            <b class="txt-naranja">R.</b>&emsp;<i class="txt-morado" style="width:100px">m.c.m. = </i>
            <span class="p2respuesta" id="resultado_${i}${e.actividad}"></span>
        </div>
        <div class="info">
            <div style="padding:5px">
                <span id="resultado_${i}${e.actividad}"></span>
            </div>
            <div class="p2_input_boton" style="margin:0px 5px 5px 5px">
                <input type="text" class="input-p2-expresion" id="expresion_${i}${e.actividad}" placeholder="(x2 + y3 + z) - 5x2"  autocomplete="off" style="width:90%;outline:none;margin:2px"/>
                <center><button onclick="formatearExpresionIngresada('${i}',${e.actividad})" class="btn-success" style="font-size:15px border-radius:5px;border:none;display:block">Agregar expresión</button></center>
            </div>
        </div>
    </div>`
    return div
}).join('')
$("#p3act").html(p3items)
// console.log(p1respuestas);

function pregunta3() {
    let core = 0
    for (let i = 0; i < p3respuestas.length; i++) {
        let dato = procesarTexto($("#resultado_" + i + "3").html().replaceAll('<sup>', '').replaceAll('</sup>', ''))
        let correcto = procesarTexto(p3respuestas[i])
        // console.log(dato)
        // console.log(correcto)
        if (dato == correcto) {
            core++;
            $("#resultado_" + i + "3").parent().addClass('bien');
        } else {
            $("#resultado_" + i + "3").parent().addClass('mal');
        }
    }
    let total = (core / p3respuestas.length) * 1;
    $("#pre3a").val(parseFloat(total).toFixed(2));
}


let p4opciones = [
    `<img src="img/i1_p128_act4.png" alt="" class="cloneImg">`,
    `<img src="img/i2_p128_act4.png" alt="" class="cloneImg">`,
    `<img src="img/i3_p128_act4.png" alt="" class="cloneImg">`,
    `<img src="img/i4_p128_act4.png" alt="" class="cloneImg">`,
    `<img src="img/i5_p128_act4.png" alt="" class="cloneImg">`,
    `<img src="img/i6_p128_act4.png" alt="" class="cloneImg">`,
]
mezclar(p4opciones)
$("#p4opciones").html(p4opciones)


let p4ecuaciones = [
    `\\[ \\frac{2x}{x^2 + 1} \\ + \\frac{3}{x + 1} \\  = \\]`,
    `\\[ \\frac{a + 1}{a^2 - 1} \\ + \\frac{2}{a - 1} \\ - \\frac{3}{a + 1} \\  = \\]`,
    `\\[ \\frac{2x + 3}{x^2 - 9} \\ + \\frac{1}{x - 3} \\ - \\frac{4}{x + 3} \\  = \\]`,
    `\\[ \\frac{4}{x^2 - 5x + 6} \\ - \\frac{1}{x - 2} \\ + \\frac{3}{x - 3} \\  = \\]`,
    `\\[ \\frac{x + 2}{x - 1} \\ + \\frac{3x}{x + 2} \\ - \\frac{5}{x - 3} \\  = \\]`,
    `\\[ \\frac{a + 3b}{3ab} \\ + \\frac{a^2 b - 4ab^2}{5a^2 b^2} \\  = \\]`,
]

let p4actividad = [
    { item: `<span id="p4ecuacion0"></span>`, id: '0' },
    { item: `<span id="p4ecuacion1"></span>`, id: '1' },
    { item: `<span id="p4ecuacion2"></span>`, id: '2' },
    { item: `<span id="p4ecuacion3"></span>`, id: '3' },
    { item: `<span id="p4ecuacion4"></span>`, id: '4' },
    { item: `<span id="p4ecuacion5"></span>`, id: '5' },
]
mezclar(p4actividad)

let p4items = p4actividad.map((el, index) => {
    let p4item = `<div class="p4_container">
        <div><b class="txt-azul">${letrasLista[index]}</b> ${el.item}</div>
        <div class="boxPegarImg" id="p4var${el.id}"></div>
    </div>`
    return p4item
}).join('')
$("#p4act").html(p4items)

let p4respuestas = [
    `img/i1_p128_act4.png`,
    `img/i2_p128_act4.png`,
    `img/i3_p128_act4.png`,
    `img/i4_p128_act4.png`,
    `img/i5_p128_act4.png`,
    `img/i6_p128_act4.png`,
]


function pregunta4() {
    let core = 0
    for (let i = 0; i < p4respuestas.length; i++) {
        let img_src = $("#p4var" + i + ' img').attr('src')
        // console.log(img_src);
        if (img_src == p4respuestas[i]) {
            core++;
            $("#p4var" + i).addClass('bien')
        } else {
            $("#p4var" + i).addClass('mal')
        }
    }

    let total = Math.max((core / p4respuestas.length) * 2, 0);
    $("#pre4a").val(parseFloat(total).toFixed(2));
}


// pregunta 5


let p5ecuaciones = [
    `\\[ \\frac{3x^2 + 6x^2 - 9x}{6x^2 + 12x} \\  = \\]`,
    `\\[ \\frac{x^4 - 16}{x^2 - 4} \\ = \\]`,
    `\\[ \\frac{(x + 3)^2 - (x + 3) - 12}{(x + 3)^2 - 16} \\ = \\]`,
    `\\[ \\frac{(m^2 + 3m - 4)}{(m^2 - m - 6)} \\ = \\]`,
    `\\[ \\frac{4a^2 + 8a + 4}{2a + 6} \\ = \\]`,
    `\\[ \\frac{y^2 - 4}{2y^2 + 3y - 5} \\ = \\]`,
]

let p5actividad = [
    { item: `<span id="p5ecuacion0"></span>`, opcion: `<img src="img/i1_p128_act5.png" alt="" class="cloneImg">`, resp: `img/i1_p128_act5.png` },
    { item: `<span id="p5ecuacion1"></span>`, opcion: `<img src="img/i2_p128_act5.png" alt="" class="cloneImg">`, resp: `img/i2_p128_act5.png` },
    { item: `<span id="p5ecuacion2"></span>`, opcion: `<img src="img/i3_p128_act5.png" alt="" class="cloneImg">`, resp: `img/i3_p128_act5.png` },
    { item: `<span id="p5ecuacion3"></span>`, opcion: `<img src="img/i4_p128_act5.png" alt="" class="cloneImg">`, resp: `img/i4_p128_act5.png` },
    { item: `<span id="p5ecuacion4"></span>`, opcion: `<img src="img/i5_p128_act5.png" alt="" class="cloneImg">`, resp: `img/i5_p128_act5.png` },
    { item: `<span id="p5ecuacion5"></span>`, opcion: `<img src="img/i6_p128_act5.png" alt="" class="cloneImg">`, resp: `img/i6_p128_act5.png` },
]
mezclar(p5actividad)
let p5opciones = []
let p5respuestas = []

let p5items = p5actividad.map((el, index) => {
    p5opciones.push(el.opcion)
    p5respuestas.push(el.resp)
    let p5item = `<div class="p4_container">
        <div><b class="txt-azul">${letrasLista[index]}</b> ${el.item}</div>
        <div class="boxPegarImg" id="p5var${index}"></div>
    </div>`
    return p5item
}).join('')
$("#p5act").html(p5items)
mezclar(p5opciones)
$("#p5opciones").html(p5opciones)



function pregunta5() {
    let core = 0
    for (let i = 0; i < p5respuestas.length; i++) {
        let img_src = $("#p5var" + i + ' img').attr('src')
        // console.log(img_src);
        if (img_src == p5respuestas[i]) {
            core++;
            $("#p5var" + i).addClass('bien')
        } else {
            $("#p5var" + i).addClass('mal')
        }
    }
    let total = Math.max((core / p5respuestas.length) * 1, 0);
    $("#pre5a").val(parseFloat(total).toFixed(2));
}


//pregunta 6

let p6ecuaciones = [
    `\\[ \\frac{1}{12x^2 + 48} [quintales]\\]`,
    `\\[ \\frac{2x + 1}{(12x^2 + 48)(x - 1)} [quintales]\\]`,
    `\\[ \\frac{1}{7p + 14n} \\]`,
    `\\[ \\frac{6b + 4}{(7p + 14n)(p + 3)} \\]`,

    `\\[ \\frac{-b}{5b + 1} [m^2] \\]`,
    `\\[  (-10b^2 + 68b + 14) [m^2] \\]`,
]


let p6actividad = [
    `Un ingeniero civil está construyendo una casa. Tiene cemento de dos proveedores diferentes, del primero tienen <i id="p6ecuacion0"></i> y del segundo <i id="p6ecuacion1"></i>. Decide mezclarlos. <br><b>Halla</b> la fracción que representa la mezcla.`,
    `Se mezcla dos ingredientes con concentraciones diferentes de proteínas. El primer ingrediente tiene <i id="p6ecuacion2"></i> gramos de proteína por porción, mientras que el segundo tiene <i id="p6ecuacion3"></i> gramos por porción.<br> ¿Cuántos gramos de proteína hay en total al combinar ambas porciones?`,
    `Un arquitecto debe calcular el área de un terreno de forma triangular cuya base mide <i id="p6ecuacion4"></i> y cuya altura es <i id="p6ecuacion5"></i>.<br> ¿Cuál es el área del terreno?`,
]
mezclar(p6actividad)

let p6items = p6actividad.map((el, index) => {
    let p6item = `<div class="p6_container" style="width:470px">
        <div style="text-align:left"><b class="txt-azul">${letrasLista[index]}</b> ${el}</div>
        <div id="pizarra6${index}" class="pizarra-matematica" style="width:100% !important"></div>
    </div>`
    return p6item
}).join('')

$("#p6act").html(p6items)


///pregunta 7
let p7actividad = [
    `<img src="img/i1_p129_act7.jpg" alt="">`,
    `<img src="img/i2_p129_act7.jpg" alt="">`,
]
mezclar(p7actividad)

let p7items = p7actividad.map((el, index) => {
    let p7item = `<div class="p6_container" style="width:470px">
        <div style="text-align:left"><b class="txt-azul">${letrasLista[index]}</b> ${el}</div>
        <div id="pizarra7${index}" class="pizarra-matematica" style="width:100% !important"></div>
    </div>`
    return p7item
}).join('')

$("#p7act").html(p7items)



var autoregulacion = [
    `Identifico el máximo común divisor y mínimo común múltiplo de expresiones algebraicas.`,
    `Simplifico fracciones algebraicas utilizando casos de factorización.`,
    `Calculo aplicando sumas, restas, multiplicaciones y divisiones con fracciones algebraicas en problemas.`,
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
    pregunta3();
    pregunta4();
    pregunta5();
    validarAutoregulacion()
    var pre1a = parseFloat(document.getElementById("pre1a").value)
    var pre2a = parseFloat(document.getElementById("pre2a").value)
    var pre3a = parseFloat(document.getElementById("pre3a").value)
    var pre4a = parseFloat(document.getElementById("pre4a").value)
    var pre5a = parseFloat(document.getElementById("pre5a").value)
    var inputAutoregulacion = parseFloat(document.getElementById("inputAutoregulacion").value)

    cor = pre1a + pre2a + pre3a + pre4a + pre5a + inputAutoregulacion
    Calculo_nota();
    EndActivity()
}
