// get elemetns
const amount = document.querySelector("#amount");
const rate = document.querySelector("#rate");
const months = document.querySelector("#months");
const result = document.querySelector("#result");

// variables
const inputs = [amount, rate, months];

// functions
function handleInput() {
  const userAmount = +amount.value;
  const userRate = +rate.value;
  const userMonths = +months.value;
  const division = +(userAmount / userMonths);
  const interest = (userAmount * (userRate * 0.01)) / userMonths;
  result.textContent = (division + interest).toFixed(2);
}

// event listeners
inputs.forEach((input) => input.addEventListener("input", handleInput));
