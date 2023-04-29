import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import { useState } from "react";
import { Link } from "react-router-dom";

export interface props {}

const menuItems = [
  {
    key: "/",
    label: <Link to={"/"}>Home</Link>,
  },
  {
    key: "/services",
    label: <Link to={"/services"}>Services</Link>,
  },
];
export const Nav: React.FC<props> = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState("/");

  const onClick = (e: any) => {
    console.log("click ", e);
    setCurrentPage(e.key);
  };

  return (
    <Header style={{ position: "sticky", top: 0, zIndex: 1, width: "100%" }}>
      <Menu
        theme="dark"
        mode="horizontal"
        items={menuItems}
        onClick={onClick}
        selectedKeys={[currentPage]}
      />
    </Header>
  );
};
