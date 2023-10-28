
function crearNodos(){

    //Creamos el h1 de la página
    let titulo = document.createElement("h1")
    titulo.id="tittle"
    //Nodo texto para el título
    let textTittle = document.createTextNode("Things about League of Legends")
    titulo.appendChild(textTittle)
    
    //Metemos el titutlo en el contenedor, llamando al objeto mediante el getByID
    document.getElementById('contenedor').appendChild(titulo)

    //Creamos un formulario
    let formulario = document.createElement('form')
    formulario.id = 'formulario'
    formulario.method = 'get'
    formulario.action = 'insertar.php'
    document.getElementById('contenedor').appendChild(formulario)
    
    //Creamos una leyenda para el formulario
    let legendForm = document.createElement('legend')
    let legendText = document.createTextNode('Rellene este formulario')
    legendForm.appendChild(legendText)
    formulario.appendChild(legendForm)

    //Creamos unos array de los campos de texto

    let camposTexto = [
        {
            for:'dni',
            textoLabel: 'DNI',
            type: 'text',
            id: 'dni',
            nombre: 'dni',
            placeholder: 'Introduce tu DNI'

        }
        ,
        {
            for: 'nombre',
            textoLabel: 'Nombre',
            type: 'text',
            id: 'nombre',
            nombre: 'nombre',
            placeholder: 'Introduce tu nombre'


        }
        ,
        {
            for:'apellidos',
            textoLabel: 'Apellidos',
            type:'text',
            id:'apellidos',
            nombre:'apellidos',
            placeholder:'Introduce tus apellidos'

        }
        ,
        {
            for:'direccion',
            textoLabel:'Direccion',
            type:'text',
            id:'direccion',
            nombre:'direccion'
           , placeholder: 'Introduce tu dirección' 

        }
        ,
        {
            for:'telefono',
            textoLabel:'Telefono',
            type: 'tel',
            id : 'telefono',
            nombre: 'telefono',
            placeholder:'Introduce tu telefono'

        }
    ]   
    // Usamos un bucle for para que cada campo del array Campos texto pase por los mismos argumentos
    for(let campo of camposTexto){
        // Primero se crean los br, los label 
        let br = document.createElement('br')
        let label = document.createElement('label')
        label.for = campo.for
        let textoLab = document.createTextNode(campo.textoLabel)
        label.appendChild(textoLab)
        //Creamos los inputs y los hacemos hijos de formulario
        let input = document.createElement('input')
        input.type = campo.type
        input.name = campo.name
        input.id = campo.id
        input.required = 'true'
        input.placeholder = campo.placeholder
        input.required = 'true'
        formulario.appendChild(label)
        formulario.appendChild(input)
        formulario.appendChild(br)
    }
    // creamos otro array  para los input de selección de radio

    let pjs = [
        {
            for:'jinx',
            pjLabel: 'Jinx',
            type: 'radio',
            nombre: 'personaje',
            id: 'jinx',
            value: 'jinx'
        }
        ,
        {
            for:'jayce',
            pjLabel: 'Jayce',
            type: 'radio',
            nombre: 'personaje',
            id: 'jayce',
            value: 'jayce'
        }
        ,
        {
            for:'caitlyn',
            pjLabel: 'Caitlyn',
            type: 'radio',
            nombre: 'personaje',
            id: 'caitlyn',
            value: 'caitlyn'
        }
        ,
        {
            for:'heimer',
            pjLabel: 'Heimer',
            type: 'radio',
            nombre: 'personaje',
            id: 'heimer',
            value: 'heimer'
        }




    ]

    //Creamos un fielset para meterlo todo en un recuadro
    // y le añadimos un texto leyenda
    let fielset = document.createElement('fieldset')
    let legendFiel = document.createElement('legend')
    let textFiel = document.createTextNode('Elige tu personaje favorito')
    legendFiel.appendChild(textFiel)
    fielset.appendChild(legendFiel)
    formulario.appendChild(fielset)

    //Creamos las opciones con un bucle for para cada objeto del array

    for (let pj of pjs){
        
        let labelPj = document.createElement('label')
        labelPj.for = pj.for
        let textoPj = document.createTextNode(pj.pjLabel)    
        labelPj.appendChild(textoPj)
        fielset.appendChild(labelPj)

        let inputPj = document.createElement('input')
        inputPj.type = pj.type
        inputPj.name = pj.nombre
        inputPj.id = pj.id
        inputPj.value = pj.value
        fielset.appendChild(inputPj)

    }

    let wps = [
        {
            for:'shield',
            pjLabel: 'Doran Sword',
            type: 'radio',
            nombre: 'weapon',
            id: 'sword',
            value: 'sword'
        }
        ,
        {
            for:'shield',
            pjLabel: 'Doran Shield',
            type: 'radio',
            nombre: 'weapon',
            id: 'shield',
            value: 'shield'
        }
        ,
        {
            for:'ring',
            pjLabel: 'Doran Ring',
            type: 'radio',
            nombre: 'weapon',
            id: 'ring',
            value: 'ring'
        }
        ,
        {
            for:'arch',
            pjLabel: 'Doran Arch',
            type: 'radio',
            nombre: 'weapon',
            id: 'arch',
            value: 'arch'
        }




    ]

    
    let fielset2 = document.createElement('fieldset')
    let legendFiel2 = document.createElement('legend')
    let textFiel2 = document.createTextNode('Elige tu arma favorita')
    legendFiel2.appendChild(textFiel2)
    fielset2.appendChild(legendFiel2)
    formulario.appendChild(fielset2)

    //Repetimos de nuevo el proceso anterior 
    // pero esta vez con diferentes ejemplos
    for (let wp of wps){
        let wpLabel = document.createElement('label')
        wpLabel.for = wp.for
        wpLText = document.createTextNode(wp.pjLabel)
        wpLabel.appendChild(wpLText)

        let wpInput = document.createElement('input')
        wpInput.type = wp.type
        wpInput.name = wp.nombre
        wpInput.id = wp.id
        wpInput.value = wp.value 


        fielset2.appendChild(wpLabel)
        fielset2.appendChild(wpInput)

    }

    let eleccion = document.createElement('p')
    let eleccionText = document.createTextNode('Elige tus skins favoritas')
    eleccion.appendChild(eleccionText)
    formulario.appendChild(eleccion)


    //Img con checkbox, creamos un array para las imágenes
    let skins = [
        {
            src: 'img/1.jpg',
            pj: 'ahri'
        }
        ,
        {
            src: 'img/2.jpg',
            pj: 'warwick'
        }
        ,{
            src: 'img/3.jpg',
            pj: 'lux'
        }
        ,{
            src: 'img/4.jpg',
            pj: 'jhin'
        }
        ,
        {
            src: 'img/5.jpg',
            pj: 'eve'
        }
        
    ]
    //Con esto hacemos que se suban todas las imágenes además de que 
    // tendrán un checkbox 
    for (let skin of skins){
    let imagen = document.createElement('img')
    imagen.src = skin.src
    formulario.appendChild(imagen)

    let check = document.createElement('input')
    check.type = 'checkbox'
    check.id = skin.pj
    check.value = skin.pj
    formulario.appendChild(check)
    }
    //Creamos una imagen, y le asignamos su ruta
    let h2 = document.createElement('h3')
    let h2Text = document.createTextNode('Evalua esta Skin del 1 al 5')
    h2.appendChild(h2Text)
    formulario.appendChild(h2)

    let miss = document.createElement('img')
    miss.src = 'img/miss.jpg'
    formulario.appendChild(miss)
    //Aqui creamos otro array con los atributos para el select
    let valor = [
        {
            value : '1',
            nombre : 'Uno'
        }
        ,
        {
            value : '2',
            nombre : 'Dos'
        }
        ,
        {
            value : '3',
            nombre : 'Tres'
        }
        ,
        {
            value : '4',
            nombre : 'Cuatro'
        }
        ,
        {
            value : '5',
            nombre : 'Cinco'
        }
    ]
    //aqui creamos un select
    let choose = document.createElement('select')
    choose.name = 'valoracion'
    formulario.appendChild(choose)
   
    // le asignamos un select a cada opcion, en este caso son 5
    for(let valo of valor){
        let op1 = document.createElement('option')
        op1.value = valo.value
        opText = document.createTextNode(valo.nombre)
        op1.appendChild(opText)
        choose.appendChild(op1)

    }

    //creamos un textarea y le definimos el tamaño
    let obs = document.createElement('h3')
    let obsText = document.createTextNode('Sugerencias de mejora de juego')
    obs.appendChild(obsText)
    formulario.appendChild(obs)

    let txtarea = document.createElement('textarea')
    txtarea.cols = '70'
    txtarea.rows = '10'
    formulario.appendChild(txtarea)


    //Creamos el boton para enviar el formulario
    let enviar = document.createElement('input')
    enviar.type = 'submit'
    formulario.appendChild(enviar)

    

}
//Al cargar la ventaba, se ejecuta la funciín crearNodos
window.onload = crearNodos;

// https://github.com/MiguelMoralesLopez/Actividad1_cliente/tree/kaidi