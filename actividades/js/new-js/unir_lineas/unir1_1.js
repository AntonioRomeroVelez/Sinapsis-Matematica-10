
/*********
 * CREAR FUNCION PARA PALABRAS DE INCIOO
<center>
    <div id="unirlineas1-1"></div>
    <div class="cajaUnir1_1"></div>
</center>


CSS 
   .divinicio {
        border: solid 2px #fabd7d;
        width: 250px;
        padding: 3px;
        border-radius: 5px;
        padding-right: 15px;
        text-align: left;
    }

    .divfin {
        border: solid 2px #6bb8f3;
        width: 110px;
        padding: 3px;
        border-radius: 5px;
        padding-left: 20px;
        text-align: left;
    }


JS 
/// unir lineas heigth, width , border ,  top
cajaUnir1_1(250, 500, 'solid 1px red', topInicio,topFin)


var arrayElemInicio = [
    '<div class="divinicio">1°</div>',
    '<div class="divinicio">2°</div>',
]
var arrayElemFin = [
    '<div class="divfin">Primero</div>',
    '<div class="divfin">Segundo</div>',
]
    
***/



let altoInicio;
let altoFin;
let valorInicio = 0;
let valorFin = 0;

const opcionesIniciales = [];
const opcionesFinales = [];

const iniciales = (...valoresiniciales) => {
    arrayElemInicio.forEach(itemi => {
        opcionesIniciales.push(`
        <div class="cajaboxinicio">
           ${itemi}
            <div id="arrastre${valorInicio}" class="divstart boxbtn-cajainicio"></div>
        </div>`);
        valorInicio++;
    });
    opcionesIniciales.sort(f_randomico);
    $('.boxgeneralinicio').append(opcionesIniciales)
}


const finales = (...valoresfinales) => {
    arrayElemFin.forEach(itemi => {
        opcionesFinales.push(`
        <div class="cajaboxfin" id="validar${valorFin}">
            <div id="finarrastre${valorFin}" class="divend boxbtn-cajafin"></div>
             ${itemi}
        </div>`);
        valorFin++;
    });
    opcionesFinales.sort(f_randomico);
    $('.boxgeneralfin').append(opcionesFinales)
}

var coloresParaLineas = `
<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12" style="margin:8px 0px">
    <center>
        <div style="border:solid 1px silver;width:400px;border-radius:10px;text-align:center;" class="info">
            <center>
                <span style="font-size:2rem;font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;color: rgb(97, 68, 29);">
                    Selecciona el color de la línea
                </span>
            </center>
            <div>
                <div style="display:inline-flex">
                    <div style="display:inline-table">
                        <img src="img/ico_unir_color.png" style="background-color: #0393D2" class="btncolor">
                    </div>
                    <div class="theme-colors" style="display:inline-table;width:200px;" data-anijs="if: click, on: .cuadrocolor, do: flipInY animated , to: .btncolor">
                        <div class="cuadrocolor" data-anijs="if: click, do: bounceIn animated" style="background: #FF2309;display:inline-block;"></div>
                        <div class="cuadrocolor" data-anijs="if: click, do: bounceIn animated" style="background: #FF5104;display:inline-block;"></div>
                        <div class="cuadrocolor" data-anijs="if: click, do: bounceIn animated" style="background: #FF9A00;display:inline-block;"></div>
                        <div class="cuadrocolor" data-anijs="if: click, do: bounceIn animated" style="background: #FFBA00;display:inline-block;"></div>
                        <div class="cuadrocolor" data-anijs="if: click, do: bounceIn animated" style="background: #FFFF01;display:inline-block;"></div>
                        <div class="cuadrocolor" data-anijs="if: click, do: bounceIn animated" style="background: #C6EA00;display:inline-block;"></div>
                        <div class="cuadrocolor" data-anijs="if: click, do: bounceIn animated" style="background: #1DB21A;display:inline-block;"></div>
                        <div class="cuadrocolor" data-anijs="if: click, do: bounceIn animated" style="background: #0393D2;display:inline-block;"></div>
                        <div class="cuadrocolor" data-anijs="if: click, do: bounceIn animated" style="background: #0147FF;display:inline-block;"></div>
                        <div class="cuadrocolor" data-anijs="if: click, do: bounceIn animated" style="background: #4500B5;display:inline-block;"></div>
                        <div class="cuadrocolor" data-anijs="if: click, do: bounceIn animated" style="background: #A102B4;display:inline-block;"></div>
                        <div class="cuadrocolor" data-anijs="if: click, do: bounceIn animated" style="background: #C3114B;display:inline-block;"></div>
                        <div class="cuadrocolor" data-anijs="if: click, do: bounceIn animated" style="background: #b35101;display:inline-block;"></div>
                        <div class="cuadrocolor" data-anijs="if: click, do: bounceIn animated" style="background: #473526;display:inline-block;"></div>
                        <div class="cuadrocolor" data-anijs="if: click, do: bounceIn animated" style="background: grey;display:inline-block;"></div>
                    </div>
                </div>
                <button class="btn btn-warning" id="reiniciar">Borrar líneas</button>
            </div>
        </div>
    </center>
</div>
`


function cajaUnir1_1(height, width, border, topInicio, topFin) {
    let cajaunir1_uno = `
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <center>
            <div style="display:table;width:600px;border-radius:10px;border:${border};">
                <center>
                    <div style="position:relative;display: table;">
                        <canvas id="boxcanvas" width="${width}" height="${height}" style="background-color: transparent;"></canvas>
                        <div class="boxgeneralinicio" style="top:${topInicio}px;"></div>
                        <div class="boxgeneralfin" style="top:${topFin}px;"></div>
                    </div>
                </center>
            </div>
        </center>
    </div>`
    $(".cajaUnir1_1").append(cajaunir1_uno)
}






/**************
 * 
 */

var boxcanvas,
    boxctx,
    pos = {},
    fin,
    inicio,
    banderavalor1 = false,
    banderavalor2 = false,
    clasevalidar = 0,
    boxunirinicio,
    boxunirfin,
    inicioselec;

$(document).ready(function () {
    iniciales()
    finales()
    $("#unirlineas1-1").append(coloresParaLineas)

    /// para cambiar color 
    document.querySelectorAll('.theme-colors .cuadrocolor').forEach(color => {
        color.onclick = () => {
            let background = color.style.background;
            document.querySelector('.btncolor').style.setProperty('background-color', background);
        }
    });



    boxcanvas = document.getElementById("boxcanvas");
    if (boxcanvas && boxcanvas.getContext) {
        boxctx = boxcanvas.getContext("2d");
        if (boxctx) {
            let nuevocolor = "#0393D2";
            // boxctx.lineWidth = 3;
            // boxctx.strokeStyle = "#804040";
            // boxctx.lineCap = "round";

            $(".cuadrocolor").click(function () {
                $(".cuadrocolor").removeClass("color-sel");
                $(this).addClass('color-sel');
                nuevocolor = $(this).css('background-color');
                boxctx.strokeStyle = nuevocolor;
            })

            boxctx.strokeStyle = nuevocolor;
            boxctx.lineWidth = 3;
            // ctx.strokeStyle = "#fa6603";
            boxctx.lineCap = "round";

            //// resinicar la activiadad
            $("#reiniciar").click(function (e) {
                banderavalor1 = false;
                banderavalor2 = false;
                $(".divstart2").addClass('divstart');
                $(".divstart").removeClass('divstart2');
                $(".divstart").removeClass('boxnofunciona');
                $(".divstart").addClass('boxbtn-cajainicio');
                $(".divend2").addClass('divend');
                $(".divend").removeClass('divend2');
                $(".divend").removeClass('boxnofunciona');
                $(".divend").addClass('boxbtn-cajafin');
                $(".divend").removeAttr('validarlinea');
                boxctx.clearRect(0, 0, boxcanvas.width, boxcanvas.height);
            })

            function ajustar(xx, yy) {
                var posboxcanvas = boxcanvas.getBoundingClientRect();
                var x = xx - posboxcanvas.left;
                var y = yy - posboxcanvas.top;
                return { x: x, y: y } // retornamos los parametros como un objeto
            }

            function dibujar(inicio, fin) {
                boxctx.beginPath();
                boxctx.lineCap = "round";
                boxctx.lineJoin = "round";
                boxctx.moveTo(inicio.x, inicio.y);
                boxctx.lineTo(fin.x, fin.y);
                boxctx.stroke();
            }

            $(".divstart").mousedown(function (e) {
                boxunirinicio = $(this).attr('id');
                banderavalor1 = true;
                inicio = ajustar(e.clientX, e.clientY);
                $(".boxbtn-cajafin").addClass('boxfinseleccion');
                $(".divstart").removeClass('boxseleccionado');
                $(this).addClass('boxseleccionado');
            })

            $(".divend").mouseup(function (e) {
                boxunirfin = $(this).attr('id');
                banderavalor2 = true;
                $(this).attr('validarlinea', boxunirinicio);
                var posboxcanvas = boxcanvas.getBoundingClientRect(); /// me envia los datos de top, left, button, right
                fin = ajustar(e.clientX, e.clientY);
                var x = e.clientX - posboxcanvas.left;
                var y = e.clientY - posboxcanvas.top;
                $(".divstart").removeClass('boxseleccionado');
                $(".divend").removeClass('boxfinseleccion');

                if ((banderavalor1 == true) && (banderavalor2 == true)) {
                    dibujar(inicio, fin);
                    banderavalor1 = false;
                    banderavalor2 = false;
                    // alert('incio ' + boxunirinicio + " , " + 'fin ' + boxunirfin)
                    $("#" + boxunirinicio + "").addClass('boxnofunciona');
                    $("#" + boxunirinicio + "").addClass('divstart2');
                    $("#" + boxunirinicio + "").removeClass('divstart');
                    $(this).addClass('boxnofunciona');
                    $(this).addClass('divend2');
                    $(this).removeClass('divend');
                    $(this).removeClass('boxbtn-cajafin');
                }
            })
        } else {
            alert("Tu navegador no soporta canvas")
        }
    }
});

// function validarUnir1_1() {
//     var core = 0;
//     for (var i = 0; i < arrayElemFin.length; i++) {
//         if ($("#arrastre" + [i] + "").attr('id') == $("#finarrastre" + [i] + "").attr('validarlinea')) {
//             //$("#validar" + [i] + "").addClass('bien4');
//             core++;
//             $("#finarrastre" + [i] + "").hide()
//             $("#validar" + [i] + "").append(`<p class="bienUnir">✔</p>`)
//         } else {
//             //$("#validar" + [i] + "").addClass('mal4');
//             $("#finarrastre" + [i] + "").hide()
//             $("#validar" + [i] + "").append(`<p class="malUnir">✖</p>`)
//         }
//     }

//     let total = (arrayElemFin.length / core)
//     return total;
// }

function validarUnir1_1() {
    var core = 0;
    var totalElements = arrayElemFin.length;
    $(".divstart").hide()

    for (var i = 0; i < totalElements; i++) {
        var arrastreId = "#arrastre" + i;
        var finarrastreId = "#finarrastre" + i;
        var validarId = "#validar" + i;

        var arrastreElement = $(arrastreId);
        var finarrastreElement = $(finarrastreId);
        var validarElement = $(validarId);

        var validarLineaValue = finarrastreElement.attr('validarlinea');

        if (arrastreElement.attr('id') == validarLineaValue) {
            core++;
            finarrastreElement.hide();
            validarElement.append('<p class="bienUnir">✔</p>');
        } else {
            finarrastreElement.hide();
            validarElement.append('<p class="malUnir">✖</p>');
        }
    }
    let total = core / totalElements;
    if (total > 0) {
        return total
    } else {
        return 0;
    }
}






