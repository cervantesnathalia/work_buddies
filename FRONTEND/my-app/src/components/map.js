import React, { Component } from "react";
import { Layout } from "antd";

const { Content, Sider } = Layout;

class Maps extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Sider style={{ background: "#616161",minHeight: 400, padding: '20px',marginTop: 10, marginLeft: 20}}> 
        Sider
        </Sider>
        <Content style={{ padding: "5px" }}>
          <div style={{marginTop: 10,background: "#616161",minHeight: 550,align: "left"}}>
            Content
          </div>
        </Content>
      </Layout>
    );
  }
}

export default Maps;
