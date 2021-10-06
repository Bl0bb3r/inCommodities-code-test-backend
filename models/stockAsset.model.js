const stockAsset = (symbol, shares, price, currency) => {
  return {
    symbol,
    shares,
    price,
    currency,
    value: shares * price,
  };
};

module.exports = { stockAsset };
