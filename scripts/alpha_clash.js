
function handleKeyboardKeyUpEvent(event){
    const playPressed = event.key;
    console.log('player pressed',playPressed);
}

function continueGame(){
    const alphabet = getARandomAlphabet();
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    setBackgroundColorById(alphabet);

}
function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    // Update Final Score
    // get final score from local storage
    const lastScore = getTextElementValueById('current-score')
}
function play(){
    hideElementById('home-screen'); 
    hideElementById('final-score');
    showElementById('play-ground');
    continueGame();

    //  set and reset life
    getTextElementValueById('current-life',5);
    getTextElementValueById('current-score',0);
    
}
