let numero=Array(5);
for(let i=0; i<numero.length;i++){
    numero[i]=Number(prompt("Digite um numero para a array: "));
}
let maior=0;
let menor=0;
for(let j=0; j<numero.length;j++){
    if(numero[j]>maior){
        maior=numero[j];
    }
    if(numero[j]<menor){
        menor=numero[j];
    }
}
alert("O numero maior: "+maior);
alert("O numero menor: "+menor);
