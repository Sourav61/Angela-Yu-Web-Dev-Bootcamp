// alert("Hey there")

var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

var randomNumber = 0, randomChosenColur="";

function nextSequence(){
    randomNumber = Math.floor(Math.random() * 4);
    randomChosenColur = buttonColours[randomNumber];
}

nextSequence();

gamePattern.push(randomChosenColur);
console.log(randomNumber, randomChosenColur,gamePattern);