import { useEffect, useState, useCallback } from 'react';

export const useFetch = (fetchAPI) => {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const refetch = useCallback(async () => {
    try {
      setIsLoading(true);

      const responseData = await fetchAPI();
      setData(responseData);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [fetchAPI]);

  useEffect(() => {
    if (!localStorage.getItem('token')) return;

    refetch();
  }, [refetch]);

  return { data, isLoading, error, isError: error !== null, refetch };
};
