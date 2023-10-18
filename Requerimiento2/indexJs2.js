window.onload = function () {

    //FUNCIONES

    function pizzaChecked() {
        tamañoPizza = document.getElementsByName("tamaño");
        var seleccionado = false;
        for(var i=0; i<tamañoPizza.length; i++) {
            if(tamañoPizza[i].checked){
                seleccionado = true;
                break;
            } 
        }
        alert("Mandamos el formulario!")
        return true;
        
    }


    function calcPrecioPizza() {
        let precioPizza = 0;
        let pequeña = document.getElementById(pequeña)
        let mediana = document.getElementById(mediana)
        let grande = document.getElementById(grande)

        if (pequeña.checked) {
            precioPizza = 5
        } else if (mediana.checked) {
            precioPizza = 10
        } else if (grande.checked) {
            precioPizza = 15
        }
        return precioPizza;
    }


    //funcion ingredientes
    function calcPrecioIngrediente() {

    }

    //funcion validar formulario -- 1ingr. 1 pizza, todo relleno
    function validarForm() {

    }

    //funcion procesar
    function procesarPedido() {

        if(document.getElementsById("procesar").onclick){
            return "el precio es" + calcPrecioPizza()
        }
        //crear variables con cada return de las funciones del precio
        //crear la variable que se retorna con el precio total de ambas
        //mostrar la variable por pantalla  -- buscar forma de borrar info previa para que no se acumulen los precios anteriores(aparece en los apuntes de felix)

    }

}




