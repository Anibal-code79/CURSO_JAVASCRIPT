let notas=Array(5);
for(let i=0; i<notas.length; i++){
    notas[i]=Number(prompt(`Digite a nota ${i + 1}: `));
}
let soma=notas[0];
let contar_Pares=notas[0];
for(let j=0; j<notas.length;j++){
    if(i%2===0){
        soma+=notas[j];
        contar_Pares++
    }
}
let media = soma/notas.length;
alert(media)