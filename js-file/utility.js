function showElementById(elementId){
    document.getElementById(elementId).classList.remove('hidden');
}
function hideElementById(elementId){
    document.getElementById(elementId).classList.add('hidden');
}
function setBackgroundColorById(elementId){
    document.getElementById(elementId).classList.add("bg-orange-400")
}
function getARandomAlphabet(){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabet.split('');

    const randomNumber = Math.round(Math.random()*25);
    const randomAlphabet = alphabets[randomNumber];
    return randomAlphabet;
}