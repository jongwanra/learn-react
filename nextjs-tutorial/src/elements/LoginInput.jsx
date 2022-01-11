import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import {
  IoCaretDownCircleOutline,
  IoEyeOffOutline,
  IoEyeOutline,
} from 'react-icons/io5';

import checkLogin from '../utils/checkLogin';
/*
 * 유저 관련 입력창
 * 바뀌는 값:
 * - 상단 텍스트(title)
 * - placeholder
 * - 우측 Icon
 * - 눌렀을 때 나오는 하단 text
 */

const LoginInput = ({ title, placeholder, name }) => {
  const [icon, setIcon] = useState('not_visible');
  const [text, setText] = useState('');
  const [status, setStatus] = useState(true);
  const [prevent, setPrevent] = useState(true);

  // 아이콘 눈모양 토글 함수
  const togglePwdVisible = () => {
    if (icon === 'visible') {
      setIcon('not_visible');
    } else {
      setIcon('visible');
    }
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    // componentDidMount를 피하기 위함
    if (prevent) {
      setPrevent(false);
      return;
    }
    // 정규식 검사 통과인 경우
    if (checkLogin(text, name)) {
      // 제대로 작성 되었으면 끔
      setStatus(true);
    } else {
      setStatus(false);
    }
  }, [text]);

  // email input
  if (name === 'email') {
    return (
      <Container>
        <Title status={status}>{title}</Title>
        <InputBox>
          <Input
            placeholder={placeholder}
            value={text}
            onChange={onChange}
            status={status}
          />
          {!status && <Span>올바른 이메일을 입력해주세요.</Span>}
        </InputBox>
      </Container>
    );
  }

  // password input
  if (name === 'pwd') {
    return (
      <Container>
        <Title status={status}>{title}</Title>
        <InputBox>
          <Input
            type={icon === 'visible' ? 'text' : 'password'}
            placeholder={placeholder}
            value={text}
            onChange={onChange}
            status={status}
          />
          <Icon onClick={togglePwdVisible}>
            {icon === 'visible' ? <IoEyeOutline /> : <IoEyeOffOutline />}
          </Icon>
          {!status && (
            <Span>영문, 숫자, 특수문자를 조합해서 입력해주세요. (8-16자)</Span>
          )}
        </InputBox>
      </Container>
    );
  }
  // shoes size input
  if (name === 'shoes') {
    return (
      <Container>
        <Title status={status}>{title}</Title>
        <InputBox>
          <Input placeholder={placeholder} status={status} />
          <Icon>
            <IoCaretDownCircleOutline />
          </Icon>
        </InputBox>
      </Container>
    );
  }

  return (
    <Container>
      <Title status={status}>{title}</Title>
      <InputBox>
        <Input placeholder={placeholder} status={status} />
        <Icon></Icon>
      </InputBox>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 10px 0 14px;
`;

const Title = styled.h3`
  // 13px -> 1.3rem;
  color: ${(props) => (props.status ? '#000' : '#f15746')};
  font-size: 13px;
  letter-spacing: -0.07px;
  line-height: 18px;
`;

const InputBox = styled.div`
  position: relative;
  &:focus {
    border-bottom: #222;
  }
`;

const Input = styled.input`
  border: none;
  padding-right: 30px;
  padding: 8px 0;
  /* font-size: 1.5rem; */
  border-bottom: 1px solid #ebebeb;
  font-size: 15px;
  letter-spacing: -0.15px;
  height: 38px;
  line-height: 22px;
  width: 100%;
  &:focus {
    outline: none;
    padding-bottom: 7px;
    border-bottom: '2px solid #333';
  }
`;

const Icon = styled.button`
  position: absolute;
  font-size: 20px;
  right: 0;
  outline: none;
  background: none;
  padding: 0;
  border: 0;
  appearance: none;
  border-radius: 0;
`;

const Span = styled.span`
  color: #f15746;
`;
export default LoginInput;
