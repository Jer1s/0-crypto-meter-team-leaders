import { useCallback, useState, useEffect } from 'react';

// const BASE_URL = import.meta.env.VITE_BASE_URL;

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      // const response = await fetch(`${BASE_URL}${url}`);
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('데이터를 불러올 수 없습니다.');
      }
      const result = await response.json();

      setData(result);
      setLoading(false);
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [url, fetchData]);

  return { data, loading, error };
}

export default useFetch;
