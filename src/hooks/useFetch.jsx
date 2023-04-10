import { useState } from 'react';

export function useFetch() {
  const baseURL = 'https://www.pre-onboarding-selection-task.shop';
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState();
  const [status, setStatus] = useState();

  const fetchData = async (endpoint, params) => {
    setIsLoading(true);
    setError(false);
    try {
      const response = await fetch(`${baseURL}${endpoint}`, params);
      setStatus(response.status);
      if(response.status >= 200 && response.status < 300) {
        setData(await response.json());
      } else {
        setError(true);
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {status, error, data, isLoading, fetchData};
}
