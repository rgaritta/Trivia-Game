var theme = new Audio('assets/audio/theme.mp3');
var questionNumber = 0;
var questionsRight = 0;

var game = {
    winAudio: new Audio('assets/audio/win.mp3'),
    loseAudio: new Audio('assets/audio/lose.mp3'),
    winPic: 'assets/images/win.gif',
    losePic: 'assets/images/lose.gif',

    questions: [
        {
            question: 'What does Elaine call the passenger she is sitting next to on the plane?',
            answers: ['Meatball', 'Vegetable Lasagna', 'TV Dinner'],
            image: 'assets/images/question1.png',
            correct: 'Vegetable Lasagna'
        },
        {
            question: 'Who won "The Contest" even though they cheated?',
            answers: ['George', 'Jerry', 'Kramer'],
            image: 'assets/images/question2.jpg',
            correct: 'George'
        },
        {
            question: 'Which holiday was created by George Costanza?',
            answers: ['Christmas', 'Hanukkah', 'Festivus'],
            image: 'assets/images/question3.jpg',
            correct: 'Festivus'

        },
        {
            question: 'What snack does Kramer refer to in his line in the Woody Allen movie?',
            answers: ['Chips', 'Pretzels', 'Cookies'],
            image: 'assets/images/question4.jpg',
            correct: 'Pretzels'

        },
        {
            question: 'What Florida community do the Seinfelds live in?',
            answers: ['Boca Raton', 'Pompano Beach', 'Del Boca Vista'],
            image: 'assets/images/question5.jpg',
            correct: 'Del Boca Vista'

        },
    ],

    drawButtons: function () {

        for (var i = 0; i < this.questions[questionNumber].answers.length; i++) {
            var button = $('<button>');
            button.addClass('answers');
            button.text(this.questions[questionNumber].answers[i]);
            $('#gameplay').append(button);
            
        }
    },

};


$(".main-pic").on("click", function () {
    //theme.play();
    $('#question').text('Question ' + (questionNumber + 1) + ': ' + game.questions[questionNumber].question);
    $('#gameplay').empty();
    $('.main-pic').attr('src', game.questions[questionNumber].image);
    $('.main-pic').css('cursor', 'default')
    game.drawButtons();
});

$(document).on("click", ".answers", function() {
    if ($(this).text() == game.questions[questionNumber].correct) {
        game.winAudio.play();
        $('.main-pic').attr('src', game.winPic);
        $('#gameplay').empty();
        $('#question').text('YOU GOT IT!');
        questionsRight++;
    }
    else {
        game.loseAudio.play();
        $('.main-pic').attr('src', game.losePic);
        $('#gameplay').empty();
        $('#question').text('The correct answer is: ' + game.questions[questionNumber].correct);
    }

    $('#gameplay').append($('<h2 id="directions">'));
    $('#directions').text('Click the picture to answer the next question!');
    $('.main-pic').css('cursor', 'pointer')

    questionNumber++;

});

