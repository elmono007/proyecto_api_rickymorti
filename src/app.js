const express = require('express');
const path = require('path');
const morgan = require('morgan');
const dotenv = require("dotenv").config();
const fetch = require('node-fetch');

//Luego del Modulo Express, asignamos el objeto Express
// que encapsula toda la funcionalidad de Express
const app = express();

// Seteamos la ruta de los archivos estáticos en la carpeta Public
const publicPath = path.resolve(__dirname, '../public/');
app.use( express.static(publicPath) );

//Seteamos el sistema de ruteo
const routerMain = require('./routes/main');

//Variable que contiene el path de las rutas
app.use(routerMain);

//Seteamos el template engine, le indicamos a Express con que motor de plantillas vamos a trabajar.
//Por default toma la carpeta Views, pero si es otra, debemos pasarle la ruta absoluta de esa carpeta.
//1er param = View Engine
//2do param = Motor de Plantillas a usar - EJS, PUG, Mustache...
app.set("view engine", "ejs");


// Levantamos el servidor en el puerto
//Tomamos los valores del archivo .env
let PORT
process.env.STATUS === 'production' 
    ? (PORT = process.env.PROD_PORT) 
    : (PORT = process.env.DEV_PORT);

app.listen(PORT, () => console.log(`Servidor Levantado en ${PORT}`));


