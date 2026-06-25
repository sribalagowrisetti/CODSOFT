const questions = [
{
    question: "If a tomato is a fruit, what is ketchup?",
    answers: [
        { text: "A smoothie", correct: true },
        { text: "A vegetable", correct: false },
        { text: "A toy", correct: false },
        { text: "A planet", correct: false }
    ]
},
{
    question: "Which animal would make the best software engineer?",
    answers: [
        { text: "Cat", correct: false },
        { text: "Dog", correct: false },
        { text: "Octopus", correct: true },
        { text: "Cow", correct: false }
    ]
},
{
    question: "What is the most important part of a pizza?",
    answers: [
        { text: "The box", correct: false },
        { text: "The cheese", correct: true },
        { text: "The bill", correct: false },
        { text: "The advertisement", correct: false }
    ]
},
{
    question: "Why did the computer go to the doctor?",
    answers: [
        { text: "It had a virus", correct: true },
        { text: "It was hungry", correct: false },
        { text: "It wanted coffee", correct: false },
        { text: "It lost its shoes", correct: false }
    ]
},
{
    question: "If Monday had a face, what would it look like?",
    answers: [
        { text: "Sleeping 😴", correct: true },
        { text: "Dancing 💃", correct: false },
        { text: "Laughing 😂", correct: false },
        { text: "Flying 🚀", correct: false }
    ]
},
{
    question: "What is a student's superpower before exams?",
    answers: [
        { text: "Flying", correct: false },
        { text: "Becoming invisible", correct: false },
        { text: "Learning a whole semester in one night", correct: true },
        { text: "Talking to animals", correct: false }
    ]
}
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const resultBox = document.getElementById("result-box");
const scoreText = document.getElementById("score");
const questionNumber = document.getElementById("question-number");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {

    resetState();

    questionNumber.innerText =
    "Question " + (currentQuestionIndex + 1) + "/" + questions.length;

    let currentQuestion = questions[currentQuestionIndex];

    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {

        const button = document.createElement("button");

        button.innerText = answer.text;

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", selectAnswer);

        answerButtons.appendChild(button);
    });
}

function resetState() {

    nextButton.style.display = "none";

    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {

    const selectedBtn = e.target;

    const correct =
    selectedBtn.dataset.correct === "true";

    if (correct) {
        score++;
        selectedBtn.classList.add("correct");
    } else {
        selectedBtn.classList.add("wrong");
    }

    Array.from(answerButtons.children).forEach(button => {

        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }

        button.disabled = true;
    });

    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {

        showQuestion();

    } else {

        showScore();
    }
});

function showScore() {

    document.getElementById("quiz").classList.add("hide");

    questionNumber.style.display = "none";

    resultBox.classList.remove("hide");

    scoreText.innerHTML =
    "<h2>🎉 Your Score: " + score + " / " + questions.length + "</h2>";
}

startQuiz();
