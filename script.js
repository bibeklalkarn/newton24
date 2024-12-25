// script.js

const questions = [
    // Most Difficult Mathematical Problems
    {
        question: "Solve: \\( \\int_{10}^{13} x^2 \\, dx \\)",
        answers: [
            { text: "69", correct: true },
            { text: "420", correct: false },
            { text: "690", correct: false },
            { text: "42", correct: false }
        ]
    },
    {
        question: "Solve: \\( \\lim_{x \\to 0} \\frac{e^x - 1}{x} \\)",
        answers: [
            { text: "1", correct: true },
            { text: "0", correct: false },
            { text: "Infinity", correct: false },
            { text: "Undefined", correct: false }
        ]
    },
    {
        question: "Solve: \\( \\frac{d}{dx} (\\ln(x)) \\)",
        answers: [
            { text: "1/x", correct: true },
            { text: "x", correct: false },
            { text: "ln(x)", correct: false },
            { text: "e^x", correct: false }
        ]
    },
    {
        question: "Find the derivative: \\( \\frac{d}{dx}(x^3) \\)",
        answers: [
            { text: "3x^2", correct: true },
            { text: "x^2", correct: false },
            { text: "3x", correct: false },
            { text: "x^3", correct: false }
        ]
    },
    {
        question: "Solve: \\( \\int_0^{\\pi} \\sin(x) \\, dx \\)",
        answers: [
            { text: "2", correct: true },
            { text: "1", correct: false },
            { text: "0", correct: false },
            { text: "-1", correct: false }
        ]
    },

    // Interesting Trivia Questions About Newton
    {
        question: "What did Newton reportedly see fall from a tree that inspired his work on gravity?",
        answers: [
            { text: "An apple", correct: true },
            { text: "An orange", correct: false },
            { text: "A leaf", correct: false },
            { text: "A branch", correct: false }
        ]
    },
    {
        question: "What year did Newton become a member of the Royal Society?",
        answers: [
            { text: "1672", correct: true },
            { text: "1650", correct: false },
            { text: "1687", correct: false },
            { text: "1701", correct: false }
        ]
    },
    {
        question: "What type of telescope did Newton invent?",
        answers: [
            { text: "Reflecting telescope", correct: true },
            { text: "Refracting telescope", correct: false },
            { text: "Radio telescope", correct: false },
            { text: "X-ray telescope", correct: false }
        ]
    },
    {
        question: "What role did Newton hold at the Royal Mint?",
        answers: [
            { text: "Master of the Mint", correct: true },
            { text: "Head Treasurer", correct: false },
            { text: "Goldsmith", correct: false },
            { text: "Coin Designer", correct: false }
        ]
    },
    {
        question: "What book did Newton publish in 1704 that explored optics?",
        answers: [
            { text: "Opticks", correct: true },
            { text: "Principia Mathematica", correct: false },
            { text: "On the Nature of Light", correct: false },
            { text: "Light and Gravity", correct: false }
        ]
    },
    {
        question: "What was Newton's mother's name?",
        answers: [
            { text: "Hannah Ayscough", correct: true },
            { text: "Mary Newton", correct: false },
            { text: "Elizabeth Smith", correct: false },
            { text: "Anne Ayscough", correct: false }
        ]
    },
    {
        question: "Where is Newton buried?",
        answers: [
            { text: "Westminster Abbey", correct: true },
            { text: "St. Paul's Cathedral", correct: false },
            { text: "Cambridge University", correct: false },
            { text: "Trinity Church", correct: false }
        ]
    },
    {
        question: "What plague forced Newton to leave Cambridge in 1665?",
        answers: [
            { text: "The Great Plague of London", correct: true },
            { text: "The Black Death", correct: false },
            { text: "The Flu Epidemic", correct: false },
            { text: "Cholera Outbreak", correct: false }
        ]
    },
    {
        question: "What university did Newton attend?",
        answers: [
            { text: "University of Cambridge", correct: true },
            { text: "Oxford University", correct: false },
            { text: "Harvard University", correct: false },
            { text: "University of London", correct: false }
        ]
    },
    {
        question: "What famous scientist is buried near Newton?",
        answers: [
            { text: "Charles Darwin", correct: true },
            { text: "Albert Einstein", correct: false },
            { text: "Stephen Hawking", correct: false },
            { text: "Michael Faraday", correct: false }
        ]
    },
    {
        question: "How old was Newton when he became a professor at Cambridge?",
        answers: [
            { text: "26", correct: true },
            { text: "30", correct: false },
            { text: "22", correct: false },
            { text: "28", correct: false }
        ]
    },
    {
        question: "What is Newton's full name?",
        answers: [
            { text: "Sir Isaac Newton", correct: true },
            { text: "Isaac Edward Newton", correct: false },
            { text: "Isaac Charles Newton", correct: false },
            { text: "Isaac Henry Newton", correct: false }
        ]
    },
    {
        question: "What was the title of Newton's 1671 Royal Society paper?",
        answers: [
            { text: "A New Theory about Light and Colours", correct: true },
            { text: "The Motion of Planets", correct: false },
            { text: "Laws of Motion", correct: false },
            { text: "The Theory of Gravitation", correct: false }
        ]
    },
    {
        question: "What title was bestowed upon Newton in 1705?",
        answers: [
            { text: "Knight Bachelor", correct: true },
            { text: "Lord of Cambridge", correct: false },
            { text: "Duke of Gravity", correct: false },
            { text: "Royal Scholar", correct: false }
        ]
    },
    {
        question: "What discovery is Newton famously associated with?",
        answers: [
            { text: "Universal Gravitation", correct: true },
            { text: "Theory of Evolution", correct: false },
            { text: "Atomic Theory", correct: false },
            { text: "Quantum Mechanics", correct: false }
        ]
    }
];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function getRandomQuestions(questionArray, count) {
    shuffle(questionArray);
    return questionArray.slice(0, count);
}

const randomizedQuestions = getRandomQuestions(questions, 10);

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const nextButton = document.getElementById('next-button');
const emotionImage = document.getElementById('emotion-image');
// Add a floating apple image to follow the mouse
// const appleImage = document.createElement('img');
// appleImage.src = 'apple.png'; // Ensure you have an apple.png file in your project
// appleImage.id = 'floating-apple';
// appleImage.style.position = 'absolute';
// appleImage.style.width = '50px';
// appleImage.style.height = '50px';
// appleImage.style.pointerEvents = 'none';
// appleImage.style.transition = 'transform 1s ease'; // Slow down the transition

// document.body.appendChild(appleImage);

// document.addEventListener('mousemove', (e) => {
//     appleImage.style.left = `${e.pageX}px`;
//     appleImage.style.top = `${e.pageY}px`;
//     // appleImage.style.transition = 'transform 30s ease';
// });
// document.addEventListener('mousemove', (e) => {
//     appleImage.style.transform = `translate(${e.pageX}px, ${e.pageY}px)`;
// });

// document.addEventListener('mousemove', (e) => {
//     const x = e.pageX - appleImage.offsetWidth / 2; // Center the apple horizontally
//     const y = e.pageY - appleImage.offsetHeight / 2; // Center the apple vertically
//     appleImage.style.transform = `translate(${e.pageX}px, ${e.pageY}px)`;
// });
// Create and style the floating apple image
const appleImage = document.createElement('img');
appleImage.src = 'apple.png'; // Ensure you have an apple.png file in your project
appleImage.id = 'floating-apple';
appleImage.style.position = 'fixed';
appleImage.style.width = '50px';
appleImage.style.height = '50px';
appleImage.style.pointerEvents = 'none';
document.body.appendChild(appleImage);

// Initialize position variables
let appleX = 0;
let appleY = 0;
let targetX = 0;
let targetY = 0;

// Update target position on mouse move
document.addEventListener('mousemove', (e) => {
    targetX = e.clientX - appleImage.offsetWidth / 2; // Center horizontally
    targetY = e.clientY - appleImage.offsetHeight / 2; // Center vertically
});

// Animation loop to create smooth movement
function animateApple() {
    appleX += (targetX - appleX) * 0.06; // Smoothly interpolate X position
    appleY += (targetY - appleY) * 0.06; // Smoothly interpolate Y position

    appleImage.style.left = `${appleX}px`;
    appleImage.style.top = `${appleY}px`;

    requestAnimationFrame(animateApple); // Repeat the animation
}

// Start the animation
animateApple();



function showQuestion() {
    resetState();
    const currentQuestion = randomizedQuestions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.classList.add('answer-button');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answersElement.appendChild(button);
    });

    emotionImage.src = 'neutral.png';
    MathJax.typesetPromise();
}

function resetState() {
    nextButton.classList.add('hidden');
    while (answersElement.firstChild) {
        answersElement.removeChild(answersElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';

    if (correct) {
        emotionImage.src = 'happy.png';
        score++;
    } else {
        emotionImage.src = 'sad.png';
    }

    Array.from(answersElement.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        } else {
            button.classList.add('wrong');
        }
    });

    nextButton.classList.remove('hidden');
}

function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < randomizedQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    resetState();
    questionElement.textContent = `You scored ${score} out of ${randomizedQuestions.length}!`;
    nextButton.textContent = 'Restart';
    nextButton.classList.remove('hidden');
    nextButton.addEventListener('click', () => {
        location.reload();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    showQuestion();
});

nextButton.addEventListener('click', showNextQuestion);
