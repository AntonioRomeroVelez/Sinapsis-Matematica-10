var cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

///// NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA
var ayudasActividad = [
    `En la actividad 1, 2, 3, 4, 6, 7, 8, 9 y 10. Usa la pizarra para realizar el ejercicio y completa la respuesta correctamente.  <br>`,
    `En la actividad 5. Selecciona para pintar la opción correcta.  <br>`,
]
var unidad = '2'
$("#numTema").html('6')
$("#temaActividad").html('Solución de triángulos rectángulos')
$("#n_pagina").html("80");
$(".numeroTemaColor").addClass(`unidad${unidad}numeroTema`)
$(".temaColor").addClass(`unidad${unidad}tema`)

/// FIN NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA


$(document).ready(function () {

})


function replace_punto_por_coma(text) {
    let texto = String(text.trim()).replace(/\./g, ',');
    return texto;
}





/// crear pregunta  1 
let p1img = document.createElement('img')
p1img.src = 'img/i1_p80_act1.png'
p1img.alt = 'Triángulo rectángulo'
p1img.classList.add('img-responsive')
document.getElementById('p1act').appendChild(p1img)

let pizarra1 = document.createElement('div')
pizarra1.setAttribute('id', 'pizarra10');
pizarra1.classList.add('pizarra-matematica')
document.getElementById('p1act').appendChild(pizarra1)



function pregunta1() {
    let core = 0;
    let p1respuestas = ['10,89', '50', '8,34']
    for (let i = 0; i < p1respuestas.length; i++) {
        let dato = replace_punto_por_coma($('#p1var' + i).val())
        if (dato == p1respuestas[i]) {
            core++
            $('#p1var' + i).addClass('bien');
        } else {
            $('#p1var' + i).addClass('mal');
        }
    }
    let total = (core / 3) * 1;
    $("#pre1a").val(parseFloat(total).toFixed(2));
}


/// pregunta 2
let img2 = document.createElement('img')
img2.src = 'img/i1_p80_act2.png'
img2.alt = 'Triángulo rectángulo'
img2.classList.add('img-responsive')
document.getElementById('p2act').appendChild(img2)

let pizarra2 = document.createElement('div')
pizarra2.setAttribute('id', 'pizarra20');
pizarra2.classList.add('pizarra-matematica')
document.getElementById('p2act').appendChild(pizarra2)

function pregunta2() {
    let core = 0;
    let p2respuestas = ['31,24', '50', '40']
    for (let i = 0; i < p2respuestas.length; i++) {
        let dato = replace_punto_por_coma($('#p2var' + i).val())
        if (dato == p2respuestas[i]) {
            core++
            $('#p2var' + i).addClass('bien');
        } else {
            $('#p2var' + i).addClass('mal');
        }
    }
    let total = (core / 3) * 1;
    $("#pre2a").val(parseFloat(total).toFixed(2));
}





/// pregunta 3
let img3 = document.createElement('img')
img3.src = 'img/i1_p80_act3.png'
img3.alt = 'Triángulo rectángulo'
img3.classList.add('img-responsive')
document.getElementById('p3act').appendChild(img3)

let pizarra3 = document.createElement('div')
pizarra3.setAttribute('id', 'pizarra30');
pizarra3.classList.add('pizarra-matematica')
document.getElementById('p3act').appendChild(pizarra3)


function pregunta3() {
    let core = 0;
    let p3respuestas = ['90', '20']
    for (let i = 0; i < p3respuestas.length; i++) {
        let dato = replace_punto_por_coma($('#p3var' + i).val())
        if (dato == p3respuestas[i]) {
            core++
            $('#p3var' + i).addClass('bien');
        } else {
            $('#p3var' + i).addClass('mal');
        }
    }
    let total = (core / 2) * 1;
    $("#pre3a").val(parseFloat(total).toFixed(2));
}


/// pregunta 4
let img4 = document.createElement('img')
img4.src = 'img/i1_p80_act4.png'
img4.alt = 'Triángulo rectángulo'
img4.classList.add('img-responsive')
document.getElementById('p4act').appendChild(img4)

let pizarra4 = document.createElement('div')
pizarra4.setAttribute('id', 'pizarra40');
pizarra4.classList.add('pizarra-matematica')
document.getElementById('p4act').appendChild(pizarra4)


function pregunta4() {
    let core = 0;
    let p4respuestas = ['60', '30', '26', '52']
    for (let i = 0; i < p4respuestas.length; i++) {
        let dato = $('#p4var' + i).val()
        if (dato == p4respuestas[i]) {
            core++
            $('#p4var' + i).addClass('bien');
        } else {
            $('#p4var' + i).addClass('mal');
        }
    }
    let total = (core / 4) * 1;
    $("#pre4a").val(parseFloat(total).toFixed(2));
}




var p5opciones = [
    { title: '<img src="img/i2_p80_act5.png">', resp: '1', },
    { title: '<img src="img/i3_p80_act5.png">', resp: '0', },
    { title: '<img src="img/i4_p80_act5.png">', resp: '1', },
    { title: '<img src="img/i5_p80_act5.png">', resp: '1', },
];

SelSimple(p5opciones, "#p5act", 5)

function pregunta5() {
    let core = validarSelSimple(5);
    let total = (core / 1) * 0.5;
    $("#pre5a").val(parseFloat(total).toFixed(2));
}



/// pregunta 6
let p6actividad = ['<img src="img/i1_p80_act6.png" class="img-responsive" alt="">', '<img src="img/i2_p80_act6.png" class="img-responsive" alt="" style="margin: 18px 0px;">']
mezclar(p6actividad)
let p6items = p6actividad.map(function (element, index) {
    return `<div class="p6_container">
				${element}
				<div class="pizarra-matematica" id="pizarra6${index}"></div>
			</div>`
})

$("#p6act").html(p6items.join(''))



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

let p7actividad = [
    { item: 'sen(B)', valor1: '3', valor2: '5' },
    { item: 'cos(B)', valor1: '4', valor2: '5' },
    { item: 'tan(B)', valor1: '3', valor2: '4' },

    { item: 'sen(C)', valor1: '4', valor2: '5' },
    { item: 'cos(C)', valor1: '3', valor2: '5' },
    { item: 'tan(C)', valor1: '4', valor2: '3' },
]
let p7act1 = [], p7act2 = []
p7actividad.forEach((element, index) => {
    if (index <= 2) {
        p7act1.push(`<table>
                    <tr>
                        <td rowspan="2">${element.item}</td>
                        <td rowspan="2"> &nbsp;= &nbsp;</td>
                        <td style="border-bottom: 2px solid black !important;">
                            <input autocomplete="off" maxlength="1" style="border:none;" class="input-fraccion p7var" data-info="${element.valor1}">
                        </td>
                    </tr>
                    <tr>
                        <td style="border-top: 2px solid black !important;">
                            <input autocomplete="off" maxlength="1" style="border:none;" class="input-fraccion p7var" data-info="${element.valor2}">
                        </td>
                    </tr>
				</table>`)
    } else {
        p7act2.push(`<table>
                    <tr>
                        <td rowspan="2">${element.item}</td>
                        <td rowspan="2"> &nbsp;= &nbsp;</td>
                        <td style="border-bottom: 2px solid black !important;">
                            <input autocomplete="off" maxlength="1" style="border:none;" class="input-fraccion p7var" data-info="${element.valor1}">
                        </td>
                    </tr>
                    <tr>
                        <td style="border-top: 2px solid black !important;">
                            <input autocomplete="off" maxlength="1" style="border:none;" class="input-fraccion p7var" data-info="${element.valor2}">
                        </td>
                    </tr>
				</table>`)
    }
});



$("#p7act1").html(p7act1.join(''))
$("#p7act2").html(p7act2.join(''))


function pregunta7() {
    let core = validarCajaDataInfo('p7var')
    let total = (core / 1) * 1;
    $("#pre7a").val(parseFloat(total).toFixed(2));
}




function pregunta8() {
    let core = 0;
    let p8respuestas = ['80,07']
    for (let i = 0; i < p8respuestas.length; i++) {
        let dato = replace_punto_por_coma($('#p8var' + i).val())
        if (dato == p8respuestas[i]) {
            core++
            $('#p8var' + i).addClass('bien');
        } else {
            $('#p8var' + i).addClass('mal');
        }
    }
    let total = (core / 1) * 1;
    $("#pre8a").val(parseFloat(total).toFixed(2));
}


function pregunta9() {
    let core = 0;
    let p9respuestas = ['35,70']
    for (let i = 0; i < p9respuestas.length; i++) {
        let dato = replace_punto_por_coma($('#p9var' + i).val())
        if (dato == p9respuestas[i]) {
            core++
            $('#p9var' + i).addClass('bien');
        } else {
            $('#p9var' + i).addClass('mal');
        }
    }
    let total = (core / 1) * 1;
    $("#pre9a").val(parseFloat(total).toFixed(2));
}

function pregunta10() {
    let core = 0;
    let p10respuestas = ['5,20']
    for (let i = 0; i < p10respuestas.length; i++) {
        let dato = replace_punto_por_coma($('#p10var' + i).val())
        if (dato == p10respuestas[i]) {
            core++
            $('#p10var' + i).addClass('bien');
        } else {
            $('#p10var' + i).addClass('mal');
        }
    }
    let total = (core / 1) * 1;
    $("#pre10a").val(parseFloat(total).toFixed(2));
}


let trabajo_compartido = ['<img src="img/i1_p81_act12.png" alt="">', '<img src="img/i2_p81_act12.png" alt="">', '<img src="img/i3_p81_act12.png" alt="">', '<img src="img/i4_p81_act12.png" alt="">']
mezclar(trabajo_compartido)
let trabajoItems = trabajo_compartido.map((element, i) => {
    return `<div class="div-trabajo-compartido">
							${element}
							<div>α = <input class="caracter5 respuestaInput">°</div>
							<div>β = <input class="caracter5 respuestaInput">°</div>
						</div>`
}).join('')

$("#trabajoCompartido").html(trabajoItems)

// var coevaluacion = [
//     `¿Indagué las características de un animal diurno y uno nocturno de nuestra comunidad?`,
//     `¿Anotemos las características de sus cuerpos?`,
//     `¿Identifiquémos cómo sobreviven en cada fase del día?`
// ]

var itemsReflexiono = [`¿Cómo puedo comprender de mejor manera el mundo que me rodea a través de las matemáticas?`]


function total() {
    pregunta1();
    pregunta2();
    pregunta3();
    pregunta4();
    pregunta5();
    pregunta7();
    pregunta8();
    pregunta9();
    pregunta10();
    var pre1a = parseFloat(document.getElementById("pre1a").value)
    var pre2a = parseFloat(document.getElementById("pre2a").value)
    var pre3a = parseFloat(document.getElementById("pre3a").value)
    var pre4a = parseFloat(document.getElementById("pre4a").value)
    var pre5a = parseFloat(document.getElementById("pre5a").value)
    var pre7a = parseFloat(document.getElementById("pre7a").value)
    var pre8a = parseFloat(document.getElementById("pre8a").value)
    var pre9a = parseFloat(document.getElementById("pre9a").value)
    var pre10a = parseFloat(document.getElementById("pre10a").value)
    cor = pre1a + pre2a + pre3a + pre4a + pre5a + pre7a + pre8a + pre9a + pre10a
    Calculo_nota();
    EndActivity()
}
