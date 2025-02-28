var cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

///// NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA
var ayudasActividad = [
    `En la actividad 1, 2, 3, 5, 6, 7 y 8. Escribe en los recuadros de texto.  <br>`,
    `En la actividad 4. Selecciona V o F.  <br>`,
]
var unidad = '2'
$("#numTema").html('5')
$("#temaActividad").html('Razones trigonométricas')
$("#n_pagina").html("76");
$(".numeroTemaColor").addClass(`unidad${unidad}numeroTema`)
$(".temaColor").addClass(`unidad${unidad}tema`)

/// FIN NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA


$(document).ready(function () {
    cajaUnir1_1(290, 500, 'none', 0, 0)
})

var arrayElemInicio = [
    '<div class="divinicio">tan (45°)</div>',
    '<div class="divinicio">cos (30°)</div>',
    '<div class="divinicio">sen (45°)</div>',
    '<div class="divinicio">tan (30°)</div>',
    '<div class="divinicio">cos (60°)</div>',
]
var arrayElemFin = [
    '<div class="divfin"><img src="img/i3_p76_act1.png" alt=""></div>',
    '<div class="divfin"><img src="img/i5_p76_act1.png" alt=""></div>',
    '<div class="divfin"><img src="img/i1_p76_act1.png" alt=""></div>',
    '<div class="divfin"><img src="img/i2_p76_act1.png" alt=""></div>',
    '<div class="divfin"><img src="img/i4_p76_act1.png" alt=""></div>',
]


function pregunta1() {
    let core = validarUnir1_1()
    let total = core * 1;
    $("#pre1a").val(parseFloat(total).toFixed(2));
}


let p2img = document.createElement('img');
p2img.src = 'img/i1_p76_act2.png';
p2img.alt = 'Triángulo rectángulo';
p2img.classList.add('img-responsive')
document.getElementById('p2img').appendChild(p2img);

// la primera opcion es la corecta
var p2act = [
    {
        enunciado: 'sen 45°',
        respuesta: ['<img src="img/i3_p76_act2.png">', '<img src="img/i2_p76_act2.png">', '<img src="img/i4_p76_act2.png">', '<img src="img/i5_p76_act2.png">'],
    },
    {
        enunciado: 'cos 45°',
        respuesta: ['<img src="img/i3_p76_act2.png">', '<img src="img/i2_p76_act2.png">', '<img src="img/i4_p76_act2.png">', '<img src="img/i5_p76_act2.png">'],
    },
    {
        enunciado: 'tan 45°',
        respuesta: ['<img src="img/i4_p76_act2.png">', '<img src="img/i3_p76_act2.png">', '<img src="img/i2_p76_act2.png">', '<img src="img/i5_p76_act2.png">'],
    },
];

literalesRespuestasSeleccionSimple(p2act, "#p2act", 2);



function pregunta2() {
    let core = validarLiteralesRespuestasSeleccionSimple(p2act, 2);
    let total = core * 1;
    $("#pre2a").val(parseFloat(total).toFixed(2));
}



var p3act = [
    { item: 'sen 30° = <select/> 60° = <img src="img/i4_p76_act1.png" alt="">', resp: 'cos', sel: 'p3sel1' },
    { item: '<select/> 30° = sen 60° = <img src="img/i5_p76_act1.png" alt="">', resp: 'cos', sel: 'p3sel1' },
    { item: 'sen 0° = cos <select/> =  0', resp: '90°', sel: 'p3sel2' },
    { item: 'cos 0° = <select/> =  1', resp: 'sen 90°', sel: 'p3sel3' },
]
mezclar(p3act)
let p3repuesta = []
let p3items = p3act.map((el, index) => {
    p3repuesta.push(el.resp)
    let data = el.item.replace('<select/>', `<select class="${el.sel} selectbox2" id="p3var${index}"></select>`)

    return `<div style="padding:5px;border:solid 1px silver;border-radius:5px;margin:10px">
                ${data}
            </div>`
})
$("#p3act").html(p3items.join(''))

let p3opciones1 = ['cos', 'sen', 'tan', 'cot', 'sec', 'csc']
let p3opciones2 = ['0°', '30°', '45°', '60°', '90°']
let p3opciones3 = ['sen 90°', 'cos 90°', 'tan 90°', 'sen 60°', 'cos 60°', 'tan 60°']
asignarOpcionesAselect(p3opciones1, ".p3sel1")
asignarOpcionesAselect(p3opciones2, ".p3sel2")
asignarOpcionesAselect(p3opciones3, ".p3sel3")




function pregunta3() {
    let core = validarExactas(p3repuesta, "#p3var")
    let total = core * 1;
    $("#pre3a").val(parseFloat(total).toFixed(2));
}





let p4opciones = [
    `<img src="img/i4_p76_act4.png" class="drag4 hvr-grow" alt="">`,
    `<img src="img/i5_p76_act4.png" class="drag4 hvr-grow" alt="">`,
    `<img src="img/i6_p76_act4.png" class="drag4 hvr-grow" alt="">`,
    `<img src="img/i7_p76_act4.png" class="drag4 hvr-grow" alt="">`,
    `<img src="img/i8_p76_act4.png" class="drag4 hvr-grow" alt="">`,
    `<img src="img/i9_p76_act4.png" class="drag4 hvr-grow" alt="">`,
    `<img src="img/i10_p76_act4.png" class="drag4 hvr-grow" alt="">`,
    `<img src="img/i11_p76_act4.png" class="drag4 hvr-grow" alt="">`,
    `<img src="img/i12_p76_act4.png" class="drag4 hvr-grow" alt="">`,
]
mezclar(p4opciones)
$("#p4opciones").html(p4opciones)


let p4actividad = [
    {
        img: '<img src="img/i1_p76_act4.png" alt="">',
        opciones: [
            { item: 'sen θ', id: '0' },
            { item: 'cos θ', id: '1' },
            { item: 'sec θ', id: '2' }
        ]
    },
    {
        img: '<img src="img/i2_p76_act4.png" alt="">',
        opciones: [
            { item: 'tan θ', id: '3' },
            { item: 'csc θ', id: '4' },
            { item: 'cot θ', id: '5' }
        ]
    }, {
        img: '<img src="img/i3_p76_act4.png" alt="">',
        opciones: [
            { item: 'sen θ', id: '6' },
            { item: 'csc θ', id: '7' },
            { item: 'tan θ', id: '8' }
        ]
    }
]
mezclar(p4actividad)
let p4items = p4actividad.map((el) => {
    let opciones = mezclar(el.opciones)
    return `<div class="p4_container">
							${el.img}
							<div>
								<div class="p4_boxs">
									<div>${opciones[0].item}</div>
									<div class="caja4" id="p4var${opciones[0].id}"></div>
								</div>
								<div class="p4_boxs">
									<div>${opciones[1].item}</div>
									<div class="caja4" id="p4var${opciones[1].id}"></div>
								</div>
								<div class="p4_boxs">
									<div>${opciones[2].item}</div>
									<div class="caja4" id="p4var${opciones[2].id}"></div>
								</div>
							</div>
						</div>`
}).join('')

$("#p4act").html(p4items)




function pregunta4() {
    let core = 0;
    let p4respuestas = ['4', '5', '6', '7', '8', '9', '10', '11', '12']
    for (let i = 0; i < p4respuestas.length; i++) {
        let srcData = $("#p4var" + i + " img").attr('src')
        console.log(srcData)
        if (srcData === `img/i${p4respuestas[i]}_p76_act4.png`) {
            core++
            $("#p4var" + i).addClass("bien")
        } else {
            $("#p4var" + i).addClass("mal")
        }
    }
    let total = (core / p4respuestas.length) * 1;
    $("#pre4a").val(parseFloat(total).toFixed(2));
}


var rutinaPensamiento = [
    //// los 3 por qué 
    {
        item: 'A mí', texto: '¿Por qué es importante que conozca sobre los cambios que experimento?<br><br><br>', colorTextoTitulo: '#1F64B9', colorFondoTitulo: '#99DEF8', row: '3'
    },
    {
        item: 'Persona', texto: '¿Por qué es importante para los adolescentes buscar una orientación adecuada en estos temas?<br><br>', colorTextoTitulo: '#5EC44E', colorFondoTitulo: '#CCE99D', row: '3'
    },
    {
        item: 'Mundo', texto: '¿Qué políticas mundiales se deberían implementar para fortalecer el cuidado físico, sexual y emocional en los adolescentes?', colorTextoTitulo: '#5632A5', colorFondoTitulo: '#D3B0DD', row: '3'
    },
]
$("#rutinaPensamiento").prepend(`<img src="img/los3porque.png" alt="">`)
rutinaPensamiento.forEach(element => {
    $("#rutinaPensamiento").append(`
        <div style="border-radius:5px;width:280px;border:solid 2px ${element.colorFondoTitulo}">
            <div style="border-radius:2px 0px 5px 0px;background-color: ${element.colorFondoTitulo} !important;print-color-adjust: exact;color: ${element.colorTextoTitulo} !important;print-color-adjust: exact;font-weight:bolder;width:120px;padding:2px 10px">
                     ${element.item}
            </div>
            <div style="padding: 5px;margin: 5px;background-color: white !important;print-color-adjust: exact;border-radius: 5px;">
                <div>
                    <div style="margin-bottom: 1px;">
                       ${element.texto}
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

var itemsReflexiono = [`¿Cómo podría hablar sobre el crecimiento personal que implica la adolescencia con mis compañeros?`]


function total() {
    pregunta1();
    pregunta2();
    pregunta3();
    pregunta4();
    var pre1a = parseFloat(document.getElementById("pre1a").value)
    var pre2a = parseFloat(document.getElementById("pre2a").value)
    var pre3a = parseFloat(document.getElementById("pre3a").value)
    var pre4a = parseFloat(document.getElementById("pre4a").value)
    cor = pre1a + pre2a + pre3a + pre4a
    // pre1a 
    Calculo_nota();
    EndActivity()
}
