import { useState, useEffect } from 'react';

export const useDebounce = (value) => {
  const [dataQuery, setDataQuery] = useState(value);

  useEffect(() => {
    const debounce = setTimeout(() => {
      if(dataQuery !== value){
        setDataQuery(value);
      }
    }, 300);
    return () => clearTimeout(debounce);
  }, [value]);
  return dataQuery;
};

