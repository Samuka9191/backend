const express = require("express");

const routes = express.Router();

const { 
    cadastrar, 
    listar, 
    buscar, 
    excluir  
} = require("../controllers/filmes_controller.js");

routes.post("/cadastrar", cadastrar);
routes.get("/listar", listar);
routes.get("/buscar/:id", buscar);
routes.delete("/excluir/:id", excluir);


module.exports = routes;