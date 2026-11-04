const BASE_URL = "http://localhost:3000";

 async function listarUsuarios() {
    const resposta = await fetch(`${BASE_URL}/usuario/listar`);

    console.log(resposta);
 }

 listarUsuarios();