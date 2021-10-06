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

// Sparring from Filip made me realize some flaws that kept me from getting the right values
// this snippet was partly sent from him and then reworked by me, so the right value is returned.
const testPartFilipSnip = async () => {
  const stockArray1 = [
    { currency: "EUR", value: 1 },
    { currency: "EUR", value: 10 },
    { currency: "USD", value: 100 },
  ];
  let convRate;
  let val = 0;
  let valueInEUR = 0;

  stockArray1.forEach((stockAsset1) => {
    console.log("val is " + val);
    if (stockAsset1.currency === "EUR") {
      console.log("stockAsset1.value is " + stockAsset1.value);
      val += stockAsset1.value;

      console.log("val before returning is " + val);
      return val;
    }
    valueInEUR += val;
  });
  console.log("valueInEUR is " + valueInEUR);

  convRate = getCurrencyConversion("EUR", "USD");
  const EURInCurrency = valueInEUR * convRate;

  console.log("EURInCurrency is here " + EURInCurrency);
};

const testFullPortfolioEvaluation = async () => {
  const data = await GetAssetPortfolioValue("EUR");
  console.log(data);
  console.log("Portfolio Value running");
};

const runAllTests = async () => {
  testRates();
  testSymbols();
  testPartFilipSnip();
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

//testPartFilipSnip();
testFullPortfolioEvaluation();

console.log("Done");
//console.log(portfolioArray);
//runAllTests();
