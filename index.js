const fs = require('fs');


const dadosBrutos = fs.readFileSync('dados.json', 'utf-8');
const dados = JSON.parse(dadosBrutos);


console.log(dados.nome); // Sofia
console.log(dados.hobbies[1]); // nadar
