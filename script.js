// JavaScript source code
const display = document.querySelector("#res-box");
const quesdisplay = document.querySelector("#ques-box");
let Input = "";
let Operator = "";
let firstInput = 0;
let result = 0;
const numbers = document.querySelectorAll(".number");
for (i = 0; i < numbers.length; i++) {
    const operand = numbers[i];
    operand.addEventListener("click", () => {
        Input += operand.textContent;
        display.textContent = Input;
    });
}
