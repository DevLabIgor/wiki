window.addEventListener('load', init);

// Globals

// Avalible Levels
const levels = {
    easy: 20,
    medium: 15,
    hard: 10,
    superhard: 5
}

// DOM Element
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

//Change level
var currentLevel;
var selector = document.querySelector('#levelSelector');
selector.addEventListener("change", levelSelector);
levelSelector();


let time = currentLevel;
let score = 0;
let isPlaying;



const words = [
    'мама',
    'папа',
    'дерево',
    'дом',
    'мяч',
    'майнкрафт',
    'лес',
    'супер',
    'пупс',
    'карапуз',
    'терлекуриндуй',
    'самокат',
    'стол',
    'ров'
];

// Init Game
function init(){
//    console.log("init");
    // Show number of secconds in UI
    seconds.innerHTML = currentLevel;
    // Load word from Array
    showWord(words);
    // Start matchingon word input
    wordInput.addEventListener('input', startMatch);
    // Call countdown every second
    setInterval(countdown, 1000);
}
// Level selector
function levelSelector(){
    var levelSelected = selector.options[selector.selectedIndex].value;
    console.log(levelSelected);
    if(levelSelected ==1){
        currentLevel = levels.easy;
        seconds.innerHTML = currentLevel;
    }else if(levelSelected ==2){
        currentLevel = levels.medium;
        seconds.innerHTML = currentLevel;
    }else if(levelSelected ==3){
        currentLevel = levels.hard;
        seconds.innerHTML = currentLevel;
    }else if(levelSelected ==4){
        currentLevel = levels.superhard;
        seconds.innerHTML = currentLevel;
    }
}
// Start Match
function startMatch(){
    if(matchWord()){
//        console.log('MATCH!!!!');
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }
    // If score is -1 display 0
    if(score === -1){
        scoreDisplay.innerHTML = 0;
    }else{
        scoreDisplay.innerHTML = score;
    }
    
}
// Match current Word to wordInput
function matchWord(){
    if(wordInput.value === currentWord.innerHTML){
       message.innerHTML = "Correct!!!"
        return true; 
    }else{
        message.innerHTML = '';
        return false;
    }
}
// Pick & show random word
function showWord(words){
    // Generate random array index
    const randomIndex = Math.floor(Math.random()*words.length);
    // Output random word
    currentWord.innerHTML = words[randomIndex];
    // Check game status
    setInterval(checkstatus, 50);
    
}
// Countdown timer
function countdown(){
    // Make sure time is not run out
    if(time>0){
        //Decrement
        time--
    }else if(time === 0){
        //Game is over
        isPlaying = false;
    }
    // Show time
    timeDisplay.innerHTML = time;
}
// Check game status
function checkstatus(){
    if(!isPlaying && time ===0){
        message.innerHTML = 'Game Over!!!'
        score = -1;
    }
}