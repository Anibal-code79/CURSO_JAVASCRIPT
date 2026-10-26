let estudantes = [
    {
        nome: "Ana",
        testes: [15, 12, 14]
    },
    {
        nome: "João",
        testes: [8, 10, 9]
    },
    {
        nome: "Maria",
        testes: [18, 16, 17]
    },
    {
        nome: "Pedro",
        testes: [10, 12, 11]
    }
];


// 1. Calcular a média de cada estudante

for (let i = 0; i < estudantes.length; i++) {

    let soma = 0;

    for (let j = 0; j < estudantes[i].testes.length; j++) {
        soma += estudantes[i].testes[j];
    }

    estudantes[i].media =
        soma / estudantes[i].testes.length;
}


// 2. Criar array apenas com aprovados

let aprovados = [];

for (let i = 0; i < estudantes.length; i++) {

    if (estudantes[i].media >= 10) {
        aprovados.push(estudantes[i]);
    }
}


// 3. Ordenar da maior média para a menor

aprovados.sort(function(a, b) {
    return b.media - a.media;
});


// 4. Mostrar os aprovados

console.log("=== ALUNOS APROVADOS ===");

for (let i = 0; i < aprovados.length; i++) {

    console.log(
        aprovados[i].nome,
        "Média:",
        aprovados[i].media.toFixed(2)
    );
}