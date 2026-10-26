let idades=Array(5);
for(let i=0; i<idades.length; i++){
    idades[i]=Number(prompt(`Digite o numero ${i + 1}`));
}
let maiores=0;
let menores=0;
for(let j=0;j<idades.length;j++){
    if(idades[j]>maiores){
        maiores++
    }
    if(idades[j]<menores){
        menores++
    }
}
console.log("Os numeros maiores sao ", maiores);
console.log("Os numeros menores sao ", menores);