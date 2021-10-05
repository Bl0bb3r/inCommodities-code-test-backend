const {
  GetAssetPortfolioValue,
  portfolioArray,
  stockArray,
  currencyArray,
  GetAssetPortfolioConsolidate,
} = require("./portfolio");
const {
  getRates,
  getSymbols,
  //convertCurrency,
} = require("./services/fixer-service");
const { convertCurrency } = require("./services/currency-converter-service");

const stockAsset = (symbol, shares, price, currency) => {
  return {
    symbol,
    shares,
    price,
    currency,
    value: shares * price,
  };
};

const currencyAsset = (amount, currency) => {
  return {
    amount,
    currency,
  };
};

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

const runTest = async () => {
  testRates();
  testSymbols();
  testConversion();
};

const areEqual = (a, b) => Math.abs(a - b) < 0.0001;

const getRate = async (fromCurrency) => {
  const data = await getRates(fromCurrency);
  return { data };
};

const getCurrencyConversion = async (fromCurrency, toCurrency) => {
  const data = await convertCurrency(fromCurrency, toCurrency);
  return { data };
};

stockArray.push(stockAsset("ABC", 200, 4, "EUR"));
stockArray.push(stockAsset("DDW", 100, 10, "USD"));
currencyArray.push(currencyAsset(1000, "EUR"));
currencyArray.push(currencyAsset(1000, "USD"));

// if (!areEqual(GetAssetPortfolioValue(), 1800))
//   console.log(
//     "Test1 Failed, Expected Value: %f, Actual Value: %f",
//     1800,
//     GetAssetPortfolioValue()
//   );

console.log("Done");
console.log(portfolioArray);
//runTest();
