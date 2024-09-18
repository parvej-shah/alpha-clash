function handleKeyupEvent(event) {
  const userPressedKey = event.key;
  const gameKey = document
    .getElementById("current-alphabet")
    .innerText.toLowerCase();
  let currentPoint = Number(getInnerTextById('score'));
  if(userPressedKey===gameKey){
    currentPoint++;
    setInnerTextById('score',currentPoint);
    removeBgColorById(gameKey);
    continueGame();
  }
  else if(userPressedKey==='Escape'){
    setInnerTextById('final-score',currentPoint);
    gameOver();
  }
  else{
    let userLife = Number(getInnerTextById('life'));
    if(userLife==1){
    setInnerTextById('final-score',currentPoint);
      gameOver();
    }
    else{
      userLife--;
      setInnerTextById('life',userLife);
    }
  }
}
document.addEventListener("keyup", handleKeyupEvent);
function continueGame() {
  const alphabet = getARandomAlphabet();
  setBackgroundColorById(alphabet);
  document.getElementById("current-alphabet").innerText = alphabet;
}
function play() {
  showElementById("play-ground");
  hideElementById("home");
  hideElementById('result');
  continueGame();
}
function gameOver(){
hideElementById("play-ground");
showElementById("result");
removeBgColorById(getInnerTextById("current-alphabet"))
setInnerTextById('score',0);
setInnerTextById('life',5);
}
