
var year=window.prompt("Please enter the current year!");

if(year%4==0){
    if(year%100==0){
        if(year%400==0){
            console.log("The entered year "+year +" is a leap year");
        }else{
            console.log("The entered year "+year +" is not a leap year");
        }
    }else{
        console.log("The entered year "+year +" is a leap year");
    }
}else{
    console.log("The entered year "+year +" is not a leap year");
}