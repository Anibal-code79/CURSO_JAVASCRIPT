let numeros=Array(5);
for(let i=0;i<numeros.length; i++){
    numeros[i]=Number(prompt("Digite numeros para array: "));
}
numeros.forEach(function(numero){
    if(numero>10){
        alert(numero);
    }
})