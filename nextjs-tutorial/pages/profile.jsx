import React from "react";
import { AppLayout, NicknameEditForm, FollowList } from "../src/components";
import Head from "next/head";

const Profile = () => {
  const followerList = [
    { nickname: "zerocho" },
    { nickname: "jw" },
    { nickname: "nodemon" },
  ];
  const followingList = [
    { nickname: "zerocho" },
    { nickname: "jw" },
    { nickname: "nodemon" },
  ];
  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
