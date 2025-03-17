var cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

///// NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA
var ayudasActividad = [
    `En la actividad 1. Usa la pizarra para realizar cada ejercicio.  <br>`,
    `En la actividad 2 y 3. Usa la pizarra para realizar cada ejercicio y completa la respuesta.  <br>`,
    `En la actividad 2, 3, 5 y 6. Usa la pizarra para resolver cada ejercicio.  <br>`,
    `En la actividad 4. Completa cada respuesta correctamente.  <br>`,
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
    agregarEcuacion_campo(p3ecuaciones, "p3ecuacion")
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
// console.log(p2respuestas);

function pregunta2() {
    let core = validarCajas('p2var')
    let total = core * 2.5;
    $("#pre2a").val(parseFloat(total).toFixed(2));
}



let p3ecuaciones = [
    `\\[ \\frac{3}{x + 3} \\ [m^2] \\]`,
    `\\[ \\frac{4}{x - 3} \\ [m^2] \\]`,
    `\\[ \\frac{24x-50}{x-5} \\]`,
    `\\[ 8x + 30  [m] \\]`,
    `\\[ (x - 5)^{-1}  [m] \\]`,
    `\\[ \\frac{67}{25} m^2 \\]`,
    `\\[ \\frac{6x + 10}{x -2} m^2 \\]`,
    `\\[ \\frac{5x + 4}{x -2} m^2 \\]`,
]

// USO DE LA FUNCION formatoFraccion
formatoFraccion("%x - 27/%(x + 3)(x - 3)", "p3var0", 'p3var', '120');
formatoFraccion("%x - 3/%x - 2", "p3var1", 'p3var', '80');


function pregunta3() {
    let core = validarCajas('p3var')
    let total = core * 2.5;
    $("#pre3a").val(parseFloat(total).toFixed(2));
}





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


let p4actividad = [
    `La edad actual de Marcelo es el doble que la de su hermana Romina, pero hace 10 años la edad de Marcelo era el triple que la de Romina. ¿Cuántos años tienen actualmente cada uno? <p></p>
    <i class="txt-naranja">R.</i> Marcelo tiene <input class="caracter3 p4var" data-info="40"> años y Romina tiene <input class="caracter3 p4var" data-info="20"> años.`,
    `Una madre tiene 25 años más que su hija y dentro de 5 años tendrá el doble. ¿Qué edad tiene cada uno? <p></p>
    <i class="txt-naranja">R.</i> La hija tiene <input class="caracter3 p4var" data-info="20"> años y la madre tiene <input class="caracter3 p4var" data-info="45"> años.`,

    `Tres personas tienen una edad combinada de 91 años. La persona de mayor edad supera en 20 años a la más joven, mientras que la persona de edad intermedia tiene 18 años menos que la mayor. ¿Cuáles  son sus edades? <p></p>
    <i class="txt-naranja">R.</i> Las edades son del mayor: <input class="caracter3 p4var" data-info="43"> , del intermiedio: <input class="caracter3 p4var" data-info="25"> y del menor: <input class="caracter3 p4var" data-info="23"> años.`,

    `Actualmente la edad de Jorge es la quinta parte de la edad que tendrá dentro de 64 años. ¿Qué edad tiene actualmente? <p></p>
    <i class="txt-naranja">R.</i> Jorge actualmente tiene <input class="caracter3 p4var" data-info="16"> años.`,
]
mezclar(p4actividad)

let p4items = p4actividad.map((p, i) => {
    return `<div style="border:solid 1px silver;padding:5px;border-radius:5px;margin:5px"><b class="txt-azul">${letrasLista[i]}</b> ${p}</div>`; // Transformar cada elemento en un div
}).join(""); // Unir todos los elementos en una sola cadena

$("#p4act").html(p4items); // Insertar la cadena HTML en el elemento con ID "p4act"



function pregunta4() {
    let core = validarCajas('p4var')
    let total = core * 2.5;
    $("#pre4a").val(parseFloat(total).toFixed(2));
}


// var coevaluacion = [
//     ``,
//     ``,
// ]

var itemsReflexiono = [`¿En qué contexto de mi vida cotidiana puedo utilizar las operaciones combinadas de fracciones algebraicas?`]

function total() {
    pregunta2();
    pregunta3();
    pregunta4();
    var pre2a = parseFloat(document.getElementById("pre2a").value)
    var pre3a = parseFloat(document.getElementById("pre3a").value)
    var pre4a = parseFloat(document.getElementById("pre4a").value)
    cor = pre2a + pre3a + pre4a
    Calculo_nota();
    EndActivity()
}
