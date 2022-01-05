import React, { useRef } from 'react';
import { Text, Input, Grid, Button } from '../elements';
import { useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';
const Login = (props) => {
  const dispatch = useDispatch();
  const userId = useRef('');
  const userPwd = useRef('');

  const login = () => {
    dispatch(userActions.loginAction({ user_name: 'parl' }));
  };
  const changeUserId = (e) => {
    userId.current = e.target.value;
  };

  const changeUserPwd = (e) => {
    userPwd.current = e.target.value;
  };

  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text size="32px" bold>
          로그인
        </Text>

        <Grid padding="16px 0px">
          <Input
            label="아이디"
            ref={userId}
            placeholder="아이디를 입력해주세요."
            _onChange={changeUserId}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="패스워드"
            ref={userPwd}
            placeholder="패스워드 입력해주세요."
            _onChange={changeUserPwd}
          />
        </Grid>

        <Button
          text="로그인하기"
          _onClick={() => {
            login();
          }}
        ></Button>
      </Grid>
    </React.Fragment>
  );
};

export default Login;
