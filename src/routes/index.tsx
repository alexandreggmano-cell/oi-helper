import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Check,
  CheckCircle2,
  ChefHat,
  Gift,
  LockKeyhole,
  ShieldCheck,
  Smartphone,
  X,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: SalesPage,
  head: () => ({
    meta: [
      { title: "Receitas Sem Cara de Dieta | 120 Receitas" },
      {
        name: "description",
        content:
          "120 receitas práticas sem açúcar adicionado, sem glúten e sem lactose, organizadas em um material digital fácil de consultar.",
      },
    ],
  }),
});

const CHECKOUT_ESSENCIAL = "#configurar-checkout-essencial";
const CHECKOUT_COMPLETO = "#configurar-checkout-completo";

const bonuses = [
  [
    "01",
    "Guia de Substituições Inteligentes",
    "Possíveis trocas de ingredientes para adaptar diferentes preparos.",
  ],
  [
    "02",
    "Método 3 Trocas",
    "Um método simples para fazer trocas práticas em receitas e refeições do cotidiano.",
  ],
  [
    "03",
    "Cardápio Prático de 14 Dias",
    "Sugestões organizadas para facilitar a escolha das refeições durante duas semanas.",
  ],
  [
    "04",
    "30 Sobremesas Sem Cara de Dieta",
    "Uma coleção adicional com 30 opções de sobremesas para ampliar ainda mais a variedade.",
  ],
  [
    "05",
    "Guia de Preparação e Conservação",
    "Orientações práticas para preparação, organização e conservação das receitas.",
  ],
  [
    "06",
    "Lista de Compras Inteligente",
    "Material para organizar os ingredientes e facilitar suas compras.",
  ],
] as const;

const productPages = [
  {
    image: "/pagina_11_cafe_da_manha.png",
    label: "Produto principal",
    title: "Café da manhã",
  },
  {
    image: "/pagina_22_lanches_salgados.png",
    label: "Produto principal",
    title: "Lanches e salgados",
  },
  {
    image: "/pagina_44_bolos.png",
    label: "Produto principal",
    title: "Bolos e receitas de forno",
  },
  {
    image: "/pagina_81_cardapio_14_dias.png",
    label: "Bônus do Plano Completo",
    title: "Cardápio prático de 14 dias",
  },
  {
    image: "/pagina_96_lista_de_compras.png",
    label: "Bônus do Plano Completo",
    title: "Lista de compras inteligente",
  },
] as const;

const testimonialImages = [
  "/18ea853a-6e64-4cdd-9838-e2d80028ff2a.png",
  "/7219cac0-83d5-4594-bca2-b7ae5cb2f4ac.png",
  "/62928dac-c5e7-4df9-86e7-f84cdbc4e862.png",
  "/a3532467-d96f-4551-b8ff-91c539bfc1f9.png",
  "/e5527911-4343-4e07-a522-6bb21e104d3a.png",
] as const;

const faqs = [
  [
    "O que é o Receitas Sem Cara de Dieta?",
    "É um material digital contendo 120 receitas organizadas em seis categorias.",
  ],
  ["Quantas receitas eu recebo?", "Você recebe 120 receitas no produto principal."],
  [
    "Qual a diferença entre R$9,90 e R$19,90?",
    "As duas opções incluem as mesmas 120 receitas. No plano de R$19,90 você recebe também os 6 bônus exclusivos.",
  ],
  [
    "O plano de R$9,90 tem menos receitas?",
    "Não. O produto principal é exatamente o mesmo. São 120 receitas nas duas opções.",
  ],
  [
    "O que vem no Plano Completo?",
    "As 120 receitas + Guia de Substituições Inteligentes + Método 3 Trocas + Cardápio Prático de 14 Dias + 30 Sobremesas Sem Cara de Dieta + Guia de Preparação e Conservação + Lista de Compras Inteligente.",
  ],
  ["O pagamento é mensal?", "Não. O pagamento é feito apenas uma vez."],
  [
    "Como recebo o material?",
    "O acesso ao produto digital é disponibilizado após a confirmação da compra, conforme o processo da plataforma utilizada.",
  ],
  [
    "Consigo acessar pelo celular?",
    "Sim. O material digital pode ser visualizado em dispositivos compatíveis com PDF.",
  ],
  [
    "Preciso saber cozinhar muito bem?",
    "O material foi organizado para tornar a consulta e o acompanhamento das receitas simples.",
  ],
  [
    "Quanto tempo tenho acesso?",
    "O período de acesso deve seguir exatamente a configuração real da plataforma de entrega.",
  ],
  [
    "Como funciona a garantia?",
    "A compra possui garantia de 7 dias conforme as condições informadas na oferta e na plataforma responsável pelo pagamento.",
  ],
  [
    "Os bônus estão inclusos no plano de R$9,90?",
    "Não. Os seis bônus são exclusivos do Plano Completo de R$19,90.",
  ],
] as const;

function goToPlans() {
  document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" });
}

function DynamicOfferDate() {
  const [today, setToday] = useState("");

  useEffect(() => {
    const updateDate = () => {
      setToday(
        new Intl.DateTimeFormat("pt-BR", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }).format(new Date()),
      );
    };

    updateDate();
    const interval = window.setInterval(updateDate, 60 * 1000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="sales-topbar">
      🍰 OFERTA DISPONÍVEL HOJE{today ? ` • ${today}` : ""}
    </div>
  );
}

function SalesPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeProductPage, setActiveProductPage] = useState(0);
  const [expandedProductPage, setExpandedProductPage] = useState<number | null>(null);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveTestimonial((current) => (current + 1) % testimonialImages.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveProductPage((current) => (current + 1) % productPages.length);
    }, 3800);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (expandedProductPage === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setExpandedProductPage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [expandedProductPage]);

  const previousProductPage = () => {
    setActiveProductPage((current) =>
      current === 0 ? productPages.length - 1 : current - 1,
    );
  };

  const nextProductPage = () => {
    setActiveProductPage((current) => (current + 1) % productPages.length);
  };

  const previousTestimonial = () => {
    setActiveTestimonial((current) =>
      current === 0 ? testimonialImages.length - 1 : current - 1,
    );
  };

  const nextTestimonial = () => {
    setActiveTestimonial((current) => (current + 1) % testimonialImages.length);
  };

  return (
    <main className="sales-page">
      <DynamicOfferDate />

      <section className="sales-section hero">
        <div className="hero-copy">
          <div className="sales-kicker">
            <ChefHat size={18} /> Um livro digital para usar no dia a dia
          </div>

          <h1>
            120 RECEITAS
            <em>SEM CARA DE DIETA</em>
          </h1>

          <div className="hero-mockup-wrap">
            <img
              src="/bd4ff994-4c15-4258-8d6f-933313446e5b.png"
              alt="Mockup do produto Receitas Sem Cara de Dieta"
              className="hero-mockup-image"
            />
          </div>

          <p className="hero-sub">
            Receitas práticas e apetitosas, sem açúcar adicionado, sem glúten e sem
            lactose, organizadas para você variar suas refeições sem precisar ficar
            procurando ideias todos os dias.
          </p>

          <p className="hero-note">
            Do café da manhã à sobremesa: abra, escolha e prepare.
          </p>

          <button className="sales-btn sales-btn-primary" onClick={goToPlans}>
            QUERO ACESSAR AS 120 RECEITAS <ArrowRight size={19} />
          </button>

          <div className="sales-trust-row">
            <span>
              <LockKeyhole size={16} /> Pagamento único
            </span>
            <span>
              <Smartphone size={16} /> Acesso digital
            </span>
            <span>
              <ShieldCheck size={16} /> 7 dias de garantia
            </span>
          </div>
        </div>
      </section>

      <section className="benefit-strip">
        {[
          "120 receitas completas",
          "6 categorias diferentes",
          "Ingredientes + passo a passo",
          "Acesso digital",
          "Pagamento único",
        ].map((item) => (
          <span key={item}>
            <CheckCircle2 size={17} />
            {item}
          </span>
        ))}
      </section>

      <section className="sales-section product-preview">
        <div className="sales-heading narrow">
          <span className="sales-tag">O QUE VOCÊ VAI RECEBER</span>
          <h2>Veja algumas páginas reais do material</h2>
          <p>
            Uma prévia do conteúdo para você entender como as receitas e os materiais
            extras são organizados por dentro.
          </p>
        </div>

        <div className="product-pages-carousel" aria-roledescription="carrossel">
          <div className="product-pages-viewport">
            <div
              className="product-pages-track"
              style={{ transform: `translateX(-${activeProductPage * 100}%)` }}
            >
              {productPages.map((page, index) => (
                <article className="product-page-slide" key={page.image}>
                  <button
                    type="button"
                    className="product-page-image-wrap"
                    onClick={() => setExpandedProductPage(index)}
                    aria-label={`Ampliar página: ${page.title}`}
                  >
                    <img
                      src={page.image}
                      alt={page.title}
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                    <span className="product-page-expand-hint">Toque para ampliar</span>
                  </button>
                  <div className="product-page-caption">
                    <span>{page.label}</span>
                    <strong>{page.title}</strong>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="product-page-arrow product-page-arrow-left"
            onClick={previousProductPage}
            aria-label="Ver página anterior"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            type="button"
            className="product-page-arrow product-page-arrow-right"
            onClick={nextProductPage}
            aria-label="Ver próxima página"
          >
            <ChevronRight size={22} />
          </button>

          <div className="product-page-dots" aria-label="Selecionar página">
            {productPages.map((page, index) => (
              <button
                type="button"
                key={page.image}
                className={index === activeProductPage ? "active" : ""}
                onClick={() => setActiveProductPage(index)}
                aria-label={`Ir para página ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="product-preview-note">
          <CheckCircle2 size={18} />
          <p>
            O Plano Essencial inclui as 120 receitas completas. Os materiais marcados
            como bônus fazem parte somente do Plano Completo.
          </p>
        </div>

        <button className="sales-btn sales-btn-primary product-preview-cta" onClick={goToPlans}>
          QUERO VER AS OPÇÕES <ArrowRight size={18} />
        </button>

        {expandedProductPage !== null && (
          <div
            className="product-page-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Página ampliada do produto"
            onClick={() => setExpandedProductPage(null)}
          >
            <div
              className="product-page-lightbox-content"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="product-page-lightbox-close"
                onClick={() => setExpandedProductPage(null)}
                aria-label="Fechar imagem ampliada"
              >
                <X size={22} />
              </button>

              <img
                src={productPages[expandedProductPage].image}
                alt={productPages[expandedProductPage].title}
              />

              <div className="product-page-lightbox-caption">
                <span>{productPages[expandedProductPage].label}</span>
                <strong>{productPages[expandedProductPage].title}</strong>
              </div>
            </div>
          </div>
        )}
      </section>

      <section className="inside-section">
        <div className="inside-shell">
          <div className="inside-copy">
            <span className="sales-tag">VEJA ANTES DE ESCOLHER</span>
            <h2>Veja o que você recebe por dentro</h2>
            <p>Tudo organizado para você abrir, escolher uma receita e começar.</p>

            <div className="inside-list">
              {[
                "Foto da receita",
                "Nome e categoria",
                "Ingredientes e quantidades",
                "Tempo e porções",
                "Modo de preparo",
                "Substituição ou dica",
              ].map((item) => (
                <span key={item}>
                  <Check size={17} />
                  {item}
                </span>
              ))}
            </div>

            <button className="sales-btn sales-btn-secondary" onClick={goToPlans}>
              QUERO TER ACESSO ÀS RECEITAS <ArrowRight size={18} />
            </button>
          </div>

          <div className="page-fan">
            <article className="inside-page rotate-left">
              <img
                src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=700&q=85"
                alt="Café da manhã"
              />
              <small>CAFÉ DA MANHÃ</small>
              <strong>Toast cremoso</strong>
              <div className="mini-lines">
                <i />
                <i />
                <i />
              </div>
            </article>

            <article className="inside-page front">
              <img
                src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=85"
                alt="Refeição colorida"
              />
              <small>ALMOÇO</small>
              <strong>Bowl prático</strong>
              <div className="mini-lines">
                <i />
                <i />
                <i />
              </div>
            </article>

            <article className="inside-page rotate-right">
              <img
                src="https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=700&q=85"
                alt="Sobremesa"
              />
              <small>SOBREMESA</small>
              <strong>Doce cremoso</strong>
              <div className="mini-lines">
                <i />
                <i />
                <i />
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="sales-section practical">
        <div className="sales-heading">
          <span className="sales-tag">ROTINA MAIS SIMPLES</span>
          <h2>Feito para facilitar sua rotina</h2>
        </div>

        <div className="practical-grid">
          {[
            [
              "🍽️",
              "Mais variedade",
              "Tenha dezenas de opções para não precisar repetir sempre as mesmas refeições.",
            ],
            [
              "⏱️",
              "Menos tempo procurando",
              "Em vez de navegar por vários sites e vídeos, encontre tudo organizado em um único material.",
            ],
            [
              "🛒",
              "Mais organização",
              "Veja ingredientes, quantidades e informações importantes diretamente na receita.",
            ],
            [
              "👩‍🍳",
              "Simples de acompanhar",
              "Escolha uma receita, veja os ingredientes e acompanhe o preparo passo a passo.",
            ],
          ].map(([icon, title, text]) => (
            <article className="practical-card" key={title}>
              <span>{icon}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="sales-section how">
        <div className="sales-heading">
          <span className="sales-tag">SEM COMPLICAÇÃO</span>
          <h2>Como funciona?</h2>
        </div>

        <div className="steps">
          {[
            [
              "01",
              "Escolha sua opção",
              "Finalize a compra com o plano que faz mais sentido para você.",
            ],
            [
              "02",
              "Receba o acesso digital",
              "O material é liberado após a confirmação do pagamento.",
            ],
            [
              "03",
              "Escolha e prepare",
              "Abra o PDF, escolha uma receita e acompanhe o passo a passo.",
            ],
          ].map(([number, title, text]) => (
            <article className="step" key={number}>
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bonuses-section">
        <div className="bonuses-shell">
          <div className="sales-heading narrow">
            <span className="sales-tag">EXCLUSIVO DO PLANO COMPLETO</span>
            <h2>Quer levar o pacote completo?</h2>
            <p>
              Além das 120 receitas, escolhendo o Plano Completo você libera mais 6
              materiais extras para facilitar ainda mais sua rotina.
            </p>
          </div>

          <div className="bonus-grid">
            {bonuses.map(([number, title, text]) => (
              <article className="bonus-card" key={number}>
                <div className="bonus-mock">
                  <span>{number}</span>
                  <Gift size={26} />
                </div>
                <div>
                  <small>BÔNUS {number}</small>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      <section className="sales-section social-proof">
        <div className="sales-heading">
          <span className="sales-tag">FEEDBACKS</span>
          <h2>Veja algumas mensagens sobre o material</h2>
          <p>
            Conversas ilustrativas apresentadas em formato de carrossel.
          </p>
        </div>

        <div className="testimonial-carousel" aria-roledescription="carrossel">
          <div className="testimonial-viewport">
            <div
              className="testimonial-track"
              style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
            >
              {testimonialImages.map((image, index) => (
                <div className="testimonial-slide" key={image}>
                  <img
                    src={image}
                    alt={`Conversa ilustrativa ${index + 1}`}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="testimonial-arrow testimonial-arrow-left"
            onClick={previousTestimonial}
            aria-label="Ver imagem anterior"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            type="button"
            className="testimonial-arrow testimonial-arrow-right"
            onClick={nextTestimonial}
            aria-label="Ver próxima imagem"
          >
            <ChevronRight size={22} />
          </button>

          <div className="testimonial-dots" aria-label="Selecionar imagem">
            {testimonialImages.map((image, index) => (
              <button
                type="button"
                key={image}
                className={index === activeTestimonial ? "active" : ""}
                onClick={() => setActiveTestimonial(index)}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="sales-section plans" id="planos">
        <div className="sales-heading narrow">
          <span className="sales-tag">ESCOLHA SUA OPÇÃO</span>
          <h2>Escolha como você quer começar</h2>
          <p>
            As duas opções incluem as mesmas 120 receitas. A diferença é que o
            Plano Completo libera também todos os materiais extras.
          </p>
        </div>

        <div className="plan-grid">
          <article className="plan-card">
            <div className="plan-head">
              <small>PLANO ESSENCIAL</small>
              <h3>120 RECEITAS</h3>
              <div className="price">
                <sup>R$</sup>
                <strong>9,90</strong>
              </div>
              <span>pagamento único</span>
            </div>

            <div className="plan-list">
              {[
                "120 Receitas Sem Cara de Dieta",
                "20 Cafés da Manhã",
                "20 Lanches e Salgados",
                "20 Almoços e Jantares",
                "20 Bolos e Receitas de Forno",
                "20 Doces e Sobremesas",
                "20 Receitas Rápidas",
                "Ingredientes",
                "Modo de preparo",
                "Sugestões de substituições",
                "Tempo e porções",
              ].map((item) => (
                <span key={item}>
                  <Check size={16} />
                  {item}
                </span>
              ))}

              {[
                "Guia de Substituições Inteligentes",
                "Método 3 Trocas",
                "Cardápio Prático de 14 Dias",
                "30 Sobremesas Extras",
                "Guia de Preparação e Conservação",
                "Lista de Compras Inteligente",
              ].map((item) => (
                <span className="muted" key={item}>
                  <X size={16} />
                  {item}
                </span>
              ))}
            </div>

            <a className="sales-btn sales-btn-outline full" href={CHECKOUT_ESSENCIAL}>
              QUERO SÓ AS 120 RECEITAS — R$9,90
            </a>
          </article>

          <article className="plan-card featured">
            <div className="most-chosen">⭐ MAIS ESCOLHIDO</div>

            <div className="plan-head">
              <small>PLANO COMPLETO</small>
              <h3>120 RECEITAS + 6 BÔNUS</h3>
              <div className="price">
                <sup>R$</sup>
                <strong>19,90</strong>
              </div>
              <span>pagamento único</span>
            </div>

            <div className="everything">
              <CheckCircle2 size={19} /> TUDO DO PLANO ESSENCIAL
            </div>

            <div className="plan-list bonuses-list">
              {bonuses.map(([, title]) => (
                <span key={title}>
                  <Gift size={16} />
                  {title}
                </span>
              ))}
            </div>

            <div className="ten-more">
              <strong>POR APENAS R$10 A MAIS</strong>
              <span>você libera todos os 6 bônus.</span>
            </div>

            <a className="sales-btn sales-btn-primary full" href={CHECKOUT_COMPLETO}>
              SIM! QUERO O PACOTE COMPLETO — R$19,90
            </a>

            <div className="plan-trust">
              <span>⭐ Melhor custo-benefício</span>
              <span>🔒 Pagamento seguro</span>
              <span>🛡️ Garantia de 7 dias</span>
            </div>
          </article>
        </div>
      </section>

      <section className="sales-section guarantee">
        <div className="guarantee-badge">
          <ShieldCheck size={44} />
          <strong>7 DIAS</strong>
          <span>GARANTIA</span>
        </div>

        <div>
          <span className="sales-tag">COMPRA PROTEGIDA</span>
          <h2>Você tem 7 dias para conhecer o material</h2>
          <p>
            Sua compra conta com garantia de 7 dias. Dentro desse período, caso o
            produto não corresponda ao que foi apresentado, você poderá solicitar
            o reembolso conforme as condições da plataforma de pagamento.
          </p>
          <button className="sales-btn sales-btn-secondary" onClick={goToPlans}>
            ESCOLHER MEU PLANO <ArrowRight size={18} />
          </button>
        </div>
      </section>

      <section className="sales-section faq">
        <div className="sales-heading">
          <span className="sales-tag">DÚVIDAS FREQUENTES</span>
          <h2>Perguntas antes de comprar</h2>
        </div>

        <div className="faq-list">
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>
                {question}
                <span>+</span>
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="sales-section final-cta">
        <div className="final-card">
          <div className="final-copy">
            <span className="sales-tag light-tag">PRONTO PARA ESCOLHER?</span>
            <h2>
              120 receitas para você ter muito mais opções na hora de decidir o que
              preparar.
            </h2>
            <p>
              Escolha entre receber somente as 120 receitas ou liberar também o
              pacote completo com todos os 6 bônus.
            </p>

            <div className="final-mockup-wrap">
              <img
                src="/bd4ff994-4c15-4258-8d6f-933313446e5b.png"
                alt="Mockup do produto Receitas Sem Cara de Dieta"
                className="final-mockup-image"
                loading="lazy"
              />
            </div>
          </div>

          <div className="final-actions">
            <a className="sales-btn sales-btn-outline light full" href={CHECKOUT_ESSENCIAL}>
              QUERO AS 120 RECEITAS — R$9,90
            </a>
            <a className="sales-btn sales-btn-light full" href={CHECKOUT_COMPLETO}>
              ⭐ QUERO 120 RECEITAS + 6 BÔNUS — R$19,90
            </a>
            <div className="final-trust">
              <span>🔒 Pagamento único</span>
              <span>🛡️ Garantia de 7 dias</span>
              <span>📲 Produto digital</span>
            </div>
          </div>
        </div>
      </section>

      
    </main>
  );
}
