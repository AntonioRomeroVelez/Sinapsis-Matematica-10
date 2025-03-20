var cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

///// NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA
var ayudasActividad = [
    `En la actividad 1 y 3. Usa la pizarra para resolver cada ejercicio.  <br>`,
    `En la actividad 2. Selecciona V o F para marcar.  <br>`,
    `En la actividad 4. Selecciona para pintar la opción correcta.  <br>`,
    `En la actividad 5. Escribe en los recuadros de texto.  <br>`,
    `En la actividad 6 y 7. Usa la pizarra para resolver el problema y completa la respuesta correctamente.  <br>`,
]
var unidad = '4'
$("#numTema").html('3')
$("#temaActividad").html('Resolución de sistemas de ecuaciones por método de reducción y determinantes')
$("#n_pagina").html("146");
$(".numeroTemaColor").addClass(`unidad${unidad}numeroTema`)
$(".temaColor").addClass(`unidad${unidad}tema`)

/// FIN NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA



$(document).ready(function () {
    agregarEcuacion_campo(p1ecuaciones, "p1ecuacion")
    agregarEcuacion_campo(p3ecuaciones, "p3ecuacion")
    agregarEcuacion_campo(p4ecuaciones, "p4ecuacion")
})

let p1ecuaciones = [
    `\\[
        \\left\\{
            \\begin{aligned}
                6x - 4y = 0 \\\\
                3x + 5y - 1 = 0
            \\end{aligned}
        \\right.
    \\]`,

    `\\[
        \\left\\{
            \\begin{aligned}
                2x - 3y = 2 \\\\
                x + 2y = 1
            \\end{aligned}
        \\right.
    \\]`,

    `\\[
        \\left\\{
            \\begin{aligned}
                2x + 3y = 7 \\\\
                3x - 2y = 4
            \\end{aligned}
        \\right.
    \\]`,
    `\\[
        \\left\\{
            \\begin{aligned}
                20x + 9y = 33 \\\\
                15x + 8y = 21
            \\end{aligned}
        \\right.
    \\]`,

    `\\[
        \\left\\{
            \\begin{aligned}
               x + 3y = 75 \\\\
                3x - y = 25
            \\end{aligned}
        \\right.
    \\]`,
]

let p1actividad = [
    `<span id="p1ecuacion0"></span>`,
    `<span id="p1ecuacion1"></span>`,
    `<span id="p1ecuacion2"></span>`,
    `<span id="p1ecuacion3"></span>`,
    `<span id="p1ecuacion4"></span>`,
]
// mezclar(p1actividad)
let p1items = p1actividad.map((e, i) => {
    let resultado = `<div class="p1_container">
                            <div style="display:inline-flex;align-items:center;justify-content:center"><b class="txt-azul">${letrasLista[i]}</b> &emsp;${e}</div>
                            <div id="pizarra1${i}" style="width:100%;height:250px"></div>
                        </div>
                </div>`;
    return resultado;
}).join('');
// Inyectamos el HTML generado en el DOM
$("#p1act").html(p1items);






let p2actividad = [
    { item: 'En el método de reducción, se suma o resta una ecuación de otra para eliminar una de las incógnitas, facilitando la resolución del sistema.', div: `<div id="p20act"></div>`, },
    { item: 'El método de determinantes (Regla de Cramer) solo es aplicable si el determinante de la matriz del sistema es cero.', div: `<div id="p21act"></div>`, },
    { item: 'En el método de reducción, si después de la eliminación de una variable ambas ecuaciones resultan ser inconsistentes (por ejemplo, 0 + 0 = 5), esto significa que el sistema no tiene solución.', div: `<div id="p22act"></div>`, },
    { item: 'El método de determinantes es más eficiente para resolver sistemas grandes de ecuaciones que el método de reducción.', div: `<div id="p23act"></div>`, },
    { item: 'El método de determinantes puede ser utilizado para resolver cualquier sistema de ecuaciones lineales, siempre y cuando el determinante de la matriz de coeficientes no sea cero.', div: `<div id="p24act"></div>`, },

]
mezclar(p2actividad)
let p2items = p2actividad.map((e, i) => {
    let resultado = `<div style="margin:5px 0px;width:450px;border:solid 1px silver;background-color:${generarColorSuave()} !important;print-color-adjust: exact;padding:5px;border-radius:5px">
                        <div><b class="txt-azul">${letrasLista[i]}</b> ${e.item}</div>
                        ${e.div}
                </div>`;
    return resultado;
}).join('');
// Inyectamos el HTML generado en el DOM
$("#p2act").html(p2items);


var p2item0 = [
    { item: 'Verdadero', valor: '0' }, // 0 correcta
    { item: 'Falso', valor: '1' }, // 1 incorrecta
]
marcarInputX(p2item0, '20')

var p2item1 = [
    { item: 'Verdadero', valor: '1' }, // 0 correcta
    { item: 'Falso', valor: '0' }, // 1 incorrecta
]
marcarInputX(p2item1, '21')

var p2item2 = [
    { item: 'Verdadero', valor: '0' }, // 0 correcta
    { item: 'Falso', valor: '1' }, // 1 incorrecta
]
marcarInputX(p2item2, '22')

var p2item3 = [
    { item: 'Verdadero', valor: '1' }, // 0 correcta
    { item: 'Falso', valor: '0' }, // 1 incorrecta
]
marcarInputX(p2item3, '23')

var p2item4 = [
    { item: 'Verdadero', valor: '0' }, // 0 correcta
    { item: 'Falso', valor: '1' }, // 1 incorrecta
]
marcarInputX(p2item4, '24')



function pregunta2() {
    let core1 = validarMarcarInputX(p2item0, '20')
    let core2 = validarMarcarInputX(p2item1, '21')
    let core3 = validarMarcarInputX(p2item2, '22')
    let core4 = validarMarcarInputX(p2item3, '23')
    let core5 = validarMarcarInputX(p2item4, '24')
    let total = ((core1 + core2 + core3 + core4 + core5) / 5) * 1.5;
    $("#pre2a").val(parseFloat(total).toFixed(2));
}




let p3ecuaciones = [
    `\\[
        \\left\\{
            \\begin{aligned}
                 0,1x + 0,3y = 0,75\\\\
                0,3x - 0,1y = 0,15
            \\end{aligned}
        \\right.
    \\]`,

    `\\[
        \\left\\{
            \\begin{aligned}
                 7x + y = 19\\\\
                4x - y = 3
            \\end{aligned}
        \\right.
    \\]`,

    `\\[
        \\left\\{
            \\begin{aligned}
                 3x + 8y = 23\\\\
                11x + 6y = -9
            \\end{aligned}
        \\right.
    \\]`,
    `\\[
        \\left\\{
            \\begin{aligned}
                 5x + 6y = 20\\\\
                4x - 3y = -23
            \\end{aligned}
        \\right.
    \\]`,
]


let p3actividad = [
    `<span id="p3ecuacion0"></span>`,
    `<span id="p3ecuacion1"></span>`,
    `<span id="p3ecuacion2"></span>`,
    `<span id="p3ecuacion3"></span>`,
]
mezclar(p3actividad)
let p3items = p3actividad.map((e, i) => {
    let resultado = `<div style="margin:5px 0px">
                        <div>
                            <div style="display:inline-flex;align-items:center;justify-content:center"><b class="txt-azul">${letrasLista[i]}</b> &emsp;${e}</div>
                            <div id="pizarra3${i}" style="width:480px;height:250px"></div>
                        </div>
                </div>`;
    return resultado;
}).join('');
// Inyectamos el HTML generado en el DOM
$("#p3act").html(p3items);


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

// pregunta 4


let p4ecuaciones = [
    `\\[
        \\left\\{
            \\begin{aligned}
                6x + 4y = 10\\\\
                x - y = -2
            \\end{aligned}
        \\right.
    \\]`,
    `\\[
        \\left\\{
            \\begin{aligned}
                -4x + y = 5\\\\
                3x - 2y = 4
            \\end{aligned}
        \\right.
    \\]`,
    `\\[
        \\left\\{
            \\begin{aligned}
                10x - 4y = -3\\\\
                -5x + 8y = 12
            \\end{aligned}
        \\right.
    \\]`,
    `\\[
        \\left\\{
            \\begin{aligned}
                10x + 9y = 8\\\\
                8x - 15y = -1
            \\end{aligned}
        \\right.
    \\]`,
]

var p4act = [
    { enunciado: `<span id="p4ecuacion0"></span>`, respuesta: ['(0,2; 2,2)', '(-2; -2)', '(2; 2)', '(2,2; 0,2)'], },
    { enunciado: `<span id="p4ecuacion1"></span>`, respuesta: ['(-2,8; -6,2)', '(-6,2; -2,8)', '(6; 2)', '(2; 6)'], },
    { enunciado: `<span id="p4ecuacion2"></span>`, respuesta: ['(0,4; 1,75)', '(1,75; 4)', '(1; 4)', '(4; 1)'], },
    { enunciado: `<span id="p4ecuacion3"></span>`, respuesta: ['(0,5; 0,33)', '(0,33; 0,5)', '(5; 3)', '(3; 5)'], },
];
literalesRespuestasSeleccionSimple(p4act, "#p4act", 4);



function pregunta4() {
    let core = validarLiteralesRespuestasSeleccionSimple(p4act, 4);
    let total = core * 1.5;
    $("#pre4a").val(parseFloat(total).toFixed(2));
}




var rutinaPensamiento = [
    //// palabra, idea, frase
    {
        item: '¿Qué cosas no sé', frase: 'sobre la resolución de sistemas de ecuaciones con dos incógnitas?', color1: '#D11F27', color2: '#F9E3DB', row: '4'
    },
    {
        item: '¿En qué tengo dudas', frase: 'acerca de la resolución de sistemas de ecuaciones con dos incógnitas?', color1: '#F47115', color2: '#FEF4E2', row: '4'
    },
    {
        item: '¿Qué sé', frase: 'sobre la resolución de sistemas de ecuaciones con dos incógnitas?', color1: '#47BC4C', color2: '#ECF7E7', row: '4'
    },
]
rutinaPensamiento.forEach(element => {
    $("#rutinaPensamiento").append(`
        <div style="position: relative;border-radius:5px;background-color: ${element.color2} !important;print-color-adjust: exact;width:280px;margin:20px 5px">
            <div style="position: absolute;top:-15px;left:20px;display: flex;align-items: end;justify-content: center;gap:10px;">
                <div style="padding: 1px 15px;border-radius:5px;background-color: ${element.color1} !important;print-color-adjust: exact;color: white !important;print-color-adjust: exact;font-weight:bolder;margin-bottom:7px">
                     ${element.item}
                </div>
            </div>
            <div style="margin-top: 40px;padding: 5px;margin: 5px;margin-top: 35px;background-color: white !important;print-color-adjust: exact;border-radius: 5px;">
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







function pregunta6() {
    let core = validarCajas('p6var')
    let total = core * 1.5;
    $("#pre6a").val(parseFloat(total).toFixed(2));
}

function pregunta7() {
    let core = validarCajas('p7var')
    let total = core * 1.5;
    $("#pre7a").val(parseFloat(total).toFixed(2));
}





// var coevaluacion = [
//     `¿Sé respetar las opiniones dadas por mi compañero?`,
//     `¿Puedo resolver sistemas de ecuaciones por diferentes métodos?`,
// ]

var itemsReflexiono = [`¿Entiendo cuándo debo aplicar el método de reducción o el de determinantes? ¿Qué criterios utilizo para escoger uno sobre el otro?`]

function total() {
    pregunta2();
    pregunta6();
    pregunta7();
    var pre2a = parseFloat(document.getElementById("pre2a").value)
    var pre6a = parseFloat(document.getElementById("pre6a").value)
    var pre7a = parseFloat(document.getElementById("pre7a").value)
    cor = pre2a + pre6a + pre7a
    Calculo_nota();
    EndActivity()
}
