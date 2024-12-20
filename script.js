
let randomNumber = parseInt(Math.random() * 100 + 1);



const submit = document.querySelector("#subt");
const userInput = document.getElementById("inputfield");
const  Guesses = document.querySelector(".previousGuess");
const  remaining = document.querySelector(".remaining");
const lowOrhigh = document.querySelector(".lowOrhigh")
const results = document.querySelector(".results")

const p = document.createElement('p')
// console.log(2+3)

// ================================================================


let previousGuess = []
let numOfguess = 1


let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess)
})
}


function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please Enter a valid Number")
} else if(guess < 1){
    alert("Please Enter number more then 0")
} else if(guess > 100){
    alert("Please enter number less then 100")
} else {
    previousGuess.push(guess)
    if(numOfguess === 11){
        displayGuess(guess);
        displayMessage(`Game Over. Random number was ${randomNumber}`)
        endGame();
    } else {
        displayGuess(guess)
        checkGuess(guess)
    }

}


}



function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage("You gussed it right.")
        endGame();
    } else if(guess < randomNumber){
        displayMessage('Number is Too Low')
    } else if(guess > randomNumber){
        displayMessage('Number is too high')
    }
}


function displayGuess(guess){
    userInput.value = " "
    Guesses.innerHTML += `${guess},  `
    numOfguess++;
    remaining.innerHTML = `Remaining Attampts :${ 11 - numOfguess}`

}

function displayMessage(messsage){
    lowOrhigh.innerHTML = `<h2>${messsage}</h2>` 

}


function endGame(){
    userInput.value = ""
    userInput.setAttribute('disabled', '')
    p.classList.add('button');
    p.innerHTML = "<h2 id = newGame>Click to start new Game </h2>";
    results.appendChild(p);
    playGame = false;
    newGame()
}

function newGame(){
    const newGamebtn = document.querySelector('#newGame')
    newGamebtn.addEventListener('click', function(e){
        
        randomNumber = parseInt(Math.random() * 100 + 1);
        previousGuess = []
        numOfguess = 0
        Guesses.innerHTML = ""
        remaining.innerHTML = `Remaining Attampts :${11 - numOfguess}`
        userInput.removeAttribute('disabled')
        results.removeChild(p)
        
        playGame = true;

    })
}