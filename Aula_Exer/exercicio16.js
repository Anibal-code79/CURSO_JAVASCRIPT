let nomes=['Ana', 'Carlos', 'António', 'Beatriz', 'amanda', 'Pedro'];
let contar=0;
for(let i=0;i<nomes.length;i++){
    if(nomes[i].charAt(0).toLocaleUpperCase()==="A"){
        contar++
    }
}
console.log(contar);