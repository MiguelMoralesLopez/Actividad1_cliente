/* Creo la funcion cargarDatos para que el contenido del js se muestre en el html*/
function cargarDatos(){

/* Creación de los br que utilizará la página*/ 
let br1 = document.createElement("br");
let br2 = document.createElement("br");
let br3 = document.createElement("br");
let br4 = document.createElement("br");
let br5 = document.createElement("br");
let br6 = document.createElement("br");
let br7 = document.createElement("br");
let br8 = document.createElement("br");
let br9 = document.createElement("br");
let br10 = document.createElement("br");
let br11 = document.createElement("br");
let br12 = document.createElement("br");
let br13 = document.createElement("br");
let br14 = document.createElement("br");
let br15 = document.createElement("br");
let br16 = document.createElement("br");
let br17 = document.createElement("br");
let br18 = document.createElement("br");
let br19 = document.createElement("br");
let br20 = document.createElement("br");
let br21 = document.createElement("br");
let br22 = document.createElement("br");
let br23 = document.createElement("br");
let br24 = document.createElement("br");
let br25 = document.createElement("br");
let brFotos = document.createElement("br");

/* Creacion del formulario, fieldset y legend */ 
let form = document.createElement("form"); //<form></form>
form.setAttribute = ("action","procesar.jsp"); //<form action="procesar.jsp"></form>
form.setAttribute = ("method","post"); //<form action="procesar.jsp" method="post"></form>

let fieldset = document.createElement("fieldset"); //<fieldset></fieldset>
let legend = document.createElement("legend"); //<legend></legend>
let contenidoLegend = document.createTextNode("Formulario"); //Formulario
fieldset.appendChild(legend);
legend.appendChild(contenidoLegend);
form.appendChild(fieldset);

/* Creo los label y los input tipo text que usaré en el formulario */
//DNI
let labelDni = document.createElement("label"); //<label></label>
labelDni.for = "dni"; // <label for="dni"></label>
let contDni = document.createTextNode("DNI (con letra): "); //DNI (con letra): 
labelDni.appendChild(contDni); // <label for="dni">DNI: </label>

let inputDni = document.createElement("input"); //<input></input>
inputDni.setAttribute = ("id", "dni"); //<input id="dni"></input>
inputDni.setAttribute = ("name","dni"); //<input id="dni" name="dni"></input>
inputDni.setAttribute = ("type","text"); //<input id="dni" name="dni" type="text"></input>
inputDni.placeholder = ("Introduce tu DNI"); //<input id="dni" type="text" name="dni" placeholder="Introduce tu dni"></input>
inputDni.required = "true";

//Nombre
let labelNombre = document.createElement("label"); //<label></label>
labelNombre.for = "nombre"; //<label for="nombre"></label>
let contNombre = document.createTextNode("Nombre: "); //<label for="nombre">Nombre: </label>
labelNombre.appendChild(contNombre);

let inputNombre = document.createElement("input"); //<input></input>
inputNombre.id = "nombre"; //<input id="nombre"></input>
inputNombre.name = "nombre"; //<input id="nopmbre" name="nombre"></input>
inputNombre.type = "text"; //<input id="nombre" name="name" type="text"></input>
inputNombre.placeholder = "Escribe tu nombre"; //<input id="nombre" name="name" type="text" placeholder="Escribe tu nombre"></input>

//Apellidos
let labelApellidos = document.createElement("label");
labelApellidos.for = "apellidos";
let contApellidos = document.createTextNode("Apellidos: ");
labelApellidos.appendChild(contApellidos);

let inputApellidos = document.createElement("input");
inputApellidos.id = "apellidos";
inputApellidos.name = "apellidos";
inputApellidos.type = "text";
inputApellidos.placeholder = "Escribe tus apellidos";

//Direccion
let labelDireccion = document.createElement("label");
labelDireccion.for = "Direccion";
let contDireccion = document.createTextNode("Dirección: ")
labelDireccion.appendChild(contDireccion);

let inputDireccion = document.createElement("input");
inputDireccion.id = "direccion";
inputDireccion.name ="direccion";
inputDireccion.type = "text";
inputDireccion.placeholder = "Escribe tu dirección"

//Telefono
let labelTelefono = document.createElement("label");
labelTelefono.for = "telefono";
let contTelefono = document.createTextNode("Teléfono: ")
labelTelefono.appendChild(contTelefono);

let inputTelefono = document.createElement("input");
inputTelefono.id = "telefono";
inputTelefono.name = "telefono";
inputTelefono.type = "tel";
inputTelefono.placeholder = "Escribe tu número de teléfono"

/* Creo los campos radio que usaré en el formulario */
let labelJugadores = document.createElement("label");
labelJugadores.for = "jugadores";
let contJugadores = document.createTextNode("Número de jugadores: ");
labelJugadores.appendChild(contJugadores);

// 2 Jugadores
let l2 = document.createElement("label");
let l2cont = document.createTextNode("2 Jugadores");
l2.appendChild(l2cont);

let inputJugadores2 = document.createElement("input")
inputJugadores2.name = "jugadores";
inputJugadores2.type = "radio";
inputJugadores2.value = "2";
l2.appendChild(inputJugadores2);

//3 a 4 Jugadores
let l4 = document.createElement("label");
let l4cont = document.createTextNode(" De 3 a 4 Jugadores");
l4.appendChild(l4cont);

let inputJugadores4 = document.createElement("input");
inputJugadores4.name = "jugadores";
inputJugadores4.type = "radio";
inputJugadores4.value = "6";
l4.appendChild(inputJugadores4);

// 5 a 6 Jugadores
let l6 = document.createElement("label");
let l6cont = document.createTextNode("De 5 a 6 Jugadores");
l6.appendChild(l6cont);

let inputJugadores6 = document.createElement("input");
inputJugadores6.name = "jugadores";
inputJugadores6.type = "radio";
inputJugadores6.value = "6";
l6.appendChild(inputJugadores6);

// 7 a 10 Jugadores
let l10 = document.createElement("label");
let l10cont = document.createTextNode("De 7 a 10 Jugadores");
l10.appendChild(l10cont);

let inputJugadores10 = document.createElement("input");
inputJugadores10.name = "jugadores";
inputJugadores10.type = "radio";
inputJugadores10.value = "10";
l10.appendChild(inputJugadores10);

/* Creo las imagenes */
let imgTerror = document.createElement("img");
imgTerror.src = "img/terror.png";
imgTerror.style.width = "10%";
imgTerror.title = "Experiencia terror"
imgTerror.alt = "Experiencia terror";

let imgAccion = document.createElement("img");
imgAccion.src = "img/accion.png";
imgAccion.style.width = "10%";
imgAccion.title = "Experiencia acción";
imgAccion.alt = "Experiencia acción";

let imgFantasia = document.createElement("img");
imgFantasia.src = "img/fantasia.png";
imgFantasia.style.width = "10%";
imgFantasia.title = "Experiencia fantasia";
imgFantasia.alt = "Experiencia fantasia";

let imgAventura = document.createElement("img");
imgAventura.src = "img/aventura.png";
imgAventura.style.width = "10%";
imgAventura.title = "Experiencia aventura";
imgAventura.alt = "Experiencia aventura";

let imgInfantil = document.createElement("img");
imgInfantil.src = "img/infantil.png";
imgInfantil.style.width = "10%";
imgInfantil.title = "Experiencia infantil";
imgInfantil.alt = "Experiencia infantil";

/* Creo los campos checkbox del formulario */
let labelExperiencia = document.createElement("label");
let contExp = document.createTextNode("Experiencias: ");
labelExperiencia.appendChild(contExp);

let experiencia = [
    {
        nombre: "Terror",
        value: "terror"
    },
    {
        nombre: "Accion",
        value: "Accion"
    },
    {
        nombre: "Fantasia",
        value: "fantasia"
    },
    {
        nombre: "Aventura",
        value: "aventura"
    },
    {
        nombre: "Infantil",
        value: "infantil"
    }
]

/* Introduzco los label, los input en el formulario*/
fieldset.appendChild(labelDni);
fieldset.appendChild(inputDni);
fieldset.appendChild(br1);
fieldset.appendChild(br9);
fieldset.appendChild(labelNombre);
fieldset.appendChild(inputNombre);
fieldset.appendChild(br2);
fieldset.appendChild(br10);
fieldset.appendChild(labelApellidos);
fieldset.appendChild(inputApellidos);
fieldset.appendChild(br3);
fieldset.appendChild(br11);
fieldset.appendChild(labelDireccion);
fieldset.appendChild(inputDireccion);
fieldset.appendChild(br4);
fieldset.appendChild(br12);
fieldset.appendChild(labelTelefono);
fieldset.appendChild(inputTelefono);
fieldset.appendChild(br5);
fieldset.appendChild(br13);
fieldset.appendChild(labelJugadores);
fieldset.appendChild(br6);
labelJugadores.appendChild(br14);
labelJugadores.appendChild(l2);
l2.appendChild(br15);
labelJugadores.appendChild(l4);
l4.appendChild(br16);
labelJugadores.appendChild(l6);
l6.appendChild(br17);
labelJugadores.appendChild(l10);
fieldset.appendChild(br7);
fieldset.appendChild(labelExperiencia);
fieldset.appendChild(br8);

/* Introduzco las fotos en el formulario*/
fieldset.appendChild(imgTerror);
fieldset.appendChild(imgAccion);
fieldset.appendChild(imgFantasia);
fieldset.appendChild(imgAventura);
fieldset.appendChild(imgInfantil);
fieldset.appendChild(brFotos);

/* Creo un for para introducir todos los checkbox*/
for (let check of experiencia){
    let nombreCheck = document.createElement("span");
    if (check.nombre == "Terror"){
        nombreCheck.style.paddingLeft = "3.8%"; 
    }else if(check.nombre == "Accion"){
        nombreCheck.style.paddingLeft = "6.2%";  
    }else if(check.nombre == "Fantasia"){
        nombreCheck.style.paddingLeft = "6.5%";  
    }else if(check.nombre == "Aventura"){
        nombreCheck.style.paddingLeft = "5.5%";  
    }else if(check.nombre == "Infantil"){
        nombreCheck.style.paddingLeft = "6%";  
    }
    
    let contNombreCheck = document.createTextNode(check.nombre);
    nombreCheck.appendChild(contNombreCheck);
    fieldset.appendChild(nombreCheck);

    let checkboxExperiencia = document.createElement("input");
    checkboxExperiencia.type = "checkbox";
    checkboxExperiencia.name = check.nombre;
    checkboxExperiencia.value = check.value;
    fieldset.appendChild(checkboxExperiencia);

    if(check.nombre == "Infantil")
        fieldset.appendChild(br18);
        fieldset.appendChild(br19);
}

/* Creo los select*/
let dia = document.createElement("label");
dia.for = "dia";
let contdia = document.createTextNode("Elige el dia : ");
dia.appendChild(contdia);

let elegirDia = document.createElement("select");
elegirDia.name= "dia";

let viernes = document.createElement("option");
viernes.value="vie";
let contViernes = document.createTextNode("VIERNES");
viernes.appendChild(contViernes);

let sabado = document.createElement("option");
sabado.value="sab";
let contSabado = document.createTextNode("SÁBADO");
sabado.appendChild(contSabado);

let domingo = document.createElement("option");
domingo.value="dom";
let contDomingo = document.createTextNode("DOMINGO");
domingo.appendChild(contDomingo);

/* Inserto los campos del select */
fieldset.appendChild(dia);
dia.appendChild(elegirDia);
elegirDia.appendChild(viernes);
elegirDia.appendChild(sabado);
elegirDia.appendChild(domingo);
fieldset.appendChild(br20);
fieldset.appendChild(br21);

/* Creación del textarea */

let observaciones = document.createElement("label");
observaciones.for = "obs";
let contObs = document.createTextNode("Observaciones: ");
observaciones.appendChild(contObs);

let obs = document.createElement("textarea");
obs.name = "obs";
obs.placeholder = "Observaciones";
obs.rows ="4";
obs.cols = "35";

/*Inserto el textarea en el formulario */
fieldset.appendChild(observaciones);
observaciones.appendChild(obs);
observaciones.appendChild(br22);
observaciones.appendChild(br23);

/* Creo los inputs submit y reset */
let enviar = document.createElement("input");
enviar.type = "submit";
enviar.value = "Enviar";
enviar.style.marginLeft= "7%";
enviar.style.marginRight= "1%";

let restablecer = document.createElement("input");
restablecer.type = "reset";
restablecer.value = "Restablecer datos";

/* Inserto los inputs enviar y reset */
fieldset.appendChild(enviar);
fieldset.appendChild(restablecer);


/* Introduzco el formulario en el div del html*/
document.getElementById("contenedor").appendChild(form); //<body><div id="contenedor"><form> ... </form></div></body>

}