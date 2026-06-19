// ==========================================================================
// BANCO DE DADOS: MÓDULO 1 — AULA 2 (scripts/desafios/modulo1aula2.js)
// ==========================================================================

window.moduloObjetivosModulo1Aula2 = {
    titulo: "Módulo 1 / Aula 2: Variáveis e Tipos no Python",
    descricao: "Imagine que o computador é um grande armário. Cada gaveta dele é uma variável com um rótulo (nome) que guarda um tipo de dado específico."
};

window.nomesFasesModulo1Aula2 = [
    "1. Guardando Textos (String)",
    "2. Guardando Inteiros (Int)",
    "3. Guardando Decimais (Float)",
    "4. Verdadeiro ou Falso (Bool)",
    "5. Interpolação de Texto (f-string)"
];

window.desafiosModulo1Aula2 = [
    {
        id: 0,
        type: 'python',
        expected: 'nome = "Ctrl+Young"',
        title: 'Fase 1: Gaveta de Textos (String)',
        desc: 'Para textos, usamos o tipo <b>String</b> (sempre entre aspas). Vamos criar uma variável chamada <code>nome</code> para guardar o nome do seu curso: <code>"Ctrl+Young"</code>. Digite: <code>nome = "Ctrl+Young"</code>',
        successMsg: 'Gaveta de texto criada com sucesso na memória!',
        hint: 'Dica: Nomes de variáveis devem começar com letras minúsculas e não conter espaços. Digite: nome = "Ctrl+Young"'
    },
    {
        id: 1,
        type: 'python',
        expected: 'idade = 16',
        title: 'Fase 2: Números Inteiros (Int)',
        desc: 'Números sem casas decimais são do tipo <b>Int</b> (Inteiros) e não usam aspas. Crie uma variável chamada <code>idade</code> que guarde o valor <code>16</code>. Digite: <code>idade = 16</code>',
        successMsg: 'Número inteiro armazenado! O Python já sabe que pode fazer cálculos matemáticos com ele.',
        hint: 'Dica: Não coloque aspas em números, senão o Python achará que é apenas um texto ordinário.'
    },
    {
        id: 2,
        type: 'python',
        expected: 'altura = 1.75',
        title: 'Fase 3: Números Decimais (Float)',
        desc: 'Números com casas decimais (pontos flutuantes) são do tipo <b>Float</b>. Na programação, usamos <b>ponto (.)</b> em vez de vírgula. Crie a variável <code>altura</code> com o valor <code>1.75</code>. Digite: <code>altura = 1.75</code>',
        successMsg: 'Float registrado! Agora o sistema tem precisão decimal.',
        hint: 'Dica: Lembre-se de usar o ponto decimal: altura = 1.75'
    },
    {
        id: 3,
        type: 'python',
        expected: 'programador = True',
        title: 'Fase 4: Estado Lógico (Boolean)',
        desc: 'O tipo <b>Boolean</b> guarda apenas dois estados: Verdadeiro (<code>True</code>) ou Falso (<code>False</code>) — sempre com a primeira letra maiúscula em Python. Declare que você é um programador digitando: <code>programador = True</code>',
        successMsg: 'Estado booleano ativo! Essa caixinha vai ajudar seu código a tomar decisões mais tarde.',
        hint: 'Dica: No Python, a primeira letra precisa ser maiúscula: True'
    },
    {
        id: 4,
        type: 'python',
        expected: 'print(f"Sou do {nome} e tenho {idade} anos")',
        title: 'Fase 5: O Superpoder da f-string',
        desc: 'Para exibir textos misturados com nossas variáveis de forma elegante, colocamos a letra <code>f</code> antes das aspas e envolvemos as variáveis com <b>chaves { }</b>. Vamos juntar suas gavetas em uma frase só. Digite exatamente: <code>print(f"Sou do {nome} e tenho {idade} anos")</code>',
        successMsg: '🏆 Sensacional! O console exibiu perfeitamente sua mensagem formatada! Você dominou os tipos de dados base do Python.',
        hint: 'Dica: Verifique cada aspa, parêntese e chave. Digite idêntico: print(f"Sou do {nome} e tenho {idade} anos")'
    }
];