import React from 'react';
import {connect} from 'react-redux'
import {  Menu,Layout,Icon,Breadcrumb } from 'antd';
import { Link } from 'react-router-dom'
import Add from './add'
import List from './list'
import Protect from '../common/protect'
const { Sider, Content } = Layout;
const { SubMenu } = Menu;
class App extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        collapsed: false,
        breadcrumb:[],
        ary:[]
      };
    
    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    changeTab = ({item, key, keyPath, domEvent})=>{
        // console.log(item, key, keyPath, domEvent)
        // this.props.history.push(key)
        this.setState({
            breadcrumb:keyPath.reverse()||[]
        })
    }
    initSelect = ()=>{
        let type = this.props.location.pathname.split('/').pop();
        switch (type) {
            case 'department':
                this.state.ary = ['部门管理','部门列表']
                break;
            case 'addDepartment':
                this.state.ary = ['部门管理','新增部门']
                break;
            case 'job':
                this.state.ary = ['职务管理','职务列表']
                break;
            case 'addJob':
                this.state.ary = ['职务管理','新增职务']
                break;
        
            default:
                break;
        }
        this.state.breadcrumb = this.state.ary;
    }
    render() {
        let permission = this.props.permission || [];
        this.initSelect();
        console.log(this.state.ary)
        return <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                <Menu 
                    theme="dark" 
                    defaultSelectedKeys={[this.state.ary[1]]} 
                    selectedKeys = {[this.state.ary[1]]} 
                    defaultOpenKeys = {[this.state.ary[0]]}
                    mode="inline" 
                    onClick={this.changeTab}>
                    {
                        permission.map(item=>(
                            <SubMenu
                                key={item.title}
                                title={
                                    <span>
                                    <Icon type={item.icon} />
                                    <span>{item.title}</span>
                                    </span>
                            }
                            >   
                                {
                                    item.tabs.map(v=>(
                                        <Menu.Item key={v.text}>
                                            <Link to={v.url}>{v.text}</Link>
                                        </Menu.Item>
                                    ))
                                }
                                {/* <Menu.Item key="5">员工列表</Menu.Item>
                                <Menu.Item key="6">新增员工</Menu.Item> */}
                            </SubMenu>
                        ))
                    }
                    
                </Menu>
            </Sider>
            <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    {
                        this.state.breadcrumb.map(item=><Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>)
                    }
                    {/* <Breadcrumb.Item>User</Breadcrumb.Item> */}
                </Breadcrumb>
                <div>
                    {/* <Route path='/home/org/department' render={(props)=>{
                        if(permission.some(item=>item.type=='department')){
                            return <h1>部门列表</h1>
                        }else{
                            return <Redirect to='/home'></Redirect>
                        }
                    }}></Route> */}
                    <Protect path='/home/org/department' component={List} type='departhandle'></Protect>
                    <Protect path='/home/org/addDepartment' component={Add} type='departhandle'></Protect>
                    {/* <Route path='/home/org/addDepartment' render={()=><h1>新增部门</h1>}></Route> */}
                </div>
            </Content>
        </Layout>
    }
}
App = connect((state)=>{
    console.log(state)
    return {
        permission:state.permission
    }
})(App)
export default App