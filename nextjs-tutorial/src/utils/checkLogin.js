const checkLogin = (text, name) => {
  // 이메일 정규식(default)
  let regExp =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  // 비밀번호 정규식
  if (name === 'pwd') {
    regExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
  }

  // 정규식 통과한 경우 true 아니면 false 반환
  return regExp.test(text) ? true : false;
};

export default checkLogin;
