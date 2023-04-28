# 원티드 프리온보딩 프론트엔드 - 1팀 Best Practice

원티드 프리온보딩 프론트엔드 1팀 Best Practice 과제 repo입니다.

#### 배포링크 : https://pre-onboarding-10-1-1.netlify.app/

#### 팀 노션 : https://iamdooddi.notion.site/T1-8d53ec6136ce454e95de6cd5c0e0ed9b

#### Best Practice 선정시 고려한 부분들 [page link](https://www.notion.so/iamdooddi/pre-onboarding-10th-1-1-cff83f71cb2e4839a6b30c28eaab26d9)

<br />

---

## 팀 소개

| 이름          | github                          |
| ------------- | ------------------------------- |
| 엄성현 (팀장) | https://github.com/eomsteve     |
| 전하준        | https://github.com/Majesty-jun  |
| 차동엽        | https://github.com/dongyeopca   |
| 노지원        | https://github.com/no-support   |
| 손유정        | https://github.com/yuj1818      |
| 김다현        | https://github.com/Plu457       |
| 정승덕        | https://github.com/seungdeok    |
| 최승주        | https://github.com/VictoryJu    |
| 박우현        | https://github.com/woohyun-park |
| 갈미현        | https://github.com/Kal-MH       |

---


## 기술 스택

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"> <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">  
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"> <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"> <img src="https://img.shields.io/badge/createreactapp-09D3AC?style=for-the-badge&logo=createreactapp&logoColor=white"> <img src="https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white">

---

## 데모 영상

https://user-images.githubusercontent.com/83108580/231895048-6955cdd6-8a7c-4e30-a8b5-b2b99ae0b7ea.mov

<br />

---

## 프로젝트 구조

<details>
<summary>구조</summary>
<div markdown="1">

```
📦src
 ┣ 📂api
 ┃ ┣ 📜auth.js
 ┃ ┣ 📜client.js
 ┃ ┣ 📜index.js
 ┃ ┗ 📜todo.js
 ┣ 📂assets
 ┃ ┣ 📜confirm.svg
 ┃ ┣ 📜loading.svg
 ┃ ┗ 📜return.svg
 ┣ 📂components
 ┃ ┣ 📂Auth
 ┃ ┃ ┣ 📜AuthForm.jsx
 ┃ ┃ ┗ 📜Footer.jsx
 ┃ ┣ 📂Common
 ┃ ┃ ┣ 📜FormInput.jsx
 ┃ ┃ ┣ 📜PageTitle.jsx
 ┃ ┃ ┗ 📜SubmitButton.jsx
 ┃ ┣ 📂Styled
 ┃ ┃ ┗ 📜StyledSection.jsx
 ┃ ┣ 📂Todo
 ┃ ┃ ┣ 📜CreateTodo.jsx
 ┃ ┃ ┣ 📜DeleteTodo.jsx
 ┃ ┃ ┣ 📜TodoItem.jsx
 ┃ ┃ ┣ 📜TodoList.jsx
 ┃ ┃ ┗ 📜UpdateTodo.jsx
 ┃ ┗ 📜index.js
 ┣ 📂hooks
 ┃ ┣ 📜README.md
 ┃ ┣ 📜index.js
 ┃ ┣ 📜useAuth.js
 ┃ ┣ 📜useDebounce.js
 ┃ ┣ 📜useFetch.js
 ┃ ┣ 📜useMutation.js
 ┃ ┣ 📜useTitle.js
 ┃ ┗ 📜useTodo.js
 ┣ 📂pages
 ┃ ┣ 📜Sign.jsx
 ┃ ┗ 📜Todo.jsx
 ┣ 📂routes
 ┃ ┣ 📜ProtectedRoute.jsx
 ┃ ┗ 📜router.jsx
 ┣ 📂utils
 ┃ ┗ 📜validator.js
 ┣ 📜App.js
 ┣ 📜GlobalStyle.jsx
 ┗ 📜index.js
```

</div>
</details>

<br />

---

## 주요기능

### 1. 회원가입

[useFetch](https://github.com/Majesty-jun/wanted-pre-onboarding-frontend/tree/main/src/hooks/#useFetch) 커스텀 훅을 사용하여 제공된 API주소와 사용자의 입력값(email, password)를 통해 POST통신을 진행합니다.
[useAuth](https://github.com/wanted-intern-1/pre-onboarding-10th-1-1/blob/develop/src/hooks/useAuth.js) 커스텀 훅을 거쳐
회원가입 성공 시, 로그인 페이지로 이동하게 됩니다.

에러가 발생하면, 에러 코드에 맞게 에러메세지(Hint)가 출력됩니다.

- ErrorCode 400 : 중복된 이메일 입니다.

![Apr-14-2023 07-31-56](https://user-images.githubusercontent.com/83108580/231897292-e072ea8a-4b7d-426b-b00e-2564e494fad4.gif)

---

### 2. 로그인

회원가입과 마찬가지로 useFetch 커스텀 훅과 useAuth훅을 사용하여 제공된 API주소와 사용자의 입력값(email, password)를 통해 POST통신을 진행합니다.

로그인에 성공하게 되면 localStorage에 받아온 access_token 값을 저장하고, '/todo' 로 라우팅됩니다.

에러가 발생하면, 에러 코드에 맞게 에러메세지가 출력됩니다.

- ErrorCode 401 : 이메일 혹은 비밀번호를 확인해 주십시오.
- ErrorCode 404 : 등록되지 않은 사용자입니다.

![Apr-14-2023 07-18-47](https://user-images.githubusercontent.com/83108580/231895606-426cac45-3992-4242-8e05-033e37f1a517.gif)

---

### 3. [Create Todo](https://github.com/wanted-intern-1/pre-onboarding-10th-1-1/blob/develop/src/components/Todo/CreateTodo.jsx)

FormInput, SubmitButton 컴포넌트로 이루어져 있습니다.  
SubmitButton 클릭(onSubmit) 시, 입력받은 todo 값을 통해 POST 통신을 진행합니다.

통신에 성공했을 경우, TodoList를 useMutation훅과 useFetch훅을 이용해 리렌더링하여 생성된 Todo Item을 바로 불러옵니다.

![Apr-14-2023 07-20-41](https://user-images.githubusercontent.com/83108580/231896126-721a05df-53d6-4d39-8b59-18aef0f1a6c9.gif)

---

### 4. [Read Todo](https://github.com/wanted-intern-1/pre-onboarding-10th-1-1/blob/develop/src/components/Todo/TodoList.jsx)

useFetch 커스텀 훅을 사용하여 제공된 API주소와 access_token을 통해 GET통신을 통해 Todo 항목들을 가져옵니다.  
reFetch state를 선언하고, useEffect의 종속성 배열에 reFetch값을 주어 변경될 때마다 통신을 진행할 수 있게 구성하였습니다.  
또한, UpdateTodo, DeleteTodo, CreateTodo 컴포넌트에 useFetch 훅 안의 refetch 함수를 props로 전달하여 변경사항이 있을 경우 refetch값을 변경하도록 구성하였습니다.

---

### 5. [Update Todo](https://github.com/wanted-intern-1/pre-onboarding-10th-1-1/blob/develop/src/components/Todo/UpdateTodo.jsx)

Update 버튼 컴포넌트 입니다.  
버튼 클릭 시, Todo 항목 하단에 modify-input 및 check 모양의 submit-button, return모양의 cancel-button이 나타나게 됩니다.  
modify-input은 기본값으로 todo값을 가지고 있으며, submit-button 클릭 시 id값, 변경된 todo값, 체크박스 체크여부를 통해 비동기 통신을 진행합니다.  
cancel-button 클릭 시, update form이 사라지게 됩니다.

useTodo훅의 updateTodo 함수로 통신에 성공했을 경우, refetch함수를 호출하여 TodoList를 리렌더링 할 수 있도록 합니다.

![Apr-14-2023 07-22-55](https://user-images.githubusercontent.com/83108580/231896222-f410ab1e-6dcd-42aa-830e-fd2e85e062c4.gif)

---

### 6. [Delete Todo](https://github.com/wanted-intern-1/pre-onboarding-10th-1-1/blob/develop/src/components/Todo/DeleteTodo.jsx)

Delete 버튼 컴포넌트 입니다.  
버튼 클릭시, id값을 이용해 데이터를 삭제합니다.

useTodo훅의 deleteTodo 함수로 통신에 성공했을 경우, refetch함수를 호출하여 TodoList를 리렌더링 할 수 있도록 합니다.

![Apr-14-2023 07-21-58](https://user-images.githubusercontent.com/83108580/231896246-0d444277-1e22-4c03-8e4b-2b2c128ac92d.gif)
