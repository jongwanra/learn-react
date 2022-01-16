import React from "react";
import { AppLayout } from "../src/components";
import Head from "next/head";

const SignUp = () => {
  return (
    <>
      <Head>
        <title>회원가입 | NodeBird</title>
      </Head>
      <AppLayout>
        <div>SignUp</div>
      </AppLayout>
    </>
  );
};

export default SignUp;
