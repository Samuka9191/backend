const express = require("express");

const routes = express.Router();

/*
const usuarioController = require("../controllers/usuario_controller.js");

routes.post("/cadastrar", usuarioController.cadastrar);
*/

const { cadastrar } = require("../controllers/usuario_controller.js");

routes.post("/cadastrar", cadastrar);

module.exports = routes;