function continueGame(){
    const alphabet = getARandomAlphabet();
    setBackgroundColorById(alphabet);
    document.getElementById("current-alphabet").innerText = alphabet;
}
function play(){
    showElementById('play-ground');
    hideElementById('home')
    continueGame()
}
