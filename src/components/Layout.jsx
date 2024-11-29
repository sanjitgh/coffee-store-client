import { Outlet } from "react-router-dom";
import Home from "../Home";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
};

export default Layout;
