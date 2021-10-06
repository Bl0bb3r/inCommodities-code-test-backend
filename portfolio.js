const { getRate, getCurrencyConversion } = require("./common");

const stockArray = [];
const currencyArray = [];
const portfolioArray = [stockArray, currencyArray];

// getPortFolioStockValue returns total value of all stocks in portfolio
// taking the currency inb  symbols eg. "EUR" as parameter.

// Thoughts: Essentially adding all types of currency would be needed which is not
// stable on long term - probably af smarter factory method pattern could be applied
const GetPortfolioStockValue = (inCurrency) => {
  let convRate;
  let val = 0;
  let valueInEUR = 0;
  let valueInUSD = 0;
  let valueInGBP = 0;

  stockArray.forEach((stockAsset) => {
    if (stockAsset.currency === "EUR") {
      val += stockAsset.value;
      return val;
    }
    valueInEUR = val;
  });
  convRate = getCurrencyConversion("EUR", `${inCurrency}`);
  const EURInCurrency = valueInEUR * convRate;

  stockArray.forEach((stockAsset) => {
    if (stockAsset.currency === "USD") {
      val += stockAsset.value;
      return val;
    }
    valueInUSD = val;
  });
  convRate = getCurrencyConversion("USD", `${inCurrency}`);
  const USDInCurrency = valueInUSD * convRate;

  stockArray.forEach((stockAsset) => {
    if (stockAsset.currency === "GBP") {
      val += stockAsset.value;
      return val;
    }
    valueInGBP = val;
  });
  convRate = getCurrencyConversion("GBP", `${inCurrency}`);
  const GBPInCurrency = valueInGBP * convRate;

  return EURInCurrency + USDInCurrency + GBPInCurrency;
};

const GetPortfolioCurrencyValue = (inCurrency) => {
  let convRate;
  let val = 0;
  let valueInEUR = 0;
  let valueInUSD = 0;
  let valueInBTC = 0;

  currencyArray.forEach((currencyAsset) => {
    if (currencyAsset.currency === "EUR") {
      val += currencyAsset.amount;
      return val;
    }
    valueInEUR = val;
  });
  convRate = getCurrencyConversion("EUR", `${inCurrency}`);
  const EURInCurrency = valueInEUR * convRate;

  currencyArray.forEach((currencyAsset) => {
    if (currencyAsset.currency === "USD") {
      val += currencyAsset.amount;
      return val;
    }
    valueInUSD = val;
  });
  convRate = getCurrencyConversion("USD", `${inCurrency}`);
  const USDInCurrency = valueInUSD * convRate;

  currencyArray.forEach((currencyAsset) => {
    if (currencyAsset.currency === "BTC") {
      val += currencyAsset.amount;
      return val;
    }
    valueInBTC = val;
  });
  convRate = getCurrencyConversion("BTC", `${inCurrency}`);
  const BTCInCurrency = valueInBTC * convRate;

  return EURInCurrency + USDInCurrency + BTCInCurrency;
};

// Assignment 2
const GetAssetPortfolioValue = (inCurrency) => {
  const stockValue = GetPortfolioStockValue(inCurrency);
  const currencyValue = GetPortfolioCurrencyValue(inCurrency);
  const total = stockValue + currencyValue;
  return `Portfolio Total is valued at: ${total} ${inCurrency}`;
};

// Assignment 3
const GetAssetPortfolioConsolidate = () => {
  // use reduce?
  // also some custom logic will be needed to find mean value
  // eg. 100 shares og ABC stock at 2$ and 200 shares of ABC stock at 3.5$
  // becomes 300 shares at 3.0$
  throw "not yet implemented";
};

module.exports = {
  GetAssetPortfolioValue,
  GetAssetPortfolioConsolidate,
  portfolioArray,
  stockArray,
  currencyArray,
};
