
var colorSeleccionado;

$(document).on("click", ".btn-color", function () {
    colorSeleccionado = $(this).css("background-color");
    // console.log(colorSeleccionado);
    $(".botepintura").css("background-color", colorSeleccionado);
});

$(document).on("click", ".pintarimg", function () {
    if (colorSeleccionado) {
        this.style.setProperty("background-color", colorSeleccionado, "important");
    } else {
        // alert("Por favor, selecciona un color antes de pintar.");
    }
    colorSeleccionado = ''
});



$(document).on("click", ".subrayarTexto", function () {
    if (colorSeleccionado) {
        this.style.setProperty("text-decoration", "underline");
        this.style.setProperty("text-decoration-color", colorSeleccionado, "important");
        this.style.setProperty("text-decoration-thickness", "4px", "important"); // Grosor del subrayado
    } else {
        //alert("Por favor, selecciona un color antes de subrayar.");
    }
    colorSeleccionado = ''; // Resetear el color seleccionado
});

$(document).on("dblclick", ".subrayarTexto", function () {
    this.style.setProperty("user-select", "none", "important");
    // Si ya está subrayado, quitar el subrayado
    this.style.setProperty("text-decoration", "none", "important");
    colorSeleccionado = ''; // Resetear el color seleccionado
});






var paletaColoresPintar = [
    // Colores primarios
    "rgb(255, 0, 0)",   // Rojo
    "rgb(1, 156, 1)",   // Verde
    "rgb(0, 0, 255)",   // Azul

    // Colores secundarios (mezcla de dos primarios)
    "rgb(255, 255, 0)", // Amarillo (Rojo + Verde)
    "rgb(0, 255, 255)", // Cian (Verde + Azul)
    "rgb(255, 0, 255)", // Magenta (Rojo + Azul)

    // Colores terciarios (mezcla de un primario y un secundario)
    "rgb(255, 128, 0)",   // Naranja (Rojo + Amarillo)
    "rgb(0, 255, 128)",   // Turquesa (Verde + Cian)
    "rgb(0, 128, 255)",   // Azul celeste (Azul + Cian)
    "rgb(128, 0, 255)",   // Violeta (Azul + Magenta)
    "rgb(255, 0, 128)",   // Rosa fuerte (Rojo + Magenta)

    // Extras (colores intermedios y neutros)
    "rgb(192, 192, 192)", // Gris
    "rgb(0, 0, 0)",       // Negro
    "rgb(255, 255, 255)"  // Blanco
];
mezclar(paletaColoresPintar)


let coloresPaleta = ''
paletaColoresPintar.forEach(element => {
    coloresPaleta += `<div class="btn-color" style="background-color: ${element};border:solid 1px grey"
        data-anijs="if: click, do: bounceIn animated"></div>`
});
$(".paletacoloresPintar").append(`<div style="font-family: sans-serif; margin: 10px 0px; text-align: center; padding: 10px; border: solid 1px silver;  border-radius: 8px; background-color: #f9f9f9; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);max-width:800px">
        <div style="margin-bottom: 10px; font-size: 20px; font-weight: bold; color: #333;color:#FF6347">Paleta de colores</div>
        <div class="d-i-f-min">${coloresPaleta}</div>
    </div>`)



/// HTML
/* <div class="col-12 col-md-12 col-ms-12 col-xs-12 row" align="center"> <br>
    <div class="btn-color" style="background-color: red;"
        data-anijs="if: click, do: bounceIn animated"></div>
    <div class="btn-color" style="background-color: blue;"
        data-anijs="if: click, do: bounceIn animated"></div>
    <div class="btn-color" style="background-color: yellow;"
        data-anijs="if: click, do: bounceIn animated"></div>


    <div style="width:60px;height:40px;border:solid 2px red;" class="pintarimg"
        data-anijs="if: click, do: flipInX animated"></div>
    <div style="width:60px;height:40px;border:solid 2px green;" class="pintarimg"
        data-anijs="if: click, do: flipInX animated"></div>
    <div style="width:60px;height:40px;border:solid 2px blue;" class="pintarimg"
        data-anijs="if: click, do: flipInX animated"></div>
</div> */


///VALIDACION Pintar
// p1vec = ['rgb(1, 150, 1)', 'rgb(1, 150, 1)', 'rgb(219, 6, 6)', 'rgb(1, 150, 1)', 'rgb(1, 150, 1)', 'rgb(219, 6, 6)']
// for (let i = 0; i < p1vec.length; i++) {
//     // let color1 = $("#p1var" + [i] + "").css('background-color');
//     // console.log('color 1: ' + color1);
//     if ($("#p1var" + [i] + "").css('background-color') == p1vec[i]) {
//         core++;
//         $("#p1var" + [i] + "").addClass('correctoimg');
//     } else {

//         $("#p1var" + [i] + "").addClass('incorrectoimg');
//     }
// }




///Validar subrayar texto
// p5vec = ['rgb(20, 154, 226)', 'rgb(51, 51, 51)', 'rgb(8, 216, 8)', 'rgb(51, 51, 51)', 'rgb(8, 216, 8)', 'rgb(51, 51, 51)']
// for (let i = 0; i < p5vec.length; i++) {
//     let color1 = $("#p5var" + [i] + "").css('text-decoration-color');
//     console.log('texto de decotacion: ' + color1);
//     if ($("#p5var" + [i] + "").css('text-decoration-color') == p5vec[i]) {
//         core++;
//         $("#p5var" + [i] + "").addClass('bien4');
//     } else {
//         $("#p5var" + [i] + "").addClass('mal4');
//     }
// }


// var colorSeleccionado;
// $(".btn-color").on("click", function () {
//     colorSeleccionado = $(this).css("background-color");
//     console.log(colorSeleccionado);
//     $(".botepintura")[0].style.setProperty(
//         "background-color",
//         colorSeleccionado,
//         "important"
//     );
// });

// $(".pintarimg").on("click", function () {
//     $(this)[0].style.setProperty(
//         "background-color",
//         colorSeleccionado,
//         "important"
//     );
// });




