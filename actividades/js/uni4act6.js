var cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

///// NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA
var ayudasActividad = [
    `En la actividad 1. Selecciona para pintar la opción correcta.  <br>`,
    `En la actividad 2, 3, 4, 6 y 7. Usa la pizarra para resolver el problema y completa la respuesta correctamente.  <br>`,
    `En la actividad 5. Selecciona la letra correcta para emparejar los literales.  <br>`,
    `En la actividad 8. Selecciona V o F.  <br>`,
    `En la actividad 9. Usa pa pizarra para resolver el ejercicio, usa las herramientas de dibujo para graficar y completa la respuesta correctamente.  <br>`,
]
var unidad = '4'
$("#numTema").html('6')
$("#temaActividad").html('Otros cuerpos geométricos')
$("#n_pagina").html("160");
$(".numeroTemaColor").addClass(`unidad${unidad}numeroTema`)
$(".temaColor").addClass(`unidad${unidad}tema`)

/// FIN NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA



$(document).ready(function () { })

var p1act = [
    {
        enunciado: `<img src="img/i1_p160_act1.png">`,
        respuesta: [`13,15`, `13,45`, `13,05`, `13,39`],
    },
    {
        enunciado: `<img src="img/i2_p160_act1.png">`,
        respuesta: [`16,28`, `16,38`, `15,28`, `16,48`],
    },
    {
        enunciado: `<img src="img/i3_p160_act1.png">`,
        respuesta: [`21,38`, `21,14`, `21,18`, `21,58`],
    },
];
literalesRespuestasSeleccionSimple(p1act, "#p1act", 1);

function pregunta1() {
    let core = validarLiteralesRespuestasSeleccionSimple(p1act, 1);
    let total = core * 1;
    $("#pre1a").val(parseFloat(total).toFixed(2));
}


var p2act = [
    { img: `<img src="img/i1_p160_act2.png">`, generatriz: '13', b_superior: '12,57', b_inferior: '153,94' },
    { img: `<img src="img/i2_p160_act2.png">`, generatriz: '23,35', b_superior: '380,13', b_inferior: '706,86' },
    { img: `<img src="img/i3_p160_act2.png">`, generatriz: '20,25', b_superior: '254,47', b_inferior: '804,25' },
];
mezclar(p2act)
let p2respuestas = []

let p2items = p2act.map((item, index) => {
    p2respuestas.push(item.generatriz)
    p2respuestas.push(item.b_superior)
    p2respuestas.push(item.b_inferior)
    let p2id = index * 3
    let respuestas = `
    <div>
        <i class="txt-morado">Respuestas</i>
        <p style="margin-top:10px"> &emsp;g = <input class="p2input" id="p2var${p2id}" placeholder="123,4" maxlength="7"> cm</p>
        <p style="margin-top:10px"> A<sub>Bs</sub> = <input class="p2input" id="p2var${p2id + 1}" placeholder="123,4" maxlength="7"> cm<sup>2</sup></p>
        <p style="margin-top:10px"> A<sub>Bi</sub> = <input class="p2input" id="p2var${p2id + 2}" placeholder="123,4" maxlength="7"> cm<sup>2</sup></p>
    </div>
    `

    return `<div style="width: 480px;display: flex;flex-direction: column;gap: 10px;padding:5px;border-radius:5px;;border:solid 1px #CECDCE" class="sombraBox">
               <div style="width: 100%;display: flex;justify-content: center;align-items: center;gap: 10px">
                    ${item.img}
                    ${respuestas}
                </div>
                <div style="width:100%;height:250px" id="pizarra2${index}"></div>
            </div>`
}).join('')
document.getElementById('p2act').innerHTML = p2items;

function pregunta2() {
    let core = 0
    for (let i = 0; i < p2respuestas.length; i++) {
        let data = reemplazar_punto_por_coma($("#p2var" + i).val());
        // console.log(data);
        data == p2respuestas[i] ? (core++, $("#p2var" + i).addClass('bien')) : $("#p2var" + i).addClass('mal');
    }
    let total = (core / p2respuestas.length) * 1;
    $("#pre2a").val(parseFloat(total).toFixed(2));
}


let p3actividad = [
    { item: 'r = 10, R = 19, g = 23', resp: '2095,44' },
    { item: 'r = 5, R = 9, g = 16', resp: '703,72' },
    { item: 'r = 11, R = 17, g = 20', resp: '1759,29' },
    { item: 'r = 8, R = 14, g = 19', resp: '1313,19' },
]
mezclar(p3actividad)
let p3respuestas = []

let p3items = p3actividad.map((e, i) => {
    p3respuestas.push(e.resp)
    return `<div style="width: 480px;display: flex;flex-direction: column;gap: 5px;padding:5px;border-radius:5px;;border:solid 1px #CECDCE" class="sombraBox">
               <div style="width: 100%;display: flex;justify-content: start;align-items: center;gap: 10px">
                    <b class="txt-azul">${letrasLista[i]}</b>
                    ${e.item}
                </div>
                <div style="width:100%;height:250px" id="pizarra3${i}"></div>
                <div>
                    <i class="txt-morado">Respuestas</i> &emsp;A<sub>L</sub> = <input class="p2input" id="p3var${i}" placeholder="123,4" maxlength="7"> cm<sup>2</sup>
                </div>
            </div>`
}).join('')
document.getElementById('p3act').innerHTML = p3items;


function pregunta3() {
    let core = 0
    for (let i = 0; i < p3respuestas.length; i++) {
        let data = reemplazar_punto_por_coma($("#p3var" + i).val());
        // console.log(data);
        data == p3respuestas[i] ? (core++, $("#p3var" + i).addClass('bien')) : $("#p3var" + i).addClass('mal');
    }
    let total = (core / p3respuestas.length) * 1;
    $("#pre3a").val(parseFloat(total).toFixed(2));
}

let p4respuestas = ['3893,38', '17907,08']
function pregunta4() {
    let core = 0
    for (let i = 0; i < p4respuestas.length; i++) {
        let data = reemplazar_punto_por_coma($("#p4var" + i).val());
        // console.log(data);
        data == p4respuestas[i] ? (core++, $("#p4var" + i).addClass('bien')) : $("#p4var" + i).addClass('mal');
    }
    let total = (core / p4respuestas.length) * 1;
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




let p5actividad = [
    {
        literal: 'ap<sub><sub>Bi</sub></sub> = 7 &emsp; ap<sub><sub>Bs</sub></sub> = 3 &emsp; h = 17', enunciado: '17,46'
    },
    {
        literal: 'ap<sub><sub>Bi</sub></sub> = 11 &emsp; h = 24 &emsp;  ap<sub><sub>Bs</sub></sub> = 6', enunciado: '24,52'
    },
    {
        literal: 'h = 20 &emsp; ap<sub><sub>Bi</sub></sub> = 13 &emsp; ap<sub><sub>Bs</sub></sub> = 5', enunciado: '21,54'
    },
    {
        literal: 'ap<sub><sub>Bi</sub></sub> = 7 &emsp; ap<sub><sub>Bs</sub></sub> = 16 &emsp; h = 27', enunciado: '28,46'
    }
]

let p5respuestas = RelacionarliteralesTabla(p5actividad, '5')
function pregunta5() {
    let core = validarExactas(p5respuestas, "#p5var")
    let total = core * 1;
    $("#pre5a").val(parseFloat(total).toFixed(2));
}



let p6actividad = [
    { item: `Una pirámide de base pentagonal que tiene L<sub style="margin-left:-5px"><sub>Bs</sub></sub> = 4 cm, L<sub style="margin-left:-5px"><sub>Bi</sub></sub> = 9 cm, ap<sub style="margin-left:-5px"><sub>Bs</sub></sub> = 3 cm, ap<sub style="margin-left:-5px"><sub>Bi</sub></sub> = 7 cm y h = 14 cm.`, resp: '473,2' },

    { item: 'Una pirámide de base pentagonal que tiene L<sub style="margin-left:-5px"><sub>Bs</sub></sub> = 7 cm, L<sub style="margin-left:-5px"><sub>Bi</sub></sub> = 14 cm, ap<sub style="margin-left:-5px"><sub>Bs</sub></sub> = 5 cm, ap<sub style="margin-left:-5px"><sub>Bi</sub></sub> = 12 cm y h = 20 cm.', resp: '1112,48' },


    { item: 'Una pirámide de base pentagonal que tiene L<sub style="margin-left:-5px"><sub>Bs</sub></sub> = 6 cm, L<sub style="margin-left:-5px"><sub>Bi</sub></sub> = 12 cm, ap<sub style="margin-left:-5px"><sub>Bi</sub></sub> = 9 cm, ap<sub style="margin-left:-5px"><sub>Bs</sub></sub> = 4 cm y h = 24 cm.', resp: '1275,01' },
]
mezclar(p6actividad)
let p6respuestas = []

let p6items = p6actividad.map((e, i) => {
    p6respuestas.push(e.resp)
    return `<div style="width: 480px;display: flex;flex-direction: column;gap: 5px;padding:5px;border-radius:5px;border:solid 1px #CECDCE" class="sombraBox">
               <div style="width: 100%;display: flex;justify-content: start;align-items: center;gap: 5px;flex-wrap:wrap">
                    <b class="txt-azul">${letrasLista[i]}</b>
                    ${e.item}
                </div>
                <div style="width:100%;height:250px" id="pizarra6${i}"></div>
                <div>
                    <i class="txt-morado">Respuestas</i> &emsp;A<sub>L</sub> = <input class="p2input" id="p6var${i}" placeholder="123,4" maxlength="7"> cm<sup>2</sup>
                </div>
            </div>`
}).join('')
document.getElementById('p6act').innerHTML = p6items;



function pregunta6() {
    let core = 0
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
    let p7respuestas = ['1122,12', '2184']
    for (let i = 0; i < p7respuestas.length; i++) {
        let data = reemplazar_punto_por_coma($("#p7var" + i).val());
        // console.log(data);
        data == p7respuestas[i] ? (core++, $("#p7var" + i).addClass('bien')) : $("#p7var" + i).addClass('mal');
    }
    let total = (core / p7respuestas.length) * 1;
    $("#pre7a").val(parseFloat(total).toFixed(2));
}



var p8act = [
    { enunciado: `Se necesita tener la altura para hallar la generatriz en el cono truncado.`, correcta: 'V' },
    { enunciado: `La fórmula para calcular la altura en el cono truncado es: \\( \\sqrt{g^2 - (R - r)} \\)`, correcta: 'F' },
    { enunciado: `Ap es la apotema del tronco.`, correcta: 'V' },
    { enunciado: `La fórmula para calcular el volumen en la pirámide truncada es: \\[ V = (A_{Bi} + A_{Bs} + \\sqrt{A_{Bi} \\cdot A_{Bs}}) \\frac{h}{3} \\]`, correcta: 'V' },
]

let p8respuestas = enunciadoSelectOpcion(p8act, "#p8act", '8', 'vof')
console.log(p8respuestas)


function pregunta8() {
    let core = validarExactas(p8respuestas, '#p8var')
    let total = core * 1;
    $("#pre8a").val(parseFloat(total).toFixed(2));
}




function pregunta9() {
    let core = 0
    let p9respuestas = ['2100,2', '7078,06']
    for (let i = 0; i < p9respuestas.length; i++) {
        let data = reemplazar_punto_por_coma($("#p9var" + i).val());
        // console.log(data);
        data == p9respuestas[i] ? (core++, $("#p9var" + i).addClass('bien')) : $("#p9var" + i).addClass('mal');
    }
    let total = (core / p9respuestas.length) * 2;
    $("#pre9a").val(parseFloat(total).toFixed(2));
}




var coevaluacion = [
    `Sé respetar las opiniones de mi compañero ?`,
    `¿Pude graficar y resolver el ejercicio ?`,
]

var itemsReflexiono = [`¿Qué estrategias de estudio utilizo para entender los cuerpos geométricos?`]

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
    var pre1a = parseFloat(document.getElementById("pre1a").value)
    var pre2a = parseFloat(document.getElementById("pre2a").value)
    var pre3a = parseFloat(document.getElementById("pre3a").value)
    var pre4a = parseFloat(document.getElementById("pre4a").value)
    var pre5a = parseFloat(document.getElementById("pre5a").value)
    var pre6a = parseFloat(document.getElementById("pre6a").value)
    var pre7a = parseFloat(document.getElementById("pre7a").value)
    var pre8a = parseFloat(document.getElementById("pre8a").value)
    var pre9a = parseFloat(document.getElementById("pre9a").value)
    cor = pre1a + pre2a + pre3a + pre4a + pre5a + pre6a + pre7a + pre8a + pre9a + pre9a
    Calculo_nota();
    EndActivity()
}
