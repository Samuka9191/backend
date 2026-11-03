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

const listar = async (req, res) => {
    const [result] = await con.query("SELECT * FROM usuarios;");

    return result;
};

const buscar = async (id) => {
    const [result] = await con.query("SELECT * FROM usuarios WHERE id = ?;", [id]);
    return result;
};

const excluir = async (id) => {
    const [result] = await con.query("DELETE FROM usuarios WHERE id = ?;", [id]);
    return result.affectedRows;
};

const atualizar = async () => {



}

const alterar = async (req, res) => {

}

module.exports = {
    cadastrar,
    listar,
    buscar,
    excluir,
    atualizar,
    alterar
}