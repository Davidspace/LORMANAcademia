import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { topicTests } from "@/data/tcae-tests";
import type { TestQuestion } from "@/data/tcae-tests";

const whatsappUrl =
  "https://wa.me/34640828654?text=Hola%20LORMAN%20ACADEMIA%2C%20quiero%20saber%20m%C3%A1s%20sobre%20el%20curso%20TCAE%20SAS%20Andaluc%C3%ADa";

function getCorrectOptionText(item: TestQuestion) {
  const index = item.correct.charCodeAt(0) - 65;
  return item.options[index] || "";
}

function getCleanAnswerText(item: TestQuestion) {
  return item.explanation
    .replace(/^La respuesta [A-D] es correcta:\s*/i, "")
    .trim();
}

function buildExplanation(item: TestQuestion, selected?: string) {
  const correctText = getCorrectOptionText(item) || getCleanAnswerText(item);
  const selectedText =
    selected && selected !== item.correct
      ? item.options[selected.charCodeAt(0) - 65]
      : "";

  return {
    intro: `La correcta es la ${item.correct}.`,
    reason: `Porque la opción "${correctText}" responde exactamente a lo que pregunta el enunciado. En este tipo de test TCAE SAS conviene localizar la palabra clave de la pregunta y comprobar qué alternativa recoge el concepto completo, sin cambiarlo ni dejarlo a medias.`,
    selectedNote: selectedText
      ? `Tu respuesta fue "${selectedText}". Repásala comparándola con la correcta: normalmente el fallo aparece porque la opción se parece, pero no incluye el dato principal o introduce una idea que no corresponde.`
      : "",
    trick: `Truco: quédate con las 3-4 palabras fuertes de la respuesta correcta: "${correctText
      .split(/\s+/)
      .slice(0, 4)
      .join(" ")}". Si las ves juntas en el examen, tendrás una pista rápida para reconocerla.`,
  };
}

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

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-white sticky top-0 z-40">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-primary">
            LORMAN ACADEMIA
          </a>
          <a
            href={whatsappUrl}
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
                Elige un tema, responde a cada pregunta y comprueba tus
                respuestas al momento con una explicación clara.
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
                      {topic.questions.length} preguntas reales
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
                    Comprobadas: {checkedCount}/{activeTopic.questions.length} · Aciertos: {topicScore}/{activeTopic.questions.length}
                  </div>
                </div>

                <div className="space-y-5">
                  {activeTopic.questions.map((item, questionIndex) => {
                    const key = `${activeTopic.id}-${questionIndex}`;
                    const selected = answers[key];
                    const isChecked = checked[key];
                    const isCorrect = selected === item.correct;
                    const correction = buildExplanation(item, selected);

                    return (
                      <Card key={`${activeTopic.id}-${item.question}`} className="shadow-sm">
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
                                  key={`${key}-${letter}`}
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
                              <div className="space-y-2 text-sm leading-relaxed">
                                <p className="text-base font-semibold">
                                  {correction.intro}
                                </p>
                                <p className="font-semibold">
                                  {isCorrect
                                    ? "Has marcado bien la respuesta."
                                    : "Tu respuesta no era la correcta."}
                                </p>
                                <p>{correction.reason}</p>
                                {correction.selectedNote && (
                                  <p>{correction.selectedNote}</p>
                                )}
                                <p>{correction.trick}</p>
                              </div>
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
      <a
        href={whatsappUrl}
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-green-600 px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-200"
        aria-label="Contactar por WhatsApp"
      >
        <i className="fab fa-whatsapp text-lg"></i>
        <span>Quiero saber más</span>
      </a>
    </div>
  );
}
