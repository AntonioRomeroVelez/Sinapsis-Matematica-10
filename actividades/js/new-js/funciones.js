
/* ====== Validar palabras exactas ====== */

//let core = validarExactas(["c", "o", "n", "t", "o", "l", "p", "r", "e", "c", "i", "s", "o"], "#p1var");
function validarExactas(respuestas, id) {
   let core = 0;
   for (let i = 0; i < respuestas.length; i++) {
      if ($(`${id}${i}`).val() === "") {
         $(`${id}${i}`).addClass("mal");
      } else {
         let val = $(`${id}${i}`).val();
         if (procesarTexto(val) === procesarTexto(respuestas[i])) {
            core++;
            $(`${id}${i}`).addClass("bien");
         } else {
            $(`${id}${i}`).addClass("mal");
         }
      }
   }
   nota = core / respuestas.length;
   return nota;
}

//let core = validarTextoNumero(["c", "o", "n", "t", "o", "l", "p", "r", "e", "c", "i", "s", "o"], "#p1var");
function validarTextoNumero(respuestas, id) {
   let core = 0;
   for (let i = 0; i < respuestas.length; i++) {
      if ($(`${id}${i}`).val() === "") {
         $(`${id}${i}`).addClass("mal");
      } else {
         let val = $(`${id}${i}`).val();
         if (procesarTexto(val).normalize("NFD").replace(/[\u0300-\u036f]/g, "") === procesarTexto(respuestas[i]).normalize("NFD").replace(/[\u0300-\u036f]/g, "")) {
            core++;
            $(`${id}${i}`).addClass("bien");
         } else {
            $(`${id}${i}`).addClass("mal");
            $(`${id}${i}`).parent().append(`<div class="txt-naranja" style="font-size:1.3rem"><span class="txt-morado">Resp. correcta: </span> ${respuestas[i].toLowerCase()}</div>`);
         }
      }
   }
   nota = core / respuestas.length;
   return nota;
}




/////VALIDAR SOLO NÚMEROS
//let core = validarNumerosExactos(["c", "o", "n", "t", "o", "l", "p", "r", "e", "c", "i", "s", "o"], "#p1var");
function validarNumerosExactos(respuestas, id) {
   let core = 0;
   for (let i = 0; i < respuestas.length; i++) {
      if ($(`${id}${i}`).val() === "") {
         $(`${id}${i}`).addClass("mal");
      } else {
         var val = $(`${id}${i}`).val();
         if (val == respuestas[i]) {
            core++;
            $(`${id}${i}`).addClass("bien");
         } else {
            $(`${id}${i}`).addClass("mal");
         }
      }
   }
   nota = core / respuestas.length;
   return nota;
}



//let core = validarDiferentesPosiciones(["c", "o", "n", "t", "o", "l", "p", "r", "e", "c", "i", "s", "o"], "#p1var");
function validarDiferentesPosiciones(respuestas, id) {
   let core = 0;
   for (let i = 0; i < respuestas.length; i++) {
      const userAnswer = $(`${id}${i}`).val();
      const correctIndex = respuestas.indexOf(userAnswer);
      if (correctIndex !== -1) {
         core++;
         respuestas[correctIndex] = 'A';
         $(`${id}${i}`).addClass('bien');
      } else {
         $(`${id}${i}`).addClass('mal');
      }
   }

   nota = core / respuestas.length;
   return nota;
}




//// INPUTS SELECTS
//// funcion para ingresar imagenes que tenga un select
// var p4act = [
//   { img: '<img>', id:'0' },
//   { img: '<img>', id:'1' },
// ];
// ImagenesSelect(p4act, "#p4act",4);

function ImagenesSelect(array, selector, actividad) {
   array.sort(f_randomico);
   array.forEach(element => {
      let valor = `
    <div style="display:inline-table;margin:10px;text-align:center;border:solid 1px #0CADDC;padding:5px;border-radius:5px">
      <center>${element.img}</center>
      <select class="selectbox1 no-arrow p${actividad}sel" id="p${actividad}var${element.id}" style="margin-top:3px"></select>
    </div>`;
      $(selector).append(valor);
   });
}
//FIN FUNCION INPUTS SELECTS


function generarColorSuave() {
   const min = 230; // Valor mínimo para los componentes de color, para asegurar que el color sea suave
   const max = 255; // Valor máximo para los componentes de color
   const r = Math.floor(Math.random() * (max - min + 1)) + min;
   const g = Math.floor(Math.random() * (max - min + 1)) + min;
   const b = Math.floor(Math.random() * (max - min + 1)) + min;
   return `rgb(${r}, ${g}, ${b})`;
}

function generarColorParaTextoBlanco() {
   const min = 20; // Valor mínimo para los componentes de color
   const max = 255; // Valor máximo para los componentes de color, reducido para asegurar contraste
   // Generar componentes RGB aleatorios dentro del rango definido
   const r = Math.floor(Math.random() * (max - min + 1)) + min;
   const g = Math.floor(Math.random() * (max - min + 1)) + min;
   const b = Math.floor(Math.random() * (max - min + 1)) + min;
   // Calcular la luminancia del color generado
   const luminancia = 0.2126 * (r / 255) + 0.7152 * (g / 255) + 0.0722 * (b / 255);
   // Si la luminancia es alta (es decir, el color es claro), ajusta el rango para generar un color más oscuro
   if (luminancia > 0.5) {
      return generarColorParaTextoBlanco(); // Llamar recursivamente para obtener un color más oscuro
   }
   return `rgb(${r}, ${g}, ${b})`;
}



/////////// FUNCION PARA PARA AGREGAR OPCIONES ALEATORIAS A UN DIV
// var p2opciones = ['manipulador', 'objetos', 'agarrar', 'tareas']
//   divOpcionesConColores(p2opciones, "#p2opciones");
function divOpcionesConColores(array, selector) {
   array.sort(f_randomico);
   array.forEach((element) => {
      let color = generarColorSuave()
      let valor = `<div style="display:inline-table;padding: 5px 10px;border-radius:5px;margin: 5px 10px;border:solid 1px rgb(96, 141, 148);background-color: ${color} !important;">${element}</div>`;
      $(selector).append(valor);
   });
}


/////////// FUNCION PARA PARA ASIGNAR PALABRAS A UN DIV cada palabra dentro de un DIV
// var p2opciones = ['manipulador', 'objetos', 'agarrar', 'tareas']
//   divImagenesAleatorias(p2opciones, "#p2opciones");


// VALIDAR INPUT QUE TIENE UNA CLASE que tiene el atributo data-info
function validarCajaDataInfo(clase) {
   // uso
   // let core = validarCajaDataInfo('p1var') 
   // si todo esta bien retorna 1
   let core = 0
   let cajas = document.querySelectorAll(`.${clase} `)
   // console.log(cajas.length)
   cajas.forEach(caja => {
      let dato = caja.value
      let resp = caja.getAttribute('data-info')
      // console.log(procesarTexto(dato) + " es igual a : " + procesarTexto(resp))
      if (procesarTexto(dato) == procesarTexto(resp)) {
         core++;
         caja.classList.add('bien')
      } else {
         caja.classList.add('mal')
      }
   });
   return (core / cajas.length)
}



function divImagenesAleatorias(array, selector) {
   array.sort(f_randomico);
   array.forEach((element) => {
      let valor = `<div style="display:inline-table;margin: 5px 15px">${element}</div>`;
      $(selector).append(valor);
   });
}


/////////// FUNCION PARA SELECCION SIMPLE CON ENUNCIADO
// var p3act = [
//   {
//     enunciado: 'Si la polea conductora A transmite movimiento a la polea B, el sistema es:',
//     respuesta: ['Multiplicador', 'Reductor'],
//     correcta: 'Multiplicador'
//   },
//   {
//     enunciado: 'otra pregunta',
//     respuesta: ['bien', 'mal'],
//     correcta: 'bien'
//   }
// ];

//   literalesRespuestasSeleccionSimple(p3act, "#p3act", 3);
//   validarLiteralesRespuestasSeleccionSimple(p3act, 3);



function literalesRespuestasSeleccionSimple(array, selector, actividad) {
   array.sort(f_randomico); // Mezclar aleatoriamente las preguntas

   array.forEach((element, index) => {
      let color = generarColorSuave(); // Generar un color pastel
      let colorLiteral = generarColorParaTextoBlanco()

      // Crear el contenedor principal de la pregunta
      let enunciadoHTML = `
      <div style="border: solid 1px #D7D7D7; border-radius: 5px; margin: 10px; display: table;box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);">
        <div style="padding: 0 20px; background-color: ${color} !important;-webkit-print-color-adjust: exact; print-color-adjust: exact;; border-radius: 5px 5px 0px 0px;margin:1px;">
         <b class="txt-azul">${letrasLista[index]}</b> ${element.enunciado}
        </div>
        <div class="respuesta-contenedor" style="margin-top: 10px;"> <!-- Contenedor de respuestas -->
    `;

      // Mezclar respuestas y generar HTML para cada una dentro del contenedor de respuestas
      element.respuesta.sort(f_randomico);
      element.respuesta.forEach((respuesta, respuestaIndex) => {
         enunciadoHTML += `
        <div class="literalEncerrar literalOpcion${actividad}${index} hvr-grow" 
             id="p${actividad}var${index}${respuestaIndex}" 
             data-anijs="if: click, do: flipInX animated" 
             style="border: solid 1px ${color}; padding: 5px; display: inline-table; margin: 10px; border-radius: 5px; cursor: pointer;">
               <span style="margin-right:5px;color: ${colorLiteral} !important;-webkit-print-color-adjust: exact; print-color-adjust: exact;">${letrasLista[respuestaIndex]}</span>${respuesta}
        </div>
      `;
      });

      // Cerrar el contenedor de respuestas y el contenedor principal de la pregunta
      enunciadoHTML += `
        </div> <!-- Fin del contenedor de respuestas -->
      </div> <!-- Fin del contenedor principal -->
    `;

      $(selector).append(enunciadoHTML); // Insertar en el contenedor seleccionado
   });
}

function validarLiteralesRespuestasSeleccionSimple(array, actividad) {
   let core = 0;
   let cantidadOpciones = array.length;
   array.forEach((element, index) => {
      let elementosOpcion = document.getElementsByClassName("literalOpcion" + actividad + index);
      for (let i = 0; i < elementosOpcion.length; i++) {

         let validarEncerrado = elementosOpcion[i].classList.contains('literalEncerrarOpcion')
         // alert(validarEncerrado)
         // console.log("Elemento " + i + ": " + elementosOpcion[i].textContent.slice(3));
         if (validarEncerrado) {
            //alert(elementosOpcion[i].textContent)
            /// el slice quita la viñeta literal a)
            let texto = elementosOpcion[i].textContent
            let textotrim = texto.trim();
            let txt = textotrim.slice(2)
            // console.log(txt)
            // console.log(element.correcta)
            if (txt == element.correcta) {
               elementosOpcion[i].classList.add('bien4');
               core++
            } else {
               elementosOpcion[i].classList.add('mal4')
            }
         }
      }
   });
   let valorPregunta = (core / cantidadOpciones)
   if (valorPregunta < 0) {
      valorPregunta = 0;
   }
   return valorPregunta
}
///// FIN  FUNCION PARA SELECCION SIMPLE



///// INICIO SELECCION OPIONES SELOPCIONES
function enunciadoSelectOpcion(array, selector, numPregunta, tipoSel) {

   /*** USOS RECIBE UN ARRAY CON LAS OCIONES Y LAS RESPUESTAS
    * LAS RESPUESTAS PUEDEN SER V O F U OPCIONES L}MAS LARGAS EJEMPLO: AMARILLO, AZUL, ROJO
    * LA FUNCION DEVUELVE UN ARRAY CON EL ORDEN DE LAS OPCIONES CORRECTAS
    * ESE ARRA SE VALIDA CON VALIDAR EXACTAS
    * 
   var p2act = [
      { enunciado: 'ITEM v', correcta: 'V' },
      { enunciado: 'ITEM f', correcta: 'F' },
      { enunciado: 'ITEM v', correcta: 'V' },
   ]

   let p2respuestas = enunciadoSelectOpcion(p2act, "#p2act", '2','vof' ---'selectbox2' ---'selectbox1')
   console.log(p2respuestas)
   let core = validarExactas(p2respuestas, '#p2var')
   ***/


   mezclar(array)
   let colorLiteral = generarColorParaTextoBlanco()
   let respuestasCorrectas = []
   let opcionesItems = array.map((element, index) => {
      let color = generarColorSuave()
      respuestasCorrectas.push(element.correcta)

      return `<div style="display: inline-flex;align-items: center;justify-content: center;border:solid 1px #F0EEEC ;padding: 3px 5px;border-radius:5px;margin:5px 0px;width:100%;background-color:${color} !important">
            <div style="width:100%">
               <b style="margin-right:5px;color: ${colorLiteral} !important;-webkit-print-color-adjust: exact; print-color-adjust: exact;">${letrasLista[index]}</b>
               ${element.enunciado}
            </div>
            <div style="margin-left: 5px;float:right">
                <select class="select_opciones ${tipoSel} no-arrow" id="p${numPregunta}var${index}"></select>
            </div>
        </div>`
   }).join('')

   // Insertar las opciones en el DOM
   $(selector).html(opcionesItems);

   // Obtener opciones únicas para los selects
   let opcionesSelect = [...new Set(respuestasCorrectas)];
   mezclar(opcionesSelect);

   let opcionesHTML = opcionesSelect.map(opcion => `<option>${opcion}</option>`).join('');

   // Llenar cada select individualmente
   if (tipoSel == 'vof') {
      array.forEach((_, index) => {
         $(`#p${numPregunta}var${index}`).html(`<option disabled selected>--</option>${opcionesHTML}`);
      });
   } else {
      array.forEach((_, index) => {
         $(`#p${numPregunta}var${index}`).html(`<option disabled selected>--selecciona--</option>${opcionesHTML}`);
      });
   }
   return respuestasCorrectas;
}
///// FIN SELECCION OPIONES




// AGREGAR PALABRAS COPN UN RECUADRO PARA MARCAR CON UNA X
// var p5var = [
// { item: 'Literatura', valor: '0' }, // 0 correcta
// { item: 'Arte', valor: '1' }, // 1 incorrecta
// ]
// marcarVIsto(p5var, 'p5act', '5')
// let core = validarMarcarVisto(p5var, 5,opcionesCorrectas)
function marcarVIsto(array, id_div, numPregunta) {
   mezclar(array)
   let opciones = array.map((element, index) => {
      let color = generarColorSuave()
      return `<div style="border:solid 1px grey;display: inline-flex;align-items: center;justify-content: center;border-radius:5px;padding:5px;margin:10px 20px;cursor:pointer;background-color: ${color} !important; -webkit-print-color-adjust: exact; print-color-adjust: exact;position:relative" class="marcarX" data-anijs="if: click, do: flipInX animated">
            <div>${element.item}</div>
            <b style="width:50px;height:30px;text-align: center;border-radius:5px;margin-left: 20px;display: inline-flex;align-items: center;justify-content: center;background-color: #ffffff !important; -webkit-print-color-adjust: exact;border:solid 1px #949494;" class="marcX p${numPregunta}opcion${index} txt-azul" data-validacion="${element.valor}"></b>
        </div>`
   }).join('')
   $("#" + id_div).html(opciones)
}

function validarMarcarVisto(array, numPregunta, correctas) {
   let controlMarcar = 0
   let controlVacio = 0
   let cantidadItems = array.length
   let core = 0
   for (let i = 0; i < cantidadItems; i++) {
      let verificar = $(`.p${numPregunta}opcion${i}`).attr('data-validacion')
      let valorTexto = $(`.p${numPregunta}opcion${i}`).text()
      if (valorTexto == `X`) {
         controlMarcar++
         //console.log(verificar + "____" + valorTexto + " ___ ");
         if (verificar == '0') {
            core++;
            $(`.p${numPregunta}opcion${i}`).addClass('bien2icono')
         } else {
            $(`.p${numPregunta}opcion${i}`).addClass('mal2icono')
            core--
         }
      } else {
         controlVacio++
      }
   }

   if ((controlVacio == cantidadItems) || (controlMarcar == cantidadItems)) {
      for (let j = 0; j < cantidadItems; j++) {
         $(`.p${numPregunta}opcion${j}`).addClass('mal2icono');
      }
      core = 0;
   }
   // Asegurarse de que core no sea negativo
   core = Math.max(core, 0);
   // Calcular el total
   return core / correctas;
}
// FIN AGREGAR PALABRAS COPN UN RECUADRO PARA MARCAR CON UNA X










///// FUNCION TextoConInput TEXTO CON INPUT 
// var p2act = [
//   { enunciado: 'Scratch Junior es una versión de Scratch diseñada para niños <input/>', id: 'p2var0', clase: 'textocorto' },
//   { enunciado: 'La interfaz de Scratch Junior se compone de diferentes <input/> que te permiten programar y diseñar tus proyectos.', id: 'p2var1', clase: 'textocorto' },
//   { enunciado: 'Para crear un nuevo personaje en Scratch Junior, puedes dibujarlo o importar una <input/> existente.', id: 'p2var2', clase: 'textocorto' },
//   { enunciado: 'Los <input/> son las herramientas de construcción de los programas en Scratch Junior.', id: 'p2var3', clase: 'textocorto' },
//   { enunciado: 'Puedes cambiar el <input/> de un personaje en Scratch Junior para darle diferentes apariencias.', id: 'p2var4', clase: 'textocorto' },
// ]

//TextoConInput(p2act, "#p2act")
/// para validar se valida con validarExactas()
function TextoConInput(array, selector) {

   array.sort(f_randomico);
   array.forEach(element => {
      var valor = `
        <div style="margin:10px 0px;border:solid 1px silver;padding:5px;border-radius:5px;text-align:left;">${element.enunciado}</div>`;
      valor = valor.replace('<input/>', `<input id="${element.id}" class="${element.clase}"/>`);
      valor = valor.replace('<textarea/>', `<textarea class="form-control no-redimensionar" placeholder="Escribir" rows="1"></textarea>`);
      $(selector).append(valor);
   });
}
///// FIN FUNCION TextoConInput TEXTO CON INPUT 



/// FUNCION TextoConSelect
// var p2act = [
//     { enunciado: 'Scratch Junior es una versión de Scratch diseñada para niños <select/>', id: 'p2var0', clase: 'p2sel' },
//     { enunciado: 'La interfaz de Scratch Junior se compone de diferentes <select/> que te permiten programar y diseñar tus proyectos.', id: 'p2var1', clase: 'p2sel' },
//     { enunciado: 'Para crear un nuevo personaje en Scratch Junior, puedes dibujarlo o importar una <select/> existente.', id: 'p2var2', clase: 'p2sel' },
//     { enunciado: 'Los <select/> son las herramientas de construcción de los programas en Scratch Junior.', id: 'p2var3', clase: 'p2sel' },
//     { enunciado: 'Puedes cambiar el <select/> de un personaje en Scratch Junior para darle diferentes apariencias.', id: 'p2var4', clase: 'p2sel' },
// ]
//TextoConSelect(p2act, "#p2act")
/// para validar se valida con validarExactas()
function TextoConSelect(array, selector) {
   array.sort(f_randomico);
   array.forEach(element => {
      var valor = `<div style="margin:10px 0px;border:solid 1px silver;padding:5px;border-radius:5px;text-align:left;display:table">${element.enunciado}</div>`;
      valor = valor.replace('<select/>', `<select id="${element.id}" class="${element.clase} selectbox2"></select>`);
      $(selector).append(valor);
   });
}
///// FIN FUNCION TextoConSelect



/////////// FUNCION PARA divContenedorSelectX MARCAR X A VARIOS DIV CON IMAGEN cada igamen tiene dentro una caja que se marca con una X se valida muchas opciones  Nueva

// var p1act = [
//   { img: 'img/i1_p22_act1.png', correcta: 'opcSi', },
//   { img: 'img/i2_p22_act1.png', correcta: 'opcNo', },
//   { img: 'img/i3_p22_act1.png', correcta: 'opcSi', },
//   { img: 'img/i4_p22_act1.png', correcta: 'opcSi', },
//   { img: 'img/i5_p22_act1.png', correcta: 'opcSi', },
//   { img: 'img/i6_p22_act1.png', correcta: 'opcNo', },
// ];
//   divImgContenedorSelectX(p1act, "#p1act", 1);
//   let core = validardivImgContenedorSelectX(p1act, 1)

function divImgContenedorSelectX(array, selector, actividad) {
   array.sort(f_randomico);
   array.forEach((element, index) => {
      let valor = `
         <div class="divContenedorSelectX divContenedorSelectX${index}" data-anijs="if: click, on: .divContenedorSelectX${index}, do: bounceIn animated , to: .movimiento${index}">
            <img src="${element.img}" alt="">
            <div class="imgSelectX ${element.correcta} movimiento${index}" id="p${actividad}var${index}"></div>
        </div>`;
      $(selector).append(valor);
   });
}

///  validardivImgContenedorSelectX(p1act, 1)|
function validardivImgContenedorSelectX(array, actividad) {
   let core = 0, incore = 0, cantidadOpciones = 0, control = 0, valorPregunta = 0;
   let cantidadItems = array.length;
   for (let i = 0; i < array.length; i++) {
      //console.log($("#p" + actividad + "var" + [i] + "").html())
      // console.log($("#p" + actividad + "var" + [i] + "").hasClass('opcSi'))

      if ($("#p" + actividad + "var" + [i] + "").hasClass('opcSi')) {
         cantidadOpciones++
      }


      let tieneX = $("#p" + actividad + "var" + [i] + "").html()
      let esCorrecta = $("#p" + actividad + "var" + [i] + "").hasClass('opcSi')
      if (tieneX == 'X') {
         control++;
         // console.log('si tines x')
         if (esCorrecta == true) {
            $("#p" + actividad + "var" + [i] + "").parent().addClass('bien4');
            $("#p" + actividad + "var" + [i] + "").addClass('bien3');
            core++;
         } else {
            $("#p" + actividad + "var" + [i] + "").parent().addClass('mal4');
            $("#p" + actividad + "var" + [i] + "").addClass('mal3');

            incore++;
         }
      }
   }
   // console.log(cantidadOpciones)
   // console.log("core: " + core + " incore: " + incore)
   if (control == cantidadItems) {
      core = 0; incore = 0;
      for (let i = 0; i < array.length; i++) {
         $("#p" + actividad + "var" + [i] + "").parent().removeClass('bien4');
         $("#p" + actividad + "var" + [i] + "").parent().addClass('mal4');
         $("#p" + actividad + "var" + [i] + "").addClass('mal3');
      }
   } else if (control == 0) {
      core = 0; incore = 0;
      for (let i = 0; i < array.length; i++) {
         $("#p" + actividad + "var" + [i] + "").parent().removeClass('bien4');
         $("#p" + actividad + "var" + [i] + "").parent().addClass('mal4');
         $("#p" + actividad + "var" + [i] + "").addClass('mal3');
      }
   } else {
      let total2 = core - incore;
      valorPregunta = (total2 / cantidadOpciones)
      if (valorPregunta < 0) {
         valorPregunta = 0;
      }
   }
   return valorPregunta
}
///// FIN  FUNCION PARA divContenedorSelectX MARCAR X A VARIOS DIV CON IMAGEN



//// let p2opciones = ['másjóvenes', 'secciones', 'imagen', 'bloques', 'disfraz'];
//// asignarOpcionesAselect(p2opciones, ".p2sel")
//// OPCIONES PARA EL SELECT
function asignarOpcionesAselect(array, selector) {
   let opcionesSelect = [];
   mezclar(array)
   array.forEach(element => {
      let valor = `<option>${element}</option>`;
      opcionesSelect.push(valor);
   });
   opcionesSelect.sort(f_randomico);
   $(selector).html('<option selected disabled>selecciona⮟</option>' + opcionesSelect.join(''));
}
/// FIN OPCIONES PARA EL SELECT



//// let p2opciones = ['másjóvenes', 'secciones', 'imagen', 'bloques', 'disfraz'];
//// asignarOpcionesAselectCorto(p2opciones, ".p2sel")
//// OPCIONES PARA EL SELECT
function asignarOpcionesAselectCorto(array, selector) {
   let opcionesSelect = [];
   mezclar(array)
   array.forEach(element => {
      let valor = `<option>${element}</option>`;
      opcionesSelect.push(valor);
   });
   opcionesSelect.sort(f_randomico);
   $(selector).html('<option selected disabled>--⮟--</option>' + opcionesSelect.join(''));
}
/// FIN OPCIONES PARA EL SELECT




//// let p2opciones = ['másjóvenes', 'secciones', 'imagen', 'bloques', 'disfraz'];
//// asignarOpcSelVacio(p2opciones, ".p2sel")
//// OPCIONES PARA EL SELECT
function asignarOpcSelVacio(array, selector) {
   let opcionesSelect = [];
   mezclar(array)
   array.forEach(element => {
      let valor = `<option>${element}</option>`;
      opcionesSelect.push(valor);
   });
   opcionesSelect.sort(f_randomico);
   $(selector).html('<option selected disabled></option>' + opcionesSelect.join(''));
}
/// FIN OPCIONES PARA EL SELECT



/********************************************************************* 
               SelMultiple
  FUNCION QUE PERMITE INGRESAR UN ARRAY DE TEXTO O IMAGNES Y CALIFICA VARIAS RESPUESTAS 
  0 RESP CORRECTA, 1 RESP INCORRECTA
  var p3opciones = [
    { title: 'Se deben plantear las preguntas con un lenguaje claro y sencillo.', resp: '0', },
    { title: 'Debe tenerse definido el objetivo y la población a la que se dirige la encuesta.', resp: '0', },
    { title: 'Debe plantearse una bienvenida que explique el propósito de la encuesta.', resp: '0', },
    { title: 'Se debe registrar la información a través de medios audiovisuales.', resp: '1', },
    { title: 'Se deben plantear preguntas que estén dirigidas o sesgadas.', resp: '1', },
    { title: 'Generalmente se usan preguntas abiertas con opciones preestablecidas.', resp: '1', },
];

SelMultiple(p3opciones, '#p3act', 3)
validarSelMultiple(p3opciones, 3)

 ********************************************************************/
function SelMultiple(array, selector, actividad) {
   mezclar(array)
   array.forEach((element, index) => {
      let valor = `
            <div class="SelMultiple" style="margin:0px 7px">
                <div class="p${actividad}SelMultiple pintarMultiple" data-validacion="${element.resp}" data-anijs="if: click, do: flipInX animated">
                   <b class="txt-azul">${letrasLista[index]}</b> ${element.title}
                </div>
            </div>`;
      $(selector).append(valor);
   });
}

function validarSelMultiple(array, actividad) {
   let core = 0, incore = 0, controlPintar = 0, cantidadCorrectas = 0, nopinta = 0;
   let cantidadItems = array.length;
   let titles = document.querySelectorAll(`.p${actividad}SelMultiple`);
   titles.forEach(element => {
      if (element.getAttribute('data-validacion') == 0) {
         cantidadCorrectas++
      }
      if (element.classList.contains('pintar')) {
         controlPintar++
         if (element.getAttribute('data-validacion') == 0) {
            element.classList.add('bien2icono');
            element.classList.add('bien4');
            core++
         } else {
            element.classList.add('mal2icono');
            element.classList.add('mal4');
            incore++;
         }
      } else {
         nopinta++
      }
   });

   if ((Number(controlPintar) == Number(cantidadItems)) || Number(nopinta) == Number(cantidadItems)) {
      titles.forEach(element => {
         element.classList.remove('bien2icono')
         element.classList.add('mal2icono')
         element.classList.add('mal4');
      });
      core = 0;
      incore = 0
   }
   let total = ((core - incore) / cantidadCorrectas)
   if (total > 0) {
      return total
   } else {
      return 0
   }
}
/********************************************************************* 
 * SelMultiple
 * FIN FUNCION QUE PERMITE INGRESAR UN ARRAY DE TEXTO O IMAGNES Y CALIFICA VARIAS RESPUESTAS 
 ********************************************************************/



/********************************************************************* 
               SelSimple
  FUNCION QUE PERMITE INGRESAR UN ARRAY DE TEXTO O IMAGNES Y CALIFICA UNA SOLA RESPUESTA
  0 RESP CORRECTA, 1 RESP INCORRECTA
  var p3opciones = [
    { title: 'item 1', resp: '0', },
    { title: 'item 2', resp: '1', },
    { title: 'item 3', resp: '1', },
    { title: 'item 4', resp: '1', },
];

SelSimple(p3opciones, "#p3act", 3)

validarSelSimple(3)

 ********************************************************************/
function SelSimple(array, selector, actividad) {
   mezclar(array)
   array.forEach((element, index) => {
      let valor = `
            <div class="SelSimple">
                <div class="pintarSimple p${actividad}SelSimple" data-validacion="${element.resp}" data-anijs="if: click, do: flipInX animated" style="position:relative">
                <b class="txt-azuloscuro">${letrasLista[index]}</b>
                    ${element.title}
                </div>
            </div>`;
      $(selector).append(valor);
   });
}

function validarSelSimple(actividad) {
   let core = 0;
   let controlMarcar = 0;
   let nopinta = 0
   let titles = document.querySelectorAll(`.p${actividad}SelSimple`);
   titles.forEach(element => {
      if (element.classList.contains('pintar')) {
         controlMarcar++
         nopinta++
         if (element.getAttribute('data-validacion') == 0) {
            element.classList.add('bien2icono');
            element.classList.add('bien4');
            core++
         } else {
            element.classList.add('mal2icono');
            element.classList.add('mal4');
         }
      }
   });
   if (controlMarcar == 0) {
      $(`.p${actividad}SelSimple`).addClass('mal2icono')
      $(`.p${actividad}SelSimple`).addClass('mal4')
   }
   if (nopinta == 0) {
      $(`.p${actividad}SelSimple`).addClass('mal2icono')
      $(`.p${actividad}SelSimple`).addClass('mal4')
   }
   return core
}
/********************************************************************* 
 * SelSimple
 * FIN FUNCION QUE PERMITE INGRESAR UN ARRAY DE TEXTO O IMAGNES Y CALIFICA UNA SOLA RESPUESTA
 ********************************************************************/



/********************************************************************* 
 * MarcarSimple
 * FIN FUNCION QUE PERMITE INGRESAR UN ARRAY  IMAGNES Y CALIFICA UNA SOLA RESPUESTA
 * 
 * var p1var = [
    { title: `<img src="img/i2_p0_act1.jpg" alt="">`, resp: '0' }, // 0 correcta
    { title: `<img src="img/i1_p0_act1.jpg" alt="">`, resp: '1' }, // 1 incorrecta
    { title: `<img src="img/i3_p0_act1.jpg" alt="">`, resp: '1' }, // 1 incorrecta
]
MarcarSimple(p1var, '#p1act', 1)
 ********************************************************************/
function MarcarSimple(array, selector, actividad) {
   mezclar(array)
   array.forEach(element => {
      let valor = `
            <div class="MarcarSimpleCaja">
                <div class="MarcarSimple p${actividad}MarcarSimple" data-validacion="${element.resp}" data-anijs="if: click, do: flipInX animated" style="position:relative">
                    ${element.title}
                </div>
            </div>`;
      $(selector).append(valor);
   });
}

function validarMarcarSimple(actividad) {
   let core = 0;
   let controlMarcar = 0;
   let titles = document.querySelectorAll(`.p${actividad}MarcarSimple`);
   titles.forEach(element => {
      if (element.classList.contains('Marcar1')) {
         controlMarcar++
         if (element.getAttribute('data-validacion') == 0) {
            element.classList.add('bien4');
            core++
         } else {
            element.classList.add('mal4');
         }
      }
   });
   if (controlMarcar == 0) {
      $(`.p${actividad}MarcarSimple`).addClass('mal4')
   }
   return core
}





/********************************************************************* 
 * EncerrarSimple 
 * FIN FUNCION QUE PERMITE INGRESAR UN ARRAY  IMAGNES Y CALIFICA UNA SOLA RESPUESTA
 * 
 * var p1var = [
    { title: `<img src="img/i2_p0_act1.jpg" alt="">`, resp: '0' }, // 0 correcta
    { title: `<img src="img/i1_p0_act1.jpg" alt="">`, resp: '1' }, // 1 incorrecta
    { title: `<img src="img/i3_p0_act1.jpg" alt="">`, resp: '1' }, // 1 incorrecta
]
EncerrarSimple(p1var, '#p1act', 1)
 ********************************************************************/
function EncerrarSimple(array, selector, actividad) {
   mezclar(array)
   array.forEach(element => {
      let valor = `
            <div class="EncerrarSimpleCaja" style="cursor:pointer;margin:10px">
                <div class="EncerrarSimple p${actividad}EncerrarSimple" data-validacion="${element.resp}" data-anijs="if: click, do: flipInX animated" style="position:relative">
                    ${element.title}
                </div>
            </div>`;
      $(selector).append(valor);
   });
}

function validarEncerrarSimple(actividad) {
   let core = 0;
   let controlMarcar = 0;
   let titles = document.querySelectorAll(`.p${actividad}EncerrarSimple`);
   titles.forEach(element => {
      if (element.classList.contains('Encerrar1')) {
         controlMarcar++
         if (element.getAttribute('data-validacion') == 0) {
            element.classList.add('bien4');
            core++
         } else {
            element.classList.add('mal4');
         }
      }
   });
   if (controlMarcar == 0) {
      $(`.p${actividad}EncerrarSimple`).addClass('mal4')
   }
   return core
}






// AGREGAR PALABRAS COPN UN RECUADRO PARA MARCAR CON UNA X se valida varias opciones
// var p5var = [
// { item: 'Literatura', valor: '0' }, // 0 correcta
// { item: 'Arte', valor: '1' }, // 1 incorrecta
// ]
// marcarVIsto(p5var, 'p5act', '5')
// let core = validarMarcarVisto(p5var, 5,opcionesCorrectas)
function marcarVIsto(array, id_div, numPregunta) {
   mezclar(array)
   let opciones = array.map((element, index) => {
      let color = generarColorSuave()
      return `<div style="border:solid 1px grey;display: inline-flex;align-items: center;justify-content: center;border-radius:5px;padding:5px;margin:10px 20px;cursor:pointer;background-color: ${color} !important; -webkit-print-color-adjust: exact; print-color-adjust: exact;position:relative" class="marcarX" data-anijs="if: click, do: flipInX animated">
            <div>${element.item}</div>
            <b style="width:50px;height:30px;text-align: center;border-radius:5px;margin-left: 20px;display: inline-flex;align-items: center;justify-content: center;background-color: #ffffff !important; -webkit-print-color-adjust: exact;border:solid 1px #949494;" class="marcX p${numPregunta}opcion${index} txt-azul" data-validacion="${element.valor}"></b>
        </div>`
   }).join('')
   $("#" + id_div).html(opciones)
}

function validarMarcarVisto(array, numPregunta, correctas) {
   let controlMarcar = 0
   let controlVacio = 0
   let cantidadItems = array.length
   let core = 0
   for (let i = 0; i < cantidadItems; i++) {
      let verificar = $(`.p${numPregunta}opcion${i}`).attr('data-validacion')
      let valorTexto = $(`.p${numPregunta}opcion${i}`).text()
      if (valorTexto == `X`) {
         controlMarcar++
         //console.log(verificar + "____" + valorTexto + " ___ ");
         if (verificar == '0') {
            core++;
            $(`.p${numPregunta}opcion${i}`).addClass('bien2icono')
            $(`.p${numPregunta}opcion${i}`).parent().addClass('bien4')
         } else {
            $(`.p${numPregunta}opcion${i}`).addClass('mal2icono')
            $(`.p${numPregunta}opcion${i}`).parent().addClass('mal4')
            core--
         }
      } else {
         controlVacio++
      }
   }

   if ((controlVacio == cantidadItems) || (controlMarcar == cantidadItems)) {
      for (let j = 0; j < cantidadItems; j++) {
         $(`.p${numPregunta}opcion${j}`).addClass('mal2icono');
         $(`.p${numPregunta}opcion${j}`).parent().addClass('mal4');
      }
      core = 0;
   }
   // Asegurarse de que core no sea negativo
   core = Math.max(core, 0);
   // Calcular el total
   return core / correctas;
}
// FIN AGREGAR PALABRAS COPN UN RECUADRO PARA MARCAR CON UNA X




// AGREGAR PALABRAS COPN UN RECUADRO PARA MARCAR CON UNA X se valida solo una opcion
// var p5var = [
// { item: 'Literatura', valor: '0' }, // 0 correcta
// { item: 'Arte', valor: '1' }, // 1 incorrecta
// ]
// marcarInputX(p5var, '5')
// let core = validarMarcarInputX(p5var, 5)
function marcarInputX(array, id_div) {
   mezclar(array)
   let opciones = array.map((element, index) => {
      let color = generarColorSuave()
      return `<div style="border:solid 1px #49C2F1;display: inline-flex;align-items: center;justify-content: space-between;border-radius:5px;padding:5px;margin:5px 10px;cursor:pointer;background-color: ${color} !important; -webkit-print-color-adjust: exact; print-color-adjust: exact;position:relative;min-width:150px" class="marcarInputX" data-anijs="if: click, do: flipInX animated">
            <div>${element.item}</div>
            <b style="width:50px;height:30px;text-align: center;border-radius:5px;margin-left: 20px;display: inline-flex;align-items: center;justify-content: center;background-color: #ffffff !important; -webkit-print-color-adjust: exact;border:solid 1px #49C2F1;" class="mrcX p${id_div}opcion${index} txt-azul" data-validacion="${element.valor}"></b>
        </div>`
   }).join('')
   $("#p" + id_div + "act").html(opciones)
}

function validarMarcarInputX(array, id_div) {
   let controlVacio = 0
   let cantidadItems = array.length
   let core = 0
   for (let i = 0; i < cantidadItems; i++) {
      let verificar = $(`.p${id_div}opcion${i}`).attr('data-validacion')
      let valorTexto = $(`.p${id_div}opcion${i}`).text()
      if (valorTexto == `X`) {
         if (verificar == '0') {
            core++;
            $(`.p${id_div}opcion${i}`).addClass('bien2icono')
            $(`.p${id_div}opcion${i}`).parent().addClass('bien4')
         } else {
            $(`.p${id_div}opcion${i}`).addClass('mal2icono')
            $(`.p${id_div}opcion${i}`).parent().addClass('mal4')
         }
      } else {
         controlVacio++
      }
   }

   if ((controlVacio == cantidadItems)) {
      for (let j = 0; j < cantidadItems; j++) {
         $(`.p${id_div}opcion${j}`).addClass('mal2icono');
         $(`.p${id_div}opcion${j}`).parent().addClass('mal4')
      }
      core = 0;
   }
   core = Math.max(core, 0);
   return core / 1;
}
// FIN AGREGAR PALABRAS COPN UN RECUADRO PARA MARCAR CON UNA X


/********************************************************************* 
 * MarcarSimple
 * FIN FUNCION QUE PERMITE INGRESAR UN ARRAY IMAGNES Y CALIFICA UNA SOLA RESPUESTA
 ********************************************************************/


///AGREGAR IMAGEN CON TEXO DE LA IMAGEN
//imgNombre('<img src="img/i1_p109_act1.jpg" alt="">', 'Contaminación ambiental producidos por el cambio climático (2017)', 'p1act')
function imgNombre(img, texto, id) {
   $("#" + id + "").html(`
    <center>
        <div style="text-align:left;font-size:1.3rem;display:table">
           <div>${img}</div>
            <div>${texto}</div>
        </div>
    </center>`)
}


/************************
 *   CARGAR IMAGENES en un input    *
 ***********************/
function mostrar(eve) {
   var archivo = document.getElementById("file" + eve).files[0];
   var reader = new FileReader();
   var tiposPermitidos = ['image/jpeg', 'image/png'];
   if (!tiposPermitidos.includes(archivo.type)) {
      $(".imgCargar").after(`<p class="mensajeErrorImg" style="color:white;background-color:red;display:table;border-radius:5px;padding:5px">Por favor, selecciona un archivo de tipo JPEG o PNG.</p>`);
      setTimeout(function () {
         $(".mensajeErrorImg").remove();
      }, 4000);
      return;
   }


   var tamañoMaximo = 3 * 1024 * 1024;
   if (archivo.size > tamañoMaximo) {
      $(".imgCargar").after(`<p class="mensajeErrorImg" style="color:white;background-color:red;display:table;border-radius:5px;padding:5px">El archivo es demasiado grande. Por favor, selecciona un archivo de máximo 3 megabytes.</p>`);
      setTimeout(function () {
         $(".mensajeErrorImg").remove();
      }, 4000);
      return;
   }
   if (archivo) {
      reader.readAsDataURL(archivo);
      reader.onloadend = function () {
         document.getElementById("img" + eve).src = reader.result;
      };
   }
}



function addText(row = '1', divClass) {
   let data = `<textarea class="form-control no-redimensionar" rows="${row}" placeholder="Escribir"></textarea>`
   $("." + divClass + "").html(data)
}


const cajaTextoImg = (row, divClass) => {
   $("." + divClass + "").html(`<div style="max-width:800px">
                           <div><img src="img/imgTexto1.png" alt="" style="width:100%"></div>
                           <textarea class="form-control no-redimensionar" placeholder="Escribir" rows="${row}" style="width:100%;outline: none;padding: 0px 6px;border:none;border-left:solid 10px #7FCECF;border-right:solid 10px #7FCECF;border-radius: 0px;margin-bottom: -9px;"></textarea>
                           <div><img src="img/imgTexto3.png" alt="" style="width:100%"></div>
                        </div>`)
}


// CuentoFragmento(`titulo`, `autor`, `fragmento`, `texto`, `cita`, `colorFondo`, `id_div`)
function CuentoFragmento(titulo, autor, fragmento, texto, cita, colorFondo, id_div) {
   let data = `<div style="background-color:${colorFondo} !important;-webkit-print-color-adjust: exact;print-color-adjust: exact;border-radius:10px;padding:10px;font-family:Arial">
        <div style="color:#05B2ED !important;-webkit-print-color-adjust: exact;print-color-adjust: exact;font-size: 2rem;font-weight: bold;text-align: center;">
            ${titulo}
        </div>
        <div style="text-align: center">
            ${autor}
        </div>
        <div style="text-align: center;font-size:1.5rem">${fragmento}</div>
        <div style="margin-top:10px;text-align:justify;">
            ${texto}
        </div>
        <div style="text-align:right;">
            <cite style="font-size:1.2rem">${cita}</cite>
        </div>
    </div>`
   $("#" + id_div + "").html(data)
}


// CuentoFragmento(`texto`,`colorFondo`, `id_div`,`cita`, )
function FragmentoTexto(texto, colorFondo, id_div, cita = '') {
   let data = `<div style="background-color:${colorFondo} !important;-webkit-print-color-adjust: exact;print-color-adjust: exact;border-radius:10px;padding:10px;">
    ${texto}
    <div style="text-align:right;">
            <cite style="font-size:1.4rem">${cita}</cite>
        </div>
    </div>`
   $("#" + id_div + "").html(data)
}



// Array de preguntas
// var preguntas1 = [
//   '¿Quiénes son los personajes que aparecen en el fragmento y cuáles son sus vínculos?',
//   '¿En qué momento se sospecha que Edipo se ha dado cuenta de la verdad?',
//   '¿Crees que Edipo acepta su destino o intenta escaparse de él? <b>Explica</b>.',
//   '¿Cómo crees que Edipo hubiera podido enfrentar a su destino? <b>Reflexiona</b>.'
// ];

// preguntasArray(preguntas1, "p1act");

// Función para agregar preguntas a un contenedor con ID específico
function preguntasArray(array, contenedorId) {
   array.forEach((element, index) => {
      let data = `<div style="margin-bottom:10px"><b class="txt-azul">${letrasLista[index]}</b> ${element} <textarea class="form-control no-redimensionar" rows="2" placeholder="Escribir"></textarea></div>`;
      $("#" + contenedorId).append(data);
   });
}


///// REDACTO MI TEXTO / REVISO MI TEXTO / PUBLICO MI TEXTO
function RedactoRevisoPublicoPlanifico(accion, position = 'right') {
   let color, mensaje;
   if (accion === 'redacto') {
      color = '#ED0F65';
      mensaje = 'Redacto mi texto';
   } else if (accion === 'reviso') {
      color = '#4F2D93';
      mensaje = 'Reviso mi texto';
   } else if (accion === 'publico') {
      color = '#1B62B7';
      mensaje = 'Publico mi texto';
   } else if (accion === 'planifico') {
      color = '#B830AF';
      mensaje = 'Planifico mi texto';
   }

   let dato = `
  <div class="col-lg-12 col-md-12 col-sm-12 col-xl-12" style="border-top: 2px solid ${color}; border-radius: 20px;padding:5px 0px;margin:10px 0px 0px 0px">
      <div style="position: relative; height: 1px;top:-5px">
          <div style="position: absolute; ${position}: -15px; border: solid 2px ${color}; padding: 5px 10px; border-radius: 5px; color: ${color} !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; font-size: 2rem; font-weight: bolder; top: -25px; background-color: white !important; -webkit-print-color-adjust: exact; print-color-adjust: exact;">${mensaje}</div>
      </div>
  </div>`;
   $("#" + accion).html(dato)
}






///Dar salto de linea cuando se ingresa un valor a un input de un valor para

// document.querySelectorAll('.numOperacion').forEach(function (input, index, inputs) {
//   input.addEventListener('input', function () {
//     // Mover el foco al siguiente input si hay un carácter en este input
//     if (this.value.length === 1) {
//       var nextIndex = index + 1;
//       if (nextIndex < inputs.length) {
//         inputs[nextIndex].focus();
//       }
//     }
//   });
// });






/////// funcion para seleccionna subrayar
////// encerrarCadadUna('p1opcion') se envia la clase que se dese subrayar 
function encerrarCadadUna(clase) {
   $('.' + clase).on('click', function () {
      $(this).toggleClass('subrayar');
   });
}

/////// funcion para seleccionna subrayar
//////  agregarClase('p1opcion','subrayar') se envia la clase que se dese subrayar 
function agregarClase(clase, accion) {
   //console.log('hola');
   $('.' + clase).on('click', function () {
      $(this).toggleClass(`${accion}`);
   });
}



///// encerrar multiple
//////  agregarClaseMultiple('p1opcion','subrayar')
/// se agrega una la clase subrayar al elemento que tiene la clase p1opcion varios elementos pueden tener la clase pero 
// solo el clickeado se le agrega la clase 
function agregarClaseMultiple(clase, accion) {
   $(`.${clase}`).on("click", function () {
      var obtenerClass = $(this).attr("class").split(' ')[1];
      $("." + obtenerClass).removeClass(`${accion}`);
      $(this).addClass(`${accion}`);
   });
}

///// REDACTO MI TEXTO / REVISO MI TEXTO / PUBLICO MI TEXTO
function RedactoRevisoPublico(accion) {
   let posRight = 'right'
   let color, mensaje;
   if (accion === 'redacto') {
      color = '#ED0F65';
      mensaje = 'Redacto mi texto';
   } else if (accion === 'reviso') {
      color = '#4F2D93';
      mensaje = 'Reviso mi texto';
   } else if (accion === 'publico') {
      color = '#1B62B7';
      mensaje = 'Publico mi texto';
   }
   else if (accion === 'planifico') {
      color = '#B4128F';
      mensaje = 'Planifico mi texto';
      posRight = 'left'
   }

   let dato = `
  <div style="border-top: 4px solid ${color}; border-radius: 10px; margin-top: 20px; margin-bottom: 20px;">
      <div style="position: relative; height: 10px;" class="text-right">
          <div style="position: absolute; ${posRight}: 0px; border: solid 3px ${color}; padding: 5px 10px; border-radius: 5px; color: ${color} !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; font-size: 2rem; font-weight: bolder; top: -25px; background-color: white !important; -webkit-print-color-adjust: exact; print-color-adjust: exact;">${mensaje}</div>
      </div>
  </div>`;
   return dato;
}


function colorFondoId(nombreId, color) {
   // Obtiene el elemento por su id
   var elemento = document.getElementById(nombreId);

   if (elemento) {
      // Cambia el color de fondo usando una clase CSS
      // Se asume que ya has definido las clases adecuadas en tu CSS
      // Se actualiza el color de fondo en la clase CSS
      var style = document.createElement('style');
      style.type = 'text/css';
      style.innerHTML = `#${nombreId} { background-color: ${color} !important; }`;
      document.head.appendChild(style);
      // Agrega estilos adicionales
      elemento.style.webkitPrintColorAdjust = 'exact'; // Para navegadores basados en WebKit
      elemento.style.printColorAdjust = 'exact';       // Para otros navegadores
   } else {
      console.error(`Elemento con id '${nombreId}' no encontrado.`);
   }
}








function mostrar(eve) {
   var archivo = document.getElementById("file" + eve).files[0];
   var reader = new FileReader();
   var tiposPermitidos = ['image/jpeg', 'image/png'];
   if (!tiposPermitidos.includes(archivo.type)) {
      $(".imgCargar").after(`<p class="mensajeErrorImg" style="color:white;background-color:red;display:table;border-radius:5px;padding:5px">Por favor, selecciona un archivo de tipo JPEG o PNG.</p>`);
      setTimeout(function () {
         $(".mensajeErrorImg").remove();
      }, 4000);
      return;
   }


   var tamañoMaximo = 3 * 1024 * 1024;
   if (archivo.size > tamañoMaximo) {
      $(".imgCargar").after(`<p class="mensajeErrorImg" style="color:white;background-color:red;display:table;border-radius:5px;padding:5px">El archivo es demasiado grande. Por favor, selecciona un archivo de máximo 3 megabytes.</p>`);
      setTimeout(function () {
         $(".mensajeErrorImg").remove();
      }, 4000);
      return;
   }
   if (archivo) {
      reader.readAsDataURL(archivo);
      reader.onloadend = function () {
         document.getElementById("img" + eve).src = reader.result;
      };
   }
}


//FUNCION PARA AGREGAR IMAGENES CON SELECTS
function imgSelectRespuesta(array, actividad) {
   /// array es el vector donde estan las opciones 
   /// actividad es la actividad ingresar un numero
   let arrayResp = [];
   array.sort(f_randomico);
   array.forEach((element, index) => {
      let color = generarColorParaTextoBlanco()
      arrayResp.push(element.resp)
      let valor = `
        <div style="display:inline-table;margin:10px;text-align:center;padding:5px;border-radius:5px;border:solid 1px ${color}">
           <center>
               ${element.item}
               <select class="selectbox1 no-arrow p${actividad}sel" id="p${actividad}var${index}" style="border:solid 2px ${color};display:block;margin-top:2px"></select>
           </center>
        </div>`;
      $("#p" + actividad + "act").append(valor);
   });
   return arrayResp
}
// var p2act = [
//   { item: '<img src="img/i1_p143_act2.jpg" alt="">', resp: 'Chicha de yuca' },
//   { item: '<img src="img/i2_p143_act2.jpg" alt="">', resp: 'Chugchucara' },
//   { item: '<img src="img/i3_p143_act2.jpg" alt="">', resp: 'Ayampaco de yuca' },
// ];
// var p2res = imgSelectRespuesta(p2act, 2);
// let p2opciones = ['Chicha de yuca', 'Chugchucara', 'Ayampaco de yuca'];
// asignarOpcionesAselect(p2opciones, ".p2sel")

///validar
// function pregunta2() {
//   let core = validarExactas(p2res, "#p2var");
//   let total = (core / 3) * 3;
//   $("#pre2a").val(parseFloat(total).toFixed(2));
// }


//FIN FUNCION PARA AGREGAR IMAGENES CON SELECTS


function EnunciadoSeleccionaOpcion(array, actividad) {

   // var p3act = [
   //   {
   //     item: `ENUNCIADO 1`,
   //     resp: 'Cuerpo'
   //   },
   //   {
   //     item: `ENUNCIADO 2`,
   //     resp: 'Introducción'
   //   }
   // ];

   // let p3actividad = EnunciadoSeleccionaOpcion(p3act, 3)
   // function pregunta3() {
   //   let core = validarExactas(p3actividad, "#p3var");
   //   let total = (core / 3) * 3;
   //   $("#pre3a").val(parseFloat(total).toFixed(2));
   // }


   /********  FUNCION PARA AGREGAR UNA TABLA CON OPCIONES DE SELECCION CON SELECTS
   * -----------------------------------------------
   * ITEMS DE LA PREGUTNA         |  --SELECCIONA---
   * -----------------------------------------------
   * 
   * array es el vector donde estan las opciones 
   * actividad es la actividad - ingresar un numero
   * *****/

   let arrayRespuestas = [];
   let opcionesPregunta = '';
   array.sort(f_randomico);
   array.forEach((element, index) => {
      arrayRespuestas.push(element.resp); // Agregar cada respuesta al array
      let color = generarColorSuave()
      let valor = `
        <tr>
            <td style="text-align:left;background-color:${color} !important; -webkit-print-color-adjust: exact; print-color-adjust: exact;padding:5px;border:solid 1px silver;border-right:none; vertical-align: middle; min-height: 50px;">${element.item}</td>
            <td style="background-color:${color} !important; -webkit-print-color-adjust: exact; print-color-adjust: exact;padding:5px;border:solid 1px silver;border-left:none; vertical-align: middle; min-height: 50px;width:auto"><select class="selectbox1 no-arrow p${actividad}sel" id="p${actividad}var${index}"></select></td>
        </tr>`;
      opcionesPregunta += valor;
   });

   $("#p" + actividad + "act").html(`<table class="table" style="border-collapse: separate; border-spacing: 0px 10px;text-align:center">${opcionesPregunta}</table>`);

   let respuestasUnicas = [...new Set(arrayRespuestas)];
   respuestasUnicas.sort(f_randomico);

   let opcionesSelect = respuestasUnicas.map(element => `<option class="miClase">${element}</option>`);
   opcionesSelect.sort(f_randomico);

   $(".p" + actividad + "sel").html('<option selected disabled>selecciona ⮟</option>' + opcionesSelect.join(''));
   return arrayRespuestas;
}



///$(".estilo1").attr("style", bgColor('#EC008B'));
function bgColor(color, colortexto = 'white') {
   return `background-color: ${color} !important; -webkit-print-color-adjust: exact; print-color-adjust: exact;
  color: ${colortexto} !important; -webkit-print-color-adjust: exact; print-color-adjust: exact;`;
}


function textoColor(color) {
   return `color: ${color} !important; -webkit-print-color-adjust: exact; print-color-adjust: exact;`;
}









function minusculas_sin_Espacios(texto) {
   // ENVIAR LOS TEXTO DE UN INPUT
   // RETORNA EL TEXTO EN MINUSCULAS Y SIN ESPACIOS
   let minusculas = texto.toLowerCase()
   let minsuculasSinEspacios = minusculas.replace(/\s/g, "");
   return minsuculasSinEspacios;
}





///FUNCION QUE DEVUELVE UN NUMERO ALEATORIO
function NumAleatorio(min, max) {
   return x = Math.floor(Math.random() * (max - min + 1) + min);
}



$(".punto10").html('&emsp;&emsp;( 10 pts. ) ')
$(".punto9").html('&emsp;&emsp;( 9 pts. ) ')
$(".punto8").html('&emsp;&emsp;( 8 pts. ) ')
$(".punto7").html('&emsp;&emsp;( 7 pts. ) ')
$(".punto6").html('&emsp;&emsp;( 6 pts. ) ')
$(".punto5").html('&emsp;&emsp;( 5 pts. ) ')
$(".punto4").html('&emsp;&emsp;( 4 pts. ) ')
$(".punto35").html('&emsp;&emsp;( 3,5 pts. ) ')
$(".punto3").html('&emsp;&emsp;( 3 pts. ) ')
$(".punto25").html('&emsp;&emsp;( 2,5 pts. ) ')
$(".punto2").html('&emsp;&emsp;( 2 pts. ) ')
$(".punto15").html('&emsp;&emsp;( 1,5 pts. ) ')
$(".punto125").html('&emsp;&emsp;( 1,25 pts. ) ')
$(".punto025").html('&emsp;&emsp;( 0,25 pts. ) ')
$(".punto05").html('&emsp;&emsp;( 0,5 pts. ) ')
$(".punto075").html('&emsp;&emsp;( 0,75 pts. ) ')
$(".punto1").html('&emsp;&emsp;( 1 pt. ) ')
$(".arrastre").html('Imágenes para pegar')
$(".c-d").html('Actividad calificada por tu docente')
$(".respuesta").html('Resp.')



// &lt;, &gt;


function EndActivity() {
   // $(".navBtnGeogebra").hide()
   $("#toggle-btn-navbar-Ocultar").click()
   document.getElementById("bt_comprobar").disabled = true;
   $("#txtAlumno").attr("disabled", false);
   $(".panel-body").addClass('fin-actividad');
   $(".info").css('display', 'none');
   $(".nota-abierta").addClass("backnoabierta");
   $(".selectbox1").css('border', 'none');
   $("textarea.no-redimensionar").addClass("textarea-blanco");
   $("textarea.form-control").addClass("textarea-blanco");
   // $('#myModal').modal('show');
   // borrarAlerta();

   ///QUITAR BOTONES DEL CANVAS
   $(".lc-picker").css('display', 'none');
   $(".horz-toolbar").css('display', 'none');
   ///QUITAR LABOTONERA DE LA PIZARRA DE EDITOR
   $(".wrs_toolbar").css('display', 'none');
   $(".wrs_caretPrecisionController").css('display', 'none');
   $(".wrs_contextPanel").css('display', 'none');
   $(".wrs_imageContainer").css('display', 'none');
   $(".wrs_handWrapper >input").css('display', 'none');

   ///BOTONES DEL GEOGEBRA
   $(".toolbar > .compact ").css('display', 'none');
   // $(".toolbar > .toolPanelHeading ").css('display', 'none');
   // $(".toolbar > .main ").css('display', 'none');

   const respuestasAbiertas = document.querySelectorAll('.nota-abierta')
   respuestasAbiertas.forEach(element => {
      //console.log(element.value)
      if (element.value == '0') {
         element.value = '';
      }
   });
   $('#myModal').modal('show');
}


function reemplazarPunto(valor) {
   if ((typeof valor === 'string' || typeof valor === 'number') && valor !== null && valor !== undefined) {
      let texto = valor.toString(); // Convertimos el valor a cadena
      if (texto.includes('.')) {
         return texto.replaceAll('.', ',');
      }
      return texto; // Si no tiene punto, retornamos como está
   }
   return valor; // Retornamos el valor original si no cumple las condiciones
}


function reemplazarComa(valor) {
   if ((typeof valor === 'string' || typeof valor === 'number') && valor !== null && valor !== undefined) {
      let texto = valor.toString(); // Convertir a cadena si es número
      if (texto.includes(',')) {
         return texto.replaceAll(',', '.');
      }
      return texto; // Si no tiene coma, devolver como está
   }
   return valor; // Si no es válido, devolver el valor original
}



function sinEspacios(texto) {
   if (typeof texto === 'string' && texto) {
      return texto.replace(/\s+/g, ''); // Eliminar todos los espacios
   }
   return texto; // Devolver el valor original si no es una cadena válida
}




function procesarTexto(input) {
   if (input === undefined) {
      return "--indefinido--";
   }

   if (typeof input === "string") {
      return input.toLowerCase().replace(/\s+/g, '');
   } else if (typeof input === "number") {
      return input.toString();
   } else if (Array.isArray(input)) {
      return input.join(','); // Si es un arreglo, lo convierte en una cadena
   } else if (typeof input === "object") {
      return JSON.stringify(input); // Si es un objeto, lo convierte a JSON
   } else {
      return input; // En caso de ser otro tipo de dato
   }
}





function generarColorPastel() {
   // Generar valores RGB aleatorios entre 0 y 255
   const r = Math.floor(Math.random() * 256);
   const g = Math.floor(Math.random() * 256);
   const b = Math.floor(Math.random() * 256);

   // Suavizar los colores promediando con un tono más claro (200 en lugar de 255)
   const pastelR = Math.round((r + 200) / 2);
   const pastelG = Math.round((g + 200) / 2);
   const pastelB = Math.round((b + 200) / 2);

   // Retornar el color pastel en formato CSS
   return `rgb(${pastelR}, ${pastelG}, ${pastelB})`;
}






// FUNCION QUE RECIBE UN COLOR RGB rgb(141.5, 239, 193.5) Y LA CANTIDAD DE COLOR A OSCURECER (10) Y DEVUELVE EL COLOR UN POCO MAS OSCURO
// USO const colorOscuro = oscurecerColorRGB(color, 10);
function oscurecerColorRGB(colorRGB, porcentajeOscurecimiento) {
   // Extraer los valores de R, G y B usando una expresión regular
   const regex = /^rgb\(\s*(\d+(\.\d+)?),\s*(\d+(\.\d+)?),\s*(\d+(\.\d+)?)\s*\)$/;
   const match = colorRGB.match(regex);

   if (!match) {
      throw new Error("El color debe estar en formato RGB, por ejemplo: 'rgb(240, 153, 242.5)'.");
   }

   // Convertir los valores a números (pueden ser decimales)
   let r = parseFloat(match[1]);
   let g = parseFloat(match[3]);
   let b = parseFloat(match[5]);

   // Reducir los valores RGB según el porcentaje
   r = Math.max(0, Math.min(255, r * (1 - porcentajeOscurecimiento / 100)));
   g = Math.max(0, Math.min(255, g * (1 - porcentajeOscurecimiento / 100)));
   b = Math.max(0, Math.min(255, b * (1 - porcentajeOscurecimiento / 100)));

   // Devolver el color oscuro en formato RGB
   return `rgb(${r.toFixed(1)}, ${g.toFixed(1)}, ${b.toFixed(1)})`;
}





$(".caja_evaluo").on("click", function () {
   var obtenerClass = $(this).attr("class").split(' ')[1];
   $("." + obtenerClass).removeClass('pintarEvaluoProceso');
   $(this).addClass('pintarEvaluoProceso')
});


$("#btnEscuchar").on("click", function () {
   $("#btnPausarleer").show()
   $("#btnEscuchar").hide()
})

$("#btnPausarleer").hide()


$("#btnPausarleer").on("click", function () {
   $("#btnPausarleer").hide()
   $("#btnEscuchar").show()
})



// Función para reorganizar aleatoriamente un array
function mezclar(array) {
   for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
   }
   return array;
}


var cssCode = `
    .no-arrow {
        padding:5px 10px;border-radius:5px;outline:none;cursor:pointer;border:solid 1px silver
    }
    `;

var styleElement = document.createElement('style');
styleElement.innerHTML = cssCode;
document.head.appendChild(styleElement);



// $(document).ready(function () {

// });



/* boton CIUDADANO DIGITAL */
function showInfoCiudadanoDigital() {
   document.getElementById('infoCiudadanoDigital').style.display = 'block';
}

function hideInfoCiudadanoDigital() {
   const tooltip = document.getElementById('infoCiudadanoDigital');
   const img = document.querySelector('.binCiudadanoDigital');
   // Verifica si el cursor está sobre la imagen o el tooltip

   if (!tooltip.matches(':hover') && !img.matches(':hover')) {
      tooltip.style.display = 'none';

   }
}

//ciudadadoDigital(texto, link, divId)
//ciudadadoDigital(`Puedes jugar y responder preguntas sobre este cuento en: `, `https://cal.lat/p/Ab88l4`, `digital1`)
function ciudadadoDigital(texto, link, divId) {
   $(`.${divId}`).prepend(`
    <div style="float: right;">
        <div style="width: 190px; padding: 5px; position: relative;">
            <img src="img/ico_ciudadano_digital.png" class="binCiudadanoDigital" alt="" onmouseover="showInfoCiudadanoDigital();" onmouseout="hideInfoCiudadanoDigital();">
            <div id="infoCiudadanoDigital" style="display: none; position: absolute; background-color: white; border: solid 1px #f7ddbc; padding: 5px; z-index: 10; border-radius: 0px 20px 20px 20px; top: 56px;" onmouseover="this.style.display='block';" onmouseout="hideInfoCiudadanoDigital();">
            <div style="font-size: 1.4rem;">${texto}</div>
                <a href="${link}" target="_blank" rel="noopener noreferrer">${link}</a>
            </div>
        </div>
    </div>`)
}



/* FIN boton CIUDADANO DIGITAL */

////agregar boton en la pizarra canvas para eliminar todo
function clearCanvas() {
   const canvas = document.getElementById('canvas');
   const context = canvas.getContext('2d');
   // Borra el contenido del canvas
   context.clearRect(0, 0, canvas.width, canvas.height);
   // Verifica si imagenFondo está definida y es una función
   if (typeof imagenFondo === 'function') {
      imagenFondo();
   }
}



function mostrarAlertaTemporal(mensaje, tipo, tiempo) {
   const alerta = document.getElementById("alerta_info");
   alerta.textContent = mensaje; // Asigna el mensaje a la alerta

   // Cambia el estilo según el tipo de alerta (éxito o error)
   if (tipo === 'bieninfo') {
      alerta.classList.add('bieninfo');
      alerta.classList.remove('malinfo');
   } else if (tipo === 'malinfo') {
      alerta.classList.add('malinfo');
      alerta.classList.remove('bieninfo');
   }

   // Muestra la alerta con transición
   alerta.style.display = "block";
   setTimeout(() => {
      alerta.style.opacity = 1;  // Vuelve visible
      alerta.style.transform = "translateY(0)";  // Vuelve a su posición original
   }, 10);

   // Después de un tiempo, oculta la alerta con transición
   setTimeout(() => {
      alerta.style.opacity = 0;  // Vuelve invisible
      alerta.style.transform = "translateY(-20px)";  // Desplazamiento hacia arriba
      setTimeout(() => {
         alerta.style.display = "none";  // Oculta completamente el div después de la transición
      }, 500);
   }, tiempo);
}

let alertaMostrada = false;

function mostrarAlertaUnaVez(mensaje, tipo, tiempo) {
   if (!alertaMostrada) {
      alertaMostrada = true;
      mostrarAlertaTemporal(mensaje, tipo, tiempo);
      setTimeout(() => {
         alertaMostrada = false;
      }, tiempo);
   }
}



var letrasLista = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i) + '&#41;');
// console.log(letrasLista);
// [
//   'a&#41;', 'b&#41;', 'c&#41;', 'd&#41;', 'e&#41;', 'f&#41;',
//   'g&#41;', 'h&#41;', 'i&#41;', 'j&#41;', 'k&#41;', 'l&#41;',
//   'm&#41;', 'n&#41;', 'o&#41;', 'p&#41;', 'q&#41;', 'r&#41;',
//   's&#41;', 't&#41;', 'u&#41;', 'v&#41;', 'w&#41;', 'x&#41;',
//   'y&#41;', 'z&#41;'
// ]







/********************************************************************* 
               SelMultiple
  FUNCION QUE PERMITE INGRESAR UN ARRAY DE TEXTO O IMAGNES Y CALIFICA VARIAS RESPUESTAS 
  0 RESP CORRECTA, 1 RESP INCORRECTA
  var p3opciones = [
    { title: 'item 1', resp: '0', },
    { title: 'item 2', resp: '0', },
    { title: 'item 3', resp: '0', },
    { title: 'item 4', resp: '1', },
    { title: 'item 5', resp: '1', },
    { title: 'item 6', resp: '1', },
];

SelMultiple(p3opciones, '#p3act', 3)
validarSelMultiple(p3opciones, 3)

 ********************************************************************/
function SelMultiple(array, selector, actividad) {
   mezclar(array)
   array.forEach((element, index) => {
      let valor = `
            <div class="SelMultiple" style="margin:0px 7px">
                <div class="p${actividad}SelMultiple pintarMultiple" data-validacion="${element.resp}" data-anijs="if: click, do: flipInX animated">
                   <b class="txt-azul">${letrasLista[index]}</b> ${element.title}
                </div>
            </div>`;
      $(selector).append(valor);
   });
}

function validarSelMultiple(array, actividad) {
   let core = 0, incore = 0, controlPintar = 0, cantidadCorrectas = 0, nopinta = 0;
   let cantidadItems = array.length;
   let titles = document.querySelectorAll(`.p${actividad}SelMultiple`);
   titles.forEach(element => {
      if (element.getAttribute('data-validacion') == 0) {
         cantidadCorrectas++
      }
      if (element.classList.contains('pintar')) {
         controlPintar++
         if (element.getAttribute('data-validacion') == 0) {
            element.classList.add('bien2icono');
            element.classList.add('bien4');
            core++
         } else {
            element.classList.add('mal2icono');
            element.classList.add('mal4');
            incore++;
         }
      } else {
         nopinta++
      }
   });

   if ((Number(controlPintar) == Number(cantidadItems)) || Number(nopinta) == Number(cantidadItems)) {
      titles.forEach(element => {
         element.classList.remove('bien2icono')
         element.classList.add('mal2icono')
         element.classList.add('mal4');
      });
      core = 0;
      incore = 0
   }
   let total = ((core - incore) / cantidadCorrectas)
   if (total > 0) {
      return total
   } else {
      return 0
   }
}
/********************************************************************* 
 * SelMultiple
 * FIN FUNCION QUE PERMITE INGRESAR UN ARRAY DE TEXTO O IMAGNES Y CALIFICA VARIAS RESPUESTAS 
 ********************************************************************/



/********************************************************************* 
               SelMultipleClase
  FUNCION QUE PERMITE INGRESAR UN ARRAY DE TEXTO O IMAGNES Y CALIFICA varias RESPUESTAs
  0 RESP CORRECTA, 1 RESP INCORRECTA
var p1opciones = [
    { title: '<img src="img/i1_p80_act1.jpg" alt="">', resp: '0', },
    { title: '<img src="img/i2_p80_act1.jpg" alt="">', resp: '1', },
    { title: '<img src="img/i3_p80_act1.jpg" alt="">', resp: '1', },
];

SelMultipleClase(p1opciones, "#p1act", 1, 'p1clase')

agregarClase('p1clase', 'Encerrar1') /// sirve para seleccionar varias opciones
agregarClaseMultiple('p6clase', 'MarcarO')  /// sirve para seleccionar una sola opcion

validarSelMultipleClase(1,'Encerrar1') /// para vlaidar se envia tambien la clase que se agrega a cada elemento 


function agregarClase(clase, accion) {
   //console.log('hola');
   $('.' + clase).on('click', function () {
      $(this).toggleClass(`${accion}`);
   });
}

function agregarClaseMultiple(clase, accion) {
   $(`.${clase}`).on("click", function () {
      var obtenerClass = $(this).attr("class").split(' ')[1];
      $("." + obtenerClass).removeClass(`${accion}`);
      $(this).addClass(`${accion}`);
   });
}


 ********************************************************************/
function SelMultipleClase(array, selector, actividad, clase) {
   mezclar(array)
   let items = array.map(element => {

      return `<div style="cursor:pointer;position:relative;display:inline-table;margin:5px 40px 5px 5px !important">
                <div class="${clase} p${actividad}SelMultipleClase" data-validacion="${element.resp}" data-anijs="if: click, do: flipInX animated" style="position:relative">
                    ${element.title}
                </div>
            </div>`

   }).join('')
   $(selector).append(items);
}

function validarSelMultipleClase(actividad, clase) {
   let core = 0;
   let elementosValidos = 0;
   let controlMarcar = 0;
   let nopinta = 0
   let titles = document.querySelectorAll(`.p${actividad}SelMultipleClase`);
   titles.forEach(element => {
      if (element.classList.contains(`${clase}`)) {
         controlMarcar++
         nopinta++
         if (element.getAttribute('data-validacion') == 0) {
            element.classList.add('bien4');
            element.classList.add('bien2icono');
            core++
         } else {
            element.classList.add('mal4');
            element.classList.add('mal2icono');
         }
      }

      if (element.getAttribute('data-validacion') == 0) {
         elementosValidos++
      }
   });

   if (controlMarcar == 0 || controlMarcar == titles.length) {
      $(`.p${actividad}SelMultipleClase`).removeClass('bien4')
      $(`.p${actividad}SelMultipleClase`).addClass('mal4')
      $(`.p${actividad}SelMultipleClase`).addClass('mal2icono');
      core = 0;
   }
   if (nopinta == 0) {
      $(`.p${actividad}SelMultipleClase`).removeClass('bien4')
      $(`.p${actividad}SelMultipleClase`).addClass('mal4')
      $(`.p${actividad}SelMultipleClase`).addClass('mal2icono');
      core = 0;
   }
   let total = Math.max((core / elementosValidos), 0)
   return total
}
/********************************************************************* 
 * SelMultipleClase
 * FIN FUNCION QUE PERMITE INGRESAR UN ARRAY DE TEXTO O IMAGNES Y CALIFICA VARIAS RESPUESTAS
 ********************************************************************/









/***************
 * ESTA FUNCION RECIBE UN ARRAY PARA RELACIONA UNA LISTA DE ENUNCIADOS CON SU DEFINICION, SE RELACIONA EL LITERAL
 * LA FUCNIO RECIBE UN ARRAY Y DEVUELVE UNA ARRAY CON LAS RESPUESTAS CORRECTAS
let p1actividad = [
    {
        literal: '1 Célula procariota', enunciado: '1 El material genético no se encuentra protegido por una membrana celular.'
    },
    {
        literal: '2 Célula eucariota', enunciado: '2 Posee núcleo y organelos con doble membrana.'
    }
]

let p1respuestas = Relacionarliterales(p1actividad, '1')
let core = validarExactas(p1respuestas, "#p1var") /// validar
 */

function Relacionarliterales(array, idPregunta) {
   mezclar(array)
   let opcionesInicio = []
   let opcionesFin = []
   let respuestas = []
   let opcionesLetras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
   let pactualOpciones = []
   for (let i = 0; i < array.length; i++) {
      pactualOpciones.push(opcionesLetras[i])
      let color = generarColorPastel()
      let inicio = `<div class="cajaRelacionarLiterales"><b class="txt-azul">${letrasLista[i]}</b> ${array[i].literal}</div>`

      let fin = `<div class="cajaRelacionarLiterales" style="border:solid 2px ${color}">
                    <div><select class="p${idPregunta}sel selectbox1" id="p${idPregunta}var${i}" style="border:none;border-bottom:solid 2px ${color}"></select></div>
                    <div>${array[i].enunciado}</div>
                </div>`

      opcionesInicio.push(inicio)
      opcionesFin.push(fin)
      respuestas.push(opcionesLetras[i])
   }

   mezclar(opcionesFin)

   $(`#p${idPregunta}act`).html(`<div style="min-width: 150px;max-width: 250px;">
                     <div id="p1actInicio"
                        style="display: flex;align-items: start;justify-content: center;flex-direction: column;">${opcionesInicio.join('')}</div>
                  </div>
                  <div style="display: table">
                     <div id="p1actFin"
                        style="display: flex;align-items: start;justify-content: center;flex-direction: column;width:450px">${opcionesFin.join('')}</div>
                  </div>`)

   asignarOpcionesAselectCorto(pactualOpciones, `.p${idPregunta}sel`)

   return respuestas
}

