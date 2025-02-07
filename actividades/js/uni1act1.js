var cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

///// NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA
var ayudasActividad = [
    `En la actividad 1, 5 y 9. Escribe en cada recuadro de texto.  <br>`,
    `En la actividad 2. Escribe en cada recuadro de texto y selecciona la palabra recional e irracional.  <br>`,
    `En la actividad 3. Escribe el número que corresponde.  <br>`,
    `En la actividad 4. Selecciona V o F.  <br>`,
    `En la actividad 6, 10, 11 y 12. Usa las herramientas de dibujo.  <br>`,
    `En la actividad 7. Selecciona, arrastra y pega para completar la tabla.  <br>`,
    `En la actividad 8. Ingresa la letra y el resultado de resolver cada literal. Haz clic en el botón 'Agregar a la recta' para ubicar el punto en la recta numérica.  <br>`,
    `En la actividad 13. completa la respuesta.  <br>`,
]
var unidad = '1'
$("#numTema").html('1')
$("#temaActividad").html('Números reales')
$("#n_pagina").html("16");
$(".numeroTemaColor").addClass(`unidad${unidad}numeroTema`)
$(".temaColor").addClass(`unidad${unidad}tema`)

/// FIN NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA


$(document).ready(function () {

})


let p1actividad = ['Naturales', 'Enteros negativos', 'Enteros', 'Racionales', 'Irracionales', 'Reales']
let p1items = p1actividad.map(element => {
    let color = generarColorSuave()
    return `<tr>
        <td style="background-color:${color} !important; print-color-adjust: exact;width:150px">${element}</td>
        <td style="background-color:${color} !important; print-color-adjust: exact;"><textarea class="form-control no-redimensionar" rows="1" placeholder="Escribir"></textarea></td>
    </tr>`
}).join('')
$("#p1act").html(`<table class="table-bordered-1" style="max-width:700px">${p1items}</table>`)





let p2actividad = [
    { img: '<img src="img/i1_p16_act2.png">', resp: 'Irracional', resp2: '7,07106', control: '5' },
    { img: '<img src="img/i2_p16_act2.png">', resp: 'Racional', resp2: '16', control: '2' },
    { img: '<img src="img/i3_p16_act2.png">', resp: 'Irracional', resp2: '1,16960795', control: '5' },
    { img: '<img src="img/i4_p16_act2.png">', resp: 'Racional', resp2: '0,5', control: '3' },
]
mezclar(p2actividad)
let p2respuestas = []
let p2respuestas2 = []
let p2controlIndices = []
let p2items = p2actividad.map((element, index) => {
    let color1 = "#E4E0F0"
    let color2 = "#EBF6E4"
    let color3 = "#E5F6FD"
    p2respuestas.push(element.resp)
    p2respuestas2.push(element.resp2)
    p2controlIndices.push(element.control)
    return `<tr>
        <td style="background-color:${color1} !important; print-color-adjust: exact;width:150px">${element.img}</td>
        <td style="background-color:${color2} !important; print-color-adjust: exact;"><input class="textocorto" style="text-align:center" id="p2avar${index}"></td>
        <td style="background-color:${color3} !important; print-color-adjust: exact;"><select class="p2sel selectbox2" id="p2var${index}"></select></td>
    </tr>`
}).join('')


$("#p2act").html(`<table class="table-bordered-1" style="max-width:700px">
        <tr>
            <td style="background-color:#B2ACD7 !important; print-color-adjust: exact;"><b class="txt-morado">Raíces</b></td>
            <td style="background-color:#C5E5B4 !important; print-color-adjust: exact;"><b class="txt-verde">Resultado</b></td>
            <td style="background-color:#B2E6FA !important; print-color-adjust: exact;"><b class="txt-azul">Q O Q'</b></td>
        </tr>
        ${p2items}
    </table>`)


let p2opciones = ['Irracional', 'Racional']
asignarOpcionesAselect(p2opciones, ".p2sel")



function pregunta2() {
    let core = validarExactas(p2respuestas, "#p2var")
    let core2 = 0
    for (let i = 0; i < p2respuestas2.length; i++) {
        let datoFormateadoConComa = procesarTexto($("#p2avar" + i).val()).replaceAll('.', ',');
        // console.log(datoFormateadoConComa)
        let datoCorrecto = procesarTexto(p2respuestas2[i])
        // console.log(datoCorrecto)
        if (datoFormateadoConComa != "" && datoFormateadoConComa.length >= p2controlIndices[i] && datoCorrecto.includes(datoFormateadoConComa)) {
            // console.log('si contiene')
            core2++
            $("#p2avar" + i).addClass('bien')
        } else {
            // console.log("no coneitne")
            $("#p2avar" + i).addClass('mal')
        }
    }
    let total = ((core + core2) / 5) * 1
    $("#pre2a").val(parseFloat(total).toFixed(2));
}


let p3actividad = [
    { enunciado: 'Su valor absoluto es 7 y está a la izquierda de 0.', respuesta: '-7' },
    { enunciado: 'Su valor absoluto es 5 y está situado entre 0 y 10.', respuesta: '5' },
    { enunciado: 'Su valor absoluto es 7 y está situado a la izquierda de -2.', respuesta: '-7' },
    { enunciado: 'Su valor absoluto es 15 y está situado a la derecha de 4.', respuesta: '15' },
]
mezclar(p3actividad)
let p3respuestas = []

let p3items = p3actividad.map((element, index) => {
    p3respuestas.push(element.respuesta)
    let color = generarColorSuave()
    return `<div style="background-color:${color} !important; print-color-adjust: exact;" class="p3container">
        <div><b class="txt-azul">${letrasLista[index]}</b> ${element.enunciado}</div>
        <div><input class="caracter2" id="p3var${index}"></div>
    </div>`
}).join('')

$("#p3act").html(p3items)

function pregunta3() {
    let core = validarExactas(p3respuestas, "#p3var")
    let total = core * 1
    $("#pre3a").val(parseFloat(total).toFixed(2));
}


var p4act = [
    { enunciado: `Todos los números de ℤ pertenecen también a ℕ y ℚ'`, correcta: 'F' },
    { enunciado: `–0,75 y 745 son elementos de los números ℚ`, correcta: 'V' },
    { enunciado: `El conjunto de los números ℝ es ℚ u ℚ'.`, correcta: 'V' },
    { enunciado: `Los números ℚ' pueden expresarse como fracciones.`, correcta: 'F' },
]

let p4respuestas = enunciadoSelectOpcion(p4act, "#p4act", '4', 'vof')
// console.log(p4respuestas)

function pregunta4() {
    let core = validarExactas(p4respuestas, '#p4var')
    let total = core * 1
    $("#pre4a").val(parseFloat(total).toFixed(2));
}


let p5preguntas = [
    'La estatura promedio de los ecuatorianos es menor que 1, 85 m y mayor que 1, 65 m.',
    'Un vehículo puede circular en una carretera solo si su velocidad está entre 40 km / h y 100 km / h.',
    `Un chef recomienda que la cantidad de azúcar en un pastel debe estar entre  <div class="fraccionCaja"><span class="numeradorCaja">1</span><span class="denominadorCaja">2</span></div> taza y <div class="fraccionCaja"><span class="numeradorCaja">3</span><span class="denominadorCaja">5</span></div>  de taza.`,
]
preguntasArray(p5preguntas, "p5act")




let p7opciones = [
    '<img src="img/i1_p16_act7.png" data-valor="0" class="drag7 hvr-grow">',
    '<img src="img/i4_p16_act7.png" data-valor="1" class="drag7 hvr-grow">',
    '<img src="img/i5_p16_act7.png" data-valor="2" class="drag7 hvr-grow">',
    '<img src="img/i8_p16_act7.png" data-valor="3" class="drag7 hvr-grow">',
    '<img src="img/i9_p16_act7.png" data-valor="4" class="drag7 hvr-grow">',
]
mezclar(p7opciones)
$("#p7opciones").html(p7opciones)



let p7actividad = [
    `<tr><td><div class="caja7" id="p7var0"></div></td><td><img src="img/i2_p16_act7.png" alt=""></td><td><select class="p7sel selectbox2" id="p7avar0"></select></td></tr>`,
    `<tr><td><img src="img/i3_p16_act7.png" alt=""></td><td><div class="caja7" id="p7var1"></div></td><td><select class="p7sel selectbox2" id="p7avar1"></select></td></tr>`,
    `<tr><td><div class="caja7" id="p7var2"></div></td><td><img src="img/i6_p16_act7.png" alt=""></td><td><select class="p7sel selectbox2" id="p7avar2"></select></td></tr>`,
    `<tr><td><img src="img/i7_p16_act7.png" alt=""></td><td><div class="caja7" id="p7var3"></div></td><td><select class="p7sel selectbox2" id="p7avar3"></select></td></tr>`,
    `<tr><td><div class="caja7" id="p7var4"></div></td><td><img src="img/i10_p16_act7.png" alt=""></td><td><select class="p7sel selectbox2" id="p7avar4"></select></td></tr>`,
]
mezclar(p7actividad)

$("#p7act").html(`
    <table class="table-bordered-1" style="width: 550px;">
        <tr>
            <td class="bg-rojosuave"><b class="txt-rosado">Notación en intervalos</b></td>
            <td class="bg-amarillosuave"><b class="txt-naranja">Notación en forma de conjuntos</b>
            </td>
            <td class="bg-verdesuave"><b class="txt-verdeoscuro">Nombre del intervalo</b></td>
        </tr>
        ${p7actividad.join(' ')}
    </table>
    `)


let p7opcionesSel = ['Cerrado por la derecha', 'Cerrado a la izquierda, abierto por la derecha', 'Intervalo abierto', 'Intervalo cerrado']
asignarOpcionesAselect(p7opcionesSel, ".p7sel")


function pregunta7() {
    let core = 0;
    for (let i = 0; i < p7opciones.length; i++) {
        let valor = $("#p7var" + i + " img").attr("data-valor")
        if (valor != undefined && valor == i) {
            $("#p7var" + i).addClass('bien')
            core++
        } else {
            $("#p7var" + i).addClass('mal')
        }
    }
    let core3 = Math.max(core / 5, 0)
    let core2 = validarExactas(['Cerrado por la derecha', 'Cerrado a la izquierda, abierto por la derecha', 'Intervalo abierto', 'Intervalo abierto', 'Intervalo abierto'], "#p7avar")
    let total = ((core3 + core2) / 2) * 1
    $("#pre7a").val(parseFloat(total).toFixed(2));
}


let p8opciones = ['<img src="img/i1_p16_act8.png">', '<img src="img/i2_p16_act8.png">', '<img src="img/i3_p16_act8.png">', '<img src="img/i4_p16_act8.png">', '<img src="img/i5_p16_act8.png">', '<img src="img/i6_p16_act8.png">', '<img src="img/i7_p16_act8.png">']
let p8items = p8opciones.map(element => {
    return `<div class="p8img">${element}</div>`
})
$("#p8opciones").html(p8items)


let p8correctas = [
    { letra: 'A', valor: '1.37' },
    { letra: 'B', valor: '2.71' },
    { letra: 'C', valor: '-3.23' },
    { letra: 'D', valor: '-4' },
    { letra: 'E', valor: '0.06' },
    { letra: 'F', valor: '4.39' },
    { letra: 'G', valor: '1' },
]
let p8respuestas = []



function pregunta8() {
    let core = 0;
    // console.log(p8respuestas)
    for (let index = 0; index < p8correctas.length; index++) {
        let letra = p8correctas[index].letra;
        let valor = p8correctas[index].valor;
        // console.log("Letra:", letra);

        // Usamos find para buscar el objeto que contenga la letra
        let resultado = p8respuestas.find(item => item.letra === letra);

        // Verificamos si se ha encontrado un resultado
        if (resultado) {
            // console.log('Resultado encontrado:', resultado);

            // Imprimir valores para comparar
            // console.log("Valor en p8correctas:", valor);
            // console.log("Valor en resultado:", resultado.valor);

            // Verificamos si `valor` contiene `resultado.valor`
            if (valor.includes(resultado.valor)) {
                // console.log("Sí tiene el valor.");
                core++
            } else {
                // console.log("No tiene el valor.");
            }
        } else {
            // console.log("No se encontró el resultado para la letra:", letra);
        }
    }
    let total = (core / 7) * 1
    $("#pre8a").val(parseFloat(total).toFixed(2));
}



var rutinaPensamiento = [
    //// palabra, idea, frase
    {
        item: 'Palabra', frase: 'Define las palabras. <br> Intervalo e infinito', color1: '#41B23B', color2: '#CAEEFC', row: '5'
    },
    {
        item: 'Idea', frase: 'Escribe una idea sobre en qué podrían aplicarse los dos conceptos anteriores más allá de las matemáticas. ', color1: '#1B62B7', color2: '#82A2CA', row: '3'
    },
    {
        item: 'Frase', frase: 'Escribe una frase que ayude a recordar los intervalos infinitos y el uso en tu vida.', color1: '#D11F27', color2: '#FBE7D5', row: '4'
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



function pregunta13() {
    let core = validarExactas(['96'], "#p13var")
    let total = (core / 1) * 1
    $("#pre13a").val(parseFloat(total).toFixed(2));
}


// var coevaluacion = [
//     `¿Inventé con mis compañeros una historia para un cuento?`,
//     `¿Pude crear personajes y un lugar para el desarrollo de un cuento?`,
//     `¿Expresé mis ideas y respeté las opiniones de mis compañeros?`,
//     `¿Apoyé a mi equipo durante todo el trabajo?`
// ]

var itemsReflexiono = [`¿Cómo puedo aplicar los intervalos en el manejo del tiempo que destino a mis actividades diarias?`]


function total() {
    pregunta2();
    pregunta3();
    pregunta4();
    pregunta7();
    pregunta8();
    pregunta13();
    var pre2a = parseFloat(document.getElementById("pre2a").value)
    var pre3a = parseFloat(document.getElementById("pre3a").value)
    var pre4a = parseFloat(document.getElementById("pre4a").value)
    var pre7a = parseFloat(document.getElementById("pre7a").value)
    var pre8a = parseFloat(document.getElementById("pre8a").value)
    var pre13a = parseFloat(document.getElementById("pre13a").value)
    cor = ((pre2a + pre3a + pre4a + pre7a + pre8a + pre13a) / 13) * 10
    Calculo_nota();
    EndActivity()
}
