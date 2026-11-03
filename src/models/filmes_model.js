const con = require('../config/db.js');

const cadastrar =  async ({ nome, idioma, quantidade}) => {
   const [result] = await con.query(
    "INSERT INTO filmes VALUES (DEFAULT, ?, ?, ?);", 
    [nome, idioma, quantidade]
   );

   return{
    id: result.insertId,
    nome: nome,
    idioma: idioma,
    quantidade: quantidade
   };
};

const listar = async (req, res) => {
    const [result] = await con.query("SELECT * FROM filmes;");

    return result;
};

const buscar = async (id) => {
    const [result] = await con.query("SELECT * FROM filmes WHERE id = ?;", [id]);
    return result;
};

const excluir = async (id) => {
    const [result] = await con.query("DELETE FROM filmes WHERE id = ?;", [id]);
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