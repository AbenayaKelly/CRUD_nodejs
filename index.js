const express = require("express");
const app = express()
const itemRoutes = require("./routers/itemRoutes")

// Middleware para processar dados do corpo da requisição
app.use(express.json()) // Permite processar JSON
app.use(express.urlencoded({ extended: true })); // Permite processar dados codificados como URL

app.use(itemRoutes);

// Definir porta padrão
const PORT = process.env.PORT || 3000;


app.listen(PORT, ()=>{
    console.log(`O servidor esta rodando na porta ${PORT}`)
})