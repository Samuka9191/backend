const con = require('../config/db.js');

const cadastrar =  async ({ nome, cpf, email, senha}) => {
   const [result] = await con.query(
    "INSERT INTO usuarios VALUES (DEFAULT, ?, ?, ?, ?);", 
    [nome, cpf, email, senha]
   );

   return{
    id: result.insertId,
    nome: nome,
    cpf: cpf,
    email: email
    
   };
};

const listar = (req, res) => {

}

const buscar = (req, res) =>{

}

const excluir = (req, res) => {

}

const atualizar = (req, res) => {

}

const alterar = (req, res) => {

}

module.exports = {
    cadastrar,
    listar,
    buscar,
    excluir,
    atualizar,
    alterar
}