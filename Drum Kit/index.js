//button press
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",playSound);
}

function playSound(){
    // var audio = new Audio("sounds/tom-1.mp3");
    // audio.play();
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
}

//keyboard press
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;


        default:
            console.log(buttonInnerHTML);
    }
}

function buttonAnimation(currentKey){
   var activebutton =  document.querySelector("."+currentKey);
   activebutton.classList.add("pressed");

   setTimeout(function(){
    activebutton.classList.remove("pressed");
   }, 100)
}
// function add(n1,n2){
//     return n1+n2;
// }
// function subtract(n1,n2){
//     return n1-n2;
// }
// function muliply(n1,n2){
//     return n1*n2;
// }
// function divide(n1,n2){
//     return n1/n2;
// }
// function calculator(n1,n2,operator){
//     return operator(n1,n2);
// }