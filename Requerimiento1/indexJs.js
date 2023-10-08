/* Creo la funcion cargarDatos para que el contenido del js se muestre en el html*/
function cargarDatos(){

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
let contJugadores = document.createTextNode("Número de jugadores  ");
labelJugadores.appendChild(contJugadores);

// 2 Jugadores
let l2 = document.createElement("label");
let l2cont = document.createTextNode("2 Jugadores");
l2.appendChild(l2cont);

let inputJugadores2 = document.createElement("input")
inputJugadores2.id = "j2";
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
inputJugadores6.type = "radio";
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



/* Introduzco el formulario en el div del html*/
document.getElementById("contenedor").appendChild(form); //<body><div id="contenedor"><form> ... </form></div></body>

/* Introduzco los label, los input en el formulario*/
fieldset.appendChild(labelDni);
fieldset.appendChild(inputDni);
fieldset.appendChild(labelNombre);
fieldset.appendChild(inputNombre);
fieldset.appendChild(labelApellidos);
fieldset.appendChild(inputApellidos);
fieldset.appendChild(labelDireccion);
fieldset.appendChild(inputDireccion);
fieldset.appendChild(labelTelefono);
fieldset.appendChild(inputTelefono);
fieldset.appendChild(labelJugadores);
labelJugadores.appendChild(l2);
labelJugadores.appendChild(l4);
labelJugadores.appendChild(l6);
labelJugadores.appendChild(l10);
fieldset.appendChild(labelExperiencia)

/* Introduzco las fotos en el formulario*/
fieldset.appendChild(imgTerror);
fieldset.appendChild(imgAccion);
fieldset.appendChild(imgFantasia);
fieldset.appendChild(imgAventura);
fieldset.appendChild(imgInfantil);




console.log(form);

}