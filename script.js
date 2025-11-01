/*
  DOCUMENTAÇÃO: O "Ouvinte" de Eventos
  Carrega tudo assim que o HTML estiver pronto.
*/
document.addEventListener('DOMContentLoaded', () => {

    // (ADICIONADO) Inicia a biblioteca de animação AOS
    AOS.init({
        duration: 800, // Duração da animação em milissegundos
        once: true, // A animação acontece apenas uma vez
    });

    // Define os elementos do menu UMA VEZ
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('menu-hamburger');
    const navLinks = document.getElementById('nav-links');
    
    // --- LÓGICA DO MENU FLUTUANTE (Scroll) ---
    
    const triggerPoint = 300; 

    if (navbar) { 
        window.addEventListener('scroll', () => {
            // Se o menu estiver aberto no telemóvel, não o esconda
            if (navbar.classList.contains('nav-open')) {
                if (window.scrollY <= triggerPoint) {
                    navbar.classList.add('navbar-visible');
                }
                return;
            }
            
            // Lógica normal de esconder/mostrar com o scroll
            if (window.scrollY > triggerPoint) {
                navbar.classList.add('navbar-visible');
            } else {
                if (navbar.classList.contains('navbar-visible')) {
                    navbar.classList.remove('navbar-visible');
                }
            }
        });
    }

    // --- LÓGICA DO MENU HAMBÚRGUER (Click) ---
    
    if (hamburger && navLinks && navbar) {
        
        // "Ouve" o clique no ícone hambúrguer
        hamburger.addEventListener('click', () => {
            
            // Adiciona ou remove a classe 'nav-open' do <header>
            navbar.classList.toggle('nav-open');
            
            // Força o menu a ficar visível quando é aberto, mesmo no topo
            if (navbar.classList.contains('nav-open')) {
                navbar.classList.add('navbar-visible');
            } 
            // Se o fecharmos no topo, ele deve desaparecer
            else if (window.scrollY <= triggerPoint) { 
                navbar.classList.remove('navbar-visible');
            }
        });
    }

});