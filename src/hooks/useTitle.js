import { useLayoutEffect } from 'react';

export function useTitle(titleContent) {
  useLayoutEffect(() => {
    document.title = titleContent;
  }, [titleContent]);
}
