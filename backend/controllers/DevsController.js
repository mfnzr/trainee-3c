const { getAllDevs, getDevById, insertDev, updateDev, deleteDevById } = require('../Services/DevsServices.js');

function getDevs(req, res) {
    try {
        const devs = getAllDevs();
        res.send(devs);
    } catch (error) {
        res.status(500)
        res.send(error.message);
    }
};

function getDev(req, res) {
    try {
        const id = req.params.id

        //verificação se o id é um numero
        if (id && Number(id)) {
            const dev = getDevById(id);
            res.send(dev);
        } else {
            res.status(422)
            res.send('Id inválido')
        }

    } catch (error) {
        res.status(500)
        res.send(error.message);
    }
}

function postDevs(req, res) {
    try {
        const newDev = req.body;

        //verificação se todos os campos estão preenchidos
        if (req.body.name && req.body.age && req.body.gender && req.body.hobby && req.body.level) {
            insertDev(newDev);
            res.status(201)
            res.send('Dev Cadastrado com Sucesso!');
        } else {
            res.status(422)
            res.send('Todos os campos devem ser preenchidos')
        }
    } catch (error) {
        res.status(500)
        res.send(error.message);
    }
}

function patchDev(req, res) {
    try {
        const id = req.params.id;

        if (id && Number(id)) {
            const body = req.body;
            updateDev(body, id);
            res.status(200).json({ message: "Dev Atualizado com Sucesso!" });
        } else {
            res.status(422).json({ error: "Id inválido" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

function deleteDev(req, res) {
    try {
        const id = req.params.id;

        if (id && Number(id)) {
            const dev = getDevById(id);

            if (dev) {
                deleteDevById(id); 
                res.send("Dev deletado com sucesso");
            } else {
                res.status(404);  
                res.send('Desenvolvedor não encontrado');
            }
        } else {
            res.status(422);
            res.send('Id inválido');
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

module.exports = {
    getDevs,
    getDev,
    postDevs,
    patchDev,
    deleteDev
};