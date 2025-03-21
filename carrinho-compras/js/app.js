let precoTotal = 0;
let listaDoProduto = document.getElementById("lista-produtos").innerHTML = '';
let campoTotal = document.getElementById('valor-total').innerHTML = 'R$ 0'
//é uma boa prática dividir oque tem que ser feito em etapas, para não acabar pulando nada
function adicionar(){
    let itemSelecionado = document.getElementById("produto").value; 
    let item = itemSelecionado.split("-")[0];
    let preco = itemSelecionado.split("R$")[1];
    let quantidade = document.getElementById("quantidade").value;
    let total = preco * quantidade;
    let listaDoProduto = document.getElementById("lista-produtos");
    listaDoProduto.innerHTML = listaDoProduto.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${item} <span class="texto-azul">R$${preco}</span>
        </section>`;
    
    precoTotal = precoTotal + total;
    let campoTotal = document.getElementById('valor-total')
    campoTotal.innerHTML = `R$${precoTotal}`
    quantidade = document.getElementById("quantidade").value = 0;

}

function limpar() {
    precoTotal = 0;
    listaDoProduto = document.getElementById("lista-produtos").innerHTML = '';
    campoTotal = document.getElementById('valor-total').innerHTML = 'R$ 0'
}
