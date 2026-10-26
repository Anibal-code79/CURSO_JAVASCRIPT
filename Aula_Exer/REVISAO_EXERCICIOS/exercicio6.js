let fatorial=1;
let numero=Number(prompt("Digite um numero e veja o calculo do seu fatorial: "));
for(let i=1; i<numero; i++){
    fatorial*=i;
}
alert("O faatorial deste numero e: "+fatorial)