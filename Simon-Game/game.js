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

var randomNumber = 0, randomChosenColur = "", gamePattern = [], userClickedPattern = [], buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
    randomNumber = Math.floor(Math.random() * 4);
    randomChosenColur = buttonColours[randomNumber];
}

nextSequence();

var id = '#' + randomChosenColur;
// console.log("button", $("div.btn" + id));
// $("div.btn" + id).fadeIn(1).animate({ opacity: 0.8 }).fadeOut(1).fadeToggle(1).animate({ opacity: 1 });

$("div.btn" + id).fadeOut(100).fadeIn(100);

let list = document.querySelectorAll("button");
for (var i = 0; i < list.length; i++) {

    list[i].addEventListener("click", function () {
        var button = this.innerHTML;

        // matchSound(button);
        playSound(button);
        // buttonAnmimation(button);
    })
}

$(".btn").on("click", function (e) {
    var userChosenColour = e.target.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    console.log("btn", e.target.id, userClickedPattern);
    // console.log("btn", e.target.id)
    animatePress(e.target.id)
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

gamePattern.push(randomChosenColur);

console.log("game", gamePattern)


// Angela Yu Solution

// var buttonColours = ["red", "blue", "green", "yellow"];

// var gamePattern = [];
// var userClickedPattern = [];

// $(".btn").click(function() {

//   var userChosenColour = $(this).attr("id");
//   userClickedPattern.push(userChosenColour);

//   playSound(userChosenColour);

//   animatePress(userChosenColour);
// });

// function nextSequence() {

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

// //1. Create a new function called animatePress(), it should take a single input parameter called currentColour.
// function animatePress(currentColor) {

//   //2. Use jQuery to add this pressed class to the button that gets clicked inside animatePress().
//   $("#" + currentColor).addClass("pressed");

//   //3. use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.
//   setTimeout(function () {
//     $("#" + currentColor).removeClass("pressed");
//   }, 100);
// }