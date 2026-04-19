function recuperarTxtAFloat(idComponente){
    let cmp=document.getElementById(idComponente);
    let str=cmp.value;
    let valor=parseFloat(str);
    return valor;
}

function mostrarEnSpan(idSpan,valor){
    let componente=document.getElementById(idSpan);
    componente.textContent=valor;
}