# Receitas Sem Cara de Dieta — Página de Vendas

Página de vendas mobile-first para o produto digital **Receitas Sem Cara de Dieta**.

## Produto

- 120 receitas sem açúcar adicionado, sem glúten e sem lactose.
- 6 categorias com 20 receitas cada.
- Plano Essencial: R$9,90.
- Plano Completo: R$19,90 com 6 bônus exclusivos.
- Pagamento único.
- Garantia de 7 dias.

## Desenvolvimento

Este projeto usa a estrutura criada pelo Lovable com TanStack Start + React + TypeScript.

Para rodar localmente:

~~~bash
bun install
bun run dev
~~~

Build de produção:

~~~bash
bun run build
~~~

## Links de checkout

Antes de publicar, abra:

`src/routes/index.tsx`

e substitua:

~~~ts
const CHECKOUT_ESSENCIAL = "#configurar-checkout-essencial";
const CHECKOUT_COMPLETO = "#configurar-checkout-completo";
~~~

pelos links reais de checkout.

- `CHECKOUT_ESSENCIAL` → checkout do plano de R$9,90.
- `CHECKOUT_COMPLETO` → checkout do plano de R$19,90.

Todos os CTAs da página já apontam para uma dessas duas variáveis.

## Prova social

A página **não inventa depoimentos**. A seção está preparada com placeholders para você trocar por avaliações reais depois.

## Imagens e mockups

- A capa visual do produto está em `public/recipe-cover.svg`.
- As fotos de receitas são carregadas de imagens externas do Unsplash.
- Você pode substituir os mockups e fotos depois pelas imagens definitivas do produto.

## Arquivos principais

- `src/routes/index.tsx` — página de vendas completa.
- `src/styles.css` — visual, responsividade e versão mobile.
- `src/routes/__root.tsx` — metadados, idioma e estrutura raiz.
- `public/recipe-cover.svg` — capa/mockup do produto.

## Observação

O Plano Essencial e o Plano Completo entregam exatamente as mesmas 120 receitas. A diferença do Plano Completo são somente os 6 bônus.
