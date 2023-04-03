//const express = require('express');   //Version de node.js de la linea 3

import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';


const app = express();




// Conectar la base de datos
db.authenticate()
    .then( () => console.log('Base de datos conectada') )
    .catch( error => console.log(error));


// Definir puerto
const port = process.env.PORT || 3000;

/* USO DE GET => Lo pasamos a la carpeta routes
app.get('/', (req, res) =>{//req- lo que el usurio envia : res: lo que express responde
    //res.render();
    //res.json({
    //    id:1
    //})
    res.send('Wakanda for ever');
})

app.get('/Inicio', (req, res) =>{
    res.send('Inicio');
})
*/

// Habilitar PUG
app.set('view engine', 'pug');



// Obtener el año actual
app.use( (req, res, next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombresitio = "Agencia de Viajes";
    next();
});


// Habilitar express.json para agregar body parser para leer los datos del formulario
app.use(express.urlencoded({ extended: true }));



// Definir la carpeta publica
app.use(express.static('public'));

// Agregar Router
app.use('/', router);

app.listen(port, () => {
    console.log(`El Servidor esta funcionando en el puerto ${port}`)
})