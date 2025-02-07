
/*
css
.cajaabaco {
        border: solid 1px silver;
        position: absolute;
        top: 0px;
        width: 30px;
        height: 130px;
        display: flex;
        flex-direction: column-reverse;
    }

    .cajaabaco>img {
        margin-top: -5px;
        height: 18px;
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
<div style="position:relative;border:solid 1px silver;width:200px;text-align: center;">
    <img src="img2/abacoCentena.png" alt="">
    <div class="abacoCen1 cajaabaco" style="left:47px;border:solid 1px red"></div>
    <div class="abacoDec1 cajaabaco" style="left:84px;border:solid 1px blue"></div>
    <div class="abacoUni1 cajaabaco" style="left:122px;border:solid 1px green"></div>
    <div style="position: absolute;bottom:10px;left:15px;" class="info">
        <button class="btn btn-success addCentena">+1C</button>
        <button class="btn btn-danger addDecena">+1D</button>
        <button class="btn btn-info addUnidad">+1U</button>
    </div>
</div>





PARA MILES

 .cajaabacoUM {
        border: solid 1px silver;
        position: absolute;
        top: 0px;
        width: 30px;
        height: 130px;
        display: flex;
        flex-direction: column-reverse;
    }

    .cajaabacoUM>img {
        margin-top: -5px;
        height: 18px;
    }

<div style="position:relative;width:300px;text-align: center;">
    <img src="img2/abacoMil.png" alt="">
    <div class="abacoMil1 cajaabacoUM" style="left:33px;border:solid 1px red">
    </div>
    <div class="abacoCen1 cajaabacoUM" style="left:102px;border:solid 1px red">
    </div>
    <div class="abacoDec1 cajaabacoUM" style="left:170px;border:solid 1px blue">
    </div>
    <div class="abacoUni1 cajaabacoUM"
        style="left:238px;border:solid 1px green"></div>
    <div style="position: absolute;bottom:10px;left:15px;" class="info">
        <button class="btn btn-info addMil">+1UM</button> &nbsp;
        <button class="btn btn-success addCentena">+1C</button> &nbsp;
        <button class="btn btn-danger addDecena">+1D</button> &nbsp;
        <button class="btn btn-info addUnidad">+1U</button>
    </div>
</div>


*/


$(".addUnidad").click(function (e) {
    let parentNode = e.target.parentNode.parentNode;
    let abacoDec1Child = parentNode.querySelector('.abacoUni1');

    let imagen = document.createElement('img');
    imagen.src = 'img2/abacoUni.png';
    abacoDec1Child.appendChild(imagen);

    ///contar cantidad de imagenes y si hay mas de 9 vacia la caja
    let numImagenes = abacoDec1Child.childElementCount;

    if (numImagenes > 9) {
        while (abacoDec1Child.firstChild) {
            abacoDec1Child.removeChild(abacoDec1Child.firstChild);
        }
    }
});

$(".addDecena").click(function (e) {
    let parentNode = e.target.parentNode.parentNode;
    let abacoDec1Child = parentNode.querySelector('.abacoDec1');

    let imagen = document.createElement('img');
    imagen.src = 'img2/abacoDec.png';
    abacoDec1Child.appendChild(imagen);

    ///contar cantidad de imagenes y si hay mas de 9 vacia la caja
    let numImagenes = abacoDec1Child.childElementCount;

    if (numImagenes > 9) {
        while (abacoDec1Child.firstChild) {
            abacoDec1Child.removeChild(abacoDec1Child.firstChild);
        }
    }
});

$(".addCentena").click(function (e) {
    let parentNode = e.target.parentNode.parentNode;
    let abacoCen1Child = parentNode.querySelector('.abacoCen1');

    let imagen = document.createElement('img');
    imagen.src = 'img2/abacoCen.png';
    abacoCen1Child.appendChild(imagen);

    ///contar cantidad de imagenes y si hay mas de 9 vacia la caja
    let numImagenes = abacoCen1Child.childElementCount;

    if (numImagenes > 9) {
        while (abacoCen1Child.firstChild) {
            abacoCen1Child.removeChild(abacoCen1Child.firstChild);
        }
    }
});

$(".addMil").click(function (e) {
    let parentNode = e.target.parentNode.parentNode;
    let abacoMil1Child = parentNode.querySelector('.abacoMil1');

    let imagen = document.createElement('img');
    imagen.src = 'img2/abacoUni.png';
    abacoMil1Child.appendChild(imagen);

    ///contar cantidad de imagenes y si hay mas de 9 vacia la caja
    let numImagenes = abacoMil1Child.childElementCount;

    if (numImagenes > 9) {
        while (abacoMil1Child.firstChild) {
            abacoMil1Child.removeChild(abacoMil1Child.firstChild);
        }
    }
});



///// restar en abaco

{/*
CSS 
 .ImgRestaUnidad,
    .ImgRestaDecena,
    .ImgRestaCentena {
        cursor: pointer;
    }

    .ImgRestaUnidad:hover,
    .ImgRestaDecena:hover,
    .ImgRestaCentena:hover {
        border: solid 3px orangered;
        border-radius: 5px;
    }


buscar CANTIDAD  imagenes que tiene la clase TACHADO 
$('#pgabaco' + [i] + "").find('img.tachado').length

HTML

<div style="position:relative;;width:200px;text-align: center;">
    <img src="img2/abacoCentena.png" alt="">
        <div class="abacoCen1Resta cajaabaco" style="left:48px;border:none" id="pgabaco0">
        </div>
        <div class="abacoDec1Resta cajaabaco" style="left:85px;border:none" id="pgabaco1">
        </div>
        <div class="abacoUni1Resta cajaabaco" style="left:122px;border:none" id="pgabaco2">
        </div>
        <div style="position: absolute;bottom:10px;left:15px;" class="info">
            <button class="btn btn-success addCentenaResta">+1C</button>
            <button class="btn btn-danger addDecenaResta">+1D</button>
            <button class="btn btn-info addUnidadResta">+1U</button>
        </div>
</div> 

*/}



function cambiarImgUnidad(e) {
    if (e.target.className == 'ImgRestaUnidad') {
        e.target.src = 'img2/abacoUniX.png';
        e.target.classList.remove('ImgRestaUnidad');
        e.target.classList.add('tachado');
    } else {
        e.target.src = 'img2/abacoUni.png';
        e.target.classList.remove('tachado');
        e.target.classList.add('ImgRestaUnidad');
    }
}


$(".addUnidadResta").click(function (e) {
    let parentNode = e.target.parentNode.parentNode;
    let abacoUni1Child = parentNode.querySelector('.abacoUni1Resta');

    let imagen = document.createElement('img');
    imagen.src = 'img2/abacoUni.png';
    imagen.classList.add('ImgRestaUnidad');

    imagen.onclick = cambiarImgUnidad;
    abacoUni1Child.appendChild(imagen);

    ///contar cantidad de imagenes y si hay mas de 9 vacia la caja
    let numImagenes = abacoUni1Child.childElementCount;

    if (numImagenes > 9) {
        while (abacoUni1Child.firstChild) {
            abacoUni1Child.removeChild(abacoUni1Child.firstChild);
        }
    }
});



function cambiarImgDecena(e) {
    if (e.target.className == 'ImgRestaDecena') {
        e.target.src = 'img2/abacoDecX.png';
        e.target.classList.remove('ImgRestaDecena');
        e.target.classList.add('tachado');
    } else {
        e.target.src = 'img2/abacoDec.png';
        e.target.classList.remove('tachado');
        e.target.classList.add('ImgRestaDecena');
    }
}


$(".addDecenaResta").click(function (e) {
    let parentNode = e.target.parentNode.parentNode;
    let abacoDec1Child = parentNode.querySelector('.abacoDec1Resta');

    let imagen = document.createElement('img');
    imagen.src = 'img2/abacoDec.png';
    imagen.classList.add('ImgRestaDecena');

    imagen.onclick = cambiarImgDecena;
    abacoDec1Child.appendChild(imagen);

    ///contar cantidad de imagenes y si hay mas de 9 vacia la caja
    let numImagenes = abacoDec1Child.childElementCount;

    if (numImagenes > 9) {
        while (abacoDec1Child.firstChild) {
            abacoDec1Child.removeChild(abacoDec1Child.firstChild);
        }
    }
});



function cambiarImgCentena(e) {
    if (e.target.className == 'ImgRestaCentena') {
        e.target.src = 'img2/abacoCenX.png';
        e.target.classList.remove('ImgRestaCentena');
        e.target.classList.add('tachado');
    } else {
        e.target.src = 'img2/abacoCen.png';
        e.target.classList.remove('tachado');
        e.target.classList.add('ImgRestaCentena');
    }
}


$(".addCentenaResta").click(function (e) {
    let parentNode = e.target.parentNode.parentNode;
    let abacoCen1Child = parentNode.querySelector('.abacoCen1Resta');

    let imagen = document.createElement('img');
    imagen.src = 'img2/abacoCen.png';
    imagen.classList.add('ImgRestaCentena');

    imagen.onclick = cambiarImgCentena;
    abacoCen1Child.appendChild(imagen);

    ///contar cantidad de imagenes y si hay mas de 9 vacia la caja
    let numImagenes = abacoCen1Child.childElementCount;

    if (numImagenes > 9) {
        while (abacoCen1Child.firstChild) {
            abacoCen1Child.removeChild(abacoCen1Child.firstChild);
        }
    }
});

