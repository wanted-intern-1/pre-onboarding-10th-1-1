import  { useState } from 'react';

const hintList = {
  email: '이메일 형식에 맞게 입력해주세요.',
  password: '8자 이상 입력해주세요.',
  passwordConfirm: '비밀번호가 일치하지 않습니다.'
};

const validation = {
  email: (value) => value.includes('@'),
  password: (value) => value.length > 7
};

export function useInput() {
  const [isValid, setIsValid] = useState(false);
  const [hint, setHint] = useState('');
  const [value, setValue] = useState('');

  const onInputChange = (e) => {
    const {name, value} = e.target;
    setIsValid(validation[name](value));
    if(!isValid) {
      setHint(hintList[name]);
    } else {
      setHint('');
      setValue(e.target.value);
    }
  }

  return {
    isValid, hint, value, onInputChange
  }
}
