
for(var i=0 ;i < document.querySelectorAll(".drum").length;i++ ){
    document.querySelectorAll(".drum")[i].addEventListener("mousedown",function (){
        chekButtom(this.innerHTML);
        buttomAnimation1(this.innerHTML);
    })
    document.querySelectorAll(".drum")[i].addEventListener("mouseup",function () {
        buttomAnimation2(this.innerHTML);
    })
}

document.addEventListener("keydown",function (event) {
    chekButtom(event.key);
    buttomAnimation1(event.key);

})

document.addEventListener("keyup",function(event){
    buttomAnimation2(event.key);
})


 function chekButtom(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log(this.innerHTML);
            break;
    }
 }


 function buttomAnimation1(key){
    document.querySelector(`.${key}`).classList.add("pressed");
 }

 function buttomAnimation2(key){
    document.querySelector(`.${key}`).classList.remove("pressed");
 }