// desafios/modulo2.js

// Propósitos do Módulo 2
const moduloObjetivosModulo2 = {
    titulo: "Módulo 2: Branches & Condicionais",
    descricao: "Crie ramificações estáveis no Git e aplique operadores matemáticos na memória RAM para expandir a inteligência do sistema."
};

// Desafios do Módulo 2
const desafiosModulo2 = [
    {
        id: 0,
        type: 'git',
        expected: 'git checkout -b feature/calculadora',
        title: 'Módulo 2 - Fase 1: Criando Branches com Atalhos',
        desc: 'Crie e entre imediatamente em uma branch chamada <b>feature/calculadora</b> para codificar uma função Python de soma. Digite: <code>git checkout -b feature/calculadora</code>',
        successMsg: 'Sensacional! O atalho <code>-b</code> criou e ativou a branch ao mesmo tempo. Vamos programar a lógica de soma agora!',
        hint: 'Dica: Certifique-se de respeitar a barra: git checkout -b feature/calculadora'
    },
    {
        id: 1,
        type: 'python',
        expected: 'resultado = 5 + 5',
        title: 'Módulo 2 - Fase 2: Operações em Python',
        desc: 'Declare uma variável chamada <code>resultado</code> que compute diretamente a soma de dois inteiros: <code>5 + 5</code>. Digite exatamente: <code>resultado = 5 + 5</code>',
        successMsg: 'Operação aritmética registrada na memória RAM! Salve essa evolução da calculadora preparando o arquivo para commits com: <code>git add .</code>',
        hint: 'Dica: Digite sem aspas para que o Python calcule o número, ex: resultado = 5 + 5'
    },
    {
        id: 2,
        type: 'git',
        expected: 'git add .',
        title: 'Módulo 2 - Fase 2.2: Indexando Lógica Matemática',
        desc: 'Adicione a alteração da variável à área de stage usando: <code>git add .</code>',
        successMsg: 'Indexado! Documente esse commit para consolidar a feature da calculadora rodando: <code>git commit -m "feat: adicionar soma"</code>',
        hint: 'Dica: O comando padrão de envio para a área de preparação é git add .'
    },
    {
        id: 3,
        type: 'git',
        expected: 'git commit -m "feat: adicionar soma"',
        title: 'Módulo 2 - Fase 3: Commit na Feature Branch',
        desc: 'Salve as alterações localmente na sua branch paralela de cálculo. Digite: <code>git commit -m "feat: adicionar soma"</code>',
        successMsg: 'Perfeito! Agora faça o upload remoto rodando: <code>git push origin feature/calculadora</code>',
        hint: 'Dica: Insira a mensagem do commit exatamente igual ao solicitado.'
    },
    {
        id: 4,
        type: 'git',
        expected: 'git push origin feature/calculadora',
        title: 'Módulo 2 - Fase 4: Sincronização Remota (Push)',
        desc: 'Envie seus commits da branch local para o repositório remoto na nuvem. Digite exatamente: <code>git push origin feature/calculadora</code>',
        successMsg: 'Excelente! Código espelhado na nuvem com sucesso! Você concluiu a esteira remota do Módulo 2!',
        hint: 'Dica: Como estamos na branch de feature, o alvo mudou de main para feature/calculadora.'
    }
];

// Nomes das fases da barra lateral para o Módulo 2
const nomesFasesModulo2 = [
    "1. Atalhos de Branches",
    "2. Matemática Python",
    "3. Stage de Arquivos",
    "4. Versionamento Isolado",
    "5. Publicação Remota (Push)"
];