// ==========================================================================
// MOTOR DO CATÁLOGO DE TRILHAS — (scripts/catalogo.js)
// ==========================================================================

// BANCO DE DADOS DOS MÓDULOS 
const moduloInfos = [
    {
        num: 1,
        titulo: "Fundamentos do Astro & Componentes",
        desc: "Dê os primeiros passos no framework que está revolucionando a web. Neste módulo prático, você aprenderá a estrutura de arquivos do Astro, como funciona o frontmatter (bloco de código Markdown/JS) para gerenciar dados locais e como criar seus primeiros componentes reutilizáveis e páginas estáticas ultra-rápidas.",
        implementado: true
    },
    {
        num: 2,
        titulo: "Estilização, Layouts Globais & Slots",
        desc: "Hora de dar forma ao seu projeto. Você aprenderá a criar Layouts globais para reaproveitar estruturas de cabeçalho e rodapé em múltiplos arquivos usando a tag <slot />. Exploraremos também o gerenciamento de estilos escopados e globais nativos do Astro para construir interfaces limpas e organizadas.",
        implementado: true
    },
    {
        num: 3,
        titulo: "Arquitetura de Ilhas & Integração com Frameworks",
        desc: "O verdadeiro superpoder do Astro. Entenda o conceito de Ilhas de Hidratação (Astro Islands) e aprenda a misturar componentes dinâmicos de frameworks como React, Vue ou Svelte em páginas estáticas. Você dominará as diretivas client:* para carregar JavaScript apenas quando e onde for estritamente necessário.",
        implementado: false
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const row = document.getElementById('aulas-row');
    const previewTitle = document.getElementById('preview-title');
    const previewDesc = document.getElementById('preview-desc');
    const actionContainer = document.getElementById('preview-action-container');
    const progressCount = document.getElementById('progress-count');
    const rowCount = document.getElementById('row-count');

    if (rowCount) rowCount.textContent = `${moduloInfos.length} módulos`;

    // Verifica o status de cada módulo integrando com progress.js
    function getStatus(modulo) {
        if (!modulo.implementado) return 'em-breve';
        if (typeof isModuleComplete === 'function' && isModuleComplete(modulo.num)) {
            return 'concluido';
        }
        return 'disponivel';
    }

    function statusBadge(status) {
        if (status === 'concluido') {
            return `<span class="badge-status text-success" style="color: #23a950; font-weight: bold; display: flex; align-items: center; gap: 4px;">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" style="width:12px; height:12px;"><polyline points="20 6 9 17 4 12"/></svg>
                Concluído
            </span>`;
        }
        if (status === 'disponivel') {
            return `<span class="badge-status" style="color: #4ade80; font-weight: bold;">Disponível</span>`;
        }
        return `<span class="badge-status" style="color: #7e84a1;">Em breve</span>`;
    }

    // Gerador dinâmico dos cards estilo Netflix
    moduloInfos.forEach((modulo) => {
        const status = getStatus(modulo);
        const isLocked = status === 'em-breve';

        const card = document.createElement('div');
        card.className = `netflix-card ${isLocked ? 'bloqueado' : 'ativo'} ${status === 'concluido' ? 'concluido' : ''}`;
        card.id = `card-mod${modulo.num}`;
        card.dataset.num = modulo.num;

        card.style.position = 'relative'; // Garante posicionamento dos badges

        card.innerHTML = `
            ${isLocked ? `<div class="lock-icon" style="position:absolute; top:15px; right:15px; color:#7e84a1;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg></div>` : statusBadge(status)}
            <div class="card-cover">
                <span class="card-number" style="font-family:'JetBrains Mono'; font-size:11px; color:#FE7E04;">MÓDULO ${String(modulo.num).padStart(2, '0')}</span>
                <h3 style="font-size:16px; margin-top:5px; color: #fff;">${modulo.titulo}</h3>
            </div>
        `;

        card.addEventListener('click', () => selectModule(modulo, status, card));
        if (row) row.appendChild(card);
    });

    // Controlador do Painel de Preview inferior
    function selectModule(modulo, status, cardEl) {
        document.querySelectorAll('.netflix-card.selecionado').forEach(c => c.classList.remove('selecionado'));

        if (status !== 'em-breve') {
            cardEl.classList.add('selecionado');
        }

        previewTitle.textContent = `Módulo ${String(modulo.num).padStart(2, '0')} — ${modulo.titulo}`;
        previewDesc.textContent = modulo.desc;

        if (status === 'em-breve') {
            actionContainer.innerHTML = `<button class="btn-bloqueado" disabled style="background:#1f2029; color:#7e84a1; padding:12px 24px; border:none; border-radius:6px; cursor:not-allowed;">🔒 Módulo Bloqueado (Em breve)</button>`;
        } else {
            const label = status === 'concluido' ? 'Revisar Módulo' : 'Entrar no Curso';
            actionContainer.innerHTML = `<button class="btn-submit" id="btn-entrar-modulo" style="background:#FE7E04; color:white; padding:12px 28px; border:none; border-radius:6px; font-weight:700; cursor:pointer;">${label} →</button>`;
            
            document.getElementById('btn-entrar-modulo').addEventListener('click', () => {
                // Redireciona corretamente para a página do terminal passando o ID por parâmetro URL
                window.location.href = `dashboard.html?modulo=${modulo.num}`;
            });
        }

        cardEl.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }

    // Seleção automática da primeira aula disponível ao iniciar
    const primeiroFoco = moduloInfos.find(m => getStatus(m) === 'disponivel') || moduloInfos[0];
    if (primeiroFoco) {
        const cardEl = document.getElementById(`card-mod${primeiroFoco.num}`);
        if (cardEl) selectModule(primeiroFoco, getStatus(primeiroFoco), cardEl);
    }

    // Atualiza o marcador global de progresso no topo da página
    const concluidos = typeof countCompletedModules === 'function' ? countCompletedModules() : 0;
    if (progressCount) progressCount.textContent = `${concluidos}/${moduloInfos.length}`;
});