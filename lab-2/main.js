document.addEventListener("DOMContentLoaded", () => {

    // знаходження варіанту
    const optionSpan = document.querySelector("#version");
    let listNumber = 3;
    let version = listNumber % 6 + 1;

    optionSpan.textContent = version;

    // знаходження довжини гіпотенузи
    const form = document.querySelector("#form"),
          button = document.querySelector("#button"),
          answerBlock = document.querySelector("#answer"),
          errorColor = "rgb(255, 60, 0)",
          rightColor = "rgb(85, 218, 58)";

    function sideСalculation(katet1, katet2) {
        let answer = Math.sqrt((katet1 ** 2) + (katet2 ** 2));
        return answer;
    }

    button.addEventListener("click", function () {

        const katet1 = document.querySelector("#katet1").value,
              katet2 = document.querySelector("#katet2").value;

        if (katet1 < 0 || katet2 < 0) {
            answerBlock.style.color = errorColor;
            answerBlock.innerHTML = "Довжина катету не може бути меншою за нуль!";
        } else if (katet1 == 0 || katet2 == 0) {
            answerBlock.style.color = errorColor;
            answerBlock.innerHTML = "Довжина катету не може дорівнювати нулю!";
        } else {
            let answer = sideСalculation(katet1, katet2);
            answerBlock.style.color = rightColor;
            answerBlock.innerHTML = "Довжина гіпотенузи = " + answer;
            form.reset();
        }
    });
});
