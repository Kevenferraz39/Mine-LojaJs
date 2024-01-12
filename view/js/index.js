const itens = [
    {
        id:0,
        nome: 'Camiseta',
        img: 'img/imagem.jpeg',
        quantidade: 0
    },
    {
        id:1,
        nome: 'Short',
        img: 'img/imagem.jpeg',
        quantidade: 0
    },
    {
        id:2,
        nome: 'Boné',
        img: 'img/imagem.jpeg',
        quantidade: 0
    },
    {
        id:3,
        nome: 'Camiseta 2',
        img: 'img/imagem.jpeg',
        quantidade: 0
    },
    {
        id:4,
        nome: 'Short 2',
        img: 'img/imagem.jpeg',
        quantidade: 0
    },
    {
        id:5,
        nome: 'Boné 2',
        img: 'img/imagem.jpeg',
        quantidade: 0
    },
    {
        id:6,
        nome: 'Camiseta 3',
        img: 'img/imagem.jpeg',
        quantidade: 0
    },
    {
        id:7,
        nome: 'Short3',
        img: 'img/imagem.jpeg',
        quantidade: 0
    },
    {
        id:8,
        nome: 'Boné3',
        img: 'img/imagem.jpeg',
        quantidade: 0
    },
]

 // inicializarLoja = () => {} isso é igual a isso: function inicializarLoja() porem mais moderno 
        
    inicializarLoja = () => {
        var containerProdutos = document.getElementById('produtos')
        itens.map((val) => {
            containerProdutos.innerHTML += `
                <div class="produto-single">
                    <img src="`+val.img+`"/>
                    <p class="legenda">`+val.nome+`</p>
                    <a key="`+val.id+`" href="#">Adicionar ao carrinho</a>
                </div>

            `
        })
    }
    inicializarLoja()
    atualizarCarrinho = () => {
        var containerCarrinho = document.getElementById('carrinho')
        containerCarrinho.innerHTML = "" // isso vai limpar antes de adicionar um novo item 
        itens.map((val) => {
            if(val.quantidade > 0){
            containerCarrinho.innerHTML += `
            <div class="info-single-chekout">
            
                <p style="float:left;"> Produto: `+val.nome+`<p/>
                <p style="float:right;"> Quantidade: `+val.quantidade+`<p/>
                <div style="clear:both;"></div>
            </div>
              `
            }
        })
    }

    var links = document.getElementsByTagName('a')
    for(i = 0; i < links.length; i++){
        links[i].addEventListener("click", function(){
            let key = this.getAttribute('key')
            itens[key].quantidade++
            atualizarCarrinho()
            return false 
        })
    }
