
// CSS
/*
.divtabla {
        border: solid 1px silver;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .divtabla>div {
        width: 150px;
        border: solid 1px red;
        display: inline-flex;
        text-align: center;
        height: 40px;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

     [contenteditable="false"]:empty:not(:focus):before {
        content: attr(data-text);
        display: flex;
        font-size: 2rem;
        color: rgb(251, 171, 60) !important;
        align-items: center;
        align-content: center;
        justify-content: center;
        justify-items: center;
    }
*/


/* <div style="border:solid 1px silver;display:table;text-align: center;">
    <div>Alimentos que consumen Rita y Paúl</div>
    <div class="divtabla">
        <div>Alimento</div>
        <div style="width:200px;">Conteo</div>
        <div>Frecuencia</div>
    </div>
    <div class="divtabla">
        <div>Plátanos</div>
        <div class="p1tabla0 conteo" style="width:200px;font-weight: bolder;"></div>
        <div class="p1tabla0 numeroConteo"></div>
    </div>
</div> */


$(".conteo").click(function (e) {
    let cajaPadre = e.target.parentNode;
    let cajaNumero = cajaPadre.querySelector('.numeroConteo');
    let contador = Number(cajaNumero.textContent) + 1;
    cajaNumero.textContent = contador;

    e.target.innerHTML += '/';

    if (contador % 5 === 0) {
        e.target.textContent += ' ';
    }

    if (contador > 20) {
        e.target.textContent = '';
        cajaNumero.textContent = '0';
    }
});



$(".soloConteo").click(function (e) {
    e.target.textContent = e.target.innerHTML + '/'
    if ((e.target.textContent == '/////') || (e.target.textContent == '///// /////') || (e.target.textContent == '///// ///// /////')) {
        e.target.textContent += ' ';
    }

    if (e.target.textContent.length > 23) {
        e.target.textContent = ''
    }
});
