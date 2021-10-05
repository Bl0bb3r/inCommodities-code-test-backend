const axios = require("axios");
const keys = require("../keys");

//just for example we're making a list of our preferred currencies - we could just fetch the whole shabang.
const symbols = "EUR,USD,GBP,AUD,BTC,KES,JPY,CNY";

// Axios Client declaration
const fixerApi = axios.create({
  baseURL: "http://data.fixer.io/api",
  params: {
    access_key: keys.FIXER_API_KEY,
  },
  timeout: 5000,
});

// Generic GET request function (OBS. based on EUR)
// Serves to recieve live currency rates updated once a day (free version Fixer API)
const get = async (url) => {
  const response = await fixerApi.get(url);
  const { data } = response;
  if (data.success) {
    return data;
  }
  throw new Error(data.error.type);
};

// after spending time trying to add the free conversion api. I realized the api I was already
// using had an endpoint with the same functionality to convert currency.

// after then spending time reading the documentation and adding it here -
// I realized - That feature is not supported on a free plan - Rip^2

// It may work as is - with a paid v. API_KEY though.

module.exports = {
  getRates: (fromCurrency) =>
    get(`/latest&symbols=${symbols}_&base=${fromCurrency}`),
  getSymbols: () => get("/symbols"),
  // convertCurrency: (fromCurrency, toCurrency, currAmount) =>
  //   get(`/convert?q=${fromCurrency}_${toCurrency}_${currAmount}`),
};
