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

  const valueInEUR = stockArray.forEach((stockAsset) => {
    let val;
    if (stockAsset.currency === "EUR") {
      val += stockAsset.value;
    }
    return val;
  });
  convRate = getCurrencyConversion("EUR", `${inCurrency}`);
  const EURInCurrency = valueInEUR * convRate;

  const valueOfUSD = stockArray.forEach((stockAsset) => {
    let val;
    if (stockAsset.currency === "USD") {
      val += stockAsset.value;
    }
    return val;
  });
  convRate = getCurrencyConversion("USD", `${inCurrency}`);
  const USDInCurrency = valueOfUSD * convRate;

  const valueOfGBP = stockArray.forEach((stockAsset) => {
    let val;
    if (stockAsset.currency === "GBP") {
      val += stockAsset.value;
    }
    return val;
  });
  convRate = getCurrencyConversion("GBP", `${inCurrency}`);
  const GBPInCurrency = valueOfGBP * convRate;

  return EURInCurrency + USDInCurrency + GBPInCurrency;
};

const GetPortfolioCurrencyValue = (inCurrency) => {
  let convRate;

  const valueInEUR = currencyArray.forEach((currencyAsset) => {
    let val;
    if (currencyAsset.currency === "EUR") {
      val += currencyAsset.amount;
    }
    return val;
  });
  convRate = getCurrencyConversion("EUR", `${inCurrency}`);
  const EURInCurrency = valueInEUR * convRate;

  const valueInUSD = currencyArray.forEach((currencyAsset) => {
    let val;
    if (currencyAsset.currency === "USD") {
      val += currencyAsset.amount;
    }
    return val;
  });
  convRate = getCurrencyConversion("USD", `${inCurrency}`);
  const USDInCurrency = valueInUSD * convRate;

  const valueInBTC = currencyArray.forEach((currencyAsset) => {
    let val;
    if (currencyAsset.currency === "BTC") {
      val += currencyAsset.amount;
    }
    return val;
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
  throw "not yet implemented";
};

module.exports = {
  GetAssetPortfolioValue,
  GetAssetPortfolioConsolidate,
  portfolioArray,
  stockArray,
  currencyArray,
};
