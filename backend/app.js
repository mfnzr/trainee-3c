const express = require('express'); //framework de aplicações web (facilita a criação de APIs)
const devsRouter = require('./routes/DevsRouter'); //recebe as rotas
const app = express(); //inicializa a aplicação

app.use(express.json()); //permite que o express entenda os dados enviados pela requisição
app.use('/devs', devsRouter);


const port = 8000;

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})