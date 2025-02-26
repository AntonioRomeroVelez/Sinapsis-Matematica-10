var cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

///// NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA
var ayudasActividad = [
    `En la actividad 1 y 4. Usa la pizarra para realizar cada ejercicio.  <br>`,
    `En la actividad 2. Selecciona V o F.  <br>`,
    `En la actividad 3. Usa la pizarra para realizar cada ejercicio, selecciona el recuadro para marcar con una X.  <br>`,
    `En la actividad 5. Selecciona, arrastrra y pega en el lugar que corresponda.  <br>`,
    `En la actividad 6. Selecciona y completa correctamente.  <br>`,
    `En la actividad 7, 8, 9, 10, 11 y 12. Usa la pizarra para realizar cada ejercicio y completa la respuesta correcta  <br>`,
]
var unidad = '2'
$("#numTema").html('1')
$("#temaActividad").html('Radicación')
$("#n_pagina").html("54");
$(".numeroTemaColor").addClass(`unidad${unidad}numeroTema`)
$(".temaColor").addClass(`unidad${unidad}tema`)

/// FIN NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA


$(document).ready(function () {

})


var p1actividad = ['1', '2', '3', '4',]
mezclar(p1actividad)
let p1items = p1actividad.map((element, index) => {

    return `<div style="border:solid 1px silver;border-radius: 6px;padding: 5px;width: 455px;">
                    <div style="border-radius: 5px;"><b class="txt-azul">${letrasLista[index]}</b> <img src="img/i${element}_p54_act1.png" alt="radical  ${index + 1}"></div>
                    <div id="pizarra1${index}" style="width:440px;height:250px;"></div>
                </div> `
}).join('')
$("#p1act").html(p1items)



let p2actividad = [
    { img1: '1', img2: '2', img3: '3', marca: 'F' },
    { img1: '4', img2: '5', img3: '6', marca: 'V' },
    { img1: '7', img2: '8', img3: '9', marca: 'F' },
    { img1: '10', img2: '11', img3: '12', marca: 'V' },
    { img1: '13', img2: '14', img3: '15', marca: 'V' },
]
mezclar(p2actividad)
let p2respuestas = []

let p2items = p2actividad.map((p, i) => {
    p2respuestas.push(p.marca)
    return `<tr>
                <td><img src="img/i${p.img1}_p54_act2.png" alt=""></td>
                <td><img src="img/i${p.img2}_p54_act2.png" alt=""></td>
                <td><img src="img/i${p.img3}_p54_act2.png" alt=""></td>
                <td><select class="p2sel selectbox1" id="p2var${i}"></select></td>
            </tr>`
}).join('')
$("#p2act").html(`<table class="table-bordered-1" style="width:500px">
                    <tr>
                        <td><b class="txt-verdeoscuro">Raíz 1</b></td>
                        <td><b class="txt-verdeoscuro">Raíz 2</b></td>
                        <td><b class="txt-verdeoscuro">Raíz 3</b></td>
                        <td><b class="txt-verdeoscuro">Marca</b></td>
                    </tr>
                    ${p2items}
                </table>`)

let p2opciones = ['V', 'F']
asignarOpcionesAselectCorto(p2opciones, '.p2sel')

function pregunta2() {
    let core = validarExactas(p2respuestas, "#p2var")
    let total = core * 1;
    $("#pre2a").val(parseFloat(total).toFixed(2));
}



let p3actividad = [
    { img: '<img src="img/i1_p54_act3.png" alt="">', respuesta: 'no' },
    { img: '<img src="img/i2_p54_act3.png" alt="">', respuesta: 'si' },
    { img: '<img src="img/i3_p54_act3.png" alt="">', respuesta: 'no' },
    { img: '<img src="img/i4_p54_act3.png" alt="">', respuesta: 'si' },
];
mezclar(p3actividad);
let p3respuestas = [];

let p3items = p3actividad.map((element, index) => {
    p3respuestas.push(element.respuesta);
    let color = generarColorPastel();
    let data = element.respuesta === 'si' ? "info-c" : "info-i";
    return `<div style="border:solid 1px silver;border-radius: 6px;padding: 5px;width: 353px;">
                <div class="p3containerDiv">
                    <div>
                        <b class="txt-azul">${letrasLista[index]}</b>
                        ${element.img}
                    </div>
                    <div class="p3caja" data-validate="${data}" style="border: solid 3px ${color}" data-anijs="if: click, do: bounceIn animated"></div>
                </div>
                <div id="pizarra3${index}" style="width:343px;height:250px;"></div>
            </div>`;
}).join('');

document.querySelector("#p3act").innerHTML = p3items;

document.querySelectorAll(".p3caja").forEach(caja => {
    caja.addEventListener("click", function () {
        this.textContent = this.textContent === '' ? '✓' : '';
    });
});

function pregunta3() {
    let core = 0;
    let controlp3 = 0;
    let cajas = document.querySelectorAll('.p3caja');
    cajas.forEach(caja => {
        let valor = caja.textContent;
        if (valor === '✓') {
            controlp3++;
            let dato = caja.getAttribute('data-validate');
            if (dato === 'info-c') {
                core++;
                caja.classList.add('bien3');
            } else {
                caja.classList.add('mal3'); core--
            }
        }
    });
    if (controlp3 === 0 || controlp3 === cajas.length) {
        cajas.forEach(caja => {
            caja.classList.remove('bien3');
            caja.classList.add('mal3');
        });
        core = 0;
    }
    let total = Math.max(((core / 2) * 1), 0)
    $("#pre3a").val(parseFloat(total).toFixed(2));
}





var p4actividad = ['1', '2', '3', '4',]
mezclar(p4actividad)
let p4items = p4actividad.map((element, index) => {

    return `<div style="border:solid 1px silver;border-radius: 6px;padding: 5px;width: 455px;">
                    <div style="border-radius: 5px;"><b class="txt-azul">${letrasLista[index]}</b> <img src="img/i${element}_p54_act4.png" alt="raiz  ${index + 1}"></div>
                    <div id="pizarra4${index}" style="width:440px;height:250px;"></div>
                </div> `
}).join('')
$("#p4act").html(p4items)


let p5opciones = [
    '<img src="img/i5_p54_act5.png" class="drag5 hvr-grow" data-validate="5" alt="">',
    '<img src="img/i6_p54_act5.png" class="drag5 hvr-grow" data-validate="no" alt="">',
    '<img src="img/i7_p54_act5.png" class="drag5 hvr-grow" data-validate="15" alt="">',
    '<img src="img/i8_p54_act5.png" class="drag5 hvr-grow" data-validate="34" alt="">',
    '<img src="img/i9_p54_act5.png" class="drag5 hvr-grow" data-validate="47" alt="">',
]
mezclar(p5opciones)
$("#p5opciones").html(p5opciones)


let p5actividad = [
    { img1: '625', img2: '4', resp: '5' },
    { img1: '-1,331', img2: '2', resp: 'no' },
    { img1: '<img src="img/i1_p54_act5.png" alt="">', img2: '3', resp: '15' },
    { img1: '<img src="img/i2_p54_act5.png" alt="">', img2: '5', resp: '34' },
    { img1: '<img src="img/i3_p54_act5.png" alt="">', img2: '4', resp: 'no' },
    { img1: '<img src="img/i4_p54_act5.png" alt="">', img2: '4', resp: '47' },
]
mezclar(p5actividad)
let p5respuestas = []

let p5items = p5actividad.map((p, i) => {
    p5respuestas.push(p.resp)
    return `<tr>
                <td>${p.img1}</td>
                <td>${p.img2}</td>
                <td><div class="pintar5" id="p5var${i}"></div></td>
            </tr>`
}).join('')
$("#p5act").html(`<table class="table-bordered-1" style="width:500px">
                    <tr>
                        <td style="width:120px;"><b class="txt-verdeoscuro">Radicanco</b></td>
                        <td style="width:120px;"><b class="txt-verdeoscuro">Índice del radical</b></td>
                        <td style="width:81px;"><b class="txt-verdeoscuro">Raíz</b></td>
                    </tr>
                    ${p5items}
                </table>`)



function pregunta5() {
    let core = 0
    for (let i = 0; i < p5respuestas.length; i++) {
        let data = $("#p5var" + i + " > img").attr("data-validate");
        console.log(data)
        if (data == p5respuestas[i]) {
            $("#p5var" + i).addClass("bien2")
            core++;
        } else {
            $("#p5var" + i).addClass("mal2")
        }
    }

    let total = (core / 6) * 1;
    $("#pre5a").val(parseFloat(total).toFixed(2));
}


var p6act = [
    { enunciado: '<img src="img/i1_p54_act6.png" alt="raiz">', correcta: 'No son semejantes' },
    { enunciado: '<img src="img/i2_p54_act6.png" alt="raiz">', correcta: 'Son semejantes' },
    { enunciado: '<img src="img/i3_p54_act6.png" alt="raiz">', correcta: 'No son semejantes' },
    { enunciado: '<img src="img/i4_p54_act6.png" alt="raiz">', correcta: 'Son semejantes' },
    { enunciado: '<img src="img/i5_p54_act6.png" alt="raiz">', correcta: 'Son semejantes' },
    { enunciado: '<img src="img/i6_p54_act6.png" alt="raiz">', correcta: 'No son semejantes' },
]

let p6respuestas = enunciadoSelectOpcion(p6act, "#p6act", '6', 'selectbox2')
// console.log(p6respuestas)


function pregunta6() {
    let core = validarExactas(p6respuestas, '#p6var')
    let total = (core / 1) * 1;
    $("#pre6a").val(parseFloat(total).toFixed(2));
}


function pregunta7() {
    let core = validarExactas(['10'], '#p7var')
    let total = (core / 1) * 1;
    $("#pre7a").val(parseFloat(total).toFixed(2));
}

function pregunta8() {
    let core = 0
    let data = $("#p8var0").val().replaceAll('.', ',');
    if (data == '3,2') {
        $("#p8var0").addClass("bien")
        core++;
    } else {
        $("#p8var0").addClass("mal")
    }
    let total = (core / 1) * 1;
    $("#pre8a").val(parseFloat(total).toFixed(2));
}




function pregunta9() {
    let core = validarExactas(['18', '15'], '#p9var')
    let total = (core / 1) * 1;
    $("#pre9a").val(parseFloat(total).toFixed(2));
}

var rutinaPensamiento = [
    {
        item: 'Idea', frase: '¿Cómo explicarías a tu compañero sobre la radicación?', color1: '#1B62B7', color2: '#82A2CA', row: '3'
    }
]
rutinaPensamiento.forEach(element => {
    $("#rutinaPensamiento").append(`
        <div style="position: relative;border-radius:5px;background-color: ${element.color2} !important;print-color-adjust: exact;width:480px;margin:20px 5px">
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
//     `¿Inventé con mis compañeros una historia para un cuento ? `,
//     `¿Pude crear personajes y un lugar para el desarrollo de un cuento ? `,
//     `¿Expresé mis ideas y respeté las opiniones de mis compañeros ? `,
//     `¿Apoyé a mi equipo durante todo el trabajo ? `
// ]

var itemsReflexiono = [`¿Cómo puedo aplicar el pensamiento matemático en situaciones de la vida cotidiana?`]

function total() {
    pregunta2();
    pregunta3();
    pregunta5();
    pregunta6();
    pregunta7();
    pregunta8();
    pregunta9();
    var pre2a = parseFloat(document.getElementById("pre2a").value)
    var pre3a = parseFloat(document.getElementById("pre3a").value)
    var pre5a = parseFloat(document.getElementById("pre5a").value)
    var pre6a = parseFloat(document.getElementById("pre6a").value)
    var pre7a = parseFloat(document.getElementById("pre7a").value)
    var pre8a = parseFloat(document.getElementById("pre8a").value)
    var pre9a = parseFloat(document.getElementById("pre9a").value)
    cor = ((pre2a + pre3a + pre5a + pre6a + pre7a + pre8a + pre9a) / 12) * 10
    Calculo_nota();
    EndActivity()
}
