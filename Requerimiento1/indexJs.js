//Metodo Generación Formulario
function GeneraForm(){

    //Crear título de la página
    let titulo = document.createElement("h1");
    titulo.id = "titulo";

    //Titulo-nombre Formulario
    let contTitulo= document.createTextNode("Formulario");
    titulo.appendChild(contTitulo);

    //Agregar el titulo al div del HTML
    document.getElementById("ContentFormulario").appendChild(titulo);
    

    ////Crear el objeto formulario
    let formulario=document.createElement("form");
    document.getElementById('ContentFormulario').appendChild(formulario); //Agregar el formulario a la etiqueta con el ID
    formulario.appendChild(titulo);//Agregar el objeto titulo al objeto formulario
 
     ////Crear el objeto caja de texto DNI
     let cajaTextDni=document.createElement("input");
     cajaTextDni.setAttribute('type', "text");//Asignar el atributo type
     cajaTextDni.setAttribute('placeholder', "Dni");//Asignar el atributo placeholder
     formulario.appendChild(cajaTextDni);//Agregar el objeto caja de texto Nombres al objeto formulario
     let brD = document.createElement("br");
    formulario.appendChild(brD);

    ////Crear el objeto caja de texto Nombre
    let cajaTextNombre=document.createElement("input");
    cajaTextNombre.setAttribute('type', "text");//Asignar el atributo type
    cajaTextNombre.setAttribute('placeholder', "Nombre");//Asignar el atributo placeholder
    formulario.appendChild(cajaTextNombre);//Agregar el objeto caja de texto Nombres al objeto formulario
   
   

    ////Crear el objeto caja de texto Apellidos
    let cajaTextApellidos=document.createElement("input");
    cajaTextApellidos.setAttribute('type', "text");//Asignar el atributo type
    cajaTextApellidos.setAttribute('placeholder', "Apellidos");//Asignar el atributo placeholder
    formulario.appendChild(cajaTextApellidos);//Agregar el objeto caja de texto Apellidos al objeto formulario
    let brA = document.createElement("br");
    formulario.appendChild(brA);

    ////Crear el objeto caja de texto Dirección
    let cajaTextDireccion=document.createElement("input");
    cajaTextDireccion.setAttribute('type', "text");//Asignar el atributo type
    cajaTextDireccion.setAttribute('placeholder', "Dirección");//Asignar el atributo placeholder
    formulario.appendChild(cajaTextDireccion);//Agregar el objeto caja de texto Dirección al objeto formulario
    let brDi = document.createElement("br");
    formulario.appendChild(brDi);

    ////Crear el objeto caja de texto Teléfono
    let cajaTextTelefono=document.createElement("input");
    cajaTextTelefono.setAttribute('type', "text");//Asignar el atributo type
    cajaTextTelefono.setAttribute('placeholder', "Teléfono");//Asignar el atributo placeholder
    formulario.appendChild(cajaTextTelefono);//Agregar el objeto caja de texto Teléfono al objeto formulario
    let brt1 = document.createElement("br");
    formulario.appendChild(brt1);
    let brt2 = document.createElement("br");
    formulario.appendChild(brt2);

    //Radio buttons
    let p1 = document.createElement("h3");
    let radio1 = document.createTextNode("===Seleccione Cilindrada===");
    p1.appendChild(radio1);
    formulario.appendChild(p1)
    
    let radioButton1 = [
        {
            id: '125',
            nombre: 'cilindrada',
            value: '125',
            labelFor: '125',
            labelCont: '125cc'
        },
        {
            id: '300',
            nombre: 'cilindrada',
            value: '300',
            labelFor: '300',
            labelCont: '300cc'
        },
        {
            id: '600',
            nombre: 'cilindrada',
            value: '600',
            labelFor: '600',
            labelCont: '600cc'
        },
        {
            id: '1000',
            nombre: 'cilindrada',
            value: '1000',
            labelFor: '1000',
            labelCont: '1000cc'
        },
    ]
    
    for(let radio of radioButton1){
        let input = document.createElement("input")
        input.type = "radio";
        input.id = radio.id;
        input.name = radio.nombre;
        input.value = radio.value;
        formulario.appendChild(input)

        let label = document.createElement("label")
        label.for = radio.labelFor;
        let contLabel = document.createTextNode(radio.labelCont);
        label.appendChild(contLabel)
        formulario.appendChild(label)

    }
    let brc2 = document.createElement("br");
    formulario.appendChild(brc2);
    let brc3 = document.createElement("br");
    formulario.appendChild(brc3);

    let p2 = document.createElement("h3");
    let radio2 = document.createTextNode("===Escoga el tipo de moto===");
    p2.appendChild(radio2);
    formulario.appendChild(p2)

    let radioButton2 = [
        {
            id: 'custom',
            nombre: 'tipo',
            value: 'custom',
            labelFor: 'scustom',
            labelCont: 'Custom'
        },
        {
            id: 'trail',
            nombre: 'tipo',
            value: 'trail',
            labelFor: 'trail',
            labelCont: 'Trail'
        },
        {
            id: 'naked',
            nombre: 'tipo',
            value: 'naked',
            labelFor: 'naked',
            labelCont: 'Naked'
        },
        {
            id: 'deportiva',
            nombre: 'tipo',
            value: 'deportiva',
            labelFor: 'deportiva',
            labelCont: 'Deportiva'
        },
    ]

    for(let radio of radioButton2){
        let input = document.createElement("input")
        input.type = "radio";
        input.id = radio.id;
        input.name = radio.nombre;
        input.value = radio.value;
        formulario.appendChild(input)

        let label = document.createElement("label")
        label.for = radio.labelFor;
        let contLabel = document.createTextNode(radio.labelCont);
        label.appendChild(contLabel)
        formulario.appendChild(label)

    }
    let brm = document.createElement("br");
    formulario.appendChild(brm);
    let brm1 = document.createElement("br");
    formulario.appendChild(brm1);

    //Radio checkbox

    let eleccion = document.createElement('h3');
    let eleccionText = document.createTextNode('*** ✌ (-‿-) ✌ Seleccione la marca deseada ✌ (-‿-) ✌***');
    eleccion.appendChild(eleccionText);
    formulario.appendChild(eleccion);
    let br1 = document.createElement("br");
    formulario.appendChild(br1);

    //Imagenes con checkbox
    let marcas = [
        {
            src: 'img/bmw.png',
            m: 'bmw'
        }
        ,
        {
            src: 'img/ducati.png',
            m: 'ducati'
        }
        ,{
            src: 'img/honda.png',
            m: 'honda'
        }
        ,{
            src: 'img/kawa.png',
            m: 'kawasaki'
        }
        ,
        {
            src: 'img/suzuki.png',
            m: 'suzuki'
        }
        
    ]
    
    for (let marca of marcas){
    let imagen = document.createElement('img')
    imagen.src = marca.src
    imagen.setAttribute('style', "width:100px;height: 100px")
    formulario.appendChild(imagen)

    let check = document.createElement('input')
    check.type = 'checkbox'
    check.id = marca.m
    check.value = marca.m
    formulario.appendChild(check)
    }
    let brac = document.createElement("br");
    formulario.appendChild(brac);
    let brac1 = document.createElement("br");
    formulario.appendChild(brac1);
    let brac2 = document.createElement("br");
    formulario.appendChild(brac2);

    let h2 = document.createElement('h3')
    let h2Text = document.createTextNode('Elige un accesorio')
    h2.appendChild(h2Text)
    formulario.appendChild(h2)

    let elecc = [
        {
            value : '1',
            nombre : 'Piezas Carbono'
        }
        ,
        {
            value : '2',
            nombre : 'Escape Titanio'
        }
        ,
        {
            value : '3',
            nombre : 'Pegatinas Personalizadas'
        }
        ,
        {
            value : '4',
            nombre : 'Cúpula Ahumada'
        }
        ,
        {
            value : '5',
            nombre : 'Sin extras'
        }
    ]

    let escoger = document.createElement('select')
    escoger.name = 'eleccion'
    formulario.appendChild(escoger)
   
    for(let elec of elecc){
        let op1 = document.createElement('option')
        op1.value = elec.value
        opText = document.createTextNode(elec.nombre)
        op1.appendChild(opText)
        escoger.appendChild(op1)

    };
    ////Crear el objeto area de texto del Mensaje
    let cajaTextMensaje=document.createElement("textarea");
    cajaTextMensaje.setAttribute('placeholder', "Observaciones");//Asignar el atributo placeholder
    cajaTextMensaje.setAttribute('style', "width:70%;height:200px;margin: 10px 200px;padding: 5px");//Asignar el atributo style
    formulario.appendChild(cajaTextMensaje);//Agregar el objeto area de texto del Mensaje al objeto formulario
    let br = document.createElement("br");
    formulario.appendChild(br);

    ////Crear boton
    let boton = document.createElement('input');
	boton.setAttribute('type', "button");//Asignar el atributo type	
    boton.setAttribute('value', "Enviar");//Asignar el atributo value
    boton.setAttribute('style', "width:100px;margin: 50px 800px;padding: 10px;background:#F05133;color:#fff;border:solid 1px #000;");//Asignar el atributo style
    boton.setAttribute('onclick', "alert('Se envio el mensaje')");
    formulario.appendChild(boton);
		
}