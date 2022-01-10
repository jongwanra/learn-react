import Button from '../src/elements/Button';
import LoginInput from '../src/elements/LoginInput';
const Login = (props) => {
  return (
    <>
      <Button iconUrl="https://www.pet-friends.co.kr/img/icon_naver_square.fd63a134.svg" />
      <Button btnName="로그인" backgroundColor="#ebebeb" />
      <LoginInput />
    </>
  );
};

export default Login;
