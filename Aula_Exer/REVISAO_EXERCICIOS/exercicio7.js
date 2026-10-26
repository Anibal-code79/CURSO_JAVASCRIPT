let quatiPrimos=0;
for(let numero=2; numero<=100;numero++){
    let primos=true;
    for(let divisor=2; divisor<numero;divisor++){
        if(numero%divisor===0){
            primos=false
        }
    }
    if(primos){
        quatiPrimos+=1
    }
}
 alert("Numeros primos sao: "+quatiPrimos)