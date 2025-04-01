# OwlSteam
A School Project to make a site inspired in Steam

 📂 **Estrutura Completa com Tipos de Arquivos**  
```
meu-projeto/
├── index.html
├── css/
│   ├── base/
│   │   ├── reset.css       (ou normalize.css) → Reset de estilos padrão do navegador
│   │   ├── variables.css   → Variáveis CSS (cores, fontes, espaçamentos)
│   │   └── site.css        → Estilos globais (body, tipografia, classes utilitárias)
│   │
│   └── components/
│       ├── header.css      → Estilos específicos do cabeçalho
│       ├── buttons.css     → Estilos de botões reutilizáveis
│       └── card.css        → Estilos de cards (se houver)
│
├── js/
│   ├── modules/
│   │   ├── api.js          → Chamadas à API (se aplicável)
│   │   └── utils.js        → Funções utilitárias (formatação de dados, etc.)
│   │
│   ├── components/
│   │   ├── header.js       → Interações do cabeçalho (menu mobile, etc.)
│   │   └── modal.js        → Lógica de modais (se houver)
│   │
│   └── main.js             → Ponto de entrada do JS (importa módulos)
│
└── assets/
    ├── images/
    │   ├── icons/          → Ícones SVG ou PNG
    │   ├── logos/          → Logotipos
    │   └── backgrounds/    → Imagens de fundo
    │
    └── fonts/
        ├── custom-font.woff → Fontes personalizadas (se não usar Google Fonts)
        └── font-styles.css  → @font-face (definição das fontes)
```

---

📌 **Detalhamento por Pasta**:

 1. **`css/`**  
- **`base/`**:  
  - Arquivos que afetam **todo o projeto**.  
  - Exemplos:  
    - `reset.css`: Remove estilos padrão do navegador.  
    - `variables.css`: Define variáveis CSS (ex: `--primary-color: #D9043D;`).  
    - `site.css`: Estilos gerais (ex: `body`, `h1`, classes utilitárias).  

- **`components/`**:  
  - Estilos **específicos por componente**.  
  - Exemplos:  
    - `header.css`: Cabeçalho.  
    - `buttons.css`: Todos os estilos de botões.  
    - `card.css`: Estilos de cards de produtos/jogos.  

 2. **`js/`**  
- **`modules/`**:  
  - Código **não-visual** (lógica pura).  
  - Exemplos:  
    - `api.js`: Fetch à API da loja de jogos.  
    - `utils.js`: Funções como `formatPrice(price)`.  

- **`components/`**:  
  - Código **ligado a elementos HTML**.  
  - Exemplos:  
    - `header.js`: Menu mobile, dropdowns.  
    - `modal.js`: Abrir/fechar modais.  

- **`main.js`**:  
  - Importa todos os módulos e inicia a aplicação.  
  - Exemplo:  
    ```
    import { initHeader } from './components/header.js';
    import { fetchGames } from './modules/api.js';

    document.addEventListener('DOMContentLoaded', () => {
        initHeader();
        fetchGames();
    });
    ```

 3. **`assets/`**  
- **`images/`**:  
  - **`icons/`**: Ícones (SVG preferencialmente).  
  - **`logos/`**: Logotipos (ex: `logo-owlsteam.png`).  
  - **`backgrounds/`**: Imagens de fundo (ex: `hero-bg.jpg`).  

- **`fonts/`**:  
  - Arquivos de fontes (`.woff`, `.ttf`) + CSS com `@font-face`.  
  - Exemplo (`font-styles.css`):  
    ```
    @font-face {
        font-family: 'CustomFont';
        src: url('custom-font.woff2') format('woff2');
    }
    ```



 🛠 **Arquivos Adicionais (Opcionais)**  
- **`config/`**:  
  - `tailwind.config.js`: Configurações do Tailwind (cores, breakpoints).  
- **`public/`**: Arquivos estáticos para produção (gerados por builders como Vite).  



🌟 **Exemplo de Uso no HTML**  
```
<head>
    <!-- CSS -->
    <link rel="stylesheet" href="css/base/reset.css">
    <link rel="stylesheet" href="css/base/variables.css">
    <link rel="stylesheet" href="css/components/header.css">
    <!-- Fontes -->
    <link rel="stylesheet" href="assets/fonts/font-styles.css">
</head>
<body>
    <!-- Conteúdo -->
    <script src="js/main.js" type="module"></script>
</body>
```


