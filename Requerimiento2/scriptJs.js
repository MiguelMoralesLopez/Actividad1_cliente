

        /*funcion precio calcular precio
         -pizzas: variable recibe dato desde la opcion elegida 
         -pizzaElegida variable creada, recibe el valor de la pizza elegida
         Se transforma a entero porque el venia con valor "String"
         - ingredientes: Variable que recibe valor desde los checks propuestos
         - ingredienteElegido : Variable que tras iterar añadirá el elemento en un Array
         - ingredientePrecio : Variable con el valor y parseada a entero al venir como "String"
         - precioTotal : resultado de la obtencion de la pizza eleguida mas los ingredientes seleccionados
         - resultado: Variable creada para mostrar en pantalla, pizza elegida, precio pizza,numero de ingredientes
          y la suma final.

         
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
            let resultado = "Pizza elegida: €" + pizzaElegida +"<br>Ingredientes elegidos: €" + precioIngrediente + "<br>Precio total: €" + precioTotal;
            document.getElementById("resultado").innerHTML = resultado;

        };


      

        
 