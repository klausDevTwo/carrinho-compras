let totalGeral = 0
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').innerHTML = 'R$ 0';

function adicionar(){
    //recupera valores nome,quantidade e preço
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade');
    //soma o preço da quantidade de items
    preco = quantidade.value * valorUnitario;
    console.log(preco)
    //adiciona items ao carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + ` 
        <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade.value}x</span> ${nomeProduto} <span class="texto-azul">R$${valorUnitario}</span>
        </section>`
    //atualiza valor total
    totalGeral += preco; 
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
}
function limpar(){
    totalGeral = 0
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$ 0';

}