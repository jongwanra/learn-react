import Button from '../src/elements/Button';
import LoginInput from '../src/elements/LoginInput';
const Login = (props) => {
  return (
    <>
      <Button iconUrl="https://www.pet-friends.co.kr/img/icon_naver_square.fd63a134.svg" />
      <Button btnName="로그인" backgroundColor="#ebebeb" />
      {/* 이메일 주소 */}
      <LoginInput
        title="이메일 주소"
        placeholder="예) kream@kream.co.kr"
        name="email"
      />
      {/* 비밀번호 */}
      <LoginInput title="비밀번호" placehoder="" name="pwd" />

      {/* 스니커즈 사이즈 */}
      <LoginInput
        title="스니커즈 사이즈"
        placeholder="선택하세요"
        name="shoes"
      />
    </>
  );
};

export default Login;
