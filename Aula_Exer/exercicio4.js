let numeros=Array(3);
for(let i=0;i<numeros.length;i++){
    numeros[i]=Number(prompt(`Digite o numero ${i+1}`));
}

let maior=numeros[0];
i=1;
while(i<numeros.length){
    if(numeros[i]> maior){
        maior= numeros[i];
    }
    i++
}
alert("O valor maior e "+ maior);