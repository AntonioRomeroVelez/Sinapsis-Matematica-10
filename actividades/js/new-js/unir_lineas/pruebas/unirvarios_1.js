
/*********
 * CREAR FUNCION PARA PALABRAS DE INCIOO
 */

// const boxunir = document.getElementById('boxunir');


var arrayElemIniciovarios_1 = []
const boxiniciales = []


const iniciales = (...valores) => {
    let resultado = '';
    for (let i = 0; i < valores.length; i++) {
        if (resultado !== '') {
            resultado += ', ';
        }
        arrayElemIniciovarios_1.push(resultado)
    }
    // console.log(arrayElemIniciovarios_1)
    let valorInicio = 0;
    arrayElemIniciovarios_1.forEach(itemi => {
        const boxinicio =
            `<div class="cajaboxinicio">
                <div style="display:inline-block;">${itemi}</div>
                <div id='arrastre${valorInicio}' class="divstart boxbtn-cajainicio" style="display:inline-block"></div>
            </div>`;
        boxiniciales.push(boxinicio)
        valorInicio++;
        // document.body.innerHTML = box;
        // const mydiv = document.createElement('div');
        // mydiv.innerHTML = "This is a paragraph.";
        // mydiv.textContent = item;
        // mydiv.className += "divstart boxbtn-cajainicio";
        // mydiv.setAttribute("id", 'arrastre' + valorinicio);
        // // boxunir.appendChild(mydiv);

        // boxiniciales.push(mydiv)
    })
    // console.log(boxiniciales)

    // boxiniciales.sort(f_randomico);
    for (let i = 0; i < boxiniciales.length; i++) {
        $(".boxiniciales" + [i] + "").html(boxiniciales[i])
    }
}



/*********
 * CREAR FUNCION PARA PALABRAS DE FIN
 */
var arrayElemFinvarios_1 = []
const boxfinales = []
const finales = (...valoresf) => {
    let resultado = '';
    for (let i = 0; i < valoresf.length; i++) {
        if (resultado !== '') {
            resultado += ', ';
        }
        arrayElemFinvarios_1.push(resultado)
    }
    // console.log(arrayElemFinvarios_1)
    valorFin = 0;
    arrayElemFinvarios_1.forEach(item => {
        const boxfin =
            `<div class="cajaboxfin">
                <div id='finarrastre${valorFin}' class="divend boxbtn-cajafin" style="display:inline-block"></div>
                <div style="display:inline-block;">${item}</div>
            </div>`;
        boxfinales.push(boxfin)
        valorFin++;
        // const mydiv = document.createElement('div');
        // mydiv.textContent = item;
        // mydiv.className += "divend boxbtn-cajafin";
        // mydiv.setAttribute("id", 'finarrastre' + valorFin);
        // // boxunir.appendChild(mydiv);

        // boxfinales.push(mydiv)
    })
    // console.log(boxfinales)

    // boxfinales.sort(f_randomico);
    for (let i = 0; i < boxfinales.length; i++) {
        $(".boxfinales" + [i] + "").html(boxfinales[i])
    }
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
window.onload = function () {
    boxcanvas = document.getElementById("boxcanvas");
    if (boxcanvas && boxcanvas.getContext) {
        boxctx = boxcanvas.getContext("2d");
        if (boxctx) {
            boxctx.lineWidth = 3;
            boxctx.strokeStyle = "#fa6603";
            boxctx.lineCap = "round";

            //// resinicar la activiadad
            $("#reiniciar").click(function (e) {
                banderavalor1 = false;
                banderavalor2 = false;
                $(".divstart2").addClass('divstart');
                $(".divstart").removeClass('divstart2');
                $(".divstart").removeClass('boxnofunciona');
                $(".divstart").addClass('boxbtn-cajafin');
                $(".divstart").removeAttr('validarlinea');
                $(".divstart").removeAttr('boxseleccionado');

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
                cambiar();
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
                $(this).addClass(boxunirinicio);
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
                    // $(this).addClass('boxnofunciona');
                    // $(this).addClass('divend2');
                    // $(this).removeClass('divend');
                    $("#" + boxunirinicio + "").addClass('boxnofunciona');
                    $("#" + boxunirinicio + "").addClass('divstart2');
                    $("#" + boxunirinicio + "").removeClass('divstart');
                    //console.log(boxunirinicio)
                    // $("#" + boxunirfin + "").addClass('boxnofunciona');
                    // boxunirinicio = "";
                    // $(this).removeClass('boxbtn-cajafin');
                }
            })
        } else {
            alert("Tu navegador no soporta canvas")
        }
    }
}