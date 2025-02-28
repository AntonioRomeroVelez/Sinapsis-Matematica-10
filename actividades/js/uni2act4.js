var cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

///// NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA
var ayudasActividad = [
    `En la actividad 1. Selecciona V o F.   <br>`,
    `En la actividad 2. Usa la pizarra para resolver el ejercicio y selecciona la opción correcta.  <br>`,
    `En la actividad 3. Usa la pizarra para resolver el ejercicio y selecciona la opción correcta.  <br>`,
    `En la actividad 4, 5, 6, 7, 8 y 9. Usa la pizarra para resolver cada ejercicio y completa la respuesta.  <br>`,
]
var unidad = '2'
$("#numTema").html('4')
$("#temaActividad").html('Teorema de Pitágoras')
$("#n_pagina").html("70");
$(".numeroTemaColor").addClass(`unidad${unidad}numeroTema`)
$(".temaColor").addClass(`unidad${unidad}tema`)

/// FIN NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA


$(document).ready(function () {

})

var p1act = [
    { enunciado: 'El teorema de Pitágoras es válido para todos los tipos de triángulos.', correcta: 'F' },
    { enunciado: 'La suma de los cuadrados de los catetos es igual al cuadrado de la hipotenusa.', correcta: 'V' },
    { enunciado: 'El lado mayor del triángulo rectángulo es el cateto.', correcta: 'F' },
    { enunciado: 'La suma de la hipotenusa y un cateto es igual al otro cateto.', correcta: 'F' },
]

let p1respuestas = enunciadoSelectOpcion(p1act, "#p1act", '1', 'vof')
// console.log(p1respuestas)


function pregunta1() {
    let core = validarExactas(p1respuestas, '#p1var')
    let total = core * 1;
    $("#pre1a").val(parseFloat(total).toFixed(2));
}


var p2actividad = [
    { enunciado: 'Triángulo de 8 cm, 15 cm, 17 cm', correcta: 'Se cumple el teorema de Pitágoras.' },
    { enunciado: 'Triángulo de 4 cm, 8 cm, 10 cm', correcta: 'No se cumple el teorema de Pitágoras.' },
    { enunciado: 'Triángulo de 12 cm, 14 cm, 18 cm', correcta: 'No se cumple el teorema de Pitágoras.' },
    { enunciado: 'Triángulo de 12 cm, 5 cm, 13 cm', correcta: 'Se cumple el teorema de Pitágoras.' },
];
mezclar(p2actividad);
let p2respuestas = []

let p2items = p2actividad.map((e, i) => {
    // Crear el div principal
    p2respuestas.push(e.correcta)

    let divContent2 = document.createElement('div');
    divContent2.classList.add('actividad2');

    // Crear el enunciado
    let enunciado = document.createElement('p');
    enunciado.textContent = `${e.enunciado}`;

    // Crear label de texto Respuesta
    let label = document.createElement('label');
    label.textContent = 'Respuesta:';
    label.classList.add('label_pregunta_2');

    // Crear el select para la respuesta
    let respuesta = document.createElement('select');
    respuesta.classList.add('p2sel', 'selectbox2');
    respuesta.setAttribute('id', `p2var${i}`);

    // Crear el div para la pizarra
    let pizarra2 = document.createElement('div');
    pizarra2.classList.add('pizarra2');
    pizarra2.setAttribute('id', `pizarra2${i}`);

    // Agregar el enunciado y el select al div principal
    divContent2.appendChild(enunciado);
    divContent2.appendChild(pizarra2);
    divContent2.appendChild(label);
    divContent2.appendChild(respuesta);

    return divContent2; // Retornar el div creado
});

// Insertar los elementos en el contenedor #p2act
let p2act = document.querySelector('#p2act');
p2items.forEach(item => p2act.appendChild(item));

let p2opciones = ['Se cumple el teorema de Pitágoras.', 'No se cumple el teorema de Pitágoras.']
asignarOpcionesAselect(p2opciones, ".p2sel")




function pregunta2() {
    let core = validarExactas(p2respuestas, "#p2var")
    let total = core * 1.25;
    $("#pre2a").val(parseFloat(total).toFixed(2));
}




//// pregunta 3
// crear pizarra pregunta 3
let pizarra_pregunta_3 = document.createElement('div')
pizarra_pregunta_3.classList.add('pizarra_pregunta_3');
pizarra_pregunta_3.setAttribute('id', `pizarra30`);

/// crear imagen pregunta 3
let img_pregunta_3 = document.createElement('img')
img_pregunta_3.setAttribute('src', 'img/i1_p70_act3.jpg')

let p3enunciado = document.querySelector('#p3enunciado');
p3enunciado.appendChild(img_pregunta_3)
p3enunciado.appendChild(pizarra_pregunta_3)


var p3opciones = [
    { title: '9,22 cm', resp: '0', },
    { title: '2,92 cm', resp: '1', },
    { title: '8,92 cm', resp: '1', },
    { title: '5,92 cm', resp: '1', },
];

SelSimple(p3opciones, "#p3act", 3)



function pregunta3() {
    let core = validarSelSimple(3)
    let total = core * 1.25;
    $("#pre3a").val(parseFloat(total).toFixed(2));
}



// pregunta 4

function pregunta4() {
    let core = validarExactas(['6', '10'], "#p4var")
    let total = core * 1.25;
    $("#pre4a").val(parseFloat(total).toFixed(2));
}

// pregunta 5
function pregunta5() {
    let core = 0;
    let p5respuestas = ['3,5', '4,48']
    for (let i = 0; i < p5respuestas.length; i++) {
        let dato = $('#p5var' + i).val().trim().replaceAll('.', ',');
        if (dato == p5respuestas[i]) {
            core++
            $('#p5var' + i).addClass('bien');
        } else {
            $('#p5var' + i).addClass('mal');
        }
    }
    let total = (core / 2) * 1.25;
    $("#pre5a").val(parseFloat(total).toFixed(2));
}

function pregunta6() {
    let core = 0;
    let p6respuestas = ['5,28']
    for (let i = 0; i < p6respuestas.length; i++) {
        let dato = $('#p6var' + i).val().trim().replaceAll('.', ',');
        if (dato == p6respuestas[i]) {
            core++
            $('#p6var' + i).addClass('bien');
        } else {
            $('#p6var' + i).addClass('mal');
        }
    }
    let total = (core / 1) * 1;
    $("#pre6a").val(parseFloat(total).toFixed(2));
}

function replace_punto_por_coma(text) {
    let texto = String(text.trim()).replace(/\./g, ',');
    return texto;
}


function pregunta7() {
    let core = 0;
    let p7respuestas = ['55,90']
    for (let i = 0; i < p7respuestas.length; i++) {
        let dato = replace_punto_por_coma($('#p7var' + i).val())
        if (dato == p7respuestas[i]) {
            core++
            $('#p7var' + i).addClass('bien');
        } else {
            $('#p7var' + i).addClass('mal');
        }
    }
    let total = (core / 1) * 1;
    $("#pre7a").val(parseFloat(total).toFixed(2));
}

function pregunta8() {
    let core = 0;
    let p8respuestas = ['2,87']
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
    let p9respuestas = ['5,20']
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


var rutinaPensamiento = [
    {
        img: '<img src="img/ico_loquese.png" alt="">', txt2: '¿Qué cuidados prenatales conozco?', color2: '#DCBCCD',
    },
    {
        img: '<img src="img/ico_loquequierosaber.png" alt="">', txt2: '¿Sobre qué cuidados prenatales me gustaría aprender?', color2: '#CCEDE8',
    },
    { img: '<img src="img/ico_loquehare.png" alt="">', txt2: '¿Qué haré para aprenderlos?', color2: '#FCDCC0', },
]
rutinaPensamiento.forEach(element => {
    /// lo que se, lo que quiero saber, lo que hare
    $("#rutinaPensamiento").append(`
        <div style="position: relative;border-radius:5px;width:280px;margin:5px;text-align:center">
            ${element.img}
            <div style="padding: 5px;margin: 5px;background-color: ${element.color2} !important;print-color-adjust: exact;border-radius: 5px;margin-top:-5px">
                <div>
                    <div style="margin-bottom: 5px;">
                       ${element.txt2}
                    </div>
                    <textarea class="form-control bg-blanco" placeholder="Escribir" rows="3"></textarea>
                </div>
            </div>
        </div>
    </div>`)
});




var coevaluacion = [
    `Tuve predisposición para trabajar con el equipo.`,
    `Resuelvo ecuaciones para comprender el teorema de Pitágoras.`
]

var itemsReflexiono = [`¿Por qué creo que el teorema de Pitágoras es tan importante en nuestra vida cotidiana?`]


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
    cor = pre1a + pre2a + pre3a + pre4a + pre5a + pre6a + pre7a + pre8a + pre9a
    Calculo_nota();
    EndActivity()
}
