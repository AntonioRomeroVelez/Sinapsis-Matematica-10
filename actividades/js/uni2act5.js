var cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

///// NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA
var ayudasActividad = [
    `En la actividad 1. Selecciona el círculo amarillo luego selecciona el círculo azul para trazar una línea.  <br>`,
    `En la actividad 2. Selecciona para encerrar la opción correcta para cada item.  <br>`,
    `En la actividad 3. Selecciona y completa correctamente.  <br>`,
    `En la actividad 4. Selecciona, arrastra, pega y completa con el valor que corresponde.  <br>`,
    `En la actividad 5. Usa las herramientas de dibujo.  <br>`,
    `En la actividad 6. Escribe en los recudros de texto.  <br>`,
    `En la actividad 7 y 8. Usa la pizarra para realizar el ejercicio y completa la respuesta correctamente.  <br>`,
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
    let total = core * 1.25;
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
    let total = core * 1.25;
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
    let total = core * 1.25;
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
        // console.log(srcData)
        if (srcData === `img/i${p4respuestas[i]}_p76_act4.png`) {
            core++
            $("#p4var" + i).addClass("bien")
        } else {
            $("#p4var" + i).addClass("mal")
        }
    }
    let total = (core / p4respuestas.length) * 1.25;
    $("#pre4a").val(parseFloat(total).toFixed(2));
}


let p5actividad = ['<img src="img/i1_p77_act5.png" alt="">', '<img src="img/i2_p77_act5.png" alt="">', '<img src="img/i3_p77_act5.png" alt="">']
mezclar(p5actividad)
let p5items = p5actividad.map((el, index) => {

    return `<div class="p5_container">
        <div style="padding:5px 10px">
            <b class="txt-azul">${letrasLista[index]}</b>
            ${el}
        </div>
        <div class="my-drawing" style="width:450px;"></div>
    </div>`
})

$("#p5act").html(p5items.join(''))


var rutinaPensamiento = [
    //// antes pensaba, ahora pienso  
    { img: '<img src="img/icoAntesPensaba.png">', frase: '¿Qué era una razón trigonométrica?', borderColor: '#7AD1E0', row: '5' },
    { img: '<img src="img/icoAhoraPienso.png">', frase: '¿En dónde puedo aplicar las razones trigonométricas?', borderColor: '#8BCB40', row: '5' },
]
rutinaPensamiento.forEach(element => {
    $("#rutinaPensamiento").append(`
        <div style="position: relative;border-radius:5px;width:280px;margin:20px 5px;border:solid 2px ${element.borderColor}">
            <div style="position: absolute;top:-35px;left:-7px;display: flex;align-items: end;justify-content: center;">
                ${element.img}
            </div>
            <div style="padding: 5px;margin: 5px;margin-top: 25px;background-color: white !important;print-color-adjust: exact;border-radius: 5px;">
                <div>
                    <div style="margin-bottom: 5px;">
                       ${element.frase}
                    </div>
                    <textarea class="form-control " placeholder="Escribir" rows="${element.row}"></textarea>
                </div>
            </div>
        </div>
    </div>`)
})


function replace_punto_por_coma(text) {
    let texto = String(text.trim()).replace(/\./g, ',');
    return texto;
}


function pregunta7() {
    let core = 0;
    let p7respuestas = ['31,80']
    for (let i = 0; i < p7respuestas.length; i++) {
        let dato = replace_punto_por_coma($('#p7var' + i).val())
        if (dato == p7respuestas[i]) {
            core++
            $('#p7var' + i).addClass('bien');
        } else {
            $('#p7var' + i).addClass('mal');
        }
    }
    let total = (core / 1) * 1.25;
    $("#pre7a").val(parseFloat(total).toFixed(2));
}




function pregunta8() {
    let core = 0;
    let p8respuestas = ['11,20']
    for (let i = 0; i < p8respuestas.length; i++) {
        let dato = replace_punto_por_coma($('#p8var' + i).val())
        if (dato == p8respuestas[i]) {
            core++
            $('#p8var' + i).addClass('bien');
        } else {
            $('#p8var' + i).addClass('mal');
        }
    }
    let total = (core / 1) * 1.25;
    $("#pre8a").val(parseFloat(total).toFixed(2));
}


// var coevaluacion = [
//     `¿Indagué las características de un animal diurno y uno nocturno de nuestra comunidad?`,
//     `¿Anotemos las características de sus cuerpos?`,
//     `¿Identifiquémos cómo sobreviven en cada fase del día?`
// ]

var itemsReflexiono = [`¿Qué estrategias puedo emplear para recordar las fórmulas trigonométricas?`]


function total() {
    pregunta1();
    pregunta2();
    pregunta3();
    pregunta4();
    pregunta7();
    pregunta8();
    var pre1a = parseFloat(document.getElementById("pre1a").value)
    var pre2a = parseFloat(document.getElementById("pre2a").value)
    var pre3a = parseFloat(document.getElementById("pre3a").value)
    var pre4a = parseFloat(document.getElementById("pre4a").value)
    var pre7a = parseFloat(document.getElementById("pre7a").value)
    var pre8a = parseFloat(document.getElementById("pre8a").value)
    cor = pre1a + pre2a + pre3a + pre4a + pre7a + pre8a
    Calculo_nota();
    EndActivity()
}
