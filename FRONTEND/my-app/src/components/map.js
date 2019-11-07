import React, { Component } from "react";
import { Layout } from "antd";

const { Content, Sider } = Layout;

class Maps extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Sider
          style={{
            background: "#616161",
            minHeight: 100,
            padding: 20,
            marginTop: 20,

          }}
        >
          sssssssssss
        </Sider>

        <Content style={{ padding: "10px", marginTop: 10 }}>
          <div
            style={{
                marginTop: 10,
              background: "#616161",

              minHeight: 550,
              align: "right"
            }}
          >
            Content
          </div>
        </Content>
      </Layout>
    );
  }
}

export default Maps;
