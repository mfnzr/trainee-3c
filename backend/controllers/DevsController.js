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
        const dev = getDevById(id);
        res.send(dev);
    } catch (error) {
        res.status(500)
        res.send(error.message);
    }
}

function postDevs(req, res) {
    try {
        const newDev = req.body;
        insertDev(newDev);
        res.status(201)
        res.send("Dev Cadastrado com Sucesso!");
    } catch (error) {
        res.status(500)
        res.send(error.message);
    }
}

function patchDev(req, res){
    try {
        const id = req.params.id;
        const body = req.body;
        updateDev(body, id)
        res.send("Dev Atualizado com Sucesso!");

    }catch(error){
        res.status(500)
        res.send(error.message);
    }
} 

function deleteDev(req, res) {
    try {
        const id = req.params.id;
        deleteDevById(id)
        deleteDev(body, id)
        res.send("Dev deletado com sucesso")
    } catch {
        res.status(500)
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