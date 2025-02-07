var cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

///// NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA
var ayudasActividad = [
    `En la actividad 1 y 2. Selecciona el ícono de la cámara para cargar la imagen desde su dispositivo.  <br>`,
    `En la actividad 3 y 4. Escribe en cada recuadro de texto.  <br>`,
]

var unidad = '1'
$("#numTema").html('3')
$("#temaActividad").html('Desarrollo tecnológico del microscopio')
$("#n_pagina").html("27");
$(".numeroTemaColor").addClass(`unidad${unidad}numeroTema`)
$(".temaColor").addClass(`unidad${unidad}tema`)
/// FIN NUMERO DE ACTIVIDAD Y AYUDAS Y PAGINA


$(document).ready(function () {

})

let p1items = ''
for (let i = 0; i < 3; i++) {
    p1items += `<div style="margin:5px;border-radius: 5px;padding: 5px;">
                <div align="center">
                    <div class="info">
                    <input type="file" accept="image/png, image/jpeg" name="file" id="file${i}" class="inputfile"
                        onchange="mostrar(${i})">
                    <label for="file${i}"
                        style="font-size: 30px; padding: 10px;width:60px; border-radius: 100%; background-color: #AB6ABD !important; color: white; cursor: pointer;"
                        title="Haz clic para subir imagen">
                        <i class="glyphicon glyphicon-camera"></i>
                    </label><br>
                    <span style="color: #000000">Haz clic para subir tu foto</span>
                    </div>
                    <img id="img${i}" class="imgCargar" style="mix-blend-mode: multiply">
                    <textarea class="form-control noEnter" placeholder="Escribir" rows="2" style="width:100%"></textarea>
                </div>
            </div>`
}
$("#p1act").html(p1items)


let p2items = ''
for (let i = 0; i < 1; i++) {
    p2items += `<div>
                <div align="center">
                    <div class="info">
                    <input type="file" accept="image/png, image/jpeg" name="file" id="file3" class="inputfile"
                        onchange="mostrar(3)">
                    <label for="file3"
                        style="font-size: 30px; padding: 10px;width:60px; border-radius: 100%; background-color: #AB6ABD !important; color: white; cursor: pointer;"
                        title="Haz clic para subir imagen">
                        <i class="glyphicon glyphicon-camera"></i>
                    </label><br>
                    <span style="color: #000000">Haz clic para subir tu foto</span>
                    </div>
                    <img id="img3" class="imgCargarp2" style="mix-blend-mode: multiply">
                </div>
            </div>`
}
$("#p2act").html(p2items)



let PrincipioMedioFinal = [
    { img: '<img src="img/ico_principio.png" alt="">', texto: 'Principio', color: 'verde', colorFondo: '#F9FCF2' },
    { img: '<img src="img/ico_medio.png" alt="">', texto: 'Medio', color: 'azuloscuro', colorFondo: '#F1F3FA' },
    { img: '<img src="img/ico_final.png" alt="">', texto: 'Final', color: 'rojooscuro', colorFondo: '#FEF4F5' },
]
let PrincipioMedioFinalItems = PrincipioMedioFinal.map(el => {
    return `<div style="display: inline-flex;align-items: center;justify-content: end;padding:2px;background-color:${el.colorFondo} !important;-webkit-print-color-adjust: exact; print-color-adjust: exact;border-radius:5px;width:300px">
              ${el.img}
              <div>
                <div style="text-align: center;border-radius: 3px;left: 0px;" class="bg-${el.color} txt-blanco">
                  ${el.texto}
                </div>
                <textarea class="form-control" placeholder="Escribir" rows="4"></textarea>
              </div>
            </div>`
}).join('')
$("#PrincipioMedioFinal").html(PrincipioMedioFinalItems)






// var coevaluacion = [
//     `¿Compartí con mis compañeros lo que conozco acerca de los juegos tradicionales?`,
//     `¿Elaboré junto a mis compañeros las instrucciones de un juego tradicional?`,
//     `¿Expresé mis opiniones y respeté las de mis compañeros?`,
//     `¿Participé activamente durante todo el trabajo?`
// ]



var itemsReflexiono = [
    `¿Cómo podría explicar el uso del microscopio a un amigo que desconoce su utilidad?`
]


function total() {
    cor = 0
    Calculo_nota();
    EndActivity()
}
