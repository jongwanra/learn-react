import PropTypes from "prop-types";
import Link from "next/link";
import { useSelector } from "react-redux";
import { Menu, Input, Row, Col } from "antd";
import { UserProfile, LoginForm } from "../components";
import styled from "styled-components";

export const AppLayout = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput style={{ verticalAlign: "middle" }} />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">
            <a>회원 가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      {/* xs: mobile, sm: tablet, md: small desktop */}
      {/* gutter: column 사이의 간격 */}
      <Row gutter={8}>
        <Col xs={13} md={6}>
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={13} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://www.zerocho.com"
            target="_blanck"
            rel="_noreferrer noopener"
          >
            Made by Zerocho
          </a>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;
