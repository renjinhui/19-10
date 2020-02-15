import React from 'react';
import MyHeader from '../components/home/myheader'
import '../less/home.less'
import { Route,Redirect } from "react-router-dom";
import Org from '../components/org'
import Crm from '../components/crm'
import { Layout } from 'antd';
const { Header, Footer } = Layout;
class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <Layout>
            <Header>
                {/* 把Home组件的参数 再次传递给 MyHeader组件 */}
                <MyHeader {...this.props}/>
            </Header>
            <Route path='/home' exact render={()=><Redirect to='/home/org'/>}></Route>
            <Route path='/home/crm' component={Crm}/>
            <Route path='/home/org' component={Org}/>
            {/* <Layout>
                <Sider>Sider</Sider>
                <Content>Content</Content>
            </Layout> */}
            <Footer style={{background:"#333",color:'#fff',textAlign:'center'}}>Footer</Footer>
      </Layout>
    }
}

export default App