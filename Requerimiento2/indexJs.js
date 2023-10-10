let precioTotal = 0;

function calcularPrecio(){
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
    else 
        alert('Debes seleccionar un tamaño de pizza')

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