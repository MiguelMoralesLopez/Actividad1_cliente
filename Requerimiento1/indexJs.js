contenedor.onload = crearNodos();

function crearNodos(){

    //Creación del título de página
    let titulo = document.createElement("h1");
    titulo.id = "titulo";

    //Contenido del h1 creado anteriormente
    let contTitulo= document.createTextNode("Formulario de compra");
    titulo.appendChild(contTitulo);

    //Adición del titulo al div de HTML
    document.getElementById("contenedor").appendChild(titulo);

    //Formulario
    let formulario = document.createElement("form");
    formulario.id = "form";
    document.getElementById("contenedor").appendChild(formulario);

    //Campos de texto a crear: DNI, nombre, apellidos, dirección y teléfono
    /*
        Para crear los campos de texto (así como para la mayoria de elementos del formulario) se ha usado la siguiente estructura:
        array que contiene los datos + bucle for que recorre dicho array.
        De esta forma el código queda más limpio y eficiente.
    */
    let camposTexto = [
        {   for: 'dni',
            nombrelabel: 'DNI: ',
            type: 'text',
            id: 'dni',
            nombre: 'dni',
            placeholder: 'Introduce tu DNI'
        },
        {   for: 'nombre',
            nombrelabel: 'Nombre: ',
            type: 'text',
            id: 'nombre',
            nombre: 'nombre',
            placeholder: 'Introduce tu nombre'
        },
        {
            for: 'apellidos',
            nombrelabel: ' Apellidos: ',
            type: 'text',
            id: 'apellidos',
            nombre: 'apellidos',
            placeholder: 'Introduce tus apellidos'
        },
        {
            for: 'direccion',
            nombrelabel: 'Dirección: ',
            type: 'text',
            id: 'direccion',
            nombre: 'direccion',
            placeholder: 'Introduce tu dirección'
        },
        {
            for: 'telefono',
            nombrelabel: ' Teléfono: ',
            type: 'tel',
            id: 'telefono',
            nombre: 'telefono',
            placeholder: 'Introduce tu teléfono'
        }
    ]

    for(let texto of camposTexto){
        let br = document.createElement("br");
        let label = document.createElement("label");
        label.for = texto.for;
        let contenidoLabel = document.createTextNode(texto.nombrelabel)
        label.appendChild(contenidoLabel);
        let input = document.createElement("input");
        input.type = texto.type;
        input.id = texto.id;
        input.name = texto.nombre;
        input.placeholder = texto.placeholder;
        input.required = "true";
        formulario.appendChild(label)
        formulario.appendChild(input)
        //Añado un if que que evalua los objetos creados para poner los saltos de línea donde necesito.
        if ((label.for == "dni") || (label.for == "apellidos")){
            formulario.appendChild(br)
        }
    }

    //Radio buttons

    let p1 = document.createElement("p");
    let radio1 = document.createTextNode("Estilo: ");
    p1.appendChild(radio1);
    formulario.appendChild(p1)

    let radioButton1 = [
        {
            id: 'inf',
            nombre: 'estilo',
            value: 'inf',
            labelFor: 'inf',
            labelCont: 'Infantil (10 a 15 años)'
        },
        {
            id: 'h',
            nombre: 'estilo',
            value: 'h',
            labelFor: 'h',
            labelCont: 'Hombre'
        },
        {
            id: 'm',
            nombre: 'estilo',
            value: 'm',
            labelFor: 'm',
            labelCont: 'Mujer'
        },
        {
            id: 'ux',
            nombre: 'estilo',
            value: 'ux',
            labelFor: 'ux',
            labelCont: 'Unisex'
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

    let p2 = document.createElement("p");
    let radio2 = document.createTextNode("Talla: ");
    p2.appendChild(radio2);
    formulario.appendChild(p2)

    let radioButton2 = [
        {
            id: 's',
            nombre: 'talla',
            value: 's',
            labelFor: 's',
            labelCont: 'S'
        },
        {
            id: 'm',
            nombre: 'talla',
            value: 'm',
            labelFor: 'm',
            labelCont: 'M'
        },
        {
            id: 'l',
            nombre: 'talla',
            value: 'l',
            labelFor: 'l',
            labelCont: 'L'
        },
        {
            id: 'xl',
            nombre: 'talla',
            value: 'xl',
            labelFor: 'xl',
            labelCont: 'XL'
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

    let p3 = document.createElement("p")
    let contP3 = document.createTextNode("(Si deseas varias tallas y estilos diferentes, puedes especificarlo en el cuadro de comentarios)");
    p3.appendChild(contP3);
    formulario.appendChild(p3)

    //Imagen, checkbox y select
    let p4 = document.createElement("p");
    let contP4 = document.createTextNode("Elige modelos y cantidades de cada producto que desees: ");
    p4.appendChild(contP4);
    formulario.appendChild(p4);

    let camisetas = [
        {
            ruta : 'img/ATM.jpg',
            equipo: "ATM"
        },
        {
            ruta : 'img/RM.jpg',
            equipo: "RM"
        },
        {
            ruta: 'img/FCB.jpg',
            equipo: "FCB"
        },
        {
            ruta: 'img/AB.jpg',
            equipo: "AB"
        },
        {
            ruta: 'img/S.jpg',
            equipo: "S"
        },
        {
            ruta: 'img/B.jpg',
            equipo: "B"
        }
    ]

    for (let c of camisetas){
        let imagen = document.createElement("img")
        imagen.src = c.ruta
        imagen.width = 80;
        imagen.height = 80;
        formulario.appendChild(imagen);
        
        let check = document.createElement("input");
        check.type = "checkbox";
        check.id = c.equipo;
        check.value = c.equipo;
        formulario.appendChild(check);

        let select = document.createElement("select");
        select.name = "select";

        let op0 = document.createElement("option");
        op0.value = "0";
        let contOp0 = document.createTextNode("0");
        op0.appendChild(contOp0);
        select.appendChild(op0);

        let op1 = document.createElement("option");
        op1.value = "1";
        let contOp1 = document.createTextNode("1");
        op1.appendChild(contOp1);
        select.appendChild(op1);

        let op2 = document.createElement("option");
        op2.value = "2";
        let contOp2 = document.createTextNode("2");
        op2.appendChild(contOp2);
        select.appendChild(op2);

        let op3 = document.createElement("option");
        op3.value = "3";
        let contOp3 = document.createTextNode("3");
        op3.appendChild(contOp3);
        select.appendChild(op3);

        formulario.appendChild(select);

        let br = document.createElement("br");
        if(c.equipo == "FCB")
            formulario.appendChild(br);

    }

    //Campo textarea
    let p5 = document.createElement("p");
    let contP5 = document.createTextNode("Observaciones: ");
    p5.appendChild(contP5);
    formulario.appendChild(p5)

    let comentarios = document.createElement("textarea");
    comentarios.placeholder = "Escribe aquí tus observaciones.";
    comentarios.rows = "10";
    comentarios.cols = "50";
    formulario.appendChild(comentarios);
    let br = document.createElement("br");
    formulario.appendChild(br);

    //Submit y reset
    let submit = document.createElement("input");
    submit.type = "submit"
    formulario.appendChild(submit)
    let reset = document.createElement("input");
    reset.type = "reset";
    formulario.appendChild(reset)
    
}