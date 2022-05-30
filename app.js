require('dotenv').config(); // el paquete dotenv permite trabajar con variables de entorno del archvio en la raiz
//llamado .env
const express = require('express')
const app = express()
const port = process.env.PORT; //ESTAMOS USANDO el archivo .env para dar el puerto con el pakage dotenv , ver archivo .env
//usar hbs
const hbs = require('hbs');

/*Sobre parciales de handlebars 
los parciales permiter renderizar etiquetas como header hacia la vista sin la necesidad 
de tener que hacer en cada pagina
*/


//las carpetas publicas ttienen prioridad por sobre las rutas
//utilizar hbs "habdelbars para entenderse es como mvc"
/* */
app.set('view engine', 'hbs');
//handlebars estamos invocando parciales 
hbs.registerPartials(__dirname + '/views/partials',  (err)=> {
});


//Para servir contenido estatico usar middleware
app.use(express.static('public'));

//renderisando a una vista desde controlador
/*Fijarse que haora gracias a hbs lo estamos conviertendo en controlador mvc */
app.get('/',  (req, res)=> {
  res.render('home',{
      nombre: 'Felipe',
      titulo: 'Curso de node'
  });

});

app.get('/hola-mundo',  (req, res)=>{
    res.send('Hola mundo en su respectiva ruta')
  
  });


app.get('/generic',  (req, res)=>{
    res.render('generic',{
        nombre: 'Felipe',
        titulo: 'Curso de node'
    });
  
  });

  app.get('/elements',  (req, res)=>{
    res.render('elements',{
        nombre: 'Felipe',
        titulo: 'Curso de node'
    });
  
  });


app.get('*', (req,res)=>{
    res.sendFile(__dirname + '/public/404.html')
});

app.listen(port ,()=>{
    console.log(`Corriendo en el puerto ${port}`)
});