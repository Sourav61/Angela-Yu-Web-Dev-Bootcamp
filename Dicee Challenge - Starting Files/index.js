var randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);
document.querySelector(".img1").src = "https://raw.githubusercontent.com/Sourav61/Dice-Game/main/images/dice" + randomNumber1 + ".png"

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2);
document.querySelector(".img2").src = "https://raw.githubusercontent.com/Sourav61/Dice-Game/main/images/dice" + randomNumber2 + ".png"

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Won!";
  document.querySelector("h1").classList.add("small");
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 2 Won!";
  document.querySelector("h1").classList.add("small");
} else {
  document.querySelector("h1").innerHTML = "Ohh! That's a draw!!";
  document.querySelector("h1").classList.add("small");
}