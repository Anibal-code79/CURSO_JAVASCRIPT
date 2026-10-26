const alunos = [
    { nome: 'Ana', testes: [12, 14, 15] },   
    { nome: 'Carlos', testes: [8, 9, 10] },  
    { nome: 'Beatriz', testes: [16, 18, 17] }, 
    { nome: 'Pedro', testes: [10, 11, 10] },  
    { nome: 'Mariana', testes: [14, 15, 13] } 
];

const aprovados = [];
for (let i = 0; i < alunos.length; i++) {
    const aluno = alunos[i];
    let somaNotas = 0;
    for (let j = 0; j < aluno.testes.length; j++) {
        somaNotas += aluno.testes[j];
    }

    const media = somaNotas / aluno.testes.length;
    
    if (media >= 10) {
        aprovados.push({
            nome: aluno.nome,
            media: media
        });
    }
}
aprovados.sort((a, b) => b.media - a.media);

console.log("ALUNOS APROVADOS (ORDENADOS POR MÉDIA)");
for (let i = 0; i < aprovados.length; i++) {
    console.log(`${i + 1}º - ${aprovados[i].nome} | Média: ${aprovados[i].media.toFixed(2)}`);
}
