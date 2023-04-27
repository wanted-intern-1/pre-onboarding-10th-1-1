import axios from 'axios';
import { useState } from 'react';

export function useFetch() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState();
  const [status, setStatus] = useState();

  const customAxios = axios.create();

  customAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    config.headers = {
      Authorization: `Bearer ${token}`,
      'Content-type': 'application/json',
    };
    config.baseURL = 'https://www.pre-onboarding-selection-task.shop';
    return config;
  });

  const fetchData = async (params) => {
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
      setIsLoading(false);
    }
  };

  return { status, isError, data, isLoading, fetchData };
}
