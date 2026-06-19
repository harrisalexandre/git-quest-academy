// ==========================================================================
// CONTROLADOR DO CATÁLOGO DE CURSOS (ESTILO NETFLIX) - CONTEÚDO: ASTRO
// ==========================================================================

// 1. BANCO DE DADOS DOS MÓDULOS (CONTEÚDO FOCO EM ASTRO FRAMEWORK)
const moduloInfos = {
    1: {
        titulo: "Módulo 1: Fundamentos do Astro & Componentes",
        desc: "Dê os primeiros passos no framework que está revolucionando a web. Neste módulo prático, você aprenderá a estrutura de arquivos do Astro, como funciona o frontmatter (bloco de código Markdown/JS) para gerenciar dados locais e como criar seus primeiros componentes reutilizáveis e páginas estáticas ultra-rápidas.",
        liberado: true
    },
    2: {
        titulo: "Módulo 2: Estilização, Layouts Globais & Slots",
        desc: "Hora de dar forma ao seu projeto. Você aprenderá a criar Layouts globais para reaproveitar estruturas de cabeçalho e rodapé em múltiplos arquivos usando a tag <slot />. Exploraremos também o gerenciamento de estilos escopados e globais nativos do Astro para construir interfaces limpas e organizadas.",
        liberado: false
    },
    3: {
        titulo: "Módulo 3: Arquitetura de Ilhas & Integração com Frameworks",
        desc: "O verdadeiro superpoder do Astro. Entenda o conceito de Ilhas de Hidratação (Astro Islands) e aprenda a misturar componentes dinâmicos de frameworks como React, Vue ou Svelte em páginas estáticas. Você dominará as diretivas client:* para carregar JavaScript apenas quando e onde for estritamente necessário.",
        liberado: false
    }
};

// Variável global para rastrear qual módulo o usuário está inspecionando no momento
let moduloSelecionadoAtual = 1;

// 2. INICIALIZADOR DO ECOSSISTEMA DO CATÁLOGO
document.addEventListener("DOMContentLoaded", () => {
    // Detecta se o usuário acabou de concluir um módulo para liberar o próximo automaticamente via URL
    const urlParams = new URLSearchParams(window.location.search);
    
    if (urlParams.get('modulo1') === 'ready') {
        moduloInfos[2].liberado = true;
        liberarCardVisual(2);
    }
    if (urlParams.get('modulo2') === 'ready') {
        moduloInfos[2].liberado = true;
        moduloInfos[3].liberado = true;
        liberarCardVisual(2);
        liberarCardVisual(3);
    }

    // Inicializa a tela mostrando o preview do Módulo 1 por padrão
    selectModule(1);
});

// 3. FUNÇÃO PARA ATUALIZAR O PREVIEW EMBAIXO DA LINHA DE CARDS
function selectModule(numeroModulo) {
    moduloSelecionadoAtual = numeroModulo;
    const info = moduloInfos[numeroModulo];

    if (!info) return;

    // Remove a classe de seleção visual de todos os cards
    document.querySelectorAll('.netflix-card').forEach(card => {
        card.classList.remove('selecionado');
    });

    // Adiciona a classe visual de seleção no card que foi clicado
    const cardClicado = document.getElementById(`card-mod${numeroModulo}`);
    if (cardClicado) {
        cardClicado.classList.add('selecionado');
    }

    // Atualiza os textos do painel de Preview (Título e Descrição)
    document.getElementById('preview-title').innerText = info.titulo;
    document.getElementById('preview-desc').innerText = info.desc;

    // Altera o comportamento do botão "Entrar no Curso" dependendo do status do módulo
    const containerBotao = document.getElementById('preview-action-container');
    if (!containerBotao) return;

    if (info.liberado) {
        containerBotao.innerHTML = `
            <button class="btn-submit" onclick="iniciarCurso(${numeroModulo})">
                Entrar no Curso
            </button>
        `;
    } else {
        containerBotao.innerHTML = `
            <button class="btn-bloqueado" disabled>
                🔒 Módulo Bloqueado (Conclua os anteriores)
            </button>
        `;
    }
}

// 4. REDIRECIONADOR PARA O PAINEL DE DESAFIOS (DASHBOARD)
function iniciarCurso(numeroModulo) {
    if (moduloInfos[numeroModulo] && moduloInfos[numeroModulo].liberado) {
        // Envia o usuário para o dashboard passando o módulo escolhido via parâmetro na URL
        window.location.href = `dashboard.html?modulo=${numeroModulo}`;
    }
}

// 5. FUNÇÃO AUXILIAR PARA ALTERAR AS CLASSES CSS DOS CARDS COMPRADOS/LIBERADOS
function liberarCardVisual(numeroModulo) {
    const card = document.getElementById(`card-mod${numeroModulo}`);
    const badge = document.getElementById(`badge-mod${numeroModulo}`);
    
    if (card) {
        card.classList.remove('bloqueado');
        card.classList.add('ativo');
    }
    if (badge) {
        badge.classList.remove('text-muted');
        badge.classList.add('text-success');
        badge.innerText = "Disponível";
    }
}