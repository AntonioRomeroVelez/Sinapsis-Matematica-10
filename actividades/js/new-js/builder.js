


$('body').prepend(`
    <div id="nota-informativa" class="nota-ayuda info">
        <button class="btnAudiotext" id="btnEscuchar">Escuchar</button>
        <button class="btnAudiotext" id="btnPausarleer">Detener</button>
        <button type="button" class="close" onclick="cerrar_ayuda()" aria-label="Close">
            <span class="glyphicon glyphicon-remove-sign" aria-hidden="true"></span>
        </button>
        <div id="mensaje"></div>
    </div>

    <nav class="navbar" id="navbar">
      <ul class="nav" style="position:relative">
            <li>
                <button class="btn button btnHelp mytooltip" data-info="Mostrar ayuda de la actividad"
                    onclick="mostrar_ayuda()">
                    <span class="glyphicon glyphicon-question-sign" aria-hidden="true"></span>
                </button>
            </li>
            <li>
                <button class="btn button button_1 btnGuardar mytooltip" data-info="Guardar en local"
                    onclick="save_open_activity_to_local_no_name()">
                    <span class="glyphicon glyphicon-floppy-save" aria-hidden="true"></span>
                </button>
            </li>
            <li>
                <button class="btn button button_1 btnEvniar mytooltip" style="display: none !important;"
                    data-info="Enviar a Correo">
                    <span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>
                </button>
            </li>
            <li>
                <button class="btn button button_2 btnIniciar mytooltip" style="display: none !important;" disabled
                    data-info="Iniciar">
                    <span class="glyphicon glyphicon-play" aria-hidden="true"></span>
                </button>
            </li>
            <li>
                <button class="btn button button_2 btnRepetir mytooltip" data-info="Repetir"
                    onclick="location.reload()">
                    <span class="glyphicon glyphicon-refresh" aria-hidden="true"></span>
                </button>
            </li>
            <li>
                <button class="btn button button_3 btnCalificar mytooltip" data-info="Calificar / Comprobar"
                    id="bt_comprobar" onclick="total();">
                    <span class="glyphicon glyphicon-check" aria-hidden="true"></span>
                </button>
            </li>
            <li>
                <button class="btn button button_5 mytooltip display-none" style="display: none !important;"
                    data-info="Pantalla completa" onclick="full_screen_change()">
                    <span id="full_ico" class="glyphicon glyphicon-resize-full" aria-hidden="true"></span>
                </button>
            </li>
            <li>
                <button class="btn button btn_Ayudas hvr-icon-pop mytooltip" onclick="mostrarAyudaSecuencial()"
                    data-info="Ayudas">
                    <span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span>
                </button>
            </li>
            <button id="toggle-btn-navbar-Ocultar" class="btn btn-danger"><i>X</i></button>
        </ul>
    </nav>
    
     <button id="toggle-btn-navbar">☰</button>`)


$('.container').append(`<div class="modal fade animated pulse" id="myModal" role="dialog">
          <div class="modal-dialog">
              <!-- Modal content-->
              <div class="modal-content">
                  <div class="modal-header">
                      <button type="button" class="close" onclick="$('#myModal').modal('hide')">&times;</button>
                      <h4 class="modal-title">Guardar la actividad en su máquina local</h4>
                  </div>
                  <div class="modal-body">
                      <form id="modal_form" class="form-horizontal">
                          <div class="form-group ">
                              <div class="col-sm-2">
                                  <label id="lbl_nombre" for="txtAlumno">Alumno: </label>
                              </div>
                              <div class="col-sm-10">
                                  <!--el input para ingresar el nombre del alumno debe se txt_alumno-->
                                  <input type="text" class="form-control nombre " id="txtAlumno"
                                      placeholder="Ingrese el nombre del alumno">
                                  <div class="alert alert-danger display-none" id="txtAlumnoAlert" role="alert">
                                      <button type="button" class="close" onclick="$('#myModal').modal('hide')"
                                          aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                      <span class="glyphicon glyphicon-info-sign error-color" aria-hidden="true"></span>
                                      Por favor ingrese el nombre. Es obligatorio
                                  </div>
                              </div>
                          </div>
                      </form>
                  </div>
                  <div class="modal-footer">
                      <button type="button" class="btn btn-success" id="gnr-pdf"
                          onclick="save_open_activity_to_local('txtAlumno')">Guardar</button>
                      <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                  </div>
              </div>
          </div>
      </div>`)



// Definir encabezado para la actividad
var encabezado = '';
// Comprobar las clases de .panel-heading
if ($(".panel-heading").hasClass('bg-diagnostica')) {
  encabezado = `
  <tr>
      <td>
        <center>
          <span class="tituloActividad" id="temaActividad"></span>
        </center>
      </td>
      <td style="width:100px;margin:1px 5px;text-align: right;">
          <span class="notificacion pagina">
              Pág <i id="n_pagina" class="pagina"></i>
          </span>
      </td>
  </tr>`
} else if ($(".panel-heading").hasClass('bg-aplicacion')) {
  encabezado = `
  <tr>
      <td>
          <span class="titulotema temaColor">Tema</span><span class="titulotema numeroTemaColor" id="numTema"></span>
          <span class="tituloActividad" id="temaActividad"></span>
      </td>
      <td style="width:100px;margin:1px 5px;text-align: right;">
          <span class="notificacion pagina">
              Pág <i id="n_pagina" class="pagina"></i>
          </span>
      </td>
  </tr>`
}
else if ($(".panel-heading").hasClass('bg-sumativa')) {
  encabezado = `
  <tr>
      <td rowspan="2" style="width:70px">
        <img src="img/ico_sumativa.png" alt="">
      </td>
      <td>
          <span class="tituloActividad" id="temaActividad"></span>
      </td>
      <td style="width:100px;margin:1px 5px;text-align: right;">
          <span class="notificacion pagina">
              Pág <i id="n_pagina" class="pagina"></i>
          </span>
      </td>
  </tr>`
}



// Construir el HTML y asignarlo
$(".panel-heading").html(`
  <table style="width: 100%" class="encabezadoInfo">
    ${encabezado}
    <tr>
      <td>
        <div class="nombreEstudiante txtAlumno display-none" id="nombre_alumno">Alumno: </div>
      </td>
      <td style="width:100px;margin:1px 5px;text-align: right;">
        <span class="notificacion nota">
          Nota <span id="txtNota" class="nota">__ / 10</span>
        </span>
      </td>
    </tr>
  </table>
`);




//////MOSTRAR AYUDAS DE LOS ICONOS


var iconosAyuda = [
  { boton: 'btnHelp', icono: '<span class="glyphicon glyphicon-question-sign" aria-hidden="true"></span>', texto: 'Proporciona las ayudas para resolver cada actividad.<div class="glyphicon glyphicon-remove-circle cerrarAyudas" style="color:red;font-size:2.5rem;float:right"></div>' },

  { boton: 'btnGuardar', icono: '<span class="glyphicon glyphicon-floppy-save" aria-hidden="true"></span>', texto: 'Descarga en un archivo PDF las actividades sin calificar.<div class="glyphicon glyphicon-remove-circle cerrarAyudas" style="color:red;font-size:2.5rem;float:right"></div>' },

  { boton: 'btnRepetir', icono: '<span class="glyphicon glyphicon-refresh" aria-hidden="true"></span>', texto: 'Refresca las actividades; se eliminará el progreso de cada una.<div class="glyphicon glyphicon-remove-circle cerrarAyudas" style="color:red;font-size:2.5rem;float:right"></div>' },

  { boton: 'btnCalificar', icono: '<span class="glyphicon glyphicon-check" aria-hidden="true"></span>', texto: 'Realiza la calificación de las actividades y guarda el documento como un archivo PDF.<div class="glyphicon glyphicon-remove-circle cerrarAyudas" style="color:red;font-size:2.5rem;float:right"></div>' },

  //// para la pizarra de matematicas
  { boton: 'button_GeoGebra', icono: '<span class="fa hvr-icon glyphicon glyphicon-blackboard" aria-hidden="true"></span>', texto: 'Muestra una pizarra en la pantalla.&nbsp;<div class="glyphicon glyphicon-remove-circle cerrarAyudas" style="color:red;font-size:2.5rem;float:right"></div>' },
]

$(document).ready(function () {
  iconosAyuda.forEach(function (element, index) {
    var botonId = element.boton;
    var icono = element.icono;
    var texto = element.texto;
    // console.log(botonId)
    $('.' + botonId).parent().append(`<div class="infoAyuda infoAyuda${index}" style="position:absolute;left:60px;border:solid 1px silver;width:250px;text-align:left;top:0px;background-color:#E5E5E5;border-radius:5px;padding:5px">${icono} ${texto}</div>`);
  });


  ///// sirve para quitar los iconos  del canvas de la pizarra de matematicas 
  $('<style>')
    .prop('type', 'text/css')
    .html(`.wrs_toolbar>.wrs_header>.wrs_context { display: none !important; }`)
    .appendTo('head');

  $('<style>')
    .prop('type', 'text/css')
    .html(`.wrs_toolbar>.wrs_linksContainer { display: none !important; }`)
    .appendTo('head');
})



var controlAyudas = true;
var timeouts = []; // Arreglo para almacenar los IDs de los temporizadores



function mostrarAyudaSecuencial() {
  controlAyudas = true; // Reinicia el control al iniciar
  $('.btn_Ayudas').prop('disabled', true); // Deshabilita el botón
  for (let i = 0; i < iconosAyuda.length; i++) {
    const timeoutId = setTimeout(() => {
      if (!controlAyudas) {
        return; // Interrumpe la función si controlAyudas es false
      }
      $(".infoAyuda" + i).show();

      setTimeout(() => {
        if (controlAyudas) {
          $(".infoAyuda" + i).hide();
        }
      }, 3000);
    }, i * 3500);
    timeouts.push(timeoutId); // Almacena el ID del temporizador
    localStorage.setItem('ayudasVisto', true);
  }


  // Habilitar el botón después de mostrar todas las ayudas
  setTimeout(() => {
    if (controlAyudas) {
      $('.btn_Ayudas').prop('disabled', false); // Habilitar al final
    }
  }, iconosAyuda.length * 3500 + 3000); // Tiempo total
}



const ayudasVisto = localStorage.getItem("ayudasVisto");
if (ayudasVisto != 'true') {
  $("#toggle-btn-navbar").click(function () {
    mostrarAyudaSecuencial(); // Llama a la función cuando se hace clic
  });
}




document.addEventListener("DOMContentLoaded", function () {

  $('.cerrarAyudas').click(function () {
    $(".infoAyuda").hide();
    $('.btn_Ayudas').prop('disabled', false); // Habilita los botones
    controlAyudas = false; // Cambia el control de ayuda a false

    // Cancela todos los temporizadores activos
    timeouts.forEach(timeout => clearTimeout(timeout));
  });



  // /// mostrar el modal
  const navbar = document.getElementById('navbar');
  const toggleBtn = document.getElementById('toggle-btn-navbar');
  const activity = document.getElementById('toggle-btn-navbar-Ocultar');

  //const activity = document.getElementsByClassName('toggle-btn-navbar-Ocultar')


  // Función para mostrar/ocultar la navbar
  function toggleNavbar() {
    navbar.classList.toggle('visible');
  }


  // Mostrar/ocultar la navbar al hacer clic en el botón
  toggleBtn.addEventListener('click', (event) => {
    toggleNavbar();
    // Mantener el enfoque en el botón
    event.preventDefault(); // Evitar que el botón pierda el foco
  });

  toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('hidden'); // Alterna la clase 'hidden'
  });

  // Mostrar/ocultar la navbar al hacer clic en el botón
  activity.addEventListener('click', (event) => {
    toggleNavbar();
    cerrar_ayuda()
    toggleBtn.classList.toggle('hidden');
    // Mantener el enfoque en el botón
    event.preventDefault(); // Evitar que el botón pierda el foco

    ///
    $(".infoAyuda").hide();
    $('.btn_Ayudas').prop('disabled', false); // Habilita los botones
    controlAyudas = false; // Cambia el control de ayuda a false

    // Cancela todos los temporizadores activos
    timeouts.forEach(timeout => clearTimeout(timeout));
  });




  // /// fin mostrar el modal



  /************************************
  AGREGAR EL TRABAJAMOS JUNTOS 
  *********************/
  // var coevaluacion = [
  //   `En grupos de tres, <a href="https://bit.ly/2pjmhfe" target="_blank" rel="noopener noreferrer">https://bit.ly/2pjmhfe</a>`,
  //   ``,
  //   ``]
  if (typeof coevaluacion !== 'undefined' && Array.isArray(coevaluacion)) {
    let itemscoevaluacion = ''
    coevaluacion.forEach((element, index) => {
      itemscoevaluacion += `
        <tr>
          <td style="text-align:left">${element}</td>
          <td style="cursor:pointer;font-weight:bolder;" data-anijs="if: click, do: bounceIn animated" class="opcionCoevaluacion coeOp${index}"></td>
          <td style="cursor:pointer;font-weight:bolder;" data-anijs="if: click, do: bounceIn animated" class="opcionCoevaluacion coeOp${index}"></td>
          <td style="cursor:pointer;font-weight:bolder;" data-anijs="if: click, do: bounceIn animated" class="opcionCoevaluacion coeOp${index}"></td>
        </tr>`
    });

    $("#coevaluacion").html(`
      <img src="img/ico_coevaluacion.png" style="display: block;">
      <b>Pide</b> a tu grupo de trabajo que te evalúe según los criterios de la tabla y <b>llénala</b>.
      <table class="table table-coevaluacion" id="itemscoevaluacion">
        <tr>
          <td></td>
          <td style="width:50px;background-color: #41B23B !important;-webkit-print-color-adjust: exact;print-color-adjust: exact;" class="txt-blanco">Sí</td>
          <td style="width:50px;background-color: #1B62B7 !important;-webkit-print-color-adjust: exact;print-color-adjust: exact;" class="txt-blanco">No</td>
          <td style="width:50px;background-color: #EF2D70 !important;-webkit-print-color-adjust: exact;print-color-adjust: exact;font-size:1.3rem" class="txt-blanco">Debo Mejorar</td>
        </tr>
        ${itemscoevaluacion}
      </table>`)

  }
  /************************************
  FIN AGREGAR coevaluacion 
  *********************/




  /************************************
  AGREGAR AUTOREGULACION
  *********************/
  // var autoregulacion = [
  //   `En grupos de tres, <a href="https://bit.ly/2pjmhfe" target="_blank" rel="noopener noreferrer">https://bit.ly/2pjmhfe</a>`,
  //   ``,
  //   ``]
  if (typeof autoregulacion !== 'undefined' && Array.isArray(autoregulacion)) {
    let itemsautoregulacion = ''
    autoregulacion.forEach((element, index) => {

      itemsautoregulacion += `
        <tr>
          <td style="text-align:left">${element}</td>
          <td style="cursor:pointer;font-weight:bolder;" data-anijs="if: click, do: bounceIn animated" class="opcionautoregulacion autoregulacionOp${index} AutoReg${index}0"></td>
          <td style="cursor:pointer;font-weight:bolder;" data-anijs="if: click, do: bounceIn animated" class="opcionautoregulacion autoregulacionOp${index} AutoReg${index}1"></td>
          <td style="cursor:pointer;font-weight:bolder;" data-anijs="if: click, do: bounceIn animated" class="opcionautoregulacion autoregulacionOp${index} AutoReg${index}2"></td>
        </tr>`
    });

    $("#autoregulacion").html(`
      <b>Reflexiona</b> sobre lo que aprendiste y <b>marca</b> según corresponda.
      <table class="table table-autoregulacion" id="itemsautoregulacion">
        <tr>
          <td></td>
          <td style="width:50px;background-color: #41B23B !important;-webkit-print-color-adjust: exact;print-color-adjust: exact;" class="txt-blanco">LB</td>
          <td style="width:50px;background-color: #1B62B7 !important;-webkit-print-color-adjust: exact;print-color-adjust: exact;" class="txt-blanco">PM</td>
          <td style="width:50px;background-color: #EF2D70 !important;-webkit-print-color-adjust: exact;print-color-adjust: exact;font-size:1.3rem" class="txt-blanco">NA</td>
        </tr>
        ${itemsautoregulacion}
      </table>
      <div style="text-align:right"><b style="font-size:1.3rem" class="txt-verde">Lo hago bien</b> <b style="font-size:1.3rem" class="txt-azuloscuro">/ Lo hago a veces y puedo mejorar /</b> <b style="font-size:1.3rem" class="txt-rosado">Necesito ayuda para hacerlo</b></div>`)

  }
  /************************************
  FIN AGREGAR autoregulacion 
  *********************/



  /************************************
  AGREGAR EL REFLEXIONO

  var itemsReflexiono = [``,]
  *********************/
  if (typeof itemsReflexiono !== 'undefined' && Array.isArray(itemsReflexiono)) {
    let itemsRef = ''
    itemsReflexiono.forEach(element => {
      itemsRef += `
        <div style="margin-top:10px">
          <li>${element}</li>
          <textarea class="form-control no-redimensionar" rows="1" placeholder="Escribir" style="background-color:white !important;print-color-adjust: exact;"></textarea>
        </div>`;
    });

    $("#reflexiono").html(`
      <div>
        <div>
            <img src="img/ico_reflexiono.png" alt="">
            <b  style="background-color:#FFF100 !important;-webkit-print-color-adjust: exact;print-color-adjust: exact;color:#533D6F !important;-webkit-print-color-adjust: exact;print-color-adjust: exact;padding:5px 10px;border-radius:5px;display:inline-table;">Reflexiono sobre mi aprendizaje</b>
         </div>
        ${itemsRef}
      </div>`)

  }
  /************************************
  FIN AGREGAR EL Evalúo mi proceso 
  *********************/



  //<p>Nombre y apellido: <input type="text" placeholder="escribir" class="input-textCasilla" style="width: 100%;"></p>
  $("#fichaDiagnostica").html(`
    <div class="form-container-Casilla">
      <div>
          <p>Institución educativa: <input type="text" placeholder="escribir" class="input-textCasilla" style="width: 100%;"></p>
      </div>
      <div class="d-i-f-start-Casilla">
          <p class="encabezado_datos">
              Año / curso: <input type="text" placeholder="escribir" class="input-smallCasilla">
          </p>
          <p class="encabezado_datos">
              Paralelo: <input type="text" placeholder="escribir" class="input-smallCasilla">
          </p>
          <p class="encabezado_datos">
              Fecha: <input type="date" class="input-dateCasilla">
          </p>
      </div>
    </div>`)

  $(".panel-body").append(`<div id="alerta_info"></div>`)



  /************************************
  AGREGAR EL VOCABULARIO DE LAS PALABRAS 
  *********************/

  // palabrasVocabulario = [
  //   { palabra: 'huraño.', significado: 'Que huye y se esconde de las gentes.' },
  //   { palabra: 'gerifalte.', significado: 'Gavilán.' },
  //   { palabra: 'pulpería.', significado: 'Tienda.' },
  //   { palabra: 'esbirro.', significado: 'Persona que sigue servilmente a otra por dinero o por interés.' },
  //   { palabra: 'acechar.', significado: 'Observar, seguir, perseguir.' },
  //   { palabra: 'reconvenir.', significado: 'Censurar, reprender a alguien por lo que ha hecho o dicho.' },
  //   { palabra: 'plañidera.', significado: 'Llorona.' },
  // ]

  if (typeof palabrasVocabulario !== 'undefined') {
    $(".panel-body").prepend(`<button type="button" class="btn-vocabulario info" data-toggle="modal" data-target="#modalVocabulario"
                    style="float: right;">
                    <img src="img/icoVocabulario.png" alt="">
                </button>`)

    $(".panel-body").append(`
        <div class="col-lg-12 col-md-12 col-sm-12 col-xl-12">
            <!-- Modal vocabulario -->
            <div class="modal fade" id="modalVocabulario" tabindex="-1" role="dialog" aria-labelledby="modalVocabularioLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title btn-vocabulario"><img src="img/icoVocabulario.png" alt=""></h5>
                        </div>
                        <div class="modal-body body-vocabulario" id="palabrasVocabulario"></div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>`)

    palabrasVocabulario.forEach(element => {
      $("#palabrasVocabulario").append(`<div><span class="txt-vocabulario">${element.palabra}</span> ${element.significado}</div>`)
    });
  }

  /************************************
  FIN AGREGAR EL VOCABULARIO DE LAS PALABRAS 
  *********************/



  $(".numPregunta").parent().css({
    'margin': '10px 0px'
  })



  addText('1', 'p1campoTexto')
  addText('2', 'p2campoTexto')
  addText('3', 'p3campoTexto')
  addText('4', 'p4campoTexto')
  addText('5', 'p5campoTexto')
  addText('6', 'p6campoTexto')
  addText('7', 'p7campoTexto')
  addText('8', 'p8campoTexto')
  addText('10', 'p10campoTexto')
  addText('11', 'p11campoTexto')
  addText('12', 'p12campoTexto')


  //// quitr el loading
  $(".ui-loader").html('')


  ayudasActividad.forEach(element => {
    $("#mensaje").append(element)
  });
  $("#mensaje").append(
    `Para evaluar y guardar el ejercicio <span class='hidden'> pulsa sobre el botón Calificar</span> <span class='glyphicon glyphicon-check' aria-hidden='true'></span>. <br>`,
    `Para repetir el ejercicio pulsa sobre <span class='hidden'> El botón Repetir</span> <span class='glyphicon glyphicon-refresh' aria-hidden='true'></span>. <br>`,
    `Para guardar la actividad pulsa sobre <span class='hidden'> El botón Guardar</span> <span class='glyphicon glyphicon-floppy-save' aria-hidden='true'></span>`)
  AniJS.run();
  var botoncancelar = document.querySelector("#btnPausarleer");
  var botonIniciar = document.querySelector("#btnEscuchar");
  var synthesis = window.speechSynthesis;
  var utterance; // Variable para almacenar el objeto SpeechSynthesisUtterance
  var texto = document.getElementById('mensaje').textContent.trim();
  if ('speechSynthesis' in window) {
    botonIniciar.addEventListener("click", () => {
      // Crear un nuevo objeto SpeechSynthesisUtterance con el texto del mensaje
      utterance = new SpeechSynthesisUtterance(texto);
      synthesis.speak(utterance); // Iniciar la síntesis de voz
    });
    botoncancelar.addEventListener("click", () => {
      synthesis.cancel(); // Cancelar cualquier síntesis de voz en curso
    });
  } else {
    console.log('Lo siento, la síntesis de voz no está soportada en este navegador.');
  }
  window.addEventListener('load', function () {
    synthesis.cancel();
  });

  $("#btnPausarleer").hide()

  $("#btnEscuchar").click(function () {
    $("#btnPausarleer").show()
    $("#btnEscuchar").hide()
  })

  $("#btnPausarleer").click(function () {
    $("#btnPausarleer").hide()
    $("#btnEscuchar").show()
  })

  $(".close").click(function (e) {
    synthesis.cancel()
    $("#btnPausarleer").hide()
    $("#btnEscuchar").show()
  })
  $(".container").click(function (e) {
    cerrar_ayuda()
    synthesis.cancel()
    $("#btnPausarleer").hide()
    $("#btnEscuchar").show()
  })

  $(".textBox").html(`<textarea class="form-control no-redimensionar  hvr-grow-shadow" rows="2" placeholder="Escribir"></textarea>`)



  $("textarea").on("input", function () {
    $(this).css("height", "auto"); // Restablecer altura
    var height = $(this).prop("scrollHeight") + 2 + "px";
    $(this).css("height", height);
  });




  $(".opcionCoevaluacion").on("click", function () {
    let obtenerClass = $(this).attr("class").split(' ')[1];
    $("." + obtenerClass).text(''); // Vacía el contenido del elemento correspondiente
    $(this).text('X'); // Cambia el texto del elemento clicado
  });

  $(".opcionautoregulacion").on("click", function () {
    let obtenerClass = $(this).attr("class").split(' ')[1];
    $("." + obtenerClass).text(''); // Vacía el contenido del elemento correspondiente
    $(this).text('X'); // Cambia el texto del elemento clicado
  });



  $(".literalEncerrar").on("click", function () {
    var obtenerClass = $(this).attr("class").split(' ')[1];
    $("." + obtenerClass).removeClass("literalEncerrarOpcion");
    $(this).addClass("literalEncerrarOpcion");
  });

  $(".encerImg").on("click", function () {
    let obtenerClass = $(this).attr("class").split(' ')[1];
    $("." + obtenerClass).removeClass("encerImgOpcion");
    $(this).addClass("encerImgOpcion");
  });

  $(".encerImgMultiple").on("click", function () {
    if ($(this).hasClass('encerImgOpcion')) {
      $(this).removeClass('encerImgOpcion')
    } else {
      $(this).addClass('encerImgOpcion')
    }
  });


  // Evento de clic
  $(".marcarX").on("click", function () {
    if ($(this).find(".marcX").html() == 'X') {
      $(this).find(".marcX").html('')
    } else {
      $(this).find(".marcX").html('X');
    }
  });



  $(".marcarInputX").on("click", function () {
    let opciones = $(this).closest('.marcarInputX').parent();
    opciones.find(".mrcX").html('');
    let marcador = $(this).find(".mrcX");
    marcador.html('X');
  });


  $(".pintarMultiple").on("click", function () {
    if ($(this).hasClass('pintar')) {
      $(this).removeClass('pintar')
    } else {
      $(this).addClass('pintar')
    }
  });


  $(".pintarSimple").on("click", function () {
    let obtenerClass = $(this).attr("class").split(' ')[1];
    $("." + obtenerClass).removeClass("pintar");
    $(this).addClass("pintar");
  });

  $(".MarcarSimple").on("click", function () {
    let obtenerClass = $(this).attr("class").split(' ')[1];
    $("." + obtenerClass).removeClass("Marcar1");
    $(this).addClass("Marcar1");
  });

  $(".EncerrarSimple").on("click", function () {
    let obtenerClass = $(this).attr("class").split(' ')[1];
    $("." + obtenerClass).removeClass("Encerrar1");
    $(this).addClass("Encerrar1");
  });


  // $(".imgSelectX").on("click", function () {
  //   if ($(this).html() === 'X') {
  //     $(this).html('');
  //   } else {
  //     $(this).html('X');
  //   }
  // });

  $(".divContenedorSelectX").on("click", function () {
    let innerDiv = $(this).find("div"); // Buscar el div interno dentro de .divContenedorSelectX
    if (innerDiv.html() === 'X') {
      innerDiv.html(''); // Si tiene "X", lo vaciamos
    } else {
      innerDiv.html('X'); // Si está vacío, agregamos "X"
    }
  });


  $(".divEnunciadoSelect").on("click", function () {
    if ($(this).html() === 'x') {
      $(this).html('');
    } else {
      $(this).html('x');
    }
  });


  $(".encerDiv").on("click", function () {
    var obtenerClass = $(this).attr("class").split(' ')[1];
    $("." + obtenerClass).removeClass("encerDivOpcion");
    $(this).addClass("encerDivOpcion");
  });

  $(".botonCheck").on("click", function () {
    var obtenerClass = $(this).attr("class").split(' ')[1];
    $("." + obtenerClass).val('');
    $(this).val('X');
  });


  $(".inputTexto").attr("autocomplete", "off");
  $(".inputTexto").attr("maxlength", "20");
  $(".inputTexto").attr("placeholder", "escribir...");
  $(".inputTexto").addClass("form-control");

  $("textarea").attr('autocomplete', 'off');


  $(".caracter1").attr('autocomplete', 'off');
  $(".caracter1").attr('maxlength', '1');
  $(".caracter1").attr('placeholder', '--');
  $(".caracter1").addClass('form-control2');


  $(".caracter2").attr('autocomplete', 'off');
  $(".caracter2").attr('maxlength', '2');
  $(".caracter2").attr('placeholder', '--');
  $(".caracter2").addClass('form-control2');

  $(".caracter3").attr('autocomplete', 'off');
  $(".caracter3").attr('maxlength', '3');
  $(".caracter3").attr('placeholder', '--');
  $(".caracter3").addClass('form-control2');

  $(".caracter4").attr('autocomplete', 'off');
  $(".caracter4").attr('maxlength', '4');
  $(".caracter4").attr('placeholder', '--');
  $(".caracter4").addClass('form-control2');

  $(".caracter5").attr('autocomplete', 'off');
  $(".caracter5").attr('maxlength', '5');
  $(".caracter5").attr('placeholder', '--');
  $(".caracter5").addClass('form-control2');

  $(".caracter6").attr('autocomplete', 'off');
  $(".caracter6").attr('maxlength', '6');
  $(".caracter6").attr('placeholder', '--');
  $(".caracter6").addClass('form-control2');


  $(".caracter7").attr('autocomplete', 'off');
  $(".caracter7").attr('maxlength', '7');
  $(".caracter7").attr('placeholder', '--');
  $(".caracter7").addClass('form-control2');


  $(".caracter8").attr('autocomplete', 'off');
  $(".caracter8").attr('maxlength', '8');
  $(".caracter8").attr('placeholder', '--');
  $(".caracter8").addClass('form-control2');


  $(".caracter9").attr('autocomplete', 'off');
  $(".caracter9").attr('maxlength', '9');
  $(".caracter9").attr('placeholder', '----');
  $(".caracter9").addClass('form-control2');


  $(".caracter12").attr('autocomplete', 'off');
  $(".caracter12").attr('maxlength', '12');
  $(".caracter12").attr('placeholder', '----');
  $(".caracter12").addClass('form-control2');


  $(".textocorto").attr('autocomplete', 'off');
  $(".textocorto").attr('maxlength', '20');
  $(".textocorto").attr('placeholder', 'escribir');
  $(".textocorto").addClass('form-control2');

  $(".boxCarrier").attr('maxlength', '1')
  $(".boxCarrier").attr('autocomplete', 'off')

  $(".boxOperation").attr('maxlength', '1')
  $(".boxOperation").attr('autocomplete', 'off')



  // ////EVITAR QUE PEGUEN TEXTO EL LOS CAMPOS CON CLASE  .form-control
  // $('.form-control').on('paste', function (e) {
  //   e.preventDefault(); // Previene la acción de pegar
  //   alert("No se permite pegar texto en este campo."); // Mensaje opcional
  // });


  ///// evitar que el textarea funcione la tencla ENTER
  const textareas = document.querySelectorAll('.noEnter');
  // Iterar sobre los elementos seleccionados
  textareas.forEach(textarea => {
    // Agregar un escuchador de eventos para prevenir el salto de línea
    textarea.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();  // Prevenir el salto de línea
      }
    });
  });

  // Seleccionar todos los inputs con la clase "no-accion"
  const inputsNoAccion = document.querySelectorAll(".no-ccp");

  // Aplicar restricciones a cada input
  inputsNoAccion.forEach((input) => {
    // Evitar copiar
    input.addEventListener("copy", (e) => {
      e.preventDefault();
      mostrarAlertaUnaVez("Copiar no está permitido en este campo.", 'malinfo', 3000);
    });

    // Evitar cortar
    input.addEventListener("cut", (e) => {
      e.preventDefault();
      mostrarAlertaUnaVez("Cortar no está permitido en este campo.", 'malinfo', 3000);
    });

    // Evitar pegar
    input.addEventListener("paste", (e) => {
      e.preventDefault();
      mostrarAlertaUnaVez("Pegar no está permitido en este campo.", 'malinfo', 3000);
    });
  });





  // Selecciona todos los elementos con la clase 'pintar-Frase'
  // <div class="pintar-Frase" style="user-select:text;">Texto se se subraya y se pinta</div>
  // SE USA LA CLASE .highlight
  const pintarFraseElements = document.querySelectorAll('.pintar-Frase');
  pintarFraseElements.forEach(element => {
    element.addEventListener('mouseup', function (event) {
      const selection = window.getSelection();

      // Verificar si hay texto seleccionado
      if (!selection.isCollapsed) {
        const range = selection.getRangeAt(0);
        const selectedText = range.toString();

        // Crear un span para el texto seleccionado
        const span = document.createElement('span');
        span.className = 'highlight';
        span.textContent = selectedText;

        // Reemplazar el texto seleccionado por el nuevo span
        range.deleteContents();
        range.insertNode(span);

        // Limpiar la selección
        selection.removeAllRanges();
      }
    });
  });



})