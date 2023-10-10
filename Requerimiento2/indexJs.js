let precioTotal = 0;

function calcularPrecio(){
    validarFormulario()
    precio.parentNode.removeChild(precio);
    let size = 0
    size = comprobarSize()
    
    let ing = 0
    ing = comprobarIngredientes()

    precioTotal = size + ing;
    console.log(precioTotal)

    
    let nuevoPrecio = document.createTextNode("Precio total: " + precioTotal + "€")
    let nuevoP = document.createElement("p")
    nuevoP.appendChild(nuevoPrecio)
    nuevoP.id = "precio"
    formulario.appendChild(nuevoP)
}

function comprobarSize(){
    let precioSize = 0;
    if(document.getElementById("peq").checked)
        precioSize = 5
    else if(document.getElementById("med").checked)
        precioSize = 10
    else if(document.getElementById("grande").checked)
        precioSize = 15

    return precioSize
}

function comprobarIngredientes(){
    let precioIng = 0;
    
    if(document.getElementById("pepperoni").checked)
        precioIng++
    if(document.getElementById("bacon").checked)
        precioIng++
    if(document.getElementById("anchoas").checked)
        precioIng++
    if(document.getElementById("huevo").checked)
        precioIng++
    
    return precioIng
}

function validarFormulario(){
    if (nombre.value == null || nombre.value == "")
        alert('Introduce tu nombre')
    if (apellidos.value == null || apellidos.value == "")
        alert('Introduce tus apellidos')
    if (direccion.value == null || direccion.value == "")
        alert('Introduce tu dirección')
    if (tlf.value == null || tlf.value == "")
        alert('Introduce tu teléfono')
    if (email.value == null || email.value == "")
        alert('Introduce tu email')
    if((document.getElementById("peq").checked == false) && (document.getElementById("med").checked == false)
        && (document.getElementById("grande").checked == false))
            alert('Debes elegir un tamaño para la pizza')
    if((document.getElementById("pepperoni").checked == false) && (document.getElementById("bacon").checked == false)
        && (document.getElementById("anchoas").checked == false) && (document.getElementById("huevo").checked == false))
            alert('Debes seleccionar al menos un ingrediente.');
    
}

