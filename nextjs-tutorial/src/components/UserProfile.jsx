import { Card, Avatar, Button } from "antd";
import { useCallback } from "react";

export const UserProfile = ({ setIsLoggedIn }) => {
  const onLogOut = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <Card
      actions={[
        <div key="twit">
          짹짹
          <br />0
        </div>,
        <div key="twit">
          팔로잉
          <br />0
        </div>,
        <div key="twit">
          팔로워
          <br />0
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>ZC</Avatar>} />
      <Button onClick={onLogOut}>로그아웃</Button>
    </Card>
  );
};
