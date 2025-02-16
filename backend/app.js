const express = require('express');
const devsRouter = require('./routes/DevsRouter');

const app = express();

app.use('/devs', devsRouter);


const port = 8000;

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})