let cellshop=[
    {marca:"Samsung", ano:2026, preco:13.000},
    {marca:"Samsung", ano:2017, preco:10.000},
    {marca:"Iphone", ano:2024, preco:33.000},
    {marca:"Infix", ano:2022, preco:19.000},
    {marca:"Nokia", ano:2011, preco:8.000},
];
for(let cell of cellshop){
    console.log(cell);
}
let samsung=cellshop.filter(cell=>cell.marca==="Samsung" && cell.ano===2014);
console.log(samsung);

let somaPrecos = 0;
for (let i = 0; i < celulares.length; i++) {
    somaPrecos += celulares[i].preco;
}
const precoMedio = somaPrecos / celulares.length;
console.log(`Preço Médio Geral: ${precoMedio.toFixed(2)}`);

for (let i = 0; i < celulares.length; i++) {
    if (celulares[i].preco < precoMedio) {
        console.log(`${celulares[i].marca} (${celulares[i].ano}) - Preço: ${celulares[i].preco}`);
    }
}