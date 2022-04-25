var randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);
document.querySelector(".img1").src = "file:///D:/Desktop/coding/WebDev%20Angela/Angela-Yu-Web-Dev-Bootcamp/Dicee%20Challenge%20-%20Starting%20Files/images/dice" + randomNumber1 + ".png"

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2);
document.querySelector(".img2").src = "file:///D:/Desktop/coding/WebDev%20Angela/Angela-Yu-Web-Dev-Bootcamp/Dicee%20Challenge%20-%20Starting%20Files/images/dice" + randomNumber2 + ".png"

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Won!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Won!";
} else {
  document.querySelector("h1").innerHTML = "Ohh! That's a draw!!";
  document.querySelector("h1").classList.add("small");
}