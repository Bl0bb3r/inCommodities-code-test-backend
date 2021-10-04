const portfolioArray = [];

const GetAssetPortfolioValue = () =>
  portfolioArray.reduce((a, stock) => stock.value + a, 0);

const GetAssetPortfolioConsolidate = () => {
  throw "not yet implemented";
};

module.exports = {
  GetAssetPortfolioValue,
  GetAssetPortfolioConsolidate,
  portfolioArray,
};
