const { getRates } = require("./services/fixer-service");
const { convertCurrency } = require("./services/currency-converter-service");

const getRate = async (fromCurrency) => {
  const data = await getRates(fromCurrency);
  return { data };
};

const getCurrencyConversion = async (fromCurrency, toCurrency) => {
  const data = await convertCurrency(fromCurrency, toCurrency);
  return { data };
};

module.exports = {
  getRate,
  getCurrencyConversion,
};
