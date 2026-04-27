# Plano de Adaptação Desktop

A aplicação é atualmente mobile-first (max-width: 430px, coluna única).
O objetivo é criar um layout responsivo que em desktop (≥ 1024px) use o espaço horizontal com duas colunas, sidebar ou grid, sem quebrar a experiência mobile.

---

## Estratégia geral

- Breakpoint principal: `lg` (1024px)
- Mobile: comportamento 100% atual, sem mudança
- Desktop: `<main>` deixa de ter `maxWidth: 430px` e passa a ocupar a tela toda (máx. ~1280px)
- Cada seção ganha uma variante de layout desktop via classes Tailwind `lg:*`
- **Não refatorar componentes** — adicionar classes responsivas diretamente

---

## Passo 1 — Layout raiz (`page.tsx` + `layout.tsx`)

**Arquivo:** `src/app/page.tsx`

- Remover `style={{ maxWidth: "430px" }}` do `<main>`
- Adicionar `className="... lg:max-w-screen-xl lg:px-8"`
- O fundo cinza fixo (`#e8e8e8`) deve ser mantido no mobile mas transparente no desktop
- `FloatingNavbar` precisa de largura maior no desktop (ver Passo 2)

---

## Passo 2 — FloatingNavbar (`FloatingNavbar.tsx`)

**Arquivo:** `src/components/ui/FloatingNavbar.tsx`

- Atualmente fixada em `max-w-[320px]`
- No desktop: aumentar para `max-w-[560px]` via `lg:max-w-[560px]`
- Adicionar links de seção âncora além das rotas: `#fases`, `#como-funciona`, etc.

---

## Passo 3 — VideoPlayerSection (`VideoPlayerSection.tsx`)

**Arquivo:** `src/components/sections/VideoPlayerSection.tsx`

- Mobile: vídeo full-width, efeito de scroll/zoom atual
- Desktop: vídeo centralizado com max-width ~500px, com padding lateral
- Adicionar `lg:max-w-[500px] lg:mx-auto lg:rounded-3xl lg:my-8` no container do vídeo
- O parallax de scroll pode ser mantido igual

---

## Passo 4 — HeroSection (`HeroSection.tsx`)

**Arquivo:** `src/components/sections/HeroSection.tsx`

- Mobile: coluna única (título + subtítulo + pills + cards)
- Desktop: duas colunas — esquerda: texto + pills, direita: cards flutuantes + CircularBadge
- Estrutura alvo:
  ```
  lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center lg:min-h-[80vh]
  ```
- H1: aumentar `clamp` para desktop (`lg:text-[4.5rem]`)
- Cards flutuantes: posicionamento absoluto → no desktop viram coluna direita organizada
- Wave de saída: ajustar altura para `lg:h-[120px]`

---

## Passo 5 — FasesSection (`FasesSection.tsx`)

**Arquivo:** `src/components/sections/FasesSection.tsx`

- Mobile: slider horizontal com scroll snap (comportamento atual)
- Desktop: substituir o slider por um layout de abas (tabs) laterais + conteúdo à direita
  ```
  lg:grid lg:grid-cols-[220px_1fr] lg:gap-8
  ```
- Coluna esquerda: lista vertical das 4 fases como tabs clicáveis
- Coluna direita: conteúdo da fase selecionada (tarefas, reward, imagem)
- Manter o slider para mobile sem mudança
- Usar `useMediaQuery('(min-width: 1024px)')` ou CSS para mostrar/ocultar cada layout

---

## Passo 6 — ComoFuncionaSection (`ComoFuncionaSection.tsx`)

**Arquivo:** `src/components/sections/ComoFuncionaSection.tsx`

- Mobile: coluna única (header → marquee → 4 passos → botão)
- Desktop: duas colunas
  - Esquerda: header + marquee
  - Direita: lista dos 4 passos + botão
  ```
  lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start
  ```
- Marquee: no desktop limitar largura e adicionar fade lateral proporcional

---

## Passo 7 — WebinarsSection (`WebinarsSection.tsx`)

**Arquivo:** `src/components/sections/WebinarsSection.tsx`

- Mobile: cards em coluna ou scroll horizontal
- Desktop: grid 3 colunas `lg:grid-cols-3`
- Cada card: altura fixa com imagem no topo e conteúdo abaixo

---

## Passo 8 — MateriaisDeApoioSection (`MateriaisDeApoioSection.tsx`)

**Arquivo:** `src/components/sections/MateriaisDeApoioSection.tsx`

- Mobile: accordions empilhados (comportamento atual)
- Desktop: layout de 2 colunas — accordions à esquerda, card Chinese Version + destaque à direita
  ```
  lg:grid lg:grid-cols-[1fr_340px] lg:gap-8 lg:items-start
  ```
- Título com highlight já funciona — apenas ajustar tamanho da fonte (`lg:text-5xl`)

---

## Passo 9 — CtaFinalSection (`CtaFinalSection.tsx`)

**Arquivo:** `src/components/sections/CtaFinalSection.tsx`

- Mobile: coluna única centralizada
- Desktop: duas colunas — esquerda: texto + CTA, direita: imagem/visual decorativo
  ```
  lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center
  ```
- Gradient de fundo: manter, só ampliar

---

## Passo 10 — Footer (`Footer.tsx`)

**Arquivo:** `src/components/sections/Footer.tsx`

- Mobile: coluna única
- Desktop: linha horizontal com logo à esquerda, links no centro, contato à direita
  ```
  lg:flex lg:items-center lg:justify-between
  ```

---

## Passo 11 — Páginas secundárias

Páginas: `polo-moda/page.tsx`, `gmv-max/page.tsx`, `semijoias/page.tsx`, `entrega-maxima/page.tsx`

- Cada uma usa seções próprias (`PoloModaSection`, `GmvMaxSection`, etc.)
- Aplicar o mesmo padrão: `lg:max-w-screen-xl lg:mx-auto` no container raiz
- Seções de conteúdo longo: duas colunas no desktop
- Tratar **após** a página principal estar completa

---

## Ordem de execução recomendada

1. Passo 1 — Layout raiz (desbloqueador de tudo)
2. Passo 2 — Navbar
3. Passo 4 — HeroSection (primeira impressão)
4. Passo 5 — FasesSection (componente mais complexo)
5. Passo 6 — ComoFuncionaSection
6. Passo 7 — WebinarsSection
7. Passo 8 — MateriaisDeApoioSection
8. Passo 9 — CtaFinalSection
9. Passo 10 — Footer
10. Passo 3 — VideoPlayerSection
11. Passo 11 — Páginas secundárias

---

## Notas técnicas

- **Não usar JS para detectar breakpoint** quando CSS puro resolver — preferir `lg:hidden` / `hidden lg:block`
- **Waves SVG**: em desktop aumentar altura do viewBox (`lg:h-[100px]`) para as curvas não ficarem achatadas
- **FloatingDoodles**: no desktop aumentar `opacity` ligeiramente (estão calibrados para mobile pequeno)
- **Fontes clamp**: revisar os `clamp()` para que o máximo faça sentido em telas de 1440px
- **Testes**: após cada passo, verificar em 375px (iPhone SE), 768px (tablet) e 1440px (desktop padrão)
