function comprobarCampos(){
        if(document.getElementById('nombre' == null) || document.getElementById('nombre'=="")){
                let alerta = document.createElement('h2')
                let textoAler = document.createTextNode('falta el nooombre')
                alerta.appendChild(textoAler)
                document.getElementById('pizza').appendChild(alerta)
                
        }
        if(document.getElementById('apellidos' == null) || document.getElementById('apellidos' == "")){
                alert('OYE TE FALTA EL APELLIDO')
        }
}