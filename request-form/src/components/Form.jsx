import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Input from '../elements/Input';

import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const Form = (props) => {
  const [company, setCompany] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [position, setPosition] = useState('');
  const [question, setQuestion] = useState('');
  const [checkbox, setCheckbox] = useState(false);

  const companyRef = useRef(null);
  const nameRef = useRef(null);
  const contactRef = useRef(null);
  const positionRef = useRef(null);
  const questionRef = useRef(null);

  const checkEmpty = () => {
    if (!company) {
      companyRef.current.focus();
      alert('회사명을 적어주세요.');
      return false;
    }
    if (!name) {
      nameRef.current.focus();
      alert('담당자 성함을 적어주세요.');
      return false;
    }
    if (!contact) {
      contactRef.current.focus();
      alert('담당자 연락처를 적어주세요.');
      return false;
    }
    if (!position) {
      positionRef.current.focus();
      alert('직책을 적어주세요.');
      return false;
    }
    if (!question) {
      questionRef.current.focus();
      alert('문의 사항을 적어 주세요.');
      return false;
    }
    return true;
  };

  const checkCheckBox = () => {
    if (!checkbox) {
      alert('개인정보 수집 및 보호정책에 대한 동의가 필요합니다.');
      return false;
    }
    return true;
  };

  const onClick = async () => {
    // 적지 않은 정보가 있을 경우
    if (!checkEmpty()) {
      return;
    }
    // checkBox에 체크가 안되어 있을 경우
    if (!checkCheckBox()) {
      return;
    }

    const user_info = {
      company,
      name,
      contact: contact.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`),
      position,
      question,
      created_at: new Date().toLocaleString(),
    };
    try {
      await addDoc(collection(db, 'user'), user_info);
    } catch (e) {
      console.log('error: ', e);
    }

    alert('상담 신청이 완료되었습니다!');
    setCompany('');
    setContact('');
    setName('');
    setPosition('');
    setQuestion('');
    setCheckbox(false);
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
              ref={companyRef}
              value={company}
              placeholder="회사명(ex: 인사이더그램 컴퍼니)"
              onChange={(e) => setCompany(e.target.value)}
            />
            <Input
              marginBottom={'47px'}
              ref={nameRef}
              placeholder="담당자 성함(ex: 홍길동)"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              marginBottom={'47px'}
              ref={contactRef}
              placeholder="담당자 연락처(ex: 010-0000-0000)"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <Input
              marginBottom={'47px'}
              ref={positionRef}
              placeholder="(ex: 대표)"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
            <Input
              value={question}
              ref={questionRef}
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
              <CheckBox
                type="checkbox"
                onChange={() =>
                  checkbox ? setCheckbox(false) : setCheckbox(true)
                }
                checked={checkbox}
              />
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
