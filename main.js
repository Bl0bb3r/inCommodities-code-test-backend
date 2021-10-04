const {
  GetAssetPortfolioValue,
  portfolioArray,
  GetAssetPortfolioConsolidate,
} = require("./portfolio");

const stock = (symbol, shares, price, currency) => {
  return {
    symbol,
    shares,
    price,
    currency,
    value: shares * price,
  };
};

const currencyAssets = (amount, currency) => {
  return {
    amount,
    currency,
    value: amount * currRate, 
  };
};

const areEqual = (a, b) => Math.abs(a - b) < 0.0001;

const getRate = (fromCurrency, toCurrency) => {
  return {};
};

portfolioArray.push(stock("ABC", 200, 4, "EUR"));
portfolioArray.push(stock("DDW", 100, 10, "USD"));

if (!areEqual(GetAssetPortfolioValue(), 1800))
  console.log(
    "Test1 Failed, Expected Value: %f, Actual Value: %f",
    1800,
    GetAssetPortfolioValue()
  );
console.log("Done");
