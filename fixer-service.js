const axios = require("axios");
const keys = require("./keys");

const symbols = "EUR,USD,GBP,AUD,BTC,KES,JPY,CNY";

// Axios Client declaration
const api = axios.create({
  baseURL: "http://data.fixer.io/api",
  params: {
    access_key: keys.API_KEY,
  },
  timeout: 5000,
});

// Generic GET request function
const get = async (url) => {
  const response = await api.get(url);
  const { data } = response;
  if (data.success) {
    return data;
  }
  throw new Error(data.error.type);
};

module.exports = {
  getRates: () => get(`/latest&symbols=${symbols}&base=EUR`),
};
