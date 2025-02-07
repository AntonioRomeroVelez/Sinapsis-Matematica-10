
function unir1_varios(total1avarios) {
    var total1avarios = 0;
    for (var i = 0; i < validarArray1_varios.length; i++) {
        let validarfin = $("#finarrastre" + [i] + "").attr('validarlinea');
        let idvalidr = validarArray1_varios[i];
        console.log(idvalidr + ", " + validarfin)
        if ($("#finarrastre" + [i] + "").attr('validarlinea') == ("arrastre" + validarArray1_varios[i])) {
            $("#finarrastre" + [i] + "").addClass('bien10');
            total1avarios++;
        } else {
            $("#finarrastre" + [i] + "").addClass('mal10');
        }
    }
    return total1avarios;
}

