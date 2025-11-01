/*
  DOCUMENTAÇÃO: O Carregador de Artigos
  Este script é executado quando a página 'artigo.html' carrega.
*/
document.addEventListener('DOMContentLoaded', () => {

    // 1. Ler os parâmetros da URL
    const params = new URLSearchParams(window.location.search);
    
    // 2. Obter o 'id' específico (ex: "artigo1")
    const articleId = params.get('id');

    // 3. Encontrar o artigo no nosso "banco de dados" (articlesDB)
    // (A variável 'articlesDB' vem do ficheiro 'artigos-db.js')
    const article = articlesDB[articleId];

    // 4. Encontrar os locais no HTML onde vamos injetar o conteúdo
    const tituloEl = document.getElementById('artigo-titulo');
    const imagemEl = document.getElementById('artigo-imagem');
    const conteudoEl = document.getElementById('artigo-conteudo');

    // 5. Verificar se o artigo foi encontrado
    if (article) {
        // 6. Injetar o conteúdo
        tituloEl.textContent = article.title;
        imagemEl.src = article.imageUrl;
        imagemEl.alt = article.title; // Boa prática de acessibilidade
        conteudoEl.innerHTML = article.contentHTML;

        // Atualizar o título da página (na aba do navegador)
        document.title = article.title + " - Portfólio";

    } else {
        // 7. Se o ID for inválido (ex: ...?id=artigo99)
        tituloEl.textContent = "Artigo não encontrado";
        conteudoEl.innerHTML = `<p>O artigo que procura não existe. <a href="index.html#artigos">Voltar aos artigos</a>.</p>`;
        imagemEl.style.display = 'none'; // Esconde a imagem quebrada
    }
});