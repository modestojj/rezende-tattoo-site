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
// Ativa o Lightbox na galeria
var lightbox = new SimpleLightbox('.galeria', { 
    /* opções */ 
    captionsData: 'alt',
    captionDelay: 250,
});

/* --- Lógica do Formulário WhatsApp --- */

// 1. Função que troca os campos visíveis
function toggleCampos() {
    const tipoServico = document.querySelector('input[name="servico"]:checked').value;
    const camposTattoo = document.getElementById('campos-tattoo');
    const camposPiercing = document.getElementById('campos-piercing');

    if (tipoServico === 'tatuagem') {
        camposTattoo.style.display = 'block';
        camposPiercing.style.display = 'none';
        
        // Torna obrigatórios os campos de tattoo (e tira os de piercing)
        document.getElementById('local_corpo').required = true;
        document.getElementById('local_piercing').required = false;
    } else {
        camposTattoo.style.display = 'none';
        camposPiercing.style.display = 'block';
        
        // Torna obrigatórios os campos de piercing
        document.getElementById('local_corpo').required = false;
        document.getElementById('local_piercing').required = true;
    }
}

// 2. Função de Envio (Pega os dados e manda pro Zap)
document.getElementById('whatsappForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede a página de recarregar

    // Pega os valores comuns
    const nome = document.getElementById('nome').value;
    const clienteAntigo = document.getElementById('cliente_antigo').value;
    const tipoServico = document.querySelector('input[name="servico"]:checked').value;

    // SEU NÚMERO AQUI (Mantenha o 55 e o DDD)
    const telefoneEstudio = "5554996196041"; 
    
    let mensagem = "";

    // Monta a mensagem baseada na escolha
    if (tipoServico === 'tatuagem') {
        const local = document.getElementById('local_corpo').value;
        const tamanho = document.getElementById('tamanho').value;
        const ideia = document.getElementById('ideia_tattoo').value;

        // %0a é o código para pular linha no link do WhatsApp
        mensagem = `*Olá, vim pelo site! Gostaria de um orçamento de Tattoo.*%0a` +
                   `%0a*Nome:* ${nome}` +
                   `%0a*Já sou cliente?* ${clienteAntigo}` +
                   `%0a----------------------------------` +
                   `%0a*Local:* ${local}` +
                   `%0a*Tamanho aprox:* ${tamanho}` +
                   `%0a*Ideia:* ${ideia}`;
    } else {
        const localPiercing = document.getElementById('local_piercing').value;
        const joia = document.getElementById('tipo_joia').value;

        mensagem = `*Olá, vim pelo site! Gostaria de agendar um Piercing.*%0a` +
                   `%0a*Nome:* ${nome}` +
                   `%0a*Já sou cliente?* ${clienteAntigo}` +
                   `%0a----------------------------------` +
                   `%0a*Local:* ${localPiercing}` +
                   `%0a*Tipo de Joia:* ${joia}`;
    }

    // Abre o WhatsApp numa nova aba
    window.open(`https://wa.me/${telefoneEstudio}?text=${mensagem}`, '_blank');
});