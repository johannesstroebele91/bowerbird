import React from "react";
import { Layout } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import { Nav } from "../Navigation";

export const Home: React.FC = () => {
  return (
    <Layout>
      <Nav />
      <Content className="site-layout" style={{ padding: "0 50px" }}>
        <p>Home</p>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        BowerBrid ©2023, all rights reserved
      </Footer>
    </Layout>
  );
};
