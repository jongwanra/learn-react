import { createSlice } from "@reduxjs/toolkit";

const src =
  "https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?update=20180726";

const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "제로초",
      },
      content: "첫 번째 게시글 #해시태그 #익스프레스",
      Images: [
        {
          src,
        },
        {
          src,
        },
        {
          src,
        },
      ],
      Comments: [
        {
          User: {
            nickname: "hero",
          },
          content: "얼른 사고싶어요~",
        },
        {
          User: {
            nickname: "hello",
          },
          content: "좋네여~",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const dummyPost = {
  id: 2,
  content: "더미데이터입니다.",
  User: {
    id: 1,
    nickname: "제로초",
  },
  Images: [],
  Comments: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.mainPosts = [dummyPost, ...state.mainPosts];
      state.postAdded = true;
    },
  },
});

export const { addPost } = postSlice.actions;
export default postSlice.reducer;
