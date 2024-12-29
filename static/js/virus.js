const targetWord = "VIRUS"; // 정답 단어
    let currentInput = ""; // 현재 입력된 단어
    const display = document.getElementById("input-display");
	  
    document.addEventListener("keydown", (event) => {
        if ((/^[a-zA-Z]$/.test(event.key) || event.key === "Backspace") && currentInput.length <= 5) {
        if (event.key === "Backspace" && currentInput.length > 0) {
            currentInput = currentInput.slice(0, -1); // 마지막 글자 삭제
        } else if (/^[a-zA-Z]$/.test(event.key) && currentInput.length < 5) {
            currentInput += event.key.toUpperCase(); // 입력된 키를 대문자로 추가
        }
    
        const updatedDisplay = currentInput
            .padEnd(5, "_")
            .split("")
            .map((char) => `<span>${char}</span>`)
            .join("");
    
        display.innerHTML = updatedDisplay; // 화면 갱신
        display.className = ""; // 기본 상태
        }
    
        if (currentInput.length === 5) {
        display.textContent = "CHECKING";
        display.className = "checking";
    
        setTimeout(() => {
            if (currentInput === targetWord) {
            display.textContent = "SUCCESS";
            display.className = "success";
            } else {
            display.textContent = "ERROR";
            display.className = "error";
            }
    
            setTimeout(() => {
            currentInput = "";
            display.innerHTML = "_____"; // 초기화
            display.className = ""; // 메시지 숨김
            }, 1000);
        }, 1000);
        }
    });