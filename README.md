# 원티드 프리온보딩 프론트엔드 - 선발 과제

이 레파지토리는 원티드 프리온보딩 프론트엔드 과정 선발 과제입니다.  
배포링크 : https://majesty-jun-todolist.netlify.app/

---

## 기술 스택

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"> <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">  
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"> <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"> <img src="https://img.shields.io/badge/createreactapp-09D3AC?style=for-the-badge&logo=createreactapp&logoColor=white"> <img src="https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white">

---

## 데모 영상

https://user-images.githubusercontent.com/83108580/231895048-6955cdd6-8a7c-4e30-a8b5-b2b99ae0b7ea.mov

---

## 주요기능

### 1. 회원가입

[useFetch](https://github.com/Majesty-jun/wanted-pre-onboarding-frontend/tree/main/src/hooks/#useFetch) 커스텀 훅을 사용하여 제공된 API주소와 사용자의 입력값(email, password)를 통해 POST통신을 진행합니다.  
회원가입 성공 시, 로그인 페이지로 이동하게 됩니다.

에러가 발생하면, 에러 코드에 맞게 에러메세지가 출력됩니다.
- ErrorCode 400 : 중복된 이메일 입니다.

---

### 2. 로그인

회원가입과 마찬가지로 useFetch 커스텀 훅을 사용하여 제공된 API주소와 사용자의 입력값(email, password)를 통해 POST통신을 진행합니다.

로그인에 성공하게 되면 localStroage에 받아온 access_token 값을 저장하고, '/todo' 로 라우팅됩니다.

에러가 발생하면, 에러 코드에 맞게 에러메세지가 출력됩니다.

- ErrorCode 401 : 이메일 혹은 비밀번호를 확인해 주십시오.
- ErrorCode 404 : 등록되지 않은 사용자입니다.

---

### 3. [Create Todo](https://github.com/Majesty-jun/wanted-pre-onboarding-frontend/blob/main/src/components/Todo/CreateTodo.jsx)

FormInput, SubmitButton 컴포넌트로 이루어져 있습니다.  
SubmitButton 클릭(onSubmit) 시, 입력받은 todo 값을 통해 POST 통신을 진행합니다.

status가 201로 통신에 성공했을 경우, TodoList를 리렌더링하여 생성된 Todo Item을 바로 불러옵니다.

---

### 4. [Read Todo](https://github.com/Majesty-jun/wanted-pre-onboarding-frontend/blob/main/src/components/Todo/TodoList.jsx)

useFetch 커스텀 훅을 사용하여 제공된 API주소와 access_token을 통해 GET통신을 통해 Todo 항목들을 가져옵니다.  
reFetch state를 선언하고, useEffect의 종속성 배열에 reFetch값을 주어 변경될 때마다 통신을 진행할 수 있게 구성하였습니다.  
또한, UpdateTodo, DeleteTodo, CreateTodo 컴포넌트에 setReFetch 함수를 props로 전달하여 변경사항이 있을 경우 reFetch값을 변경하도록 구성하였습니다.

---

### 5. [Update Todo](https://github.com/Majesty-jun/wanted-pre-onboarding-frontend/blob/main/src/components/Todo/UpdateTodo.jsx)

Update 버튼 컴포넌트 입니다.  
버튼 클릭 시, Todo 항목 하단에 modify-input 및 check 모양의 submit-button, return모양의 cancel-button이 나타나게 됩니다.  
modify-input은 기본값으로 todo값을 가지고 있으며, submit-button 클릭 시 id값, 변경된 todo값, 체크박스 체크여부를 통해 비동기 통신을 진행합니다.  
cancel-button 클릭 시, update form이 사라지게 됩니다.  

status가 200으로 통신에 성공했을 경우, setReFetch값을 반전하여 TodoList를 리렌더링 할 수 있도록 합니다.

---

### 6. [Delete Todo](https://github.com/Majesty-jun/wanted-pre-onboarding-frontend/blob/main/src/components/Todo/DeleteTodo.jsx)

Delete 버튼 컴포넌트 입니다.  
버튼 클릭시, id값을 비동기 통신을 진행하여 데이터를 삭제합니다.  
status가 204로 통신에 성공했을 경우, setReFetch값을 반전하여 TodoList를 리렌더링 할 수 있도록 합니다.
