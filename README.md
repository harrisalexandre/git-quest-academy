# 🚀 Git Quest Academy — Plataforma de Aprendizado Gamificada

**🔗 Acesse a aplicação rodando ao vivo:** [harrisalexandre.github.io/git-quest-academy](https://harrisalexandre.github.io/git-quest-academy)

Bem-vindo ao repositório oficial da **Git Quest Academy**, uma plataforma educacional interativa projetada para ensinar conceitos de desenvolvimento de software e controle de versão através de desafios práticos aplicados dentro de um terminal simulado na web.

A plataforma utiliza elementos visuais modernos (Dark Mode / Terminal Theme / Glassmorphism) combinados com uma experiência fluida estilo Netflix para navegação de trilhas de conhecimento.

---

## 🛠️ Tecnologias Utilizadas

Para garantir máxima performance, carregamento instantâneo e fidelidade aos conceitos modernos de desenvolvimento, a plataforma foi construída sem frameworks pesados no front-end, utilizando:

- **HTML5 Semântico**: Estruturação acessível de modais, painéis e layouts em grade.
- **CSS3 Nativo**: Uso intensivo de CSS Grid Layout, Flexbox, variáveis de ambiente (`:root`), e filtros avançados como `backdrop-filter`.
- **JavaScript (Vanilla)**: Manipulação reativa da DOM, motor analítico de entradas de terminal, gerenciamento de estado global da sessão e persistência de dados.

---

## 💎 Funcionalidades Principais

### 1. Ecossistema de Landing Page & Conversão
* **Terminal de Demonstração:** Um componente visual que simula linhas de comando de inicialização com animação em cascata controlada por tempo.
* **Acessibilidade no Modal:** Captura automática de foco no teclado e fechamento inteligente (via clique fora ou tecla `ESC`).
* **Scroll Reveal Inteligente:** Animação em lote usando `IntersectionObserver` que renderiza os cards de forma suave conforme o usuário rola a página, otimizando o uso de memória do navegador.

### 2. Catálogo de Cursos Integrado (Estilo Netflix)
* **Linhas de Conteúdo Horizontais:** Interface inspirada em plataformas de streaming com rolagem lateral fluida.
* **Painel de Inspecionamento Dinâmico (Preview):** Ao clicar em um card, a ementa, objetivos e o botão de ação se materializam na parte inferior instantaneamente.
* **Tags de Status Automatizadas:** Controle visual de módulos "Disponíveis", "Concluídos" (com ícone de check) ou bloqueados como "Em breve".

### 3. Simulador de Terminal & SandBox (Dashboard)
* **Analisador de Sintaxe (Parser JS):** Sistema que lê os comandos digitados pelo usuário no input, valida se atendem aos requisitos exatos e fornece feedbacks de erros customizados (ex: diferenciar erros de contexto Git de comandos Python).
* **Interface Reativa Baseada em Variáveis Globais (`window`):** O controlador injeta dinamicamente o banco de dados do módulo selecionado via URL parâmetro (`?modulo=1`), construindo a barra lateral de fases e carregando os alvos sem necessidade de requisições de servidor.
* **Simuladores de Estado de Hardware e Árvores:** Tabela visual que exibe variáveis alocadas na memória RAM virtual (comandos Python) e renderização em árvore dos nós de commits e estados de branches (comandos Git).

### 4. Persistência de Progresso (Local Lifecycle)
* **Central Progress Manager (`localStorage`):** Gravação permanente do progresso do estudante em formato JSON. O catálogo de cursos lê esse estado ao carregar para atualizar o progresso geral (`Ex: 1/18 módulos concluídos`) automaticamente.

---

## 📂 Estrutura de Pastas Oficial

Para que os vínculos de caminhos e o carregamento dinâmico de scripts funcionem sem quebras estruturais, mantenha a organização rigorosamente assim:

```text
git-quest-academy/
├── index.html               # Landing Page (Porta de entrada)
├── catalogo.html            # Interface estilo Netflix de seleção de aulas
├── dashboard.html           # Tela principal do jogo e terminal simulado
├── README.md                # Documentação do projeto
│
├── desafios/                # Banco de dados de missões injetáveis
│   ├── modulo1aula1.js      # Desafios de Git Flow & Python do Módulo 1
│   └── modulo1aula2.js      # Continuação da trilha lógica
│
├── scripts/                 # Motores e controladores de regras de negócio
│   ├── landing.js           # Lógica de modais e animações da Home
│   ├── catalogo.js          # Injeção dinâmica de cards e painel de preview
│   ├── progress.js          # Core Manager do localStorage (compartilhado)
│   └── app.js               # Controlador central do jogo, terminal e UI reativa
│
└── styles/                  # Arquivos de estilização e Design System
    ├── landing.css          # Estilos da página inicial
    └── catalogo.css         # Estilos da vitrine e do dashboard do terminal
