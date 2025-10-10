import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import PayPalButton from "@/components/PayPalButton";

export default function Home() {
  const [navScrolled, setNavScrolled] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copyBizum = () => {
    const bizumNumber = "640828654";
    navigator.clipboard.writeText(bizumNumber).then(() => {
      toast({
        title: "¡Número copiado!",
        description: "El número de Bizum se ha copiado al portapapeles",
      });
    });
  };

  // Ajusta estos datos a los reales
  const IBAN = "ES00 0000 0000 0000 0000 0000"; // Sustituir por tu IBAN real
  const TITULAR = "LORMAN ACADEMIA"; // O el nombre del titular de la cuenta
  const CONCEPTO = "Suscripción LORMAN - Tu Nombre y Apellidos"; // Guía para el alumno

  const copyIBAN = () => {
    const data = `IBAN: ${IBAN}\nTitular: ${TITULAR}\nConcepto: ${CONCEPTO}`;
    navigator.clipboard.writeText(data).then(() => {
      toast({
        title: "¡Datos copiados!",
        description: "IBAN, titular y concepto copiados al portapapeles",
      });
    });
  };

  // Mostrar/ocultar pagos con tarjeta (Stripe)
  const SHOW_STRIPE = false;

  

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Sticky Navigation */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${navScrolled ? "bg-white/90 backdrop-blur-md border-b border-border" : "bg-transparent"}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold text-primary" data-testid="logo">
              LORMAN ACADEMIA
            </div>
            <div className="hidden md:flex space-x-6">
              <button
                onClick={() => scrollToSection("como")}
                className="hover:text-primary transition-colors"
                data-testid="nav-como"
              >
                Cómo funciona
              </button>
              <button
                onClick={() => scrollToSection("incluye")}
                className="hover:text-primary transition-colors"
                data-testid="nav-incluye"
              >
                Qué incluye
              </button>
              <button
                onClick={() => scrollToSection("metodo")}
                className="hover:text-primary transition-colors"
                data-testid="nav-metodo"
              >
                Metodología
              </button>
              <button
                onClick={() => scrollToSection("precio")}
                className="hover:text-primary transition-colors"
                data-testid="nav-precio"
              >
                Suscripción
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="hover:text-primary transition-colors"
                data-testid="nav-faq"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="hover:text-primary transition-colors"
                data-testid="nav-contacto"
              >
                Contacto
              </button>
            </div>
            <a
              href="https://wa.me/34640828654?text=Hola%20LORMAN%20ACADEMIA%2C%20quisiera%20información"
              className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
              data-testid="nav-whatsapp"
            >
              <i className="fab fa-whatsapp mr-2"></i>Contactar
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h1
              className="text-5xl md:text-7xl font-bold mb-6"
              data-testid="hero-title"
            >
              Aprueba el TCAE SAS Andalucía
            </h1>
            <p
              className="text-xl md:text-2xl mb-8 opacity-90"
              data-testid="hero-subtitle"
            >
              Preparación completa con clases en directo, +200
              preguntas por tema y técnicas de memorización avanzadas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="https://wa.me/34640828654?text=Hola%20LORMAN%20ACADEMIA%2C%20quisiera%20información"
                className="inline-flex items-center justify-center h-12 px-8 border-2 border-white text-white rounded-lg text-lg font-semibold hover:bg-white hover:text-primary transition-all"
                data-testid="hero-cta-secondary"
              >
                <i className="fab fa-whatsapp mr-2"></i>Información gratuita
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm opacity-80">
              <div data-testid="hero-feature-1">
                <i className="fas fa-check mr-2"></i>Sin permanencia
              </div>
              <div data-testid="hero-feature-2">
                <i className="fas fa-check mr-2"></i>Soporte 24/7
              </div>
              <div data-testid="hero-feature-3">
                <i className="fas fa-check mr-2"></i>Grabaciones incluidas
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section id="como" className="py-20 dynamic-bg">
        <div className="container mx-auto px-4">
          <h2
            className="text-4xl font-bold text-center mb-16"
            data-testid="section-como-title"
          >
            ¿Cómo funciona?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center" data-testid="step-1">
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Publicación mensual
              </h3>
              <p className="text-muted-foreground">
                Cada mes recibes 3 temas nuevos: 1 común + 2 específicos del
                temario TCAE Andalucía junto a clases explicativas,
                esquemas y presentaciones
              </p>
            </div>
            <div className="text-center" data-testid="step-2">
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Estudio completo</h3>
              <p className="text-muted-foreground">
                Materiales con técnicas de memorización: vídeos, PDFs, esquemas
                y reglas nemotécnicas
              </p>
            </div>
            <div className="text-center" data-testid="step-3">
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">
                +200 preguntas por tema
              </h3>
              <p className="text-muted-foreground">
                2 autoevaluaciones por tema con mínimo 100 preguntas cada una,
                tipo examen SAS
              </p>
            </div>
            <div className="text-center" data-testid="step-4">
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-3">Clases en directo</h3>
              <p className="text-muted-foreground">
                2 clases extra al mes: dudas y repaso de fallos comunes. Todas
                grabadas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Qué incluye cada tema */}
      <section id="incluye" className="py-20">
        <div className="container mx-auto px-4">
          <h2
            className="text-4xl font-bold text-center mb-16"
            data-testid="section-incluye-title"
          >
            Qué incluye cada tema
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              className="hover:shadow-lg transition-shadow"
              data-testid="feature-video"
            >
              <CardContent className="p-6">
                <div className="text-primary text-3xl mb-4">
                  <i className="fas fa-video"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Clase en vídeo</h3>
                <p className="text-muted-foreground">
                  Explicación completa del tema con ejemplos prácticos y casos
                  reales
                </p>
              </CardContent>
            </Card>
            <Card
              className="hover:shadow-lg transition-shadow"
              data-testid="feature-pdf"
            >
              <CardContent className="p-6">
                <div className="text-primary text-3xl mb-4">
                  <i className="fas fa-file-pdf"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Material PDF</h3>
                <p className="text-muted-foreground">
                  Tema completo, resumen ejecutivo y esquemas para estudio
                  rápido
                </p>
              </CardContent>
            </Card>
            <Card
              className="hover:shadow-lg transition-shadow"
              data-testid="feature-nemotecnia"
            >
              <CardContent className="p-6">
                <div className="text-primary text-3xl mb-4">
                  <i className="fas fa-brain"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Reglas nemotécnicas
                </h3>
                <p className="text-muted-foreground">
                  Técnicas de memorización específicas para cada concepto
                  importante
                </p>
              </CardContent>
            </Card>
            <Card
              className="hover:shadow-lg transition-shadow"
              data-testid="feature-colors"
            >
              <CardContent className="p-6">
                <div className="text-primary text-3xl mb-4">
                  <i className="fas fa-palette"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Códigos de colores
                </h3>
                <p className="text-muted-foreground">
                  Sistema visual por epígrafes para facilitar la organización
                  mental
                </p>
              </CardContent>
            </Card>
            <Card
              className="hover:shadow-lg transition-shadow"
              data-testid="feature-maps"
            >
              <CardContent className="p-6">
                <div className="text-primary text-3xl mb-4">
                  <i className="fas fa-sitemap"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Mapas mentales</h3>
                <p className="text-muted-foreground">
                  Visualización gráfica de conceptos y sus relaciones
                </p>
              </CardContent>
            </Card>
            <Card
              className="hover:shadow-lg transition-shadow"
              data-testid="feature-tests"
            >
              <CardContent className="p-6">
                <div className="text-primary text-3xl mb-4">
                  <i className="fas fa-question-circle"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  +200 preguntas tipo examen por tema
                </h3>
                <p className="text-muted-foreground">
                  Redactadas y calibradas exactamente como en los exámenes del
                  SAS
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Calendario y adaptación */}
      <section
        id="metodo"
        className="py-20 calendar-bg"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-4xl font-bold mb-8"
              data-testid="section-calendario-title"
            >
              Calendario adaptado para 12 meses de temario
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="shadow-md" data-testid="calendar-before">
                <CardContent className="p-8 text-center">
                  <i className="fas fa-calendar-check text-primary text-4xl mb-4"></i>
                  <h3 className="text-xl font-semibold mb-4">
                    Si la convocatoria sale antes
                  </h3>
                  <p className="text-muted-foreground">
                    Ajustamos el calendario automáticamente para cubrir todo lo
                    exigido en la convocatoria oficial
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-md" data-testid="calendar-after">
                <CardContent className="p-8 text-center">
                  <i className="fas fa-clipboard-list text-primary text-4xl mb-4"></i>
                  <h3 className="text-xl font-semibold mb-4">
                    Si sale después
                  </h3>
                  <p className="text-muted-foreground">
                    Dedicamos los meses siguientes a simulacros completos para
                    que llegues perfectamente preparado
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="bg-accent/20 border border-accent/30 rounded-lg p-6">
              <p className="text-muted-foreground text-sm">
                <i className="fas fa-info-circle text-accent mr-2"></i>
                <strong>Tiempo estimado:</strong> 12 meses es la duración
                aproximada hasta que se publique la convocatoria oficial del SAS
                Andalucía
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Precio y métodos de pago */}
      <section id="precio" className="py-20 pricing-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-4xl font-bold mb-8"
              data-testid="section-precio-title"
            >
              Plan de suscripción
            </h2>
            <Card
              className="p-8 shadow-lg max-w-md mx-auto mb-8"
              data-testid="pricing-card"
            >
              <CardContent className="p-0">
                <div
                  className="text-5xl font-bold text-primary mb-4"
                  data-testid="price-amount"
                >
                  25€
                  <span className="text-lg text-muted-foreground">/mes</span>
                </div>
                <p
                  className="text-muted-foreground mb-6"
                  data-testid="price-terms"
                >
                  Sin permanencia • Cancela cuando quieras
                </p>
                <ul className="text-left space-y-3 mb-8">
                  <li
                    className="flex items-center"
                    data-testid="feature-themes"
                  >
                    <i className="fas fa-check text-primary mr-3"></i>3 temas
                    mensuales (1 común + 2 específicos)
                  </li>
                  <li
                    className="flex items-center"
                    data-testid="feature-questions"
                  >
                    <i className="fas fa-check text-primary mr-3"></i>+200
                    preguntas tipo examen por tema
                  </li>
                  <li
                    className="flex items-center"
                    data-testid="feature-total-questions"
                  >
                    <i className="fas fa-check text-primary mr-3"></i>+8000
                    preguntas en total
                  </li>
                  <li
                    className="flex items-center"
                    data-testid="feature-videos"
                  >
                    <i className="fas fa-check text-primary mr-3"></i>Vídeos
                    explicativos completos
                  </li>
                  <li className="flex items-center" data-testid="feature-pdfs">
                    <i className="fas fa-check text-primary mr-3"></i>PDFs,
                    resúmenes y esquemas
                  </li>
                  <li
                    className="flex items-center"
                    data-testid="feature-techniques"
                  >
                    <i className="fas fa-check text-primary mr-3"></i>Técnicas
                    de memorización avanzadas
                  </li>
                  <li
                    className="flex items-center"
                    data-testid="feature-classes"
                  >
                    <i className="fas fa-check text-primary mr-3"></i>2 clases
                    extra en directo
                  </li>
                  <li
                    className="flex items-center"
                    data-testid="feature-support"
                  >
                    <i className="fas fa-check text-primary mr-3"></i>Soporte
                    técnico 24/7
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto items-stretch">
              {/* PayPal */}
              <Card data-testid="payment-paypal" className="self-stretch">
                <CardContent className="p-6 flex flex-col items-center justify-between gap-4 text-center min-h-[260px]">
                  <h3 className="text-xl font-semibold">PayPal</h3>
                  <Button
                    className="w-full h-10 bg-blue-600 text-white hover:bg-blue-700"
                    data-testid="button-paypal-temp"
                  >
                    <i className="fab fa-paypal mr-2"></i>Pagar con PayPal
                  </Button>
                </CardContent>
              </Card>

              {/* Tarjeta (Stripe) - Oculta temporalmente */}
              {SHOW_STRIPE && (
                <Card data-testid="payment-card" className="h-full">
                  <CardContent className="p-6 flex flex-col items-center justify-between gap-4 text-center h-full">
                    <h3 className="text-xl font-semibold mb-2">Tarjeta (Stripe)</h3>
                    <a
                      href="https://buy.stripe.com/XXXXXXXXXXXX"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full h-10 inline-flex items-center justify-center px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                      data-testid="button-card-stripe"
                    >
                      <i className="fas fa-credit-card mr-2"></i>Pagar con tarjeta
                    </a>
                    <p className="text-xs text-muted-foreground">
                      Pago seguro con Visa/Mastercard. Sin guardar datos de tarjeta en nuestra web.
                    </p>
                  </CardContent>
                </Card>
              )}

              {/* Bizum */}
              <Card data-testid="payment-bizum" className="self-stretch">
                <CardContent className="p-6 flex flex-col items-center justify-between gap-4 text-center min-h-[260px]">
                  <h3 className="text-xl font-semibold">Bizum</h3>
                  <Button
                    onClick={copyBizum}
                    className="w-full h-10 bg-emerald-600 text-white hover:bg-emerald-700"
                    data-testid="button-copy-bizum"
                  >
                    <i className="fas fa-copy mr-2"></i>Copiar número Bizum
                  </Button>
                </CardContent>
              </Card>

              {/* Transferencia */}
              <Card data-testid="payment-transfer" className="self-stretch">
                <CardContent className="p-6 flex flex-col items-center justify-between gap-4 text-center min-h-[260px]">
                  <h3 className="text-xl font-semibold">Transferencia</h3>
                  <details className="w-full text-left bg-muted/40 rounded-md p-3">
                    <summary className="cursor-pointer text-sm text-muted-foreground hover:text-foreground select-none">Ver detalles de transferencia</summary>
                    <div className="mt-3 text-sm space-y-1">
                      <div><strong>IBAN:</strong> {IBAN}</div>
                      <div><strong>Titular:</strong> {TITULAR}</div>
                      <div><strong>Concepto:</strong> Tu nombre completo</div>
                    </div>
                  </details>
                  <div className="w-full flex items-center justify-between text-sm text-muted-foreground">
                    <button
                      onClick={copyIBAN}
                      className="inline-flex items-center gap-2 hover:text-foreground"
                      data-testid="button-copy-iban"
                      type="button"
                    >
                      <i className="fas fa-copy"></i>
                      Copiar datos
                    </button>
                    <a
                      href="https://wa.me/34640828654?text=Hola%20LORMAN%20ACADEMIA%2C%20acabo%20de%20hacer%20la%20transferencia%20para%20la%20suscripci%C3%B3n.%20Adjunto%20justificante."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-foreground"
                      data-testid="button-transfer-justificante"
                    >
                      <i className="fab fa-whatsapp"></i>
                      Enviar justificante
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            <p
              className="text-muted-foreground mt-6"
              data-testid="payment-other-methods"
            >
              ¿Necesitas otros métodos de pago? <br />
              <a
                href="https://wa.me/34640828654?text=Hola%20LORMAN%20ACADEMIA%2C%20necesito%20información%20sobre%20métodos%20de%20pago"
                className="text-primary hover:underline"
                data-testid="link-payment-whatsapp"
              >
                Consulta por WhatsApp
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 testimonials-bg">
        <div className="container mx-auto px-4">
          <h2
            className="text-4xl font-bold text-center mb-16"
            data-testid="section-testimonios-title"
          >
            Lo que dicen nuestros estudiantes
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-md" data-testid="testimonial-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mr-4">
                    MG
                  </div>
                  <div>
                    <h4 className="font-semibold">María García</h4>
                    <div className="text-accent">★★★★★</div>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "Las técnicas de memorización son increíbles. Nunca pensé que
                  podría recordar tantos conceptos médicos con tanta facilidad."
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md" data-testid="testimonial-2">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mr-4">
                    JL
                  </div>
                  <div>
                    <h4 className="font-semibold">Juan López</h4>
                    <div className="text-accent">★★★★★</div>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "Los test son exactamente como el examen real. Me siento mucho
                  más preparado y confiado para la oposición."
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md" data-testid="testimonial-3">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mr-4">
                    AM
                  </div>
                  <div>
                    <h4 className="font-semibold">Ana Martín</h4>
                    <div className="text-accent">★★★★</div>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "El soporte es excepcional. Siempre responden rápido y las
                  clases en directo resuelven todas mis dudas."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="py-20 faq-bg"
      >
        <div className="container mx-auto px-4">
          <h2
            className="text-4xl font-bold text-center mb-16"
            data-testid="section-faq-title"
          >
            Preguntas frecuentes
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion
              type="single"
              collapsible
              className="space-y-4"
              data-testid="faq-accordion"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger
                  className="text-left"
                  data-testid="faq-question-1"
                >
                  ¿Las clases en directo se graban?
                </AccordionTrigger>
                <AccordionContent data-testid="faq-answer-1">
                  Sí, todas las clases en directo se graban automáticamente y se
                  suben al aula virtual para que puedas acceder cuando quieras,
                  las veces que necesites.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger
                  className="text-left"
                  data-testid="faq-question-2"
                >
                  ¿Puedo darme de baja cuando quiera?
                </AccordionTrigger>
                <AccordionContent data-testid="faq-answer-2">
                  Por supuesto. No hay permanencia. Puedes cancelar tu
                  suscripción en cualquier momento sin penalizaciones ni costes
                  adicionales.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger
                  className="text-left"
                  data-testid="faq-question-3"
                >
                  ¿Qué nivel previo necesito?
                </AccordionTrigger>
                <AccordionContent data-testid="faq-answer-3">
                  No necesitas conocimientos previos. Nuestro método está
                  diseñado para llevarte desde cero hasta el nivel necesario
                  para aprobar el TCAE del SAS Andalucía.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger
                  className="text-left"
                  data-testid="faq-question-4"
                >
                  ¿Cuándo se publican los temas?
                </AccordionTrigger>
                <AccordionContent data-testid="faq-answer-4">
                  Los temas se publican el primer día de cada mes. Recibirás una
                  notificación por email y WhatsApp cuando estén disponibles en
                  tu aula virtual.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger
                  className="text-left"
                  data-testid="faq-question-5"
                >
                  ¿Cómo son exactamente los test?
                </AccordionTrigger>
                <AccordionContent data-testid="faq-answer-5">
                  Los test están redactados y calibrados exactamente como en los
                  exámenes oficiales del SAS. Incluyen el mismo formato,
                  dificultad y tipos de preguntas que encontrarás en la
                  oposición real.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger
                  className="text-left"
                  data-testid="faq-question-6"
                >
                  ¿Incluye simulacros de examen completo?
                </AccordionTrigger>
                <AccordionContent data-testid="faq-answer-6">
                  Sí, cuando terminemos todo el temario o se acerque la
                  convocatoria, dedicaremos tiempo completo a simulacros de
                  examen con las mismas condiciones que la prueba oficial.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6" data-testid="cta-final-title">
            ¿Listo para aprobar tu TCAE?
          </h2>
          <p
            className="text-xl mb-8 opacity-90"
            data-testid="cta-final-subtitle"
          >
            Únete a las decenas de opositores que ya están preparándose con
            nosotros
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection("precio")}
              className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-accent text-accent-foreground text-lg font-semibold hover:bg-accent/90 transition-all transform hover:scale-105"
              data-testid="cta-final-primary"
            >
              Empezar ahora - 25€/mes
            </Button>
            <a
              href="https://wa.me/34640828654?text=Hola%20LORMAN%20ACADEMIA%2C%20tengo%20dudas%20antes%20de%20suscribirme"
              className="inline-flex items-center justify-center h-12 px-8 border-2 border-white text-white rounded-lg text-lg font-semibold hover:bg-white hover:text-primary transition-all"
              data-testid="cta-final-secondary"
            >
              <i className="fab fa-whatsapp mr-2"></i>Resolver dudas
            </a>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 contact-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-4xl font-bold mb-8"
              data-testid="section-contacto-title"
            >
              Contacto y soporte
            </h2>
            <div className="grid md:grid-cols-3 gap-8 items-stretch">
              <Card className="shadow-md h-full" data-testid="contact-whatsapp">
                <CardContent className="p-6 text-center flex flex-col h-full">
                  <i className="fab fa-whatsapp text-green-600 text-3xl mb-4"></i>
                  <h3 className="text-xl font-semibold mb-3">WhatsApp</h3>
                  <p
                    className="text-muted-foreground mb-4"
                    data-testid="contact-whatsapp-number"
                  >
                    640 828 654
                  </p>
                  <a
                    href="https://wa.me/34640828654?text=Hola%20LORMAN%20ACADEMIA%2C%20quisiera%20información"
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors mt-auto"
                    data-testid="button-contact-whatsapp"
                  >
                    Enviar mensaje
                  </a>
                </CardContent>
              </Card>
              <Card className="shadow-md h-full" data-testid="contact-email">
                <CardContent className="p-6 text-center flex flex-col h-full">
                  <i className="fas fa-envelope text-primary text-3xl mb-4"></i>
                  <h3 className="text-xl font-semibold mb-3">Email</h3>
                  <p
                    className="text-muted-foreground mb-4"
                    data-testid="contact-email-address"
                  >
                    manuelaprofesas@gmail.com
                  </p>
                  <a
                    href="mailto:manuelaprofesas@gmail.com"
                    className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors mt-auto"
                    data-testid="button-contact-email"
                  >
                    Enviar email
                  </a>
                </CardContent>
              </Card>
              <Card className="shadow-md h-full" data-testid="contact-support">
                <CardContent className="p-6 text-center flex flex-col h-full">
                  <i className="fas fa-headset text-accent text-3xl mb-4"></i>
                  <h3 className="text-xl font-semibold mb-3">
                    Soporte técnico
                  </h3>
                  <p className="text-muted-foreground mb-4">Disponible 24/7</p>
                  <div
                    className="bg-accent/10 text-accent px-4 py-2 rounded-lg font-semibold mt-auto"
                    data-testid="support-status"
                  >
                    Siempre activo
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold mb-4" data-testid="footer-logo">
            LORMAN ACADEMIA
          </div>
          <p className="text-gray-400 mb-4" data-testid="footer-description">
            Preparación profesional para TCAE SAS Andalucía
          </p>
          <div
            className="flex justify-center space-x-6 text-gray-400"
            data-testid="footer-copyright"
          >
            <span>© 2025 LORMAN ACADEMIA</span>
            <span>•</span>
            <span>Todos los derechos reservados</span>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/34640828654?text=Hola%20LORMAN%20ACADEMIA%2C%20quisiera%20información"
        className="whatsapp-float bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl hover:bg-green-600 transition-all transform hover:scale-110 shadow-lg"
        data-testid="whatsapp-float"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
}
