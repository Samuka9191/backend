const express = require("express");

const routes = express.Router();

/*
const usuarioController = require("../controllers/usuario_controller.js");

routes.post("/cadastrar", usuarioController.cadastrar);
routes.get("/listar", usuarioControllaer.listar);
*/

const { 
    cadastrar, 
    listar, 
    buscar, 
    excluir  
} = require("../controllers/usuario_controller.js");

routes.post("/cadastrar", cadastrar);
routes.get("/listar", listar);
routes.get("/buscar/:id", buscar);
routes.delete("/excluir/:id", excluir);


module.exports = routes;