function Aluno(nome, quantidadeDeFaltas, ...notas){
    this.nome = String(nome);
    this.quantidadeDeFaltas = Number.parseInt(quantidadeDeFaltas);
    this.notas = notas;
    this.calcularMedia = function(){
        return notas.reduce((acumulador, nota) => acumulador += nota) / notas.length;
    }
    this.faltas = function(){
        this.quantidadeDeFaltas += 1;
    }
}

module.exports = Aluno;