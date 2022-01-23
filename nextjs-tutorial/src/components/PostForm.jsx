import { Form, Input, Button } from "antd";
import { useCallback, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPost } from "../../redux/reducers/postReducers";

export const PostForm = () => {
  const dispatch = useDispatch();
  const { imagePaths } = useSelector((state) => state.post);

  const [text, setText] = useState("");
  const imageInput = useRef();
  const onSubmit = useCallback(() => {
    dispatch(addPost(text));
    setText("");
  }, []);

  const onChangeText = useCallback(
    (e) => {
      setText(e.target.value);
    },
    [text]
  );

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);
  return (
    <Form
      style={{ margin: "10px 0 20px" }}
      encType="multipart/form-data"
      onFinish={onSubmit}
    >
      <Input.TextArea
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder="어떤 신기한 일이 있나요?"
      />
      <div>
        <input type="file" multiple hidden ref={imageInput} />
        <Button onClick={onClickImageUpload}>이미지 업로드</Button>
        <Button type="primary" style={{ float: "right" }} htmlType="submit">
          추가
        </Button>
      </div>
      <div>
        {imagePaths.map((v) => {
          <div key={v} style={{ display: "inline-block" }}>
            <img src={v} style={{ width: "200px" }} alt={v} />
            <div>
              <Button>제거</Button>
            </div>
          </div>;
        })}
      </div>
    </Form>
  );
};
