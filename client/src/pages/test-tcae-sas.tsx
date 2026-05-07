import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type Question = {
  question: string;
  options: string[];
  correct: string;
  explanation: string;
};

type TopicTest = {
  id: string;
  title: string;
  description: string;
  keywords: string[];
};

const topicTests: TopicTest[] = [
  {
    id: "tema-1",
    title: "Tema 1: Constitución española",
    description: "Derechos, Cortes Generales, Gobierno, organización territorial y protección de la salud.",
    keywords: ["Constitución", "artículo 43", "Cortes Generales", "derechos fundamentales"],
  },
  {
    id: "tema-2",
    title: "Tema 2: Estatuto de Autonomía de Andalucía",
    description: "Autonomía andaluza, instituciones, competencias y organización territorial.",
    keywords: ["Estatuto de Andalucía", "Junta de Andalucía", "competencias", "autonomía"],
  },
  {
    id: "tema-3",
    title: "Tema 3: Sistema sanitario y salud pública",
    description: "Organización sanitaria, principios del sistema, atención sanitaria y derechos de usuarios.",
    keywords: ["salud pública", "sistema sanitario", "atención primaria", "derechos sanitarios"],
  },
  {
    id: "tema-5",
    title: "Tema 5: Protección de datos",
    description: "RGPD, LOPDGDD, datos de salud, confidencialidad y consentimiento.",
    keywords: ["RGPD", "datos de salud", "confidencialidad", "consentimiento"],
  },
  {
    id: "tema-6",
    title: "Tema 6: Prevención de riesgos laborales",
    description: "Riesgos en el trabajo sanitario, medidas preventivas, EPI y seguridad.",
    keywords: ["Ley 31/1995", "riesgos laborales", "EPI", "prevención"],
  },
  {
    id: "tema-7",
    title: "Tema 7: Igualdad, violencia de género y trato al usuario",
    description: "Igualdad, atención respetuosa, comunicación y detección de situaciones de riesgo.",
    keywords: ["igualdad", "violencia de género", "comunicación", "trato digno"],
  },
  {
    id: "tema-9",
    title: "Tema 9: Documentación sanitaria",
    description: "Historia clínica, registros, archivo, custodia y circulación de información clínica.",
    keywords: ["historia clínica", "registros", "documentación", "custodia"],
  },
  {
    id: "tema-11",
    title: "Tema 11: Muestras biológicas",
    description: "Recogida, conservación, identificación y transporte de muestras.",
    keywords: ["muestras biológicas", "identificación", "transporte", "conservación"],
  },
  {
    id: "tema-12",
    title: "Tema 12: Constantes vitales y observación",
    description: "Temperatura, pulso, respiración, tensión arterial y signos de alerta.",
    keywords: ["constantes vitales", "pulso", "temperatura", "tensión arterial"],
  },
  {
    id: "tema-13",
    title: "Tema 13: Cuidados básicos del paciente",
    description: "Necesidades básicas, confort, seguridad, movilización y apoyo al paciente.",
    keywords: ["cuidados básicos", "confort", "seguridad", "movilización"],
  },
  {
    id: "tema-14",
    title: "Tema 14: Bioética y derechos del paciente",
    description: "Principios bioéticos, consentimiento informado, intimidad y autonomía.",
    keywords: ["bioética", "autonomía", "beneficencia", "consentimiento informado"],
  },
  {
    id: "tema-15",
    title: "Tema 15: Infecciones",
    description: "Cadena epidemiológica, vías de transmisión, aislamiento e higiene de manos.",
    keywords: ["infecciones", "aislamiento", "higiene de manos", "fómites"],
  },
  {
    id: "tema-16",
    title: "Tema 16: Residuos sanitarios",
    description: "Clasificación, segregación, punzantes, citostáticos y seguridad.",
    keywords: ["residuos sanitarios", "punzantes", "citostáticos", "segregación"],
  },
  {
    id: "tema-17",
    title: "Tema 17: Limpieza, desinfección y esterilización",
    description: "Métodos de limpieza, desinfección, esterilización, controles y material sanitario.",
    keywords: ["limpieza", "desinfección", "esterilización", "material sanitario"],
  },
  {
    id: "tema-18",
    title: "Tema 18: Atención al paciente y seguridad",
    description: "Comunicación, acompañamiento, prevención de riesgos y seguridad del paciente.",
    keywords: ["seguridad del paciente", "comunicación", "acompañamiento", "prevención"],
  },
  {
    id: "tema-19",
    title: "Tema 19: Higiene del paciente",
    description: "Aseo, piel, paciente encamado, úlceras por presión y confort.",
    keywords: ["higiene", "paciente encamado", "piel", "úlceras por presión"],
  },
  {
    id: "tema-20",
    title: "Tema 20: Aparato digestivo y urinario",
    description: "Cuidados digestivos, eliminación, muestras, sondajes y observación.",
    keywords: ["digestivo", "urinario", "eliminación", "sondaje"],
  },
  {
    id: "tema-21",
    title: "Tema 21: Nutrición y alimentación",
    description: "Dietas, alimentación, hidratación, disfagia y apoyo al paciente.",
    keywords: ["nutrición", "alimentación", "dietas", "hidratación"],
  },
  {
    id: "tema-22",
    title: "Tema 22: Aparato musculoesquelético",
    description: "Movilización, ergonomía, lesiones, inmovilizaciones y ayuda en transferencias.",
    keywords: ["musculoesquelético", "movilización", "ergonomía", "transferencias"],
  },
];

const makeQuestions = (topic: TopicTest): Question[] => {
  const [main, second, third, fourth] = topic.keywords;
  return [
    {
      question: `En ${topic.title}, ¿qué concepto debes identificar primero para responder una pregunta tipo test?`,
      options: [main, "La respuesta más larga siempre", "La opción que aparece en primer lugar", "Una palabra no relacionada"],
      correct: "A",
      explanation: `${main} es un concepto central de este tema. En los test TCAE SAS conviene detectar primero la idea clave antes de elegir respuesta.`,
    },
    {
      question: `¿Cuál de estas opciones está más relacionada con ${topic.title}?`,
      options: ["Decoración de habitaciones", second, "Gestión de nóminas", "Mantenimiento informático"],
      correct: "B",
      explanation: `${second} pertenece al contenido de ${topic.title}; las demás opciones no son el foco de este tema.`,
    },
    {
      question: `Si una pregunta menciona "${third}", ¿qué debes hacer?`,
      options: ["Descartarla siempre", "Relacionarla con el tema y leer todas las opciones", "Responder al azar", "Cambiar de tema"],
      correct: "B",
      explanation: `${third} es una pista del tema. Leer todas las opciones evita caer en respuestas parecidas pero incompletas.`,
    },
    {
      question: `¿Qué opción describe mejor una preparación correcta de ${topic.title}?`,
      options: ["Memorizar letras sin entender", "Estudiar conceptos, practicar test y revisar fallos", "Hacer solo una lectura rápida", "No comprobar respuestas"],
      correct: "B",
      explanation: "La preparación útil combina teoría, preguntas tipo examen y revisión de errores para fijar el contenido.",
    },
    {
      question: `En una pregunta sobre "${fourth}", ¿qué respuesta suele ser más segura?`,
      options: ["La que respeta el protocolo y la seguridad", "La que ahorra más tiempo aunque sea insegura", "La que evita registrar información necesaria", "La que ignora al paciente"],
      correct: "A",
      explanation: `${fourth} debe resolverse aplicando protocolo, seguridad y atención correcta al paciente.`,
    },
    {
      question: `¿Por qué es importante repasar ${topic.title} con test?`,
      options: ["Porque permite detectar fallos concretos", "Porque sustituye por completo el estudio", "Porque evita leer el temario", "Porque todas las respuestas son iguales"],
      correct: "A",
      explanation: "Los test ayudan a localizar puntos débiles y a entrenar el formato de oposición.",
    },
    {
      question: `¿Qué debes hacer si dudas entre dos opciones en ${topic.title}?`,
      options: ["Elegir sin leer el enunciado", "Buscar la opción más completa y ajustada al concepto", "Marcar siempre la C", "Dejar de practicar"],
      correct: "B",
      explanation: "En preguntas tipo SAS suele ganar la opción más precisa, completa y alineada con el concepto preguntado.",
    },
    {
      question: `¿Cuál es un error frecuente al estudiar ${topic.title}?`,
      options: ["Revisar explicaciones", "Confundir conceptos parecidos sin hacer esquemas", "Practicar preguntas", "Corregir fallos"],
      correct: "B",
      explanation: "Muchos fallos vienen de confundir términos cercanos. Por eso conviene estudiar con esquemas y ejemplos.",
    },
    {
      question: `¿Qué indica una respuesta correcta en un test de ${topic.title}?`,
      options: ["Que no hay que repasar nunca más", "Que has entendido ese punto, aunque conviene mantener el repaso", "Que el tema no entra", "Que las demás preguntas sobran"],
      correct: "B",
      explanation: "Acertar es buena señal, pero el repaso espaciado ayuda a conservar el contenido hasta el examen.",
    },
    {
      question: `Tras fallar una pregunta de ${topic.title}, ¿qué es lo más recomendable?`,
      options: ["Ignorar el fallo", "Leer la explicación y anotar el concepto que ha provocado el error", "Borrar la respuesta", "No volver a hacer test"],
      correct: "B",
      explanation: "La revisión del fallo convierte el error en aprendizaje y mejora la nota en los siguientes simulacros.",
    },
  ];
};

export default function TestTcaeSas() {
  const [activeTopicId, setActiveTopicId] = useState(topicTests[0].id);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const activeTopic = topicTests.find((topic) => topic.id === activeTopicId) || topicTests[0];
  const activeQuestions = makeQuestions(activeTopic);
  const topicScore = activeQuestions.reduce((total, question, index) => {
    const key = `${activeTopic.id}-${index}`;
    return total + (checked[key] && answers[key] === question.correct ? 1 : 0);
  }, 0);
  const checkedCount = activeQuestions.filter((_, index) => checked[`${activeTopic.id}-${index}`]).length;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-white sticky top-0 z-40">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-primary">
            LORMAN ACADEMIA
          </a>
          <a
            href="https://wa.me/34640828654?text=Hola%20LORMAN%20ACADEMIA%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20curso%20TCAE%20SAS"
            className="hidden sm:inline-flex items-center justify-center h-10 px-4 rounded-md bg-green-600 text-white font-semibold hover:bg-green-700"
          >
            <i className="fab fa-whatsapp mr-2"></i>Consultar curso
          </a>
        </div>
      </header>

      <main>
        <section className="py-14 hero-gradient text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-wide opacity-80 mb-3">
                Test TCAE SAS por tema
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-5">
                Practica con nosotros
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Elige cualquiera de los temas disponibles en la carpeta TCAE,
                responde 10 preguntas y comprueba cada respuesta al momento con
                una explicación clara de por qué está bien o mal.
              </p>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-[300px_1fr] gap-8">
              <aside className="space-y-3">
                <h2 className="text-xl font-bold mb-4">Temas disponibles</h2>
                {topicTests.map((topic) => (
                  <button
                    key={topic.id}
                    type="button"
                    onClick={() => setActiveTopicId(topic.id)}
                    className={`w-full text-left rounded-lg border p-4 transition-colors ${
                      activeTopic.id === topic.id
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border bg-white hover:bg-muted"
                    }`}
                  >
                    <span className="block font-semibold">{topic.title}</span>
                    <span className="block text-sm text-muted-foreground mt-1">
                      10 preguntas con explicación
                    </span>
                  </button>
                ))}
              </aside>

              <div>
                <div className="mb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                  <div>
                    <h2 className="text-3xl font-bold">{activeTopic.title}</h2>
                    <p className="text-muted-foreground mt-2">
                      {activeTopic.description}
                    </p>
                  </div>
                  <div className="rounded-lg border border-border bg-white px-4 py-3 text-sm font-semibold">
                    Comprobadas: {checkedCount}/10 · Aciertos: {topicScore}/10
                  </div>
                </div>

                <div className="space-y-5">
                  {activeQuestions.map((item, questionIndex) => {
                    const key = `${activeTopic.id}-${questionIndex}`;
                    const selected = answers[key];
                    const isChecked = checked[key];
                    const isCorrect = selected === item.correct;

                    return (
                      <Card key={item.question} className="shadow-sm">
                        <CardContent className="p-6">
                          <h3 className="text-lg font-semibold mb-4">
                            {questionIndex + 1}. {item.question}
                          </h3>
                          <div className="grid sm:grid-cols-2 gap-3">
                            {item.options.map((option, optionIndex) => {
                              const letter = String.fromCharCode(65 + optionIndex);
                              const optionSelected = selected === letter;
                              const optionCorrect = item.correct === letter;
                              const optionWrong = isChecked && optionSelected && !optionCorrect;

                              return (
                                <label
                                  key={option}
                                  className={`flex gap-3 rounded-lg border p-3 cursor-pointer ${
                                    isChecked && optionCorrect
                                      ? "border-green-600 bg-green-50 text-green-900"
                                      : optionWrong
                                        ? "border-red-500 bg-red-50 text-red-900"
                                        : optionSelected
                                          ? "border-primary bg-primary/10"
                                          : "border-border bg-white hover:bg-muted"
                                  }`}
                                >
                                  <input
                                    type="radio"
                                    name={key}
                                    value={letter}
                                    checked={optionSelected}
                                    onChange={() => {
                                      setAnswers({ ...answers, [key]: letter });
                                      setChecked({ ...checked, [key]: false });
                                    }}
                                    className="mt-1"
                                  />
                                  <span>
                                    <strong>{letter}.</strong> {option}
                                  </span>
                                </label>
                              );
                            })}
                          </div>
                          <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-3">
                            <Button
                              type="button"
                              onClick={() => setChecked({ ...checked, [key]: true })}
                              disabled={!selected}
                            >
                              Comprobar respuesta
                            </Button>
                            {!selected && (
                              <p className="text-sm text-muted-foreground">
                                Elige una opción para comprobarla.
                              </p>
                            )}
                          </div>
                          {isChecked && (
                            <div
                              className={`mt-5 rounded-lg border p-4 ${
                                isCorrect
                                  ? "border-green-600 bg-green-50 text-green-900"
                                  : "border-red-500 bg-red-50 text-red-900"
                              }`}
                            >
                              <p className="font-semibold mb-1">
                                {isCorrect ? "Correcta" : "Incorrecta"}
                              </p>
                              <p>{item.explanation}</p>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                <Card className="mt-8 bg-primary text-primary-foreground">
                  <CardContent className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-bold">¿Quieres más test por tema?</h2>
                      <p className="text-primary-foreground/85 mt-2">
                        En el curso tienes más preguntas, simulacros y repaso de
                        fallos para preparar TCAE SAS Andalucía.
                      </p>
                    </div>
                    <a
                      href="https://wa.me/34640828654?text=Hola%20LORMAN%20ACADEMIA%2C%20he%20probado%20los%20test%20por%20tema%20y%20quiero%20apuntarme%20al%20curso%20TCAE%20SAS"
                      className="inline-flex items-center justify-center min-h-12 px-6 rounded-lg bg-white text-primary font-semibold hover:bg-white/90"
                    >
                      Apuntarme al curso
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
