const mysql = require("mysql2");

const pool = mysql.createPool({

    host: 'localhost',  // ou o IP do servidor de banco de dados
    user: 'root',       // o nome de usuário do MySQL (root por padrão)
    password: '', // a senha do MySQL
    database: 'crud_db' // o nome do banco de dados
});


// Exporta a conexão para uso em outras partes do aplicativo
module.exports = pool.promise();