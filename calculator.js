document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();
        calculate();
    });
});

function calculate() {
    let cardSum = document.getElementById("sum").value;
    let fusionLevels = Array.from(document.querySelectorAll('input[name="flevel"]:checked'))
                            .map(cb => parseInt(cb.id.replace("f", "")));
    let xyzRanks = Array.from(document.querySelectorAll('input[name="xrank"]:checked'))
                        .map(cb => parseInt(cb.id.replace("x", "")));
    let possibleSums = new Set();

    xyzRanks.forEach(x => {
        let requiredY = cardSum - (2 * x); // 2개의 x를 사용한 후 남은 값이 y가 되어야 함
        if (fusionLevels.includes(requiredY)) { // 체크된 융합 레벨 중에 requiredY가 있다면
            possibleSums.add(x + requiredY); // x + y 값을 추가
        }
    });        

    let resultDiv = document.getElementById("level");
    resultDiv.innerText = possibleSums.size > 0 ? Array.from(possibleSums).sort((a, b) => a - b).join(", ") : "없음";
    document.getElementById("result").style.display = "block";
}                       
