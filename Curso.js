function Curso(nomeDoCurso, notaDeAprovacao, faltasMaximas, ...listaDeEstudantes){
    this.nomeDoCurso = String(nomeDoCurso);
    this.notaDeAprovacao = Number.parseFloat(notaDeAprovacao);
    this.faltasMaximas = Number.parseInt(faltasMaximas);
    this.listaDeEstudantes = listaDeEstudantes;
    
    this.adicionarAluno = function(...alunos){
        for(let i = 0; i < alunos.length; i++){
            this.listaDeEstudantes.push(alunos[i]);        
        }
    }
    this.aprovacaoAluno = function(aluno){
        if(aluno.quantidadeDeFaltas < this.faltasMaximas && aluno.calcularMedia() >= this.notaDeAprovacao){
            return true;
        } else if(aluno.quantidadeDeFaltas == this.faltasMaximas && aluno.calcularMedia() >= this.notaDeAprovacao * 1.1){
            return true;
        } else{
            return false;
        }
    }
    this.aprovacaoListaDeAlunos = function(){
        let resultados = [];
        for(let i = 0; i < this.listaDeEstudantes.length; i++){
            resultados.push(this.aprovacaoAluno(this.listaDeEstudantes[i]));
        }
        return resultados;
    }
}

module.exports = Curso;