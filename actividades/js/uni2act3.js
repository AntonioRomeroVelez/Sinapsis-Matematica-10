var cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

///// NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA
var ayudasActividad = [
    `En la actividad 1. Selecciona V o F.  <br>`,
    `En la actividad 2. Selecciona para marcar con una X la casilla correcta.  <br>`,
    `En la actividad 3. Selecciona, arrastra y pega en los lugares que corresponden.  <br>`,
    `En la actividad 4, 5, 6, 8, 9 y 10. Utiliza la pizarra para resolver cada ejercicio.  <br>`,
    `En la actividad 7. Escribe en cada recuadro de texto.  <br>`,
]
var unidad = '2'
$("#numTema").html('3')
$("#temaActividad").html('Racionalización')
$("#n_pagina").html("66");
$(".numeroTemaColor").addClass(`unidad${unidad}numeroTema`)
$(".temaColor").addClass(`unidad${unidad}tema`)

/// FIN NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA


$(document).ready(function () {

})


var p1act = [
    { enunciado: 'Solo las expresiones que contienen radicales de índice 2 se pueden racionalizar.', correcta: 'F' },
    { enunciado: 'Es posible racionalizar el denominador de una fracción si este contiene una raíz cúbica en lugar de una raíz cuadrada.', correcta: 'V' },
    { enunciado: 'La conjugada de √<span class="estiloRaizNumero">3</span> - √<span class="estiloRaizNumero">a</span> &nbsp;es&nbsp; √<span class="estiloRaizNumero">3</span> + √<span class="estiloRaizNumero">a</span> .', correcta: 'V' },
    { enunciado: 'El factor racionalizante de <img src="img/i1_p66_act1.png">', correcta: 'F' },
    { enunciado: 'La expresión <img src="img/i2_p66_act1.png">  puede ser racionalizada.', correcta: 'F' },
    { enunciado: 'La expresión <img src="img/i3_p66_act1.png"> acionalizada es  bc √<span class="estiloRaizNumero">a</span> ', correcta: 'V' },
]

let p1respuestas = enunciadoSelectOpcion(p1act, "#p1act", '1', 'vof')
// console.log(p1respuestas)


function pregunta1() {
    let core = validarExactas(p1respuestas, '#p1var')
    let total = core * 1;
    $("#pre1a").val(parseFloat(total).toFixed(2));
}


var p2act = [
    { img: '<img src="img/i1_p66_act2.png" alt="expresion">', respuesta: '1' },
    { img: '<img src="img/i2_p66_act2.png" alt="expresion">', respuesta: '2' },
    { img: '<img src="img/i3_p66_act2.png" alt="expresion">', respuesta: '0' },
    { img: '<img src="img/i4_p66_act2.png" alt="expresion">', respuesta: '1' },
    { img: '<img src="img/i5_p66_act2.png" alt="expresion">', respuesta: '2' },
    { img: '<img src="img/i6_p66_act2.png" alt="expresion">', respuesta: '1' },
]
mezclar(p2act)
let p2respuestas = []
let p2items = p2act.map((el, index) => {
    p2respuestas.push(el.respuesta)
    return `<tr>
                <td>${el.img}</td>
                <td class="p2cajas p2_${index}_" data-question="0" data-anijs="if: click, do: bounceIn animated"></td>
                <td class="p2cajas p2_${index}_" data-question="1" data-anijs="if: click, do: bounceIn animated"></td>
                <td class="p2cajas p2_${index}_" data-question="2" data-anijs="if: click, do: bounceIn animated"></td>
            </tr>`
})


$("#p2act").html(`<table class="table-bordered-1" style="width:560px">
                    <tr>
                        <td rowspan="2" class="txt-naranja bg-naranjasuave">Expresión</td>
                        <td colspan="3" class="txt-naranja bg-naranjasuave">Racionalización</td>
                    </tr>
                    <tr>
                        <td class="bg-naranjasuave">Raíz cuadrada</td>
                        <td class="bg-naranjasuave">No es raíz cuadrada</td>
                        <td class="bg-naranjasuave">De un binomio</td>
                    </tr>
                    ${p2items.join('')}
                </table>`)


// 🔹 Asignar evento click correctamente con delegación para elementos dinámicos
$(document).on("click", ".p2cajas", function () {
    var obtenerClass = $(this).attr("class").split(' ')[1]; // Obtener segunda clase
    // console.log(obtenerClass);

    // Limpiar texto de todos los elementos con la misma clase
    $("." + obtenerClass).text('');

    // Marcar solo el elemento clickeado con 'X'
    $(this).text('X');
});


function pregunta2() {
    let core = 0
    for (let index = 0; index < p2respuestas.length; index++) {
        let cajas = document.querySelectorAll(`.p2_${index}_`)
        let control = 0
        cajas.forEach(element => {
            if (element.textContent == 'X') {
                control++
                if (element.getAttribute("data-question") == p2respuestas[index]) {
                    core++;
                    element.classList.add('bien');
                } else {
                    element.classList.add('mal');
                }
            }
        });
        if (control == 0) {
            cajas.forEach(element => {
                element.classList.add('mal');
            });
        }
    }
    let total = (core / 6) * 1;
    $("#pre2a").val(parseFloat(total).toFixed(2));
}



let p3opciones = [
    '<img src="img/i9_p66_act3.png" data-valor="1" alt="expresión" class="drag3 hvr-grow">',
    '<img src="img/i10_p66_act3.png" data-valor="2" alt="expresión" class="drag3 hvr-grow">',
    '<img src="img/i11_p66_act3.png" data-valor="3" alt="expresión" class="drag3 hvr-grow">',
    '<img src="img/i12_p66_act3.png" data-valor="4" alt="expresión" class="drag3 hvr-grow">',
    '<img src="img/i13_p66_act3.png" data-valor="5" alt="expresión" class="drag3 hvr-grow">',
    '<img src="img/i14_p66_act3.png" data-valor="6" alt="expresión" class="drag3 hvr-grow">',
    '<img src="img/i15_p66_act3.png" data-valor="7" alt="expresión" class="drag3 hvr-grow">',
    '<img src="img/i16_p66_act3.png" data-valor="8" alt="expresión" class="drag3 hvr-grow">',
]
mezclar(p3opciones)
$("#p3opciones").html(p3opciones)



let p3actividad = [
    { img: `<img src="img/i1_p66_act3.png" alt="expresión">`, resp: '1' },
    { img: `<img src="img/i2_p66_act3.png" alt="expresión">`, resp: '2' },
    { img: `<img src="img/i3_p66_act3.png" alt="expresión">`, resp: '3' },
    { img: `<img src="img/i4_p66_act3.png" alt="expresión">`, resp: '4' },
    { img: `<img src="img/i5_p66_act3.png" alt="expresión">`, resp: '5' },
    { img: `<img src="img/i6_p66_act3.png" alt="expresión">`, resp: '6' },
    { img: `<img src="img/i7_p66_act3.png" alt="expresión">`, resp: '7' },
    { img: `<img src="img/i8_p66_act3.png" alt="expresión">`, resp: '8' },
]
mezclar(p3actividad)
let p3respuestas = []

let p3items = p3actividad.map((el, index) => {
    p3respuestas.push(el.resp)
    let boxp3 = `<div class="p3box" style="border:solid 2px ${generarColorPastel()} !important;print-color-adjust: exact;">
        <div>${el.img}</div>
        <div class="caja3" id="p3var${index}"></div>
    </div>`
    return boxp3
}).join('')

$("#p3act").html(p3items)



function pregunta3() {
    let core = 0;
    for (let i = 0; i < p3opciones.length; i++) {
        let valor = $("#p3var" + i + " img").attr("data-valor")
        if (valor == p3respuestas[i]) {
            $("#p3var" + i).addClass('bien')
            core++
        } else {
            $("#p3var" + i).addClass('mal')
        }
    }
    let total = Math.max((core / p3respuestas.length) * 1, 0)
    $("#pre3a").val(parseFloat(total).toFixed(2));
}



let p4actividad = [
    `<img src="img/i1_p66_act4.png" alt="expresión">`,
    `<img src="img/i2_p66_act4.png" alt="expresión">`,
    `<img src="img/i3_p66_act4.png" alt="expresión">`,
    `<img src="img/i4_p66_act4.png" alt="expresión">`,
    `<img src="img/i5_p66_act4.png" alt="expresión">`,
    `<img src="img/i6_p66_act4.png" alt="expresión">`,
]
mezclar(p4actividad)

let p4items = p4actividad.map((el, index) => {
    let boxp4 = `<div class="p4box">
        <div><b class="txt-azul">${letrasLista[index]}</b> ${el}</div>
        <div style="width:440px;height:250px" id="pizarra4${index}"></div>
    </div>`
    return boxp4
}).join('')

$("#p4act").html(p4items)


var p5actividad = [
    '<img src="img/i1_p66_act5.png" alt="">',
    '<img src="img/i2_p66_act5.png" alt="">',
    '<img src="img/i3_p66_act5.png" alt="">',
]
mezclar(p5actividad)

let p5items = p5actividad.map((el, index) => {
    let boxp5 = `<div class="p5box">
        <div><b class="txt-azul">${letrasLista[index]}</b> ${el}</div>
        <div style="width:440px;height:250px" id="pizarra5${index}"></div>
    </div>`
    return boxp5
}).join('')
$("#p5act").html(p5items)




var p6actividad = [
    '<img src="img/i1_p67_act6.png" alt="">',
    '<img src="img/i2_p67_act6.png" alt="">',
    '<img src="img/i3_p67_act6.png" alt="">',
    '<img src="img/i4_p67_act6.png" alt="">',
    '<img src="img/i5_p67_act6.png" alt="">',
]
mezclar(p6actividad)

let p6items = p6actividad.map((el, index) => {
    let boxp6 = `<div class="p6box">
        <div><b class="txt-azul">${letrasLista[index]}</b> ${el}</div>
        <div style="width:440px;height:250px" id="pizarra6${index}"></div>
    </div>`
    return boxp6
}).join('')
$("#p6act").html(p6items)


function pregunta10() {
    let core = validarExactas(['200'], "#p10var")
    let total = Math.max((core / 1) * 1, 0)
    $("#pre10a").val(parseFloat(total).toFixed(2));
}


var rutinaPensamiento = [
    //// pienso, me interes, investigo
    {
        item: 'Pienso', img: '<img src="img/ico_pienso_cerebro.png">', frase: '¿Qué sucedería al dejar un radical en el denominador?', color1: '#00ABCF', color2: '#89CD7C', row: '5'
    },
    {
        item: 'Me interesa', img: '<img src="img/ico_me_interesa_cerebro.png">', frase: '¿Qué sucedería si no se racionaliza un denominador en una fracción?', color1: '#1B62B7', color2: '#EF6119', row: '4'
    },
    {
        item: 'Investigo', img: '<img src="img/ico_investigo_cerebro.png">', frase: 'Indaga ejemplos donde la racionalización fue crucial para resolver problemas matemáticos.', color1: '#2065B2', color2: '#7FD4E2', row: '4'
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



// var coevaluacion = [
//     `¿Indagué las características de un animal diurno y uno nocturno de nuestra comunidad?`,
//     `¿Anotemos las características de sus cuerpos?`,
//     `¿Identifiquémos cómo sobreviven en cada fase del día?`
// ]

var itemsReflexiono = [`¿Cómo podría dar a conocer la importancia de los cuidados durante el embarazo en mi comunidad local?`]


function total() {
    pregunta1();
    pregunta2();
    pregunta3();
    pregunta10();
    var pre1a = parseFloat(document.getElementById("pre1a").value)
    var pre2a = parseFloat(document.getElementById("pre2a").value)
    var pre3a = parseFloat(document.getElementById("pre3a").value)
    var pre10a = parseFloat(document.getElementById("pre10a").value)
    cor = pre1a + pre2a + pre3a + pre10a
    Calculo_nota();
    EndActivity()
}
