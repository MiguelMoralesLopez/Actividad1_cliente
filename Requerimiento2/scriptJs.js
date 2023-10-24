
    /*Funcion validarDatos
            Método para validar los campos de datos (nombre,direccion,telefono, email)
            Evalua  por cada campo nombre, direccion, telefono y email que exista algun caracter
            Si es correcto la validacion prosigue y continua con el formulario
            Si es falso; return un mensaje obligando a rellenar los campos.
         */
 
       function validarDatos() {
        var nombre = document.getElementById("nombre").value;
        var direccion = document.getElementById("direccion").value;
        var telefono = document.getElementById("telefono").value;
        var email = document.getElementById("email").value;
       
        
        if (nombre === "" || direccion === "" || telefono === "" || email === "") {
          alert("Todos los campos son obligatorios");
          return false; // Detener el envío del formulario
        }
    } 
    /*Funcion validarFormulario
            Método que valida la eleccion del tamaño de las pizzas y los ingredientes
            Primero chequea que alguna de las opciones este marcada, si no es asi lanza un mensaje para elegir pizza
            Segundo comprueba que al menos algun ingrediente este marcado, si no es asi lanza un mensaje para seleccionarlos
    
            */
        

        function validarFormulario(){

            if((document.getElementById("peque").checked == false) && (document.getElementById("mediana").checked == false)
                && (document.getElementById("grande").checked == false))
                    alert('Debes elegir un tamaño para la pizza')
            if((document.getElementById("tomate").checked == false) && (document.getElementById("pollo").checked == false)
                && (document.getElementById("bacon").checked == false) && (document.getElementById("queso").checked == false))
                    alert('Debes seleccionar al menos un ingrediente.');
            
        };
               
    /*funcion precio calcular precio
            El Metodo, recibe dato tras la eleccion del chequeo con las opciones marcadas con precio
                      segunda parte tras la seleccion de los ingredientes, añade en la cesta e incrementa
                      el valor de la misma.
            El Objetivo: Obtener precio total del encargo tanto de la seleccion pizza como los respectivos
                      ingredientes.

                    -pizzas: Variable recibe dato desde la opcion elegida.
                    -pizzaElegida: Variable creada, recibe el valor de la pizza elegida
                                   Se transforma a entero porque el venia con valor "String"
                    - ingredientes: Variable que recibe valor desde los checks propuestos
                    - ingredienteElegido : Variable que tras iterar añadirá el elemento en un Array
                    - ingredientePrecio : Variable con el valor y parseada a entero al venir como "String"
                    - precioTotal : Resultado de la obtencion de la pizza eleguida mas los ingredientes seleccionados
                    - resultado: Variable creada para mostrar en pantalla, pizza elegida, precio pizza,numero de ingredientes
                      y la suma final
        */ 

          function calcularPrecioTotal(){
            let pizzas = document.getElementsByName("masa");
            let pizzaElegida;
            
            for (let pizza of pizzas ){
                if( pizza.checked){
                    pizzaElegida = parseInt(pizza.value);
                    break;
                }
            }

            let ingredientes = document.getElementsByName("ingrediente");
            let ingredienteElegido = [];
            let precioIngrediente = 0;

            for (let ingrediente of ingredientes){
                if (ingrediente.checked){
                    ingredienteElegido.push(ingrediente.id);
                    precioIngrediente += parseInt(ingrediente.value);
                }
            }

            let precioTotal = pizzaElegida + precioIngrediente;
            let resultado = "**NOTA DE SU PEDIDO**<br>Precio pizza elegido: " + pizzaElegida + "€<br>Ingredientes elegidos: " + precioIngrediente  + "<br>Precio total : " + precioTotal + "€";
            document.getElementById("resultado").innerHTML = resultado;

        };
        
    


      

        
 