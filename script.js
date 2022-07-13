const startButton = document.getElementById('start-btn')
const submitButton = document.getElementById('submit-btn')
const nextButton = document.getElementById('next-btn')
const finishButton = document.getElementById('finish-btn')
const promptContainerElement = document.getElementById('prompt-container')
const userAnswerContainerElement = document.getElementById('answer-container')
let currentPromptIndex = 0
const promptElement = document.getElementById('prompt')
const userAnswer = document.getElementById('answer')
const url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"

startButton.addEventListener('click', startGame)
submitButton.addEventListener('click', checkAnswer)
nextButton.addEventListener('click', () => {
    currentPromptIndex++
    setNextPrompt()
})
finishButton.addEventListener('click', finishGame)

function startGame() {
    console.log("Game Started")
    startButton.classList.add('hide')
    promptContainerElement.classList.remove('hide')
    userAnswerContainerElement.classList.remove('hide')
    submitButton.classList.remove('hide')
    setNextPrompt()
}

function setNextPrompt(userInput) {
    nextButton.classList.add('hide')
    resetState()
    showPrompt(prompts[currentPromptIndex])
}

function showPrompt(prompt) {
    promptElement.innerText = prompt.prompt
}

function resetState() {

}

function checkAnswer() {
    if (prompts.length > currentPromptIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        finishButton.classList.remove('hide')
    }
}

function finishGame() {
    alert("You finished the hackathon! You must be a wizard!🧙‍♂️")
    window.open(url, '_blank').focus();
}

const prompts = [
    {
        prompt: "This Palantir engineer who’s currently based in the United Kingdom, previously worked at Medallia.",
        answer: "shilpa balaji"
    },
    {
        prompt: "How many Software Engineers work in DC and studied at George Mason University?",
        answer: "shilpa balaji"
    },
    {
        prompt: "Whenever you have questions about Wind Turbine Noise, you can ask this Palantirian.",
        answer: "shilpa balaji"
    },
    {
        prompt: "This Palantirian was once part of the Emergency Ambulance Crew.",
        answer: "shilpa balaji"
    },
    {
        prompt: "After 6 years at Palantir, they were one of the first promoters of the Palantir Developers youtube channel.",
        answer: "shilpa balaji"
    },
    {
        prompt: "Who was a Customer Engineer at Google and now works at Palantir in NYC?",
        answer: "shilpa balaji"
    },
    {
        prompt: "Find the person who was formerly a Java developer and now works at Palantir in Poland.",
        answer: "shilpa balaji"
    },
    {
        prompt: "Find the one Delta in France who’s alma mater is the lycée located in the 16th arrondissement of Paris, France.",
        answer: "shilpa balaji"
    },
    {
        prompt: "Who is the top contributor to our policy-bot repo?",
        answer: "shilpa balaji"
    },
    {
        prompt: "Open thy link (https://github.com/palantir/gradle-baseline/commit/208f69fbd0e042d80168662f66e78c91cd6895d3) and find thy email.",
        answer: "shilpa balaji"
    },
    
]