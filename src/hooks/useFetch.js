import { useEffect, useState } from 'react';

export const useFetch = (fetchAPI) => {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    if (!localStorage.getItem('token')) return;

    const fetchData = async () => {
      try {
        setIsLoading(true);

        const response = await fetchAPI();
        if (response.status !== 200) {
          throw new Error('데이터를 가져오는 중 에러가 발생했습니다.');
        }

        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [fetchAPI]);

  return { data, isLoading, error, isError: error !== null };
};
