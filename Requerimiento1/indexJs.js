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


/* Creo los label y los input que usaré en el formulario */
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

/* Creo los campos radio del formulario */



/* Introduzco el formulario en el div del html*/
document.getElementById("contenedor").appendChild(form); //<body><div id="contenedor"><form> ... </form></div></body>

/* Introduzco los label y los input en el formulario*/
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




console.log(form);

}