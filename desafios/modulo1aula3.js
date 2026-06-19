// ==========================================================================
// BANCO DE DADOS: MÓDULO 1 — AULA 3 (scripts/desafios/modulo1aula3.js)
// ==========================================================================

window.moduloObjetivosModulo1Aula3 = {
    titulo: "Módulo 1 / Aula 3: Manipulando Textos e Entradas",
    descricao: "Em Python, textos são chamados de Strings e funcionam como correntes de caracteres conectados. Vamos aprender a medir, cortar e capturar esses dados!"
};

window.nomesFasesModulo1Aula3 = [
    "1. Medindo o Texto (len)",
    "2. Fatiando Strings (Slice)",
    "3. Varredura de Segurança (find)",
    "4. Eco de Strings (Multiplicação)",
    "5. Escutando o Usuário (input)"
];

window.desafiosModulo1Aula3 = [
    {
        id: 0,
        type: 'python',
        expected: 'heroi = "Ragnar"\nlen(heroi)',
        title: 'Fase 1: Criando e Medindo o Nome',
        desc: 'Para começar o sistema do nosso herói, primeiro crie a variável <code>heroi</code> guardando o texto <code>"Ragnar"</code>. Na linha de baixo, use a função <code>len()</code> para medir o tamanho desse nome. <br><br>Digite no terminal (pule linha com Enter e use Ctrl+Enter ou RUN para rodar):<br><code>heroi = "Ragnar"</code><br><code>len(heroi)</code>',
        successMsg: 'Perfeito! Você criou a string e mediu. O console retornou 6 caracteres.',
        hint: 'Dica: Digite a primeira linha, aperte Enter para descer, digite a segunda e use Ctrl+Enter para rodar.'
    },
    {
        id: 1,
        type: 'python',
        expected: 'tag = heroi[0:3]',
        title: 'Fase 2: Criando a Tag de Clã (Slicing)',
        desc: 'Como strings são sequências, podemos "fatiá-las" usando colchetes <code>[início:fim]</code>. A contagem sempre começa no **0** e vai até o índice final (mas sem incluí-lo!). Sabendo que a variável heroi já existe, isole as 3 primeiras letras dela para fazer uma Tag de Clã. Digite: <code>tag = heroi[0:3]</code>',
        successMsg: 'Fatiamento perfeito! A variável tag agora guarda "Rag".',
        hint: 'Dica: Use colchetes e os dois pontos para fatiar: tag = heroi[0:3]'
    },
    {
        id: 2,
        type: 'python',
        expected: 'email = "aluno@ctrlplay.com.br"\nemail.find("@")',
        title: 'Fase 3: Cadastro e Validação',
        desc: 'Para salvar o herói na nuvem, precisamos do e-mail dele. Crie a variável <code>email</code> com o texto <code>"aluno@ctrlplay.com.br"</code>. Na linha de baixo, use o método interno <code>.find("@")</code> para verificar se o e-mail possui o caractere obrigatório @.<br><br>Digite no terminal:<br><code>email = "aluno@ctrlplay.com.br"</code><br><code>email.find("@")</code>',
        successMsg: 'Varredura concluída! O @ foi localizado no índice 5. Se não existisse, o Python retornaria -1.',
        hint: 'Dica: Crie a variável na linha 1, pule linha e use o .find("@") na linha 2.'
    },
    {
        id: 3,
        type: 'python',
        expected: 'grito = "Ahoo!"\ngrito * 3',
        title: 'Fase 4: Multiplicação de Texto',
        desc: 'Strings em Python são imutáveis (você não altera letras direto nelas), mas você pode operá-las! Crie a variável <code>grito</code> com o texto <code>"Ahoo!"</code> e, na linha de baixo, use o sinal de asterisco (<code>*</code>) para fazer ela ecoar 3 vezes no console.<br><br>Digite no terminal:<br><code>grito = "Ahoo!"</code><br><code>grito * 3</code>',
        successMsg: 'Eco ativado! O terminal processou: "Ahoo!Ahoo!Ahoo!".',
        hint: 'Dica: Crie a variável primeiro, pule linha e multiplique por 3.'
    },
    {
        id: 4,
        type: 'python',
        expected: 'nome_jogador = input("Digite seu nome: ")\nprint(f"Bem-vindo, {nome_jogador}")',
        title: 'Fase 5: O Portal do Teclado (input)',
        desc: 'Até agora, nosso código só rodava instruções fixas. Para fazer o computador parar, escutar o teclado e mostrar o resultado funcionando na tela, vamos combinar o <code>input()</code> com um <code>print()</code>.<br><br>Digite exatamente este bloco para ver o terminal te responder:<br><code>nome_jogador = input("Digite seu nome: ")</code><br><code>print(f"Bem-vindo, {nome_jogador}")</code>',
        successMsg: '🏆 Sensacional! O portal de comunicação foi aberto. O programa capturou sua entrada e respondeu direto no console. Você está pronto para os fluxos condicionais!',
        hint: 'Dica: Use duas linhas. Na primeira você captura com o input, na segunda exibe com o print(f"...").'
    }
];