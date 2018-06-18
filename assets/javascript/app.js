var theme = new Audio('assets/audio/theme.mp3');
var questionNumber = 0;
var questionsRight = 0;
var counter = 10;
var next = 3;
var intervalID;

//game object containing audio, images, questions with properties and functions
var game = {
    winAudio: new Audio('assets/audio/win.mp3'),
    loseAudio: new Audio('assets/audio/lose.mp3'),
    timesUpAudio: new Audio('assets/audio/times_up.wav'),
    startAudio: new Audio('assets/audio/start.wav'),
    winPic: 'assets/images/win.gif',
    losePic: 'assets/images/lose.gif',
    timesUpPic: 'assets/images/timesup.jpg',
    gameOverPic: 'assets/images/gameover.jpg',

    questions: [
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
        {
            question: 'What does Elaine call the passenger she is sitting next to on the plane?',
            answers: ['Meatball', 'Vegetable Lasagna', 'TV Dinner'],
            image: 'assets/images/question1.png',
            correct: 'Vegetable Lasagna'
        }
    ],

    drawButtons: function () {
        for (var i = 0; i < this.questions[questionNumber].answers.length; i++) {
            var button = $('<button>');
            button.addClass('answers');
            button.text(this.questions[questionNumber].answers[i]);
            $('#gameplay').append(button);
        }
    },

    decrementCounter: function () {
        counter--;
        $('#timer').text(counter);
        if (counter == 0) {
            game.outOfTime();
        }
    },

    decrementNext: function () {
        next--;
        //$('#directions').text(next + ' seconds until the next quetion');
        if (next == 0) {
            game.stop();
            game.playGame();
        }
    },

    outOfTime: function () {
        $('.main-pic').attr('src', game.timesUpPic);
        this.timesUpAudio.play();
        $('#gameplay').empty();
        $('#timer').empty();
        this.stop();
        $('#question').text('Times up! The correct answer is: ' + this.questions[questionNumber].correct);
        this.nextTimer();
    },

    questionTimer: function () {
        $('#timer').text(counter);
        intervalID = setInterval(this.decrementCounter, 1000);
    },

    nextTimer: function () {
        next = 3
        questionNumber++;
        if (questionNumber == this.questions.length) {
            $('#question').text("You got " + questionsRight + " out of " + this.questions.length + ' right');
            $('.main-pic').attr('src', this.gameOverPic);
            $('#gameplay').append($('<button id="play-again">Play Again!</button>'));
            $(document).on("click", "#play-again", function () {
                location.reload();
            })
        }
        else {
            intervalID = setInterval(this.decrementNext, 1000);
            //$('#gameplay').append($('<h2 id="directions">'));
            //$('#directions').text(next + ' seconds until the next question');
        }
    },

    stop: function () {
        clearInterval(intervalID);
    },

    playGame: function () {
        $('#question').text('Question ' + (questionNumber + 1) + ': ' + this.questions[questionNumber].question);
        $('#gameplay').empty();
        $('.main-pic').attr('src', this.questions[questionNumber].image);
        this.drawButtons();
        counter = 10;
        this.questionTimer();
    }
};

//event listener for clicking the start button
$("#directions").on("click", function () {
    theme.volume = 0.1;
    theme.play();
    game.startAudio.play();
    game.playGame();
});

//event listener for clicking on the answer buttons
$(document).on("click", ".answers", function () {
    if ($(this).text() == game.questions[questionNumber].correct) {
        game.winAudio.play();
        $('.main-pic').attr('src', game.winPic);
        $('#gameplay').empty();
        $('#question').text('YOU GOT IT!');
        questionsRight++;
        game.stop();
    }
    else {
        game.loseAudio.play();
        $('.main-pic').attr('src', game.losePic);
        $('#gameplay').empty();
        $('#question').text('Wrong! The correct answer is: ' + game.questions[questionNumber].correct);
        game.stop();
    }

    $('#timer').empty();
    game.nextTimer();
});