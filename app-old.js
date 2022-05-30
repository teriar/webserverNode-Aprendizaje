const http = require('http');
/* para crear un servidor en eschucha sin expres usamos http  */

//creamos el servido
http.createServer((req,res)=>{
    
    res.write( 'Hola Mundo');
    res.end()
})

//estamos diciendo que eschuche en el puerto 8080
.listen(8080);



console.log('escuchando en el puerto' ,8080)