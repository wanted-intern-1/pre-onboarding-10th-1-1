# Custom Hooks

## useFetch.jsx

Wanted에서 제공한 API 주소와 비동기 통신을 수행하는 커스텀 훅입니다.  
axios를 사용하여 params를 받아 비동기 통신을 진행합니다.
isLoading, isError, data, status, fetchData로 구성된 객체를 리턴합니다.

- isLoading : 로딩중
- isError : 에러 발생 유무
- data : 통신 성공 시 body값
- status : 통신 결과 코드
- fetchData : axios를 수행하는 함수

1. 통신이 시작함과 동시에 로딩중을 나타내는 없인 isLoading을 true로 변경하고, 통신이 끝남과 동시에 isLoading을 false로 변경합니다.
2. 통신 중 에러 발생 시 에러가 발생했음을 나타내는 isError값을 true로 변경합니다.
3. 통신 성공 시, 받아오는 body 값을 setData를 통해 data에 저장합니다.
4. 통신 결과로 들어온 상태 값을 에러 유무에 관계없이 setStatus를 통해 status에 저장합니다.

```JSX
export function TodoList() {
  const {data, fetchData} = useFetch();
  const [reFetch, setReFetch] = useState(false);
  const {token} = useContext(AccessTokenContext);

  useEffect(() => {
    fetchData({
      url: '/todos',
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`![스크린샷 2023-04-14 오전 3 39 09](https://user-images.githubusercontent.com/83108580/231888610-f46ab06e-e994-4c77-b6d1-e775e7f92992.png)

      }
    });
  }, [reFetch]);

  return (...)
}
```

---

## useTitle.jsx

페이지 별 제목을 지정하는 커스텀 훅입니다.
useLayoutEffect 훅을 사용하여 DOM레이아웃 배치 및 페인트가 진행되기 전 Title을 변경합니다.

```JSX
import { useTitle } from '@/hooks';

export default function SignIn() {
  useTitle("SignIn | TodoList");
      ...
  return (...)
}
```

![스크린샷 2023-04-14 오전 3 39 29](https://user-images.githubusercontent.com/83108580/231888068-8b73f661-b760-481e-9e15-ef0b1d3b7808.png) ![스크린샷 2023-04-14 오전 3 39 09](https://user-images.githubusercontent.com/83108580/231888773-b4f9acf9-ff1d-43c3-95f3-1df77fe23453.png)

