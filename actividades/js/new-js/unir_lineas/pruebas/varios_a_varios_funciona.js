/* SI FUNCIONA PARA UNIR VARIOS A VARIOS 

<link href="css/newCSS/unir_lineas/unir1_1.css" rel="stylesheet" media="all">


.cajaboxinico {
        margin: 5px 0px;
    }
 .unirinicio {
        outline: solid 1px salmon;
        border-radius: 5px;
        width: 130px;
        padding: 5px;
        padding-right: 20px;
    }

    .divfin {
        outline: solid 1px salmon;
        border-radius: 5px;
        width: 130px;
        padding: 5px;
        padding-left: 20px;
    }


<center>
    <div id="unirlineasVarios-a-Varios"></div>
    <div class="cajaUnirVarios-a-Varios"></div>
</center>


cajaUnir1_1(500, 500, 'solid 1px red', 0, 0)


    var unirvariosinicio = [
    // '<div class="unirinicio"><img src="img2/i1_p96_act1.png"></div>',
    // '<div class="unirinicio"><img src="img2/i2_p96_act1.png"></div>',
    // '<div class="unirinicio"><img src="img2/i3_p96_act1.png"></div>',
    '<div class="unirinicio">perro</div>',
    '<div class="unirinicio">gato</div>',
    '<div class="unirinicio">loro</div>',
    '<div class="unirinicio">roca</div>',
    '<div class="unirinicio">mesa</div>',
]

var unirvariosfin = [
    '<div class="divfin cajatres0">facial</div>',
    '<div class="divfin cajatres1">cardio</div>',
    '<div class="divfin cajatres2">ciclo</div>',
    '<div class="divfin cajatres3">presidente</div>',
    '<div class="divfin cajatres4">ministro</div>',
    '<div class="divfin cajatres5">almirante</div>',
    '<div class="divfin cajatres6">logar</div>',
    '<div class="divfin cajatres7">grafía</div>',
    '<div class="divfin cajatres8">géneo</div>',
]
/// la respuesta poner el orden ascendente
var repuestasunirvarios = ['02', '02', '02', '13', '13']


*/




function unirvarios() {
    let core = 0;
    for (var i = 0; i < repuestasunirvarios.length; i++) {
        var respuestacomparar = repuestasunirvarios[i];
        if ($("#cajavalidar" + [i] + "").attr('class')) {
            var valorunir = $("#cajavalidar" + [i] + "").attr('class')
            alert("clase: " + valorunir)
            let comprobar = valorunir.split(' ');
            //alert("vector: " + comprobar)
            var orden = comprobar.sort((a, b) => {
                return a - b;
            });
            let sincomas = orden.join('');
            //alert(" sin comas : " + sincomas + " es igual a " + respuestacomparar);
            if (sincomas == repuestasunirvarios[i]) {
                $(".cajatres" + [i] + "").addClass('ico2bien10');
                core++;
            } else {
                $(".cajatres" + [i] + "").addClass('ico2mal10');
            }
        } else {
            //alert('no tiene clases ');
            $(".cajatres" + [i] + "").addClass('ico2mal10');
        }
    }
    return cont;
}







let altoInicio;
let altoFin;
let valorInicio = 0;
let valorFin = 0;

const opcionesIniciales = [];
const opcionesFinales = [];

const inicialesunirvarios = (...valoresiniciales) => {
    unirvariosinicio.forEach(itemi => {
        // let nuevo = `${itemi}`
        // alert(nuevo.html())
        opcionesIniciales.push(`
        <div class="cajaboxinico" style="position: relative;">
            ${itemi}
            <div class="divstart boxbtn-cajainicio" id="caja${valorInicio}">
                <div id="cajavalidar${valorInicio}"></div>
            </div>
        </div>
        `);
        valorInicio++;
    });
    opcionesIniciales.sort(f_randomico);
    $('.boxgeneralinicio').append(opcionesIniciales)

    altoInicio = $(".boxgeneralinicio").height();
    // alert(altoInicio)
}


const finalesunirvarios = (...valoresfinales) => {
    unirvariosfin.forEach(itemi => {
        opcionesFinales.push(`
        <div class="cajaboxfin">
           ${itemi}
            <div class="divend boxbtn-cajafin" id="${valorFin}"></div>
        </div>
        `);
        valorFin++;
    });
    opcionesFinales.sort(f_randomico);
    $('.boxgeneralfin').append(opcionesFinales)
}



//7///Nuevo

var coloresParaLineas = `
<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
    <center>
        <div style="border:solid 1px silver;width:400px;border-radius:10px;text-align:center;" class="info">
            <center>
                <span style="font-size:22px;font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;color: rgb(97, 68, 29);">
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
                <button class="btn btn-warning fuente" id="reiniciar">Borrar líneas</button>
            </div>
        </div>
    </center>
</div>
`


function cajaUnir1_1(height, width, border, topInicio, topFin) {
    let cajaunirvarios_varios = `
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-question fuente no-seleccionable">
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
    $(".cajaUnirVarios-a-Varios").append(cajaunirvarios_varios)
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

    inicialesunirvarios()
    finalesunirvarios()
    $("#unirlineasVarios-a-Varios").append(coloresParaLineas)

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
                $(".divend2").addClass('divend');
                $(".divend").removeClass('divend2');
                $(".divend").removeClass('boxnofunciona');
                $(".divend").addClass('boxbtn-cajafin');
                $(".divstart").find('div').removeAttr('class');

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


            // botonincio.onmousedown = function (e) {
            $(".divstart").mousedown(function (e) {
                boxunirinicio = $(this).attr('id');
                //alert(boxunirinicio)
                banderavalor1 = true;
                inicio = ajustar(e.clientX, e.clientY);
                $(".boxbtn-cajafin").addClass('boxfinseleccion');
                $(".divstart").removeClass('boxseleccionado');
                $(this).addClass('boxseleccionado');

            })

            $(".divend").mouseup(function (e) {
                banderavalor2 = true;
                boxunirfin = $(this).attr('id');
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
                    $("#" + boxunirinicio + "").find('div').addClass(boxunirfin);
                }
            })
        } else {
            alert("Tu navegador no soporta canvas")
        }
    }
});