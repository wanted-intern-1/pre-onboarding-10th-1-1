# Custom Hooks

api통신과, 입력 성능 최적화, 위해 커스텀훅을 만들어 사용했습니다.

---

### [useFetch](https://github.com/wanted-intern-1/pre-onboarding-10th-1-1/blob/develop/src/hooks/useFetch.js)

- 주로 데이터 가져오는 작업에 사용
- axios 기반의 통신 함수를 인자로 받아와 처리
- useEffect와 useCallback으로 API 통신 처리를 하며, 응답 데이터를 data 상태에 저장
- refetch 함수를 반환하여 필요한 경우 데이터를 다시 가져올 수 있음
- data, isLoading, error, isError와 같은 상태 변수 반환

### [useMutation](https://github.com/wanted-intern-1/pre-onboarding-10th-1-1/blob/develop/src/hooks/useMutaion.js)

- 주로 데이터 생성, 수정, 삭제등의 상태 변경 작업에 사용
- mutation 함수를 정의하여 API 통신 처리
- 통신 성공 시 onSuccess 콜백 호출, 실패 시 onError 콜백 호출
- data, isLoading, error와 같은 상태 변수를 반환

### [useTodo](https://github.com/wanted-intern-1/pre-onboarding-10th-1-1/blob/develop/src/hooks/useTodo.js)

- TodoList 페이지의 CRUD API 통신을 하기 위해 사용
- READ는 useFetch 훅을 사용해 데이터를 가져오느 콜백 함수 호출
- Create, Update, Delete 에서는 useMutation훅을 사용해 상태 반환

### [useAuth](https://github.com/wanted-intern-1/pre-onboarding-10th-1-1/blob/develop/src/hooks/useAuth.js)

- 로그인, 회원가입시 주로 사용
- form의 submit 호출시 api통신 로직 호출
- 회원가입시 `SignIn` 페이지로 유저 Redirect
- 로그인시 Token을 저장하는 로직과, `Todo`헤이지로 유저 Redirect

---

## [useTitle](https://github.com/wanted-intern-1/pre-onboarding-10th-1-1/blob/develop/src/hooks/useTitle.js)

- 페이지 별 제목을 지정하는 커스텀 훅
- useLayoutEffect 훅을 사용하여 DOM레이아웃 배치 및 페인트가 진행되기 전 Title을 변경

```JSX
import { useTitle } from '@/hooks';

export default function SignIn() {
  useTitle("SignIn | TodoList");
      ...
  return (...)
}
```

![스크린샷 2023-04-14 오전 3 39 29](https://user-images.githubusercontent.com/83108580/231888068-8b73f661-b760-481e-9e15-ef0b1d3b7808.png) ![스크린샷 2023-04-14 오전 3 39 09](https://user-images.githubusercontent.com/83108580/231888773-b4f9acf9-ff1d-43c3-95f3-1df77fe23453.png)

---

## [uesDebounce](https://github.com/wanted-intern-1/pre-onboarding-10th-1-1/blob/develop/src/hooks/useDebounce.jsx)

- 사용자의 입력을 받을때마다 결과반환을 지연시켜 유저가 일정 시간이 지난 후에 결과를 받을수 있게 하는 훅
- 0.3초 이내의 입력이 없으면 입력을 마친것으로 판단, 마지막까지 입력한 결과 값을 반환

```js
import { useState, useEffect } from 'react';

export const useDebounce = (value) => {
  const [dataQuery, setDataQuery] = useState(value);

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (dataQuery !== value) {
        setDataQuery(value);
      }
    }, 300);
    return () => clearTimeout(debounce);
  }, [value]);
  return dataQuery;
};
```
