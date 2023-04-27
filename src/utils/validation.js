// 문자열에 @포함 여부 확인
export const isEmail = (value) => {
  const emailRegex = /.*@.*/;
  return emailRegex.test(value);
};

// 문자열 길이가 8자리 이상인지 확인
export const isPassword = (value) => {
  const passwordRegex = /^.{8,}$/;
  return passwordRegex.test(value);
};
