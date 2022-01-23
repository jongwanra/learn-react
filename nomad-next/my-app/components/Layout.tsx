import NavBar from "./NavBar";
import { Seo } from "./Seo";
export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Seo />
      <NavBar />
      <div>{children}</div>
    </>
  );
};
