import Navbar from "./Navbar";
import Footer from "./Footer";
import { ReactNode } from "react";

const Layout: React.FC = ({  children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
