export const fetchCrypto = () => {
  try {

    const response = await fetch(`https://pro-api.coingecko.com/api/v3/coins/markets?vs_currency=krw&order=market_cap_desc&per_page=100&page=${pageNum}&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=ko`, {
      headers: {
        ‘Content-Type’: ‘application/json’,
        ‘x-cg-pro-api-key’: ‘CG-ReEFUZC8FpbDTSJ6AmbKy3m1’,
      },
    });
  } catch {
    console.error(`cryptoRequest error: ${err}`);
    return err;
  }

}