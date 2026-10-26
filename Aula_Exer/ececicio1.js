let nota= Number(prompt("Digite a sua nota e veja o seu resultado"));
if(nota<10){
    alert("Reprovado com " + nota);
}else if (nota>13 && nota<18) {
    alert("Suficiente");
} else if(nota>17 && nota<21){
    alert("Execelente")
} else{
    alert("Nota Invalida");
}