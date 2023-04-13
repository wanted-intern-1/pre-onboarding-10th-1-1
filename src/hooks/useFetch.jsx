import axios from 'axios';
import { useState } from 'react';

export function useFetch() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState();
  const [status, setStatus] = useState();

  const customAxios = axios.create({
    baseURL: 'https://www.pre-onboarding-selection-task.shop'
  })

  const fetchData = async (params)  => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await customAxios.request(params);
      setData(response.data);
      setStatus(response.status);
    } catch (error) {
      setIsError(true);
      setStatus(error.response.data.statusCode);
    } finally {
      setIsLoading(false)
    }
  }

  return {status, isError, data, isLoading, fetchData};
}
