
document.addEventListener('DOMContentLoaded', function () {
  let elementos = document.querySelectorAll('.cajaMateCaracter1');
  elementos.forEach(function (elemento) {
    elemento.setAttribute('autocomplete', 'off');
    elemento.setAttribute('maxlength', '1');
    elemento.setAttribute('placeholder', '');
    elemento.addEventListener('keypress', function (event) {
      let key = String.fromCharCode(event.which);
      // Validar si es un carácter permitido (aquí permitimos solo números)
      if (!/[0-9]/.test(key)) {
        event.preventDefault();  // Bloquear el carácter si no es un número
      }
    });
  });
});

/// este codigo va dentro de un  $(document).ready(function () {}) sirve para campos de suma 
$(".txtizquierda").on("input", function () {
  let valorActual = $(this).val();
  if (valorActual.length > 1) {
    let nuevoValor = valorActual.slice(-1) + valorActual.slice(0, -1);
    $(this).val(nuevoValor);
  }
});



function descomponerEnTresCifras(num) {

  /**
  Ejemplo de uso
  let numero = 432;  // número de tres dígitos
  let resultado = descomponerEnTresCifras(numero);
  console.log(`Los números que sumados dan ${numero} son: ${resultado[0]} y ${resultado[1]}`);
  */

  // Verificar si el número ingresado es de tres dígitos
  if (num < 100 || num > 999) {
    return "Por favor, ingresa un número de 3 dígitos.";
  }
  // El primer número debe ser al menos 100 pero menor que el número ingresado
  let num1 = Math.floor(Math.random() * (num - 200)) + 100; // número entre 100 y (num - 100)
  // El segundo número será la diferencia entre el número original y el primero
  let num2 = num - num1;
  // Verificar que ambos números sean de 3 cifras
  if (num2 < 100 || num2 > 999) {
    return descomponerEnTresCifras(num);  // Intentar de nuevo si el segundo número no tiene 3 dígitos
  }
  return [num1, num2];
}


const descomponerCifras = (numero) => {
  return numero.toString().split("").map(Number);
};


function descomponerEnCuatroCifras(num) {
  // Verificar que el número ingresado tenga 4 cifras
  if (num < 1000 || num > 9999) {
    return "Por favor, ingresa un número de 4 cifras.";
  }

  // Asegurarnos de que tanto num1 como num2 tengan 4 cifras
  let num1, num2;

  // Intentamos encontrar un num1 válido que garantice que num2 también tenga 4 cifras
  do {
    num1 = Math.floor(Math.random() * (num - 1000)) + 1000; // num1 en el rango de 1000 a num - 1000
    num2 = num - num1; // Calculamos num2
  } while (num2 < 1000 || num2 > 9999); // Repetimos hasta que num2 también tenga 4 cifras

  // Verificar que num1 sea mayor que num2
  if (num1 > num2) {
    return [num1, num2];
  } else {
    return [num2, num1];
  }
}






// var p5act = [NumAleatorio(1000, 9999)]
// inputSuma(p2act, 'p2var', 'p2act')
// validarInputSuma('p2var')
function inputSuma(array, claseInput, div_id) {
  for (let i = 0; i < array.length; i++) {
    let cantidadTotal = array[i]
    let resultado = descomponerEnCuatroCifras(array[i]);
    // console.log(`Los números que sumados dan ${cantidadTotal} son: ${resultado[0]} y ${resultado[1]}`);
    // console.log(descomponerCifras(resultado[0])[0]);
    // console.log(descomponerCifras(resultado[0])[1]);
    // console.log(descomponerCifras(resultado[0])[2]);

    // console.log(descomponerCifras(resultado[1])[0]);
    // console.log(descomponerCifras(resultado[1])[1]);
    // console.log(descomponerCifras(resultado[1])[2]);

    // console.log(descomponerCifras(cantidadTotal)[0]);
    // console.log(descomponerCifras(cantidadTotal)[1]);
    // console.log(descomponerCifras(cantidadTotal)[2]);

    $("#" + div_id + "").append(`
        <div style="display:inline-table;margin:15px">
            <table class="table-operacion">
                <tr>
                    <td></td>
                    <td class="txt-blanco bg-azul">UM</td>
                    <td class="txt-blanco bg-verde">C</td>
                    <td class="txt-blanco bg-naranja">D</td>
                    <td class="txt-blanco bg-azul">U</td>
                </tr>
                <tr>
                    <td></td>
                    <td>${descomponerCifras(resultado[0])[0]}</td>
                    <td>${descomponerCifras(resultado[0])[1]}</td>
                    <td>${descomponerCifras(resultado[0])[2]}</td>
                    <td>${descomponerCifras(resultado[0])[3]}</td>
                </tr>
                <tr>
                    <td style="border-bottom:solid 1px black">+</td>
                    <td style="border-bottom:solid 1px black">${descomponerCifras(resultado[1])[0]}</td>
                    <td style="border-bottom:solid 1px black">${descomponerCifras(resultado[1])[1]}</td>
                    <td style="border-bottom:solid 1px black">${descomponerCifras(resultado[1])[2]}</td>
                    <td style="border-bottom:solid 1px black">${descomponerCifras(resultado[1])[3]}</td>
                </tr>
                <tr>
                    <td></td>
                    <td><input class="cajaMateCaracter1 ${claseInput}" resp="${descomponerCifras(cantidadTotal)[0]}"></td>
                    <td><input class="cajaMateCaracter1 ${claseInput}" resp="${descomponerCifras(cantidadTotal)[1]}"></td>
                    <td><input class="cajaMateCaracter1 ${claseInput}" resp="${descomponerCifras(cantidadTotal)[2]}"></td>
                    <td><input class="cajaMateCaracter1 ${claseInput}" resp="${descomponerCifras(cantidadTotal)[3]}"></td>
                </tr>
            </table>
        </div>`)
  }
}

///VALIDAR
// validarInput('p2var')
function validarInput(claseInput) {
  let cajas = document.querySelectorAll('.' + claseInput);
  let sumaTotal = 0;
  let cantidadCajas = cajas.length

  cajas.forEach(element => {
    let valor = parseInt(element.getAttribute('resp')); // Convertir el valor a número
    let ingreso = parseInt(element.value); // Convertir el ingreso a número
    // Validar la entrada
    if (!isNaN(ingreso) && ingreso === valor) {
      element.classList.add('bien');
      sumaTotal++;
    } else {
      element.classList.add('mal');
    }
  });
  let total = sumaTotal / cantidadCajas
  return total
}





// var p5act = [NumAleatorio(1000, 9999)]
// inputResta(p2act, 'p2var', 'p2act')
// validarInputResta('p2var')
function inputResta(array, claseInput, div_id) {
  for (let i = 0; i < array.length; i++) {
    let cantidadTotal = array[i]
    let resultado = descomponerEnCuatroCifras(array[i]);
    // console.log(`Los números que sumados dan ${cantidadTotal} son: ${resultado[0]} y ${resultado[1]}`);
    var cantidadRestaMayor = Array.from(String(cantidadTotal), Number);

    $("#" + div_id + "").append(`
        <div style="display:inline-table;margin:15px">
            <table class="table-operacion">
                <tr>
                    <td></td>
                    <td class="txt-blanco bg-azul">UM</td>
                    <td class="txt-blanco bg-verde">C</td>
                    <td class="txt-blanco bg-naranja">D</td>
                    <td class="txt-blanco bg-azul">U</td>
                </tr>
                <tr>
                    <td></td>
                    <td>${descomponerCifras(cantidadRestaMayor[0])}</td>
                    <td>${descomponerCifras(cantidadRestaMayor[1])}</td>
                    <td>${descomponerCifras(cantidadRestaMayor[2])}</td>
                    <td>${descomponerCifras(cantidadRestaMayor[3])}</td>
                </tr>
                <tr>
                    <td style="border-bottom:solid 1px black">-</td>
                    <td style="border-bottom:solid 1px black">${descomponerCifras(resultado[0])[0]}</td>
                    <td style="border-bottom:solid 1px black">${descomponerCifras(resultado[0])[1]}</td>
                    <td style="border-bottom:solid 1px black">${descomponerCifras(resultado[0])[2]}</td>
                    <td style="border-bottom:solid 1px black">${descomponerCifras(resultado[0])[3]}</td>
                </tr>
                <tr>
                    <td></td>
                    <td><input class="cajaMateCaracter1 ${claseInput}" resp="${descomponerCifras(resultado[1])[0]}"></td>
                    <td><input class="cajaMateCaracter1 ${claseInput}" resp="${descomponerCifras(resultado[1])[1]}"></td>
                    <td><input class="cajaMateCaracter1 ${claseInput}" resp="${descomponerCifras(resultado[1])[2]}"></td>
                    <td><input class="cajaMateCaracter1 ${claseInput}" resp="${descomponerCifras(resultado[1])[3]}"></td>
                </tr>
            </table>
        </div>`)
  }
}
///VALIDAR
// validarInputResta('p2var')
function validarInputResta(claseInput) {
  let cajas = document.querySelectorAll('.' + claseInput);
  let sumaTotal = 0;
  let cantidadCajas = cajas.length

  cajas.forEach(element => {
    let valor = parseInt(element.getAttribute('resp')); // Convertir el valor a número
    let ingreso = parseInt(element.value); // Convertir el ingreso a número
    // Validar la entrada
    if (!isNaN(ingreso) && ingreso === valor) {
      element.classList.add('bien');
      sumaTotal++;
    } else {
      element.classList.add('mal');
    }
  });
  let total = sumaTotal / cantidadCajas
  return total
}




// var p5act = [NumAleatorio(1000, 9999)]
// inputMultiplicacion(p2act, 'p2var', 'p2act')
// validarInputMultiplicacion('p2var')
function inputMultiplicacion(array, claseInput, div_id) {

  let cantidadMayor = array[0]
  let cantidadMenor = array[1]
  // console.log(cantidadMayor)
  // console.log(cantidadMenor)


  let totalMultipliccion = (cantidadMayor * cantidadMenor)
  // console.log(totalMultipliccion)
  let arrayTotal = String(totalMultipliccion).split('')
  // console.log(arrayTotal)

  if (arrayTotal.length == 5) {
    arrayTotal.unshift('nada')
  }

  // console.log(arrayTotal)

  let cantidadMultiplicacionMayor = Array.from(String(cantidadMayor), Number);
  let cantidadMultiplicacionMenor = Array.from(String(cantidadMenor), Number);

  // console.log(descomponerCifras(resultado[0])[0]);
  // console.log(descomponerCifras(resultado[0])[1]);
  // console.log(descomponerCifras(resultado[0])[2]);

  // console.log(descomponerCifras(resultado[1])[0]);
  // console.log(descomponerCifras(resultado[1])[1]);
  // console.log(descomponerCifras(resultado[1])[2]);

  // console.log(descomponerCifras(cantidadTotal)[0]);
  // console.log(descomponerCifras(cantidadTotal)[1]);
  // console.log(descomponerCifras(cantidadTotal)[2]);

  $("#" + div_id + "").append(`
        <div style="display:inline-table;margin:15px">
            <table class="table-operacion">
                <tr>                    
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="txt-blanco bg-azul">UM</td>
                    <td class="txt-blanco bg-verde">C</td>
                    <td class="txt-blanco bg-naranja">D</td>
                    <td class="txt-blanco bg-azul">U</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>${descomponerCifras(cantidadMultiplicacionMayor[0])}</td>
                    <td>${descomponerCifras(cantidadMultiplicacionMayor[1])}</td>
                    <td>${descomponerCifras(cantidadMultiplicacionMayor[2])}</td>
                    <td>${descomponerCifras(cantidadMultiplicacionMayor[3])}</td>
                </tr>
                <tr>
                    <td style="border-bottom:solid 1px black"></td>
                     <td style="border-bottom:solid 1px black"></td>
                    <td style="border-bottom:solid 1px black">x</td>
                    <td style="border-bottom:solid 1px black"></td>
                    <td style="border-bottom:solid 1px black"></td>
                    <td style="border-bottom:solid 1px black">${descomponerCifras(cantidadMultiplicacionMenor[0])}</td>
                    <td style="border-bottom:solid 1px black">${descomponerCifras(cantidadMultiplicacionMenor[1])}</td>
                </tr>
                <tr>
                    <td></td>
                    <td><input class="cajaMateCaracter1"></td>
                    <td><input class="cajaMateCaracter1"></td>
                    <td><input class="cajaMateCaracter1"></td>
                    <td><input class="cajaMateCaracter1"></td>
                    <td><input class="cajaMateCaracter1"></td>
                    <td><input class="cajaMateCaracter1"></td>
                </tr>
                <tr>
                    <td style="border-bottom:solid 1px black">+</td>
                    <td style="border-bottom:solid 1px black"><input class="cajaMateCaracter1"></td>
                    <td style="border-bottom:solid 1px black"><input class="cajaMateCaracter1"></td>
                    <td style="border-bottom:solid 1px black"><input class="cajaMateCaracter1"></td>
                    <td style="border-bottom:solid 1px black"><input class="cajaMateCaracter1"></td>
                    <td style="border-bottom:solid 1px black"><input class="cajaMateCaracter1"></td>
                    <td style="border-bottom:solid 1px black"><input class="cajaMateCaracter1"></td>
                </tr>
                <tr>
                    <td></td>
                    <td>${arrayTotal[0] === 'nada' ? '' : `<input class="cajaMateCaracter1 ${claseInput}" resp="${arrayTotal[0]}">`}</td>
                    <td><input class="cajaMateCaracter1 ${claseInput}" resp="${arrayTotal[1]}"></td>
                    <td><input class="cajaMateCaracter1 ${claseInput}" resp="${arrayTotal[2]}"></td>
                    <td><input class="cajaMateCaracter1 ${claseInput}" resp="${arrayTotal[3]}"></td>
                    <td><input class="cajaMateCaracter1 ${claseInput}" resp="${arrayTotal[4]}"></td>
                    <td><input class="cajaMateCaracter1 ${claseInput}" resp="${arrayTotal[5]}"></td>
                </tr>
            </table>
        </div>`)
}
///VALIDAR
// validarInputMultiplicacion('p2var')
function validarInputMultiplicacion(claseInput) {
  let cajas = document.querySelectorAll('.' + claseInput);
  let sumaTotal = 0;
  let cantidadCajas = cajas.length

  cajas.forEach(element => {
    let valor = parseInt(element.getAttribute('resp')); // Convertir el valor a número
    let ingreso = parseInt(element.value); // Convertir el ingreso a número
    // Validar la entrada
    if (!isNaN(ingreso) && ingreso === valor) {
      element.classList.add('bien');
      sumaTotal++;
    } else {
      element.classList.add('mal');
    }
  });
  let total = sumaTotal / cantidadCajas
  return total
}







///USO
// var p2acta = [
//     { sumando1: numeroTresCifras(500, 999), sumando2: numeroTresCifras(100, 490), id: '0' },
//     { sumando1: numeroTresCifras(500, 999), sumando2: numeroTresCifras(100, 490), id: '1' },
//     { sumando1: numeroTresCifras(500, 999), sumando2: numeroTresCifras(100, 490), id: '2' },
// ]
// var arrayRespuestas2 =   restaTresCifras(p2acta, '2a', 'p2acta')
// console.log(arrayRespuestas2);
/// muestra los valores para realizar la resta y se valida el resutlado

function restaTresCifras(array, actividad, div_id) {
  var arrayRespuestas = []
  array.forEach((element, index) => {
    let mayor = parseInt(String(element.sumando1[1]) + String(element.sumando1[2]) + String(element.sumando1[3]))
    let menor = parseInt(String(element.sumando2[1]) + String(element.sumando2[2]) + String(element.sumando2[3]))
    let respuesta = mayor - menor
    // console.log(mayor + " menos " + menor + " respeustas es: " + respuesta);
    arrayRespuestas.push(respuesta)
    let valor = `
  <div style="display:inline-table;margin:15px">
    <table class="table-operacion">
      <tr>
        <td></td>
        <td class="txt-blanco bg-verde">C</td>
        <td class="txt-blanco bg-naranja">D</td>
        <td class="txt-blanco bg-azul">U</td>
      </tr>
      <tr>
        <td></td>
        <td>${element.sumando1[1]}</td>
        <td>${element.sumando1[2]}</td>
        <td>${element.sumando1[3]}</td>
      </tr>
      <tr>
        <td style="border-bottom:solid 1px black">–</td>
        <td style="border-bottom:solid 1px black">${element.sumando2[1]}</td>
        <td style="border-bottom:solid 1px black">${element.sumando2[2]}</td>
        <td style="border-bottom:solid 1px black">${element.sumando2[3]}</td>
      </tr>
      <tr>
        <td></td>
        <td><input class="cajaMateCaracter1" id="p${actividad}centena${index}"></td>
        <td><input class="cajaMateCaracter1" id="p${actividad}decena${index}"></td>
        <td><input class="cajaMateCaracter1" id="p${actividad}unidad${index}"></td>
      </tr>
    </table>
        </div>`
    $("#" + div_id).append(valor)
  });
  return arrayRespuestas
}


function tablaResta3Sincalificar(divClass) {
  let data = `<div style="display:inline-table;margin:15px">
  <table class="table-operacion">
    <tr>
      <td></td>
      <td class="txt-blanco bg-verde">C</td>
      <td class="txt-blanco bg-naranja">D</td>
      <td class="txt-blanco bg-azul">U</td>
    </tr>
    <tr>
      <td></td>
      <td><input class="cajaMateCaracter1"></td>
      <td><input class="cajaMateCaracter1"></td>
      <td><input class="cajaMateCaracter1"></td>
    </tr>
    <tr>
      <td style="border-bottom:solid 1px black">–</td>
      <td style="border-bottom:solid 1px black"><input class="cajaMateCaracter1"></td>
      <td style="border-bottom:solid 1px black"><input class="cajaMateCaracter1"></td>
      <td style="border-bottom:solid 1px black"><input class="cajaMateCaracter1"></td>
    </tr>
    <tr>
      <td></td>
      <td><input class="cajaMateCaracter1"></td>
      <td><input class="cajaMateCaracter1"></td>
      <td><input class="cajaMateCaracter1"></td>
    </tr>
  </table>
        </div> `
  $("." + divClass + "").html(data)
}


function verificarRestaTresCifras(arrayResp, actividad) {
  let core = 0;
  for (let i = 0; i < arrayResp.length; i++) {
    let respuesta = parseInt(
      String($("#p" + actividad + "centena" + i).val()) +
      String($("#p" + actividad + "decena" + i).val()) +
      String($("#p" + actividad + "unidad" + i).val()))
    if (respuesta == arrayResp[i]) {
      core++;
      $("#p" + actividad + "centena" + i).addClass('bien')
      $("#p" + actividad + "decena" + i).addClass('bien')
      $("#p" + actividad + "unidad" + i).addClass('bien')
    } else {
      $("#p" + actividad + "centena" + i).addClass('mal')
      $("#p" + actividad + "decena" + i).addClass('mal')
      $("#p" + actividad + "unidad" + i).addClass('mal')
    }
  }
  let total = core / arrayResp.length
  return total
}



//////USO  restaTresCifrascamposVacios
// let numeromayorp3 = NumAleatorio(500, 650)
// let numeromenorp3 = NumAleatorio(250, 350)
// $("#p3cantidadmayor").html(`${ numeromayorp3 } `)
// $("#p3cantidadmenor").html(`${ numeromenorp3 } `)

// var p3act = [
//     { mayor: numeromayorp3, menor: numeromenorp3, id: '0' },
// ]

// var arrayRespuestas3 = restaTresCifrascamposVacios(p3act, '3', 'p3act')
// console.log(arrayRespuestas3);

// function pregunta3() {
//     let core = validarRestaTresCifrascamposVacios(arrayRespuestas3, 3)
//     let total = (core / 1) * 1;
//     $("#pre3a").val(parseFloat(total).toFixed(2));
// }
function restaTresCifrascamposVacios(array, actividad, div_id) {
  var arrayRespuestas = []
  array.forEach((element, index) => {
    //console.log(element.mayor + "  menos : " + element.menor + " es igual a :")
    let respuesta = element.mayor - element.menor
    //console.log(respuesta)
    arrayRespuestas.push(respuesta)
    let valor = `
  <div style="display:inline-table;margin:15px">
    <table class="table-operacion">
      <tr>
        <td></td>
        <td class="txt-blanco bg-verde">C</td>
        <td class="txt-blanco bg-naranja">D</td>
        <td class="txt-blanco bg-azul">U</td>
      </tr>
      <tr>
        <td></td>
        <td><input class="cajaMateCaracter1"></td>
        <td><input class="cajaMateCaracter1"></td>
        <td><input class="cajaMateCaracter1"></td>
      </tr>
      <tr>
        <td style="border-bottom:solid 1px black">–</td>
        <td style="border-bottom:solid 1px black"><input class="cajaMateCaracter1"></td>
        <td style="border-bottom:solid 1px black"><input class="cajaMateCaracter1"></td>
        <td style="border-bottom:solid 1px black"><input class="cajaMateCaracter1"></td>
      </tr>
      <tr>
        <td></td>
        <td><input class="cajaMateCaracter1" id="p${actividad}centena${index}"></td>
        <td><input class="cajaMateCaracter1" id="p${actividad}decena${index}"></td>
        <td><input class="cajaMateCaracter1" id="p${actividad}unidad${index}"></td>
      </tr>
    </table>
        </div> `
    $("#" + div_id).append(valor)
  });
  return arrayRespuestas
}

function validarRestaTresCifrascamposVacios(arrayResp, actividad) {
  let core = 0;
  for (let i = 0; i < arrayResp.length; i++) {
    let respuesta = parseInt(
      String($("#p" + actividad + "centena" + i).val()) +
      String($("#p" + actividad + "decena" + i).val()) +
      String($("#p" + actividad + "unidad" + i).val()))
    if (respuesta == arrayResp[i]) {
      core++;
      $("#p" + actividad + "centena" + i).addClass('bien')
      $("#p" + actividad + "decena" + i).addClass('bien')
      $("#p" + actividad + "unidad" + i).addClass('bien')
    } else {
      $("#p" + actividad + "centena" + i).addClass('mal')
      $("#p" + actividad + "decena" + i).addClass('mal')
      $("#p" + actividad + "unidad" + i).addClass('mal')
    }
  }
  let total = core / arrayResp.length
  return total
}





/// esta funcion devuelve el numero formado y separa los numeros que lo componen
function numeroCentenaDecenaUnidad(min, max) {
  let numero = Math.floor(Math.random() * (max - min + 1) + min);
  let valor = numero
  let unidad = valor % 10;
  valor = Math.floor(valor / 10);
  let decena = valor % 10;
  valor = Math.floor(valor / 10);
  let centena = valor % 10;
  return [numero, centena, decena, unidad];
}

///unidad de millar
function numeroCuatroCifras(min, max) {
  let numero = Math.floor(Math.random() * (max - min + 1) + min);
  let valor = numero;
  let unidad = valor % 10;
  valor = Math.floor(valor / 10);
  let decena = valor % 10;
  valor = Math.floor(valor / 10);
  let centena = valor % 10;
  valor = Math.floor(valor / 10);
  let unidadMillar = valor % 10;
  return [numero, unidadMillar, centena, decena, unidad];
}


///unidad de millar
function numeroTresCifras(min, max) {
  let numero = Math.floor(Math.random() * (max - min + 1) + min);
  let valor = numero;
  let unidad = valor % 10;
  valor = Math.floor(valor / 10);
  let decena = valor % 10;
  valor = Math.floor(valor / 10);
  let centena = valor % 10;

  return [numero, centena, decena, unidad];
}


function generarNumeroSinCeroSepararDigitos(min, max) {
  let numero;

  // Generar un número aleatorio dentro del rango que no contenga el número '0'
  do {
    numero = Math.floor(Math.random() * (max - min + 1) + min);
  } while (numero.toString().includes('0')); // Repetir si el número contiene '0'

  // Separar el número en sus dígitos
  const numerosSeparados = numero.toString().split('').map(Number);

  // Retornar el número original y sus dígitos
  return [numero, ...numerosSeparados];
}

// console.log(numeroAleatorioSeparado(100, 999));  // Ejemplo: [456, 4, 5, 6]





function numeroCuatroCifrasSinCero(min, max) {
  let numero = 0;
  let valor = 0;

  // Generar un número hasta que no contenga ningún cero
  do {
    numero = Math.floor(Math.random() * (max - min + 1) + min);
    valor = numero;
    var contieneCero = false;

    // Verificar si el número contiene un cero
    while (valor > 0 && !contieneCero) {
      if (valor % 10 === 0) {
        contieneCero = true;
      }
      valor = Math.floor(valor / 10);
    }
  } while (contieneCero);

  // Descomponer el número en sus dígitos
  let numeroCompleto = numero
  let unidad = numero % 10;
  numero = Math.floor(numero / 10);
  let decena = numero % 10;
  numero = Math.floor(numero / 10);
  let centena = numero % 10;
  numero = Math.floor(numero / 10);
  let unidadMillar = numero;
  return [numeroCompleto, unidadMillar, centena, decena, unidad];
}


function ordenarNumerosAscendente(numeros) {
  // Utilizamos el método sort() para ordenar los números
  // El método sort() ordena alfabéticamente, por lo que necesitamos proporcionar una función de comparación
  // Esta función de comparación compara dos números y los ordena de menor a mayor
  numeros.sort(function (a, b) {
    return a - b;
  });
  return numeros;
}

function ordenarNumerosDescendente(numeros) {
  // Utilizamos el método sort() para ordenar los números
  // El método sort() ordena alfabéticamente, por lo que necesitamos proporcionar una función de comparación
  // Esta función de comparación compara dos números y los ordena de menor a mayor
  numeros.sort(function (a, b) {
    return b - a;
  });
  return numeros;
}



function tablaSuma3(divClass, actividad) {
  let data = `<div div style="display:inline-table;margin:15px">
  <table class="table-operacion">
    <tr>
      <td></td>
      <td class="txt-blanco bg-verde">C</td>
      <td class="txt-blanco bg-naranja">D</td>
      <td class="txt-blanco bg-azul">U</td>
    </tr>
    <tr>
      <td></td>
      <td><input class="cajaMateCaracter1"></td>
      <td><input class="cajaMateCaracter1"></td>
      <td><input class="cajaMateCaracter1"></td>
    </tr>
    <tr>
      <td style="border-bottom:solid 1px black">+</td>
      <td style="border-bottom:solid 1px black"><input class="cajaMateCaracter1"></td>
      <td style="border-bottom:solid 1px black"><input class="cajaMateCaracter1"></td>
      <td style="border-bottom:solid 1px black"><input class="cajaMateCaracter1"></td>
    </tr>
    <tr>
      <td></td>
      <td><input class="cajaMateCaracter1" id="p${actividad}centena"></td>
      <td><input class="cajaMateCaracter1" id="p${actividad}decena"></td>
      <td><input class="cajaMateCaracter1" id="p${actividad}unidad"></td>
    </tr>
  </table>
        </div>`
  $("." + divClass + "").html(data)
}

function validartablaSuma3(actividad, sumando1, sumando2) {
  let core = 0
  let respuesta = sumando1 + sumando2
  let valorIngresado = parseInt(String($(`#p${actividad} centena`).val() + $(`#p${actividad} decena`).val() + $(`#p${actividad} unidad`).val()))
  if (valorIngresado == respuesta) {
    core++;
    $(`#p${actividad} centena`).addClass('bien')
    $(`#p${actividad} decena`).addClass('bien')
    $(`#p${actividad} unidad`).addClass('bien')
  } else {
    $(`#p${actividad} centena`).addClass('mal')
    $(`#p${actividad} decena`).addClass('mal')
    $(`#p${actividad} unidad`).addClass('mal')
  }
  return core
}

function tablaSuma3Sincalificar(divClass) {
  let data = `<div style="display:inline-table;margin:15px" >
  <table class="table-operacion">
    <tr>
      <td></td>
      <td class="txt-blanco bg-verde">C</td>
      <td class="txt-blanco bg-naranja">D</td>
      <td class="txt-blanco bg-azul">U</td>
    </tr>
    <tr>
      <td></td>
      <td><input class="cajaMateCaracter1"></td>
      <td><input class="cajaMateCaracter1"></td>
      <td><input class="cajaMateCaracter1"></td>
    </tr>
    <tr>
      <td style="border-bottom:solid 1px black">+</td>
      <td style="border-bottom:solid 1px black"><input class="cajaMateCaracter1"></td>
      <td style="border-bottom:solid 1px black"><input class="cajaMateCaracter1"></td>
      <td style="border-bottom:solid 1px black"><input class="cajaMateCaracter1"></td>
    </tr>
    <tr>
      <td></td>
      <td><input class="cajaMateCaracter1"></td>
      <td><input class="cajaMateCaracter1"></td>
      <td><input class="cajaMateCaracter1"></td>
    </tr>
  </table>
        </div>`
  $("." + divClass + "").html(data)
}



/// funcion que recine una cantidad de tres numeros y los devuelve en un array 
// // Ejemplo de uso:
// let resultado = separar3Digitos(123);
// console.log(resultado);  // [1, 2, 3]
function separar3Digitos(numero) {
  // Convertimos el número a cadena para acceder a cada dígito por separado
  let strNumero = numero.toString();

  // Validamos que el número tenga exactamente tres dígitos
  if (strNumero.length !== 3) {
    throw new Error("El número debe tener exactamente tres dígitos.");
  }

  // Convertimos cada carácter a número y lo guardamos en un array
  let digitos = Array.from(strNumero, Number);

  return digitos;
}



function tablaSuma3digitos3cantidades(divClass, actividad) {
  let data = `<div style="display:inline-table;margin:15px" >
  <table class="table-operacion">
    <tr>
      <td></td>
      <td class="txt-blanco bg-verde">C</td>
      <td class="txt-blanco bg-naranja">D</td>
      <td class="txt-blanco bg-azul">U</td>
    </tr>
    <tr>
      <td></td>
      <td><input class="cajaMateCaracter1"></td>
      <td><input class="cajaMateCaracter1"></td>
      <td><input class="cajaMateCaracter1"></td>
    </tr>
    <tr>
      <td></td>
      <td><input class="cajaMateCaracter1"></td>
      <td><input class="cajaMateCaracter1"></td>
      <td><input class="cajaMateCaracter1"></td>
    </tr>
    <tr>
      <td style="border-bottom:solid 1px black">+</td>
      <td style="border-bottom:solid 1px black"><input class="cajaMateCaracter1"></td>
      <td style="border-bottom:solid 1px black"><input class="cajaMateCaracter1"></td>
      <td style="border-bottom:solid 1px black"><input class="cajaMateCaracter1"></td>
    </tr>
    <tr>
      <td></td>
      <td><input class="cajaMateCaracter1" id="p${actividad}centena"></td>
      <td><input class="cajaMateCaracter1" id="p${actividad}decena"></td>
      <td><input class="cajaMateCaracter1" id="p${actividad}unidad"></td>
    </tr>
  </table>
        </div>`
  $("." + divClass + "").html(data)
}





function agregarImgContar(numero, img, largo, ancho) {
  ////    caja = agregarImgContar(1, `<img src="img/ico_10dolares1.png" alt="">`, 75, 172)
  ///     numero la cantidad de veces que se va a repetir la imagen
  ///     img la etiqueta img con la ruta
  ///     largo el largo de la imagen 
  ///     ancho el ancho de la imagen
  ///     esta funcion debe recibir numero del 1 al 9
  let contenido = ''
  let top = 0;
  let left = 0;
  for (let i = 0; i < numero; i++) {
    contenido += `<div style="position: absolute;top:${top}px;left:${left}px;"> ${img}</div>`
    top += 15;
    left += 10;
  }
  let cajaImg = `<div style="position: relative;height:${top + largo}px;width:${left + ancho}px;"> ${contenido}</div> `
  return cajaImg
}


function addAbaco7digitos(numero, div_id) {
  // funcion que recibe un numero de 7 digitos lo convierte en texto
  // USO    addAbaco7digitos(NumAleatorio(1001, 9999), "p1acta")
  let numIngreso = numero.toString()
  let arregloNumeros = numIngreso.split("");
  // console.log(arregloNumeros);
  // Inicializar variables como cadenas vacías
  let uMillon = '', cMil = '', dMil = '', uMil = '', centena = '', decena = '', unidad = '';


  uMillon += `<img src="img/AbacoAzul${arregloNumeros[0]}.png" alt="">`
  cMil += `<img src="img/AbacoVerde${arregloNumeros[1]}.png" alt="">`
  dMil += `<img src="img/AbacoRosa${arregloNumeros[2]}.png" alt="">`
  uMil += `<img src="img/AbacoAzul${arregloNumeros[3]}.png" alt="">`
  centena += `<img src="img/AbacoVerde${arregloNumeros[4]}.png" alt="">`
  decena += `<img src="img/AbacoRosa${arregloNumeros[5]}.png" alt="">`
  unidad += `<img src="img/AbacoAzul${arregloNumeros[6]}.png" alt="">`


  $("#" + div_id).html(`<div style="position: relative;display:table">
    <img src="img/abaco7digitos.png" alt="">
    <div class="abacoTablaroMil cajaabacoUMillon">${uMillon}</div>
    <div class="abacoTablaroMil cajaabacoCM">${cMil}</div>
    <div class="abacoTablaroMil cajaabacoDM">${dMil}</div>
    <div class="abacoTablaroMil cajaabacoUM">${uMil}</div>
    <div class="abacoTablaroMil cajaabacoUC">${centena}</div>
    <div class="abacoTablaroMil cajaabacoUD">${decena}</div>
    <div class="abacoTablaroMil cajaabacoU">${unidad}</div>
  </div>`)
}



function addAbacoMil(numero, div_id) {
  // funcion que recibe un numero de 4 digitos lo convierte en texto
  // USO    addAbacoMil(NumAleatorio(1001, 9999), "p1acta")
  let numIngreso = numero.toString()
  let arregloNumeros = numIngreso.split("");
  // console.log(arregloNumeros);
  // Inicializar variables como cadenas vacías
  let mil = "", centena = "", decena = "", unidad = "";

  for (let i = 0; i < arregloNumeros[0]; i++) {
    mil += `<img src="img/abacoUniMil.png" alt="">`
  }
  for (let i = 0; i < arregloNumeros[1]; i++) {
    centena += `<img src="img/abacoCen.png" alt="">`
  }
  for (let i = 0; i < arregloNumeros[2]; i++) {
    decena += `<img src="img/abacoDec.png" alt="">`
  }
  for (let i = 0; i < arregloNumeros[3]; i++) {
    unidad += `<img src="img/abacoUni.png" alt="">`
  }

  $("#" + div_id).html(`<div style="position: relative;">
  <img src="img/abacoMil.png" alt="">
    <div class="abacoTablaroMil cajaabacoUM">${mil}</div>
    <div class="abacoTablaroMil cajaabacoUC">${centena}</div>
    <div class="abacoTablaroMil cajaabacoUD">${decena}</div>
    <div class="abacoTablaroMil cajaabacoU">${unidad}</div>
  </div>`)
}

function addCubosMil(numero, div_id) {
  // funcion que recibe un numero de 4 digitos lo convierte en texto
  // USO    addCubosMil(NumAleatorio(1001, 9999), "p1acta")
  let numIngreso = numero.toString()
  let arregloNumeros = numIngreso.split("");
  // console.log(arregloNumeros);
  // Inicializar variables como cadenas vacías

  let mil = `<img src="img/Mil${arregloNumeros[0]}.png" alt="">`
  let centena = `<img src="img/Centena${arregloNumeros[1]}.png" alt="">`
  let decena = `<img src="img/Decena${arregloNumeros[2]}.png" alt="">`
  let unidad = `<img src="img/Unidad${arregloNumeros[3]}.png" alt="">`

  $("#" + div_id).html(`<div style="display:inline-flex">
    <div>${mil}</div>
    <div>${centena}</div>
    <div>${decena}</div>
    <div>${unidad}</div>
  </div>`)
}

function girar90izquierda(idimg) {
  ///USO DE LA FUNCION
  //  <button class="btn btn-success" style="font-size: 2.5rem;"  onclick="girar90izquierda('p7img2')">⭯</button >
  //  <img src="img/i2_p123_act7.png" alt="" id="p7img2" data-angle="0">

  let img = document.getElementById(idimg);
  let currentAngle = parseInt(img.getAttribute("data-angle")) || 0;
  currentAngle -= 90;
  if (currentAngle < 0) {
    currentAngle = 270;
  }
  img.style.transform = `rotate(${currentAngle}deg)`;
  img.setAttribute("data-angle", currentAngle);
}


function girar90derecha(idimg) {
  ///USO DE LA FUNCION
  //   <button class="btn btn-warning" style="font-size: 2.5rem;" onclick="girar90derecha('p7img2')">⭮</button>
  //  <img src="img/i2_p123_act7.png" alt="" id="p7img2" data-angle="0">

  let img = document.getElementById(idimg);
  let currentAngle = parseInt(img.getAttribute("data-angle")) || 0;
  currentAngle += 90;
  if (currentAngle >= 360) {
    currentAngle = 0;
  }
  img.style.transform = `rotate(${currentAngle}deg)`;
  img.setAttribute("data-angle", currentAngle);
}



function invertirTexto(texto) {
  return texto.split("").reverse().join("");
}


function generarNumeroAleatorioSinCero(min, max) {
  let numero;

  do {
    // Genera un número aleatorio en el rango [min, max]
    numero = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (numero.toString().includes('0')); // Repetir si el número contiene '0'

  return numero;
}

// // Ejemplo de uso:
// console.log(generarNumeroAleatorioSinCero(100, 999));  // Genera un número entre 100 y 999 sin ceros


function formatearNumeroEspacioscada3(numero) {
  // USO
  // const numero = 45800942678231;
  // const numeroFormateado = formatearNumeroEspacioscada3(numero);
  // console.log(numeroFormateado);  // "45 800 942 678 231"

  // Convertimos el número a string para poder manipularlo
  const numeroStr = numero.toString();
  // Usamos una expresión regular para añadir un espacio cada 3 dígitos desde el final
  return numeroStr.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}


// FUNCION PARA AGREGAR CUADROS PINTAR DE FRACCIONES 

function pintarFraccion(entero, cantidadCajas, divId) {
  // pintarFraccion(1, 14, 'p2caja1')
  // $(document).ready(function () {
  //     agregarClase('fraccionUnidad', 'pintarFraccion')
  // })
  let grupo = '';
  for (let i = 0; i < entero; i++) {
    let cajas = '<div class="grupoFraccion">';
    for (let j = 0; j < cantidadCajas; j++) {
      cajas += `<div class="cajaFraccion fraccionUnidad ${divId}" data-anijs="if: click, do: bounceIn animated"></div>`;
    }
    cajas += '</div>';
    grupo += cajas;
  }
  $("#" + divId).html(grupo);
}


// VALIDAR INPUT QUE TIENE UNA CLASE que tiene el atributo data-info
function validarCajas(clase) {
  // uso
  // let core = validarCajas('p1var') 
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







/// USO DE LA FUNCION cantidadEscribirEnLetras()
// var p1actividad = [NumAleatorio(1000000, 9999999), NumAleatorio(1000000, 9999999)]
// console.log(p1actividad)
// let resp1 = cantidadEscribirEnLetras(p1actividad, 'p1act',1)
// console.log(resp1)
// ESTEVALOR RESP1 SE VALIDA EN LA FUCNION VALIDAR

function cantidadEscribirEnLetras(array, div_id, numPregunta) {
  // esta funcion recibe un nuemro de 7 digitos lo descompone en las posciciones y tiene un campo para que se ingrese e numero en leras que se validan
  // recibe array -> los numeros, div_id -> div dodne se va a inyentar las tablas, ->1 pregunta que va en cada id del textarea
  // retorna el array con las respeustas correctas


  var p1respuestas = []
  const opciones = array.map((element, index) => {
    // console.log(element)
    let letrasTexto = NumerosaLetras(element)
    // console.log(letrasTexto)
    p1respuestas.push(letrasTexto)

    let arrayNumero = String(element).split('')
    // console.log(arrayNumero)
    return `
        <div style="margin:5px;border:solid 1px salmon;padding:5px;border-radius:5px">
            <table class="table-operacion">
                <tr>
                    <td class="txt-blanco bg-azul">UMi</td>
                    <td class="txt-blanco bg-verde">CM</td>
                    <td class="txt-blanco bg-naranja">DM</td>
                    <td class="txt-blanco bg-azul">UM</td>
                    <td class="txt-blanco bg-verde">C</td>
                    <td class="txt-blanco bg-naranja">D</td>
                    <td class="txt-blanco bg-azul">U</td>
                </tr>
                <tr>
                    <td>${arrayNumero[0]}</td>
                    <td>${arrayNumero[1]}</td>
                    <td>${arrayNumero[2]}</td>
                    <td>${arrayNumero[3]}</td>
                    <td>${arrayNumero[4]}</td>
                    <td>${arrayNumero[5]}</td>
                    <td>${arrayNumero[6]}</td>
                </tr>
                <tr>
                    <td colspan="7">
                    Se lee:
                    <textarea class="form-control no-redimensionar noEnter hvr-grow-shadow" placeholder="Escribir" rows="3" id="p${numPregunta}var${index}"></textarea>
                    </td>
                </tr>
            </table>
        </div>`
  }).join('');
  $("#" + div_id).html(opciones)
  return p1respuestas
}


function normalizarEspacios(texto) {
  return texto.replace(/\s+/g, ' ').trim();
}


function numero7digitosTabla(array, div_id, id_pregunta) {
  // esta funcion recibe un nuemro de 7 digitos lo descompone en las posciciones 
  // recibe array -> los numeros, div_id -> div dodne se va a inyentar las tablas
  // retorna el array con las respeustas correctas

  const opciones = array.map((element, index) => {


    let arrayNumero = String(element).split('')

    let addTable = ''
    let arrayTextoPlural = ['unidades de millón', 'centenas de mil ', 'decenas de mil', 'unidades de mil', 'centenas', 'decenas', 'unidades']
    let arrayTextoSingular = ['unidad de millón', 'centena de mil ', 'decena de mil', 'unidad de mil', 'centena', 'decena', 'unidad']
    let multiplicar = ['1000000', '100000', '10000', '1000', '100', '10', '1']



    if (index == 0) {
      arrayNumero.forEach((numero, index) => {
        let txt1, txt2
        if (numero == 1) {
          txt1 = `${numero} ${arrayTextoSingular[index]}`
          txt2 = `${numero} x ${multiplicar[index]} = ${numero * multiplicar[index]}`
        } else {
          txt1 = `${numero} ${arrayTextoPlural[index]}`
          txt2 = `${numero} x ${multiplicar[index]} = ${numero * multiplicar[index]}`
        }
        addTable += `
              <tr>
                <td style="padding:5px;border:solid 1px silver"><textarea class="form-control" style="width:190px" placeholder="Escribir" rows="1" readonly>${txt1}</textarea></td>
                <td style="padding:5px;border:solid 1px silver"> &nbsp;=&nbsp; </td>
                <td style="padding:5px;border:solid 1px silver"><textarea class="form-control" style="width:220px" placeholder="Escribir" rows="1" readonly>${txt2}</textarea></td>
              </tr>`
      });
    } else {
      arrayNumero.forEach((numero, index) => {
        let txt1, txt2
        if (numero == 1) {
          txt1 = `${numero} ${arrayTextoSingular[index]}`
          txt2 = `${numero} x ${multiplicar[index]} = ${numero * multiplicar[index]}`
        } else {
          txt1 = `${numero} ${arrayTextoPlural[index]}`
          txt2 = `${numero} x ${multiplicar[index]} = ${numero * multiplicar[index]}`
        }
        addTable += `
              <tr>
                <td style="padding:5px;border:solid 1px silver"><textarea class="form-control noEnter ${id_pregunta}" style="width:190px" placeholder="Escribir" rows="1" resp="${txt1}"></textarea></td>
                <td style="padding:5px;border:solid 1px silver"> &nbsp;=&nbsp; </td>
                <td style="padding:5px;border:solid 1px silver"><textarea class="form-control noEnter ${id_pregunta}" style="width:220px" placeholder="Escribir" rows="1" resp="${txt2}"></textarea></td>
              </tr>`
      });

    }

    return `
        <div style="margin:5px;padding:5px;border-radius:5px;text-align:center">
            <center><table class="table-operacion">
                <tr>
                    <td class="txt-blanco bg-azul">UMi</td>
                    <td class="txt-blanco bg-verde">CM</td>
                    <td class="txt-blanco bg-naranja">DM</td>
                    <td class="txt-blanco bg-azul">UM</td>
                    <td class="txt-blanco bg-verde">C</td>
                    <td class="txt-blanco bg-naranja">D</td>
                    <td class="txt-blanco bg-azul">U</td>
                </tr>
                <tr>
                    <td>${arrayNumero[0]}</td>
                    <td>${arrayNumero[1]}</td>
                    <td>${arrayNumero[2]}</td>
                    <td>${arrayNumero[3]}</td>
                    <td>${arrayNumero[4]}</td>
                    <td>${arrayNumero[5]}</td>
                    <td>${arrayNumero[6]}</td>
                </tr>
            </table></center>

            <table>
              ${addTable}
            </table>
        </div>`
  }).join('');
  $("#" + div_id).html(opciones)
}




function tablaTextoDescomposicionEscribirNumero(array, div_id, id_pregunta) {
  // USO
  // var p7actividad = [
  //   { numero: generarNumeroAleatorioSinCero(1000000, 9000000), tipo: 'letra' },
  //   { numero: generarNumeroAleatorioSinCero(1000000, 9000000), tipo: 'descomposicion' },
  //   { numero: generarNumeroAleatorioSinCero(1000000, 9000000), tipo: 'nombres' },
  // ]

  // tablaTextoDescomposicionEscribirNumero(p7actividad, 'p7act', 'p7var')
  // se valida con la clase id_pregunta // validarInputSuma('id_pregunta')

  let opciones = array.map(element => {
    // console.log(element.tipo)
    // console.log(element.numero)
    let numero = String(element.numero).split('')
    let enunciado = ''
    let colorFondo = generarColorSuave()
    if (element.tipo === 'letra') {
      enunciado = NumerosaLetras(element.numero).toLowerCase();
      enunciado = enunciado.charAt(0).toUpperCase() + enunciado.slice(1);
    } else if (element.tipo === 'descomposicion') {
      let arrayNumero = String(element.numero).split('')
      // console.log(arrayNumero)
      // Definir una función para agregar ceros dependiendo del valor
      function agregarCeros(numero, cantidadDeCeros) {
        return numero + '0'.repeat(cantidadDeCeros);  // Agrega la cantidad de ceros correspondiente
      }
      let valorDescompueto = ''
      for (let i = 0; i < arrayNumero.length; i++) {
        let num = parseInt(arrayNumero[i]);
        if (num > 0) {
          let cantidadDeCeros = arrayNumero.length - i - 1;
          let valorConCeros = agregarCeros(num, cantidadDeCeros);
          if (i + 1 == arrayNumero.length) {
            valorDescompueto += valorConCeros;
          } else {
            valorDescompueto += valorConCeros + ' <b class="txt-morado">+</b> ';
          }
        }
      }
      enunciado = valorDescompueto.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
      // console.log(enunciado);
    } else if (element.tipo === 'nombres') {
      let arrayNumero = String(element.numero).split('')
      // console.log(arrayNumero)
      let valorNombres = ['UMi', 'CM', 'DM', 'UM', 'C', 'D', 'U']
      for (let i = 0; i < arrayNumero.length; i++) {
        if (i + 1 == arrayNumero.length) {
          enunciado += `${arrayNumero[i]} ${valorNombres[i]}`
        } else {
          enunciado += `${arrayNumero[i]} ${valorNombres[i]} <b class="txt-morado">+</b> `
        }
      }
      // console.log(enunciado);
    }

    return `
        <tr>
            <td style="width:100%;text-align: left;padding:0px 5px;background-color: ${colorFondo} !important;print-color-adjust: exact;">${enunciado}</td>
            <td><input class="cajaMateCaracter1 ${id_pregunta}" style="border:solid 1px silver" resp="${numero[0]}"></td>
            <td><input class="cajaMateCaracter1 ${id_pregunta}" style="border:solid 1px silver" resp="${numero[1]}"></td>
            <td><input class="cajaMateCaracter1 ${id_pregunta}" style="border:solid 1px silver" resp="${numero[2]}"></td>
            <td><input class="cajaMateCaracter1 ${id_pregunta}" style="border:solid 1px silver" resp="${numero[3]}"></td>
            <td><input class="cajaMateCaracter1 ${id_pregunta}" style="border:solid 1px silver" resp="${numero[4]}"></td>
            <td><input class="cajaMateCaracter1 ${id_pregunta}" style="border:solid 1px silver" resp="${numero[5]}"></td>
            <td><input class="cajaMateCaracter1 ${id_pregunta}" style="border:solid 1px silver" resp="${numero[6]}"></td>
        </tr>`

  }).join(' ')

  $("#" + div_id).html(`
        <table class="table-operacion" style="max-width:850px">
            <tr>
                <td style="width:100%"></td>
                <td class="txt-blanco bg-azul">UMi</td>
                <td class="txt-blanco bg-verde">CM</td>
                <td class="txt-blanco bg-morado">DM</td>
                <td class="txt-blanco bg-azul">UM</td>
                <td class="txt-blanco bg-verde">C</td>
                <td class="txt-blanco bg-morado">D</td>
                <td class="txt-blanco bg-azul">U</td>
            </tr>
            ${opciones}
        </table>`
  )
}


function numeroARomano(num) {
  if (num < 1 || num > 3999) {
    return 'Número fuera de rango. Solo se aceptan números entre 1 y 3999.';
  }

  const valores = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
  ];

  let resultado = '';

  // Recorremos el arreglo de valores romanos
  for (let [valor, simbolo] of valores) {
    while (num >= valor) {
      resultado += simbolo;
      num -= valor;
    }
  }

  return String(resultado);
}


///SIRVE PARA QUE EN UNA SUMA U OPERACION PASE EL TAB U}CUNADO SE INGRESE UN NUEMRO 
// UNSO PONER  LA CLASE auto-tab
document.querySelectorAll('.auto-tab').forEach((input, index, inputs) => {
  input.addEventListener('input', () => {
    const maxLength = parseInt(input.dataset.maxlength, 10) || input.maxLength || 0;
    if (maxLength && input.value.length >= maxLength) {
      const nextInput = inputs[index + 1];
      if (nextInput) {
        nextInput.focus(); // Pasar al siguiente input
      }
    }
  });

  // Moverse al campo anterior si se presiona "Backspace" en un campo vacío
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Backspace' && input.value === '') {
      const prevInput = inputs[index - 1];
      if (prevInput) {
        prevInput.focus(); // Pasar al campo anterior
      }
    }
  });
});


////  tabla para opreacions suma o resta uso se valida con el  let core = validarCajas('p1var') 
// var p1numeros = [
//   { numero1: NumAleatorio(1000000, 7000000), numero2: NumAleatorio(100000, 700000), operacion: 'sumar' },
//   { numero1: NumAleatorio(1000000, 7000000), numero2: NumAleatorio(100000, 700000), operacion: 'restar' },
// ]
// oprecionSumaResta(p1numeros, 'p1var', 'p1act')
function oprecionSumaResta(array, claseInput, div_id) {

  let items = array.map(element => {
    // console.log(element)
    let cantidad1 = String(element.numero1).split('')
    let cantidad2 = String(element.numero2).split('')

    let respuestaOperacion, simbolo

    if (element.operacion == 'sumar') {
      respuestaOperacion = String(Number(element.numero1) + Number(element.numero2)).split('')
      simbolo = '+'
    } else if (element.operacion == 'restar') {
      respuestaOperacion = String(Number(element.numero1) - Number(element.numero2)).split('')
      simbolo = '−'
    }

    cantidad2.unshift(``)
    // console.log(cantidad1)
    // console.log(simbolo)
    // console.log(cantidad2)
    // console.log(respuestaOperacion)
    let numerosArriba = `<tr><td></td>
            <td>${cantidad1[0]}</td>
            <td>${cantidad1[1]}</td>
            <td>${cantidad1[2]}</td>
            <td>${cantidad1[3]}</td>
            <td>${cantidad1[4]}</td>
            <td>${cantidad1[5]}</td>
            <td>${cantidad1[6]}</td></tr>`
    let numerosAbajo = `<tr><td style="border-bottom:solid 1px black"><b>${simbolo}</b></td>
            <td style="border-bottom:solid 1px black">${cantidad2[0]}</td>
            <td style="border-bottom:solid 1px black">${cantidad2[1]}</td>
            <td style="border-bottom:solid 1px black">${cantidad2[2]}</td>
            <td style="border-bottom:solid 1px black">${cantidad2[3]}</td>
            <td style="border-bottom:solid 1px black">${cantidad2[4]}</td>
            <td style="border-bottom:solid 1px black">${cantidad2[5]}</td>
            <td style="border-bottom:solid 1px black">${cantidad2[6]}</td></tr>`
    let numerosRespuesta = `<tr><td></td>
            <td><input class="cajaMateCaracter1 ${claseInput}" data-info="${respuestaOperacion[0]}"></td>
            <td><input class="cajaMateCaracter1 ${claseInput}" data-info="${respuestaOperacion[1]}"></td>
            <td><input class="cajaMateCaracter1 ${claseInput}" data-info="${respuestaOperacion[2]}"></td>
            <td><input class="cajaMateCaracter1 ${claseInput}" data-info="${respuestaOperacion[3]}"></td>
            <td><input class="cajaMateCaracter1 ${claseInput}" data-info="${respuestaOperacion[4]}"></td>
            <td><input class="cajaMateCaracter1 ${claseInput}" data-info="${respuestaOperacion[5]}"></td>
            <td><input class="cajaMateCaracter1 ${claseInput}" data-info="${respuestaOperacion[6]}"></td></tr>`

    return `<div><table class="table-operacion" style="border:solid 1px silver;margin:10px">${numerosArriba} ${numerosAbajo} ${numerosRespuesta}</table></div>`
  }).join('')

  $("#" + div_id + "").html(`${items}`)
}





///// uso
// var p1numeros = [
//   {
//     numero1: NumAleatorio(1000000, 7000000), numero2: NumAleatorio(100000, 700000), operacion: 'sumar',
//     select: ['Sumando', 'Sumando', 'Total']
//   },
//   {
//     numero1: NumAleatorio(3000000, 7000000), numero2: NumAleatorio(100000, 700000), operacion: 'restar',
//     select: ['Minuendo', 'Sustraendo', 'Diferencia']
//   }
// ]
// oprecionSumaRestaOpciones(p1numeros, 'p1var', 'p1act', 'p1sel')

// var p1opciones = ['Sumando', 'Total', 'Minuendo', 'Sustraendo', 'Diferencia']
// asignarOpcionesAselect(p1opciones, '.p1sel')

function oprecionSumaRestaOpciones(array, claseInput, div_id, select) {

  let items = array.map(element => {
    // console.log(element)
    let cantidad1 = String(element.numero1).split('')
    let cantidad2 = String(element.numero2).split('')
    // console.log(element.select[0])

    let respuestaOperacion, simbolo

    if (element.operacion == 'sumar') {
      respuestaOperacion = String(Number(element.numero1) + Number(element.numero2)).split('')
      simbolo = '+'
    } else if (element.operacion == 'restar') {
      respuestaOperacion = String(Number(element.numero1) - Number(element.numero2)).split('')
      simbolo = '−'
    }

    cantidad2.unshift(``)
    // console.log(cantidad1)
    // console.log(simbolo)
    // console.log(cantidad2)
    // console.log(respuestaOperacion)
    let numerosArriba = `<tr><td></td>
            <td>${cantidad1[0]}</td>
            <td>${cantidad1[1]}</td>
            <td>${cantidad1[2]}</td>
            <td>${cantidad1[3]}</td>
            <td>${cantidad1[4]}</td>
            <td>${cantidad1[5]}</td>
            <td>${cantidad1[6]}</td>
            <td><select class="${select} selectbox2 ${claseInput}" data-info="${element.select[0]}"></select></td>
            </tr>`
    let numerosAbajo = `<tr><td style="border-bottom:solid 1px black"><b>${simbolo}</b></td>
            <td style="border-bottom:solid 1px black">${cantidad2[0]}</td>
            <td style="border-bottom:solid 1px black">${cantidad2[1]}</td>
            <td style="border-bottom:solid 1px black">${cantidad2[2]}</td>
            <td style="border-bottom:solid 1px black">${cantidad2[3]}</td>
            <td style="border-bottom:solid 1px black">${cantidad2[4]}</td>
            <td style="border-bottom:solid 1px black">${cantidad2[5]}</td>
            <td style="border-bottom:solid 1px black">${cantidad2[6]}</td>
            <td><select class="${select} selectbox2 ${claseInput}" data-info="${element.select[1]}"></select></td>
            </tr>`
    let numerosRespuesta = `<tr><td></td>
            <td><input class="cajaMateCaracter1 ${claseInput}" data-info="${respuestaOperacion[0]}"></td>
            <td><input class="cajaMateCaracter1 ${claseInput}" data-info="${respuestaOperacion[1]}"></td>
            <td><input class="cajaMateCaracter1 ${claseInput}" data-info="${respuestaOperacion[2]}"></td>
            <td><input class="cajaMateCaracter1 ${claseInput}" data-info="${respuestaOperacion[3]}"></td>
            <td><input class="cajaMateCaracter1 ${claseInput}" data-info="${respuestaOperacion[4]}"></td>
            <td><input class="cajaMateCaracter1 ${claseInput}" data-info="${respuestaOperacion[5]}"></td>
            <td><input class="cajaMateCaracter1 ${claseInput}" data-info="${respuestaOperacion[6]}"></td>
            <td><select class="${select} selectbox2 ${claseInput}" data-info="${element.select[2]}"></select></td>
            </tr>`

    return `<table class="table-operacion" style="border:solid 1px silver;margin:10px">${numerosArriba} ${numerosAbajo} ${numerosRespuesta}</table>`
  }).join('')

  $("#" + div_id + "").html(`${items}`)
}




///// TABLA PARA MULTIPLICAR 
// var p1numeros = [
//   { multiplicando: 726, multiplicador: 46 },
// ]
// tablaMultiplicacion(p1numeros, 'p1var', 'p1act')

function tablaMultiplicacion(array, numPregunta, divId) {
  let p1opciones = array.map(element => {
    // console.log(element.multiplicando + " X " + element.multiplicador)
    let arrayMultiplicando = String(element.multiplicando).split('')
    let arrayMultiplicador = String(element.multiplicador).split('')
    let arrayMultiplicadorReverse = String(element.multiplicador).split('').reverse()
    let ArrayProducto = String(element.multiplicando * element.multiplicador).split('')
    let respuestasMultiplicarCadaUno = []

    for (let i = 0; i < arrayMultiplicadorReverse.length; i++) {
      arrayResp = String(arrayMultiplicadorReverse[i] * element.multiplicando).split('')
      for (let j = 0; j < i; j++) {
        arrayResp.push('')
      }
      respuestasMultiplicarCadaUno.push(arrayResp)
    }

    arrayMultiplicador.unshift(`<span class="txt-naranja">X</span>`)

    // console.log(respuestasMultiplicarCadaUno
    //// igualar todos los array a la cantidad elelemento del arrayProducto
    for (let i = 0; i < ArrayProducto.length; i++) {
      if (arrayMultiplicando.length != ArrayProducto.length) {
        arrayMultiplicando.unshift('')
      }
      if (arrayMultiplicador.length != ArrayProducto.length) {
        arrayMultiplicador.unshift('')
      }
      // Asegurar que todas las filas tengan la misma longitud que ArrayProducto
      for (let j = 0; j < respuestasMultiplicarCadaUno.length; j++) {
        while (respuestasMultiplicarCadaUno[j].length !== ArrayProducto.length) {
          if (j === 0) {
            // Agregar un espacio vacío al inicio para la primera fila
            respuestasMultiplicarCadaUno[j].unshift('');
          } else {
            // Agregar un espacio vacío al final para las demás filas
            respuestasMultiplicarCadaUno[j].unshift('');
          }
        }
      }
    }

    // console.log(arrayMultiplicando)
    // console.log(arrayMultiplicador)
    // console.log(respuestasMultiplicarCadaUno[0])
    // console.log(respuestasMultiplicarCadaUno[1])
    // console.log(ArrayProducto);

    /// crear encabezado1 
    let encabezado1 = arrayMultiplicando.map(element => {
      let data = ''
      if (element != '') {
        data = `<td>${element}</td>`
      } else {
        data = `<td></td>`
      }
      return data
    }).join('')

    /// crear encabezado2 
    let encabezado2 = arrayMultiplicador.map(element => {
      let data = ''
      if (element != '') {
        data = `<td style="border-bottom:solid 1px black">${element}</td>`
      } else {
        data = `<td style="border-bottom:solid 1px black"></td>`
      }
      return data
    }).join('')

    /// crear  respuestas 
    let respuestas = ArrayProducto.map(element => {
      let data = ''
      if (element != '') {
        data = `<td><input class="cajaMateCaracter1 ${numPregunta}" data-info="${element}"></td>`
      } else {
        data = `<td></td>`
      }
      return data
    }).join('')

    /// crear cuerpo de la multiplicacion 
    let cuerpo = respuestasMultiplicarCadaUno.map((element, index) => {
      let dataItem
      if (index + 1 === respuestasMultiplicarCadaUno.length) {
        dataItem = element.map((num, index) => {
          let numero = '';
          if (num !== '') {
            numero = `<td style="border-bottom:solid 1px black"><input class="cajaMateCaracter1 ${numPregunta}" data-info="${num}"></td>`; // Agrega el número si no está vacío
          } else {
            numero = `<td style="border-bottom:solid 1px black"></td>`; // Celda vacía si el número es una cadena vacía
          }
          return numero;
        }).join(''); // Une las celdas en una fila
      } else {
        dataItem = element.map((num, index) => {
          let numero = '';
          if (num !== '') {
            numero = `<td><input class="cajaMateCaracter1 ${numPregunta}" data-info="${num}"></td>`; // Agrega el número si no está vacío
          } else {
            numero = `<td></td>`; // Celda vacía si el número es una cadena vacía
          }
          return numero;
        }).join(''); // Une las celdas en una fila
      }

      return `<tr>${dataItem}</tr>`; // Retorna la fila completa
    }).join(''); // Une todas las filas

    // console.log(cuerpo);

    //// crear tabla 
    return `<table class="table-operacion" style="margin:15px"><tr>${encabezado1}</tr><tr>${encabezado2}</tr>${cuerpo}<tr>${respuestas}</tr></table>`
  }).join(' ')

  $("#" + divId).html(p1opciones)
}



// Función para reemplazar las letras seguidas de números con la notación de superíndice
function ponerExpresionPotencia(texto) {
  let expresion = texto;
  expresion = expresion.replaceAll(/([a-zA-Z])(\d+)/g, (match, p1, p2) => {
    return p1 + `<sup style="font-size: 11px">${p2}</sup>`;
  });
  return expresion;
}




// INICIO function formatoFraccion
function formatoFraccion(elemento, div_id, pregunta = '', ancho) {
  // % para que el usuario ingrese el valor y se valida
  // & para que el valor se muestre quemado
  // elemento -> el texto que se va a formatear la fraccion ejem 4x + 5y
  // div_id -> el id del elemento donde se va a inyectar la fraccion
  // pregunta -> es el clase que se va a gregar para poder calificar la fraccion
  // ancho -> recibe un valor entero "60" sera el ancho de toda la fraccion
  // se valida con la funcion validarCajaDataInfo(clase)


  const container = document.getElementById(`${div_id}`);
  // console.log(div_id);

  if (!elemento.includes("/")) {
    console.error("El elemento no tiene un formato válido (debe contener '/').");
    return;
  }

  if (!container) {
    console.error(`No se encontró el elemento con ID: ${div_id}`);
    return;
  }

  // Limpiar el contenedor antes de agregar nuevas fracciones
  container.innerHTML = "";
  // Crear la estructura HTML para cada fracción
  const fractionDiv = document.createElement("div");
  fractionDiv.style.display = "inline-flex";
  fractionDiv.style.width = `${ancho}px`; // Usar template literals para mejor legibilidad
  fractionDiv.style.flexDirection = "column";

  // Crear el campo para el numerador
  const numeratorDiv = document.createElement("div");
  numeratorDiv.style.borderBottom = "solid 1px rgba(0, 0, 0, 0.8)";
  const numeratorInput = document.createElement("input");
  numeratorInput.type = "text";
  numeratorInput.className = "input-fraccion";
  numeratorInput.placeholder = "";

  // Obtener el numerador y verificar cómo comienza
  const numeratorValue = elemento.split("/")[0];
  if (numeratorValue.startsWith("&")) {
    // Si comienza con &, eliminar el & y hacer el campo de solo lectura
    numeratorInput.value = numeratorValue.replace('&', "");
    numeratorInput.setAttribute('readonly', true); // Hacer el campo de solo lectura
  } else if (numeratorValue.startsWith("%")) {
    // Si comienza con %, eliminar el % y asignar el valor al atributo data-info
    let valorElemento = numeratorValue /// convertir a minusculas y quitar espacios de elemento
      .toLowerCase() // Convertir a minúsculas
      .replace(/\s+/g, '') // Eliminar espacios en blanco
      .replace(/\n/g, ''); // Eliminar saltos de línea
    numeratorInput.setAttribute('data-info', valorElemento.replace('%', ""));
    numeratorInput.classList.add(pregunta); // Agregar la clase CSS
  } else {
    // Si no comienza con & ni %, usar el valor tal cual
    numeratorInput.value = numeratorValue;
  }
  numeratorDiv.appendChild(numeratorInput);

  // Crear el campo para el denominador
  const denominatorDiv = document.createElement("div");
  denominatorDiv.style.borderTop = "solid 1px rgba(0, 0, 0, 0.8)";
  const denominatorInput = document.createElement("input");
  denominatorInput.type = "text";
  denominatorInput.className = "input-fraccion";
  denominatorInput.placeholder = "";
  // Obtener el denominador y verificar cómo comienza
  const denominatorValue = elemento.split("/")[1]; // Obtener el denominador
  if (denominatorValue.startsWith("&")) {
    // Si comienza con &, eliminar el & y hacer el campo de solo lectura
    denominatorInput.value = denominatorValue.replace('&', "");
    denominatorInput.setAttribute('readonly', true); // Hacer el campo de solo lectura
  } else if (denominatorValue.startsWith("%")) {
    // Si comienza con %, eliminar el % y asignar el valor al atributo data-info
    let valorElemento = denominatorValue /// convertir a minusculas y quitar espacios de elemento
      .toLowerCase() // Convertir a minúsculas
      .replace(/\s+/g, '') // Eliminar espacios en blanco
      .replace(/\n/g, ''); // Eliminar saltos de línea
    denominatorInput.setAttribute('data-info', valorElemento.replace('%', ""));
    // denominatorInput.setAttribute('data-info', denominatorValue.replace('%', ""));
    denominatorInput.classList.add(pregunta); // Agregar la clase CSS
  } else {
    // Si no comienza con & ni %, usar el valor tal cual
    denominatorInput.value = denominatorValue;
  }
  denominatorDiv.appendChild(denominatorInput);
  // Agregar los campos al contenedor de la fracción
  fractionDiv.appendChild(numeratorDiv);
  fractionDiv.appendChild(denominatorDiv);
  // Agregar la fracción al contenedor principal
  container.appendChild(fractionDiv);
}
// USO DE LA FUNCION formatoFraccion
// formatoFraccion("&34/%-x4", "p3actividad", 'p3var', '80');

// fin function formatoFraccion