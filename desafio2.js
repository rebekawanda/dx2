function alunos(){
    const alunos = parseInt(document.getElementById("alunos").value);
    const listaAlunos = [];
    var contador = 0;

    while (contador <= alunos){
    var nomeAluno=prompt(`Nome do aluno ${contador + 1}:`);
    var notaAluno=parseFloat(prompt(`Nota do aluno ${contador + 1}:`));
    listaAlunos.push({nome,nota});
    contador++;
}
     var melhoraluno = listaAlunos = [0];
     contador = 1;
   
     while(contador < listaAlunos.length){
       var aluno = listaAlunos[contador];

    if(notaAluno > melhornota){
     melhoraluno = nomeAluno;
    }
    contador++;
    }
    document.getElementById("resultado").textContent = `O melhor aluno é : ${melhoraluno.nome}`;
    
}