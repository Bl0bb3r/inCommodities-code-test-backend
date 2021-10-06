const axios = require("axios");
const keys = require("../keys");

// initially i tried connecting to a free currency conversion API
// However after spending too much time on it not working i debugged my way to the information
// that the endpoint was actually down - I accessed and confirmed this information
// using their site - which states there is not guaranteed uptime on the free version.
// Rip..

// in the end the API came up right after i realized the other v. was a paid v. ...

const conversionRateApi = axios.create({
  baseURL: "https://free.currconv.com/api/v7",
  timeout: 5000,
});

// for some reason I could not implement using the stored api key here - the api's only
// documentation of usage was mailed to me viewing it like the below conversionRateApi
// did however insert the data binding myself into the url.

module.exports = {
  convertCurrency: async (fromCurrency, toCurrency) => {
    const response = await conversionRateApi.get(
      `/convert?q=${fromCurrency}_${toCurrency}&compact=ultra&apiKey=d541735d365f8baf08f1`
    );
    console.log(response);
    const key = Object.keys(response.data)[0];
    const { value } = response.data[key];

    return { rate: value };
    // return { value };
  },
};
