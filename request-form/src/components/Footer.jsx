import React from 'react';
import styled from 'styled-components';
const Footer = (props) => {
  return (
    <>
      <Container>
        <Wrapper>
          <div>상호명: (주)인사이더그램컴퍼니 대표: 이승훈</div>
          <br />
          <div>사업자등록번호: 251-88-01847</div>
          <br />
          <div>주소: 서울특별시 강남구 테헤란로 116, 10층</div>
        </Wrapper>
      </Container>
      <EmptyContainer></EmptyContainer>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 30px;
  height: 201px;
  width: 100%;
  background-color: #eee;

  @media screen and (max-width: 715px) {
    padding: 20px;
    font-size: 0.4rem;
    height: auto;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  div {
    font-size: 1.2rem;
    text-align: center;
    color: #828282;
  }
  @media screen and (max-width: 715px) {
    height: auto;
    div {
      font-size: 0.9rem;
      text-align: center;
    }
  }
`;

const EmptyContainer = styled.div`
  margin: 0 auto;
  padding: 95px 70px;
  height: 30px;
  box-sizing: border-box;
  @media screen and (max-width: 805px) {
    padding: 20px;
    height: auto;
  }
`;
export default Footer;
