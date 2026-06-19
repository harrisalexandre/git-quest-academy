# 🚀 Git Quest Academy — Astro Landing Page

Esta é a página inicial (Landing Page) oficial da **Git Quest Academy**, totalmente reformulada e otimizada para promover a nova trilha prática de desenvolvimento web com o **Astro Framework** e fluxo de trabalho com **Git Flow**.

A interface foi projetada com foco em alta performance, usabilidade fluida e estética voltada para desenvolvedores (Dark Mode / Terminal Theme).

---

## 🛠️ Tecnologias Utilizadas

Para garantir a máxima velocidade de carregamento e fidelidade aos conceitos do próprio Astro (foco em entrega de HTML estático limpo), a página foi construída utilizando:

- **HTML5**: Estrutura semântica e acessível.
- **CSS3 Nativo**: Grid Layout, Flexbox, variáveis de design system (`:root`) e efeitos visuais avançados como `backdrop-filter` para desfoques em tempo real.
- **JavaScript (Vanilla)**: Manipulação assíncrona da DOM, controle de animações encadeadas e gerenciamento inteligente do ciclo de vida dos modais.

---

## 💎 Funcionalidades Principais

1. **Terminal Interativo Simulado**: Um componente visual que simula a criação de um projeto Astro e ramificação em ramificações Git através de um efeito cascata de digitação via JavaScript assim que a página é renderizada.
2. **Modal de Autenticação Otimizado**: Sistema de login flutuante com efeito de desfoque no plano de fundo (*glassmorphism*), captura automática de foco no teclado e fechamento inteligente (clique no overlay ou tecla `ESC`).
3. **Scroll Reveal Inteligente**: Animação em lote usando `IntersectionObserver` que faz com que os cards de passos, trilha e depoimentos entrem de forma suave conforme o usuário rola a página, otimizando o consumo de memória do navegador.
4. **Design 100% Responsivo**: Adaptação perfeita para dispositivos móveis, convertendo grades complexas em fluxos verticais e ocultando menus redundantes.

---

## 📂 Estrutura de Pastas Recomendada

Para que os vínculos de caminhos funcionem sem quebras estruturais, certifique-se de manter os arquivos organizados da seguinte forma:

```text
seu-repositorio/
├── index.html          # Estrutura principal da Landing Page
├── README.md           # Documentação do projeto
├── scripts/
│   └── landing.js      # Lógica do Modal, Terminal e Scroll Reveal
└── styles/
    └── landing.css     # Design System, Variáveis e Animações