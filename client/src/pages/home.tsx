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
import { BookOpen, Menu, X } from "lucide-react";

export default function Home() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toast } = useToast();
  const virtualCampusUrl = "https://lorman-academia.vercel.app/aula";

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
  const STRIPE_LINK_MENSUAL = "STRIPE_LINK_MENSUAL";
  const STRIPE_LINK_PACK_COMPLETO = "STRIPE_LINK_PACK_COMPLETO";
  const PAYPAL_LINK_MENSUAL = "PAYPAL_LINK_MENSUAL";
  const PAYPAL_LINK_PACK_COMPLETO = "PAYPAL_LINK_PACK_COMPLETO";
  const bizumMensualUrl =
    "https://wa.me/34640828654?text=Hola%2C%20quiero%20apuntarme%20al%20curso%20mensual%20TCAE%20SAS%20de%2025%20%E2%82%AC%2Fmes%20con%20matr%C3%ADcula%20gratis.%20%C2%BFMe%20indic%C3%A1is%20c%C3%B3mo%20pagar%20por%20Bizum%3F";
  const bizumPackUrl =
    "https://wa.me/34640828654?text=Hola%2C%20quiero%20comprar%20el%20pack%20completo%20TCAE%20SAS%20por%20230%20%E2%82%AC%20con%20matr%C3%ADcula%20gratis.%20%C2%BFMe%20indic%C3%A1is%20c%C3%B3mo%20pagar%20por%20Bizum%3F";

  const topicSamples = [
    {
      title: "Constitución - parte 1",
      theme: "Tema 1",
      description: "Ejemplo de la parte común para preparar TCAE SAS Andalucía.",
      previewLines: [
        "La Constitución española de 1978 es la norma suprema del ordenamiento jurídico.",
        "Estructura: Título Preliminar, diez títulos, disposiciones y reforma constitucional.",
        "Puntos habituales: derechos fundamentales, Corona, Cortes Generales y organización territorial.",
      ],
    },
    {
      title: "Constitución - parte 2",
      theme: "Tema 1",
      description: "Segundo ejemplo del tema de Constitución para ver el tipo de resumen.",
      previewLines: [
        "Los derechos fundamentales tienen especial protección y aparecen entre los contenidos más preguntados.",
        "La organización territorial distingue municipios, provincias y comunidades autónomas.",
        "La reforma constitucional sigue procedimientos distintos según la materia afectada.",
      ],
    },
    {
      title: "Protección de datos - parte 1",
      theme: "Tema 5",
      description: "Repaso de puntos importantes de examen sobre RGPD y LOPDGDD.",
      previewLines: [
        "El tratamiento de datos de salud exige especial atención por tratarse de categorías especiales.",
        "Principios clave: licitud, lealtad, transparencia, minimización y confidencialidad.",
        "El consentimiento debe ser libre, específico, informado e inequívoco.",
      ],
    },
    {
      title: "Protección de datos - parte 2",
      theme: "Tema 5",
      description: "Ejemplo de repaso aplicado a datos sanitarios y confidencialidad.",
      previewLines: [
        "El personal sanitario debe proteger la intimidad del paciente en todo momento.",
        "Los datos deben tratarse solo para finalidades legítimas y con acceso limitado.",
        "La confidencialidad se mantiene también después de finalizar la relación laboral.",
      ],
    },
    {
      title: "Infecciones - parte 1",
      theme: "Tema 15",
      description: "Muestra del resumen orientado a preguntas frecuentes TCAE SAS.",
      previewLines: [
        "La cadena epidemiológica incluye agente, reservorio, puerta de salida, vía de transmisión y huésped.",
        "Las medidas de aislamiento reducen el riesgo de transmisión en centros sanitarios.",
        "Conceptos frecuentes: infección, colonización, asepsia, antisepsia y desinfección.",
      ],
    },
    {
      title: "Infecciones - parte 2",
      theme: "Tema 15",
      description: "Segundo ejemplo del tema de infecciones con enfoque tipo test.",
      previewLines: [
        "La higiene de manos es una medida esencial para cortar la transmisión.",
        "Las gotas de Pflügge y Wells se relacionan con transmisión aérea a corta distancia.",
        "El aislamiento se adapta al mecanismo de transmisión y al protocolo del centro.",
      ],
    },
    {
      title: "Residuos sanitarios - parte 1",
      theme: "Tema 16",
      description: "Ejemplo sobre gestión de residuos sanitarios.",
      previewLines: [
        "Los residuos sanitarios se clasifican según su riesgo y el tratamiento que requieren.",
        "La segregación correcta en origen evita accidentes y facilita la gestión posterior.",
        "Los residuos citostáticos requieren circuitos y contenedores específicos.",
      ],
    },
    {
      title: "Residuos sanitarios - parte 2",
      theme: "Tema 16",
      description: "Segundo ejemplo para ver el formato de repaso del tema.",
      previewLines: [
        "Repasa colores, contenedores y tiempos de almacenamiento más preguntados.",
        "Diferencia residuos asimilables, sanitarios específicos, punzantes y citotóxicos.",
        "En el curso se trabaja cada tema con test y simulacros tipo examen SAS.",
      ],
    },
    {
      title: "¿Quieres ver más contenido?",
      theme: "Curso TCAE SAS online",
      description:
        "Para acceder al material completo, test por temas y simulacros, apúntate al curso.",
      previewLines: [
        "Material completo organizado por temas.",
        "Test TCAE SAS y simulacros para practicar.",
        "Soporte por WhatsApp para resolver dudas antes de apuntarte.",
      ],
      isCourseCta: true,
    },
  ];

  const practiceQuestions = [
    {
      question: "¿Qué documento regula la prevención de riesgos laborales en España?",
      topic: "PRL",
      options: [
        "El Reglamento de Seguridad Privada",
        "El Estatuto de los Trabajadores",
        "La Ley 31/1995",
        "El Código Civil",
      ],
      correct: "C",
    },
    {
      question: "¿Cuál es la finalidad principal del aseo en un paciente encamado?",
      topic: "Higiene del paciente",
      options: [
        "Mantener la piel completamente seca",
        "Limpiar solamente las manos y los pies",
        "Evitar el crecimiento del cabello",
        "Eliminar secreciones y prevenir infecciones",
      ],
      correct: "D",
    },
    {
      question: "¿Qué característica debe tener el consentimiento del interesado según el RGPD?",
      topic: "Protección de datos",
      options: [
        "Debe ser tácito en todos los casos",
        "Debe ser revocable solo por orden judicial",
        "Debe ser libre, específico, informado e inequívoco",
        "Debe darse por escrito obligatoriamente",
      ],
      correct: "C",
    },
    {
      question: "¿Cuál es el tiempo máximo de almacenamiento de residuos citostáticos a temperatura ambiente?",
      topic: "Residuos sanitarios",
      options: ["24 horas", "7 días", "12 horas", "72 horas"],
      correct: "D",
    },
    {
      question: "¿Qué tipo de anemia produce el déficit de B9 o B12?",
      topic: "Nutrición y alimentación",
      options: [
        "Anemia ferropénica",
        "Anemia aplásica",
        "Anemia megaloblástica",
        "Anemia hemolítica",
      ],
      correct: "C",
    },
    {
      question: "Las gotas de Pflügge y Wells son ejemplos de transmisión:",
      topic: "Infecciones",
      options: [
        "Transplacentaria",
        "Por fómites",
        "Por vectores biológicos",
        "Aérea a corta distancia",
      ],
      correct: "D",
    },
    {
      question: "¿Qué profesional debe mantener la confidencialidad de la información sanitaria del paciente?",
      topic: "Protección de datos",
      options: [
        "Solo el personal médico",
        "Todo el personal que acceda a esa información",
        "Solo el personal administrativo",
        "Solo quien firme un documento adicional",
      ],
      correct: "B",
    },
    {
      question: "En higiene del paciente encamado, ¿qué zona se lava habitualmente en último lugar?",
      topic: "Higiene del paciente",
      options: ["Cara", "Espalda", "Zona genital", "Brazos"],
      correct: "C",
    },
    {
      question: "¿Cuál es una medida básica para prevenir infecciones asociadas a la asistencia sanitaria?",
      topic: "Infecciones",
      options: [
        "Usar siempre doble guante aunque no proceda",
        "Higiene de manos en los momentos indicados",
        "No ventilar nunca las habitaciones",
        "Compartir material entre pacientes si parece limpio",
      ],
      correct: "B",
    },
    {
      question: "¿Qué residuos deben depositarse en contenedores rígidos resistentes a la perforación?",
      topic: "Residuos sanitarios",
      options: [
        "Papel de oficina",
        "Ropa limpia",
        "Agujas y material punzante",
        "Restos de comida",
      ],
      correct: "C",
    },
    {
      question: "¿Qué artículo de la Constitución reconoce el derecho a la protección de la salud?",
      topic: "Constitución",
      options: ["Artículo 14", "Artículo 27", "Artículo 43", "Artículo 155"],
      correct: "C",
    },
    {
      question: "¿Qué significa que un test sea tipo examen en la preparación TCAE SAS?",
      topic: "Test TCAE SAS",
      options: [
        "Que incluye preguntas sin respuestas",
        "Que entrena formato, dificultad y temas frecuentes del examen",
        "Que se hace solo una vez al año",
        "Que no permite revisar fallos",
      ],
      correct: "B",
    },
    {
      question: "En la movilización de pacientes, ¿qué debe priorizar el TCAE?",
      topic: "Movilización",
      options: [
        "La rapidez por encima de todo",
        "La seguridad del paciente y la ergonomía profesional",
        "Mover siempre sin ayuda",
        "Evitar explicar el procedimiento",
      ],
      correct: "B",
    },
    {
      question: "¿Qué documento recoge derechos y deberes en el ámbito sanitario andaluz?",
      topic: "SAS Andalucía",
      options: [
        "Normativa sanitaria y cartas de derechos aplicables",
        "Solo el Código Penal",
        "Solo el Estatuto de los Trabajadores",
        "Una norma municipal sin relación sanitaria",
      ],
      correct: "A",
    },
    {
      question: "¿Para qué sirve revisar los fallos después de un simulacro TCAE SAS?",
      topic: "Simulacros TCAE SAS",
      options: [
        "Para memorizar solo la letra correcta",
        "Para detectar temas débiles y reforzar el estudio",
        "Para evitar estudiar teoría",
        "Para cambiar las respuestas al azar",
      ],
      correct: "B",
    },
    {
      question: "¿Qué vía de transmisión se relaciona con objetos contaminados?",
      topic: "Infecciones",
      options: ["Fómites", "Vector biológico", "Transplacentaria", "Herencia genética"],
      correct: "A",
    },
    {
      question: "¿Qué debe hacerse si hay una duda sobre la clasificación de un residuo sanitario?",
      topic: "Residuos sanitarios",
      options: [
        "Depositarlo en cualquier bolsa",
        "Consultar el protocolo del centro",
        "Mezclarlo con residuos urbanos",
        "Guardarlo en el uniforme",
      ],
      correct: "B",
    },
    {
      question: "¿Cuál es una ventaja de preparar TCAE SAS online si trabajas?",
      topic: "Plan online",
      options: [
        "No necesitas practicar test",
        "Puedes organizar estudio, clases grabadas y repasos con flexibilidad",
        "Solo estudias el día antes",
        "Evitas hacer simulacros",
      ],
      correct: "B",
    },
  ];

  const [sampleIndex, setSampleIndex] = useState(0);
  const [dailyPracticeQuestions] = useState(() =>
    [...practiceQuestions].sort(() => Math.random() - 0.5).slice(0, 10)
  );
  const [practiceAnswers, setPracticeAnswers] = useState<Record<number, string>>({});
  const [practiceScore, setPracticeScore] = useState<number | null>(null);
  const currentSample = topicSamples[sampleIndex];
  const answeredPracticeQuestions = dailyPracticeQuestions.filter(
    (_, index) => practiceAnswers[index]
  ).length;
  const checkPracticeTest = () => {
    const score = dailyPracticeQuestions.reduce((total, item, index) => {
      return total + (practiceAnswers[index] === item.correct ? 1 : 0);
    }, 0);
    setPracticeScore(score);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setMobileMenuOpen(false);
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
            <div className="text-xl sm:text-2xl font-bold text-primary" data-testid="logo">
              LORMAN ACADEMIA
            </div>
            <div className="hidden xl:flex items-center space-x-6">
              <button
                onClick={() => scrollToSection("material")}
                className="hover:text-primary transition-colors"
                data-testid="nav-material"
              >
                Material
              </button>
              <button
                onClick={() => scrollToSection("simulacros")}
                className="hover:text-primary transition-colors"
                data-testid="nav-incluye"
              >
                Test y simulacros
              </button>
              <button
                onClick={() => scrollToSection("metodo")}
                className="hover:text-primary transition-colors"
                data-testid="nav-metodo"
              >
                Plan online
              </button>
              <button
                onClick={() => scrollToSection("bolsa")}
                className="hover:text-primary transition-colors"
                data-testid="nav-bolsa"
              >
                Bolsa SAS
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
              <a
                href={virtualCampusUrl}
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 font-semibold text-accent-foreground shadow-sm transition-colors hover:bg-accent/90"
                data-testid="nav-aula-virtual"
              >
                <BookOpen className="h-4 w-4" />
                Aula virtual
              </a>
            </div>
            <div className="flex items-center gap-2 xl:hidden">
              <a
                href={virtualCampusUrl}
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-3 py-2 text-sm font-semibold text-accent-foreground shadow-sm transition-colors hover:bg-accent/90"
                data-testid="mobile-aula-virtual"
              >
                <BookOpen className="h-4 w-4" />
                Aula
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen((open) => !open)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-white text-primary shadow-sm"
                aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={mobileMenuOpen}
                data-testid="mobile-menu-toggle"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
            <a
              href="https://wa.me/34640828654?text=Hola%20LORMAN%20ACADEMIA%2C%20quisiera%20información"
              className="hidden rounded-lg bg-primary px-4 py-2 text-primary-foreground transition-colors hover:bg-primary/90 xl:inline-flex"
              data-testid="nav-whatsapp"
            >
              <i className="fab fa-whatsapp mr-2"></i>Preparar TCAE SAS
            </a>
          </div>
          {mobileMenuOpen && (
            <div
              className="xl:hidden border-t border-border bg-white py-3 shadow-sm"
              data-testid="mobile-menu"
            >
              <div className="grid gap-1">
                <button
                  onClick={() => scrollToSection("material")}
                  className="rounded-md px-3 py-2 text-left font-medium hover:bg-muted"
                >
                  Material
                </button>
                <button
                  onClick={() => scrollToSection("simulacros")}
                  className="rounded-md px-3 py-2 text-left font-medium hover:bg-muted"
                >
                  Test y simulacros
                </button>
                <button
                  onClick={() => scrollToSection("metodo")}
                  className="rounded-md px-3 py-2 text-left font-medium hover:bg-muted"
                >
                  Plan online
                </button>
                <button
                  onClick={() => scrollToSection("bolsa")}
                  className="rounded-md px-3 py-2 text-left font-medium hover:bg-muted"
                >
                  Bolsa SAS
                </button>
                <button
                  onClick={() => scrollToSection("precio")}
                  className="rounded-md px-3 py-2 text-left font-medium hover:bg-muted"
                >
                  Suscripción
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="rounded-md px-3 py-2 text-left font-medium hover:bg-muted"
                >
                  FAQ
                </button>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="rounded-md px-3 py-2 text-left font-medium hover:bg-muted"
                >
                  Contacto
                </button>
                <a
                  href={virtualCampusUrl}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 font-semibold text-accent-foreground shadow-sm hover:bg-accent/90"
                  data-testid="mobile-menu-aula-virtual"
                >
                  <BookOpen className="h-4 w-4" />
                  Aula virtual
                </a>
              </div>
            </div>
          )}
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
              Academia online para preparar TCAE SAS Andalucía
            </h1>
            <p
              className="text-xl md:text-2xl mb-8 opacity-90"
              data-testid="hero-subtitle"
            >
              Prepara la oposición TCAE SAS y la Bolsa SAS TCAE con clases en
              directo, temario organizado, test por tema y simulacros tipo
              examen del Servicio Andaluz de Salud.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                onClick={() => scrollToSection("precio")}
                className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-accent text-accent-foreground text-lg font-semibold hover:bg-accent/90 transition-all"
                data-testid="hero-cta-primary"
              >
                Empieza a preparar TCAE SAS
              </Button>
              <a
                href="https://wa.me/34640828654?text=Hola%20LORMAN%20ACADEMIA%2C%20quisiera%20información"
                className="inline-flex items-center justify-center h-12 px-8 border-2 border-white text-white rounded-lg text-lg font-semibold hover:bg-white hover:text-primary transition-all"
                data-testid="hero-cta-secondary"
              >
                <i className="fab fa-whatsapp mr-2"></i>Ver curso TCAE SAS online
              </a>
              <a
                href="/test-tcae-sas"
                className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-white text-primary text-lg font-semibold hover:bg-white/90 transition-all"
                data-testid="hero-cta-practice"
              >
                Practica con nosotros
              </a>
              <a
                href={virtualCampusUrl}
                className="inline-flex items-center justify-center h-12 px-8 rounded-lg border-2 border-white text-white text-lg font-semibold hover:bg-white hover:text-primary transition-all"
                data-testid="hero-cta-aula-virtual"
              >
                Aula virtual
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

      {/* SEO TCAE SAS Andalucía */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-primary font-semibold uppercase tracking-wide mb-3">
                TCAE SAS Andalucía online
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Curso online para preparar TCAE SAS, test y Bolsa SAS TCAE
              </h2>
              <p className="text-lg text-muted-foreground">
                LORMAN ACADEMIA ayuda a opositores que buscan TCAE SAS,
                TCAE Andalucía, academia TCAE online, test TCAE SAS,
                simulacros TCAE SAS y orientación para Bolsa SAS TCAE.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    Preparar TCAE SAS online
                  </h3>
                  <p className="text-muted-foreground">
                    Plan de estudio para la oposición TCAE SAS Andalucía con
                    temario organizado, clases, resúmenes y seguimiento para
                    estudiar desde casa aunque trabajes a turnos.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    Test y simulacros TCAE SAS
                  </h3>
                  <p className="text-muted-foreground">
                    Práctica por temas, preguntas tipo examen, corrección de
                    fallos y simulacros para preparar el formato del Servicio
                    Andaluz de Salud con más seguridad.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    Bolsa SAS TCAE en Andalucía
                  </h3>
                  <p className="text-muted-foreground">
                    Orientación para aspirantes TCAE en Andalucía, Sevilla,
                    Málaga, Cádiz, Granada, Córdoba, Jaén, Huelva y Almería,
                    con dudas frecuentes sobre méritos y documentación.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
              {[
                "TCAE SAS Andalucía",
                "oposición TCAE SAS",
                "academia TCAE online",
                "curso TCAE SAS online",
                "test TCAE SAS",
                "simulacros TCAE SAS",
                "Bolsa SAS TCAE",
              ].map((term) => (
                <span
                  key={term}
                  className="rounded-full bg-primary/10 px-4 py-2 font-semibold text-primary"
                >
                  {term}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/test-tcae-sas"
                className="inline-flex items-center justify-center min-h-12 px-6 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90"
              >
                Hacer test TCAE SAS por tema
              </a>
              <Button
                onClick={() => scrollToSection("precio")}
                className="min-h-12 px-6"
              >
                Ver precio del curso TCAE SAS
              </Button>
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
            Qué incluye el curso TCAE SAS online
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
                <h3 className="text-xl font-semibold mb-3">Clases en vídeo TCAE SAS</h3>
                <p className="text-muted-foreground">
                  Explicación completa de cada tema con ejemplos prácticos,
                  casos reales y enfoque de oposición TCAE SAS.
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
                  Tema completo, resumen ejecutivo y esquemas para preparar
                  TCAE SAS Andalucía con un material claro y ordenado.
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
                  Técnicas de memorización específicas para fijar conceptos
                  habituales en test TCAE SAS y preguntas oficiales.
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
                  Sistema visual por epígrafes para organizar legislación,
                  cuidados, procedimientos y contenidos del SAS.
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
                  Visualización gráfica de conceptos, relaciones y repasos para
                  avanzar con una planificación sencilla.
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
                  +200 preguntas tipo examen TCAE SAS por tema
                </h3>
                <p className="text-muted-foreground">
                  Preguntas redactadas con formato de oposición, orientadas a
                  entrenar comprensión, rapidez y repaso de fallos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Material real del curso */}
      <section id="material" className="py-20 dynamic-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-4xl font-bold mb-6"
              data-testid="section-material-title"
            >
              Ejemplo de partes de temas
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Mira una muestra breve del material de estudio: dos partes de
              cada tema de ejemplo, suficientes para ver el formato sin mostrar
              el PDF completo en la home.
            </p>
          </div>

          <Card className="shadow-lg max-w-5xl mx-auto" data-testid="topic-carousel">
            <CardContent className="p-6">
              <div className="grid lg:grid-cols-[1fr_320px] gap-6 items-stretch">
                <div
                  className={`rounded-lg overflow-hidden border min-h-[420px] p-6 ${
                    currentSample.isCourseCta
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-muted/40 border-border"
                  }`}
                  data-testid="topic-sample-preview"
                >
                  <div
                    className={`h-full rounded-md p-6 shadow-sm ${
                      currentSample.isCourseCta
                        ? "bg-white/10 border border-white/20"
                        : "bg-white border border-border"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div>
                        <p
                          className={`text-sm font-semibold ${
                            currentSample.isCourseCta
                              ? "text-white/80"
                              : "text-primary"
                          }`}
                        >
                          {currentSample.theme}
                        </p>
                        <h3 className="text-2xl font-bold mt-1">
                          {currentSample.title}
                        </h3>
                      </div>
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          currentSample.isCourseCta
                            ? "bg-white text-primary"
                            : "bg-primary/10 text-primary"
                        }`}
                      >
                        <i
                          className={
                            currentSample.isCourseCta
                              ? "fas fa-graduation-cap"
                              : "fas fa-file-alt"
                          }
                        ></i>
                      </div>
                    </div>
                    <div className="space-y-4">
                      {currentSample.previewLines.map((line) => (
                        <p
                          key={line}
                          className={`leading-relaxed ${
                            currentSample.isCourseCta
                              ? "text-white/90"
                              : "text-muted-foreground"
                          }`}
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                    {currentSample.isCourseCta && (
                      <button
                        type="button"
                        onClick={() => scrollToSection("precio")}
                        className="mt-8 inline-flex items-center justify-center min-h-12 px-6 rounded-lg bg-white text-primary font-semibold hover:bg-white/90 transition-colors"
                        data-testid="topic-course-cta"
                      >
                        Ver curso TCAE SAS online
                      </button>
                    )}
                  </div>
                </div>
                <div className="flex flex-col justify-between text-left">
                  <div>
                    <p className="text-sm font-semibold text-primary mb-2">
                      Ejemplo {sampleIndex + 1} de {topicSamples.length}
                    </p>
                    <h3 className="text-2xl font-bold mb-3">
                      {currentSample.title}
                    </h3>
                    <p className="text-sm font-semibold text-primary mb-3">
                      {currentSample.theme}
                    </p>
                    <p className="text-muted-foreground mb-6">
                      {currentSample.description}
                    </p>
                    <div className="rounded-md bg-muted/60 border border-border p-3 text-sm text-muted-foreground mb-6">
                      Mostramos solo fragmentos de ejemplo. No se carga el PDF
                      completo en la home; el material completo está dentro del
                      curso.
                    </div>
                    <div className="space-y-2">
                      {topicSamples.map((sample, index) => (
                        <button
                          key={`${sample.title}-${index}`}
                          type="button"
                          onClick={() => setSampleIndex(index)}
                          className={`w-full text-left px-3 py-2 rounded-md border transition-colors ${
                            sampleIndex === index
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border bg-white hover:bg-muted"
                          }`}
                          data-testid={`topic-sample-tab-${index + 1}`}
                        >
                          {sample.title}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3 mt-6">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() =>
                        setSampleIndex(
                          (sampleIndex - 1 + topicSamples.length) %
                            topicSamples.length
                        )
                      }
                      className="flex-1"
                      data-testid="carousel-prev"
                    >
                      Anterior
                    </Button>
                    <Button
                      type="button"
                      onClick={() =>
                        setSampleIndex((sampleIndex + 1) % topicSamples.length)
                      }
                      className="flex-1"
                      data-testid="carousel-next"
                    >
                      Siguiente
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Práctica con preguntas reales */}
      <section id="practica" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-4xl font-bold mb-6"
              data-testid="section-practica-title"
            >
              Practica con preguntas frecuentes de TCAE SAS
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Cada vez que actualices la página verás 10 preguntas diferentes.
              Cada acierto suma 1 punto. Responde, pulsa comprobar y revisa tu
              nota al momento.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {dailyPracticeQuestions.map((item, questionIndex) => (
              <Card className="shadow-md" key={item.question} data-testid={`practice-question-${questionIndex + 1}`}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                    <h3 className="text-xl font-semibold">
                      {questionIndex + 1}. {item.question}
                    </h3>
                    <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full whitespace-nowrap">
                      {item.topic}
                    </span>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {item.options.map((option, optionIndex) => {
                      const letter = String.fromCharCode(65 + optionIndex);
                      const selected = practiceAnswers[questionIndex] === letter;
                      const checked = practiceScore !== null;
                      const isCorrect = item.correct === letter;
                      const isWrongSelected = checked && selected && !isCorrect;
                      return (
                        <label
                          key={option}
                          className={`flex items-start gap-3 rounded-lg border p-3 cursor-pointer transition-colors ${
                            checked && isCorrect
                              ? "border-green-600 bg-green-50 text-green-900"
                              : isWrongSelected
                                ? "border-red-500 bg-red-50 text-red-900"
                                : selected
                              ? "border-primary bg-primary/10"
                              : "border-border bg-white hover:bg-muted"
                          }`}
                        >
                          <input
                            type="radio"
                            name={`practice-${questionIndex}`}
                            value={letter}
                            checked={selected}
                            onChange={() =>
                              {
                                setPracticeAnswers({
                                  ...practiceAnswers,
                                  [questionIndex]: letter,
                                });
                                setPracticeScore(null);
                              }
                            }
                            className="mt-1"
                            data-testid={`practice-${questionIndex + 1}-${letter}`}
                          />
                          <span>
                            <strong>{letter}.</strong> {option}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="text-center pt-4">
              <button
                type="button"
                onClick={checkPracticeTest}
                className="inline-flex items-center justify-center min-h-12 px-8 py-3 rounded-lg bg-primary text-primary-foreground text-lg font-semibold hover:bg-primary/90 transition-colors"
                data-testid="practice-check-score"
              >
                Comprobar test
              </button>
              <p className="text-sm text-muted-foreground mt-3">
                Has respondido {answeredPracticeQuestions} de 10 preguntas.
              </p>
              {practiceScore !== null && (
                <div
                  className="mt-8 rounded-lg border border-primary/20 bg-primary/5 p-6 text-left"
                  data-testid="practice-score-result"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-primary mb-2">
                        Resultado del test
                      </p>
                      <h3 className="text-3xl font-bold">
                        Tu nota: {practiceScore}/10
                      </h3>
                      <p className="text-muted-foreground mt-2">
                        Revisa en verde las respuestas correctas y en rojo las
                        que has marcado mal.
                      </p>
                    </div>
                    <a
                      href="https://wa.me/34640828654?text=Hola%20LORMAN%20ACADEMIA%2C%20he%20hecho%20el%20test%20gratis%20TCAE%20SAS%20y%20quiero%20saber%20mis%20fallos%20y%20apuntarme%20al%20curso"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center min-h-12 px-6 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors"
                      data-testid="practice-score-whatsapp"
                    >
                      <i className="fab fa-whatsapp mr-2"></i>Saber mis fallos y apuntarme
                    </a>
                  </div>
                </div>
              )}
              <div className="mt-6">
                <a
                  href="/test-tcae-sas"
                  className="inline-flex items-center justify-center min-h-12 px-8 py-3 rounded-lg border border-primary text-primary text-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
                  data-testid="practice-topic-tests-link"
                >
                  Practica con nosotros por temas
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Test y simulacros */}
      <section id="simulacros" className="py-20 dynamic-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-4xl font-bold mb-6"
              data-testid="section-simulacros-title"
            >
              Test y simulacros TCAE SAS tipo examen
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Practica con test TCAE SAS por tema y simulacros TCAE SAS
              completos para entrenar tiempo, dificultad, lectura de preguntas
              y control de errores antes de la convocatoria.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-md" data-testid="simulacro-test-tema">
              <CardContent className="p-6 text-center">
                <i className="fas fa-list-check text-primary text-4xl mb-4"></i>
                <h3 className="text-xl font-semibold mb-3">Test por tema</h3>
                <p className="text-muted-foreground">
                  Autoevaluaciones para consolidar cada bloque del temario
                  TCAE SAS Andalucía y detectar fallos a tiempo.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md" data-testid="simulacro-examen">
              <CardContent className="p-6 text-center">
                <i className="fas fa-stopwatch text-primary text-4xl mb-4"></i>
                <h3 className="text-xl font-semibold mb-3">Simulacros completos</h3>
                <p className="text-muted-foreground">
                  Entrenamientos tipo examen para medir progreso, gestionar el
                  tiempo y llegar con confianza a la oposición TCAE SAS.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md" data-testid="simulacro-fallos">
              <CardContent className="p-6 text-center">
                <i className="fas fa-chart-line text-primary text-4xl mb-4"></i>
                <h3 className="text-xl font-semibold mb-3">Repaso de fallos</h3>
                <p className="text-muted-foreground">
                  Revisión de preguntas frecuentes, errores habituales y puntos
                  clave para mejorar la puntuación semana a semana.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-10">
            <a
              href="https://wa.me/34640828654?text=Hola%20LORMAN%20ACADEMIA%2C%20quiero%20hacer%20un%20simulacro%20TCAE%20SAS"
              className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-primary text-primary-foreground text-lg font-semibold hover:bg-primary/90 transition-colors"
              data-testid="cta-simulacro"
            >
              Quiero hacer un simulacro gratis
            </a>
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
              Plan de estudio online para preparar TCAE SAS
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="shadow-md" data-testid="calendar-before">
                <CardContent className="p-8 text-center">
                  <i className="fas fa-calendar-check text-primary text-4xl mb-4"></i>
                  <h3 className="text-xl font-semibold mb-4">
                    Plan flexible si la convocatoria sale antes
                  </h3>
                  <p className="text-muted-foreground">
                    Ajustamos el calendario para reforzar lo más importante del
                    temario TCAE SAS y cubrir lo exigido en la convocatoria
                    oficial.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-md" data-testid="calendar-after">
                <CardContent className="p-8 text-center">
                  <i className="fas fa-clipboard-list text-primary text-4xl mb-4"></i>
                  <h3 className="text-xl font-semibold mb-4">
                    Más simulacros si sale después
                  </h3>
                  <p className="text-muted-foreground">
                    Dedicamos los meses siguientes a test TCAE SAS, repasos
                    guiados y simulacros completos para llegar mejor preparado.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="bg-accent/20 border border-accent/30 rounded-lg p-6">
              <p className="text-muted-foreground text-sm">
                <i className="fas fa-info-circle text-accent mr-2"></i>
                <strong>Plan online:</strong> estudia desde Sevilla, Málaga,
                Cádiz, Granada, Córdoba, Jaén, Huelva, Almería o cualquier
                punto de Andalucía con clases grabadas, PDFs, esquemas y
                seguimiento por WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bolsa SAS TCAE */}
      <section id="bolsa" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-4xl font-bold mb-6"
              data-testid="section-bolsa-title"
            >
              Ayuda con Bolsa SAS TCAE
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Además de preparar la oposición TCAE SAS, te orientamos para
              organizar la Bolsa SAS TCAE: documentación, méritos, plazos y
              dudas habituales del proceso en el Servicio Andaluz de Salud.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-md" data-testid="bolsa-meritos">
              <CardContent className="p-6 text-center">
                <i className="fas fa-folder-open text-primary text-4xl mb-4"></i>
                <h3 className="text-xl font-semibold mb-3">Méritos y documentación</h3>
                <p className="text-muted-foreground">
                  Apoyo para revisar qué documentación necesitas tener
                  localizada y cómo ordenar tus méritos.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md" data-testid="bolsa-sas">
              <CardContent className="p-6 text-center">
                <i className="fas fa-hospital-user text-primary text-4xl mb-4"></i>
                <h3 className="text-xl font-semibold mb-3">Enfoque SAS Andalucía</h3>
                <p className="text-muted-foreground">
                  Orientación pensada para TCAE en Andalucía, con menciones al
                  SAS y a las dudas más comunes de quienes quieren trabajar en
                  sanidad pública.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md" data-testid="bolsa-acompanamiento">
              <CardContent className="p-6 text-center">
                <i className="fas fa-comments text-primary text-4xl mb-4"></i>
                <h3 className="text-xl font-semibold mb-3">Acompañamiento online</h3>
                <p className="text-muted-foreground">
                  Resolvemos dudas por WhatsApp para que no prepares la Bolsa
                  SAS TCAE a ciegas ni pierdas tiempo con trámites.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Precio y métodos de pago */}
      <section id="precio" className="py-20 pricing-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2
              className="text-4xl font-bold mb-4"
              data-testid="section-precio-title"
            >
              Empieza a preparar TCAE SAS Andalucía con matrícula gratis
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Elige cómo quieres prepararte: mes a mes o con acceso completo al
              curso TCAE SAS online.
            </p>

            <div className="grid lg:grid-cols-2 gap-8 mb-10 text-left">
              <Card className="shadow-lg h-full" data-testid="plan-mensual">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <h3 className="text-2xl font-bold">Curso mensual TCAE SAS</h3>
                    <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      Matrícula gratis
                    </span>
                  </div>
                  <div className="text-5xl font-bold text-primary mb-2">
                    25 €
                    <span className="text-lg text-muted-foreground">/mes</span>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Precio curso TCAE SAS para preparar TCAE SAS online sin
                    permanencia.
                  </p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {[
                      "Acceso al material del curso",
                      "Test por temas",
                      "Simulacros TCAE SAS",
                      "Muestras de material",
                      "Preguntas tipo examen",
                      "Soporte por WhatsApp",
                    ].map((feature) => (
                      <li className="flex items-start" key={feature}>
                        <i className="fas fa-check text-primary mr-3 mt-1"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={STRIPE_LINK_MENSUAL}
                    className="inline-flex items-center justify-center h-12 px-6 rounded-lg bg-primary text-primary-foreground text-lg font-semibold hover:bg-primary/90 transition-colors"
                    data-testid="button-plan-mensual"
                  >
                    Empezar por 25 €/mes
                  </a>
                </CardContent>
              </Card>

              <Card
                className="shadow-xl h-full border-2 border-primary"
                data-testid="plan-pack-completo"
              >
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <h3 className="text-2xl font-bold">Pack completo TCAE SAS</h3>
                    <span className="text-sm font-semibold text-white bg-primary px-3 py-1 rounded-full">
                      Mejor opción
                    </span>
                  </div>
                  <div className="text-5xl font-bold text-primary mb-2">
                    230 €
                    <span className="text-lg text-muted-foreground"> pago único</span>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Academia TCAE SAS Andalucía con acceso completo al curso,
                    test TCAE SAS y material de apoyo.
                  </p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {[
                      "Acceso completo al curso",
                      "Todos los temas disponibles",
                      "Test y simulacros",
                      "Material de apoyo",
                      "Preparación específica SAS Andalucía",
                      "Soporte por WhatsApp",
                    ].map((feature) => (
                      <li className="flex items-start" key={feature}>
                        <i className="fas fa-check text-primary mr-3 mt-1"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={STRIPE_LINK_PACK_COMPLETO}
                    className="inline-flex items-center justify-center h-12 px-6 rounded-lg bg-accent text-accent-foreground text-lg font-semibold hover:bg-accent/90 transition-colors"
                    data-testid="button-plan-pack"
                  >
                    Comprar pack completo
                  </a>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-md mb-8" data-testid="trust-block">
              <CardContent className="p-6">
                <p className="text-lg font-semibold mb-5">
                  Antes de apuntarte puedes ver muestras reales del curso,
                  practicar con preguntas tipo test y escribirnos por WhatsApp
                  para resolver dudas.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-left">
                  {[
                    "Matrícula gratis",
                    "Preparación online específica TCAE SAS Andalucía",
                    "Material real visible antes de apuntarte",
                    "Test interactivos",
                    "Contacto directo por WhatsApp",
                    "Pago mensual o pack completo",
                  ].map((item) => (
                    <div className="flex items-center" key={item}>
                      <i className="fas fa-check-circle text-primary mr-3"></i>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md" data-testid="payment-methods">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6">Formas de pago disponibles</h3>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="rounded-lg border border-border p-4 bg-white">
                    <i className="fas fa-credit-card text-primary text-3xl mb-3"></i>
                    <h4 className="font-semibold mb-3">Tarjeta bancaria</h4>
                    <div className="space-y-2">
                      <a
                        href={STRIPE_LINK_MENSUAL}
                        className="block w-full rounded-md bg-primary text-primary-foreground px-3 py-2 text-sm font-semibold hover:bg-primary/90"
                        data-testid="stripe-mensual"
                      >
                        Mensual
                      </a>
                      <a
                        href={STRIPE_LINK_PACK_COMPLETO}
                        className="block w-full rounded-md bg-primary text-primary-foreground px-3 py-2 text-sm font-semibold hover:bg-primary/90"
                        data-testid="stripe-pack"
                      >
                        Pack completo
                      </a>
                    </div>
                  </div>

                  <div className="rounded-lg border border-border p-4 bg-white">
                    <i className="fas fa-mobile-screen-button text-primary text-3xl mb-3"></i>
                    <h4 className="font-semibold mb-3">Bizum</h4>
                    <div className="space-y-2">
                      <a
                        href={bizumMensualUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full rounded-md bg-emerald-600 text-white px-3 py-2 text-sm font-semibold hover:bg-emerald-700"
                        data-testid="bizum-mensual"
                      >
                        Bizum mensual
                      </a>
                      <a
                        href={bizumPackUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full rounded-md bg-emerald-600 text-white px-3 py-2 text-sm font-semibold hover:bg-emerald-700"
                        data-testid="bizum-pack"
                      >
                        Bizum pack
                      </a>
                    </div>
                  </div>

                  <div className="rounded-lg border border-border p-4 bg-white">
                    <i className="fab fa-paypal text-primary text-3xl mb-3"></i>
                    <h4 className="font-semibold mb-3">PayPal</h4>
                    <div className="space-y-2">
                      <a
                        href={PAYPAL_LINK_MENSUAL}
                        className="block w-full rounded-md bg-blue-600 text-white px-3 py-2 text-sm font-semibold hover:bg-blue-700"
                        data-testid="paypal-mensual"
                      >
                        PayPal mensual
                      </a>
                      <a
                        href={PAYPAL_LINK_PACK_COMPLETO}
                        className="block w-full rounded-md bg-blue-600 text-white px-3 py-2 text-sm font-semibold hover:bg-blue-700"
                        data-testid="paypal-pack"
                      >
                        PayPal pack
                      </a>
                    </div>
                  </div>

                  <div className="rounded-lg border border-border p-4 bg-white">
                    <i className="fab fa-whatsapp text-green-600 text-3xl mb-3"></i>
                    <h4 className="font-semibold mb-3">Dudas antes de pagar</h4>
                    <a
                      href="https://wa.me/34640828654?text=Hola%2C%20quiero%20resolver%20dudas%20antes%20de%20apuntarme%20al%20curso%20TCAE%20SAS."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full rounded-md bg-green-600 text-white px-3 py-2 text-sm font-semibold hover:bg-green-700"
                      data-testid="payment-whatsapp-dudas"
                    >
                      Preguntar por WhatsApp
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="precio-legacy" className="hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-4xl font-bold mb-8"
              data-testid="section-precio-title-legacy"
            >
              Ver curso TCAE SAS online
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
                    mensuales TCAE SAS (1 común + 2 específicos)
                  </li>
                  <li
                    className="flex items-center"
                    data-testid="feature-questions"
                  >
                    <i className="fas fa-check text-primary mr-3"></i>+200
                    preguntas tipo examen TCAE SAS por tema
                  </li>
                  <li
                    className="flex items-center"
                    data-testid="feature-total-questions"
                  >
                    <i className="fas fa-check text-primary mr-3"></i>+8000
                    preguntas y test TCAE SAS en total
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
                    extra en directo para dudas y simulacros
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

            <div className="flex flex-col md:flex-row md:flex-wrap gap-6 max-w-4xl mx-auto items-stretch">
              {/* PayPal */}
              <div className="md:basis-1/3">
                <Card data-testid="payment-paypal" className="self-stretch">
                  <CardContent className="p-6 flex flex-col items-center justify-center gap-4 text-center min-h-[260px]">
                    <h3 className="text-xl font-semibold">PayPal</h3>
                    <Button
                      className="w-full h-10 bg-blue-600 text-white hover:bg-blue-700"
                      data-testid="button-paypal-temp"
                    >
                      <i className="fab fa-paypal mr-2"></i>Pagar con PayPal
                    </Button>
                  </CardContent>
                </Card>
              </div>

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
              <div className="md:basis-1/3">
                <Card data-testid="payment-bizum" className="self-stretch">
                  <CardContent className="p-6 flex flex-col items-center justify-center gap-4 text-center min-h-[260px]">
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
              </div>

              {/* Transferencia */}
              <div className="md:basis-1/3">
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
                    <div className="w-full flex items-center justify-between text-sm">
                      <button
                        onClick={copyIBAN}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-100 text-slate-700 hover:bg-slate-200"
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
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                        data-testid="button-transfer-justificante"
                      >
                        <i className="fab fa-whatsapp"></i>
                        Enviar justificante
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
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
            Opiniones de alumnos que preparan TCAE SAS
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
                  "Las técnicas de memorización me ayudan a estudiar el temario
                  TCAE SAS con más orden y a llegar mejor a los test."
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
                  "Los test y simulacros TCAE SAS me sirven para controlar el
                  tiempo y sentirme más preparada para la oposición."
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
                  "Trabajo a turnos y puedo estudiar online con clases grabadas.
                  Las dudas de Bolsa SAS TCAE también me las aclaran rápido."
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
                  ¿Cómo preparar la oposición TCAE SAS?
                </AccordionTrigger>
                <AccordionContent data-testid="faq-answer-1">
                  Para preparar la oposición TCAE SAS conviene combinar temario
                  específico del Servicio Andaluz de Salud, planificación
                  semanal, test TCAE SAS por tema, repaso de errores y
                  simulacros tipo examen. Nuestro método online organiza esos
                  pasos para que estudies con una ruta clara.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger
                  className="text-left"
                  data-testid="faq-question-2"
                >
                  ¿Esta academia sirve para TCAE SAS Andalucía?
                </AccordionTrigger>
                <AccordionContent data-testid="faq-answer-2">
                  Sí. Lorman Academia está enfocada en TCAE SAS Andalucía, con
                  contenidos orientados al SAS, al temario de la oposición y a
                  personas que quieren trabajar en el Servicio Andaluz de Salud.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger
                  className="text-left"
                  data-testid="faq-question-3"
                >
                  ¿Incluye test y simulacros TCAE SAS?
                </AccordionTrigger>
                <AccordionContent data-testid="faq-answer-3">
                  Sí. Incluye test TCAE SAS por tema, autoevaluaciones con
                  preguntas tipo examen y simulacros TCAE SAS completos para
                  practicar ritmo, dificultad y repaso de fallos.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger
                  className="text-left"
                  data-testid="faq-question-4"
                >
                  ¿Puedo estudiar online si trabajo?
                </AccordionTrigger>
                <AccordionContent data-testid="faq-answer-4">
                  Sí. Puedes estudiar online con vídeos, PDFs, esquemas, clases
                  grabadas y apoyo por WhatsApp. El plan está pensado para
                  compatibilizar la preparación TCAE SAS con turnos, familia o
                  trabajo.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger
                  className="text-left"
                  data-testid="faq-question-5"
                >
                  ¿Ayudáis con la Bolsa SAS TCAE?
                </AccordionTrigger>
                <AccordionContent data-testid="faq-answer-5">
                  Sí. Te orientamos con la Bolsa SAS TCAE para organizar
                  documentación, méritos y dudas frecuentes del proceso, siempre
                  de forma complementaria a la preparación de la oposición.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger
                  className="text-left"
                  data-testid="faq-question-6"
                >
                  ¿Cuánto tiempo necesito para preparar TCAE SAS?
                </AccordionTrigger>
                <AccordionContent data-testid="faq-answer-6">
                  Depende de tu nivel inicial, horas disponibles y fecha de
                  convocatoria. Como referencia, trabajamos con una planificación
                  progresiva de varios meses, combinando estudio, repasos, test
                  y simulacros TCAE SAS.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left">
                  ¿La matrícula es gratis?
                </AccordionTrigger>
                <AccordionContent>
                  Sí, actualmente la matrícula es gratis. Solo pagas la
                  modalidad que elijas: 25 €/mes o pack completo de 230 €.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger className="text-left">
                  ¿Cuánto cuesta preparar TCAE SAS online?
                </AccordionTrigger>
                <AccordionContent>
                  Puedes empezar con el curso mensual por 25 €/mes o elegir el
                  pack completo por 230 € en pago único.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9">
                <AccordionTrigger className="text-left">
                  ¿Puedo pagar por Bizum?
                </AccordionTrigger>
                <AccordionContent>
                  Sí, puedes solicitar el pago por Bizum escribiendo por
                  WhatsApp. Te indicamos los pasos según el plan que elijas.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10">
                <AccordionTrigger className="text-left">
                  ¿Puedo pagar con tarjeta?
                </AccordionTrigger>
                <AccordionContent>
                  Sí, la web deja preparados botones de pago con tarjeta
                  mediante enlaces externos de pago.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-11">
                <AccordionTrigger className="text-left">
                  ¿Qué incluye el curso mensual?
                </AccordionTrigger>
                <AccordionContent>
                  Incluye material, test, simulacros, muestras de contenido y
                  soporte para preparar TCAE SAS Andalucía.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-12">
                <AccordionTrigger className="text-left">
                  ¿Qué incluye el pack completo?
                </AccordionTrigger>
                <AccordionContent>
                  Incluye el acceso completo al material disponible, test,
                  simulacros y preparación específica para TCAE SAS Andalucía.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-13">
                <AccordionTrigger className="text-left">
                  ¿Puedo consultar antes de pagar?
                </AccordionTrigger>
                <AccordionContent>
                  Sí, puedes escribir por WhatsApp para resolver dudas antes de
                  apuntarte al curso TCAE SAS online.
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
            Empieza a preparar TCAE SAS Andalucía online
          </h2>
          <p
            className="text-xl mb-8 opacity-90"
            data-testid="cta-final-subtitle"
          >
            Únete a una preparación pensada para opositores TCAE del SAS
            Andalucía, con test, simulacros, clases y apoyo para Bolsa SAS TCAE.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection("precio")}
              className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-accent text-accent-foreground text-lg font-semibold hover:bg-accent/90 transition-all transform hover:scale-105"
              data-testid="cta-final-primary"
            >
              Empieza a preparar TCAE SAS
            </Button>
            <a
              href="https://wa.me/34640828654?text=Hola%20LORMAN%20ACADEMIA%2C%20tengo%20dudas%20antes%20de%20suscribirme"
              className="inline-flex items-center justify-center h-12 px-8 border-2 border-white text-white rounded-lg text-lg font-semibold hover:bg-white hover:text-primary transition-all"
              data-testid="cta-final-secondary"
            >
              <i className="fab fa-whatsapp mr-2"></i>Consultar curso TCAE SAS online
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
              Contacto para preparar TCAE SAS online
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
            Academia online para oposición TCAE SAS Andalucía, test,
            simulacros y Bolsa SAS TCAE.
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
