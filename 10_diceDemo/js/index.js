


async function roll() {

  var seed = randomNum(10);

  document.querySelector("#clickText").textContent="🎲 🎲 Rolling dice... 🎲 🎲";
  
  // prevent spam click
  document.querySelector("#clickText").removeAttribute("onClick");

  for (i = 0; i != 5; i++) {

    await sleep(100);

    var d1 = randomNum(6);
    var d2 = randomNum(6);
    var d3 = randomNum(6);
    var d4 = randomNum(6);

    // Set image file name
    findElement("img", 0).setAttribute("src", "images/dice" + d1 + ".png");
    findElement("img", 1).setAttribute("src", "images/dice" + d2 + ".png");
    findElement("img", 2).setAttribute("src", "images/dice" + d3 + ".png");
    findElement("img", 3).setAttribute("src", "images/dice" + d4 + ".png");

  }

  // Re-emable  click
  document.querySelector("#clickText").setAttribute("onClick", "roll();");
  document.querySelector("#clickText").textContent="🎲 🎲 Click here 🎲 🎲";

}

// gen random number 1 to max
function randomNum(max){
  var n = Math.floor(Math.random() * 6) + 1; //1-6
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