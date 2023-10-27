
function procesar(){

    //PARTE 1 comprueba cada campo y muestra por pantalla lo que falta hasta que estén todos los campos
    let compro1 = nombre
    let compro2 = apellidos
    let compro3 = telefono
    let compro4 = email
    let array1 = []
    array1.push(nombre,apellidos,telefono,email)
    console.log(array1)
    let teFalta = ""
    let contador = 0
    noText.textContent = "Te falta de rellenar: "
    
    for(let campo of array1){
        if(campo.value.trim() ==""){
            teFalta = campo.id+', '
            noText.textContent += teFalta
            contador ++
        }
        
    }
    
   
    if(contador ==0){
        noText.style.display = "none"
    }
    else{
    noText.style.display = "block"
    
    }
    
    // -------------------------------------------------------------------
    
    //Parte 2   
    //Comprueba qué opción ha sido elegida para asignarle un precio u otro
    let tamano1 = document.getElementById("peque")
    let tamano2 = mediano
    let tamano3 = grande

    let precioSize = 0
    if(tamano1.checked == true){
        precioSize = 5
        console.log("precio cambiado a 5")
        noSize.style.display = "none"
    }
    else
    if(tamano2.checked == true){
        precioSize = 10
    console.log("precio cambiado a 10")
    noSize.style.display = "none"
    }
    else
    if(tamano3.checked == true){
        precioSize = 15
        console.log("precio cambiado a 15")
        noSize.style.display = "none"
    }
    //Si no se eligió ninguna sale por pantalla este error
    else{
        console.log("No se eligió tamaño")
        noSize.style.display = "block"
        

    }
    //Cuando ya está elegido, parsea el dato para que sea Integer
    let iPrecioSize = parseInt(precioSize)

    //---------------------------------------------------------
    //Parte 3
    // Lo primero comprueba qué opciones han sido marcadas, y según la cantidad, 
    // la variable precio va cambiando
// Configuración ingredientes
        let ig1 = pina
        let ig2 = jamon
        let ig3 = bacon 
        let ig4 = queso
        let precioFood = 0

        if (ig1.checked == true){
            console.log("Que sacrilegio!")
            precioFood ++;
            console.log(precioFood)
        }
        
        if (ig2.checked == true){
            precioFood ++;
            console.log(precioFood)
        }
        
        if (ig3.checked == true){
            precioFood ++;
            console.log(precioFood)
        
        }
        
        if (ig4.checked == true){
            precioFood ++;
            console.log(precioFood)
        }


        //Comprueba si está elegido al menos una opción, si no hay ninguna elegida saca por pantalla un aviso 

        let iPrecioFood = parseInt(precioFood)
        if(ig1.checked == false  && ig2.checked == false && ig3.checked == false && ig4.checked == false){
            console.log("No hay nada")
            noFood.style.display = "block"
        }
        else{
            noFood.style.display = "none"
        }
        
        //Comprobación precio final
        // Si está todo correcto entonces saca el precio final por pantalla

        let final = iPrecioFood+iPrecioSize
        let textFin = "El precio es "+ final + "€"
        document.getElementById("result").textContent = textFin
        
        
    

}

//https://github.com/MiguelMoralesLopez/Actividad1_cliente/tree/kaidi