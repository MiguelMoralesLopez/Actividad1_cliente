
        console.log("falta")
    function precioFinal(){
                let precTamano = 0
                precTamano = comprobarTamano()
                let precIng = 0
                precIng = comprobarIng()
                let precioFinal
                precioFinal = comprobarIng + comprobarTamano

                
        }
        

       

      function comprobarTamano(){
        let 
        let precioTamano = 0;
        if(document.getElementById("peque").checked){
                precioTamano=10
        }
        else
        if(document.getElementById("mediano").checked){
                precioTamano=15
        }
        else
        if(document.getElementById("grande").checked){
                precioTamano=20
        }
        return precioTamano;

      }

      function comprobarIng(){
        let precioIng = 0;
        if(document.getElementById("pina").checked){
        precioIng +=2;}
        else if(document.getElementById("jamon").checked){
        precioIng +=2;}
        else if(document.getElementById("bacon").checked){
        precioIng +=2;
        }
        else if(document.getElementById("queso").checked){
        precioIng+=2;
        }
        return precioIng;
      }

      function procesar(){
        let correcto1 = false;
        let correcto2 = false;
        
       if( (document.getElementById("peque").checked == false) && (document.getElementById("mediano").chequed == false) && (document.getElementById("grande").checked==false)){
        console.log("no elegiste tamaño")
        correcto1 = true;
       }
       if( (document.getElementById("jamon").checked == false) && (document.getElementById("pina").chequed == false) && (document.getElementById("bacon").checked==false) && (document.getElementById("queso").chequed == false)){
        console.log("no elegiste ingrediente")
        correcto2 = true
       }

       if(correcto1==true && correcto2==true){
        console.log("correcto")
        precioFinal();
       }
       else
       alert("Faltan cosas illo")

       
      }


     


      
        





