//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
function calcular(){
    let ingresos=recuperarTxtAFloat("txtIngresos");
    let egresos=recuperarTxtAFloat("txtEgresos");
    let valor=calcularDisponible(ingresos,egresos);
    mostrarEnSpan("spnDisponible",valor.toFixed(2));
    let valorCP=calcularCapacidadPago(valor);
    mostrarEnSpan("spnCapacidadPago",valorCP.toFixed(2));
    let monto=recuperarTxtAInt("txtMonto");
    let tasa=recuperarTxtAInt("txtTasaInteres");
    let plazo=recuperarTxtAInt("txtPlazo");
    let valorInteres=calcularInteresSimple(monto,tasa,plazo);
    mostrarEnSpan("spnInteresPagar",valorInteres.toFixed(2));
    let valorPagar=calcularTotalPagar(monto,valorInteres);
    mostrarEnSpan("spnTotalPrestamo",valorPagar);
}   