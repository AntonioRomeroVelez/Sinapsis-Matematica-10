var cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

///// NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA
var ayudasActividad = [
    `En la actividad 1. Selecciona V o F.  <br>`,
    `En la actividad 2. Empareja con el literal que corresponde.  <br>`,
    `En la actividad 3 y 9. Escribe en cada recuadro de texto.  <br>`,
    `En la actividad 4. Selecciona para marcar las opciones correctas.  <br>`,
    `En la actividad 5. Selecciona la opción correcta para cada proposición.  <br>`,
    `En la actividad 6. Usa la pizarra para completar cada ejercicio.  <br>`,
    `En la actividad 7. Completa las tablas de verdad.  <br>`,
    `En la actividad 8. Selecciona la opción correcta para cada proposición.  <br>`,
    `En la actividad 10. Selecciona para pintar la opción correcta.  <br>`,
]
var unidad = '1'
$("#numTema").html('5')
$("#temaActividad").html('Álgebra proposicional')
$("#n_pagina").html("36");
$(".numeroTemaColor").addClass(`unidad${unidad}numeroTema`)
$(".temaColor").addClass(`unidad${unidad}tema`)
/// FIN NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA


$(document).ready(function () {

})

var p1act = [
    { enunciado: `Las siguientes proposiciones son equivalentes entre sí: <div> <ol class="li-letter"> <li>(~p ∨ q) ∨ (~ r ∧ ~ p)</li> <li> ~q ⇒ ~ p</li></ol> </div> `, correcta: 'V' },
    { enunciado: 'La expresión <br> (q ⇒ p) ⇒[(p ∨ q) ⇒ (q∧ ~p)]   es equivalente a p', correcta: 'F' },
    { enunciado: 'Negar dos veces una proposición es igual a no negarla.', correcta: 'V' },
    { enunciado: '“Voy a la escuela y luego al parque o a mi casa”es equivalente a decir “ Voy a la escuela y luego al parque o voy a la escuela y luego a la casa”.', correcta: 'V' },
]

let p1respuestas = enunciadoSelectOpcion(p1act, "#p1act", '1', 'vof')
// console.log(p1respuestas)


function pregunta1() {
    let core = validarExactas(p1respuestas, '#p1var')
    let total = (core / 1) * 2;
    $("#pre1a").val(parseFloat(total).toFixed(2));
}



let p2actividad = [
    { literal: 'Ley de absorción', enunciado: '(q ∧ ~ p) ∨ ~ p ≡ ~ p' },
    { literal: 'Doble negación', enunciado: '~[~ (p ∨ q) ] ≡ (p ∨ q)' },
    { literal: 'Ley de Morgan', enunciado: '~(p ∨ ~ q) ≡ (~p ∧ ~ q)' },
    { literal: 'Ley distributiva', enunciado: 'q ∨ (p ∧ ~ q) ≡ (p ∨ q) ∧ (q ∨ ~ q)' },
]
let p2respuestas = RelacionarliteralesTabla(p2actividad, '2')


function pregunta2() {
    let core = validarExactas(p2respuestas, "#p2var") /// validar
    let total = (core / 1) * 2;
    $("#pre2a").val(parseFloat(total).toFixed(2));
}


let p3actividad = ['Identidad', 'De Morgan', 'Del bicondicional', 'De complemento', 'Involutiva o doble negación', 'Distributiva', 'De Morgan', 'Involutiva o doble negación']

let p3items = p3actividad.map(element => {
    let color = generarColorSuave()
    return `
    <div style="width:350px;border:solid 1px silver;padding:5px;border-radius:5px;background-color:${color} !important;print-color-adjust: exact;">
        ${element}
        <textarea class="form-control no-redimensionar" placeholder="Escribir" rows="1"></textarea>
    </div>`
}).join('')
$("#p3act").html(p3items)


var p4var = [
    { item: '[q ⇒(r ∧ ~ r)] ⇒~ q', valor: '0' }, // 0 correcta
    { item: '(q ⇒r) ∧ q ⇒ r', valor: '0' }, // 0 correcta
    { item: '[(q ⇒r) ∧ (r ⇒ s)] ⇒ (q ⇒s)', valor: '0' }, // 0 correcta
    { item: '(p ∨ q) ⇒ (q ∨ p)', valor: '0' }, // 0 correcta
    { item: '(p ∧ q) ∧ (~ p ∧ ~ q)', valor: '1' }, // 1 incorrecta
    { item: '[(p ∨ q) ∧~ q] ⇒~p', valor: '1' }, // 1 incorrecta
]
marcarVIsto(p4var, 'p4act', '4')

function pregunta4() {
    let core = validarMarcarVisto(p4var, 4, 4)
    let total = (core / 1) * 1;
    $("#pre4a").val(parseFloat(total).toFixed(2));
}



var p5act = [
    { enunciado: `[(r ⇒ s) ∧ r]⇒ s`, correcta: 'tautología' },
    { enunciado: `(q ∨ r) ∧ (~q ∧ ~r)`, correcta: 'contradicción' },
    { enunciado: `[(~q ∧ r) ∨ ~s] ⇔[s ∧ ~(q ∧ ~r)]`, correcta: 'contingencia' },
    { enunciado: `(r ⇒ s) ∧ (s ⇒ r)`, correcta: 'contingencia' },
    { enunciado: `(~p ∧ ~q) ⇒ (~p ∨ ~q)`, correcta: 'tautología' },
]

let p5respuestas = enunciadoSelectOpcion(p5act, "#p5act", '5', 'selectbox2')
// console.log(p1respuestas)


function pregunta5() {
    let core = validarExactas(p5respuestas, '#p5var')
    let total = (core / 1) * 1;
    $("#pre5a").val(parseFloat(total).toFixed(2));
}



let p7actividad = [
    {
        letra1: 'p', letra2: 'q', tit1: 'p ∧ (~ p ∨ q)', tit2: '≡', tit3: 'p ∧ q',
        opciones: ['VVVVVVV', 'VFVFFVF', 'FVFFVVF', 'FFFFVVF']
    },
    {
        letra1: 'p', letra2: 'q', tit1: '~ p ∨ q', tit2: '≡', tit3: 'p  ⇒ q',
        opciones: ['VVVFFVF', 'FFVVVVF', 'FFVFVVV', 'VVVVFVV']
    }
]
mezclar(p7actividad)

let p7items = p7actividad.map((element, i) => {

    let array = element.opciones
    let cuerpo = array.map((elemento, index) => {
        let caja = '';
        let arrayElemento = elemento.split('')
        // console.log(arrayElemento)
        for (let j = 0; j < arrayElemento.length; j++) {
            if (j == 0 || j == 1) {
                caja += `<td>${arrayElemento[j]}</td>`
            } else {
                caja += `<td><select class="p7sel vof p7var" data-info=${arrayElemento[j]}></select></td>`
            }

        }

        return `<tr>${caja}</tr>`
    }).join('')
    return `
    <div style="margin:10px"><b class="txt-azul">${letrasLista[i]}</b> ${element.tit1} ${element.tit2} ${element.tit3}
     <table class="table-bordered-1" style="width:400px">
                            <tr>
                                <td style="width:30px">${element.letra1}</td>
                                <td style="width:30px">${element.letra2}</td>
                                <td colspan="3">${element.tit1}</td>
                                <td style="width:30px">${element.tit2}</td>
                                <td style="width:30px">${element.tit3}</td>
                            </tr>
                           ${cuerpo}
                        </table></div>`
}).join('')

$("#p7act").html(p7items)


let p7vf = ['V', 'F']
asignarOpcionesAselectCorto(p7vf, '.p7sel')

function pregunta7() {
    let core = validarCajaDataInfo('p7var')
    let total = (core / 1) * 1;
    $("#pre7a").val(parseFloat(total).toFixed(2));
}



var p8act = [
    { enunciado: `Si vamos al supermercado, entonces vamos en bicicleta y llevamos  bolsas.`, correcta: 'p ⇒ (q ∧ r)' },
    { enunciado: `Si ganamos los próximos dos partidos y otros equipos no ganan, entonces iremos al Mundial.`, correcta: '(p ∧ ~ q) ⇒ r' },
    { enunciado: `Si no es cierto que aprobamos el examen, y no estudiamos mucho, entonces tendremos que estudiar para el próximo examen.`, correcta: '(~ p ∧ ~ q) ⇒ r' },
    { enunciado: `Iremos al cine o no iremos al cine si y solo si compramos canguil.`, correcta: '(p ∨ ~ p) ⇔ q' },
    { enunciado: `Comeremos manzanas si y solo si compramos fruta y no nos olvidamos de la compra.`, correcta: 'p ⇔ (q ∧ ~ r)' },
    { enunciado: `No es cierto que caminaremos si y solo si tenemos zapatillas deportivas.`, correcta: '~ (p ⇔ q)' },
]

let p8respuestas = enunciadoSelectOpcion(p8act, "#p8act", '8', 'selectbox2')
// console.log(p8respuestas)


function pregunta8() {
    let core = validarExactas(p8respuestas, '#p8var')
    let total = (core / 1) * 1;
    $("#pre8a").val(parseFloat(total).toFixed(2));
}


var rutinaPensamiento = [
    //// antes pensaba, ahora pienso  
    { img: '<img src="img/icoAntesPensaba.png">', frase: '¿La lógica tiene que ver con la matemática?', borderColor: '#7AD1E0', row: '5' },
    { img: '<img src="img/icoAhoraPienso.png">', frase: '¿La lógica tiene que ver con la matemática?', borderColor: '#8BCB40', row: '5' },
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
});




var p10act = [
    {
        enunciado: 'p ∧ V',
        respuesta: ['p', 'F', 'V', 'q'],
    },
    {
        enunciado: '(p ∧ q) ∧ r',
        respuesta: ['p ∧ (q ∧ r)', 'p ∧ q', 'q ∧ r', 'q'],
    },
    {
        enunciado: '~ (r ∨ ~ s)',
        respuesta: ['~ r ∧ s', 'r ∨ s', '~ r ∨ ~ s', 'r ∨ ~ s'],
    },
    {
        enunciado: '(q ⇒ ~ r) ∧ ~ (~ r ⇒ q)',
        respuesta: ['~ (q ∨ r)', '~ q ⇒ r', '~ r ⇒ q', '~ (r ∧ q)'],
    },
    {
        enunciado: '~ r ∨ (r ∧ ~ s)',
        respuesta: ['~ (r ∧ s)', '(~ r ∧ ~ s)', 'r ⇒ s', '(r ∧ s)'],
    }
];

literalesRespuestasSeleccionSimple(p10act, "#p10act", 10);


function pregunta10() {
    let core = validarLiteralesRespuestasSeleccionSimple(p10act, 10);
    let total = (core / 1) * 1;
    $("#pre10a").val(parseFloat(total).toFixed(2));
}




// var coevaluacion = [
//     ``,
// ]


var itemsReflexiono = [
    `¿Qué técnicas puedo usar para descomponer problemas complejos de mi vida usando el álgebra proposicional?`
]


function total() {
    pregunta1();
    pregunta2();
    pregunta4();
    pregunta7();
    pregunta8();
    pregunta10();
    var pre1a = parseFloat(document.getElementById("pre1a").value)
    var pre2a = parseFloat(document.getElementById("pre2a").value)
    var pre4a = parseFloat(document.getElementById("pre4a").value)
    var pre7a = parseFloat(document.getElementById("pre7a").value)
    var pre8a = parseFloat(document.getElementById("pre8a").value)
    var pre10a = parseFloat(document.getElementById("pre10a").value)
    cor = pre1a + pre2a + pre4a + pre7a + pre8a + pre10a
    Calculo_nota();
    EndActivity()
}
