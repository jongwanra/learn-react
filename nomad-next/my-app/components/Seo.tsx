import { useRouter } from "next/router";
import Head from "next/head";

export const Seo: React.FC = () => {
  const router = useRouter();

  const getTitleInfo = () => {
    const tmpArr = router.pathname.split("/");
    const size = tmpArr.length;
    return tmpArr[size - 1] === "" ? "index" : tmpArr[size - 1];
  };

  return (
    <Head>
      <title>{`${getTitleInfo()} | Next Movie`}</title>
    </Head>
  );
};
