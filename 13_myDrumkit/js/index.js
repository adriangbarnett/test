//alert(1);


// add events to buttons
function setup(){

  var numberOfDrumButtons = document.querySelectorAll(".drum").length;

  // add event to to each button class .drum
  for (var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

      var buttonInnerHTML = this.innerHTML;

      makeSound(buttonInnerHTML);

      buttonAnimation(buttonInnerHTML);

    });

  }


  // global event listener, listen for key clicks
  document.addEventListener("keypress", function(event) {

    makeSound(event.key);

    buttonAnimation(event.key);

  });


}


// play based on key press
function makeSound(key) {

  switch (key) {
    case "w":
      playAu("sounds/tom-1.mp3");
      break;

    case "a":
      playAu("sounds/tom-2.mp3");
      break;

    case "s":
      playAu("sounds/tom-3.mp3");
      break;

    case "d":
      playAu("sounds/tom-4.mp3");
      break;

    case "j":
      playAu("sounds/snare.mp3");
      break;

    case "k":
      playAu("sounds/crash.mp3");
      break;

    case "l":
      playAu('sounds/kick-bass.mp3');
      break;


    default: 
      console.log(key);

  }
}


// Play mp3
function playAu(audioPathFileName) {
  var au = new Audio(audioPathFileName);
  au.play();
}


// aminate clicked
function buttonAnimation(currentKey) {

  // handle invalid key press
  var validKeys = "wasdjkl";
  if (!validKeys.includes(currentKey)) {
    console.log("Invalid key");
    return;
  }


  // get button element
  var activeButton = document.querySelector("." + currentKey);

  // add pressed CLASS
  activeButton.classList.add("pressed");
  

  // remove PRESSED CLASS after x MS
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}

// auto play drum
async function autoPlay(){

  console.log("auto-start");

  document.querySelector("#autoBtn").classList.add("hidden");
  document.querySelector("#autoBtn").removeAttribute("onClick");


  var numberOfDrumButtons = document.querySelectorAll(".drum").length;

  // add event to to each button class .drum
  for (var i = 0; i < 20; i++) {

    var n = randomNum(document.querySelectorAll(".drum").length);

    document.querySelectorAll(".drum")[n].click();

    await sleep(100);
  }

  // enable click
  document.querySelector("#autoBtn").classList.remove("hidden");
  document.querySelector("#autoBtn").setAttribute("onClick", "autoPlay();");

  console.log("auto-end");

}

// gen random number 0 to max
function randomNum(max){
  var n = Math.floor(Math.random() * max) ; //0-MAX
  return n;

}

// retuirn specific element
function findElement(tag, index){
  var element = document.querySelectorAll(tag)[index];
  return element;
}

//
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}