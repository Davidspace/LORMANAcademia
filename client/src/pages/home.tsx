import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  GraduationCap,
  Instagram,
  Laptop,
  Layers3,
  MessageCircle,
  Smartphone,
  Sparkles,
  Star,
  Timer,
} from "lucide-react";

const whatsappNumber = "34640828654";
const instagramUrl = "https://www.instagram.com/academialorman/";

const whatsappText =
  "Hola Academia LORMAN, quiero información sobre los cursos online.";
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;

const courses = [
  {
    title: "Curso TCAE-SAS",
    badge: "Moodle online",
    price: "25 €/mes",
    detail: "durante 10 meses",
    description:
      "Curso online TCAE-SAS con acceso a Moodle, temario organizado, test y materiales de estudio.",
    features: ["Temario por bloques", "Test de repaso", "Acceso desde móvil y ordenador"],
  },
  {
    title: "Curso IMAS Express",
    badge: "Curso intensivo",
    price: "45 €",
    detail: "pago único",
    description:
      "Preparación express con materiales claros, test y recursos online para estudiar de forma práctica.",
    features: ["Formato rápido", "Simulacros", "Autoevaluaciones"],
    highlighted: true,
  },
  {
    title: "Curso SMS",
    subtitle: "Servicio Murciano de Salud",
    badge: "Destacado",
    price: "90 €",
    detail: "pago único",
    description:
      "Curso online con temas desarrollados, esquemas/resúmenes, autoevaluaciones y simulacros tipo examen.",
    features: ["Temas desarrollados", "Precio especial IMAS", "Simulacros tipo examen"],
  },
];

const includes = [
  { icon: FileText, title: "Temarios desarrollados", text: "Contenido redactado y ordenado para avanzar paso a paso." },
  { icon: Layers3, title: "Esquemas y resúmenes", text: "Repasos visuales para memorizar lo más importante." },
  { icon: ClipboardCheck, title: "Test y autoevaluaciones", text: "Preguntas por temas con corrección para detectar fallos." },
  { icon: Timer, title: "Simulacros tipo examen", text: "Práctica con ejercicios similares al formato oficial." },
  { icon: BookOpen, title: "Acceso a Moodle", text: "Todo el material dentro de un aula virtual organizada." },
  { icon: Smartphone, title: "Móvil y ordenador", text: "Estudia desde donde puedas, cuando puedas." },
  { icon: CheckCircle2, title: "Material actualizado", text: "Recursos estructurados y revisados durante el curso." },
  { icon: MessageCircle, title: "Acompañamiento", text: "Contacto directo para pedir información y resolver dudas." },
];

const moodleItems = [
  "Temario organizado por bloques",
  "Tema/resumen para estudiar",
  "Autoevaluaciones por tema",
  "Preguntas tipo test",
  "Simulacros tipo examen",
];

function scrollTo(sectionId: string) {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f8fb] text-slate-950">
      <header className="sticky top-0 z-40 border-b border-white/70 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
            <a href="#" className="flex items-center gap-3" aria-label="Academia LORMAN">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#112245] text-white">
              <GraduationCap className="h-5 w-5" />
            </span>
            <span className="leading-tight">
              <span className="block text-base font-extrabold tracking-wide text-[#112245]">
                Academia LORMAN
              </span>
              <span className="hidden text-xs font-medium text-slate-500 sm:block">
                Cursos online de normativa y oposiciones
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-700 md:flex">
            <button onClick={() => scrollTo("cursos")} className="hover:text-[#0f9f9a]">
              Cursos
            </button>
            <button onClick={() => scrollTo("moodle")} className="hover:text-[#0f9f9a]">
              Moodle
            </button>
            <button onClick={() => scrollTo("precios")} className="hover:text-[#0f9f9a]">
              Precios
            </button>
            <button onClick={() => scrollTo("contacto")} className="hover:text-[#0f9f9a]">
              Contacto
            </button>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-[#112245] shadow-sm hover:border-[#0f9f9a] sm:inline-flex"
              aria-label="Ver Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-[#0f9f9a] px-3 text-sm font-bold text-white shadow-sm hover:bg-[#0b817d]"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      <section className="overflow-hidden bg-[#112245] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.03fr_0.97fr] lg:items-center lg:py-16">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-sm font-semibold text-[#ffd447]">
              <Sparkles className="h-4 w-4" />
              Estudia a tu ritmo con acceso a Moodle
            </div>
            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Academia LORMAN
            </h1>
            <p className="mt-4 text-xl font-semibold text-[#8ee9e4]">
              Cursos online de normativa y oposiciones
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-100">
              Estudia a tu ritmo con temarios organizados, test, simulacros y acceso a Moodle.
              Elige TCAE-SAS, IMAS Express o SMS según tu objetivo.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="h-12 rounded-lg bg-[#ffd447] px-6 text-base font-extrabold text-[#112245] hover:bg-[#f5c51f]"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Pedir información por WhatsApp
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-lg border-white/40 bg-white/10 px-6 text-base font-bold text-white hover:bg-white hover:text-[#112245]"
              >
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                  Ver Instagram
                </a>
              </Button>
            </div>
            <div className="mt-8 grid max-w-xl grid-cols-3 gap-3 text-center">
              <div className="rounded-lg border border-white/15 bg-white/10 p-3">
                <strong className="block text-2xl text-[#ffd447]">3</strong>
                <span className="text-xs text-slate-200">cursos online</span>
              </div>
              <div className="rounded-lg border border-white/15 bg-white/10 p-3">
                <strong className="block text-2xl text-[#ffd447]">24/7</strong>
                <span className="text-xs text-slate-200">aula virtual</span>
              </div>
              <div className="rounded-lg border border-white/15 bg-white/10 p-3">
                <strong className="block text-2xl text-[#ffd447]">Moodle</strong>
                <span className="text-xs text-slate-200">móvil y PC</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[1.75rem] border border-white/15 bg-white/10 p-4 shadow-2xl">
              <div className="rounded-[1.25rem] bg-slate-50 p-4 text-slate-950 shadow-xl">
                <div className="mb-4 flex items-center justify-between border-b border-slate-200 pb-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-[#0f9f9a]">
                      Aula Moodle
                    </p>
                    <h2 className="text-lg font-extrabold text-[#112245]">
                      Panel de estudio
                    </h2>
                  </div>
                  <div className="flex gap-1">
                    <span className="h-3 w-3 rounded-full bg-[#ffd447]" />
                    <span className="h-3 w-3 rounded-full bg-[#0f9f9a]" />
                    <span className="h-3 w-3 rounded-full bg-[#112245]" />
                  </div>
                </div>
                <div className="grid gap-3">
                  {moodleItems.map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-3"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#e7fbfa] text-[#0f9f9a]">
                        {index + 1}
                      </span>
                      <span className="font-semibold text-slate-800">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-lg bg-[#112245] p-4 text-white">
                  <p className="text-sm font-semibold text-[#8ee9e4]">Simulacro activo</p>
                  <div className="mt-3 h-3 rounded-full bg-white/15">
                    <div className="h-3 w-2/3 rounded-full bg-[#ffd447]" />
                  </div>
                  <p className="mt-3 text-sm text-slate-200">
                    Test, autoevaluaciones y progreso en un solo lugar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cursos" className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="font-bold uppercase tracking-wide text-[#0f9f9a]">Cursos disponibles</p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#112245] sm:text-4xl">
              Elige el curso que encaja con tu oposición
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              TCAE-SAS forma parte de Academia LORMAN, junto a IMAS Express y SMS.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {courses.map((course) => (
              <Card
                key={course.title}
                className={`overflow-hidden rounded-lg border-0 shadow-lg ${
                  course.highlighted ? "ring-2 ring-[#ffd447]" : ""
                }`}
              >
                <CardContent className="flex h-full flex-col p-6">
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div>
                      <span className="rounded-full bg-[#e7fbfa] px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-[#0f9f9a]">
                        {course.badge}
                      </span>
                      <h3 className="mt-4 text-2xl font-extrabold text-[#112245]">
                        {course.title}
                      </h3>
                      {course.subtitle && (
                        <p className="mt-1 font-semibold text-slate-500">{course.subtitle}</p>
                      )}
                    </div>
                    {course.highlighted && <Star className="h-6 w-6 fill-[#ffd447] text-[#ffd447]" />}
                  </div>
                  <div className="mb-4 rounded-lg bg-[#f6f8fb] p-4">
                    <p className="text-3xl font-extrabold text-[#112245]">{course.price}</p>
                    <p className="mt-1 text-sm font-semibold text-slate-600">{course.detail}</p>
                  </div>
                  <p className="mb-5 leading-7 text-slate-600">{course.description}</p>
                  <ul className="mb-6 grid gap-2 text-sm font-semibold text-slate-700">
                    {course.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#0f9f9a]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="mt-auto h-11 rounded-lg bg-[#0f9f9a] font-bold hover:bg-[#0b817d]">
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      Información por WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 max-w-3xl">
            <p className="font-bold uppercase tracking-wide text-[#0f9f9a]">Qué incluye</p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#112245] sm:text-4xl">
              Todo lo necesario para estudiar con orden
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {includes.map(({ icon: Icon, title, text }) => (
              <Card key={title} className="rounded-lg border-slate-200 shadow-sm">
                <CardContent className="p-5">
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[#112245] text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-extrabold text-[#112245]">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="moodle" className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-bold uppercase tracking-wide text-[#0f9f9a]">Acceso a Moodle</p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#112245] sm:text-4xl">
              Así estudiarás dentro de Moodle
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Todo el material estará organizado en el aula virtual para que puedas avanzar paso a paso,
              consultar los temas, realizar test y practicar con simulacros.
            </p>
            <div className="mt-6 grid gap-3">
              {moodleItems.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm">
                  <CheckCircle2 className="h-5 w-5 text-[#0f9f9a]" />
                  <span className="font-semibold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg bg-white p-4 shadow-xl">
            <div className="rounded-lg border border-slate-200 bg-[#f8fafc] p-4">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-[#0f9f9a]">
                    Academia LORMAN
                  </p>
                  <h3 className="text-xl font-extrabold text-[#112245]">Curso SMS</h3>
                </div>
                <Laptop className="h-7 w-7 text-[#112245]" />
              </div>
              <div className="space-y-3">
                {[
                  ["Bloque I", "Temas desarrollados y resúmenes"],
                  ["Bloque II", "Autoevaluaciones por tema"],
                  ["Simulacros", "Práctica tipo examen"],
                  ["Calificaciones", "Revisión de aciertos y errores"],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-lg border border-slate-200 bg-white p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <h4 className="font-extrabold text-[#112245]">{title}</h4>
                        <p className="mt-1 text-sm text-slate-500">{text}</p>
                      </div>
                      <span className="rounded-full bg-[#e7fbfa] px-3 py-1 text-xs font-bold text-[#0f9f9a]">
                        Moodle
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="precios" className="bg-[#112245] py-14 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="font-bold uppercase tracking-wide text-[#ffd447]">Precios</p>
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
              Precios claros desde el primer momento
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {[
              ["TCAE-SAS", "25 €/mes", "durante 10 meses"],
              ["IMAS Express", "45 €", "pago único"],
              ["SMS", "90 €", "pago único"],
              ["SMS alumnos IMAS", "65 €", "precio especial"],
            ].map(([name, price, detail]) => (
              <div key={name} className="rounded-lg border border-white/15 bg-white/10 p-5 text-center">
                <p className="text-sm font-bold uppercase tracking-wide text-[#8ee9e4]">{name}</p>
                <p className="mt-3 text-3xl font-extrabold text-[#ffd447]">{price}</p>
                <p className="mt-2 text-sm text-slate-200">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="font-bold uppercase tracking-wide text-[#0f9f9a]">Contacto</p>
          <h2 className="mt-2 text-3xl font-extrabold text-[#112245] sm:text-4xl">
            ¿Quieres matricularte o pedir más información?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Escríbenos y te indicamos el curso que mejor encaja contigo, el precio y los pasos para entrar al aula.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild className="h-12 rounded-lg bg-[#0f9f9a] px-7 text-base font-extrabold hover:bg-[#0b817d]">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Escribir por WhatsApp
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-lg border-[#112245] px-7 text-base font-extrabold text-[#112245] hover:bg-[#112245] hover:text-white"
            >
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                Síguenos en Instagram
              </a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 py-8 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 text-center sm:px-6 md:flex-row md:items-center md:justify-between md:text-left">
          <div>
            <p className="text-lg font-extrabold">Academia LORMAN</p>
            <p className="mt-1 text-sm text-slate-400">Cursos online de normativa y oposiciones.</p>
          </div>
          <div className="flex justify-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0f9f9a] text-white"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-slate-950"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#0f9f9a] text-white shadow-2xl transition hover:scale-105 hover:bg-[#0b817d]"
        aria-label="Pide información por WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </main>
  );
}
