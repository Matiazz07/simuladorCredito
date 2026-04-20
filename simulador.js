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
    let cuotaMensual=calcularCuotaMensual(valorPagar,plazo);
    mostrarEnSpan("spnCuotaMensual",cuotaMensual.toFixed(2));
    let credito=aprobarCredito(valorCP,cuotaMensual)
    if(credito==true){
        mostrarEnSpan("spnEstadoCredito","CREDITO APROBADO")
    }else{
        mostrarEnSpan("spnEstadoCredito","CREDITO RECHAZADO")
    }
}   

function validarInput(idInput, idMensaje, maxDigitos) {
    let inputObj = document.getElementById(idInput);
    let spanMensaje = document.getElementById(idMensaje);
    let valor = inputObj.value.trim();
    
    inputObj.style.borderColor = "";
    spanMensaje.textContent = "";

    if (valor === "") {
        inputObj.style.borderColor = "red";
        spanMensaje.textContent = "Este campo no puede estar vacío.";
        return false;
    }

    let regexNumeros = /^[0-9]+(\.[0-9]+)?$/; 
    if (!regexNumeros.test(valor)) {
        inputObj.style.borderColor = "red";
        spanMensaje.textContent = "Solo se permiten números.";
        return false;
    }

    let parteEntera = valor.split('.')[0];
    if (parteEntera.length > maxDigitos) {
        inputObj.style.borderColor = "red";
        spanMensaje.textContent = "Alerta: Sobrepasó el límite de " + maxDigitos + " dígitos.";
        return false;
    }

    inputObj.style.borderColor = "green";
    return true;
}