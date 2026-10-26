let numeros=Array(5);
let quantidade=0
for(let i=0; i<numeros.length;i++){
    numeros[i]=Number(prompt("Digite um numero para a array: "));
}
let soma=0;
for(let j=0;j<numeros.length;j++){
    if(j%2===0){
        soma+=numeros[j]
        quantidade+=1
    }
} 
let media=soma/quantidade;
alert("Media de notas pares: "+media);