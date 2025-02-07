var cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

///// NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA
var ayudasActividad = [
    `En la actividad 1, 5 y 6. Escribe en cada recuadro de texto.  <br>`,
    `En la actividad 2. Selecciona el círculo amarillo luego selecciona el círculo azul para trazar una línea.  <br>`,
    `En la actividad 3. Selecciona V o F.  <br>`,
    `En la actividad 4. Selecciona la palabra correcta para identificar cada parte del aparato reproductor femenino.  <br>`,
]
var unidad = '2'
$("#numTema").html('1')
$("#temaActividad").html('La reproducción en el ser humano')
$("#n_pagina").html("54");
$(".numeroTemaColor").addClass(`unidad${unidad}numeroTema`)
$(".temaColor").addClass(`unidad${unidad}tema`)

/// FIN NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA


$(document).ready(function () {
    cajaUnir1_1(500, 450, 'solid 1px #3FC0D7', 0, 100)
})


var p1actividad = [
    { item: 'Alimentación', color1: '#F8A70C', color2: '#FEF4DF' },
    { item: 'Ejercicio regular', color1: '#4B51A2', color2: '#E1DEEF' },
    { item: 'Higiene', color1: '#3FC0D7', color2: '#E9F7F9' },
]
mezclar(p1actividad)
let p1items = p1actividad.map(element => {

    return `<div style="border:solid 1px ${element.color1};border-radius: 6px;padding: 2px;width: 300px;background-color:${element.color2} !important; -webkit-print-color-adjust: exact; print-color-adjust: exact;">
                    <div style="border-radius: 5px;text-align: center;padding:2px 5px;background-color:${element.color1} !important; -webkit-print-color-adjust: exact; print-color-adjust: exact;"><b class="txt-blanco">${element.item}</b></div>
                    <div class="p5campoTexto"></div>
                </div>`
}).join('')
$("#p1act").html(p1items)





var arrayElemInicio = [
    '<div class="divinicio"><img src="img/i1_p54_act2.png" class="p2img"></div>',
    '<div class="divinicio"><img src="img/i2_p54_act2.png" class="p2img"></div>',
    '<div class="divinicio"><img src="img/i3_p54_act2.png" class="p2img"></div>',
    '<div class="divinicio"><img src="img/i4_p54_act2.png" class="p2img"></div>',
]
var arrayElemFin = [
    '<div class="divfin">Conducto deferente</div>',
    '<div class="divfin">Testículo</div>',
    '<div class="divfin">Uretra</div>',
    '<div class="divfin">Próstata</div>',
]


function pregunta2() {
    let core = validarUnir1_1()
    let total = core * 2.5;
    $("#pre2a").val(parseFloat(total).toFixed(2));
}


var p3act = [
    { enunciado: 'Los ovarios son los órganos donde se producen los óvulos.', id: 'p3var0' },
    { enunciado: 'La vagina puede actuar como canal de parto.', id: 'p3var1' },
    { enunciado: 'Los labios mayores son órganos internos del aparato reproductor.', id: 'p3var2' },
]
seleccionVF(p3act, "#p3act")
function pregunta3() {
    let core = validarExactas(['V', 'V', 'F'], "#p3var")
    let total = core * 2.5;
    $("#pre3a").val(parseFloat(total).toFixed(2));
}



let p4opciones = ['Trompas de Falopio', 'Ovarios', 'Útero', 'Vagina']
asignarOpcionesAselect(p4opciones, '.p4sel')

function pregunta4() {
    let core = validarExactas(['Trompas de Falopio', 'Ovarios', 'Vagina', 'Útero'], "#p4var")
    let total = core * 2.5;
    $("#pre4a").val(parseFloat(total).toFixed(2));
}




var rutinaPensamiento = [
    //// afirmar, apoyar, cuestionar
    {
        img: '<img src="img/ico_afirmar.png" alt="">', txt1: 'Afirmar', txt2: 'Escribe una afirmación sobre la importancia del útero en la reproducción humana.',
        color1: '#F25C19', colorTexto: 'white', row: '4',
    },
    {
        img: '<img src="img/ico_apoyar.png" alt="">', txt1: 'Apoyar', txt2: 'Indaga y escribe razones que apoyen tu afirmación.',
        color1: '#99D31F', colorTexto: 'white', row: '5',
    },
    {
        img: '<img src="img/ico_cuestionar.png" alt="">', txt1: 'Cuestionar', txt2: 'Plantea dudas que aún tengas sobre la importancia del útero en la reproducción humana.',
        color1: '#1B62B7', colorTexto: 'white', row: '4',
    },

]
rutinaPensamiento.forEach(element => {
    $("#rutinaPensamiento").append(`
        <div style="border-radius:5px;border:solid 2px ${element.color1};width:280px;margin:20px 5px">
            <div style="display: flex;align-items: center;justify-content: center;gap:10px;">
                <div style="padding: 1px 15px;border-radius:5px;background-color: ${element.color1} !important;print-color-adjust: exact;color: ${element.colorTexto} !important;print-color-adjust: exact;font-weight:bolder;">
                     ${element.txt1}
                </div>
                ${element.img}
            </div>
            <div style=";padding: 5px;margin: 5px;background-color: white !important;print-color-adjust: exact;border-radius: 5px;">
                <div>
                    <div style="margin-bottom: 5px;">
                       ${element.txt2}
                    </div>
                    <textarea class="form-control " placeholder="Escribir" rows="${element.row}"></textarea>
                </div>
            </div>
        </div>
    </div>`)
});


function preguntasArray6(array, contenedorId) {
    array.forEach((element, index) => {
        let data = `<div style="margin-bottom:10px"><b class="txt-azul">${letrasLista[index]}</b> ${element} <textarea class="form-control no-redimensionar" rows="2" placeholder="Escribir"></textarea></div>`;
        $("#" + contenedorId).append(data);
    });
}


let p6preguntas = [
    '¿Qué semejanzas y diferencias encuentras entre las glándulas bulbouretrales y las vesículas seminales?',
    '¿Qué determina la madurez del aparato reproductor masculino y femenino?',
    '¿Has notado cambios en tu cuerpo últimamente?, ¿cómo te hacen sentir estos cambios?',
    '¿Hay alguna conexión entre el sistema reproductor humano y el sistema endócrino?',
    '¿Por qué es importante respetar tu propio cuerpo y el cuerpo de los demás?',
]
preguntasArray6(p6preguntas, "p6act");



// var coevaluacion = [
//     `¿Inventé con mis compañeros una historia para un cuento?`,
//     `¿Pude crear personajes y un lugar para el desarrollo de un cuento?`,
//     `¿Expresé mis ideas y respeté las opiniones de mis compañeros?`,
//     `¿Apoyé a mi equipo durante todo el trabajo?`
// ]

var itemsReflexiono = [`¿Cómo puedo usar lo aprendido para cuidar la higiene de mi cuerpo?`]

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
