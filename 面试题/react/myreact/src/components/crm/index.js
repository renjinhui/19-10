import React from 'react';
import { Layout } from 'antd';
const { Sider, Content } = Layout;
class App extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        return <Layout>
            <Sider>客户管理Sider</Sider>
            <Content>客户管理Content</Content>
        </Layout>
    }
}

export default App