# Plano de Execução: Otimização Desktop da Rota Onboarding (/polo-moda)

Este plano detalha as melhorias focadas na versão Desktop das seções da rota Onboarding, preservando 100% o comportamento, layout e estilização atual da versão Mobile. A regra base é utilizar exclusivamente os prefixos responsivos do Tailwind (`lg:` e `md:`) para qualquer nova formatação.

## Objetivo
Criar uma experiência imersiva, responsiva e com nível de produção profissional para telas grandes, maximizando o uso do espaço horizontal, implementando layouts tipo "Bento" e introduzindo interações premium.

---

## 1. PoloModaSection (Hero & Benefícios)

### Hero Area
- **Mudança de Layout:** Transformar a área principal de texto de uma única coluna para um grid de duas colunas (`lg:grid-cols-2 lg:gap-16 lg:items-center`).
- **Composição Visual:** 
  - **Esquerda:** Textos, Títulos e o Botão CTA principal.
  - **Direita:** Criar uma composição visual rica agrupando os `FloatingDoodles` existentes com possíveis elementos gráficos ou imagens do TikTok para não deixar a tela vazia no desktop.

### Grid de Benefícios
- **Bento Grid:** Alterar o layout de `grid-cols-2` para um layout mais elegante de `lg:grid-cols-3`.
- **Destaque:** O último card ("Matching com Top Criadores") já usa `span 2` no mobile. No desktop, garantiremos que ele tome o destaque apropriado para equilibrar o grid.
- **Polimento:** Aumentar padding (`lg:p-8`) e intensificar efeitos de hover (elevação e sombras).

### Módulos "Polos" e "Abrir Conta"
- **Alinhamento Lado a Lado:** Em vez de empilhar verticalmente esses dois grandes blocos, eles serão divididos em um grid (`lg:grid-cols-2 lg:gap-10`) para utilizar o espaço horizontal e equilibrar o peso da tela.

---

## 2. SliderSection (Seller Academy)

### Cards de Taxas e Header
- **Reorganização Horizontal:** A seção que exibe os links das Políticas, Taxa de Comissão e Frete será agrupada em linha (`lg:grid-cols-3` ou `lg:flex`) para não gerar um bloco excessivamente longo verticalmente no desktop.
- **Isenção de Comissão:** O card promocional será redimensionado para aproveitar a largura do container desktop, possivelmente dividindo texto de um lado e a imagem de exemplo do outro.

### Otimização do Swiper (Carrossel)
- **Breakpoints Responsivos:** Adicionar configurações no `<Swiper>` para o desktop. Atualmente usa `slidesPerView={1.1}`. Para telas grandes, implementaremos `breakpoints={{ 1024: { slidesPerView: 3.5, spaceBetween: 24 } }}`.
- **Navegação (Setas):** Afastar as setas de navegação (`ChevronLeft`, `ChevronRight`) para fora dos limites dos vídeos, tornando-as maiores e mais fáceis de clicar com o mouse.
- **Visualização das Abas (Tabs):** Remover o comportamento de scroll horizontal obrigatório das tabs no desktop, permitindo que elas fluam naturalmente na tela.

---

## 3. MateriaisDeApoioSection

### Coluna Esquerda (Accordions)
- **Grid Interno:** No mobile, quando um grupo de materiais é aberto, os links aparecem um abaixo do outro. No desktop, eles serão exibidos num grid de duas colunas (`lg:grid-cols-2`), economizando espaço vertical de forma dramática.

### Coluna Direita (Side Panel)
- **Painel Fixo Enriquecido:** A coluna lateral (`sticky top-24`) ganhará mais peso. O card estático de "X recursos disponíveis" será aprimorado visualmente (talvez um dashboard em miniatura ou um visual mais atraente) para parecer uma verdadeira barra lateral de ajuda.

---

## Estratégia de Risco e Regras (Mobile-First)

> [!IMPORTANT]
> **Garantia Anti-Regressão Mobile:** Todas as alterações de DOM (estruturais) utilizarão as condicionais de media query do Tailwind (`lg:`). Onde componentes de React puros forem alterados (como a API do Swiper), usaremos a propriedade nativa de responsividade (`breakpoints`) ou detectaremos via classes CSS ocultas/exibidas para garantir que a versão do celular permaneça inalterada.

---

## Aprovação
Aguardando o seu feedback para começar a implementar.
