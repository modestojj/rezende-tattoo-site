/* script.js */
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o ícone do menu e a lista de links
    const mobileMenu = document.querySelector('.menu-mobile');
    const navLinks = document.querySelector('.nav-links');

    // Quando clicar no ícone...
    mobileMenu.addEventListener('click', () => {
        // ...adiciona ou remove a classe 'active' na lista
        navLinks.classList.toggle('active');
    });

    // (Opcional) Fechar o menu automaticamente ao clicar em um link
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
});