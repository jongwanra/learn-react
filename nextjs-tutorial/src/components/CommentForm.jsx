import { Form, Input, Button } from "antd";
import { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
export const CommentForm = ({ post }) => {
  const id = useSelector((state) => state.user.me?.id);
  const [commentText, setCommentText] = useState("");

  const onChangeCommentText = useCallback(
    (e) => {
      setCommentText(e.target.value);
    },
    [commentText]
  );
  const onSubmitComment = useCallback(() => {
    console.log(post.id, commentText);
  }, [commentText]);

  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item style={{ position: "relative", margin: 0 }}>
        {id && (
          <Input.TextArea
            value={commentText}
            onChange={onChangeCommentText}
            rows={4}
          />
        )}
        <Button type="primary" htmlType="submit">
          삐약
        </Button>
      </Form.Item>
    </Form>
  );
};

CommentForm.propTypes = {
  post: PropTypes.object.isRequired,
};
