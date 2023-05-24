let alphabet = [
    {letter: 'Ա', transcription: 'А'},
    {letter: 'ա', transcription: 'а'},
    {letter: 'Բ', transcription: 'Б'},
    {letter: 'բ', transcription: 'б'},
    {letter: 'Գ', transcription: 'Г'},
    {letter: 'գ', transcription: 'г'},
    {letter: 'Դ', transcription: 'Д'},
    {letter: 'դ', transcription: 'д'},
    {letter: 'Ե', transcription: 'Е'},
    {letter: 'ե', transcription: 'е'},
    {letter: 'Զ', transcription: 'З'},
    {letter: 'զ', transcription: 'з'},
    {letter: 'Է', transcription: 'Э'},
    {letter: 'է', transcription: 'э'},
    {letter: 'Ը', transcription: 'Ы'},
    {letter: 'ը', transcription: 'ы'},
    {letter: 'Թ', transcription: 'Т'},
    {letter: 'թ', transcription: 'т'},
    {letter: 'Ժ', transcription: 'Ж'},
    {letter: 'ժ', transcription: 'ж'},
    {letter: 'Ի', transcription: 'И'},
    {letter: 'ի', transcription: 'и'},
    {letter: 'Լ', transcription: 'Л'},
    {letter: 'լ', transcription: 'л'},
    {letter: 'Խ', transcription: 'Х'},
    {letter: 'խ', transcription: 'х'},
    {letter: 'Ծ', transcription: 'Ц'},
    {letter: 'ծ', transcription: 'ц'},
    {letter: 'Կ', transcription: 'К'},
    {letter: 'կ', transcription: 'к'},
    {letter: 'Հ', transcription: 'Х'},
    {letter: 'հ', transcription: 'х'},
    {letter: 'Ձ', transcription: 'Дз'},
    {letter: 'ձ', transcription: 'дз'},
    {letter: 'Ղ', transcription: 'Кх'},
    {letter: 'ղ', transcription: 'кх'},
    {letter: 'Ճ', transcription: 'Ч'},
    {letter: 'ճ', transcription: 'ч'},
    {letter: 'Մ', transcription: 'М'},
    {letter: 'մ', transcription: 'м'},
    {letter: 'Յ', transcription: 'Й'},
    {letter: 'յ', transcription: 'й'},
    {letter: 'Ն', transcription: 'Н'},
    {letter: 'ն', transcription: 'н'},
    {letter: 'Շ', transcription: 'Ш'},
    {letter: 'շ', transcription: 'ш'},
    {letter: 'Ո', transcription: 'О'},
    {letter: 'ո', transcription: 'о'},
    {letter: 'Չ', transcription: 'Ч'},
    {letter: 'չ', transcription: 'ч'},
    {letter: 'Պ', transcription: 'П'},
    {letter: 'պ', transcription: 'п'},
    {letter: 'Ջ', transcription: 'Дж'},
    {letter: 'ջ', transcription: 'дж'},
    {letter: 'Ռ', transcription: 'Р'},
    {letter: 'ռ', transcription: 'р'},
    {letter: 'Ս', transcription: 'С'},
    {letter: 'ս', transcription: 'с'},
    {letter: 'Վ', transcription: 'В'},
    {letter: 'վ', transcription: 'в'},
    {letter: 'Տ', transcription: 'Т'},
    {letter: 'տ', transcription: 'т'},
    {letter: 'Ր', transcription: 'Р\''},
    {letter: 'ր', transcription: 'р\''},
    {letter: 'Ց', transcription: 'Ц\''},
    {letter: 'ց', transcription: 'ц\''},
    {letter: 'ՈՒ', transcription: 'У'},
    {letter: 'ու', transcription: 'у'},
    {letter: 'Փ', transcription: 'П\''},
    {letter: 'փ', transcription: 'п\''},
    {letter: 'Ք', transcription: 'К\''},
    {letter: 'ք', transcription: 'к\''},
    {letter: 'Օ', transcription: 'О'},
    {letter: 'օ', transcription: 'о'},
    {letter: 'Ֆ', transcription: 'Ф'},
    {letter: 'ֆ', transcription: 'ф'}
    // и так далее для всех букв армянского алфавита
];
let answerOptions = []; // варианты ответов

let score = 0; // текущий счет
let currentLetter = ''; // текущая буква
let correctAnswer = ''; // правильный ответ

function generateLetter() {
    let index = Math.floor(Math.random() * alphabet.length);
    currentLetter = alphabet[index].letter;
    correctAnswer = alphabet[index].transcription;
    document.getElementById("letterDisplay").innerText = " " + currentLetter;
    generateAnswerOptions();
}

function generateAnswerOptions() {
    let incorrectAnswers = alphabet.filter(item => item.transcription !== correctAnswer)
        .map(item => item.transcription)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3); // Генерируем три неверных ответа
    answerOptions = [correctAnswer, ...incorrectAnswers].sort(() => 0.5 - Math.random()); // Перемешиваем ответы

    let optionsDiv = document.getElementById("answerOptions");
    optionsDiv.innerHTML = '';
    for(let i = 0; i < answerOptions.length; i++) {
        let optionButton = document.createElement("button");
        optionButton.innerText = answerOptions[i];
        optionButton.onclick = function() {
            checkAnswer(answerOptions[i]);
        }
        optionsDiv.appendChild(optionButton);
    }
}

function checkAnswer(answer) {
    if(answer == correctAnswer) {
        score++;
    } else {
        score = 0;
    }
    document.getElementById("scoreBoard").innerText = 'Очки: ' + score;
    generateLetter();
}

generateLetter();

