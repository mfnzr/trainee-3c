const { getAllLevels, deleteLevelById } = require('../Services/LevelServices.js');

function getLevels(req, res) {
    console.log('Rota getLevels chamada'); // Verifique se a rota está sendo chamada

    try {
        const level = req.query.level
        const devs = getAllLevels();
        const filteredDev = level ? devs.filter(dev => dev.level && dev.level.name === level) : devs;
        res.json(filteredDev);

    } catch (error) {
        res.status(500)
        res.send(error.message);
    }
};

function postLevels(req, res) {
    try {
        const id = req.params.id
            insertDev(newDev);
            res.status(201)
            res.send('Nível inserido com Sucesso!');
    } catch (error) {
        res.status(500)
        res.send(error.message);
    }
}

function deleteLevel(req, res) {
    try {
        const id = req.params.id;

        if (id && Number(id)) {
            deleteLevelById(id)
            res.send("Nível deletado com sucesso")
        } else {
            res.status(422)
            res.send('Id inválido')
        }
    } catch (error) {
        res.status(500)
        res.send(error.message);
    }
}

module.exports = {
    getLevels,
    postLevels,
    deleteLevel
};