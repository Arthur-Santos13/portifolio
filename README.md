# Arthur Henrique Mota Brito Santos — Portfólio Técnico

[![Deploy to GitHub Pages](https://github.com/Arthur-Santos13/portifolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/Arthur-Santos13/portifolio/actions/workflows/deploy.yml)
[![Angular](https://img.shields.io/badge/Angular-20-DD0031?logo=angular)](https://angular.io)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://typescriptlang.org)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-222?logo=github)](https://arthur-santos13.github.io/portifolio/)

> Meu Portfólio profissional desenvolvido com Angular 20, apresentando projetos fullstack com arquitetura moderna e boas práticas de desenvolvimento.

🌐 **Live:** https://arthur-santos13.github.io/portifolio/

---

## Arquitetura

```
src/
├── app/
│   ├── pages/              # Rotas (lazy-loaded)
│   │   ├── home/           # Hero com foto + code badge, stack badges, serviços
│   │   ├── about/          # Foto de perfil circular, bio, skills, timeline
│   │   ├── projects/       # Grid com filtros: Todos · React · Angular · Java · TypeScript · Destaques
│   │   └── contact/        # Formulário integrado com API Spring Boot
│   ├── components/         # Componentes reutilizáveis
│   │   ├── navbar/         # Navegação responsiva com scroll detection
│   │   ├── footer/         # Links e redes sociais
│   │   └── project-card/   # Card de projeto com hover effect e tamanhos uniformes
│   ├── models/             # Interfaces TypeScript (Project, ContactPayload)
│   └── services/           # ProjectsService (GitHub API + fallback estático) · ContactService
└── styles.scss             # Design system global — Railway dark theme
public/
└── images/                 # Fotos de perfil servidas como assets estáticos
    ├── developer.webp      # Foto hero (página inicial)
    └── perfil.jpeg         # Foto de perfil circular (página sobre)
```

## Stack

| Camada | Tecnologia |
|--------|-----------|
| Framework | Angular 20 (Standalone Components) |
| Linguagem | TypeScript 5 |
| Estilos | SCSS — (`#0a0a14` bg · `#8b5cf6` accent) |
| Animações | IntersectionObserver scroll-reveal + CSS `@keyframes` nos cards |
| Dados de projetos | GitHub API (`/users/Arthur-Santos13/repos`) com fallback estático |
| Formulário de contato | Spring Boot REST API (`api.arthur-santos.dev`) |
| Deploy | GitHub Pages via `angular-cli-ghpages` |
| CI/CD | GitHub Actions (push → build → deploy automático) |
| Roteamento | Angular Router com Hash Location Strategy (compatível com gh-pages) |

## Projetos exibidos

Os projetos são carregados da GitHub API com fallback para dados estáticos. O repositório `portifolio` (este) é excluído automaticamente da listagem.

## Decisões Técnicas

**Standalone Components** — Elimina NgModules, reduzindo boilerplate e melhorando tree-shaking.

**Lazy Loading** — Cada página carregada sob demanda via `loadComponent()`, reduzindo bundle inicial.

**Hash Location Strategy** — Necessário no GitHub Pages (sem suporte a server-side routing) para que rotas funcionem após refresh.

**CSS `@keyframes` nos cards** — Cards de projeto usam animação CSS pura (`cardFadeIn`) com `animation-delay` por índice, evitando problemas de timing com IntersectionObserver.

**Grid de projetos uniforme** — `grid-auto-rows: 1fr` + `height: 100%` no card garante que todos os cards tenham a mesma altura independente do conteúdo.

**IntersectionObserver** — Scroll-reveal nativo sem dependências externas nas páginas home, about e contact.

**Imagens como assets estáticos** — Fotos servidas de `public/images/` para garantir disponibilidade tanto em dev quanto em produção no GitHub Pages.

**GitHub API com fallback** — Projetos carregados da API pública do GitHub; em caso de falha (rate limit, offline) o array estático com dados completos é exibido automaticamente.

## Rodando localmente

```bash
npm install
npm start
# Acesse http://localhost:4200
```

## Deploy manual

```bash
npm run deploy
```

## CI/CD automático

Qualquer `push` na branch `main` dispara o workflow `.github/workflows/deploy.yml` que faz build de produção e publica no GitHub Pages automaticamente.

---

**Arthur Henrique Mota Brito Santos** · [GitHub](https://github.com/Arthur-Santos13) · [LinkedIn](https://linkedin.com/in/arthur-henrique-brito) · ahsantos1301@gmail.com

