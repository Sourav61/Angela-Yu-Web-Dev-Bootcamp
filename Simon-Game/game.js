// function matchSound(key) {
//     switch (key) {
//         case 'red':
//             var red = new Audio('sounds/red.mp3');
//             red.play();
//             break;
//         case 'green':
//             var green = new Audio('sounds/green.mp3');
//             green.play();
//             break;
//         case 'yellow':
//             var yellow = new Audio('sounds/yellow.mp3');
//             yellow.play();
//             break;
//         case 'blue':
//             var blue = new Audio('sounds/blue.mp3');
//             blue.play();
//             break;
//         default:
//             var wrong = new Audio('sounds/wrong.mp3');
//             wrong.play();
//             break;
//     }
// }

var randomNumber = 0, level = 0, randomChosenColur = "", gamePattern = [], userClickedPattern = [], started = false, buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
    userClickedPattern = [];

    level++;

    $("#level-title").text("Level " + level);

    randomNumber = Math.floor(Math.random() * 4);
    randomChosenColur = buttonColours[randomNumber];
    gamePattern.push(randomChosenColur);

    $("#" + randomChosenColur).fadeOut(100).fadeIn(100);
    playSound(randomChosenColur);

    console.log("game", gamePattern);
}

$(document).keydown(function () {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
})

// console.log("button", $("div.btn" + id));
// $("div.btn" + id).fadeIn(1).animate({ opacity: 0.8 }).fadeOut(1).fadeToggle(1).animate({ opacity: 1 });

// $("div.btn" + id).fadeOut(100).fadeIn(100);

// let list = document.querySelectorAll("button");
// for (var i = 0; i < list.length; i++) {

//     list[i].addEventListener("click", function () {
//         var button = this.innerHTML;

//         // matchSound(button);
//         playSound(button);
//         // buttonAnmimation(button);
//     })
// }

$(".btn").on("click", function (e) {
    var userChosenColour = e.target.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    console.log("btn", e.target.id, userClickedPattern);
    // console.log("btn", e.target.id)
    animatePress(e.target.id);

    checkAnswer(userClickedPattern.length - 1);
})

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(color) {
    $("#" + color).addClass("pressed");
    setTimeout(function () {
        $("#" + color).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel) {
    console.log("current", currentLevel, gamePattern[0])
    if (gamePattern[currentLevel] == userClickedPattern[currentLevel]) {
        if (gamePattern.length == userClickedPattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        playSound('wrong');
        $('h1').text("Game Over, Press Any Key to Restart");
        $('body').addClass('game-over');
        setTimeout(() => {
            $('body').removeClass('game-over');
        }, 200);

        startOver();
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}

console.log("game", gamePattern)

// Angela Yu Solution


// var buttonColours = ["red", "blue", "green", "yellow"];

// var gamePattern = [];
// var userClickedPattern = [];

// var started = false;
// var level = 0;

// $(document).keypress(function() {
//   if (!started) {
//     $("#level-title").text("Level " + level);
//     nextSequence();
//     started = true;
//   }
// });

// $(".btn").click(function() {

//   var userChosenColour = $(this).attr("id");
//   userClickedPattern.push(userChosenColour);

//   playSound(userChosenColour);
//   animatePress(userChosenColour);

//   checkAnswer(userClickedPattern.length-1);
// });


// function checkAnswer(currentLevel) {

//     if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

//       console.log("success");

//       if (userClickedPattern.length === gamePattern.length){
//         setTimeout(function () {
//           nextSequence();
//         }, 1000);
//       }

//     } else {

//       console.log("wrong");

//       playSound("wrong");

//       $("body").addClass("game-over");
//       setTimeout(function () {
//         $("body").removeClass("game-over");
//       }, 200);

//       $("#level-title").text("Game Over, Press Any Key to Restart");

//       startOver();
//     }

// }

// function nextSequence() {

//   userClickedPattern = [];
//   level++;
//   $("#level-title").text("Level " + level);

//   var randomNumber = Math.floor(Math.random() * 4);
//   var randomChosenColour = buttonColours[randomNumber];
//   gamePattern.push(randomChosenColour);

//   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
//   playSound(randomChosenColour);
// }

// function playSound(name) {
//   var audio = new Audio("sounds/" + name + ".mp3");
//   audio.play();
// }

// function animatePress(currentColor) {
//   $("#" + currentColor).addClass("pressed");
//   setTimeout(function () {
//     $("#" + currentColor).removeClass("pressed");
//   }, 100);
// }

// function startOver() {

//   level = 0;
//   gamePattern = [];
//   started = false;
// }
