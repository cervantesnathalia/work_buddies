import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";

const { Header, Footer } = Layout;
const { SubMenu } = Menu;

class dashboard extends Component {
  state = {
    theme: "dark",
    current: "1"
  };
  render() {
    return (
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1">WORK BUDDIES</Menu.Item>
            <SubMenu
              key="sub1"
              style={{ textAlign: "left" }}
              title={
                <span>
                  <Icon type="appstore" />
                  <span>Menu</span>
                </span>
              }
            >
              <Menu.Item key="1">Account</Menu.Item>

              <Menu.Item key="4">Sign out</Menu.Item>
            </SubMenu>
          </Menu>
        </Header>
        <Footer style={{ textAlign: "center" }}>James Creations ©2019</Footer>
      </Layout>
    );
  }
}

export default dashboard;