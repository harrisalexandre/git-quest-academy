// ==========================================================================
// MOTOR DO CATÁLOGO DE TRILHAS — (scripts/catalogo.js)
// ==========================================================================

const moduloInfos = [
    {
        num: 1,
        titulo: "Fundamentos: O que é programação?",
        desc: "Dê os primeiros passos. Neste módulo prático, você aprenderá o que é programação, como funciona uma linguagem e os conceitos básicos de lógica.",
        implementado: true,
        aulas: [
            { id: 1, titulo: "Aula 1: O Ciclo Base Local" },
            { id: 2, titulo: "Aula 2: Controle de Fluxo e Staging" }
        ]
    },
    {
        num: 2,
        titulo: "Estilização, Layouts Globais & Slots",
        desc: "Hora de dar forma ao seu projeto. Você aprenderá a criar Layouts globais para reaproveitar estruturas de cabeçalho e rodapé.",
        implementado: true,
        aulas: [
            { id: 1, titulo: "Aula 1: Configurando o CSS Escopado" },
            { id: 2, titulo: "Aula 2: Dominando a tag Slot" }
        ]
    },
    {
        num: 3,
        titulo: "Arquitetura de Ilhas & Integração",
        desc: "O verdadeiro superpoder do Astro. Entenda o conceito de Ilhas de Hidratação (Astro Islands) e misture componentes dinâmicos.",
        implementado: false,
        aulas: []
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

    moduloInfos.forEach((modulo) => {
        const status = getStatus(modulo);
        const isLocked = status === 'em-breve';

        const card = document.createElement('div');
        card.className = `netflix-card ${isLocked ? 'bloqueado' : 'ativo'} ${status === 'concluido' ? 'concluido' : ''}`;
        card.id = `card-mod${modulo.num}`;
        card.dataset.num = modulo.num;
        card.style.position = 'relative';

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
            // RENDERIZAÇÃO DA LISTA DE AULAS DISPONÍVEIS
            let aulasHTML = `<div style="display: flex; flex-direction: column; gap: 10px; margin-top: 15px; max-width: 500px;">`;
            
            modulo.aulas.forEach(aula => {
                aulasHTML += `
                    <button class="btn-aula-item" data-aula="${aula.id}" style="background: rgba(255,255,255,0.05); color: white; border: 1px solid rgba(255,255,255,0.1); padding: 12px 20px; border-radius: 6px; text-align: left; font-weight: 500; cursor: pointer; display: flex; justify-content: space-between; align-items: center; transition: all 0.2s;">
                        <span>${aula.titulo}</span>
                        <span style="color: #FE7E04; font-size: 12px; font-weight: bold;">Iniciar →</span>
                    </button>
                `;
            });
            
            aulasHTML += `</div>`;
            actionContainer.innerHTML = aulasHTML;

            // Adiciona o evento de clique em cada botão de aula
            actionContainer.querySelectorAll('.btn-aula-item').forEach(button => {
                button.addEventListener('click', (e) => {
                    const aulaId = button.dataset.aula;
                    // Passa o módulo E a aula via URL!
                    window.location.href = `dashboard.html?modulo=${modulo.num}&aula=${aulaId}`;
                });
            });
        }

        cardEl.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }

    const primeiroFoco = moduloInfos.find(m => getStatus(m) === 'disponivel') || moduloInfos[0];
    if (primeiroFoco) {
        const cardEl = document.getElementById(`card-mod${primeiroFoco.num}`);
        if (cardEl) selectModule(primeiroFoco, getStatus(primeiroFoco), cardEl);
    }

    const concluidos = typeof countCompletedModules === 'function' ? countCompletedModules() : 0;
    if (progressCount) progressCount.textContent = `${concluidos}/${moduloInfos.length}`;
});