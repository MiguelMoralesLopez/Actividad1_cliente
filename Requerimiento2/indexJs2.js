//FUNCIONES

//funcion validar si esta checked
function pizzaChecked() {
    tamañoPizza = document.getElementsByName("tamaño");
    var seleccionado = false;
    for (var i = 0; i < tamañoPizza.length; i++) {
        if (tamañoPizza[i].checked) {
            seleccionado = true;
            break;
        }
    }
    if (!seleccionado) {
        alert('[ERROR] Debe seleccionar un tamaño');
        return false;
    }
    return true;
}

function ingreChecked() {
    ingrePizza = document.getElementsByName("ingrediente");
    var seleccionada = false;
    for (var i = 0; i < ingrePizza.length; i++) {
        if (ingrePizza[i].checked) {
            seleccionada = true;
            break;
        }
    }
    if (!seleccionada) {
        alert('[ERROR] Debe seleccionar un ingrediente');
        return false;
    }
    return true;
}

//funcion calcular precio tamaño
function calcPrecioTam() {
    let precioPizza = 0;
    if (pizzaChecked()) {
        if (pequeña.checked) {
            precioPizza = 5
        } else if (mediana.checked) {
            precioPizza = 10
        } else if (grande.checked) {
            precioPizza = 15
        }
        return precioPizza;
    }
}

//funcion ingredientes
function calcPrecioIngrediente() {
    let contador = 0
    
    if(ingreChecked()){
        if (bacon.checked){
            contador++
        }
        if (carne.checked){
            contador++
        }
        if (pollo.checked){
            contador++
        }
        if (peperoni.checked){
            contador++
        }
        let precioIngredientes = contador++
        return precioIngredientes;
    }
}

//funcion procesar
function procesarPedido() {
    precio.parentNode.removeChild(precio)

    let precioTamPizza = 0
    precioTamPizza = calcPrecioTam();
    let precioIngre = 0
    precioIngre = calcPrecioIngrediente();

    let precioTotal = document.createTextNode("Precio total: " + (precioTamPizza+precioIngre) + " €")
    let nuevoPrecio = document. createElement("p")
    nuevoPrecio.appendChild(precioTotal)
    nuevoPrecio.id = "precio"
    formulario.appendChild(nuevoPrecio)
}

