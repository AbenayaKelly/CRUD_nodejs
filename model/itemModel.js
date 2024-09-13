 const db = require("../db");

 const criar = async (name)=>{
    const [result] = await db.execute("INSERT INTO items (name) VALUES(?)", [name]);
     return { id: result.insertId, name }; // O id gerado automaticamente é retornado aqui
   
};

const buscar = async () => {
const [items] = await db.execute("SELECT *FROM items");
 return items;
}

const atualizar = async (id, name) =>{
    const [result] = await  db.execute(`UPDATE items SET name = ? WHERE id = ?`, [name, id])
    if( result.affectedRows === 0) return null;
    return {id, name};
}
 const deletar = async (id) =>{

    const [result] = await db.execute(`DELETE FROM items WHERE id = ?`, [id])
    return result.affectedRows > 0;
 }
 module.exports ={criar, buscar, atualizar, deletar}