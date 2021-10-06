//#region imports
const {
  GetAssetPortfolioValue,
  portfolioArray,
  stockArray,
  currencyArray,
  GetAssetPortfolioConsolidate,
} = require("./portfolio");

const { getSymbols } = require("./services/fixer-service");
const { getRate, getCurrencyConversion } = require("./common");

const { currencyAsset } = require("./models/currencyAsset.model");
const { stockAsset } = require("./models/stockAsset.model");

//#endregion imports

const testRates = async () => {
  const data = await getRate("EUR");
  console.log(data);
  console.log("Rates running");
};

const testSymbols = async () => {
  const data = await getSymbols();
  //console.log(data);
  console.log("Symbols running");
};

const testConversion = async () => {
  const data = await getCurrencyConversion("EUR", "USD");
  console.log(data);
  console.log("Currency conversion running");
};

const testPortfolioEvaluation = async () => {
  const data = await GetAssetPortfolioValue("EUR");
  console.log(data);
  console.log("Portfolio Value running");
};

const runAllTests = async () => {
  testRates();
  testSymbols();
  testConversion();
};

const areEqual = (a, b) => Math.abs(a - b) < 0.0001;

stockArray.push(stockAsset("ABC", 200, 4, "EUR"));
stockArray.push(stockAsset("DDW", 100, 10, "USD"));
stockArray.push(stockAsset("EFG", 80, 8, "GBP"));
currencyArray.push(currencyAsset(1000, "EUR"));
currencyArray.push(currencyAsset(1000, "USD"));
currencyArray.push(currencyAsset(1, "BTC"));

// if (!areEqual(GetAssetPortfolioValue(), 1800))
//   console.log(
//     "Test1 Failed, Expected Value: %f, Actual Value: %f",
//     1800,
//     GetAssetPortfolioValue()
//   );

testPortfolioEvaluation();

console.log("Done");
//console.log(portfolioArray);
//runAllTests();
