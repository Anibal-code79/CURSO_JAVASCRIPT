const idades = [];

for (let i = 0; i < 50; i++) {
    let idadeAleatoria = Math.floor(Math.random() * 16) + 15;
    idades.push(idadeAleatoria);
}
let soma = 0;
let idadeMaisAlta = idades[0]; 
let idadeMaisBaixa = idades[0]; 
let menoresDeIdade = 0;

for (let i = 0; i < idades.length; i++) {
    let idadeAtual = idades[i];

    soma += idadeAtual;
    if (idadeAtual > idadeMaisAlta) {
        idadeMaisAlta = idadeAtual;
    }
    if (idadeAtual < idadeMaisBaixa) {
        idadeMaisBaixa = idadeAtual;
    }
    if (idadeAtual < 18) {
        menoresDeIdade++;
    }
}

const mediaIdades = soma / idades.length;

console.log("Idades geradas:", idades);
console.log(`Média de idades: ${mediaIdades.toFixed(1)} anos`);
console.log(`Idade mais alta: ${idadeMaisAlta} anos`);
console.log(`Idade mais baixa: ${idadeMaisBaixa} anos`);
console.log(`Quantidade de menores de idade: ${menoresDeIdade}`);
