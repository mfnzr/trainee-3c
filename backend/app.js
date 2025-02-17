const express = require('express'); //framework de aplicações web (facilita a criação de APIs)
const cors = require('cors');

const devsRouter = require('./routes/DevsRouter'); //recebe as rotas
const levelsRouter = require('./routes/LevelsRouter');

const app = express(); //inicializa a aplicação
app.use(express.json()); //permite que o express entenda os dados enviados pela requisição
app.use(cors({ origin: '*', }));

app.use('/devs', devsRouter);
app.use('/levels', levelsRouter);

app.get('/levels', async (req, res) => {
    try {
        const levels = await getLevelsFromDatabase(); // função que busca os níveis
        res.json(levels);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar níveis' });
    }

});

const port = 8000;

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})