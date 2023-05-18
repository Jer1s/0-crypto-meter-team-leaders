export const getCryptoMockData = async () => {
  try {
    const response = await fetch('/cryptoMockData.json');

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(`loginRequest error: ${err}`);
    return err;
  }
};
