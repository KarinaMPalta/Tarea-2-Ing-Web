const formulario = document.getElementById('formulario');
var nombre=formulario.elements[2];

formulario.addEventListener("submit",function(event){
    
    var i;
    var salida;
    for(i=0;i<formulario.elements.lenght;i++){
        salida+=formulario.elements[i].value+" "
    }

    //Ocultar formulario
    formulario.style.display="none";
    document.getElementById("mensaje").innerHTML="<a href='#'>Muchas gracias</a>"
    document.getElementById("mensaje").style.color="red";


    event.preventDefault();
});