# Projeto Simples de CRUD com Node.js

Este é um projeto simples de back-end usando Node.js, Express e MySQL para gerenciar operações básicas de CRUD.

## Instruções de Instalação

Siga os passos abaixo para configurar e executar o projeto:

### 1. Inicializar o Projeto

Execute o comando abaixo para criar um novo arquivo `package.json`, que armazenará as dependências do projeto.

``` bash
npm init -y
```

### 2. Instalar Dependências
Instale as dependências necessárias: express, mysql2 e nodemon.
```bash
npm install express mysql2 nodemon
```

### 3. Criar o Banco de Dados
Crie o banco de dados e a tabela no MySQL.
```sql
CREATE DATABASE crud_db;

USE crud_db;

CREATE TABLE items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);
```

### 4. Executar o Servidor
Agora, você pode iniciar o servidor em modo de desenvolvimento usando o nodemon com o comando:
```bash
nodemon run dev
```
