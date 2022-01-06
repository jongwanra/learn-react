import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../elements/Input';
const Form = (props) => {
  const [company, setCompany] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [position, setPosition] = useState('');
  const [question, setQuestion] = useState('');

  const onClick = () => {
    console.log(
      `company: ${company}, name: ${name}, contact: ${contact}, position: ${position}, question: ${question}`
    );
  };

  return (
    <>
      <ContainerFirst>
        <WrapFirst>
          <TitleBox>
            <MainTitle>견적 및 상담 신청</MainTitle>
            <SubTitle>
              업종별 <strong>전문 담당자</strong>가 배정되어 상담해드립니다.
            </SubTitle>
          </TitleBox>
          <InputBox>
            <Input
              marginBottom={'47px'}
              value={company}
              placeholder="회사명(ex: 인사이더그램 컴퍼니)"
              onChange={(e) => setCompany(e.target.value)}
            />
            <Input
              marginBottom={'47px'}
              placeholder="담당자 성함(ex: 홍길동)"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              marginBottom={'47px'}
              placeholder="담당자 연락처"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <Input
              marginBottom={'47px'}
              placeholder="(ex: 대표)"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
            <Input
              value={question}
              placeholder="문의사항 -* 진행을 원하시는 서비스 및 수량에 대하여 작성"
              onChange={(e) => setQuestion(e.target.value)}
              heightInput={'290px'}
            />
          </InputBox>
        </WrapFirst>
      </ContainerFirst>
      <ContainerSecond>
        <WrapSecond>
          <FooterBox>
            <P>
              <CheckBox type="checkbox" />
              <span>
                개인정보 수집 및 보호정책 동의 <b>[자세히 보기]</b>
              </span>
            </P>
            <Button onClick={onClick}>상담 신청</Button>
          </FooterBox>
        </WrapSecond>
      </ContainerSecond>
    </>
  );
};

const ContainerFirst = styled.div`
  font-family: '맑은 고딕';
  margin: 0 auto;
  padding: 95px 70px;
  width: inherit;
  width: 1100px;
  height: ${1486 - 312 + 70}px;
  background-color: #0ba5e2;
  background-position: center top;
  background-size: 100% auto;
  box-sizing: border-box;
`;

const ContainerSecond = styled.div`
  font-family: '맑은 고딕';
  margin: 0 auto;
  padding: 47px 70px 99px;
  width: inherit;
  width: 1100px;
  height: 312px;
  background-size: 100% auto;
  box-sizing: border-box;
`;
const WrapFirst = styled.div`
  margin: 0 auto;
  width: 100%;
  height: ${1486 - 312}px;
`;

const WrapSecond = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
`;
const Button = styled.button`
  background-color: #0ba5e2;
  display: block;
  margin: 0 auto;
  width: 52%;
  height: 87px;
  border: none;
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  color: white;
  font-size: 30px;
`;

const TitleBox = styled.div`
  width: 100%;
  height: 135px;
  margin-bottom: 95px;
`;

const MainTitle = styled.h1`
  width: 100%;
  height: 60px;
  text-align: center;
  line-height: 60px;
  font-size: 3.4em;
  margin: 0 0 35px 0;
  padding: 0;
  color: #fff;
`;

const SubTitle = styled.h2`
  width: 100%;
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-size: 2em;
  font-weight: lighter;
  color: #fff;
`;

const FooterBox = styled.div`
  width: 100%;
  height: 100%;
`;
const InputBox = styled.div`
  width: 100%;
`;

const P = styled.p`
  width: 100%;
  height: 40px;
  text-align: left;
  margin-bottom: 40px;
  color: #4d4d4d;
  line-height: 40px;
  font-size: 1.5em;
  padding: 0;
  display: flex;
  justify-content: left;
  align-items: center;
`;

const CheckBox = styled.input`
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 40px;
`;

export default Form;
