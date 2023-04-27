const express = require('express');
const path = require('path');

//Definimos la variable router quien nos va a rutear los pedidos al controlados
const router = express.Router();         

const { Router } = require('express');

//Requerimos los controladores
const mainController = require('../controllers/mainController');

// ----------------------- Rutas GET // -----------------------
router.get('/', mainController.home);
router.get('/page/:id', mainController.page);
router.get('/details/:id', mainController.details)

//Devolvemos el objeto router con todas las rutas y donde encontrarlas dentro del controlador.
module.exports = router;