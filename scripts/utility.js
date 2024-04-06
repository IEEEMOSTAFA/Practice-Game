
function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function  showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden'); 

}
function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}
function getARandomAlphabet(){
    const alPhabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alPhabetString.split('');
    const  randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    return alphabet;
}

