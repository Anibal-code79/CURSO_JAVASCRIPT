let numero1=Number(prompt("Digite o primeiro numero: "));
let numero2=Number(prompt("Digite o segundo numero: "));
let numero3=Number(prompt("Digite o terceiro numero: "));

let maior=0;
if(numero1>numero2 && numero1>numero3){
    maior=numero1;
}else if(numero2>numero1 && numero2>numero3){
    maior=numero2;
}else{
    maior = numero3;
}
alert("O maior numero e: "+maior)
