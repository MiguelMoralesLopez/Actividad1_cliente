

        // funcion precio
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


      

        
 