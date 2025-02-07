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
$("#temaActividad").html('Fecundación y desarrollo embrionario')
$("#n_pagina").html("70");
$(".numeroTemaColor").addClass(`unidad${unidad}numeroTema`)
$(".temaColor").addClass(`unidad${unidad}tema`)

/// FIN NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA


$(document).ready(function () {

})

palabrasCrucigrama = ['1SEGMENTACIÓN', '2ESPERMATOGÉNESIS', '3CIGOTO', '4MORULA', '5GÁSTRULA', '6OVOGÉNESIS']


function pregunta1() {
    var respuestas = document.getElementsByClassName("respuestasCrucigrama");
    var soluciones = document.getElementsByClassName("solucionCrucigrama");
    var valor = valor_pregunta(respuestas);
    var nota = 0;
    for (var i = 0; i < respuestas.length; i++) {
        if (
            verificar_contenido(
                respuestas[i].value.toLowerCase(),
                soluciones[i].value.toLowerCase().split("*")
            )
        ) {
            respuestas[i].classList.add("bien");
            respuestas[i].classList.remove("mal");
            nota += valor;
        } else {
            respuestas[i].classList.add("mal");
            respuestas[i].classList.remove("bien");
        }
    }
    tpre1 = ((nota / 10) * 1);
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}


var p2act = [
    {
        img: '<img src="img/i1_p70_act2.jpg" alt="">', mes: 'Mes 7', texto: '¿Por qué razones el feto podría sobrevivir si nace en este mes?'
    },
    {
        img: '<img src="img/i2_p70_act2.jpg" alt="">', mes: 'Mes 5', texto: '¿Qué ocurriría si el feto no contara con una secreción grasosa como protección?'
    },
    {
        img: '<img src="img/i3_p70_act2.jpg" alt="">', mes: 'Mes 3', texto: 'En este mes el feto es capaz de orinar. ¿A dónde van estos desechos ? '
    },
    {
        img: '<img src="img/i4_p70_act2.jpg" alt="">', mes: 'Mes 9', texto: '¿Qué pasaría si el bebé no está encajado en el momento del  parto?'
    },
]
mezclar(p2act)
let p2items = p2act.map(el => {
    return `<div style="width:280px">
                <center>${el.img}</center>
                <div style="border:solid 2px #4275C3;border-radius: 5px;">
                    <div style="border:dotted 2px #38BCF0;text-align: center;background-color: #E5F6FD !important;print-color-adjust: exact;border-radius: 5px 5px 0px 0px;">
                        ${el.mes}
                    </div>
                    <div style="padding: 2px;width:100%;height:75px;margin:2px 5px">${el.texto}</div>
                    <textarea class="form-control noEnter" rows="4" placeholder="Escribir"></textarea>
                </div>
            </div>`
})
$("#p2act").html(p2items.join(''))




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
    pregunta4();
    pregunta5();
    var pre1a = parseFloat(document.getElementById("pre1a").value)
    var pre4a = parseFloat(document.getElementById("pre4a").value)
    var pre5a = parseFloat(document.getElementById("pre5a").value)
    cor = pre1a + pre4a + pre5a
    Calculo_nota();
    EndActivity()
}
