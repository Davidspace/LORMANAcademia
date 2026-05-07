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
  questions: Question[];
};

const topicTests: TopicTest[] = [
  {
    id: "constitucion",
    title: "Tema 1: Constitución",
    description: "Derechos, organización territorial, Cortes, Gobierno y protección de la salud.",
    questions: [
      {
        question: "¿Qué norma ocupa la posición superior del ordenamiento jurídico español?",
        options: ["El Estatuto de Autonomía", "La Constitución española", "Una ley ordinaria", "Un decreto municipal"],
        correct: "B",
        explanation: "La Constitución española de 1978 es la norma suprema y el resto de normas deben respetarla.",
      },
      {
        question: "¿Qué artículo reconoce el derecho a la protección de la salud?",
        options: ["Artículo 14", "Artículo 27", "Artículo 43", "Artículo 155"],
        correct: "C",
        explanation: "El artículo 43 reconoce el derecho a la protección de la salud y encarga a los poderes públicos organizar la salud pública.",
      },
      {
        question: "¿Quién ejerce la potestad legislativa del Estado?",
        options: ["El Gobierno", "El Tribunal Constitucional", "Las Cortes Generales", "El Consejo General del Poder Judicial"],
        correct: "C",
        explanation: "Las Cortes Generales representan al pueblo español y ejercen la potestad legislativa del Estado.",
      },
      {
        question: "¿Qué forman el Congreso de los Diputados y el Senado?",
        options: ["El Gobierno", "Las Cortes Generales", "El Tribunal Supremo", "La Administración local"],
        correct: "B",
        explanation: "Las Cortes Generales son bicamerales: Congreso de los Diputados y Senado.",
      },
      {
        question: "¿Qué principio aparece en el artículo 14 de la Constitución?",
        options: ["Igualdad ante la ley", "Derecho a la vivienda", "Derecho de petición", "Libertad sindical únicamente"],
        correct: "A",
        explanation: "El artículo 14 reconoce la igualdad de los españoles ante la ley y prohíbe discriminaciones.",
      },
      {
        question: "¿Cuál es la forma política del Estado español?",
        options: ["República federal", "Monarquía parlamentaria", "Confederación", "Estado unitario sin autonomías"],
        correct: "B",
        explanation: "La Constitución establece que la forma política del Estado español es la monarquía parlamentaria.",
      },
      {
        question: "¿Qué institución dirige la política interior y exterior?",
        options: ["El Gobierno", "El Senado exclusivamente", "El Tribunal Constitucional", "El Defensor del Pueblo"],
        correct: "A",
        explanation: "El Gobierno dirige la política interior y exterior, la Administración civil y militar y la defensa del Estado.",
      },
      {
        question: "¿Qué reconoce la Constitución a nacionalidades y regiones?",
        options: ["Derecho a la autonomía", "Derecho a emitir moneda", "Derecho a crear fronteras", "Derecho a no cumplir leyes estatales"],
        correct: "A",
        explanation: "La Constitución reconoce y garantiza el derecho a la autonomía de nacionalidades y regiones.",
      },
      {
        question: "¿Qué órgano interpreta la Constitución?",
        options: ["Tribunal Constitucional", "Ministerio de Sanidad", "Congreso únicamente", "Ayuntamiento"],
        correct: "A",
        explanation: "El Tribunal Constitucional es el intérprete supremo de la Constitución.",
      },
      {
        question: "¿Qué tipo de derechos tienen especial protección constitucional?",
        options: ["Derechos fundamentales y libertades públicas", "Solo derechos laborales", "Solo derechos fiscales", "Solo derechos municipales"],
        correct: "A",
        explanation: "Los derechos fundamentales y libertades públicas tienen garantías reforzadas dentro del sistema constitucional.",
      },
    ],
  },
  {
    id: "proteccion-datos",
    title: "Tema 5: Protección de datos",
    description: "RGPD, datos sanitarios, confidencialidad, consentimiento y derechos del paciente.",
    questions: [
      {
        question: "¿Qué tipo de datos son los datos relativos a la salud?",
        options: ["Datos sin protección", "Categorías especiales de datos", "Datos siempre públicos", "Datos anónimos por defecto"],
        correct: "B",
        explanation: "Los datos de salud son categorías especiales y requieren especial protección.",
      },
      {
        question: "¿Cómo debe ser el consentimiento según el RGPD?",
        options: ["Libre, específico, informado e inequívoco", "Siempre verbal y tácito", "Irrevocable", "Obligatorio para cualquier trámite sin información"],
        correct: "A",
        explanation: "El consentimiento válido debe ser libre, específico, informado e inequívoco.",
      },
      {
        question: "¿Quién debe guardar confidencialidad sobre datos sanitarios?",
        options: ["Solo médicos", "Todo el personal que acceda a la información", "Solo directivos", "Solo personal de informática"],
        correct: "B",
        explanation: "La confidencialidad afecta a todo profesional que accede a información sanitaria.",
      },
      {
        question: "¿Qué principio exige tratar solo los datos necesarios?",
        options: ["Minimización de datos", "Publicidad total", "Conservación indefinida", "Libre difusión"],
        correct: "A",
        explanation: "La minimización obliga a tratar solo los datos adecuados, pertinentes y limitados a lo necesario.",
      },
      {
        question: "¿Puede un TCAE comentar datos de un paciente en zonas comunes?",
        options: ["Sí, si no dice el nombre", "No, debe preservar la confidencialidad", "Sí, si es con otro paciente", "Sí, si ocurre fuera del turno"],
        correct: "B",
        explanation: "Los datos del paciente no deben comentarse en lugares donde puedan ser escuchados por personas no autorizadas.",
      },
      {
        question: "¿Qué derecho permite pedir la eliminación de datos cuando proceda?",
        options: ["Supresión", "Voto", "Huelga", "Petición sanitaria informal"],
        correct: "A",
        explanation: "El derecho de supresión permite solicitar la eliminación de datos en los supuestos legalmente previstos.",
      },
      {
        question: "¿Qué significa integridad y confidencialidad?",
        options: ["Proteger datos contra accesos no autorizados o pérdidas", "Publicar los datos", "No registrar información", "Compartir claves de acceso"],
        correct: "A",
        explanation: "Este principio exige seguridad adecuada frente a accesos no autorizados, pérdida o daño.",
      },
      {
        question: "¿Qué debe hacerse si se detecta un acceso indebido a datos?",
        options: ["Ignorarlo", "Seguir el protocolo y comunicarlo al responsable", "Publicarlo en redes", "Borrar todo sin avisar"],
        correct: "B",
        explanation: "Las incidencias de seguridad deben gestionarse según el protocolo del centro.",
      },
      {
        question: "¿Qué dato debe evitarse en conversaciones no asistenciales?",
        options: ["Información identificativa del paciente", "El color del uniforme", "La hora del descanso", "El nombre del centro"],
        correct: "A",
        explanation: "La información identificativa o clínica del paciente solo debe usarse en el contexto asistencial autorizado.",
      },
      {
        question: "¿La confidencialidad termina al finalizar el contrato?",
        options: ["Sí", "No, continúa después", "Solo dura un mes", "Depende de la edad del paciente"],
        correct: "B",
        explanation: "El deber de secreto profesional continúa aunque termine la relación laboral.",
      },
    ],
  },
  {
    id: "infecciones",
    title: "Tema 15: Infecciones",
    description: "Cadena epidemiológica, aislamiento, higiene de manos y vías de transmisión.",
    questions: [
      {
        question: "¿Cuál es una medida básica para prevenir infecciones?",
        options: ["Higiene de manos", "Compartir material", "No limpiar superficies", "Retirar guantes tarde"],
        correct: "A",
        explanation: "La higiene de manos es una de las medidas más eficaces para prevenir infecciones.",
      },
      {
        question: "Las gotas de Pflügge y Wells se relacionan con transmisión:",
        options: ["Transplacentaria", "Por fómites", "Aérea a corta distancia", "Genética"],
        correct: "C",
        explanation: "Estas gotas participan en la transmisión aérea a corta distancia o por gotas.",
      },
      {
        question: "¿Qué es un fómite?",
        options: ["Un objeto contaminado", "Una vacuna", "Un medicamento", "Un tipo de dieta"],
        correct: "A",
        explanation: "Un fómite es un objeto o superficie que puede transmitir microorganismos.",
      },
      {
        question: "¿Qué es asepsia?",
        options: ["Ausencia de microorganismos patógenos", "Aumento de fiebre", "Dieta absoluta", "Dolor abdominal"],
        correct: "A",
        explanation: "La asepsia busca evitar la presencia o transmisión de microorganismos patógenos.",
      },
      {
        question: "¿Qué elemento forma parte de la cadena epidemiológica?",
        options: ["Reservorio", "Factura", "Calendario laboral", "Número de colegiado"],
        correct: "A",
        explanation: "La cadena epidemiológica incluye agente, reservorio, salida, transmisión, entrada y huésped.",
      },
      {
        question: "¿Para qué sirve el aislamiento?",
        options: ["Reducir la transmisión", "Sustituir todos los tratamientos", "Evitar registrar datos", "Acelerar altas siempre"],
        correct: "A",
        explanation: "El aislamiento se aplica para cortar o reducir vías de transmisión.",
      },
      {
        question: "¿Qué debe hacerse con material reutilizable tras usarlo?",
        options: ["Procesarlo según protocolo", "Guardarlo sin limpiar", "Pasarlo a otro paciente", "Tirarlo siempre a residuos urbanos"],
        correct: "A",
        explanation: "El material reutilizable debe limpiarse, desinfectarse o esterilizarse según proceda.",
      },
      {
        question: "¿Qué es colonización?",
        options: ["Presencia de microorganismos sin invasión ni síntomas necesariamente", "Una fractura", "Una dieta", "Un residuo químico"],
        correct: "A",
        explanation: "En la colonización hay microorganismos presentes, pero no siempre existe enfermedad clínica.",
      },
      {
        question: "¿Cuándo debe cambiarse el guante si se contamina?",
        options: ["De inmediato y con higiene de manos cuando corresponda", "Al final del mes", "No hace falta", "Solo si lo pide el paciente"],
        correct: "A",
        explanation: "Los guantes contaminados deben retirarse o cambiarse siguiendo higiene de manos y protocolo.",
      },
      {
        question: "¿Qué vía implica transmisión por sangre o fluidos?",
        options: ["Parenteral", "Auditiva", "Visual", "Administrativa"],
        correct: "A",
        explanation: "La vía parenteral se relaciona con sangre, pinchazos, heridas o fluidos contaminados.",
      },
    ],
  },
  {
    id: "residuos",
    title: "Tema 16: Residuos sanitarios",
    description: "Clasificación, segregación, punzantes, citostáticos y seguridad.",
    questions: [
      {
        question: "¿Dónde se depositan agujas y material punzante?",
        options: ["Contenedor rígido resistente a perforación", "Bolsa común", "Papelera de oficina", "Caja abierta"],
        correct: "A",
        explanation: "Los punzantes deben ir a contenedores rígidos para evitar pinchazos y accidentes.",
      },
      {
        question: "¿Qué debe hacerse ante duda sobre un residuo?",
        options: ["Consultar el protocolo del centro", "Mezclarlo con urbanos", "Guardarlo en bolsillo", "Dejarlo en la cama"],
        correct: "A",
        explanation: "La clasificación debe seguir los protocolos del centro y la normativa aplicable.",
      },
      {
        question: "¿Qué objetivo tiene separar residuos en origen?",
        options: ["Reducir riesgos y facilitar tratamiento", "Aumentar errores", "Ocultar residuos", "Evitar limpieza"],
        correct: "A",
        explanation: "La segregación correcta reduce riesgos para pacientes, profesionales y medio ambiente.",
      },
      {
        question: "¿Qué residuos requieren especial precaución por riesgo químico y biológico?",
        options: ["Citostáticos", "Papel limpio", "Cartón seco", "Envases de comida"],
        correct: "A",
        explanation: "Los citostáticos requieren gestión específica por su peligrosidad.",
      },
      {
        question: "¿Qué protege al trabajador al manipular residuos?",
        options: ["EPI adecuado y protocolo", "Improvisación", "Bolsa rota", "No usar guantes nunca"],
        correct: "A",
        explanation: "El uso de EPI y el protocolo reducen accidentes y exposición a riesgos.",
      },
      {
        question: "¿Qué residuo no debe mezclarse con residuos urbanos?",
        options: ["Material punzante usado", "Papel limpio", "Restos de embalaje limpio", "Cartón seco"],
        correct: "A",
        explanation: "El material punzante usado tiene riesgo biológico y de accidente, por lo que requiere contenedor específico.",
      },
      {
        question: "¿Qué indica un contenedor lleno hasta su límite?",
        options: ["Debe cerrarse y retirarse según protocolo", "Debe apretarse con la mano", "Debe vaciarse en otra bolsa", "Debe seguir usándose"],
        correct: "A",
        explanation: "Los contenedores no deben sobrellenarse; se cierran y retiran según protocolo.",
      },
      {
        question: "¿Qué acción es incorrecta con una aguja usada?",
        options: ["Reencapuchar manualmente", "Depositar en contenedor rígido", "Evitar manipulación innecesaria", "Seguir protocolo"],
        correct: "A",
        explanation: "Reencapuchar aumenta el riesgo de pinchazo accidental y debe evitarse salvo protocolo específico.",
      },
      {
        question: "¿Qué debe primar en la gestión de residuos?",
        options: ["Seguridad y segregación correcta", "Rapidez sin clasificar", "Mezclar para ahorrar tiempo", "Dejarlos en cualquier zona"],
        correct: "A",
        explanation: "La seguridad y la correcta segregación son claves en la gestión de residuos sanitarios.",
      },
      {
        question: "¿Quién debe conocer la clasificación de residuos en el centro?",
        options: ["El personal que los genera o manipula", "Solo gerencia", "Solo visitas", "Nadie"],
        correct: "A",
        explanation: "Todo el personal implicado debe conocer la clasificación y los circuitos de gestión.",
      },
    ],
  },
];

export default function TestTcaeSas() {
  const [activeTopicId, setActiveTopicId] = useState(topicTests[0].id);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const activeTopic = topicTests.find((topic) => topic.id === activeTopicId) || topicTests[0];
  const topicScore = activeTopic.questions.reduce((total, question, index) => {
    const key = `${activeTopic.id}-${index}`;
    return total + (checked[key] && answers[key] === question.correct ? 1 : 0);
  }, 0);
  const checkedCount = activeTopic.questions.filter((_, index) => checked[`${activeTopic.id}-${index}`]).length;

  const chooseTopic = (topicId: string) => {
    setActiveTopicId(topicId);
  };

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
                Elige un tema, responde 10 preguntas y comprueba cada respuesta
                al momento con una explicación clara de por qué está bien o mal.
              </p>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-[280px_1fr] gap-8">
              <aside className="space-y-3">
                <h2 className="text-xl font-bold mb-4">Temas disponibles</h2>
                {topicTests.map((topic) => (
                  <button
                    key={topic.id}
                    type="button"
                    onClick={() => chooseTopic(topic.id)}
                    className={`w-full text-left rounded-lg border p-4 transition-colors ${
                      activeTopic.id === topic.id
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border bg-white hover:bg-muted"
                    }`}
                  >
                    <span className="block font-semibold">{topic.title}</span>
                    <span className="block text-sm text-muted-foreground mt-1">
                      10 preguntas
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
                  {activeTopic.questions.map((item, questionIndex) => {
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
                        En el curso tienes más preguntas, simulacros y repaso de fallos para preparar TCAE SAS Andalucía.
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
