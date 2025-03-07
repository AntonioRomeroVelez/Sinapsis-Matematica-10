
/*********
 * 
 *  .divfin {
        position: absolute;
        background-color: transparent !important;
    }
    
 * CREAR FUNCION PARA PALABRAS DE INCIOO
 
  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-question fuente no-seleccionable"
                        align="center">
                        <div style="border:solid 1px silver;width:400px;border-radius:10px;" class="info"><span
                                style="font-size:22px;font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;color: rgb(97, 68, 29);">Selecciona
                                el color de la línea </span>
                            <div>
                                <div style="display:inline-flex">
                                    <div style="display:inline-table"><img src="img/ico_unir_color.png"
                                            style="background-color: #0393D2" class="btncolor"></div>
                                    <div class="theme-colors" style="display:inline-table;width:200px;"
                                        data-anijs="if: click, on: .cuadrocolor, do: flipInY animated , to: .btncolor">
                                        <div class="cuadrocolor" data-anijs="if: click, do: bounceIn animated"
                                            style="background: #FF2309;display:inline-block;"></div>
                                        <div class="cuadrocolor" data-anijs="if: click, do: bounceIn animated"
                                            style="background: #FF5104;display:inline-block;"></div>
                                        <div class="cuadrocolor" data-anijs="if: click, do: bounceIn animated"
                                            style="background: #FF9A00;display:inline-block;"></div>
                                        <div class="cuadrocolor" data-anijs="if: click, do: bounceIn animated"
                                            style="background: #FFBA00;display:inline-block;"></div>
                                        <div class="cuadrocolor" data-anijs="if: click, do: bounceIn animated"
                                            style="background: #FFFF01;display:inline-block;"></div>
                                        <div class="cuadrocolor" data-anijs="if: click, do: bounceIn animated"
                                            style="background: #C6EA00;display:inline-block;"></div>
                                        <div class="cuadrocolor" data-anijs="if: click, do: bounceIn animated"
                                            style="background: #1DB21A;display:inline-block;"></div>
                                        <div class="cuadrocolor" data-anijs="if: click, do: bounceIn animated"
                                            style="background: #0393D2;display:inline-block;"></div>
                                        <div class="cuadrocolor" data-anijs="if: click, do: bounceIn animated"
                                            style="background: #0147FF;display:inline-block;"></div>
                                        <div class="cuadrocolor" data-anijs="if: click, do: bounceIn animated"
                                            style="background: #4500B5;display:inline-block;"></div>
                                        <div class="cuadrocolor" data-anijs="if: click, do: bounceIn animated"
                                            style="background: #A102B4;display:inline-block;"></div>
                                        <div class="cuadrocolor" data-anijs="if: click, do: bounceIn animated"
                                            style="background: #C3114B;display:inline-block;"></div>
                                        <div class="cuadrocolor" data-anijs="if: click, do: bounceIn animated"
                                            style="background: #b35101;display:inline-block;"></div>
                                        <div class="cuadrocolor" data-anijs="if: click, do: bounceIn animated"
                                            style="background: #473526;display:inline-block;"></div>
                                        <div class="cuadrocolor" data-anijs="if: click, do: bounceIn animated"
                                            style="background: grey;display:inline-block;">
                                        </div>
                                    </div>
                                </div><button class="btn btn-warning fuente" id="reiniciar">Borrar líneas</button>
                            </div>
                        </div>
                        <div
                            style="display:table;width:450px;padding-top:10px; padding-bottom: 10px;border-radius:10px;">
                            <center>
                                <div style="position:relative;display: table;">
                                    <canvas id="boxcanvas" width="580" height="260"
                                        style="background-color: transparent;"></canvas>
                                    <div class="boxgeneralinicio" style="top:0px;"></div>
                                    <div
                                        style="display:table;background-image: url('img/i1_p22_act1.png') !important;width:300px;height:267px;position:absolute;top:0px;right:0px;">
                                    </div>
                                    <!-- <div class="boxgeneralfin" style="top:0px"></div> -->
                                    <div class="cajaboxfin divfin" id="validar0" style="top:30px;left:500px;">
                                        <div id="finarrastre0" class="divend boxbtn-cajafin"></div>
                                    </div>
                                    <div class="cajaboxfin divfin" id="validar1" style="top:60px;left:400px;">
                                        <div id="finarrastre1" class="divend boxbtn-cajafin"></div>
                                    </div>
                                    <div class="cajaboxfin divfin" id="validar2" style="top:90px;left:360px;">
                                        <div id="finarrastre2" class="divend boxbtn-cajafin"></div>
                                    </div>
                                    <div class="cajaboxfin divfin" id="validar3" style="top:180px;left:350px;">
                                        <div id="finarrastre3" class="divend boxbtn-cajafin"></div>
                                    </div>
                                </div>
                            </center>
                        </div>
                    </div>


 iniciales()


var divinicio = document.getElementsByClassName("divinicio");
            var colores = ['#F9B273', '#7FD5F7', '#D8BAE1'];
            for (var i = 0; i < divinicio.length; i++) {
                var colorIndex = i % colores.length;
                divinicio[i].style.setProperty("background-color", colores[colorIndex], "important");
            }


var arrayElemInicio = [
    '<div class="divinicio">1°</div>',
    '<div class="divinicio">2°</div>',
    '<div class="divinicio">3°</div>',
    '<div class="divinicio">4°</div>',
    '<div class="divinicio">5°</div>',
    '<div class="divinicio">6°</div>',
    '<div class="divinicio">7°</div>',
    '<div class="divinicio">8°</div>',
    '<div class="divinicio">9°</div>',
    '<div class="divinicio">10°</div>',
]

***/


/***********
 * ******SEGUNDA OPCION
 * *********
 */

////// COMPARA EL HIEGHT DE CADA COLUMNA Y PONERLOS IGUANLES


let altoInicio;
let altoFin;
let valorInicio = 0;
let valorFin = 0;

const opcionesIniciales = [];
const opcionesFinales = [];

const iniciales = (...valoresiniciales) => {
    arrayElemInicio.forEach(itemi => {
        opcionesIniciales.push(`
        <div class="cajaboxinicio" style="position: relative;">
           ${itemi}
            <div id="arrastre${valorInicio}" class="divstart boxbtn-cajainicio"></div>
        </div>`);
        valorInicio++;
    });
    opcionesIniciales.sort(f_randomico);
    $('.boxgeneralinicio').append(opcionesIniciales)

    altoInicio = $(".boxgeneralinicio").height();
}



// const finales = (...valoresfinales) => {
//     arrayElemFin.forEach(itemi => {
//         opcionesFinales.push(`
//         <div class="cajaboxfin" id="validar${valorFin}">
//             <div id="finarrastre${valorFin}" class="divend boxbtn-cajafin"></div>
//              ${itemi}
//         </div>`);
//         valorFin++;
//     });
//     // opcionesFinales.sort(f_randomico);
//     $('.boxgeneralfin').append(opcionesFinales)
//     /// validar el alto de los div contenadores
//     altoFin = $(".boxgeneralfin").height();
//     if (valorFin > valorInicio) {
//         // alert('valor fin es mayor')
//         $(".boxgeneralinicio").css('height', altoFin + "px")
//         $(".boxgeneralfin").css('height', altoFin + "px")
//     } else {
//         // alert('valor fin es meor')
//         $(".boxgeneralinicio").height(altoInicio + "px")
//         $(".boxgeneralfin").height(altoInicio + "px")
//     }
// }



/// tablero colore 
/*
<div style="border:solid 1px silver;width:400px;border-radius:10px;" class="info">
 <span
     style="font-size:22px;font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;color: rgbrgb(97, 68, 29);">
     Selecciona el color de la línea
</span>
 <div>
     <div style="display:inline-flex">
         <div style="display:inline-table"> <img src="img/ico_unir_color.png"
                 style="background-color: #0393D2" class="btncolor"> </div>
         <div class="theme-colors" style="display:inline-table;width:200px;"
             data-anijs="if: click, on: .cuadrocolor, do: flipInY animated , to: .btncolor">
             <div class="cuadrocolor" data-anijs="if: click, do: bounceIn animated"
                 style="background: #FF2309;display:inline-block;"></div>
             <div class="cuadrocolor" data-anijs="if: click, do: bounceIn animated"
                 style="background: #FF5104;display:inline-block;"></div>
             <div class="cuadrocolor" data-anijs="if: click, do: bounceIn animated"
                 style="background: #FF9A00;display:inline-block;"></div>
             <div class="cuadrocolor" data-anijs="if: click, do: bounceIn animated"
                 style="background: #FFBA00;display:inline-block;"></div>
             <div class="cuadrocolor" data-anijs="if: click, do: bounceIn animated"
                 style="background: #FFFF01;display:inline-block;"></div>
             <div class="cuadrocolor" data-anijs="if: click, do: bounceIn animated"
                 style="background: #C6EA00;display:inline-block;"></div>
             <div class="cuadrocolor" data-anijs="if: click, do: bounceIn animated"
                 style="background: #1DB21A;display:inline-block;"></div>
             <div class="cuadrocolor" data-anijs="if: click, do: bounceIn animated"
                 style="background: #0393D2;display:inline-block;"></div>
             <div class="cuadrocolor" data-anijs="if: click, do: bounceIn animated"
                 style="background: #0147FF;display:inline-block;"></div>
             <div class="cuadrocolor" data-anijs="if: click, do: bounceIn animated"
                 style="background: #4500B5;display:inline-block;"></div>
             <div class="cuadrocolor" data-anijs="if: click, do: bounceIn animated"
                 style="background: #A102B4;display:inline-block;"></div>
             <div class="cuadrocolor" data-anijs="if: click, do: bounceIn animated"
                 style="background: #C3114B;display:inline-block;"></div>
             <div class="cuadrocolor" data-anijs="if: click, do: bounceIn animated"
                 style="background: #b35101;display:inline-block;"></div>
             <div class="cuadrocolor" data-anijs="if: click, do: bounceIn animated"
                 style="background: #473526;display:inline-block;"></div>
             <div class="cuadrocolor" data-anijs="if: click, do: bounceIn animated"
                 style="background: grey;display:inline-block;"></div>
         </div>
    </div>
        <button class="btn btn-warning fuente" id="reiniciar">Borrar líneas</button>
    </div>
</div>
*/
/// para cambiar color 
document.querySelectorAll('.theme-colors .cuadrocolor').forEach(color => {
    color.onclick = () => {
        let background = color.style.background;
        document.querySelector('.btncolor').style.setProperty('background-color', background);
    }
});


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
var pizarraPrincipal;
window.onload = function () {
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


            // botonincio.onmousedown = function (e) {
            $(".divstart").mousedown(function (e) {
                // alert('hola')
                boxunirinicio = $(this).attr('id');
                //alert(boxunirinicio)
                banderavalor1 = true;
                // clasevalidar = $(this).attr('id');
                inicio = ajustar(e.clientX, e.clientY);
                $(".boxbtn-cajafin").addClass('boxfinseleccion');
                $(".divstart").removeClass('boxseleccionado');
                $(this).addClass('boxseleccionado');
                // cambiar();
            })

            function cambiar() {

                $("#boxcanvas").css('cursor', 'url("img2/ico_lapiz.png"), auto');
                // alert('hola')
                // $("#boxcanvas").css('cursor', 'url("img2/ico_lapiz.png"), auto');
            }

            $(".divend").mouseup(function (e) {
                boxunirfin = $(this).attr('id');;
                // alert(boxunirfin)
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
                    //console.log(boxunirinicio)
                    // $("#" + boxunirfin + "").addClass('boxnofunciona');
                    // boxunirinicio = "";
                    $(this).removeClass('boxbtn-cajafin');
                }
            })
        } else {
            alert("Tu navegador no soporta canvas")
        }
    }
}


function unir1_1fijo() {
    var total1a1fijo = 0;
    for (var i = 0; i < arrayElemInicio.length; i++) {
        // let idinicio = $("#arrastre" + [i] + "").attr('id');
        // let validarfin = $("#finarrastre" + [i] + "").attr('validarlinea');
        //console.log(idinicio + ", " + validarfin)
        if ($("#arrastre" + [i] + "").attr('id') == $("#finarrastre" + [i] + "").attr('validarlinea')) {
            $("#arrastre" + [i] + "").addClass('bien2icono');
            total1a1fijo++;
        } else {
            $("#arrastre" + [i] + "").addClass('mal2icono');
        }
    }
    return total1a1fijo / arrayElemInicio.length;
}






