const stockArray = [];
const currencyArray = [];
const portfolioArray = [stockArray, currencyArray];

const GetAssetPortfolioValue = () => {
  const stockValue = portfolioArray.reduce(
    (a, stockAsset) => stockAsset.value + a,
    0
  );
  stockValue;

  const currencyValue = portfolioArray.reduce(
    (a, currencyAsset) => currencyAsset + a,
    0
  );

  return {};
};
const GetAssetPortfolioConsolidate = () => {
  throw "not yet implemented";
};

module.exports = {
  GetAssetPortfolioValue,
  GetAssetPortfolioConsolidate,
  portfolioArray,
  stockArray,
  currencyArray,
};
