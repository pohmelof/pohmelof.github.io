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
      console.log(typeof inputEl.value);
      inputNumbers.push(parseFloat(inputEl.value));
      inputNum.textContent = inputNumbers;
      inputEl.value = "";
      sumEl.textContent = inputNumbers.reduce(reducer);
    }
  }
});

resetBtn.addEventListener("click", () => {
  inputNumbers = [];
  inputNum.textContent = inputNumbers;
  sumEl.textContent = "";
});
