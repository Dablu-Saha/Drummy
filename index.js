var noOfButs=document.querySelectorAll(".drum").length;
// alert("working");

// //ClickDetection
for(var i=0;i<noOfButs;i++){
  document.querySelectorAll("button")[i].addEventListener("click",function (){
      var butt=this.innerHTML;
      makeSound(butt);
      buttonAnimation(butt);

  });
}
//
// //KeyBoard Detection
document.addEventListener("keydown",function(event){
  var butt=event.key;
  makeSound(butt);
  buttonAnimation(butt);

});
function makeSound(KeyPressed){
  switch (KeyPressed) {
    case "w":
        var audio=new Audio("sounds/crash.mp3");
        audio.play();
      break;
    case "a":
        var audio=new Audio("sounds/kick-bass.mp3");
        audio.play();
      break;
    case "s":
      var audio=new Audio("sounds/snare.mp3");
      audio.play();
    case "d":
      var audio=new Audio("sounds/tom-1.mp3");
      audio.play();
    case "j":
      var audio=new Audio("sounds/tom-2.mp3");
      audio.play();
    case "k":
      var audio=new Audio("sounds/tom-3.mp3");
      audio.play();
    case "l":
      var audio=new Audio("sounds/tom-4.mp3");
      audio.play();

    default:

  }
}

function buttonAnimation(keyPressed){
  var activeKey= document.querySelector("."+keyPressed);
  activeKey.classList.add("pressed");
  setTimeout(function(){
    activeKey.classList.remove("pressed")},100);
}
