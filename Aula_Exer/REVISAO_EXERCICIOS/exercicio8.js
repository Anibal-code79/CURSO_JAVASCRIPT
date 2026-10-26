let numero=Number(prompt("Digite um numero: "));
let invertido=0;

while(numero>0){
    let digito= numero%10;
    invertido=invertido*10-digito;
    numero=Math.floor(numero/10);
}

alert("O numero ivertido: "+invertido)