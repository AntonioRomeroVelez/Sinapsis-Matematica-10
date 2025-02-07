function unir1_1fijo() {
    var total1a1fijo = 0;

    for (var i = 0; i < arrayElemInicio.length; i++) {
        let idinicio = $("#arrastre" + [i] + "").attr('id');
        let validarfin = $("#finarrastre" + [i] + "").attr('validarlinea');
        //console.log(idinicio + ", " + validarfin)
        if ($("#arrastre" + [i] + "").attr('id') == $("#finarrastre" + [i] + "").attr('validarlinea')) {
            $("#arrastre" + [i] + "").addClass('bien10');
            total1a1fijo++;
        } else {
            $("#arrastre" + [i] + "").addClass('mal10');
        }
    }
    return total1a1fijo;
}
