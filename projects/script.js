const inputNum = document.getElementById("input-numbers");
const sumEl = document.getElementById("sum");
const inputEl = document.getElementById("input");
const resetBtn = document.getElementById("reset");
const message = document.querySelector(".message");

let inputNumbers = [];

const reducer = (value1, value2) => value1 + value2;

inputEl.addEventListener("keyup", (e) => {
  e.preventDefault();
  message.textContent = "";
  if (e.key == "Enter") {
    if (inputEl.value === "") {
      inputEl.value = "";
      message.textContent = "Введен неверный символ";
    } else {
      inputNumbers.push(parseFloat(inputEl.value));
      let numString = "";
      if (inputNumbers.length === 1) {
        numString += inputNumbers[0];
      } else {
        for (let i = 0; i < inputNumbers.length; i++) {
          if (i === inputNumbers.length - 1) {
            numString += ` ${inputNumbers[i]}`;
          } else {
            numString += ` ${inputNumbers[i]},`;
          }
        }
      }
      if (inputNumbers.length > 50) {
        inputNum.classList.add("small-text");
      }
      inputNum.textContent = numString;
      inputEl.value = "";
      sumEl.textContent = inputNumbers.reduce(reducer);
    }
  }
});

resetBtn.addEventListener("click", () => {
  inputNumbers = [];
  inputNum.textContent = inputNumbers;
  inputNum.classList.remove("small-text");
  sumEl.textContent = "";
});
