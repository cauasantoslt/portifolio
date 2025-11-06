# 🚀 Portfólio Pessoal - Cauã Santos

Bem-vindo ao repositório do meu portfólio profissional. Este projeto foi 100% construído do zero (HTML, CSS e JavaScript) para servir como meu "cartão de visitas" digital, onde apresento meus projetos, artigos e competências na área de Ciência de Dados e Inteligência Artificial.

**[Clique aqui para visitar o site ao vivo]** (insira o link do seu site aqui, quando o publicar)

---

### ✨ Prévia

(Recomendo que você grave um GIF ou tire um screenshot do seu site finalizado e o coloque aqui. Ele vai aparecer automaticamente se o adicionar à pasta `/assets` e usar o seguinte link:)

![Prévia do Portfólio](assets/preview.gif)

---

## 🎯 Sobre o Projeto

Este portfólio foi desenhado com uma estética "Dark Mode", futurista e limpa, focada na legibilidade e na apresentação de informações técnicas. O design combina fundos dinâmicos (como partículas flutuantes e um vídeo de fundo) com um menu flutuante minimalista, criando uma experiência de utilizador moderna e imersiva.

O maior destaque técnico é o **sistema de artigos**, que funciona como uma "mini-SPA" (Single Page Application): os artigos são escritos e guardados num "banco de dados" JavaScript (`artigos-db.js`) e carregados dinamicamente num único "molde" HTML (`artigo.html`), usando parâmetros de URL.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído puramente com as tecnologias fundamentais da web, sem o uso de frameworks.

* **HTML5:** Estruturação semântica do conteúdo.
* **CSS3 (Moderno):**
    * **Design Responsivo:** Adapta-se a computadores, tablets e telemóveis.
    * **Flexbox & Grid:** Utilizados para criar os layouts complexos dos cartões e secções.
    * **Animações CSS:** Para o fundo de partículas lilás flutuantes (`@keyframes`).
    * **Pseudo-elementos:** Usados para criar o gradiente da borda do menu (`.navbar::after`).
* **JavaScript (ES6+):**
    * **Manipulação do DOM:** Para o menu flutuante e o menu hambúrguer.
    * **Lógica de Roteamento:** Leitura de parâmetros da URL (`URLSearchParams`) para carregar o artigo correto.
    * **Carregamento de Conteúdo:** Injeção dinâmica de HTML do `artigos-db.js` na página `artigo.html`.

---

## 🌟 Funcionalidades Principais

* **Design "Dark Mode"** com um fundo de partículas lilás animadas.
* **Menu Flutuante Inteligente:** Um menu "pílula" (claro ou escuro, dependendo da sua versão final) que aparece com o scroll e alinha-se perfeitamente com o conteúdo.
* **Menu Hambúrguer Responsivo:** Em dispositivos móveis, o menu transforma-se num ícone "hambúrguer" funcional.
* **Fundo de Vídeo:** Na secção "Sobre Mim", um vídeo de fundo (com *overlay* escuro para legibilidade) é reproduzido em loop.
* **Sistema de Artigos Dinâmico:**
    1.  O `index.html` mostra apenas as prévias.
    2.  Clicar numa prévia leva a `artigo.html?id=artigo1`.
    3.  O script `artigo-loader.js` lê o `id` da URL.
    4.  Ele procura "artigo1" no `artigos-db.js`.
    5.  Ele injeta o título, a imagem e o conteúdo HTML (incluindo tabelas, código e citações) na página.
* **Citação Inspiradora** de Ayrton Senna para fechar o conteúdo.

---

## 🔧 Como Executar Localmente

**Importante:** Este projeto **não** vai funcionar corretamente se abrir o `index.html` diretamente no navegador (devido à política de segurança CORS, que impede o `artigo-loader.js` de carregar o `artigos-db.js`).

Ele precisa de ser executado a partir de um **servidor local**. A forma mais fácil é:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/cauasantoslt/portifolio.git](https://github.com/cauasantoslt/portifolio.git)
    ```

2.  **Entre na pasta:**
    ```bash
    cd portifolio
    ```

3.  **Inicie um servidor local.** A minha recomendação é usar a extensão **"Live Server"** no VS Code.
    * Clique com o botão direito no `index.html` e selecione "Open with Live Server".

    *Alternativamente*, se tiver o Python instalado:
    ```bash
    # Para Python 3.x
    python -m http.server
    ```
    *Ou* se tiver o Node.js:
    ```bash
    npx serve
    ```

4.  Abra o seu navegador e acesse `http://localhost:5500` (ou a porta que o seu servidor indicar).

---

## ✏️ Como Personalizar

O projeto foi feito para ser facilmente atualizável:

### Para Adicionar um Novo Projeto:

1.  Abra o `index.html`.
2.  Vá até à secção `<section id="projetos">`.
3.  Copie e cole um bloco `<div class="projeto-card">` existente.
4.  Altere o `src` da imagem, o `<h3>` (título), o `<p>` (descrição) e os links `<a>`.

### Para Adicionar um Novo Artigo (2 Passos):

1.  **No `index.html`:**
    * Vá até `<section id="artigos">`.
    * Copie um bloco `<a>` existente (ex: `<a href="artigo.html?id=artigo5"...>`).
    * **Importante:** Mude o `id` para o próximo número (ex: `artigo5`).
    * Altere o `src` da imagem de prévia e o `<h3>` do título.

2.  **No `artigos-db.js`:**
    * Adicione uma vírgula após o último artigo (ex: `... } ,`).
    * Adicione a nova entrada para o seu artigo, garantindo que o `id` seja o mesmo:
    ```javascript
    "artigo5": {
        title: "O Título Completo do Novo Artigo",
        imageUrl: "/assets/artigo5.png",
        contentHTML: `
            <h3>O seu novo conteúdo</h3>
            <p>Escreva o seu novo artigo aqui usando HTML...</p>
        `
    }
    ```
    
---

## 📬 Contato

**Cauã Santos**

* **LinkedIn:** [linkedin.com/in/cauasantoslt](https://linkedin.com/in/cauasantoslt)
* **GitHub:** [@cauasantoslt](https://github.com/cauasantoslt)
* **Email:** cauasantos935@gmail.com
