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
    const devs = JSON.parse(fs.readFileSync('devs.json')); 
    const devToDelete = devs.find(dev => dev.id === Number(id));
    
    if (!devToDelete) {
        throw new Error("Desenvolvedor não encontrado");
    }

    const filteredDevs = devs.filter(dev => dev.id !== Number(id));
    fs.writeFileSync('devs.json', JSON.stringify(filteredDevs, null, 2)); // Indente o JSON para melhor legibilidade
}

const path = require('path');

const devsFilePath = path.join(__dirname, '../devs.json');

// Função para ler dados do arquivo
function readDevsFromFile() {
    const data = fs.readFileSync(devsFilePath, 'utf8');
    return JSON.parse(data);
}

// Função para salvar dados no arquivo
function writeDevsToFile(devs) {
    fs.writeFileSync(devsFilePath, JSON.stringify(devs, null, 2), 'utf8');
}

// Função para atualizar o desenvolvedor
function updateDev(updatedDev, id) {
    const devs = readDevsFromFile(); // Lê os dados do arquivo
    const index = devs.findIndex(dev => dev.id === parseInt(id)); // Encontra o índice do desenvolvedor

    if (index === -1) {
        throw new Error('Desenvolvedor não encontrado');
    }

    // Atualiza o desenvolvedor com os novos dados
    devs[index] = { ...devs[index], ...updatedDev };
    
    writeDevsToFile(devs); // Salva os dados atualizados no arquivo
}

module.exports = {
    updateDev,
    // outras funções
};


module.exports = {
    getAllDevs,
    getDevById,
    insertDev,
    updateDev,
    deleteDevById
};