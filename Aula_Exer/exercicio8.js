let numero = Number(prompt("Digite o seu numero e veja o seu inverso"))
let numeroInvertido = 0;

while (numero > 0) {
    let ultimoDigito = numero % 10;                  
    numeroInvertido = (numeroInvertido * 10) + ultimoDigito; 
    numero = Math.floor(numero / 10);        
}
console.log(`O número invertido é: ${numeroInvertido}`); 

