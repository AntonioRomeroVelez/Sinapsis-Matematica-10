/*
.unirinicio {
    outline: solid 1px salmon;
    border-radius: 5px;
    width: 130px;
    padding: 5px;
    padding-right: 20px;
}

.unirfin {
    outline: solid 1px salmon;
    border-radius: 5px;
    width: 130px;
    padding: 5px;
    padding-left: 20px;
}


 <div style="border:solid 1px rgb(39, 104, 156);display:table;width:400px;padding-top: 30px;padding-bottom: 10px;background-color:rgb(246, 249, 252) !important;border-radius:10px;">
    <center>
        <div style="position:relative;display: table;">
            <canvas id="boxcanvas" width="300" height="200" style="background-color: transparent;"></canvas>
            <div class="boxgeneralinicio"></div>
            <div class="boxgeneralfin"></div>
        </div>
        <button class="btn btn-warning info" id="reiniciar">Borrar líneas</button>
    </center>
</div>

inicialesunirvarios()
finalesunirvarios()


var unirvariosinicio = [
    // '<div class="unirinicio"><img src="img2/i1_p96_act1.png"></div>',
    // '<div class="unirinicio"><img src="img2/i2_p96_act1.png"></div>',
    // '<div class="unirinicio"><img src="img2/i3_p96_act1.png"></div>',
    '<div class="unirinicio">perro</div>',
    '<div class="unirinicio">gato</div>',
    '<div class="unirinicio">loro</div>',
    '<div class="unirinicio">roca</div>',
    '<div class="unirinicio">mesa</div>',
]

var unirvariosfin = [
    '<div class="divfin">facial</div>',
    '<div class="divfin">cardio</div>',
    '<div class="divfin">ciclo</div>',
    '<div class="divfin">presidente</div>',
    '<div class="divfin">ministro</div>',
    '<div class="divfin">almirante</div>',
    '<div class="divfin">logar</div>',
    '<div class="divfin">grafía</div>',
    '<div class="divfin">géneo</div>',
]
/// la respuesta poner el orden ascendente
var repuestasunirvarios = ['02', '02', '02', '13', '13']




*/




function unirvarios(conteo) {
    let core = 0;
    for (var i = 0; i < repuestasunirvarios.length; i++) {
        var respuestacomparar = repuestasunirvarios[i];
        if ($("#cajavalidar" + [i] + "").attr('class')) {
            var valorunir = $("#cajavalidar" + [i] + "").attr('class')
            //alert("clase: " + valorunir)
            let comprobar = valorunir.split(' ');
            //alert("vector: " + comprobar)
            var orden = comprobar.sort((a, b) => {
                return a - b;
            });
            let sincomas = orden.join('');
            //alert(" sin comas : " + sincomas + " es igual a " + respuestacomparar);
            if (sincomas == repuestasunirvarios[i]) {
                $(".cajatres" + [i] + "").addClass('ico2bien10');
                core++;
            } else {
                $(".cajatres" + [i] + "").addClass('ico2mal10');
            }
        } else {
            //alert('no tiene clases ');
            $(".cajatres" + [i] + "").addClass('ico2mal10');
        }
    }
    return cont;
}

