import { Breadcrumb, Layout, Menu } from "antd";
import { Link, Outlet } from "react-router-dom";
import { userListPath } from "../feature/user/routes";

const { Header, Content, Sider } = Layout;


export const Root = () => {
  return (
    <>
      <Layout>
        <Header style={{ display: "flex", alignItems: "center" }}>
          <div className="demo-logo" />
        </Header>
        <Layout>
          <Sider width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
              items={
                [
                  {
                    label: <Link to={userListPath}>User</Link>,
                    key: 'user'
                  }
                ]
              }
            />
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: "16px 0" }} items={[{
              breadcrumbName: ''
            }]}>
              
            </Breadcrumb>
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};
