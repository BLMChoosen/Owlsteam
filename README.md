# OwlSteam
A School Project to make a site inspired in Steam


📂 Estrutura Completa com Tipos de Arquivos:

OwlSteam/
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


