let numeros=[12,14,16,15,25,14];
let numeroEncotrado=Number(prompt("Digite o numero que deseja encontrar: "));
let encotrado=false;
for(let i=0;i<numeros.length;i++){
    if(numeros[i]===numeroEncotrado){
        encotrado=true;
    }
}
if(encotrado){
    alert("Numero encotrado");
}else{
    alert("Numero nao encontrado");
}