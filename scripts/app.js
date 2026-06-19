// ==========================================================================
// CONTROLADOR CENTRAL DO JOGO (GERENCIADOR DE ESTADOS)
// ==========================================================================

// 1. CAPTURA O MÓDULO E A AULA VIA URL (?modulo=1&aula=1)
const urlParams = new URLSearchParams(window.location.search);
const moduloSelecionado = parseInt(urlParams.get('modulo')) || 1;
const aulaSelecionada = parseInt(urlParams.get('aula')) || 1;

// 2. DEFINE O BANCO DE QUESTÕES E INFOS BASEADO NO MÓDULO E AULA ATIVOS
let stages = [];
let phaseNames = [];
let moduloObjetivos = { titulo: "", descricao: "" };

const desafiosVarName = `desafiosModulo${moduloSelecionado}Aula${aulaSelecionada}`;
const nomesVarName = `nomesFasesModulo${moduloSelecionado}Aula${aulaSelecionada}`;
const objetivosVarName = `moduloObjetivosModulo${moduloSelecionado}Aula${aulaSelecionada}`;

stages = typeof window[desafiosVarName] !== 'undefined' ? window[desafiosVarName] : [];
phaseNames = typeof window[nomesVarName] !== 'undefined' ? window[nomesVarName] : [];
moduloObjetivos = typeof window[objetivosVarName] !== 'undefined' ? window[objetivosVarName] : {
    titulo: `Módulo ${moduloSelecionado} - Aula ${aulaSelecionada}`,
    descricao: "Conteúdo deste módulo ainda não foi configurado."
};

// 3. VARIÁVEIS DE ESTADO DA SESSÃO ATUAL
let currentStageIndex = 0;
let variablesInMemory = {};
let commitHistory = [];
let isGitInitialized = false;

// HISTÓRICO DE COMANDOS (Seta para Cima)
let commandHistory = [];
let historyIndex = -1;

// 4. INICIALIZADOR DO ECOSSISTEMA
window.onload = function() {
    buildSidebar();
    
    const terminalInput = document.getElementById('terminal-in');
    
    // Vincula o botão físico de Play caso ele exista no HTML (ex: id="play-btn")
    const playButton = document.getElementById('play-btn');
    if (playButton && terminalInput) {
        playButton.onclick = function() {
            submitTerminalCommand(terminalInput);
        };
    }

    if (terminalInput) {
        terminalInput.onkeydown = function(event) {
            // CHEAT / SKIP MASTER
            if (event.key === 'Enter' && !event.ctrlKey && (this.value.trim() === 'cheat' || this.value.trim() === 'skip')) {
                event.preventDefault();
                skipAllStages();
                this.value = '';
                return;
            }

            // CTRL + ENTER: Executa o código enviado
            if (event.key === 'Enter' && event.ctrlKey) {
                event.preventDefault();
                submitTerminalCommand(this);
                return;
            }

            // SETA PARA CIMA: Resgata o histórico anterior
            if (event.key === 'ArrowUp') {
                event.preventDefault();
                if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
                    historyIndex++;
                    this.value = commandHistory[commandHistory.length - 1 - historyIndex];
                }
            }

            // SETA PARA BAIXO: Avança no histórico ou limpa o campo
            if (event.key === 'ArrowDown') {
                event.preventDefault();
                if (historyIndex > 0) {
                    historyIndex--;
                    this.value = commandHistory[commandHistory.length - 1 - historyIndex];
                } else if (historyIndex === 0) {
                    historyIndex = -1;
                    this.value = '';
                }
            }
        };
    }

    if (stages.length > 0) {
        loadStage(currentStageIndex);
    } else {
        document.getElementById('ch-title').innerText = "Módulo indisponível";
        document.getElementById('ch-desc').innerText = "Este módulo ainda não possui desafios cadastrados. Volte ao catálogo e escolha uma aula disponível.";
    }
};

// FUNÇÃO AUXILIAR PARA PEGAR O INPUT, GUARDAR NO HISTÓRICO E PROCESSAR
function submitTerminalCommand(inputElement) {
    const rawValue = inputElement.value;
    if (rawValue.trim() !== '') {
        commandHistory.push(rawValue); // Adiciona ao histórico de comandos executados
    }
    historyIndex = -1; // Reseta o ponteiro de navegação do histórico
    processInput(rawValue);
}

// 5. RENDERIZADOR DA BARRA LATERAL DINÂMICA
function buildSidebar() {
    const headerHTML = `
        <div style="background: rgba(254,126,4,0.1); padding: 10px; border-radius: 6px; margin-bottom: 15px; border: 1px solid rgba(254,126,4,0.2);">
            <h4 style="color: var(--primary); font-size: 11px; text-transform: uppercase;">${moduloObjetivos.titulo}</h4>
            <p style="font-size: 10px; color: var(--text-muted); margin-top: 4px; line-height: 1.3;">${moduloObjetivos.descricao}</p>
        </div>
    `;
    
    const container = document.getElementById('phase-list-container');
    if (container) {
        container.innerHTML = headerHTML;
        phaseNames.forEach((name, i) => {
            container.innerHTML += `<div class="phase-item" id="p-item-${i}">${name}</div>`;
        });
    }
}

// 6. PROCESSADOR DE ENTRADAS DO TERMINAL
function processInput(val) {
    let cleanInput = val.trim();
    let display = document.getElementById('console-display');
    let currentStage = stages[currentStageIndex];

    if(!cleanInput || !currentStage) return;

    // Normaliza quebras de linha para exibição visual limpa no log do console
    let formattedDisplayInput = cleanInput.replace(/\n/g, '<br>.. ');
    display.innerHTML += `<br><span style="color: #fff;">$ ${formattedDisplayInput}</span><br>`;

    // Remove espaços extras e quebras de linha para validação idêntica de blocos estruturados
    let normalizedInput = cleanInput.replace(/\s+/g, '');
    let normalizedExpected = currentStage.expected.replace(/\s+/g, '');

    if (normalizedInput === normalizedExpected) {
        display.innerHTML += `<span style="color: var(--success);">✓ Comando executado com sucesso!</span><br>`;
        
        if (cleanInput === 'git init') {
            isGitInitialized = true;
            let statusMsg = document.getElementById('git-status-msg');
            if(statusMsg) statusMsg.remove();
            document.getElementById('current-branch-lbl').innerText = 'main';
            document.getElementById('current-branch-lbl').style.color = 'var(--primary)';
            updateGitUI();
        } else if (cleanInput.includes('print(')) {
            display.innerHTML += `<span style="color: #00ff00; font-weight: bold;">[CONSOLE OUTPUT] Processado</span><br>`;
        } else if (currentStage.type === 'python' && cleanInput.includes('=')) {
            let parts = cleanInput.split('=');
            variablesInMemory[parts[0].trim()] = parts[1].trim();
            updateMemoryUI();
        } else if (cleanInput.startsWith('git commit')) {
            let nextId = 'c' + (commitHistory.length + 1);
            commitHistory.push({ id: nextId, label: nextId + ' (Commit)' });
            updateGitUI();
        } else if (cleanInput.startsWith('git push')) {
            display.innerHTML += `<span style="color: var(--secondary);">-> Enviando pacotes para refs/heads/main... Sucesso!</span><br>`;
        }

        currentStageIndex++;
        if(currentStageIndex < stages.length) {
            loadStage(currentStageIndex);
        } else {
            finalizarModulo();
        }
    } else {
        let errorFeedback = "❌ Erro: Comando incorreto para esta etapa.";
        
        if (currentStage.type === 'git' && !cleanInput.startsWith('git')) {
            errorFeedback = `❌ Erro de Contexto: Você tentou rodar um comando comum, mas o Git espera que a instrução comece com a palavra-chave <b>git</b>.`;
        } else if (currentStage.type === 'python' && cleanInput.startsWith('git')) {
            errorFeedback = `❌ Erro de Contexto: Esta fase requer código de lógica <b>Python</b> direto, e não comandos do terminal Git.`;
        } else if (currentStage.expected.startsWith('git commit') && cleanInput === 'git commit') {
            errorFeedback = `❌ Falha de Sintaxe: O Git precisa do parâmetro de mensagem descritiva. Use <b>-m "sua mensagem"</b>.`;
        } else if (!isGitInitialized && cleanInput.startsWith('git') && cleanInput !== 'git init') {
            errorFeedback = `❌ Repositório Ausente: Você não pode rodar comandos de alteração se a pasta ainda não foi inicializada com <b>git init</b>.`;
        }
        
        display.innerHTML += `<span style="color: var(--error);">${errorFeedback}</span><br><span style="color: var(--text-muted); font-size: 11px;">${currentStage.hint}</span><br>`;
    }

    display.scrollTop = display.scrollHeight;
    document.getElementById('terminal-in').value = '';
}

// 7. CARREGADOR DE FASE ATIVA
function loadStage(idx) {
    let stage = stages[idx];
    if(!stage) return;
    
    document.getElementById('ch-title').innerText = stage.title;
    document.getElementById('ch-desc').innerHTML = stage.desc;
    document.getElementById('tutor-text').innerHTML = `<b>Alvo Atual:</b> ${stage.successMsg}`;

    document.querySelectorAll('.phase-item').forEach((item, i) => {
        item.className = 'phase-item';
        if(i < idx) item.classList.add('completed');
        else if(i === idx) item.classList.add('active');
    });
}

// 8. ATUALIZADORES DE RENDERIZAÇÃO DA UI
function updateMemoryUI() {
    let memView = document.getElementById('python-memory-view');
    if(!memView) return;
    memView.innerHTML = '';
    for(let key in variablesInMemory) {
        memView.innerHTML += `<div class="mem-slot"><span>${key}</span>${variablesInMemory[key]}</div>`;
    }
}

// 9. ATUALIZAÇÃO DA ÁRVORE GIT
function updateGitUI() {
    let treeView = document.getElementById('git-tree-view');
    if(!treeView) return;
    treeView.innerHTML = '';
    
    if(isGitInitialized && commitHistory.length === 0) {
        treeView.innerHTML = `<div class="git-dot initialized" data-label="Diretório Vazio"></div>`;
        return;
    }
    commitHistory.forEach((c, i) => {
        let isHead = (i === commitHistory.length - 1);
        treeView.innerHTML += `
            <div class="git-dot initialized ${isHead ? 'head' : ''}" data-label="${c.label}"></div>
            ${isHead ? '' : '<div style="color:var(--text-muted); font-size:10px;">➔</div>'}
        `;
    });
}

// 10. FINALIZAÇÃO DE MÓDULO/AULA (Ajustado para avançar para a próxima AULA)
function finalizarModulo() {
    if (typeof markModuleComplete === 'function') {
        markModuleComplete(moduloSelecionado); // Salva o progresso
    }

    document.getElementById('ch-title').innerText = `🏆 AULA CONCLUÍDA!`;
    document.getElementById('ch-desc').innerText = `Parabéns! Você concluiu com sucesso todas as etapas desta aula.`;
    document.getElementById('tutor-text').innerText = "Excelente! Pronto para o próximo desafio?";

    const successModal = document.getElementById('success-modal');
    if (successModal) {
        const nextBtn = successModal.querySelector('a');
        if (nextBtn) {
            // Calcula qual seria a próxima aula para avançar o aluno organicamente
            const proximaAula = aulaSelecionada + 1;
            nextBtn.href = `dashboard.html?modulo=${moduloSelecionado}&aula=${proximaAula}`;
        }
        successModal.classList.add('active');
    }
}

// 11. COMANDO MESTRE DE TESTES (SKIP ALL)
function skipAllStages() {
    let display = document.getElementById('console-display');
    display.innerHTML += `<br><span style="color: #ff00ff; font-weight: bold;">[DEBUG] Executando comando mestre...</span><br>`;

    for (let i = currentStageIndex; i < stages.length; i++) {
        let stage = stages[i];
        if (stage.expected === 'git init') {
            isGitInitialized = true;
            let statusMsg = document.getElementById('git-status-msg');
            if(statusMsg) statusMsg.remove();
            document.getElementById('current-branch-lbl').innerText = 'main';
            document.getElementById('current-branch-lbl').style.color = 'var(--primary)';
        } else if (stage.type === 'python' && stage.expected.includes('=')) {
            let parts = stage.expected.split('=');
            variablesInMemory[parts[0].trim()] = parts[1].trim();
        } else if (stage.expected.startsWith('git commit')) {
            let nextId = 'c' + (commitHistory.length + 1);
            commitHistory.push({ id: nextId, label: nextId + ' (Commit)' });
        }
    }

    updateMemoryUI();
    updateGitUI();
    currentStageIndex = stages.length;

    document.querySelectorAll('.phase-item').forEach((item) => {
        item.className = 'phase-item completed';
    });

    finalizarModulo();
}