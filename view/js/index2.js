// versão para ser usada com API

const url = 'URL_DO_SEU_ENDPOINT_DE_API'; // Substitua pela URL real do seu endpoint

const itens = [];

// Função para buscar os produtos do banco de dados
async function obterProdutosDoBanco() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao obter produtos do banco de dados:', error);
        return [];
    }
}

// Função para inicializar a loja com produtos do banco de dados
async function inicializarLoja() {
    const containerProdutos = document.getElementById('produtos');
    
    // Obtém os produtos do banco de dados
    const produtosDoBanco = await obterProdutosDoBanco();

    produtosDoBanco.map((val) => {
        containerProdutos.innerHTML += `
            <div class="produto-single">
                <img src="${val.img}"/>
                <p class="legenda">${val.nome}</p>
                <a data-key="${val.id}" href="#">Adicionar ao carrinho</a>
            </div>`;
    });

    // Adiciona eventos de clique aos links de adicionar ao carrinho
    const links = document.querySelectorAll('a[data-key]');
    links.forEach(link => {
        link.addEventListener('click', function () {
            const key = this.getAttribute('data-key');
            itens[key].quantidade++;
            atualizarCarrinho();
            return false;
        });
    });
}

// Restante do seu código permanece inalterado

// Chama a função para inicializar a loja
inicializarLoja();

// Função para atualizar o carrinho
function atualizarCarrinho() {
    const containerCarrinho = document.getElementById('carrinho');
    containerCarrinho.innerHTML = "";

    itens.forEach((val) => {
        if (val.quantidade > 0) {
            containerCarrinho.innerHTML += `
                <div class="info-single-chekout">
                    <p style="float:left;">Produto: ${val.nome}</p>
                    <p style="float:right;">Quantidade: ${val.quantidade}</p>
                    <div style="clear:both;"></div>
                </div>`;
        }
    });
}
