import { useState, useCallback } from 'react';

const useApi = () => {
  let [responseData, setResponseData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async (url, options = {}) => {
      setIsLoading(true);
      try {
          const response = await fetch(url, options);
          const json = await response.json();
          setResponseData(json?.lines);
        } catch (err) {
            setError(err);
        } finally {
            setIsLoading(false);
        }
    }, []);


  return { responseData, isLoading, error, fetchData };
};

export default useApi;
