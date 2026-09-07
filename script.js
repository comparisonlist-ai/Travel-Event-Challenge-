/*
    EVENT DESTINATION CHALLENGE
    Version 1.0

    Initial events:
    1. Mumbai - Global FinTech Fest
    2. Aichi-Nagoya - Asian Games 2026
    3. Montreal - UCI Road World Championships
*/


const questions = [

    // MUMBAI
    {
        city: "Mumbai",
        country: "India",
        flag: "🇮🇳",
        category: "INDIA",
        event: "Global FinTech Fest",
        date: "8–11 September 2026",
        question:
            "Which Indian city will host Global FinTech Fest from 8–11 September 2026?",
        options: [
            "Mumbai",
            "Delhi",
            "Bengaluru",
            "Hyderabad"
        ],
        answer: "Mumbai",
        hint: "It is India's financial capital.",
        image: "mumbai.jpg"
    },

    {
        city: "Mumbai",
        country: "India",
        flag: "🇮🇳",
        category: "INDIA",
        event: "Global FinTech Fest",
        date: "8–11 September 2026",
        question:
            "Global FinTech Fest 2026 is scheduled to take place in which Indian city?",
        options: [
            "Pune",
            "Mumbai",
            "Chennai",
            "Kolkata"
        ],
        answer: "Mumbai",
        hint: "Think of India's major financial centre.",
        image: "mumbai.jpg"
    },

    {
        city: "Mumbai",
        country: "India",
        flag: "🇮🇳",
        category: "INDIA",
        event: "Global FinTech Fest",
        date: "8–11 September 2026",
        question:
            "Which city is famous for the Gateway of India and will host GFF 2026?",
        options: [
            "Ahmedabad",
            "Mumbai",
            "Jaipur",
            "Goa"
        ],
        answer: "Mumbai",
        hint: "The Gateway of India is here.",
        image: "mumbai.jpg"
    },



    // AICHI-NAGOYA
    {
        city: "Aichi–Nagoya",
        country: "Japan",
        flag: "🇯🇵",
        category: "JAPAN",
        event: "Asian Games 2026",
        date: "19 September–4 October 2026",
        question:
            "Which Japanese region will host the 2026 Asian Games?",
        options: [
            "Tokyo",
            "Osaka",
            "Aichi–Nagoya",
            "Kyoto"
        ],
        answer: "Aichi–Nagoya",
        hint: "The host region is named Aichi–Nagoya.",
        image: "nagoya.jpg"
    },

    {
        city: "Aichi–Nagoya",
        country: "Japan",
        flag: "🇯🇵",
        category: "JAPAN",
        event: "Asian Games 2026",
        date: "19 September–4 October 2026",
        question:
            "The 2026 Asian Games will take place in which Japanese host region?",
        options: [
            "Hokkaido",
            "Aichi–Nagoya",
            "Okinawa",
            "Fukuoka"
        ],
        answer: "Aichi–Nagoya",
        hint: "Nagoya is the main city of the host region.",
        image: "nagoya.jpg"
    },

    {
        city: "Aichi–Nagoya",
        country: "Japan",
        flag: "🇯🇵",
        category: "JAPAN",
        event: "Asian Games 2026",
        date: "19 September–4 October 2026",
        question:
            "Which city gives its name to the host area of the 2026 Asian Games?",
        options: [
            "Nagoya",
            "Sapporo",
            "Kobe",
            "Nara"
        ],
        answer: "Nagoya",
        hint: "It is one of Japan's largest cities.",
        image: "nagoya.jpg"
    },



    // MONTREAL
    {
        city: "Montréal",
        country: "Canada",
        flag: "🇨🇦",
        category: "CANADA",
        event: "UCI Road World Championships",
        date: "20–27 September 2026",
        question:
            "Which Canadian city will host the UCI Road World Championships from 20–27 September 2026?",
        options: [
            "Toronto",
            "Vancouver",
            "Montréal",
            "Calgary"
        ],
        answer: "Montréal",
        hint: "It is a major French-speaking city in Canada.",
        image: "montreal.jpg"
    },

    {
        city: "Montréal",
        country: "Canada",
        flag: "🇨🇦",
        category: "CANADA",
        event: "UCI Road World Championships",
        date: "20–27 September 2026",
        question:
            "The 2026 UCI Road World Championships will be held in which Canadian city?",
        options: [
            "Ottawa",
            "Montréal",
            "Quebec City",
            "Edmonton"
        ],
        answer: "Montréal",
        hint: "The city is in the province of Quebec.",
        image: "montreal.jpg"
    },

    {
        city: "Montréal",
        country: "Canada",
        flag: "🇨🇦",
        category: "CANADA",
        event: "UCI Road World Championships",
        date: "20–27 September 2026",
        question:
            "Which city is known for Mount Royal and will host the 2026 cycling world championships?",
        options: [
            "Montréal",
            "Toronto",
            "Winnipeg",
            "Halifax"
        ],
        answer: "Montréal",
        hint: "The answer is in the name of this question's event destination.",
        image: "montreal.jpg"
    },



    // EXTRA QUESTIONS
    {
        city: "Mumbai",
        country: "India",
        flag: "🇮🇳",
        category: "INDIA",
        event: "Global FinTech Fest",
        date: "8–11 September 2026",
        question:
            "Which destination should a traveler consider if attending Global FinTech Fest 2026?",
        options: [
            "Mumbai",
            "Agra",
            "Shimla",
            "Kochi"
        ],
        answer: "Mumbai",
        hint: "It is on India's western coast.",
        image: "mumbai.jpg"
    },

    {
        city: "Aichi–Nagoya",
        country: "Japan",
        flag: "🇯🇵",
        category: "JAPAN",
        event: "Asian Games 2026",
        date: "19 September–4 October 2026",
        question:
            "Which destination is preparing to welcome athletes for the 2026 Asian Games?",
        options: [
            "Nagoya",
            "Tokyo",
            "Yokohama",
            "Kamakura"
        ],
        answer: "Nagoya",
        hint: "Look for the city in central Japan.",
        image: "nagoya.jpg"
    },

    {
        city: "Montréal",
        country: "Canada",
        flag: "🇨🇦",
        category: "CANADA",
        event: "UCI Road World Championships",
        date: "20–27 September 2026",
        question:
            "Where will cycling fans gather for the 2026 UCI Road World Championships?",
        options: [
            "Montréal",
            "Vancouver",
            "Toronto",
            "Victoria"
        ],
        answer: "Montréal",
        hint: "This city is in Quebec.",
        image: "montreal.jpg"
    },

    {
        city: "Mumbai",
        country: "India",
        flag: "🇮🇳",
        category: "INDIA",
        event: "Global FinTech Fest",
        date: "8–11 September 2026",
        question:
            "Which city is often called India's financial capital?",
        options: [
            "Mumbai",
            "Delhi",
            "Lucknow",
            "Surat"
        ],
        answer: "Mumbai",
        hint: "Bollywood is also strongly associated with this city.",
        image: "mumbai.jpg"
    },

    {
        city: "Aichi–Nagoya",
        country: "Japan",
        flag: "🇯🇵",
        category: "JAPAN",
        event: "Asian Games 2026",
        date: "19 September–4 October 2026",
        question:
            "Which Japanese city is the main city in the Aichi–Nagoya 2026 Asian Games host area?",
        options: [
            "Nagoya",
            "Osaka",
            "Tokyo",
            "Kobe"
        ],
        answer: "Nagoya",
        hint: "The city appears in the event's host name.",
        image: "nagoya.jpg"
    },

    {
        city: "Montréal",
        country: "Canada",
        flag: "🇨🇦",
        category: "CANADA",
        event: "UCI Road World Championships",
        date: "20–27 September 2026",
        question:
            "Which Canadian destination combines cycling competition with famous landmarks such as Mount Royal?",
        options: [
            "Montréal",
            "Calgary",
            "Ottawa",
            "Toronto"
        ],
        answer: "Montréal",
        hint: "It is Canada's major French-speaking metropolis.",
        image: "montreal.jpg"
    }

];



/* GAME STATE */

let currentQuestion = 0;
let score = 0;
let lives = 3;
let correctAnswers = 0;
let answered = false;



/* ELEMENTS */

const homeScreen = document.getElementById("homeScreen");
const gameScreen = document.getElementById("gameScreen");
const resultScreen = document.getElementById("resultScreen");

const startBtn = document.getElementById("startBtn");
const homeBtn = document.getElementById("homeBtn");

const questionNumber = document.getElementById("questionNumber");
const progressBar = document.getElementById("progressBar");
const scoreDisplay = document.getElementById("score");
const livesDisplay = document.getElementById("livesDisplay");

const categoryBadge = document.getElementById("categoryBadge");
const questionText = document.getElementById("questionText");
const answersContainer = document.getElementById("answers");

const hintBtn = document.getElementById("hintBtn");
const hintText = document.getElementById("hintText");

const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");

const finalScore = document.getElementById("finalScore");
const correctCount = document.getElementById("correctCount");
const totalCount = document.getElementById("totalCount");
const resultMessage = document.getElementById("resultMessage");

const playAgainBtn = document.getElementById("playAgainBtn");
const resultHomeBtn = document.getElementById("resultHomeBtn");



/* SCREEN CONTROL */

function showScreen(screen) {

    homeScreen.classList.remove("active");
    gameScreen.classList.remove("active");
    resultScreen.classList.remove("active");

    screen.classList.add("active");

}

async function loadEventsFromJSON() {

    alert("1. Starting fetch");

    try {

        const response = await fetch("events.json");

        alert("2. Fetch completed");

        alert("Status: " + response.status);

        const events = await response.json();

        alert("3. JSON parsed");

        const loadedQuestions = [];

        Object.values(events).forEach(event => {

            event.questions.forEach(q => {

                loadedQuestions.push({
                    city: event.city,
                    country: event.country,
                    flag: event.flag,
                    category: event.category,
                    event: event.event,
                    date: event.date,
                    question: q.question,
                    options: q.options,
                    answer: q.answer,
                    hint: q.hint,
                    image: event.image
                });

            });

        });

        alert("4. Questions created: " + loadedQuestions.length);

        return loadedQuestions;

    } catch (error) {

        alert("ERROR: " + error.message);

        console.error(error);

        return null;
    }
}


/* START GAME */


async function startGame() {

    currentQuestion = 0;
    score = 0;
    lives = 3;
    correctAnswers = 0;

    scoreDisplay.textContent = score;

    const loadedQuestions = await loadEventsFromJSON();

    if (loadedQuestions && loadedQuestions.length > 0) {

        questions.length = 0;
        questions.push(...loadedQuestions);

    }

    showScreen(gameScreen);

    loadQuestion();

}



/* LOAD QUESTION */

function loadQuestion() {

    answered = false;

    const q = questions[currentQuestion];

    questionNumber.textContent =
        `Question ${currentQuestion + 1}/${questions.length}`;

    progressBar.style.width =
        `${((currentQuestion + 1) / questions.length) * 100}%`;

    scoreDisplay.textContent = score;

    categoryBadge.textContent =
        `${q.flag} ${q.category}`;

    questionText.textContent =
        q.question;

    answersContainer.innerHTML = "";

    hintText.classList.add("hidden");
    feedback.classList.add("hidden");
    nextBtn.classList.add("hidden");

    hintBtn.disabled = false;

    /*
        When we add the real images later,
        this section will automatically load them.
    */

    const imageArea = document.getElementById("eventImage");

    imageArea.innerHTML = `
        <div class="image-placeholder">
            ${q.flag}
            <span>${q.city}</span>
        </div>
    `;


    q.options.forEach(option => {

        const button = document.createElement("button");

        button.className = "answer-btn";
        button.textContent = option;

        button.addEventListener(
            "click",
            () => checkAnswer(option, button)
        );

        answersContainer.appendChild(button);

    });


    updateLives();

}



/* CHECK ANSWER */

function checkAnswer(selected, selectedButton) {

    if (answered) return;

    answered = true;

    const q = questions[currentQuestion];

    const buttons =
        document.querySelectorAll(".answer-btn");

    buttons.forEach(button => {

        button.classList.add("disabled");

        if (button.textContent === q.answer) {
            button.classList.add("correct");
        }

    });


    if (selected === q.answer) {

        selectedButton.classList.add("correct");

        score += 10;

        correctAnswers++;

        scoreDisplay.textContent = score;

        feedback.textContent =
            "✅ Correct! +10 points";

        feedback.className =
            "feedback correct-feedback";

    } else {

        selectedButton.classList.add("wrong");

        lives--;

        updateLives();

        feedback.textContent =
            `❌ Wrong! The correct answer is ${q.answer}.`;

        feedback.className =
            "feedback wrong-feedback";

    }


    feedback.classList.remove("hidden");

    hintBtn.disabled = true;

    nextBtn.classList.remove("hidden");

}



/* NEXT QUESTION */

function nextQuestion() {

    if (lives <= 0) {

        showResult();

        return;

    }


    currentQuestion++;

    if (currentQuestion >= questions.length) {

        showResult();

        return;

    }


    loadQuestion();

}



/* HINT */

function showHint() {

    if (answered) return;

    const q = questions[currentQuestion];

    hintText.textContent =
        `💡 Hint: ${q.hint}`;

    hintText.classList.remove("hidden");

    hintBtn.disabled = true;

}



/* LIVES */

function updateLives() {

    let hearts = "";

    for (let i = 0; i < 3; i++) {

        if (i < lives) {
            hearts += "❤️ ";
        } else {
            hearts += "🖤 ";
        }

    }

    livesDisplay.textContent = hearts;

}



/* RESULT */

function showResult() {

    finalScore.textContent = score;

    correctCount.textContent = correctAnswers;

    totalCount.textContent = currentQuestion >= questions.length
        ? questions.length
        : currentQuestion + 1;


    const percentage =
        (correctAnswers / questions.length) * 100;


    if (percentage >= 80) {

        resultMessage.textContent =
            "🌟 Excellent! You're a destination expert!";

    } else if (percentage >= 50) {

        resultMessage.textContent =
            "👏 Good job! Keep exploring the world!";

    } else {

        resultMessage.textContent =
            "🌍 Keep playing and discover more destinations!";

    }


    showScreen(resultScreen);

}



/* BUTTONS */


startBtn.addEventListener("click", startGame);

hintBtn.addEventListener(
    "click",
    showHint
);

nextBtn.addEventListener(
    "click",
    nextQuestion
);

homeBtn.addEventListener(
    "click",
    () => showScreen(homeScreen)
);

playAgainBtn.addEventListener(
    "click",
    startGame
);

resultHomeBtn.addEventListener(
    "click",
    () => showScreen(homeScreen)
);


