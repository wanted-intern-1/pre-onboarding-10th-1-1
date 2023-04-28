import { useState, useCallback } from 'react';

export const useMutation = (
  fetchAPI,
  { onSuccess, onError } = {
    onSuccess: undefined,
    onError: undefined,
  }
) => {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const mutation = useCallback(
    async (requestData) => {
      setIsLoading(true);

      try {
        const responseData = await fetchAPI(requestData);

        setData(responseData);
        onSuccess?.(responseData || requestData);
      } catch (error) {
        setError(error);
        onError?.(error);
      } finally {
        setIsLoading(false);
      }
    },
    [fetchAPI, onSuccess, onError]
  );

  return [mutation, { data, isLoading, error, isError: error !== null }];
};
