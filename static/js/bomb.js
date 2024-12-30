let userInputEle = document.getElementById("defuser");
let timerDisplay = document.getElementById("timer");
let counter = 10;

// 초기 상태 설정
timerDisplay.textContent = "Ready?";

// 사용자 클릭 이벤트로 카운트다운 시작
document.addEventListener("click", function startCountdown() {
    // 상호작용 후 이벤트 리스너 제거
    document.removeEventListener("click", startCountdown);

    // 카운트다운 시작
    timerDisplay.textContent = counter;
<<<<<<< HEAD
    if (counter === 0) {
        timerDisplay.textContent = "Boom ";
        clearInterval(functionId);
    }
}, 1000);
userInputEle.addEventListener('keydown', function(event) {
    if (event.key === "Enter" && userInputEle.value === "daisy") {
        clearInterval(functionId);
        timerDisplay.textContent = "Yes you did it !";
    }
=======
    let functionId = setInterval(function () {
        counter = counter - 1;
        console.log(counter);
        timerDisplay.textContent = counter;

        if (counter === 0) {
            var jumpscare = document.getElementById("jumpscare");
            jumpscare.style.visibility = "visible";
            var audio = document.getElementById("scream");

            // 음소거된 오디오로 재생 정책 우회
            let silentAudio = new Audio();
            silentAudio.src = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAABCxAgAEABAAZGF0YQAAAAA=";
            silentAudio.play().then(() => {
                audio.play(); // 실제 오디오 재생
            }).catch(err => {
                console.error("Silent audio playback failed:", err);
            });

            clearInterval(functionId);
        }
    }, 1000);

    // 사용자 입력 이벤트 처리
    userInputEle.addEventListener("keydown", function (event) {
        if (event.key === "Enter" && userInputEle.value === "daisy") {
            clearInterval(functionId);
            timerDisplay.textContent = "Yes you did it !";
        }
    });
>>>>>>> 510cf41a5cfe0dfe4f22735d3413dac3fa843d38
});
