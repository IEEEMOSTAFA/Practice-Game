
function handleKeyboardKeyUpEvent(event) {
    const playPressed = event.key;
    console.log('player pressed', playPressed);
    // ----------stop the game if pressed 'ESC'
    if (event.key === 'Escape') {
        gameOver()
    }
    // key player is expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    // check right or wrong key pressed:
    if (playPressed === expectedAlphabet) {
        console.log('You got a point');

        // increasing the score system:
        const currentScore = getTextElementValueById('current-score');
        console.log(currentScore);
        const updateScore = currentScore + 1;
        setTextElementValueById('current-score', updateScore);
        const newScore = currentScore + 1;

        removeBackgroundColorById(expectedAlphabet);
        continueGame();

    }
    else {
        console.log('You are Fail');
        const currentLife = getTextElementValueById('current-life');
        const updateLife = currentLife - 1;
        setTextElementValueById('current-life', updateLife);

        if (updateLife === 0) {
            gameOver();
        }
    }





}
document.addEventListener('keyup',handleKeyboardKeyUpEvent);

function continueGame() {
    const alphabet = getARandomAlphabet();
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    setBackgroundColorById(alphabet);

}
function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score');
    // Update Final Score
    // get final score from local storage
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score',lastScore);
    // clear the last selected alphabet heighlight:
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}
function play() {
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');
    continueGame();

    //  set and reset life
    getTextElementValueById('current-life', 5);
    getTextElementValueById('current-score', 0);

}
