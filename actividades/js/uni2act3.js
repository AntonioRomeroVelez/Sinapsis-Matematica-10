var cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

///// NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA
var ayudasActividad = [
    `En la actividad 1. Completa el crucigrama.  <br>`,
    `En la actividad 2 y 6. Escribe en cada recuadro de texto.  <br>`,
    `En la actividad 3. Selecciona para la palabra correcta para cada imagen y escribe en cada recuadro.  <br>`,
    `En la actividad 4. Selecciona V o F.  <br>`,
    `En la actividad 5. Selecciona la etapa del parto que corresponde.  <br>`,
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
console.log(p1respuestas)


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


var p3act = [
    { item: '<img src="img/i1_p71_act3.jpg" alt="">', resp: 'Mórula' },
    { item: '<img src="img/i2_p71_act3.jpg" alt="">', resp: 'Gástrula' },
    { item: '<img src="img/i3_p71_act3.jpg" alt="">', resp: 'Blástula' },
];
var p3res = imgSelectRespuesta(p3act, 3);
let p3opciones = ['Mórula', 'Gástrula', 'Blástula'];
asignarOpcionesAselect(p3opciones, ".p3sel")
preguntasArray(p3opciones, 'p3preguntas')

function pregunta3() {
    validarExactas(p3res, "#p3var");
}



var p4act = [
    { enunciado: 'Entre el primer y segundo mes se forman las 3 capas germinales.', id: 'p4var0' },
    { enunciado: 'En el sexto mes no es posible distinguir el sexo del bebé.', id: 'p4var1' },
    { enunciado: 'En el noveno mes el feto se prepara para el parto.', id: 'p4var2' },
    { enunciado: 'En el quinto mes el cuerpo del feto está cubierto por lanugo.', id: 'p4var3' },
]
seleccionVF(p4act, "#p4act")


function pregunta4() {
    let core = validarExactas(['V', 'F', 'V', 'V'], "#p4var")
    let total = core * 1;
    $("#pre4a").val(parseFloat(total).toFixed(2));
}


var p5actividad = [
    { img: '<img src="img/i1_p65_act5.png" alt="">', resp: 'M' },
    { img: '<img src="img/i2_p65_act5.png" alt="">', resp: 'A' },
    { img: '<img src="img/i3_p65_act5.png" alt="">', resp: 'M' },
]
mezclar(p5actividad)
let p5respuestas = []

let p5items = p5actividad.map((element, index) => {
    p5respuestas.push(element.resp)
    return `
    <div style="position: relative;display: table;margin:10px">
        ${element.img}
        <div style="position: absolute;bottom: 3px;left:3px;" class="p5seldiv">
            <select class="p5sel selectbox1" id="p5var${index}"></select>
        </div>
    </div>`
}).join('')
$("#p5act").html(p5items)

let p5opciones = ['Fase de dilatación', 'Fase de anidación', 'Fase postparto']
asignarOpcionesAselect(p5opciones, '.p5sel')

function pregunta5() {
    let core = validarExactas(['Fase de dilatación'], '#p5var')
    let total = core * 1;
    $("#pre5a").val(parseFloat(total).toFixed(2));
}



var p6actividad = [
    { item: 'Iguales', color1: '#3FC0D7', color2: '#E9F7F9', texto: '¿En qué se parecen?' },
    { item: 'Diferentes', color1: '#F9B532', color2: '#FEF4DF', texto: '¿En qué se diferencian?' },
    { item: 'Conectados', color1: '#2A3D91', color2: '#E1DEEF', texto: '¿Qué relación tienen?' },
    { item: 'Compromiso', color1: '#7FCC27', color2: '#F0F9E2', texto: '¿Qué podrías decir o cambiar?' },
]
mezclar(p6actividad)
let p6items = p6actividad.map(element => {

    return `<div style="border:solid 1px ${element.color1};border-radius: 6px;padding: 2px;width: 300px;background-color:${element.color2} !important; -webkit-print-color-adjust: exact; print-color-adjust: exact;">
                    <div style="border-radius: 5px;text-align: center;padding:2px 5px;background-color:${element.color1} !important; -webkit-print-color-adjust: exact; print-color-adjust: exact;"><b class="txt-blanco">${element.item}</b></div>
                    ${element.texto}
                    <div class="p5campoTexto"></div>
                </div>`
}).join('')
$("#p6act").html(p6items)

// var coevaluacion = [
//     `¿Indagué las características de un animal diurno y uno nocturno de nuestra comunidad?`,
//     `¿Anotemos las características de sus cuerpos?`,
//     `¿Identifiquémos cómo sobreviven en cada fase del día?`
// ]

var itemsReflexiono = [`¿Cómo podría dar a conocer la importancia de los cuidados durante el embarazo en mi comunidad local?`]


function total() {
    pregunta1();
    pregunta2();
    pregunta5();
    var pre1a = parseFloat(document.getElementById("pre1a").value)
    var pre2a = parseFloat(document.getElementById("pre2a").value)
    var pre5a = parseFloat(document.getElementById("pre5a").value)
    cor = pre1a + pre2a + pre5a
    Calculo_nota();
    EndActivity()
}
