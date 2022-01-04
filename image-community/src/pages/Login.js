import React, { useState } from 'react';
import { Text, Input, Grid, Button } from '../elements';
import { createCookie, getCookie } from '../shared/Cookie';
const Login = (props) => {
  const [userId, setUserId] = useState('');
  const [userPwd, setUserPwd] = useState('');
  const changeUserId = (e) => {
    setUserId(e.target.value);
  };

  const changeUserPwd = (e) => {
    setUserPwd(e.target.value);
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
            value={userId}
            placeholder="아이디를 입력해주세요."
            _onChange={changeUserId}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="패스워드"
            value={userPwd}
            placeholder="패스워드 입력해주세요."
            _onChange={changeUserPwd}
          />
        </Grid>

        <Button
          text="로그인하기"
          _onClick={() => {
            console.log(`userId: ${userId}, userPwd: ${userPwd}`);
            // createCookie(userId, userPwd);
            let res = getCookie(userId);
            console.log('res:', res);
          }}
        ></Button>
      </Grid>
    </React.Fragment>
  );
};

export default Login;
