let estudante={
    nome: "Anibal",
    teste1: 17,
    teste2: 19,
    calcularMedia: function(){
        media=this.teste1+this.teste2/2;
    }
}

console.log(estudante);

let nome= document.getElementById("nome").value;
let idade= document.getElementById("idade").value;
let butao= document.getElementById("btn");
let rs= document.getElementsByClassName("rs");
rs.innerHtml="${nome} tem ${idade}";