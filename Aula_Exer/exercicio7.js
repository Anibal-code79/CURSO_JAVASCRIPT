let contador=0;
for(let numero=0;numero<=100;numero++){
    if (numero <= 1) continue;
    let divisores = 0;
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            divisores++; 
        }
    }
    if (divisores === 0) {
        contadorPrimos++;
    }
}
