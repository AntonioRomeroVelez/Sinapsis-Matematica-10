
////Agregar boton a la barra de menu 
$("#navbar>.nav").append(`
    <li class="navBtnGeogebra">
        <button class="btn button button_GeoGebra hvr-icon-pop mytooltip" id="idopengeogebra" data-toggle="modal" data-info="Abrir pizarra" data-target="#staticBackdrop1" data-anijs="if: click, do: flipInY animated" data-info="Mostrar Geogebra">
            <span class="fa hvr-icon glyphicon glyphicon-blackboard" aria-hidden="true"></span>
        </button>
    </li>`
)

var pizarraPrincipalGeogebra = document.getElementById('idopengeogebra')

// al darle clic al boton de calificar el boton de la pizarra se la va a ocultar
$("#bt_comprobar").click(function () {
    // $(".button_GeoGebra").hide()
    $(".navBtnGeogebra").hide()
})




pizarraPrincipalGeogebra.addEventListener("click", function () {
    $("#navbar").toggleClass('visible');
    $('#btnTutorial').attr('href', 'https://www.geogebra.org/m/rqbdrgkw');

    $(".btngeo").removeClass('btngeocolor');
    $("#notes").addClass('btngeocolor');
    var ggbApp = new GGBApplet(
        {
            "appName": "notes",
            "width": 1000,
            "height": 700,
            "showToolBar": true,
            "showAlgebraInput": true,
            "showMenuBar": true
        }
        , true);
    ggbApp.inject('ggb-element');

});


var cssCode = `
    .button_GeoGebra {
        background: #3E98C4;
        color: #f2f2f2;
    }
    .button_GeoGebra:hover {
        color: #f2f2f2;
        box-shadow: inset 0 0 0 2px rgb(6, 89, 131);
    }
    `;

var styleElement = document.createElement('style');
styleElement.innerHTML = cssCode;
document.head.appendChild(styleElement);





$(".panel-body").append(
    `
    <div class="modal fade" id="staticBackdrop1" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" style="width:100% !important;height:100% !important;margin:0px">
        <div class="modal-dialog modal-dialog" style="border:none;width:100% !important;height:100vh !important;margin-top:0px">
            <center>
                <div id="idgeogebra" style="z-index: 50;border:none">
                    <div style="padding:5px;background-color:white;display:table">
                        <div class="btn btn-outline-dark btngeo" id="geometry">Geometría</div>
                        <div class="btn btn-outline-dark btngeo" id="graphing">Graficar</div>
                        <div class="btn btn-outline-dark btngeo" id="classic">Clásica</div>
                        <div class="btn btn-outline-dark btngeo" id="3d">3D</div>
                        <div class="btn btn-outline-dark btngeo" id="scientific">Científica</div>
                        <div class="btn btn-outline-dark btngeo" id="notes">Notas</div>
                        &nbsp;<button class="btn btn-danger" id="idclosegeogebra" data-dismiss="modal">X</button>&emsp;
                        <a href="" style="color:white !important" class="btn btn-warning" target="_blank" id="btnTutorial"  rel="noopener noreferrer">Tutorial</a>
                    </div>
                </div>
                <div id="ggb-element" style="margin:0px;padding:0px"></div>
            </center>
        </div>
    </div>`)

//// <div class="btn btn-outline-dark btngeo" id="evaluator">Evaluador</div>




var linksTutorial = [
    { nombre: 'geometry', link: `https://www.geogebra.org/m/m6rgmhvq` },
    { nombre: 'classic', link: `https://www.geogebra.org/m/MqVqGRux` },
    { nombre: 'notes', link: `https://www.geogebra.org/m/rqbdrgkw` },
    { nombre: '3d', link: `https://www.geogebra.org/m/fuznheva` },
    { nombre: 'evaluator', link: 'none' },
    { nombre: 'scientific', link: 'none' },
    { nombre: 'graphing', link: `https://www.geogebra.org/m/vmqxhqxj` },
]



var style = document.createElement('style');
style.innerHTML = '.btngeocolor { background-color: #ADD8E6; }';
document.head.appendChild(style);

$(".btngeo").css('border', '1px solid silver');




$("#idgeogebra").hide();
$("#idopengeogebra").click(function () {
    $("#idgeogebra").show();
    // $("#idopengeogebra").hide();
})

$("#idclosegeogebra").click(function () {
    $("#idgeogebra").hide();
    $("#idopengeogebra").show();
    $("#navbar").toggleClass('visible');

})
////// DIFERENTES PIZARRAS DEL MODAL
var geometry = document.getElementById('geometry');
var classic = document.getElementById('classic');
var notes = document.getElementById('notes');
var terceradimension = document.getElementById('3d');
var evaluator = document.getElementById('evaluator');
var scientific = document.getElementById('scientific');
var graphing = document.getElementById('graphing');


// graphing.addEventListener("click", function () {
//     alert('dfdf')
//     ggbAppgraphing.inject('ggb-element');
// });



$(document).ready(function () {
    $(".btngeo").click(function () {
        var nombre = $(this).attr('id');
        $(".btngeo").removeClass('btngeocolor');
        $(this).addClass('btngeocolor');

        var linkEncontrado = linksTutorial.find(function (item) {
            return item.nombre === nombre;
        });

        // Verificar si se encontró el enlace
        if (linkEncontrado) {
            if (linkEncontrado.link === 'none') {
                $('#btnTutorial').hide()
                console.log("El enlace para '" + nombre + "' es " + nombre);
            } else {
                $('#btnTutorial').show()
                $('#btnTutorial').attr('href', linkEncontrado.link);
            }
        } else {
            console.log("No se encontró un enlace para '" + nombre + "'");
        }
        var opciones = {
            "width": 1000,
            "height": 700,
            "showToolBar": true,
            "showAlgebraInput": true,
            "showMenuBar": true
        };
        var ggbApp = new GGBApplet({ "appName": nombre, ...opciones }, true);
        ggbApp.inject('ggb-element');
    });
})