function cargarDatos(){
/* Creacion del formulario */ 
let form = document.createElement("form"); //<form></form>
form.setAttribute = ("action","procesar.jsp"); //<form action="procesar.jsp"></form>
form.setAttribute = ("method","post"); //<form action="procesar.jsp" method="post"></form>

let fieldset = document.createElement("fieldset"); //<fieldset></fieldset>
let legend = document.createElement("legend"); //<legend></legend>
let contenidoLegend = document.createTextNode("Formulario"); //Formulario
fieldset.appendChild(legend)
legend.appendChild(contenidoLegend)


/* Creo los label y los input que usaré en el formulario */
//DNI
let labelDni = document.createElement("label"); //<label></label>
labelDni.setAttribute = ("for","dni"); // <label for="dni"></label>
let contenidoDni = document.createTextNode("DNI (con letra): "); //DNI (con letra): 
labelDni.appendChild(contenidoDni) // <label for="dni">DNI: </label>

let inputDni = document.createElement("input"); //<input></input>
inputDni.setAttribute = ("id", "dni"); //<input id="dni"></input>
inputDni.setAttribute = ("type","text"); //<input id="dni" type="text"></input>
inputDni.setAttribute = ("name","dni"); //<input id="dni" type="text" name="dni"></input>
inputDni.setAttribute = ("placeholder","Introduce tu dni") //<input id="dni" type="text" name="dni" placeholder="Introduce tu dni"></input>

//Nombre


/* Introduzco el formulario en el div del html*/
document.body.div.appendChild(form);

/* Introduzco los label y los input en el formulario*/

}

