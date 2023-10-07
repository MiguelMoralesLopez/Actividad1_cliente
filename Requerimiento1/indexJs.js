/* Creacion del formulario */ 
var form = document.createElement("form"); //<form></form>
form.action = "procesar.jsp"; //<form action="procesar.jsp"></form>
form.method = "post"; //<form action="procesar.jsp" method="post"></form>

var fieldset = document.createElement("fieldset"); //<fieldset></fieldset>
var legend = document.createElement("legend"); //<legend></legend>
var contenidoLegend = document.createElement("Formulario"); //Formulario

// Creo los label y los inputs que usaré en el formulario
var label = document.createElement("label"); //<label></label>
var input = document.createElement("input"); //<input></input>