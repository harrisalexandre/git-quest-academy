// scripts/landing.js
document.addEventListener('DOMContentLoaded', () => {

    /* -----------------------------------------------------------------------
       1. CONTROLE DO MODAL DE LOGIN
    ----------------------------------------------------------------------- */
    const modal       = document.getElementById('login-modal');
    const openBtn     = document.getElementById('open-login-btn');     // Botão "Área do Aluno"
    const closeBtn    = document.getElementById('close-modal-btn');    // Botão "✕"
    const submitBtn   = document.getElementById('submit-login-btn');   // Botão "Acessar plataforma"

    // Captura os dois botões reais de CTA de cadastro presentes no seu HTML
    const startBtns = [
        document.getElementById('start-journey-btn'),   // Botão do Hero
        document.getElementById('start-journey-btn-3')  // Botão da Seção Final
    ];

    // Função centralizada para abrir/fechar o modal
    function toggleModal(open) {
        if (!modal) return;
        
        if (open) {
            modal.classList.add('active');
            // Joga o foco no campo de email automaticamente para melhorar a UX
            const emailInput = document.getElementById('email');
            if (emailInput) emailInput.focus();
        } else {
            modal.classList.remove('active');
        }
    }

    // Ouvintes para abrir o modal
    if (openBtn) openBtn.addEventListener('click', () => toggleModal(true));
    
    startBtns.forEach(btn => {
        if (btn) btn.addEventListener('click', () => toggleModal(true));
    });

    // Ouvinte para fechar no botão de fechar (✕)
    if (closeBtn) closeBtn.addEventListener('click', () => toggleModal(false));

    // Fechar ao clicar no overlay escuro (fora da caixinha branca 'modal-box')
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                toggleModal(false);
            }
        });
    }

    // Fechar de forma acessível ao pressionar a tecla 'Escape' (ESC)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            toggleModal(false);
        }
    });


    /* -----------------------------------------------------------------------
       2. FLUXO DE ENTRADA / REDIRECIONAMENTO
    ----------------------------------------------------------------------- */
    if (submitBtn) {
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Evita recargas inesperadas se estiver simulando forms
            
            // Redireciona o usuário para a página interna do catálogo
            window.location.href = 'catalogo.html';
        });
    }


    /* -----------------------------------------------------------------------
       3. ANIMAÇÃO EM CASCATA DO TERMINAL (HERO)
    ----------------------------------------------------------------------- */
    const lines = document.querySelectorAll('#terminal-demo .t-line');

    function animateTerminal() {
        lines.forEach((line, i) => {
            const delay = i * 420; // Janela de tempo charmosa para simular a digitação/resposta
            setTimeout(() => {
                line.classList.add('visible');
            }, delay);
        });
    }

    // Dispara o efeito visual do terminal 300ms após o carregamento estrutural
    if (lines.length > 0) {
        setTimeout(animateTerminal, 300);
    }
});