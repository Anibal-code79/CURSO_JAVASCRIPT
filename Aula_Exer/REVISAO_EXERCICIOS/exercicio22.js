let n1 = 1;
let n2 = 20;

let pares = [];
let impares = [];

let somaPares = 0;
let somaImpares = 0;


for (let numero = n1; numero <= n2; numero++) {

    if (numero % 2 === 0) {

        pares.push(numero);
        somaPares += numero;

    } else {

        impares.push(numero);
        somaImpares += numero;

    }
}


console.log("Números pares:", pares);
console.log("Números ímpares:", impares);

console.log("Soma dos pares:", somaPares);
console.log("Soma dos ímpares:", somaImpares);