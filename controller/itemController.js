const itemModel = require ("../model/itemModel")

const createItem= async (req, res) =>{
    try{
        const {name} = req.body; // pega a chave nome do objeto e armazene na variavel nome

        if (!name){
            return res.status(400).json({message: "O campo nome é obrigatório"});
        }
        const newItem = await itemModel.criar(name);
        res.status(201).json(newItem);
    }catch(error){
        res.status(500).json({massage: "Erro ao criar o item", error});
    }
};
const getItems = async (req, res) =>{
    try {
        const items = await itemModel.buscar();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar itens', error });
    }
};
const updateItem = async (req, res) =>{
    try {
        const { id } = req.params;
        const { name } = req.body;
        if (!name) {
          return res.status(400).json({ message: 'O campo nome é obrigatório' });
        }
          const updatedItem = await itemModel.atualizar(id, name);
          if (!updatedItem) {
            return res.status(404).json({ message: 'Item não encontrado' });
          }
          res.status(200).json(updatedItem);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar item', error });
    }

};
 const deleteItem = async (req, res) =>{
    try {
        const {id} = req.params;
        const success = await itemModel.deletar(id);
        if (!success) {
            return res.status(404).json({ message: 'Item não encontrado' });
          }
          res.status(200).json({ message: 'Item deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar item', error });
    }
 };
 module.exports = { createItem, getItems, updateItem, deleteItem};