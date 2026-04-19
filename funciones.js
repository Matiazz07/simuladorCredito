//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO
function calcularDisponible(ingresos,egresos){
    let valor=ingresos-egresos;
    if(valor<0){
        return valor=0
    }
    return valor;
}

function calcularCapacidadPago(montoDisponible){
    let capacidadPago=montoDisponible*(50/100);
    return capacidadPago;
}

function calcularInteresSimple(monto,tasa,plazoAnios){
    let valorInteres=plazoAnios*monto*(tasa/100);
    return valorInteres;
}

function calcularTotalPagar(monto,interes){
    let totalPagar=(monto+interes)+100;
    return totalPagar;
}