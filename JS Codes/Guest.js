var guestList=["Angela","Jack","Pam","James","Lara","Jason","Sourav","Pahwa"]

var name=prompt("Please enter your name!");

if(guestList.includes(name))
    console.log("You are most welcome to the Party!");
else
    console.log("Sorry!, We don't have your name on the guestList!!");

console.log(guestList);