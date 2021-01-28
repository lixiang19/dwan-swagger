import React from 'react';
import { Layout, Menu, Button } from 'antd';
import styled from 'styled-components';

const { Header, Sider, Content } = Layout;

function Home() {
  return (
    <Layout>
      <Header>
        <Menu mode="horizontal">
          <Menu.Item key="1">接口</Menu.Item>
          <Menu.Item key="2">设置</Menu.Item>
          <Menu.Item key="2">格式配置</Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
}
export default React.memo(Home);
