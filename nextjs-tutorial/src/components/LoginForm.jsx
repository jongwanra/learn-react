import Link from "next/link";
import { useCallback, useState } from "react";
import { Form, Input, Button } from "antd";
import styled from "styled-components";

export const LoginForm = ({ setIsLoggedIn }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  //   const [passwordCheck, setPasswordCheck] = useState("");

  // Component에 props로 넘기는 친구들은 useCallback을 꼭 써줘야 최적화가 된다.
  const onChangeId = useCallback(
    (e) => {
      setId(e.target.value);
    },
    [id]
  );

  // Component에 props로 넘기는 친구들은 useCallback을 꼭 써줘야 최적화가 된다.
  const onChangePassword = useCallback(
    (e) => {
      setPassword(e.target.value);
    },
    [password]
  );

  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    setIsLoggedIn(true);
  }, [id, password]);

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input
          name="user-password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>
      {/* style에는 인라인으로 객체를 넘겨주면 안된다. */}
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={false}>
          로그인
        </Button>
        <Link href="/signup">
          <a>회원가입</a>
        </Link>
      </ButtonWrapper>
    </FormWrapper>
  );
};

const FormWrapper = styled(Form)`
  padding: 10px;
`;
const ButtonWrapper = styled.div`
  margin-top: 10px;
`;
