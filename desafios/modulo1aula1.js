// ==========================================================================
// BANCO DE DADOS: MÓDULO 1 — AULA 1 (scripts/desafios/modulo1aula1.js)
// ==========================================================================

window.moduloObjetivosModulo1Aula1 = {
    titulo: "Módulo 1 / Aula 1: O que é Programação?",
    descricao: "Antes do código, vamos entender a lógica. Programar é dar instruções, e você faz isso todos os dias da sua vida sem perceber."
};

window.nomesFasesModulo1Aula1 = [
    "1. Dar Instruções",
    "2. Criar um Algoritmo",
    "3. Tomar Decisões",
    "4. Previsibilidade com Git"
];

window.desafiosModulo1Aula1 = [
    {
        id: 0,
        type: 'python',
        expected: 'iniciar_rotina()',
        title: 'Fase 1: O que é Programar?',
        desc: 'Programar significa simplesmente <b>"Dar instruções a algo"</b>. Quando você acorda e decide levantar, está seguindo uma instrução interna. Vamos dar a primeira instrução para o nosso sistema acordar. Digite o comando: <code>iniciar_rotina()</code>',
        successMsg: 'Instrução recebida! O sistema acordou. Viu só? Você acabou de programar um comportamento.',
        hint: 'Dica: Digite exatamente "iniciar_rotina()" com os parênteses no final para disparar a instrução.'
    },
    {
        id: 1,
        type: 'python',
        expected: 'passo1 = "escovar_dentes"',
        title: 'Fase 2: Sequências e Algoritmos',
        desc: 'Uma sequência de instruções organizadas para resolver um problema é um <b>Algoritmo</b>. Lavar o carro, fazer um café ou sua rotina matinal são algoritmos. Vamos registrar o primeiro passo do algoritmo do seu dia criando uma variável com a tarefa. Digite: <code>passo1 = "escovar_dentes"</code>',
        successMsg: 'Passo registrado na memória! Uma sequência lógica impede que você tente calçar os sapatos antes das meias.',
        hint: 'Dica: Use aspas para o texto: passo1 = "escovar_dentes"'
    },
    {
        id: 2,
        type: 'python',
        expected: 'if chuva == True:',
        title: 'Fase 3: Tomando Decisões (If/Else)',
        desc: 'No dia a dia, algoritmos mudam dependendo de condições. <i>"SE chover, levo guarda-chuva. SENÃO, não levo."</i> Futuramente usaremos as palavras <code>if</code> (se) e <code>else</code> (senão) para isso. Vamos simular essa checagem lógica de chuva agora. Digite o início dessa decisão em Python: <code>if chuva == True:</code>',
        successMsg: 'Perfeito! O sistema agora sabe que precisa avaliar uma condição antes de seguir a instrução.',
        hint: 'Dica: Não esqueça dos dois pontos no final do comando: if chuva == True:'
    },
    {
        id: 3,
        type: 'git',
        expected: 'git init',
        title: 'Fase 4: Previsibilidade e Segurança com Git',
        desc: 'Quando criamos rotinas complexas (ou códigos com outras pessoas), precisamos de segurança e histórico para o caso de cometermos um erro. O <b>Git</b> funciona como uma máquina do tempo. Ele garante que possamos salvar o estado atual do projeto e trabalhar em grupo sem um apagar o arquivo do outro. Vamos inicializar essa proteção na nossa rotina criando uma pasta segura de histórico. Digite: <code>git init</code>',
        successMsg: '🏆 Sensacional! Você entendeu a base teórica. Programar é guiar caminhos e o Git é o cinto de segurança. Próxima parada: Aula 2 para salvar seus primeiros arquivos de verdade!',
        hint: 'Dica: O comando mestre do Git para iniciar o histórico é sempre: git init'
    }
];