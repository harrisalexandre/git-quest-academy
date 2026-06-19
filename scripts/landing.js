// scripts/landing.js
document.addEventListener('DOMContentLoaded', () => {

    /* -----------------------------------------------------------------------
       1. ANO CORRENTE DINÂMICO
    ----------------------------------------------------------------------- */
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    /* -----------------------------------------------------------------------
       2. CONTROLE DO MODAL DE LOGIN (Com tratamento de erros)
    ----------------------------------------------------------------------- */
    const modal = document.getElementById('login-modal');
    const openBtn = document.getElementById('open-login-btn');
    const closeBtn = document.getElementById('close-modal-btn');
    const submitBtn = document.getElementById('submit-login-btn');
    const registerLink = document.getElementById('open-register-link');

    // Captura todos os botões reais de CTA de cadastro presentes no seu HTML
    const startBtns = [
        document.getElementById('start-journey-btn'),
        document.getElementById('start-journey-btn-2'),
        document.getElementById('start-journey-btn-3')
    ].filter(btn => btn !== null); // Remove itens nulos se o botão não existir no HTML

    function openModal() {
        if (!modal) return;
        modal.classList.add('active');
        const emailInput = document.getElementById('email');
        if (emailInput) emailInput.focus();
    }

    function closeModal() {
        if (modal) modal.classList.remove('active');
    }

    // Ouvintes de evento seguros
    if (openBtn) openBtn.addEventListener('click', openModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    startBtns.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    // Fechar ao clicar no overlay escuro (fora da caixinha branca 'modal-box')
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    // Fechar de forma acessível ao pressionar a tecla 'Escape' (ESC)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Fluxo de redirecionamento do Login e Cadastro
    if (submitBtn) {
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'catalogo.html';
        });
    }

    if (registerLink) {
        registerLink.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'catalogo.html';
        });
    }

    /* -----------------------------------------------------------------------
       3. HEADER: fundo sólido ao rolar
    ----------------------------------------------------------------------- */
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 40) {
                header.style.background = 'rgba(22, 24, 34, 0.98)';
            } else {
                header.style.background = 'rgba(22, 24, 34, 0.92)';
            }
        }, { passive: true });
    }

    /* -----------------------------------------------------------------------
       4. ANIMAÇÃO EM CASCATA DO TERMINAL (HERO)
    ----------------------------------------------------------------------- */
    // Mapeia diretamente as linhas existentes no container de demonstração do Hero
    const lines = document.querySelectorAll('#terminal-demo .t-line');

    function animateTerminal() {
        lines.forEach((line, i) => {
            const delay = i * 280; // Janela fluida para simular a digitação e resposta em cascata
            setTimeout(() => {
                line.classList.add('visible');
            }, delay);
        });
    }

    if (lines.length > 0) {
        setTimeout(animateTerminal, 300);
    }

    /* -----------------------------------------------------------------------
       5. SCROLL REVEAL: seções entram suavemente
    ----------------------------------------------------------------------- */
    const revealEls = document.querySelectorAll('.step-card, .trilha-card, .depo-card');

    if (revealEls.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        revealEls.forEach((el, i) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(18px)';
            el.style.transition = `opacity 0.4s ease ${i * 60}ms, transform 0.4s ease ${i * 60}ms`;
            observer.observe(el);
        });
    }
});