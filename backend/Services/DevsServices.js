const fs = require('fs'); //ler o json - (fs permite interagir com o sistema como ler, escrever, atualizar, deletar, etc)

function getAllDevs() {
    return JSON.parse(fs.readFileSync('devs.json'));
}

function getDevById(id) {
    const devs = JSON.parse(fs.readFileSync('devs.json')); //transforma o json em objeto de string (parse - transforma em objeto; readFileSync - retorna o conteúdo como string)  

    const FilteredDev = devs.filter(dev => dev.id === Number(id))[0];
    return FilteredDev;
}

function insertDev(newDev) {
    const devs = JSON.parse(fs.readFileSync('devs.json'));
    const newDevList = [...devs, newDev];
    fs.writeFileSync('devs.json', JSON.stringify(newDevList)); //transforma em string a nova lista de livros
}

module.exports = {
    getAllDevs,
    getDevById,
    insertDev
};