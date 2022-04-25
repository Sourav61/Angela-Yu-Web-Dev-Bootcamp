let list = document.querySelectorAll("button");
for (var i = 0; i < list.length; i++) {

    list[i].addEventListener("click", function () {
        alert("I got cliked");
        console.log("list", list[i]);
    })

}