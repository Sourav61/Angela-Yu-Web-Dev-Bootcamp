// $(document).ready(function(){
//     $("h1").addClass("big-heading margin-50");
// })

// for(var i=0;i<5;i++){
//     document.querySelectorAll("button")[i].addEventListener("click", function() {
//         document.querySelector("h1").style.color="red";
//     })
// }

// $("button").click(function() {
//     $("h1").css("color","purple");
// })

// $(document).keydown(function(event){
//     console.log("event",event)
//     $("h1").text(event.key);
// })

// $("h1").on("mouseover", function(){
//     $("h1").css("color","purple");
// })

$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({ opacity: '0.5' });
})

console.log($("img").attr("src"));

// $("a").attr("href", "https://www.yahoo.com")

// $("h1").css("color","red");
