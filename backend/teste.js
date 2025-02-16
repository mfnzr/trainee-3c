const fs = require("fs");

const dadosAtuais = JSON.parse(fs.readFileSync("devs.json"));
const novoDado = {id: '3', name: 'Maria', age: '25', gender: 'Feminino', date_of_birth: '10/11/2000', hobby: '(11) 99999-9999', level: {id: '1', level: 'Junior'}};

fs.writeFileSync("devs.json", JSON.stringify([...dadosAtuais, novoDado]));

console.log(JSON.parse(fs.readFileSync("devs.json")));