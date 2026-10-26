let numeros= Array(50);
for(let i=0; i<numeros.length; i++){
    numeros[i]=Number(prompt(`Digite o numero ${i+1}: `));
}
let contador=0;
let soma=0;

for(let i=0; i<numeros.length; i++){
    if(i%2===0){
        soma+=numeros[i];
        contador+=1;
    }
}
let mediaPares = soma/ contador;

