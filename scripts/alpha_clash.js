function continueGame(){
    const alphabet = getARandomAlphabet();
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    setBackgroundColorById(alphabet);

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
