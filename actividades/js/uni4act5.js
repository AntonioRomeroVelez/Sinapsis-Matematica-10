var cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

///// NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA
var ayudasActividad = [
    `En la actividad 1. Selecciona V o F.  <br>`,
    `En la actividad 2 y 4. Selecciona para pintar la opción correcta.  <br>`,
    `En la actividad 3. Usa la pizarra para resolver el problema y completa la respuesta correctamente.  <br>`,
    `En la actividad 5. Escribe en los recuadros de texto.  <br>`,
    `En la actividad 6, 7, 8, 9 y 10. Usa la pizarra para resolver el problema y completa la respuesta correctamente.  <br>`,
]
var unidad = '4'
$("#numTema").html('5')
$("#temaActividad").html('Poliedros')
$("#n_pagina").html("156");
$(".numeroTemaColor").addClass(`unidad${unidad}numeroTema`)
$(".temaColor").addClass(`unidad${unidad}tema`)

/// FIN NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA



$(document).ready(function () { })


var p1act = [
    { enunciado: 'El área lateral de un prisma se calcula sumando el área de todas las caras laterales.', correcta: 'V' },
    { enunciado: 'El volumen de un prisma se obtiene multiplicando el área de la base por su altura.', correcta: 'V' },
    { enunciado: 'El área lateral de una pirámide incluye la base y las caras laterales.', correcta: 'F' },
    { enunciado: 'Para calcular el área total de una pirámide, se suman el área de la base y el área lateral.', correcta: 'V' },
    { enunciado: 'El volumen de cualquier pirámide se calcula utilizando la fórmula <span id="formula"></span>.', correcta: 'F' },
    { enunciado: 'La altura de una pirámide es la misma que su apotema.', correcta: 'F' },
    { enunciado: 'El volumen de un prisma rectangular es independiente del área de su base.', correcta: 'F' },
]

let p1respuestas = enunciadoSelectOpcion(p1act, "#p1act", '1', 'vof')
// console.log(p1respuestas)

const formulaElement = document.getElementById('formula');
const formula = "V = A_{B} \\cdot h";
formulaElement.innerHTML = `\\( ${formula} \\)`;


function pregunta1() {
    let core = validarExactas(p1respuestas, '#p1var')
    let total = core * 1;
    $("#pre1a").val(parseFloat(total).toFixed(2));
}



var p2act = [
    {
        enunciado: `<img src="img/i1_p156_act2.png">`,
        respuesta: [
            `<div>V ≈  5400 cm<sup>3</sup> <br> A ≈ 1740 cm<sup>2</sup></div>`,
            `<div>V ≈  5300 cm<sup>3</sup> <br> A ≈ 1735 cm<sup>2</sup></div>`
        ],
    },
    {
        enunciado: `<img src="img/i2_p156_act2.png">`,
        respuesta: [
            `<div>V ≈  120 cm<sup>3</sup> <br> A ≈ 204 cm<sup>2</sup></div>`,
            `<div>V ≈  130 cm<sup>3</sup> <br> A ≈ 274 cm<sup>2</sup></div>`
        ],
    },
    {
        enunciado: `<img src="img/i3_p156_act2.png">`,
        respuesta: [
            `<div>V ≈  216 cm<sup>3</sup> <br> A ≈ 252 cm<sup>2</sup></div>`,
            `<div>V ≈  855 cm<sup>3</sup> <br> A ≈ 621 cm<sup>2</sup></div>`
        ],
    },
    {
        enunciado: `<img src="img/i4_p156_act2.png">`,
        respuesta: [
            `<div>V ≈  900 cm<sup>3</sup> <br> A ≈ 570 cm<sup>2</sup></div>`,
            `<div>V ≈  800 cm<sup>3</sup> <br> A ≈ 750 cm<sup>2</sup></div>`
        ],
    },
    {
        enunciado: `<img src="img/i5_p156_act2.png">`,
        respuesta: [
            `<div>V ≈  2484 cm<sup>3</sup> <br> A ≈ 1224 cm<sup>2</sup></div>`,
            `<div>V ≈  2484 cm<sup>3</sup> <br> A ≈ 1740 cm<sup>2</sup></div>`
        ],
    },
    {
        enunciado: `<img src="img/i6_p156_act2.png">`,
        respuesta: [
            `<div>V ≈  240 cm<sup>3</sup> <br> A ≈ 288 cm<sup>2</sup></div>`,
            `<div>V ≈  300 cm<sup>3</sup> <br> A ≈ 288 cm<sup>2</sup></div>`
        ],
    },

];
literalesRespuestasSeleccionSimple(p2act, "#p2act", 2);

function pregunta2() {
    let core = validarLiteralesRespuestasSeleccionSimple(p2act, 2);
    let total = core * 1;
    $("#pre2a").val(parseFloat(total).toFixed(2));
}



function pregunta3() {
    let core = 0
    let data = reemplazar_punto_por_coma($("#p3var0").val());
    // console.log(data);
    data == '523' ? (core++, $("#p3var0").addClass('bien')) : $("#p3var0").addClass('mal');
    let total = core * 1;
    $("#pre3a").val(parseFloat(total).toFixed(2));
}


var p4opciones = [
    { title: `<div>V ≈  816 cm<sup>3</sup> <br> A ≈ 576,67 cm<sup>2</sup></div>`, resp: '0', },
    { title: `<div>V ≈  681 cm<sup>3</sup> <br> A ≈ 675,72 cm<sup>2</sup></div>`, resp: '1', },
    { title: `<div>V ≈  186 cm<sup>3</sup> <br> A ≈ 756,27 cm<sup>2</sup></div>`, resp: '1', },
    { title: `<div>V ≈  861 cm<sup>3</sup> <br> A ≈ 567,72 cm<sup>2</sup></div>`, resp: '1', },
];

SelSimple(p4opciones, "#p4act", 4)

function pregunta4() {
    let core = validarSelSimple(4)
    let total = core * 1;
    $("#pre4a").val(parseFloat(total).toFixed(2));
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


const reemplazar_punto_por_coma = (texto) => {
    if (texto) {
        // Usamos una expresión regular con el modificador 'g' para reemplazar todos los puntos
        let sin_punto = texto.replace(/\./g, ',');
        return sin_punto;
    } else {
        return texto;
    }
};


var rutinaPensamiento = [
    //// pienso, me interes, investigo
    {
        item: 'Pienso', img: '<img src="img/ico_pienso_cerebro.png">', frase: '¿Qué diferencias existen entre un prisma y una pirámide?', color1: '#00ABCF', color2: '#89CD7C', row: '6'
    },
    {
        item: 'Me interesa', img: '<img src="img/ico_me_interesa_cerebro.png">', frase: '¿Si se modifica las dimensiones de base o altura, qué ocurre con el volumen  de un prisma o pirámide?', color1: '#1B62B7', color2: '#EF6119', row: '4'
    },
    {
        item: 'Investigo', img: '<img src="img/ico_investigo_cerebro.png">', frase: '¿En qué situaciones cotidianas puedo aplicar el cálculo del volumen y el área de estas figuras geométricas?', color1: '#2065B2', color2: '#7FD4E2', row: '4'
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




function pregunta6() {
    let core = 0
    let p6respuestas = ['586', '860']
    for (let i = 0; i < p6respuestas.length; i++) {
        let data = reemplazar_punto_por_coma($("#p6var" + i).val());
        // console.log(data);
        data == p6respuestas[i] ? (core++, $("#p6var" + i).addClass('bien')) : $("#p6var" + i).addClass('mal');
    }
    let total = (core / p6respuestas.length) * 1;
    $("#pre6a").val(parseFloat(total).toFixed(2));
}


function pregunta7() {
    let core = 0
    let p7respuestas = ['752,27']
    for (let i = 0; i < p7respuestas.length; i++) {
        let data = reemplazar_punto_por_coma($("#p7var" + i).val());
        // console.log(data);
        data == p7respuestas[i] ? (core++, $("#p7var" + i).addClass('bien')) : $("#p7var" + i).addClass('mal');
    }
    let total = (core / p7respuestas.length) * 1;
    $("#pre7a").val(parseFloat(total).toFixed(2));
}

function pregunta8() {
    let core = 0
    let p8respuestas = ['15']
    for (let i = 0; i < p8respuestas.length; i++) {
        let data = reemplazar_punto_por_coma($("#p8var" + i).val());
        // console.log(data);
        data == p8respuestas[i] ? (core++, $("#p8var" + i).addClass('bien')) : $("#p8var" + i).addClass('mal');
    }
    let total = (core / p8respuestas.length) * 1;
    $("#pre8a").val(parseFloat(total).toFixed(2));
}

function pregunta9() {
    let core = 0
    let p9respuestas = ['5595,2']
    for (let i = 0; i < p9respuestas.length; i++) {
        let data = reemplazar_punto_por_coma($("#p9var" + i).val());
        // console.log(data);
        data == p9respuestas[i] ? (core++, $("#p9var" + i).addClass('bien')) : $("#p9var" + i).addClass('mal');
    }
    let total = (core / p9respuestas.length) * 1;
    $("#pre9a").val(parseFloat(total).toFixed(2));
}

function pregunta10() {
    let core = 0
    let p10respuestas = ['13,73']
    for (let i = 0; i < p10respuestas.length; i++) {
        let data = reemplazar_punto_por_coma($("#p10var" + i).val());
        // console.log(data);
        data == p10respuestas[i] ? (core++, $("#p10var" + i).addClass('bien')) : $("#p10var" + i).addClass('mal');
    }
    let total = (core / p10respuestas.length) * 1;
    $("#pre10a").val(parseFloat(total).toFixed(2));
}










// var coevaluacion = [
//     `¿Sé respetar las opiniones dadas por mi compañero?`,
//     `¿Puedo resolver sistemas de ecuaciones por diferentes métodos?`,
// ]

var itemsReflexiono = [`¿Entiendo cuándo debo aplicar el método de reducción o el de determinantes? ¿Qué criterios utilizo para escoger uno sobre el otro?`]

function total() {
    pregunta1();
    pregunta2();
    pregunta3();
    pregunta4();
    pregunta6();
    pregunta7();
    pregunta8();
    pregunta9();
    pregunta10();
    var pre1a = parseFloat(document.getElementById("pre1a").value)
    var pre2a = parseFloat(document.getElementById("pre2a").value)
    var pre3a = parseFloat(document.getElementById("pre3a").value)
    var pre4a = parseFloat(document.getElementById("pre4a").value)
    var pre6a = parseFloat(document.getElementById("pre6a").value)
    var pre7a = parseFloat(document.getElementById("pre7a").value)
    var pre8a = parseFloat(document.getElementById("pre8a").value)
    var pre9a = parseFloat(document.getElementById("pre9a").value)
    var pre10a = parseFloat(document.getElementById("pre10a").value)
    cor = pre1a + pre2a + pre3a + pre4a + pre6a + pre7a + pre8a + pre9a + pre10a
    Calculo_nota();
    EndActivity()
}
