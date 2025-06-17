// --- BANCO DE PREGUNTAS (20 PREGUNTAS CON DISTRACTORES AVANZADOS) ---
const bancoDePreguntas = [
  // --- Bloque 1: Objetivos del examen (2 preguntas) ---
  { id: 1, pregunta: "Según la guía (pág. 8), ¿cuál de las siguientes afirmaciones describe de forma más completa uno de los objetivos del examen Saber 11?", opciones: { a: "Ofrecer un referente para el establecimiento de políticas educativas a nivel nacional.", b: "Proporcionar al estudiante elementos para su autoevaluación y la construcción de su proyecto de vida.", c: "Proporcionar a las instituciones educativas información sobre las competencias de sus aspirantes.", d: "Comprobar el grado de desarrollo de las competencias de los estudiantes que finalizan la educación media." }, respuestaCorrecta: "b" },
  { id: 2, pregunta: "¿Cuál es un objetivo del examen Saber 11 que se relaciona directamente con la mejora continua de la educación en el país?", opciones: { a: "Evaluar las cinco áreas del conocimiento: Matemáticas, Lectura, Sociales, Ciencias e Inglés.", b: "Servir como fuente de información para construir indicadores de calidad de la educación.", c: "Habilitar a los mayores de 18 años para obtener su título de bachiller.", d: "Diseñar programas de nivelación académica para la prevención de la deserción universitaria." }, respuestaCorrecta: "b" },
  // --- Bloque 2: Estructura y áreas (3 preguntas) --- 
  { id: 3, pregunta: "De acuerdo con la Tabla 1 (pág. 11), ¿cómo se distribuye la prueba de Lectura Crítica en las sesiones del cuadernillo estándar?", opciones: { a: "Se divide en dos partes iguales, con 20 preguntas en cada sesión.", b: "Se evalúa completamente en la segunda sesión con 41 preguntas.", c: "Se presenta con 41 preguntas en la primera sesión y no aparece en la segunda.", d: "Se distribuye con 25 preguntas en la primera sesión y 16 en la segunda." }, respuestaCorrecta: "c" },
  { id: 4, pregunta: "Si sumamos el total de preguntas de las pruebas de Matemáticas y Ciencias Naturales en ambas sesiones (Tabla 1), ¿cuántas preguntas son?", opciones: { a: "Son 104 preguntas en total, 54 de Ciencias Naturales y 50 de Matemáticas.", b: "Son 108 preguntas en total, 58 de Ciencias Naturales y 50 de Matemáticas.", c: "Son 131 preguntas en total, que es el total de la primera sesión.", d: "Son 91 preguntas, sumando las 41 de Lectura y las 50 de Matemáticas." }, respuestaCorrecta: "b" },
  { id: 5, pregunta: "La estructura del examen Saber 11 se organiza en dos sesiones, cada una con una duración de:", opciones: { a: "4 horas, sin excepción.", b: "4 horas y 30 minutos.", c: "3 horas para la primera sesión y 5 para la segunda.", d: "Un tiempo variable según el número de preguntas por cuadernillo." }, respuestaCorrecta: "b" },
  // --- Bloque 3: Cuadernillo y especificaciones (3 preguntas) ---
  { id: 6, pregunta: "La hoja de respuestas del examen (pág. 22) requiere que el estudiante:", opciones: { a: "Marque con una 'X' la opción que considere correcta.", b: "Rellene completamente el círculo correspondiente a la opción seleccionada.", c: "Escriba la letra de la opción correcta en el espacio en blanco.", d: "Utilice un lápiz de tinta negra para evitar que se borren las respuestas." }, respuestaCorrecta: "b" },
  { id: 7, pregunta: "El 'cuadernillo' que se entrega al estudiante el día del examen (pág. 21) contiene:", opciones: { a: "Únicamente las preguntas de la prueba, sin incluir el cuestionario socioeconómico.", b: "Las preguntas de cada prueba y también el cuestionario socioeconómico.", c: "Las preguntas y, al final, una sección con las respuestas correctas para autoevaluación.", d: "Las instrucciones del examen y las hojas para realizar las operaciones matemáticas." }, respuestaCorrecta: "b" },
  { id: 8, pregunta: "El tipo de pregunta utilizado en la prueba, de selección múltiple con única respuesta, está conformado por:", opciones: { a: "Un enunciado, cuatro opciones de respuesta y una hoja de operaciones.", b: "Un enunciado, una tarea de evaluación y varias opciones de respuesta.", c: "Una situación, una tarea de evaluación y tres opciones de respuesta (A, B, C).", d: "Un texto, una pregunta sobre el texto y una sección para justificar la respuesta." }, respuestaCorrecta: "b" },
  // --- Bloque 4: Competencias, componentes y contenido (12 preguntas) ---
  { id: 9, pregunta: "En Matemáticas, la competencia de 'Argumentación' (pág. 27) evalúa la capacidad para:", opciones: { a: "Realizar cálculos numéricos complejos de manera rápida y precisa.", b: "Representar información cuantitativa en diferentes formatos como tablas y gráficas.", c: "Validar o refutar conclusiones y estrategias, justificando el porqué de los hallazgos.", d: "Plantear y diseñar estrategias para solucionar problemas matemáticos." }, respuestaCorrecta: "c" },
  { id: 10, pregunta: "La guía distingue entre contenidos 'genéricos' y 'no genéricos' en Matemáticas (pág. 28). ¿Cuál es la diferencia fundamental?", opciones: { a: "Los genéricos son más fáciles y los no genéricos son más difíciles.", b: "Los genéricos se aprenden en primaria y los no genéricos en bachillerato.", c: "Los genéricos son para interactuar en la sociedad y los no genéricos son propios del quehacer matemático escolar.", d: "Los genéricos se evalúan en la primera sesión y los no genéricos en la segunda." }, respuestaCorrecta: "c" },
  { id: 11, pregunta: "En Lectura Crítica, la competencia de 'Evaluar y reflexionar sobre la forma y el contenido' (pág. 36) implica:", opciones: { a: "Identificar qué personajes aparecen en un texto narrativo.", b: "Comprender el significado literal de las palabras y frases del texto.", c: "Identificar la intención comunicativa del autor y la validez de sus argumentos.", d: "Resumir las ideas principales de cada párrafo de un texto informativo." }, respuestaCorrecta: "c" },
  { id: 12, pregunta: "La prueba de Lectura Crítica utiliza textos 'discontinuos' (pág. 37). Un ejemplo de este tipo de texto es:", opciones: { a: "Una novela corta.", b: "Un ensayo filosófico.", c: "Una columna de opinión.", d: "Una infografía o una caricatura." }, respuestaCorrecta: "d" },
  { id: 13, pregunta: "En Sociales y Ciudadanas, la competencia 'Pensamiento social' (pág. 41) se refiere a la capacidad de:", opciones: { a: "Expresar opiniones personales sobre temas políticos controversiales.", b: "Usar y apropiarse de categorías básicas de las ciencias sociales y principios constitucionales.", c: "Analizar y comparar las perspectivas de diferentes actores en un conflicto social.", d: "Identificar las distintas dimensiones (social, económica, ambiental) de una problemática." }, respuestaCorrecta: "b" },
  { id: 14, pregunta: "La competencia 'Interpretación y análisis de perspectivas' en Sociales (pág. 43) requiere que el evaluado:", opciones: { a: "Conozca las fechas exactas de los eventos históricos más importantes de Colombia.", b: "Memorice la estructura completa de la Constitución Política de 1991.", c: "Analice una problemática desde los puntos de vista de diferentes actores sociales involucrados.", d: "Utilice conceptos como oferta y demanda para explicar fenómenos económicos." }, respuestaCorrecta: "c" },
  { id: 15, pregunta: "En Ciencias Naturales, ¿qué distingue a la competencia de 'Indagación' (pág. 53) de las otras?", opciones: { a: "Se enfoca en explicar fenómenos naturales basándose en teorías y modelos científicos.", b: "Se centra en el uso de conceptos y teorías para resolver problemas cuantitativos.", c: "Implica comprender cómo se construye el conocimiento científico a partir de preguntas y evidencias.", d: "Evalúa el conocimiento de los componentes biológico, físico y químico de la materia." }, respuestaCorrecta: "c" },
  { id: 16, pregunta: "El componente de 'Ciencia, Tecnología y Sociedad (CTS)' en la prueba de Ciencias Naturales (pág. 55) tiene como objetivo:", opciones: { a: "Evaluar el conocimiento de los últimos avances tecnológicos en áreas como la robótica.", b: "Medir la habilidad del estudiante para programar en lenguajes básicos.", c: "Estimular el pensamiento crítico sobre los efectos de la ciencia y la tecnología en la vida y la sociedad.", d: "Evaluar el conocimiento de los procesos de separación de mezclas y estequiometría." }, respuestaCorrecta: "c" },
  { id: 17, pregunta: "En la prueba de Inglés, el nivel 'A1' del MCER (pág. 57) corresponde a:", opciones: { a: "Un nivel avanzado que permite la comunicación fluida en cualquier contexto.", b: "Un nivel intermedio, capaz de comprender las ideas principales de textos complejos.", c: "Un nivel pre-intermedio, que no se evalúa en la prueba por ser demasiado bajo.", d: "Un desempeño básico que involucra el manejo de vocabulario y estructuras simples." }, respuestaCorrecta: "d" },
  { id: 18, pregunta: "La Parte 2 de la prueba de Inglés, 'Conocimiento Pragmático' (pág. 58), evalúa la habilidad de:", opciones: { a: "Comprender la gramática y elegir la palabra correcta para completar un texto.", b: "Relacionar descripciones con una lista de palabras de un vocabulario específico.", c: "Reconocer el propósito comunicativo de un aviso y el lugar donde podría aparecer.", d: "Entender la idea principal y los detalles de una conversación corta." }, respuestaCorrecta: "c" },
  { id: 19, pregunta: "El concepto de 'Afirmación' en el Diseño Centrado en Evidencias (pág. 23) se define como:", opciones: { a: "El tema general que se está evaluando, por ejemplo, 'Matemáticas'.", b: "Aquello específico que se espera que el evaluado sea capaz de saber-hacer dentro de una competencia.", c: "Las preguntas individuales que componen el cuadernillo de la prueba.", d: "La opinión personal que el estudiante tiene sobre la validez de una pregunta." }, respuestaCorrecta: "b" },
  { id: 20, pregunta: "La competencia 'Uso comprensivo del conocimiento científico' en Naturales (pág. 51) implica:", opciones: { a: "Diseñar experimentos para responder a una pregunta de investigación.", b: "Establecer relaciones entre conceptos y teorías para explicar fenómenos.", c: "Observar patrones en los datos para llegar a conclusiones sobre un fenómeno.", d: "Explicar los efectos de la explotación de un recurso en el entorno y la salud." }, respuestaCorrecta: "b" },
];

// --- SELECCIÓN DE ELEMENTOS DEL DOM ---
const welcomeScreen = document.getElementById('welcome-screen');
const testScreen = document.getElementById('test-screen');
const resultsScreen = document.getElementById('results-screen');

const startBtn = document.getElementById('start-btn');
const studentNameInput = document.getElementById('student-name');

const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');

const resultsTitle = document.getElementById('results-title');
const resultsMotivation = document.getElementById('results-motivation');
const scoreChart = document.getElementById('score-chart');
const scorePercentage = document.getElementById('score-percentage');
const correctCount = document.getElementById('correct-count');
const incorrectCount = document.getElementById('incorrect-count');
const resultsDetailsList = document.getElementById('results-details-list');

// --- ESTADO DE LA APLICACIÓN ---
let currentQuestionIndex = 0;
let userAnswers = {};
let studentName = "";

// --- LÓGICA DE LA APLICACIÓN ---
document.addEventListener('DOMContentLoaded', () => {
    startBtn.addEventListener('click', startTest);
    nextBtn.addEventListener('click', handleNextQuestion);
});

function startTest() {
    studentName = studentNameInput.value.trim();
    if (studentName === "") {
        alert("Por favor, escribe tu nombre para comenzar.");
        return;
    }
    welcomeScreen.classList.add('hidden');
    testScreen.classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    // Limpiar opciones anteriores
    optionsContainer.innerHTML = '';
    
    const question = bancoDePreguntas[currentQuestionIndex];
    questionText.innerText = question.pregunta;
    
    for (const key in question.opciones) {
        const option = document.createElement('button');
        option.classList.add('option-btn');
        option.innerHTML = `<span class="option-prefix">${key.toUpperCase()})</span> ${question.opciones[key]}`;
        option.onclick = () => selectAnswer(key, option);
        optionsContainer.appendChild(option);
    }
    
    updateProgress();
}

function selectAnswer(key, selectedButton) {
    // Guardar respuesta
    userAnswers[currentQuestionIndex] = key;
    
    // Actualizar estilo visual
    document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
    selectedButton.classList.add('selected');
}

function handleNextQuestion() {
    if (userAnswers[currentQuestionIndex] === undefined) {
        alert("Por favor, selecciona una opción antes de continuar.");
        return;
    }
    
    currentQuestionIndex++;
    
    if (currentQuestionIndex < bancoDePreguntas.length) {
        showQuestion();
        if (currentQuestionIndex === bancoDePreguntas.length - 1) {
            nextBtn.innerText = "Finalizar y Calificar";
        }
    } else {
        showResults();
    }
}

function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / bancoDePreguntas.length) * 100;
    progressBar.style.width = `${progress}%`;
    progressText.innerText = `Pregunta ${currentQuestionIndex + 1} de ${bancoDePreguntas.length}`;
}

function showResults() {
    testScreen.classList.add('hidden');
    resultsScreen.classList.remove('hidden');

    // Calcular puntaje
    let correct = 0;
    bancoDePreguntas.forEach((q, index) => {
        if (q.respuestaCorrecta === userAnswers[index]) {
            correct++;
        }
    });

    const score = Math.round((correct / bancoDePreguntas.length) * 100);
    const incorrect = bancoDePreguntas.length - correct;

    // Actualizar tarjeta de resultados
    resultsTitle.innerText = `¡Buen trabajo, ${studentName}!`;
    scorePercentage.innerText = `${score}%`;
    correctCount.innerText = correct;
    incorrectCount.innerText = incorrect;
    
    // Animar gráfico
    setTimeout(() => {
        scoreChart.style.backgroundImage = `conic-gradient(var(--correct-green) ${score * 3.6}deg, var(--light-gray) 0deg)`;
    }, 100);

    // Mensaje motivador
    if (score >= 80) {
        resultsMotivation.innerText = "¡Excelente! Tienes un conocimiento muy sólido de la prueba.";
    } else if (score >= 50) {
        resultsMotivation.innerText = "¡Muy bien! Tienes una buena base. ¡Sigue así para perfeccionarla!";
    } else {
        resultsMotivation.innerText = "¡Este es un gran punto de partida! Cada pregunta es una oportunidad de aprendizaje.";
    }
    
    // Mostrar desglose
    resultsDetailsList.innerHTML = '';
    bancoDePreguntas.forEach((q, index) => {
        const li = document.createElement('li');
        const isCorrect = q.respuestaCorrecta === userAnswers[index];
        li.classList.add(isCorrect ? 'correct' : 'incorrect');
        
        li.innerHTML = `
            <p class="question-detail-title">Pregunta ${index + 1}: ${isCorrect ? 'Correcta' : 'Incorrecta'}</p>
            <p>Tu respuesta: <strong>${userAnswers[index].toUpperCase()})</strong> ${q.opciones[userAnswers[index]]}</p>
            ${!isCorrect ? `<p>Respuesta correcta: <strong>${q.respuestaCorrecta.toUpperCase()})</strong> ${q.opciones[q.respuestaCorrecta]}</p>` : ''}
        `;
        resultsDetailsList.appendChild(li);
    });
}
