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

const examPoints: Record<string, Array<{ concept: string; correct: string; explanation: string }>> = {
  "tema-1": [
    { concept: "norma suprema", correct: "La Constitución española es la norma suprema del ordenamiento jurídico.", explanation: "Todas las normas deben respetar la Constitución." },
    { concept: "artículo 43", correct: "El artículo 43 reconoce el derecho a la protección de la salud.", explanation: "Es uno de los artículos sanitarios más preguntados." },
    { concept: "Cortes Generales", correct: "Congreso y Senado forman las Cortes Generales.", explanation: "Las Cortes Generales son bicamerales." },
    { concept: "artículo 14", correct: "El artículo 14 recoge la igualdad ante la ley.", explanation: "Prohíbe discriminaciones por nacimiento, raza, sexo, religión, opinión o circunstancia personal o social." },
    { concept: "forma política", correct: "La forma política del Estado español es la monarquía parlamentaria.", explanation: "Aparece en el artículo 1.3 de la Constitución." },
    { concept: "Gobierno", correct: "El Gobierno dirige la política interior y exterior.", explanation: "También dirige la Administración civil y militar y la defensa del Estado." },
    { concept: "Tribunal Constitucional", correct: "El Tribunal Constitucional es el intérprete supremo de la Constitución.", explanation: "Resuelve, entre otros, recursos de inconstitucionalidad." },
    { concept: "autonomía", correct: "La Constitución reconoce el derecho a la autonomía de nacionalidades y regiones.", explanation: "Este principio se desarrolla en el Título VIII." },
    { concept: "derechos fundamentales", correct: "Los derechos fundamentales tienen protección reforzada.", explanation: "Se protegen mediante garantías específicas." },
    { concept: "reforma constitucional", correct: "La reforma constitucional sigue procedimientos distintos según la materia afectada.", explanation: "No toda reforma tiene el mismo nivel de exigencia." },
  ],
  "tema-2": [
    { concept: "Estatuto de Andalucía", correct: "El Estatuto es la norma institucional básica de Andalucía.", explanation: "Define instituciones, competencias y organización autonómica." },
    { concept: "Junta de Andalucía", correct: "La Junta de Andalucía es la institución en que se organiza el autogobierno andaluz.", explanation: "Integra Parlamento, Presidencia y Consejo de Gobierno." },
    { concept: "Parlamento andaluz", correct: "El Parlamento de Andalucía representa al pueblo andaluz.", explanation: "Ejerce potestad legislativa en el ámbito autonómico." },
    { concept: "Consejo de Gobierno", correct: "El Consejo de Gobierno ejerce funciones ejecutivas y administrativas.", explanation: "Es el órgano colegiado de gobierno de la Comunidad Autónoma." },
    { concept: "Presidencia", correct: "La Presidencia dirige y coordina la actividad del Consejo de Gobierno.", explanation: "También ostenta la suprema representación de Andalucía." },
    { concept: "competencias sanitarias", correct: "Andalucía tiene competencias en materia sanitaria dentro del marco legal.", explanation: "Por eso el SAS depende de la administración sanitaria andaluza." },
    { concept: "derechos sociales", correct: "El Estatuto recoge derechos sociales de la ciudadanía andaluza.", explanation: "Incluye referencias a salud, igualdad y servicios públicos." },
    { concept: "igualdad", correct: "Los poderes públicos andaluces deben promover condiciones de igualdad real.", explanation: "La igualdad es un principio transversal del Estatuto." },
    { concept: "territorio", correct: "Andalucía se organiza territorialmente en municipios y provincias.", explanation: "Es una pregunta básica de organización territorial." },
    { concept: "SAS", correct: "El Servicio Andaluz de Salud forma parte del sistema sanitario público andaluz.", explanation: "Es el organismo clave para la oposición TCAE SAS." },
  ],
  "tema-3": [
    { concept: "Sistema Nacional de Salud", correct: "El SNS se basa en cobertura pública y coordinación entre servicios de salud.", explanation: "Es la estructura general de la sanidad pública española." },
    { concept: "atención primaria", correct: "La atención primaria es el primer nivel de acceso ordinario al sistema sanitario.", explanation: "Coordina prevención, asistencia y seguimiento." },
    { concept: "atención especializada", correct: "La atención especializada atiende procesos que requieren medios diagnósticos o terapéuticos más complejos.", explanation: "Incluye asistencia hospitalaria y consultas especializadas." },
    { concept: "salud pública", correct: "La salud pública se orienta a proteger y mejorar la salud de la población.", explanation: "Incluye prevención, vigilancia y promoción de la salud." },
    { concept: "derechos del usuario", correct: "El usuario tiene derecho a información sanitaria comprensible.", explanation: "La información forma parte de una atención de calidad." },
    { concept: "continuidad asistencial", correct: "La continuidad asistencial evita cortes entre niveles de atención.", explanation: "Es esencial entre primaria, especializada y cuidados posteriores." },
    { concept: "promoción de la salud", correct: "La promoción de la salud busca mejorar hábitos y entornos saludables.", explanation: "No se limita a tratar enfermedad." },
    { concept: "prevención", correct: "La prevención intenta evitar la aparición o progresión de enfermedades.", explanation: "Puede ser primaria, secundaria o terciaria." },
    { concept: "equidad", correct: "La equidad implica acceso según necesidad y sin discriminación.", explanation: "Es un principio habitual del sistema sanitario." },
    { concept: "SAS", correct: "El SAS presta asistencia sanitaria pública en Andalucía.", explanation: "Es el contexto específico de la oposición." },
  ],
  "tema-5": [
    { concept: "datos de salud", correct: "Los datos de salud son categorías especiales de datos.", explanation: "Requieren protección reforzada por su sensibilidad." },
    { concept: "consentimiento", correct: "El consentimiento debe ser libre, específico, informado e inequívoco.", explanation: "Es la fórmula clásica del RGPD." },
    { concept: "confidencialidad", correct: "Todo profesional con acceso a información sanitaria debe guardar secreto.", explanation: "También afecta al TCAE." },
    { concept: "minimización", correct: "Solo deben tratarse los datos necesarios para la finalidad asistencial.", explanation: "Es el principio de minimización de datos." },
    { concept: "seguridad", correct: "Las claves de acceso no deben compartirse.", explanation: "Compartir credenciales rompe la trazabilidad y la seguridad." },
    { concept: "historia clínica", correct: "El acceso a la historia clínica debe estar justificado por la asistencia.", explanation: "No se puede consultar por curiosidad." },
    { concept: "derecho de supresión", correct: "El interesado puede solicitar supresión cuando proceda legalmente.", explanation: "Es uno de los derechos reconocidos en protección de datos." },
    { concept: "brecha de seguridad", correct: "Una brecha debe comunicarse siguiendo el protocolo del centro.", explanation: "No se debe ocultar ni improvisar." },
    { concept: "información verbal", correct: "También la información comentada verbalmente está sujeta a confidencialidad.", explanation: "No solo se protegen documentos o pantallas." },
    { concept: "fin de contrato", correct: "El deber de secreto continúa tras finalizar la relación laboral.", explanation: "La confidencialidad no termina al acabar el contrato." },
  ],
  "tema-6": [
    { concept: "Ley 31/1995", correct: "La Ley 31/1995 regula la prevención de riesgos laborales.", explanation: "Es una referencia frecuente en test." },
    { concept: "EPI", correct: "Los EPI se usan cuando el riesgo no puede evitarse por otros medios.", explanation: "Complementan, no sustituyen, las medidas preventivas." },
    { concept: "riesgo biológico", correct: "El pinchazo accidental es un riesgo biológico en el ámbito sanitario.", explanation: "Puede implicar exposición a sangre o fluidos." },
    { concept: "ergonomía", correct: "La ergonomía reduce lesiones musculoesqueléticas.", explanation: "Especialmente en movilización de pacientes." },
    { concept: "accidente laboral", correct: "Un accidente de trabajo debe comunicarse según el procedimiento establecido.", explanation: "Permite asistencia, registro y prevención posterior." },
    { concept: "higiene de manos", correct: "La higiene de manos reduce riesgo biológico.", explanation: "Es prevención para profesional y paciente." },
    { concept: "guantes", correct: "Los guantes no sustituyen la higiene de manos.", explanation: "Es una trampa muy habitual." },
    { concept: "carga", correct: "La manipulación de cargas debe hacerse con técnica segura.", explanation: "Evita lesiones lumbares." },
    { concept: "señalización", correct: "La señalización informa de riesgos y medidas de seguridad.", explanation: "No elimina el riesgo por sí sola." },
    { concept: "formación", correct: "El trabajador debe recibir información y formación preventiva.", explanation: "Es una obligación básica en PRL." },
  ],
  "tema-7": [
    { concept: "igualdad", correct: "La igualdad implica trato no discriminatorio.", explanation: "Es un principio básico en la atención sanitaria." },
    { concept: "violencia de género", correct: "Ante sospecha de violencia de género se debe seguir el protocolo del centro.", explanation: "El TCAE no debe actuar por libre ni ignorar signos de alarma." },
    { concept: "trato digno", correct: "El paciente debe recibir trato respetuoso y digno.", explanation: "Forma parte de la calidad asistencial." },
    { concept: "comunicación", correct: "La comunicación debe ser clara, respetuosa y adaptada al paciente.", explanation: "Mejora seguridad, confianza y adherencia." },
    { concept: "intimidad", correct: "La intimidad debe preservarse durante aseo, movilización y cuidados.", explanation: "Es esencial en el trabajo del TCAE." },
    { concept: "lenguaje inclusivo", correct: "El lenguaje debe evitar expresiones discriminatorias.", explanation: "Ayuda a una atención respetuosa." },
    { concept: "confidencialidad", correct: "Los datos de una víctima no deben comentarse fuera del circuito asistencial.", explanation: "Puede comprometer seguridad e intimidad." },
    { concept: "accesibilidad", correct: "La atención debe adaptarse a necesidades de comunicación o discapacidad.", explanation: "La accesibilidad favorece igualdad real." },
    { concept: "observación", correct: "El TCAE puede detectar señales de alarma durante los cuidados.", explanation: "Debe comunicarlo al equipo responsable." },
    { concept: "coordinación", correct: "La actuación ante casos sensibles requiere coordinación del equipo.", explanation: "Evita errores y protege al paciente." },
  ],
};

const sharedExamPoints: Array<{ concept: string; correct: string; explanation: string }> = [
  { concept: "historia clínica", correct: "La historia clínica reúne la información asistencial del paciente.", explanation: "Debe estar custodiada y accesible solo a profesionales autorizados." },
  { concept: "muestras", correct: "Toda muestra debe identificarse correctamente antes de enviarla.", explanation: "La identificación evita errores diagnósticos." },
  { concept: "constantes", correct: "Las constantes vitales deben registrarse y comunicarse si hay alteraciones.", explanation: "Permiten detectar cambios clínicos." },
  { concept: "cuidados básicos", correct: "Los cuidados básicos buscan confort, seguridad e higiene.", explanation: "Son tareas habituales del TCAE." },
  { concept: "bioética", correct: "La autonomía implica respetar decisiones informadas del paciente.", explanation: "Es uno de los principios bioéticos clásicos." },
  { concept: "infecciones", correct: "La higiene de manos es una medida esencial para prevenir infecciones.", explanation: "Es una pregunta típica y transversal." },
  { concept: "residuos", correct: "Los punzantes se depositan en contenedor rígido resistente a perforación.", explanation: "Evita pinchazos accidentales." },
  { concept: "esterilización", correct: "La esterilización destruye todas las formas de vida microbiana.", explanation: "Incluidas esporas, si el proceso es correcto." },
  { concept: "higiene", correct: "En el aseo del paciente encamado se preserva intimidad y temperatura.", explanation: "Además de limpieza, hay que cuidar confort y seguridad." },
  { concept: "nutrición", correct: "La disfagia aumenta el riesgo de aspiración.", explanation: "Requiere adaptar textura y vigilar durante la alimentación." },
];

const topicSpecificPoints: Record<string, Array<{ concept: string; correct: string; explanation: string }>> = {
  "tema-9": [
    { concept: "historia clínica", correct: "La historia clínica contiene datos asistenciales relevantes.", explanation: "Es el documento básico de continuidad asistencial." },
    { concept: "archivo", correct: "La documentación sanitaria debe archivarse con criterios de custodia y seguridad.", explanation: "No puede quedar expuesta o desordenada." },
    { concept: "registro", correct: "Los registros deben ser claros, fechados y veraces.", explanation: "Sirven para comunicar cuidados y garantizar trazabilidad." },
    { concept: "confidencialidad", correct: "No se debe comentar información clínica en zonas comunes.", explanation: "La documentación y la información verbal están protegidas." },
    { concept: "identificación", correct: "La documentación debe corresponder al paciente correcto.", explanation: "La identificación evita errores asistenciales." },
    ...sharedExamPoints.slice(0, 5),
  ],
  "tema-11": [
    { concept: "muestras", correct: "La muestra debe identificarse antes del transporte.", explanation: "La etiqueta incorrecta puede invalidar la prueba." },
    { concept: "orina", correct: "La muestra de orina debe recogerse en recipiente adecuado.", explanation: "Debe evitarse contaminación." },
    { concept: "transporte", correct: "Las muestras se transportan según protocolo de conservación.", explanation: "Temperatura y tiempo pueden alterar resultados." },
    { concept: "bioseguridad", correct: "Debe evitarse contacto directo con sangre o fluidos.", explanation: "Se usan guantes y medidas de protección." },
    { concept: "ayunas", correct: "Algunas muestras requieren condiciones previas como ayuno.", explanation: "Depende de la prueba solicitada." },
    ...sharedExamPoints.slice(1, 6),
  ],
  "tema-12": [
    { concept: "temperatura", correct: "La fiebre es elevación de la temperatura por encima de valores normales.", explanation: "Debe registrarse y valorarse con el contexto clínico." },
    { concept: "pulso", correct: "El pulso informa sobre frecuencia, ritmo e intensidad.", explanation: "No solo cuenta latidos por minuto." },
    { concept: "respiración", correct: "La frecuencia respiratoria debe observarse sin alterar el patrón del paciente.", explanation: "Si el paciente se siente observado puede modificarla." },
    { concept: "tensión arterial", correct: "El manguito debe ser adecuado al brazo del paciente.", explanation: "Un tamaño incorrecto altera la medición." },
    { concept: "registro", correct: "Las constantes se anotan y se comunican si son anormales.", explanation: "El TCAE colabora en vigilancia y comunicación." },
    ...sharedExamPoints.slice(2, 7),
  ],
  "tema-13": [
    { concept: "seguridad", correct: "La cama debe quedar frenada tras movilizar al paciente.", explanation: "Previene caídas y accidentes." },
    { concept: "confort", correct: "La posición del paciente debe favorecer comodidad y seguridad.", explanation: "El confort también previene complicaciones." },
    { concept: "movilización", correct: "Antes de movilizar se informa al paciente si su estado lo permite.", explanation: "Mejora colaboración y reduce miedo." },
    { concept: "barandillas", correct: "Las barandillas se usan según indicación y riesgo.", explanation: "No sustituyen la vigilancia." },
    { concept: "piel", correct: "La observación de la piel ayuda a detectar lesiones precozmente.", explanation: "Especialmente en pacientes inmóviles." },
    ...sharedExamPoints.slice(3, 8),
  ],
  "tema-14": [
    { concept: "autonomía", correct: "La autonomía exige respetar decisiones informadas del paciente.", explanation: "Es un principio básico de bioética." },
    { concept: "beneficencia", correct: "La beneficencia busca actuar en beneficio del paciente.", explanation: "Debe equilibrarse con autonomía y no maleficencia." },
    { concept: "no maleficencia", correct: "No maleficencia significa evitar causar daño.", explanation: "Es un principio clásico en asistencia sanitaria." },
    { concept: "justicia", correct: "Justicia implica trato equitativo y uso adecuado de recursos.", explanation: "No es tratar con favoritismos." },
    { concept: "consentimiento informado", correct: "El consentimiento requiere información comprensible.", explanation: "Sin información adecuada no hay consentimiento válido." },
    ...sharedExamPoints.slice(4, 9),
  ],
  "tema-15": [
    { concept: "higiene de manos", correct: "La higiene de manos corta la transmisión de microorganismos.", explanation: "Es la medida preventiva más repetida." },
    { concept: "fómites", correct: "Los fómites son objetos contaminados capaces de transmitir microorganismos.", explanation: "Ejemplo clásico: material o superficies contaminadas." },
    { concept: "aislamiento", correct: "El aislamiento se adapta a la vía de transmisión.", explanation: "No todos los aislamientos son iguales." },
    { concept: "asepsia", correct: "La asepsia busca evitar contaminación por microorganismos.", explanation: "Es clave en técnicas y cuidados." },
    { concept: "gotas", correct: "Las gotas de Pflügge se relacionan con transmisión a corta distancia.", explanation: "Pregunta típica de infecciones." },
    ...sharedExamPoints.slice(5, 10),
  ],
  "tema-16": [
    { concept: "punzantes", correct: "Agujas y punzantes se eliminan en contenedor rígido.", explanation: "Evita pinchazos y exposición biológica." },
    { concept: "citostáticos", correct: "Los residuos citostáticos requieren gestión específica.", explanation: "Presentan riesgo químico y sanitario." },
    { concept: "segregación", correct: "La segregación debe hacerse en el lugar donde se genera el residuo.", explanation: "Separar después aumenta riesgos." },
    { concept: "contenedor lleno", correct: "Un contenedor lleno debe cerrarse y retirarse según protocolo.", explanation: "No debe sobrellenarse." },
    { concept: "clasificación", correct: "Ante duda se consulta el protocolo del centro.", explanation: "No se improvisa la eliminación." },
    ...sharedExamPoints.slice(0, 5),
  ],
  "tema-17": [
    { concept: "limpieza", correct: "La limpieza elimina suciedad y reduce carga microbiana.", explanation: "Suele preceder a desinfección o esterilización." },
    { concept: "desinfección", correct: "La desinfección destruye muchos microorganismos patógenos.", explanation: "No siempre destruye esporas." },
    { concept: "esterilización", correct: "La esterilización destruye todas las formas de vida microbiana.", explanation: "Incluye esporas si el proceso es correcto." },
    { concept: "autoclave", correct: "El autoclave esteriliza mediante vapor a presión.", explanation: "Es un método frecuente en material termorresistente." },
    { concept: "material crítico", correct: "El material crítico requiere esterilización.", explanation: "Penetra tejidos estériles o sistema vascular." },
    ...sharedExamPoints.slice(1, 6),
  ],
  "tema-18": [
    { concept: "seguridad del paciente", correct: "La identificación correcta del paciente previene errores.", explanation: "Es una medida básica de seguridad." },
    { concept: "comunicación", correct: "La comunicación clara reduce ansiedad y mejora colaboración.", explanation: "También evita malentendidos." },
    { concept: "caídas", correct: "La prevención de caídas incluye entorno seguro y vigilancia del riesgo.", explanation: "Cama frenada, timbre accesible y suelo despejado ayudan." },
    { concept: "acompañamiento", correct: "El acompañamiento debe respetar intimidad y autonomía.", explanation: "No es invadir decisiones del paciente." },
    { concept: "eventos adversos", correct: "Un evento adverso debe comunicarse según protocolo.", explanation: "Ocultarlo impide prevenir repeticiones." },
    ...sharedExamPoints.slice(2, 7),
  ],
  "tema-19": [
    { concept: "aseo encamado", correct: "En el aseo se preserva intimidad, temperatura y seguridad.", explanation: "No es solo limpieza." },
    { concept: "zona genital", correct: "La zona genital suele lavarse al final.", explanation: "Reduce riesgo de contaminación." },
    { concept: "úlceras por presión", correct: "Los cambios posturales ayudan a prevenir úlceras por presión.", explanation: "Reducen presión mantenida sobre prominencias óseas." },
    { concept: "piel", correct: "La piel debe secarse bien, especialmente en pliegues.", explanation: "La humedad favorece maceración." },
    { concept: "cavidad oral", correct: "La higiene oral previene infecciones y mejora confort.", explanation: "También es importante en pacientes dependientes." },
    ...sharedExamPoints.slice(3, 8),
  ],
  "tema-20": [
    { concept: "eliminación urinaria", correct: "Los cambios en diuresis deben observarse y comunicarse.", explanation: "Pueden indicar alteraciones clínicas." },
    { concept: "sondaje", correct: "El sistema de drenaje urinario debe mantenerse cerrado.", explanation: "Reduce riesgo de infección urinaria." },
    { concept: "diarrea", correct: "La diarrea aumenta riesgo de deshidratación y alteración cutánea.", explanation: "Requiere vigilancia e higiene cuidadosa." },
    { concept: "vómitos", correct: "Ante vómitos se vigila riesgo de aspiración.", explanation: "Especialmente en pacientes con bajo nivel de conciencia." },
    { concept: "muestra de heces", correct: "La muestra de heces se recoge en recipiente adecuado y limpio.", explanation: "Evita contaminación o rechazo de la muestra." },
    ...sharedExamPoints.slice(4, 9),
  ],
  "tema-21": [
    { concept: "disfagia", correct: "La disfagia aumenta el riesgo de aspiración.", explanation: "Puede requerir textura adaptada." },
    { concept: "dieta absoluta", correct: "Dieta absoluta significa no administrar alimentos ni líquidos por vía oral.", explanation: "Debe respetarse si está indicada." },
    { concept: "hidratación", correct: "La hidratación debe vigilarse especialmente en pacientes dependientes.", explanation: "Pueden no pedir agua aunque la necesiten." },
    { concept: "nutrición enteral", correct: "La nutrición enteral se administra por vía digestiva mediante sonda.", explanation: "No debe confundirse con parenteral." },
    { concept: "diabetes", correct: "En diabetes se controlan horarios, dieta y signos de hipoglucemia.", explanation: "La alimentación influye directamente en glucemia." },
    ...sharedExamPoints.slice(5, 10),
  ],
  "tema-22": [
    { concept: "ergonomía", correct: "La espalda debe mantenerse alineada al movilizar cargas o pacientes.", explanation: "Reduce lesiones musculoesqueléticas." },
    { concept: "transferencias", correct: "En transferencias se debe explicar el movimiento al paciente si colabora.", explanation: "Mejora seguridad y coordinación." },
    { concept: "inmovilización", correct: "La inmovilización debe vigilar color, sensibilidad y dolor distal.", explanation: "Ayuda a detectar compromiso circulatorio o nervioso." },
    { concept: "ayudas técnicas", correct: "Las ayudas técnicas reducen esfuerzo y riesgo de lesión.", explanation: "Deben usarse correctamente." },
    { concept: "caídas", correct: "Tras una caída no se moviliza sin valorar la situación.", explanation: "Puede haber lesión no visible." },
    ...sharedExamPoints.slice(0, 5),
  ],
};

const makeQuestions = (topic: TopicTest): Question[] => {
  const points = topicSpecificPoints[topic.id] || examPoints[topic.id] || sharedExamPoints;
  const questionTemplates = [
    (concept: string) => `Respecto a ${concept}, señale la respuesta correcta:`,
    (concept: string) => `En relación con ${concept}, ¿cuál de las siguientes afirmaciones es correcta?`,
    (concept: string) => `Sobre ${concept}, indique la opción correcta:`,
    (concept: string) => `¿Cuál de las siguientes respuestas es correcta en relación con ${concept}?`,
    (concept: string) => `En la práctica asistencial del TCAE, respecto a ${concept}:`,
  ];
  const wrongOptions = [
    (concept: string) => `Debe realizarse siempre sin consultar normas ni protocolos.`,
    (concept: string) => `No tiene relación con la seguridad del paciente ni con los cuidados.`,
    (concept: string) => `Lo prioritario es actuar con rapidez aunque se omitan medidas de seguridad.`,
    (concept: string) => `Solo corresponde al personal médico y nunca afecta al TCAE.`,
    (concept: string) => `Puede ignorarse si el paciente no lo solicita expresamente.`,
  ];
  return points.slice(0, 10).map((point, index) => {
    const distractors = [
      wrongOptions[index % wrongOptions.length](point.concept),
      wrongOptions[(index + 1) % wrongOptions.length](point.concept),
      wrongOptions[(index + 2) % wrongOptions.length](point.concept),
    ];
    const correctIndex = index % 4;
    const options = [...distractors];
    options.splice(correctIndex, 0, point.correct);
    return {
      question: questionTemplates[index % questionTemplates.length](point.concept),
      options,
      correct: String.fromCharCode(65 + correctIndex),
      explanation: point.explanation,
    };
  });
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
