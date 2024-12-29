let userInputEle = document.getElementById("defuser");
let timerDisplay = document.getElementById("timer");
let counter = 10;
let functionId = setInterval(function() {
    counter = counter - 1;
    console.log(counter);
    timerDisplay.textContent = counter;

    if (counter === 0) {
        var jumpscare = document.getElementById("jumpscare");
        jumpscare.style.visibility="visible";
        var audio = document.getElementById("scream");
        audio.play();
        
        clearInterval(functionId);
    }
    
}, 1000);
userInputEle.addEventListener('keydown', function(event) {
    if (event.key === "Enter" && userInputEle.value === "daisy") {
        clearInterval(functionId);
        timerDisplay.textContent = "Yes you did it !";
    }
});
