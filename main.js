const form = document.querySelector("#form");
const purPrice = document.querySelector("#purchase_price");
const currPrice = document.querySelector("#current_price");
const noOfStocks = document.querySelector("#no_of_stocks");
const img = document.querySelector("#image_status");
const output = document.querySelector("#output");

function checkProfitLoss(event) {
  let change = Math.abs(parseInt(purPrice.value) - parseInt(currPrice.value));
  let changePercentage = (change * 100) / parseInt(purPrice.value);
  noOfStocks = parseInt(noOfStocks.value);
  if (parseInt(purPrice.value) <= parseInt(currPrice.value)) {
    // img.setAttribute("src", "./image/4003196.jpg");
    output.innerText = `You gained ${changePercentage.toFixed(2)}%. Your total profit is ${change * noOfStocks}Rs`;
  }
  else {
    // img.setAttribute("src", "./image/output-onlinepngtools.png");
    output.innerText = `You lost ${changePercentage.toFixed(2)}%. Your total loss is ${change * noOfStocks}Rs`;
  }
  output.scrollIntoView(true);
  event.preventDefault();
}

form.addEventListener("submit", checkProfitLoss);
