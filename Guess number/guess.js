const output = document.getElementById("output");
const submit = document.getElementById("submit");
const reset = document.getElementById("reset");
const input = document.getElementById("input-box");

reset.addEventListener("click", () => {
    window.location.reload();
})

const answer = Math.floor(Math.random() * 100) ;

function guessNumber() {
    let guess = input.value
    
    if (guess == answer){
       output.innerHTML = "Congrats, You guessed correct number";
    }
    else if(guess > answer){
        output.innerHTML = "You guessed too high";
    }
    if(guess < answer){
        output.innerHTML = "You guessed too low";
    }
}

input.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        guessNumber();
    }
})

