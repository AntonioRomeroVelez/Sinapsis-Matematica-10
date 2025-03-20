var cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

///// NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA
var ayudasActividad = [
    `En la actividad 1. Selecciona el círculo amarillo, luego selecciona el círculo azul para trazar una línea.  <br>`,
    `En la actividad 2. Selecciona para pintar la opción correcta.  <br>`,
    `En la actividad 3. Selecciona para marcar con una X.  <br>`,
    `En la actividad 4. Selecciona la palabra correcta.  <br>`,
    `En la actividad 5, 6, 7, 8, 9, 10, 11 y 12. Usa la pizarra para resolver el problema y completa la respuesta correctamente.  <br>`,
]
var unidad = '4'
$("#numTema").html('4')
$("#temaActividad").html('Cuerpos redondos')
$("#n_pagina").html("152");
$(".numeroTemaColor").addClass(`unidad${unidad}numeroTema`)
$(".temaColor").addClass(`unidad${unidad}tema`)

/// FIN NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA



$(document).ready(function () {
    cajaUnir1_1(280, 500, 'none', 0, 80)


})

var arrayElemInicio = [
    '<div class="divinicio">Es generado por un triángulo rectángulo al girar en torno a uno de sus catetos.</div>',
    '<div class="divinicio">Es generado por una media circunferencia al girarla en torno a un eje diametral.</div>',
    '<div class="divinicio">Es generado por un rectángulo al girar en torno a uno de sus lados.</div>',
]
var arrayElemFin = [
    '<div class="divfin">Cono</div>',
    '<div class="divfin">Esfera</div>',
    '<div class="divfin">Cilindro</div>',
]

function pregunta1() {
    let core = validarUnir1_1();
    let total = core * 0.5;
    $("#pre1a").val(parseFloat(total).toFixed(2));
}



var p2act = [
    {
        enunciado: `El volumen de una esfera de radio 5 cm. <div><img src="img/i1_p152_act2.png"></div>  <div>Opciones:</div>`,
        respuesta: ['V = 523,60cm<sup>3</sup>', 'V = 543,30cm<sup>3</sup>', 'V = 523,30cm<sup>3</sup>', 'V = 543,60cm<sup>3</sup>'],
    },
    {
        enunciado: `El volumen de un cono cuya generatriz mide  13 cm y el radio de la base es de 5 cm. <div><img src="img/i2_p152_act2.png"></div>  <div>Opciones:</div>`,
        respuesta: ['V = 314,16cm<sup>3</sup>', 'V = 324,61cm<sup>3</sup>', 'V = 324,16cm<sup>3</sup>', 'V = 314,61cm<sup>3</sup>'],
    },
    {
        enunciado: `El volumen de un cilindro cuya altura mide 20 cm y el radio de la base es de 5 cm. <div><img src="img/i3_p152_act2.png"></div>  <div>Opciones:</div>`,
        respuesta: ['V = 1 570,80cm<sup>3</sup>', 'V = 1 580,80cm<sup>3</sup>', 'V = 1 570,08cm<sup>3</sup>', 'V = 1 580,08cm<sup>3</sup>'],
    },
];
literalesRespuestasSeleccionSimple(p2act, "#p2act", 2);

function pregunta2() {
    let core = validarLiteralesRespuestasSeleccionSimple(p2act, 2);
    let total = core * 0.5;
    $("#pre2a").val(parseFloat(total).toFixed(2));
}



let p3actividad = [
    { item: `Los cuerpos redondos tienen al menos una superficie curva continua. `, div: `<div id="p30act"></div>`, },
    { item: `Un cono tiene dos bases circulares y una superficie lateral curva.`, div: `<div id="p31act"></div>`, },
    { item: `El volumen de un cilindro se calcula usando lafórmula  V = π r<sup>2</sup> h , donde r es el radio de la base y h es la altura.`, div: `<div id="p32act"></div>`, },
    { item: `La esfera es el único cuerpo redondo que no tiene aristas ni vértices.`, div: `<div id="p33act"></div>`, },
    { item: `La generatriz de un cono es la distancia desde el centro de la base hasta el punto más alto del cono.`, div: `<div id="p34act"></div>`, },
    { item: `El área lateral de un cilindro se calcula usando la fórmula A<sub>l</sub> = 2πrh, donde r es el radio y h es la altura.`, div: `<div id="p35act"></div>`, },
    { item: `El volumen de una esfera se calcula con la fórmula <br> V = 4/3 πr<sup>3</sup>, donde r es el radio de la esfera.`, div: `<div id="p36act"></div>`, },
    { item: `Un cilindro tiene una única base circular. <br><br>`, div: `<div id="p37act"></div>`, },
    { item: `El área total de un cono es la suma del área lateral y el área de su base circular.`, div: `<div id="p38act"></div>`, },

]
mezclar(p3actividad)
let p3items = p3actividad.map((e, i) => {
    let resultado = `<div style="margin:5px 0px;width:450px;border:solid 1px silver;background-color:${generarColorSuave()} !important;print-color-adjust: exact;padding:5px;border-radius:5px">
                        <div><b class="txt-azul">${letrasLista[i]}</b> ${e.item}</div>
                        ${e.div}
                </div>`;
    return resultado;
}).join('');
// Inyectamos el HTML generado en el DOM
$("#p3act").html(p3items);


var p3item0 = [
    { item: 'Verdadero', valor: '0' }, // 0 correcta
    { item: 'Falso', valor: '1' }, // 1 incorrecta
]
marcarInputX(p3item0, '30')

var p3item1 = [
    { item: 'Verdadero', valor: '1' }, // 0 correcta
    { item: 'Falso', valor: '0' }, // 1 incorrecta
]
marcarInputX(p3item1, '31')

var p3item2 = [
    { item: 'Verdadero', valor: '0' }, // 0 correcta
    { item: 'Falso', valor: '1' }, // 1 incorrecta
]
marcarInputX(p3item2, '32')

var p3item3 = [
    { item: 'Verdadero', valor: '0' }, // 0 correcta
    { item: 'Falso', valor: '1' }, // 1 incorrecta
]
marcarInputX(p3item3, '33')

var p3item4 = [
    { item: 'Verdadero', valor: '1' }, // 0 correcta
    { item: 'Falso', valor: '0' }, // 1 incorrecta
]
marcarInputX(p3item4, '34')

var p3item5 = [
    { item: 'Verdadero', valor: '0' }, // 0 correcta
    { item: 'Falso', valor: '1' }, // 1 incorrecta
]
marcarInputX(p3item5, '35')

var p3item6 = [
    { item: 'Verdadero', valor: '0' }, // 0 correcta
    { item: 'Falso', valor: '1' }, // 1 incorrecta
]
marcarInputX(p3item6, '36')

var p3item7 = [
    { item: 'Verdadero', valor: '1' }, // 0 correcta
    { item: 'Falso', valor: '0' }, // 1 incorrecta
]
marcarInputX(p3item7, '37')

var p3item8 = [
    { item: 'Verdadero', valor: '0' }, // 0 correcta
    { item: 'Falso', valor: '1' }, // 1 incorrecta
]
marcarInputX(p3item8, '38')



function pregunta3() {
    let core1 = validarMarcarInputX(p3item0, '30')
    let core2 = validarMarcarInputX(p3item1, '31')
    let core3 = validarMarcarInputX(p3item2, '32')
    let core4 = validarMarcarInputX(p3item3, '33')
    let core5 = validarMarcarInputX(p3item4, '34')
    let core6 = validarMarcarInputX(p3item5, '35')
    let core7 = validarMarcarInputX(p3item6, '36')
    let core8 = validarMarcarInputX(p3item7, '37')
    let core9 = validarMarcarInputX(p3item8, '38')
    let total = ((core1 + core2 + core3 + core4 + core5 + core6 + core7 + core8 + core9) / 5) * 0.5;
    $("#pre3a").val(parseFloat(total).toFixed(2));
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

// pregunta 4 
let p4opciones = ['altura', 'eje', 'radio', 'generatriz', 'vértice', 'base']
asignarOpcionesAselect(p4opciones, ".p4sel")
let p4respuestas = ['vértice', 'generatriz', 'altura', 'radio', 'base', 'eje']



function pregunta4() {
    let core = validarExactas(p4respuestas, "#p4var");
    let total = core * 0.5;
    $("#pre4a").val(parseFloat(total).toFixed(2));
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


function pregunta5() {
    let core = 0
    let data = reemplazar_punto_por_coma($("#p5var0").val());
    console.log(data);
    data == '47,12' ? (core++, $("#p5var0").addClass('bien')) : $("#p5var0").addClass('mal');
    let total = core * 1;
    $("#pre5a").val(parseFloat(total).toFixed(2));
}

function pregunta6() {
    let core = 0
    let data = reemplazar_punto_por_coma($("#p6var0").val());
    console.log(data);
    data == '87,96' ? (core++, $("#p6var0").addClass('bien')) : $("#p6var0").addClass('mal');
    let total = core * 1;
    $("#pre6a").val(parseFloat(total).toFixed(2));
}

function pregunta7() {
    let core = 0
    let data = reemplazar_punto_por_coma($("#p7var0").val());
    console.log(data);
    data == '452,39' ? (core++, $("#p7var0").addClass('bien')) : $("#p7var0").addClass('mal');
    let total = core * 1;
    $("#pre7a").val(parseFloat(total).toFixed(2));
}


function pregunta8() {
    let core = 0
    let data = reemplazar_punto_por_coma($("#p8var0").val());
    console.log(data);
    data == '804,25' ? (core++, $("#p8var0").addClass('bien')) : $("#p8var0").addClass('mal');
    let total = core * 1;
    $("#pre8a").val(parseFloat(total).toFixed(2));
}


function pregunta9() {
    let core = 0
    let p9respuestas = ['1570,8', '628,32']
    for (let i = 0; i < p9respuestas.length; i++) {
        let data = reemplazar_punto_por_coma($("#p9var" + i).val());
        console.log(data);
        data == p9respuestas[i] ? (core++, $("#p9var" + i).addClass('bien')) : $("#p9var" + i).addClass('mal');
    }
    let total = (core / 2) * 1;
    $("#pre9a").val(parseFloat(total).toFixed(2));
}


function pregunta10() {
    let core = 0
    let data = reemplazar_punto_por_coma($("#p10var0").val());
    console.log(data);
    data == '502,65' ? (core++, $("#p10var0").addClass('bien')) : $("#p10var0").addClass('mal');
    let total = core * 1;
    $("#pre10a").val(parseFloat(total).toFixed(2));
}


function pregunta11() {
    let core = 0
    let data = reemplazar_punto_por_coma($("#p11var0").val());
    console.log(data);
    data == '703,72' ? (core++, $("#p11var0").addClass('bien')) : $("#p11var0").addClass('mal');
    let total = core * 1;
    $("#pre11a").val(parseFloat(total).toFixed(2));
}


function pregunta12() {
    let core = 0
    let data = reemplazar_punto_por_coma($("#p12var0").val());
    console.log(data);
    data == '1083' ? (core++, $("#p12var0").addClass('bien')) : $("#p12var0").addClass('mal');
    let total = core * 1;
    $("#pre12a").val(parseFloat(total).toFixed(2));
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
    pregunta5();
    pregunta6();
    pregunta7();
    pregunta8();
    pregunta9();
    pregunta10();
    pregunta11();
    pregunta12();
    var pre1a = parseFloat(document.getElementById("pre1a").value)
    var pre2a = parseFloat(document.getElementById("pre2a").value)
    var pre3a = parseFloat(document.getElementById("pre3a").value)
    var pre4a = parseFloat(document.getElementById("pre4a").value)
    var pre5a = parseFloat(document.getElementById("pre5a").value)
    var pre6a = parseFloat(document.getElementById("pre6a").value)
    var pre7a = parseFloat(document.getElementById("pre7a").value)
    var pre8a = parseFloat(document.getElementById("pre8a").value)
    var pre9a = parseFloat(document.getElementById("pre9a").value)
    var pre10a = parseFloat(document.getElementById("pre10a").value)
    var pre11a = parseFloat(document.getElementById("pre11a").value)
    var pre12a = parseFloat(document.getElementById("pre12a").value)
    cor = pre1a + pre2a + pre3a + pre4a + pre5a + pre6a + pre7a + pre8a + pre9a + pre10a + pre11a + pre12a
    Calculo_nota();
    EndActivity()
}
