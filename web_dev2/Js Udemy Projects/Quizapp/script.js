document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("Next-btn");
  const restartBtn = document.getElementById("restart-btn");
  const quizQuestions = document.getElementById("Quiz-questions");
  const quizOptions = document.getElementById("quiz-Options");
  const displaayScore = document.getElementById("score");
  const quizBox = document.getElementById("quiz-box");
  const result = document.getElementById("result");

  // constants can't be changed through any function

  const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "Who wrote 'Hamlet'?",
      choices: [
        "Charles Dickens",
        "Jane Austen",
        "William Shakespeare",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
    },
  ];

  let questionCurrentIndex = 0;
  let score = 0;
  let answered = false;

  nextBtn.addEventListener("click", () => {
    questionCurrentIndex++;
    if (questionCurrentIndex < questions.length) {
      showQuiz();
      // console.log(questionCurrentIndex);
    } else {
      displayResult();
    }
  });

  startBtn.addEventListener("click", () => {
    startBtn.classList.add("Hidden");
    quizBox.classList.remove("Hidden");
    result.classList.add("Hidden");
    //   nextBtn.classList.add('Hidden')
    showQuiz();
  });

  function showQuiz() {
    answered = false;
    nextBtn.classList.add("Hidden");
    quizQuestions.textContent = questions[questionCurrentIndex].question;
    quizOptions.innerHTML = "";
    questions[questionCurrentIndex].choices.forEach((element) => {
      const Li = document.createElement("li");
      Li.textContent = element;
      // console.log(element);
      Li.addEventListener("click", () => selectedAnswer(element));
      quizOptions.appendChild(Li);
    });
    // quizBox.innerHTML = ''
  }
  function selectedAnswer(params) {
    if (answered) return;
    answered = true;
    const correctAnswer = questions[questionCurrentIndex].answer;
    // console.log(correctAnswer);
    if (params === correctAnswer) {
      score++;
    }
    // console.log(score);
    nextBtn.classList.remove("Hidden");
  }

  restartBtn.addEventListener("click", () => {
    startBtn.classList.remove("Hidden");
    quizBox.classList.add("Hidden");
    result.classList.add("Hidden");
    questionCurrentIndex = 0;
    score = 0;
  });

  function displayResult() {
    result.classList.remove("Hidden");
    restartBtn.classList.remove("Hidden");
    quizBox.classList.add("Hidden");
    displaayScore.textContent = `${score} out of ${questions.length}`;
  }
});
