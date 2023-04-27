export const emailValidator = email =>{
  return email.includes('@')
}

export const passwordValidator = password =>{
  return password.length >= 8;
}