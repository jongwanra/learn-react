import styled from '@emotion/styled';

/*
 * 유저 관련 입력창
 */

const LoginInput = ({ title = '이메일 주소' }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <InputBox></InputBox>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  padding: 10px 0 14px;
`;

const Title = styled.h3`
  // 13px -> 1.3rem;
  font-size: 13px;
  letter-spacing: -0.07px;
  line-height: 18px;
`;

const InputBox = styled.div`
  border: 2px solid red;
`;
export default LoginInput;
