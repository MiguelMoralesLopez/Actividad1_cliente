function crearNodos(){

        //Creamos el h1 de la página
        let titulo = document.createElement('h1')
        titulo.id='tittle'
        //Nodo texto para el título
        let textTittle = document.createTextNode('All of League')
        titulo.appendChild(textTittle)
        
        //Metemos el titutlo en el contenedor, llamando al objeto mediante el getByID
        document.getElementById('contenedor').appendChild(titulo)





}