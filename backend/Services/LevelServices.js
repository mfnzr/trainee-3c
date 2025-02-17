const fs = require('fs');

function getAllLevels() {
    const levels = JSON.parse(fs.readFileSync('levels.json'));
    return levels
}

function getDevByLevel(levelId) {
    const devs = JSON.parse(fs.readFileSync('devs.json'));
    return devs.filter(dev => dev.level.id === Number(levelId));
}


function deleteLevelById(id) {
    const Levels = JSON.parse(fs.readFileSync('levels.json'));

    const filteredLevel = Levels.filter(level => level.id !== Number(id));
    fs.writeFileSync('levels.json', JSON.stringify(filteredLevel))
}

function insertLevel(newLevel) {
    const levels = JSON.parse(fs.readFileSync('levels.json'));
    const newLevelList = [...Levels, newLevel];
    fs.writeFileSync('levels.json', JSON.stringify(newLevelList)); //transforma em string a nova lista de livros
}

module.exports = {
    getAllLevels,
    getDevByLevel,
    deleteLevelById,
    insertLevel
};