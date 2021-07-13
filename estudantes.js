const Aluno = require('./Aluno');

let a1 = new Aluno("Paulo Dehon", 2, 7, 8, 9);      // aprovado
let a2 = new Aluno("João da Silva", 4, 5, 6, 7);    // reprovado por faltas
let a3 = new Aluno("Pedro Rocha", 5, 7, 8, 9);      // aprovado por média 10% acima
let a4 = new Aluno("Marcos Castro", 5, 6, 7, 8);    // reprovado por faltas no limite
let a5 = new Aluno("Maria Costa", 6, 9, 9, 10);     // reprovado por faltas
let a6 = new Aluno("Carla Pereira", 8, 5, 5, 10);   // reprovado por média e por faltas

module.exports = [a1, a2, a3, a4, a5, a6];