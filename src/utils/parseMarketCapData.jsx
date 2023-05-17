const parseMarketCapData = (marketCapData) => {
  const cryptoList = marketCapData.map((item) => {
    const {
      id,
      image,
      name,
      symbol,
      current_price: currentPrice,
      market_cap: marketCap,
      total_volume: totalVolume,
      price_change_percentage_1h_in_currency: pc1h,
      price_change_percentage_24h_in_currency: pc24h,
      price_change_percentage_7d_in_currency: pc7d,
    } = item;

    return {
      id,
      image,
      name,
      symbol,
      currentPrice,
      marketCap,
      totalVolume,
      pc1h,
      pc24h,
      pc7d,
    };
  });

  return (cryptoList);
};

export default parseMarketCapData;
