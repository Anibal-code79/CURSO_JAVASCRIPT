let celulares = [
    {
        marca: "Samsung",
        ano: 2014,
        preco: 12000
    },
    {
        marca: "iPhone",
        ano: 2015,
        preco: 25000
    },
    {
        marca: "Tecno",
        ano: 2014,
        preco: 8000
    }
];

celulares.forEach(function(celular){
    console.log(celular)
})

celulares.forEach(function(celular){
    if(celular.marca==="samsung" && celular.ano===2014){
        console.log(celular)
    }
})

let soma=0;
for(let i=0; i<celulares.length; i++){
    soma+= celulares[i].preco;
}
let media= soma/celulares.length;