import { Layout } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import { Nav } from "./Navigation";

interface IProps {
  children: any;
}

export const AppWrapper: React.FC<IProps> = ({ children }) => {
  return (
    <Layout>
      <Nav />
      <Content className="site-layout" style={{ padding: "0 12px" }}>
        {children}
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Bowerbird ©2023, all rights reserved
      </Footer>
    </Layout>
  );
};
