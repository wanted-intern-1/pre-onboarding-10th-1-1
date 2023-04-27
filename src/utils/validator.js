export const validateInput = {
  email: (value) => {
    return {
      isValid: value.includes('@'),
      msg: '이메일 형식에 맞게 입력해주세요.',
    };
  },
  password: (value) => {
    return {
      isValid: value.length >= 8,
      msg: '8자 이상 입력해주세요.',
    };
  },
};

export default validateInput;
