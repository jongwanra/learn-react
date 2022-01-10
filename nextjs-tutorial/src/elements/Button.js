import styled from '@emotion/styled';

/*
 * 로그인 버튼 관련
 */
const Button = ({
  btnName = '네이버로 로그인',
  iconUrl = '',
  backgroundColor = '#4fc137',
}) => {
  return (
    <ButtonBox
      backgroundColor={backgroundColor}
      onClick={() => alert('press btn!')}
    >
      <Icon src={iconUrl} />
      <span>{btnName}</span>
    </ButtonBox>
  );
};

const ButtonBox = styled.div`
  font-family: Noto Sans KR, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: #fff;
  width: 100%;
  height: 30px;
  font-size: 14px;
  font-weight: 700;
  height: 50px;
  border-radius: 6px;
  letter-spacing: -0.62px;
`;

const Icon = styled.img`
  position: absolute;
  width: 18px;
  margin-right: 6px;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
`;

export default Button;
