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

function updateDev(update, id) {
    let currentDevs = JSON.parse(fs.readFileSync('devs.json')); //let para poder modificar a lista

    const indexUpdate = currentDevs.findIndex(dev => dev.id === Number(id)) //procura pelo indice do item item da lista selecionada pelo id
    if (indexUpdate === -1) { //verificação de teste
        throw new Error('Desenvolvedor não encontrado');
    }
    const contentUpdated = {...currentDevs[indexUpdate], ...update} //... desmonta o objeto para adicionar as modificações e manter os demais que não foram modificados
    currentDevs[indexUpdate] = contentUpdated
    fs.writeFileSync('devs.json', JSON.stringify(currentDevs)); //escreve o arquivo com as modificações e transforma em string
}

function deleteDevById(id) {
    const devs = json.parse(fs.readfileSync('devs.json')); 

    const FilteredDev = devs.filter(dev => dev.id !== Number(id))[0];
    fs.writeFileSync('devs.json', JSON.stringify(FilteredDev))
}

module.exports = {
    getAllDevs,
    getDevById,
    insertDev,
    updateDev,
    deleteDevById
};