let numeros=Array(50);
for(let i=0; i<numeros.length;i++){
    numeros[i]=Math.floor(Math.random()*31)+10;
}
let soma=0;
let idadeAlta=0;
let idadeBaixa=0;
let menores=0;
for(let i=0;i<numeros.length;i++){
    soma+=numeros[i];
    if(numeros[i]>idadeAlta){
        idadeAlta=numeros[i];
        
    }
    if(numeros[i]<idadeBaixa){
        idadeBaixa=numeros[i];
    }
    if(numeros[i]<18){
        menores+=1
    }
}
let media=soma/numeros.length;
