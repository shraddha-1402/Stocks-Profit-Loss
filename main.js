const formElement = document.querySelector("#form");
const purPriceElement = document.querySelector("#purchase_price");
const currPriceElement = document.querySelector("#current_price");
const noOfStocksElement = document.querySelector("#no_of_stocks");
const imgElement = document.querySelector("#image_status");
const outputElement = document.querySelector("#output");

function checkProfitLoss(event) {
  event.preventDefault();

  let purPrice = parseInt(purPriceElement.value);
  let currPrice = parseInt(currPriceElement.value);
  let noOfStocks = parseInt(noOfStocksElement.value);
  let change = Math.abs(purPrice - currPrice);
  let changePercentage = (change * 100) / purPrice;
  if (purPrice <= currPrice) {
    imgElement.setAttribute("src", "./image/profit.jpg");
    output.innerText = `You gained ${changePercentage.toFixed(2)} %. Your total profit is ${change * noOfStocks} Rs`;
  }
  else {
    imgElement.setAttribute("src", "./image/loss.png");
    output.innerText = `You lost ${changePercentage.toFixed(2)}%. Your total loss is ${change * noOfStocks} Rs`;
  }
  output.scrollIntoView(true);
}

form.addEventListener("submit", checkProfitLoss);