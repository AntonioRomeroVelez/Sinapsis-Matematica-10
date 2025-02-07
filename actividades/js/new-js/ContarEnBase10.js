
/*
css
.base10Dec1 {
        width: 160px;
        height: 105px;
    }

    .base10Dec1>img {
        margin: 1px;
    }

    .base10Uni1 {
        width: 65px;
    }


calificar

    var pgcompletar = [
        '3', '6', '5', '3', '0', '4', '6', '6', '9',
        '1', '2', '5', '0', '5', '2', '1', '7', '7'
    ]
    for (let i = 0; i < pgcompletar.length; i++) {
        if ($('#pgabaco' + [i] + "").find('img').length == pgcompletar[i]) {
            core3++;
            $("#pgabaco" + [i] + "").addClass('bien4');
        } else {
            $("#pgabaco" + [i] + "").addClass('mal4');
        }
    }


html

<div style="position:relative;border:solid 1px silver;width:230px;text-align: center;">
                                    <div>
                                        <div class="base10Cen1 cajaBase10" conteoBaseCentena="0"
                                            style="width: 220px; height: 190px; position: relative;border:solid 1px silver">
                                        </div>
                                        <div style="display: inline-flex;">
                                            <div class="base10Dec1 cajaBase10" style="border:solid 1px silver"></div>
                                            <div class="base10Uni1 cajaBase10" style="border:solid 1px silver"></div>
                                        </div>
                                    </div>

                                    <div style="border: solid 1px green;" class="info">
                                        <button class="btn btn-success addBase10Centena">+1C</button>
                                        <button class="btn btn-danger addBase10Decena">+1D</button>
                                        <button class="btn btn-info addBase10Unidad">+1U</button>
                                    </div>
                                </div>





nuevo
                                 let p4act = [numeroCuatroCifrasSinCero(1100, 9939), numeroCuatroCifrasSinCero(1100, 9939), numeroCuatroCifrasSinCero(1100, 9939), numeroCuatroCifrasSinCero(1100, 9939)]
    p4act.forEach((element, index) => {

        let resp = `Número: <input type="text" class="p5var caracter4 form-control2" valor="${element[0]}"></div>`
        let valor = `
            <div class="b-s-s" style="text-align:left">
                <div class="d-i-f">
                    <img src="img2/Mil${element[1]}.png" alt="">
                    <img src="img2/Centena${element[2]}.png" alt="">
                    <img src="img2/Decena${element[3]}.png" alt="">
                    <img src="img2/Unidad${element[4]}.png" alt="">
                </div>
                <div>
                    ${resp}
                </div>
            </div>`
        $("#p4act").append(valor)
    });


*/

$(".addBase10Decena").click(function (e) {
    let parentNode = e.target.parentNode.parentNode;
    let abacoDec1Child = parentNode.querySelector('.base10Dec1');

    let imagen = document.createElement('img');
    imagen.src = 'img2/Base10Decena.png';
    abacoDec1Child.appendChild(imagen);

    ///contar cantidad de imagenes y si hay mas de 9 vacia la caja
    let numImagenes = abacoDec1Child.childElementCount;

    if (numImagenes > 9) {
        while (abacoDec1Child.firstChild) {
            abacoDec1Child.removeChild(abacoDec1Child.firstChild);
        }
    }
});



$(".addBase10Unidad").click(function (e) {
    let parentNode = e.target.parentNode.parentNode;
    let abacoDec1Child = parentNode.querySelector('.base10Uni1');

    let imagen = document.createElement('img');
    imagen.src = 'img2/Base10Unidad.png';
    abacoDec1Child.appendChild(imagen);

    ///contar cantidad de imagenes y si hay mas de 9 vacia la caja
    let numImagenes = abacoDec1Child.childElementCount;

    if (numImagenes > 9) {
        while (abacoDec1Child.firstChild) {
            abacoDec1Child.removeChild(abacoDec1Child.firstChild);
        }
    }
});


$(".addBase10Centena").click(function (e) {
    let parentNode = e.target.parentNode.parentNode;
    let abacoCen1Child = parentNode.querySelector('.base10Cen1');

    let conteo = parseInt(abacoCen1Child.getAttribute('conteoBaseCentena'));

    let imagen = document.createElement('img');
    if ((conteo == 0)) {
        imagen.src = 'img2/Base10Centena.png';
        imagen.style.position = 'absolute';
        imagen.style.top = `0px`;
        imagen.style.left = `0px`;
    }
    else if ((conteo == 1)) {
        imagen.src = 'img2/Base10Centena2.png';
        imagen.style.position = 'absolute';
        imagen.style.top = `0px`;
        imagen.style.left = `105px`;
    } else if ((conteo == 2)) {
        imagen.src = 'img2/Base10Centena3.png';
        imagen.style.position = 'absolute';
        imagen.style.top = `20px`;
        imagen.style.left = `0px`;
    }
    else if ((conteo == 3)) {
        imagen.src = 'img2/Base10Centena4.png';
        imagen.style.position = 'absolute';
        imagen.style.top = `20px`;
        imagen.style.left = `105px`;
    }
    else if ((conteo == 4)) {
        imagen.src = 'img2/Base10Centena4.png';
        imagen.style.position = 'absolute';
        imagen.style.top = `40px`;
        imagen.style.left = `0px`;
    }
    else if ((conteo == 5)) {
        imagen.src = 'img2/Base10Centena3.png';
        imagen.style.position = 'absolute';
        imagen.style.top = `40px`;
        imagen.style.left = `105px`;
    }
    else if ((conteo == 6)) {
        imagen.src = 'img2/Base10Centena2.png';
        imagen.style.position = 'absolute';
        imagen.style.top = `60px`;
        imagen.style.left = `0px`;
    }
    else if ((conteo == 7)) {
        imagen.src = 'img2/Base10Centena.png';
        imagen.style.position = 'absolute';
        imagen.style.top = `60px`;
        imagen.style.left = `105px`;
    }
    else if ((conteo == 8)) {
        imagen.src = 'img2/Base10Centena.png';
        imagen.style.position = 'absolute';
        imagen.style.top = `80px`;
        imagen.style.left = `0px`;
    }
    else if ((conteo == 9)) {
        imagen.src = 'img2/Base10Centena2.png';
        imagen.style.position = 'absolute';
        imagen.style.top = `80px`;
        imagen.style.left = `105px`;
    }

    abacoCen1Child.appendChild(imagen);

    conteo++;
    abacoCen1Child.setAttribute('conteoBaseCentena', conteo.toString());
    pos = conteo * 15;

    ///contar cantidad de imagenes y si hay mas de 9 vacia la caja
    let numImagenes = abacoCen1Child.childElementCount;

    if (numImagenes > 9) {
        conteo = 0
        abacoCen1Child.setAttribute('conteoBaseCentena', conteo.toString());
        while (abacoCen1Child.firstChild) {
            abacoCen1Child.removeChild(abacoCen1Child.firstChild);
        }
    }
});


