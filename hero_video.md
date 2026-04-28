# Hero Video — Animação de Scroll Expansion

## Visão Geral

A seção do vídeo no hero do desktop (`HeroSectionDesktop.tsx`) implementa uma animação scroll-driven onde um vídeo pequeno (mockup de desktop) **cresce do centro** até ocupar 80% da viewport, ficando pinado na tela enquanto o usuário continua scrollando. Ao expandir, controles de vídeo (play/pause, mute, fullscreen) aparecem com fade-in.

---

## Arquivo Principal

**`app/src/components/sections/HeroSectionDesktop.tsx`**

---

## Arquitetura da Animação

### Dependências
- `framer-motion` (`motion/react`): `useScroll`, `useTransform`, `motion.div`
- `lucide-react`: ícones de Play, Pause, Volume2, VolumeX, Maximize

### Estrutura DOM

```
<div ref={videoSectionRef}>          ← Scroll trigger zone (160vh)
  <div className="sticky top-0">    ← Container sticky (h-screen, centralizado)
    <motion.div style={{ scale }}>   ← Video wrapper (cresce via CSS scale)
      <video />                      ← Elemento de vídeo (138px base, 16:9)
      <motion.div>                   ← Small overlay (fades out)
    </motion.div>
    <motion.div>                     ← Video controls (fades in)
  </div>
</div>
```

### Como funciona o scroll

| Scroll Progress | O que acontece |
|---|---|
| `0.00` | Vídeo pequeno (138px), rotação 8°, overlay "small" visível |
| `0.00 → 0.10` | Overlay "small" faz fade-out |
| `0.00 → 0.15` | Rotação vai de 8° → 0° |
| `0.00 → 0.20` | **Vídeo escala de 1x até ~7.3x** (138px → 70vw) + controles fazem fade-in simultaneamente |
| `0.20 → 0.80` | **Vídeo fica PINADO** (sticky) no centro da tela — zona longa de "pausa" |
| `0.80 → 0.95` | Fade-out suave de tudo (vídeo + controles) |

### Cálculo do Scale

```ts
const targetWidth = window.innerWidth * 0.7;  // 70vw
const scaleFactor = targetWidth / 138;          // ~7.3x em 1440px
const videoScale = useTransform(videoScrollProgress, [0, 0.20], [1, scaleFactor]);
```

O `scaleFactor` é calculado uma única vez no render inicial. **Não se atualiza em resize** (ver melhorias abaixo).

### Scroll Offset

```ts
useScroll({
  target: videoSectionRef,
  offset: ["start 80%", "end start"],
});
```

- **`start 80%`**: a animação começa quando o topo da seção trigger atinge 80% da viewport
- **`end start`**: a animação termina quando o final da seção trigger sai do topo da viewport
- **Altura da seção**: `120vh` — expansão rápida (~20% do scroll), longa zona pinada (~60%), fade-out suave (~15%)

---

## Vídeo no Hero (mockup pequeno)

~~Existia um vídeo pequeno (mockup celular 9:16, parallax, flutuação, rotação 8°) posicionado absolutamente no hero.~~ **Removido.** O hero agora exibe apenas os doodles flutuantes, glass cards e tipografia — sem vídeo decorativo.

---

## Controles de Vídeo

Três botões glassmorphism (`backdrop-blur-xl`, `bg-white/15`, `border-white/20`):

| Botão | Função | Estado |
|---|---|---|
| **Play/Pause** | `togglePlay()` | `isPlaying` (state) |
| **Mute/Unmute** | `toggleMute()` | `isMuted` (state, inicia `true`) |
| **Fullscreen** | `toggleFullscreen()` | Usa `requestFullscreen()` nativo |

Os controles ficam posicionados em `absolute bottom-[12%]` no container sticky, com `pointer-events-auto` para permitir cliques.

### Autoplay

O vídeo começa a tocar automaticamente quando `scrollYProgress > 0.35`:

```ts
useEffect(() => {
  const unsubscribe = videoScrollProgress.on("change", (v) => {
    if (v > 0.35) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  });
  return unsubscribe;
}, [videoScrollProgress]);
```

---

## O que já foi feito

1. ~~✅ Vídeo pequeno no hero (mockup celular com parallax + flutuação)~~ **🗑️ Removido** — simplificação da hero, mantido apenas scroll expansion
2. ✅ Seção de scroll com expansão via `scale` (cresce do centro)
3. ✅ Vídeo fica pinado (sticky) quando chega a 80vw
4. ✅ Controles de vídeo: play/pause, mute/unmute, fullscreen
5. ✅ Overlay "small" com fade-out durante expansão
6. ✅ Rotação 8° → 0° durante expansão
7. ✅ Border radius ajustado proporcionalmente ao scale
8. ✅ Background grid contínuo na seção sticky
9. ✅ Vídeo em formato landscape (16:9)

---

## O que pode melhorar

### Prioridade Alta

1. **Responsividade do scaleFactor**: Atualmente `window.innerWidth * 0.8` é calculado uma vez. Se a janela for redimensionada, o scale fica errado. Solução: usar um `useEffect` com `resize` listener ou `useMotionValueEvent`.

2. **Conexão visual hero → scroll**: O vídeo no hero (mockup pequeno) e o vídeo na seção de scroll são elementos **separados**. Idealmente, o mockup do hero deveria "se transformar" no vídeo expandido (como uma transição FLIP). Isso exigiria usar `layoutId` do framer-motion ou calcular posições absolutas.

3. **Barra de progresso do vídeo**: Adicionar uma barra de progresso fina na parte inferior do vídeo expandido mostrando o tempo de reprodução.

### Prioridade Média

4. **Transição de aspect ratio**: O mockup no hero é 9:16 (retrato) e o vídeo na seção de scroll é 16:9 (paisagem). Se fosse o mesmo elemento, a transição de aspect ratio seria visualmente mais interessante.

5. **Ocultar o mockup do hero**: Quando o usuário scrolla para a seção do vídeo expandido, o mockup pequeno no hero deveria desaparecer (ou já ter saído da viewport naturalmente).

6. **Animação de saída**: Quando o usuário scrolla para além do vídeo expandido, adicionar uma transição suave (fade out ou scale down) antes da próxima seção ("Bottom Features") cobrir o vídeo.

7. **Controles mais sofisticados**: Timeline seekable, indicador de tempo, volume slider.

### Prioridade Baixa

8. **Performance**: O `useTransform` com `scale` em um elemento grande pode causar repaints. Considerar usar `will-change: transform` ou GPU layers.

9. **Mobile**: Esta animação existe apenas no desktop (`hidden md:block`). Considerar uma versão mobile simplificada.

10. **Múltiplos vídeos**: Suportar um carrossel de vídeos na seção expandida.

---

## Contexto para o próximo agente

### Arquivos relevantes
- **`HeroSectionDesktop.tsx`** — componente principal com toda a lógica
- **`HeroSectionMobile.tsx`** — versão mobile (sem esta animação)
- **`HeroSection.tsx`** — wrapper que alterna entre mobile/desktop
- **`page.tsx`** (app root) — ordem das seções: `VideoPlayerSection > HeroSection > FasesSection > ...`

### Variáveis de estado importantes
- `videoScrollProgress` — MotionValue de 0 a 1, driver de toda a animação
- `videoScale` — MotionValue derivado, controla o `transform: scale()`
- `videoRef` — ref do elemento `<video>` para controle programático
- `videoSectionRef` — ref do container trigger zone (160vh)
- `isMuted`, `isPlaying` — estados React para os controles de UI

### Cuidados
- **Não usar hooks dentro de JSX** (useTransform, etc.) — devem estar no top-level do componente
- **`typeof window !== "undefined"`** — necessário para SSR (Next.js)
- O vídeo usa `muted={isMuted}` como prop controlada, não o atributo HTML estático
- Os controles estão **fora** do `motion.div` que escala — estão no nível do container sticky para não serem afetados pelo scale

### Vídeo source
- Arquivo: `/assets/videos/videoBruna.mp4`
- Formato: Landscape (16:9)
- Reprodução: loop, muted por padrão, playsInline
