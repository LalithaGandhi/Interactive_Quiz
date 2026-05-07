// 1. Question Bank
const quizData = [
    {
        question: "Which CSS property is used to create space around elements, outside of any defined borders?",
        a: "padding",
        b: "spacing",
        c: "margin",
        d: "border-width",
        correct: "c",
        image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=400&q=80",
        hint: "Think about the box model 'outside' the border.",
        explanation: "Margin creates space around the element, whereas padding creates space inside the border."
    },
    {
        question: "What does HTML stand for?",
        a: "Hyper Text Markup Language",
        b: "High Tech Modern Language",
        c: "Hyperlink and Text Management",
        d: "Home Tool Markup Language",
        correct: "a",
        hint: "It is the standard markup language for documents designed to be displayed in a web browser.",
        explanation: "HTML is the backbone of the web, standing for Hyper Text Markup Language."
    },
    {
        question: "Which CSS property controls text size?",
        a: "font-style",
        b: "text-size",
        c: "font-size",
        d: "text-style",
        correct: "c",
        hint: "It includes the word 'font'.",
        explanation: "The font-size property is used to change the size of the text."
    },
    {
        question: "Which sign does jQuery use as a shortcut?",
        a: "%",
        b: "?",
        c: "$",
        d: "!",
        correct: "c",
        hint: "It is a common currency symbol.",
        explanation: "jQuery uses the dollar sign ($) as a shorthand for the jQuery function."
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        a: "msg('Hello World');",
        b: "alert('Hello World');",
        c: "msgBox('Hello World');",
        d: "alertBox('Hello World');",
        correct: "b",
        hint: "The function name is only 5 letters long.",
        explanation: "The alert() method displays an alert box with a specified message and an OK button."
    }
];

// 2. Selectors
const questionText = document.getElementById('questionText');
const optionsGrid = document.getElementById('optionsGrid');
const nextBtn = document.getElementById('nextBtn');
const progress = document.getElementById('progress');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const timerDisplay = document.getElementById('timeLeft');
const questionImage = document.getElementById('questionImage');
const feedbackArea = document.getElementById('feedback-area');
const explanationText = document.getElementById('explanationText');
const hintBtn = document.getElementById('hintBtn');

let currentIdx = 0;
let score = 0;
let timeLeft = 15;
let timer;

// 3. Helper Function: Get Selected Answer
function getSelected() {
    const answers = document.querySelectorAll('input[name="answer"]');
    let selected = null;
    answers.forEach(ans => {
        if(ans.checked) {
            selected = ans.id;
        }
    });
    return selected;
}

// 4. Timer Logic
function startTimer() {
    timeLeft = 15;
    timerDisplay.innerText = timeLeft;
    
    clearInterval(timer); 
    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.innerText = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            handleNext(); // Move to next even if no answer selected
        }
    }, 1000);
}

// 5. Populate Quiz
function loadQuiz() {
    const currentQuiz = quizData[currentIdx];
    
    // Reset UI
    feedbackArea.classList.add('hidden');
    nextBtn.disabled = true;
    nextBtn.innerText = "Next Question";
    progress.innerText = `Question ${currentIdx + 1} of ${quizData.length}`;
    
    startTimer();

    // Set Content
    questionText.innerText = currentQuiz.question;
    
    if (currentQuiz.image) {
        questionImage.src = currentQuiz.image;
        questionImage.style.display = 'block';
    } else {
        questionImage.style.display = 'none';
    }

    optionsGrid.innerHTML = '';
    ['a', 'b', 'c', 'd'].forEach(letter => {
        const optionDiv = document.createElement('div');
        optionDiv.innerHTML = `
            <input type="radio" name="answer" id="${letter}" value="${letter}">
            <label for="${letter}" class="option-label" style="display:block; padding:10px; border:1px solid #ddd; margin:5px; border-radius:5px; cursor:pointer;">
                ${currentQuiz[letter]}
            </label>
        `;
        optionsGrid.appendChild(optionDiv);
    });

    // Add listener to enable button
    const radioButtons = document.querySelectorAll('input[name="answer"]');
    radioButtons.forEach(radio => {
        radio.addEventListener('change', () => {
            nextBtn.disabled = false;
        });
    });
}

// 6. Navigation and Scoring
function handleNext() {
    clearInterval(timer); 
    const answer = getSelected();
    const currentQuiz = quizData[currentIdx];

    // Show feedback
    explanationText.innerText = currentQuiz.explanation || "Moving to next question...";
    feedbackArea.classList.remove('hidden');
    
    // Disable inputs
    document.querySelectorAll('input[name="answer"]').forEach(input => input.disabled = true);

    if (answer === currentQuiz.correct) {
        score++;
    }

    nextBtn.disabled = true;
    nextBtn.innerText = "Loading...";

    setTimeout(() => {
        currentIdx++;
        if (currentIdx < quizData.length) {
            loadQuiz();
        } else {
            showResults();
        }
    }, 2500); 
}

function showResults() {
    clearInterval(timer);
    quizContainer.classList.add('hidden');
    document.querySelector('.footer-controls').classList.add('hidden');
    
    resultContainer.classList.remove('hidden');
    document.getElementById('score-text').innerText = `You answered ${score}/${quizData.length} questions correctly.`;
}

// 7. Event Listeners
nextBtn.addEventListener('click', handleNext);
hintBtn.addEventListener('click', () => {
    alert("Hint: " + (quizData[currentIdx].hint || "No hint available for this question."));
});

// Start the app
loadQuiz();