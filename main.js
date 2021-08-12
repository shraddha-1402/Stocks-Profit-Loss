const form = document.querySelector("#form");
const purPrice = document.querySelector("#purchase_price");
const currPrice = document.querySelector("#current_price");
const output = document.querySelector("#output");

function checkProfitLoss(event) {
  let change = Math.abs(purPrice.value - currPrice.value);
  let changePercentage = (change * 100) / (purPrice.value);
  if (purPrice.value <= currPrice.value)
    output.innerText = `You gained ${changePercentage.toFixed(2)}%. Your total profit is ${change}Rs`;
  else
    output.innerText = `You lost ${changePercentage.toFixed(2)}%. Your total loss is ${change}Rs`;
  output.scrollIntoView(true);
  event.preventDefault();
}

form.addEventListener("submit", checkProfitLoss);
