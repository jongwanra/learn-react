import React, { useCallback } from "react";
import styled from "styled-components";

import Link from "next/link";
import { Form, Input, Button } from "antd";

import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { loginAction } from "../../reducers/user";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const [id, onChangeId] = useInput(""); // custom hook
  const [password, onChangePassword] = useInput("");

  const onSubmitForm = useCallback(() => {
    console.log(`id: ${id} / password: ${password}`);
    dispatch(loginAction({ id, password }));
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
