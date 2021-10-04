const {
  GetAssetPortfolioValue,
  portfolioArray,
  GetAssetPortfolioConsolidate,
} = require("./portfolio");

const stock = (symbol, shares, price) => {
  return {
    symbol,
    shares,
    price,
    value: shares * price,
  };
};

const areEqual = (a, b) => Math.abs(a - b) < 0.0001;

const getRate = (fromCurrency, toCurrency) => {};

portfolioArray.push(stock("ABC", 200, 4));
portfolioArray.push(stock("DDW", 100, 10));

if (!areEqual(GetAssetPortfolioValue(), 1800))
  console.log(
    "Test1 Failed, Expected Value: %f, Actual Value: %f",
    1800,
    GetAssetPortfolioValue()
  );
console.log("Done");
