var theme = new Audio('assets/audio/theme.mp3');
var questionNumber = 0;

var game = {
    winAudio: new Audio('assets/audio/win.mp3'),
    loseAudio: new Audio('assets/audio/lose.mp3'),
    questions: [
        'What does Elaine call the passenger she is sitting next to on the plane?',
        'Who won "The Contest" even though they cheated?',
        'Which holiday was created by George Costanza?',
        'What snack does Kramer refer to in his line in the Woody Allen movie?',
        'What Florida community do the Seinfelds live in?'
    ],

    answers: [
        {
            question1: ['Meatball', 'Vegetable Lasagna', 'TV Dinner'],
            question2: ['George', 'Jerry', 'Kramer'],
            question3: ['Christmas', 'Hanukkah', 'Festivus'],
            question4: ['Chips', 'Pretzels', 'Beef Jerky'],
            question5: ['Boca Raton', 'Pompano Beach', 'Del Boca Vista'],
        }
    ],

    correctAnswers: ['Vegetable Lasagna', 'George', 'Festivus', 'Pretzels', 'Del Boca Vista'],







}

$(".main-pic").on("click", function () {
    theme.play();
    $('#question').text('Question ' + (questionNumber + 1) + ': ' + game.questions[questionNumber]);
    $('#gameplay').empty();

})

















