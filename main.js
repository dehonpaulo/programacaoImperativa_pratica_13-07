const Aluno = require('./Aluno');
const Curso = require('./Curso');
const estudantes = require('./estudantes');

let a1 = new Aluno("Ayrton da Nóbrega", 1, 5, 5, 7);    // reprovado por nota
let a2 = new Aluno("Cesar Augusto", 2, 5, 6, 10);       // aprovado
let a3 = new Aluno("Frederico Waslovsk", 5, 7, 7, 7);   // reprovado por faltas no limite
let a4 = new Aluno("Caio Araujo", 5, 7, 8, 9);          // aprovado por média 10% acima
let a5 = new Aluno("Adalberto Gomes", 7, 5, 6, 7);      // reprovado por média e por faltas
let a6 = new Aluno("Everton Barbosa", 8, 10, 10, 10);   // reprovado por faltas

let c1 = new Curso("JavaScript Básico", 7, 5, a1, a2, a3, a4);

// testando os métodos do curso
c1.adicionarAluno(a5, a6);
console.log(c1.aprovacaoAluno(a4));
console.log(c1.aprovacaoListaDeAlunos());

// alterando a lista de estudantes do curso
c1.listaDeEstudantes = estudantes;

// testando os métodos do curso após a alteração da lista de estudantes
a4.faltas();    // a4 passa do limite de faltas e torna-se reprovado

c1.adicionarAluno(a4, a5);
console.log(c1.aprovacaoAluno(estudantes[0]));
console.log(c1.aprovacaoListaDeAlunos());