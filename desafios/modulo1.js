// desafios/modulo1.js

// Propósitos do Módulo 1
const moduloObjetivosModulo1 = {
    titulo: "Módulo 1: O Ciclo Base Local e Remoto",
    descricao: "Neste bloco, você vai tirar o projeto do zero, criar lógica em Python e registrar sua primeira versão segura direto no servidor remoto."
};

// Desafios do Módulo 1
const desafiosModulo1 = [
    {
        id: 0,
        type: 'git',
        expected: 'git init',
        title: 'Fase 1: Inicializando o Repositório',
        desc: 'Para começar o monitoramento, initialize um repositório vazio na pasta atual. Digite exatamente: <code>git init</code>',
        successMsg: 'Repositório inicializado com sucesso! Agora a ramificação padrão <b>main</b> está ativa.',
        hint: 'Dica: Todo projeto Git começa com "git init". Verifique se você digitou as duas palavras corretamente.'
    },
    {
        id: 1,
        type: 'python',
        expected: 'nome_app = "GitQuest"',
        title: 'Fase 2: Lógica Python - Variáveis',
        desc: 'Crie uma variável de texto (String) chamada <code>nome_app</code> que guarde o nome <code>"GitQuest"</code>.',
        successMsg: 'Variável criada! O computador reservou um espaço na memória RAM para este dado.',
        hint: 'Dica: Em Python, não use espaços antes ou depois do nome da variável. O texto deve estar entre aspas: nome_app = "GitQuest"'
    },
    {
        id: 2,
        type: 'python',
        expected: 'print(nome_app)',
        title: 'Fase 3: Python - Exibindo Dados',
        desc: 'Use a função interna do Python para exibir o conteúdo da variável no console. Digite: <code>print(nome_app)</code>',
        successMsg: 'Exibido! O console retornou "GitQuest". Agora seu código está pronto para ser guardado pelo Git.',
        hint: 'Dica: A função escreve-se tudo em minúsculo e a variável vai dentro dos parênteses: print(nome_app)'
    },
    {
        id: 3,
        type: 'git',
        expected: 'git add .',
        title: 'Fase 4: Preparação (Staging Area)',
        desc: 'Mova seu arquivo Python modificado para a área de preparação do Git antes do salvamento. Digite: <code>git add .</code>',
        successMsg: 'Excelente! Arquivos indexados e prontos para o snapshot histórico.',
        hint: 'Dica: O ponto "." significa "adicionar todos os arquivos da pasta atual". Digite: git add .'
    },
    {
        id: 4,
        type: 'git',
        expected: 'git commit -m "feat: primeira variavel"',
        title: 'Fase 5: Gravando o Histórico (Commit)',
        desc: 'Grave permanentemente esta versão com uma mensagem descritiva. Digite: <code>git commit -m "feat: primeira variavel"</code>',
        successMsg: 'Commit realizado! Um novo ponto na linha do tempo foi registrado no gráfico.',
        hint: 'Dica: Lembre-se de abrir e fechar as aspas na mensagem do commit após o parâmetro -m.'
    },
    {
        id: 5,
        type: 'git',
        expected: 'git push origin main',
        title: 'Fase 6: Publicação Remota (Push)',
        desc: 'Finalize o ciclo enviando seu commit local para o servidor em nuvem na branch principal. Digite: <code>git push origin main</code>',
        successMsg: 'Sensacional! Seu código Python agora está seguro no servidor remoto. Ciclo base concluído!',
        hint: 'Dica: O comando envia seus dados para o servidor remoto configurado (origin) na linha main: git push origin main'
    }
];

// Nomes das lições na Sidebar do Módulo 1
const nomesFasesModulo1 = [
    "1. Iniciar Repositório",
    "2. Declarar Variável",
    "3. Imprimir no Console",
    "4. Indexar Alterações (Add)",
    "5. Confirmar Versão (Commit)",
    "6. Enviar para Nuvem (Push)"
];