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
$("#temaActividad").html('La sexualidad en la adolescencia')
$("#n_pagina").html("82");
$(".numeroTemaColor").addClass(`unidad${unidad}numeroTema`)
$(".temaColor").addClass(`unidad${unidad}tema`)

/// FIN NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA


$(document).ready(function () {

})


var p3act = [
    { titulo: 'Cambios físicos en las mujeres', colorFondo: '#E7DEF1', colorTitulo: '#6142A4' },
    { titulo: 'Cambios físicos en los varones', colorFondo: '#E3E7F5', colorTitulo: '#1A5FB0' },
]
mezclar(p3act)
let p3items = p3act.map(el => {
    return `<div style="width:48%;padding:5px;border:solid 1px silver;background-color: ${el.colorFondo} !important;print-color-adjust: exact;border-radius:5px">
                <div style="border-radius: 5px;">
                    <div style="text-align: center;background-color: ${el.colorTitulo} !important;print-color-adjust: exact;border-radius: 5px" class="txt-blanco">
                        ${el.titulo}
                    </div>
                </div>
                <textarea class="form-control noEnter" rows="1" placeholder="Escribir" style="margin:2px 0px"></textarea>
                <textarea class="form-control noEnter" rows="1" placeholder="Escribir" style="margin:2px 0px"></textarea>
                <textarea class="form-control noEnter" rows="1" placeholder="Escribir" style="margin:2px 0px"></textarea>
            </div>`
})
$("#p3act").html(p3items.join(''))



var p4act = [
    { enunciado: 'La pubertad es el periodo adecuado para tomar decisiones independientes. ', id: 'p4var0' },
    { enunciado: 'La sexualidad es esencial para el desarrollo psicosocial de los adolescentes. ', id: 'p4var1' },
    { enunciado: 'El embarazo adolescente puede ser riesgoso únicamente para el bebé.   ', id: 'p4var2' },
    { enunciado: 'Se debe establecer una relación afectiva saludable con todas las personas del entorno.  ', id: 'p4var3' },
]
seleccionVF(p4act, "#p4act")


function pregunta4() {
    let core = validarExactas(['F', 'V', 'F', 'V'], "#p4var")
    let total = core * 1.25;
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
    pregunta4();
    var pre4a = parseFloat(document.getElementById("pre4a").value)
    cor = pre4a
    // pre1a 
    Calculo_nota();
    EndActivity()
}
