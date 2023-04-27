import { useState, useCallback } from 'react';

export const useMutation = (fetchAPI, { onSuccess, onError }) => {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const handleResponse = (response) => {
    if (response.status !== 200 && response.status !== 201) {
      const { error, message, statusCode } = response.data;
      throw new Error(
        `statusCode: ${statusCode}, message: ${message}, error: ${error}`
      );
    }

    if (
      response.headers['content-type'] &&
      response.headers['content-type'].includes('application/json')
    ) {
      return response.data;
    }

    return null;
  };

  const mutation = useCallback(
    async (requestData) => {
      setIsLoading(true);

      try {
        const response = await fetchAPI(requestData);
        const responseData = handleResponse(response);

        setData(responseData);
        if (onSuccess) onSuccess(responseData || requestData);
      } catch (error) {
        setError(error);
        if (onError) onError(error);
      } finally {
        setIsLoading(false);
      }
    },
    [fetchAPI, onSuccess, onError]
  );

  return [mutation, { data, isLoading, error, isError: error !== null }];
};
