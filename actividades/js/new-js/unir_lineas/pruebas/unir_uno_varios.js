//// paleta de colores 
/*********
<div style="border:solid 1px silver;width:400px;border-radius:10px;" class="info"><span
                style="font-size:22px;font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;color: rgb(97, 68, 29);">Selecciona
                el color de la línea </span>
              <div>
                <div style="display:inline-flex">
                  <div style="display:inline-table"><img src="img/ico_unir_color.png" style="background-color: #0393D2"
                      class="btncolor"></div>
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
            <div class="cajaUnir1_varios"></div>

/// unir lineas heigth, width , border ,  top
cajaUnir1_varios(250, 500, 'solid 1px red', topInicio,topFin)
***/
/*********
 * CREAR FUNCION PARA PALABRAS DE INiCIO
 
iniciales()
finales()

var arrayElemInicio1_varios = [
    '<img src="img2/i2_p94_act1.png" alt="delfin">',
    '<img src="img2/i4_p94_act1.png" alt="pollo">',
]
var arrayElemFin1_varios = [
    'vive en el agua',
    'vive en la tierra',
    'tiene plumas',
    'no tiene plumas',
    '<img src="img2/i2_p94_act1.png" alt="delfin">'
]
///SE VALIDA LAS POSICIONES  EL arrayElemFin CON EL   arrayElemInicio
var validarArray1_varios = ['0', '1', '1', '0', '0']
***/


let altoInicio;
let altoFin;
let valorInicio = 0;
let valorFin = 0;

const opcionesIniciales = [];
const opcionesFinales = [];

const iniciales = (...valoresiniciales) => {
  arrayElemInicio1_varios.forEach(itemi => {
    opcionesIniciales.push(`
        <div class="cajaboxinicio">
           ${itemi}
            <div id="arrastre${valorInicio}" class="divstart boxbtn-cajainicio"></div>
        </div>`);
    valorInicio++;
  });
  opcionesIniciales.sort(f_randomico);
  $('.boxgeneralinicio').append(opcionesIniciales)

  altoInicio = $(".boxgeneralinicio").height();
  // alert(altoInicio)
}


const finales = (...valoresfinales) => {
  arrayElemFin1_varios.forEach(itemi => {
    opcionesFinales.push(`
        <div class="cajaboxfin" id="validar${valorFin}">
            <div id="finarrastre${valorFin}" class="divend boxbtn-cajafin"></div>
             ${itemi}
        </div>`);
    valorFin++;
  });
  opcionesFinales.sort(f_randomico);
  $('.boxgeneralfin').append(opcionesFinales)
  /// validar el alto de los div contenadores
  altoFin = $(".boxgeneralfin").height();
  // alert(altoFin)
  // alert(altoInicio)
  if (altoFin > altoInicio) {
    // alert('alto fin es mayor')
    $(".boxgeneralinicio").css('height', altoFin + "px")
    $(".boxgeneralfin").css('height', altoFin + "px")
  }
  if (altoInicio > altoFin) {
    // alert('valor inico es mayor' + altoInicio + " mayor a " + altoFin)
    $(".boxgeneralinicio").css('height', altoInicio + "px")
    $(".boxgeneralfin").css('height', altoInicio + "px")
  }
}



function cajaUnir1_varios(height, width, border, topInicio, topFin) {
  let cajaunir1_varios = `
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-question fuente no-seleccionable" align="center">
        <div style="display:table;width:600px;padding-top:10px; padding-bottom: 10px;border-radius:10px;border:${border};">
            <center>
                <div style="position:relative;display: table;">
                    <canvas id="boxcanvas" width="${width}" height="${height}" style="background-color: transparent;"></canvas>
                    <div class="boxgeneralinicio" style="top:${topInicio}px;"></div>
                    <div class="boxgeneralfin" style="top:${topFin}px;"></div>
                </div>
            </center>
        </div>
    </div>`
  $(".cajaUnir1_varios").append(cajaunir1_varios)
}

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

      })



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