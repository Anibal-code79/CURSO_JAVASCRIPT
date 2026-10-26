let nomes = ["Ana", "João", "António", "Maria", "Alberto"];
let contar=0;
for(let i=0; i<nomes.length;i++){
    if(nomes[i].charAt(0).toLocaleUpperCase()==="A"){
        contar+=1
    }
}