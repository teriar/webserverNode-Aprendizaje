const http = require('http');
/* para crear un servidor en eschucha sin expres usamos http  */

//creamos el servido
http.createServer((req,res)=>{
    
    

    //res.writeHead(200,{'Content-Type':'application/json'})
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    res.writeHead(200,{'Content-Type':'application/csv'})
    res.write( 'id, nombre\n');
    res.write( '1, Fernando\n');
    res.write( '2, Maria \n');
    res.write( '3, Juan\n');
    res.write( '4, Pedro\n');
    // const persona = {
    //     id:1,
    //     nombre: 'Fernando'
    // }





    //estamos escribiendo una respuesta
    // res.write( JSON.stringify(persona));

   //finalizamos la respuesta y la enviamos
   res.end()
})

//estamos diciendo que eschuche en el puerto 8080
.listen(8080);



console.log('escuchando en el puerto' ,8080)