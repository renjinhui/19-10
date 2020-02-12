import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter,HashRouter,Route,Link,NavLink,Switch } from "react-router-dom";
/* 
  BrowserRouter : 相当于 vue-router 的history模式
  HashRouter : 相当于 vue-router 的hash模式
  Route ：相当于 vue-router的 router-view
  Link：相当于 vue-router的 router-link
*/
class Home extends React.Component{
  render(){
    console.log(this.props)
    return <div>
      <h1>这是首页组件</h1>
    </div>
  }
}
class List extends React.Component{
  render(){
    console.log(this.props)
    // 编程式导航 this.props.history.push('/home')
    return <div>
      <h1>这是列表页组件</h1>
      <button onClick={()=>this.props.history.push('/home')}>66</button>
      <NavLink to='/list/l1'>L1</NavLink>
      <NavLink to='/list/l2'>L2</NavLink>
      <Route path='/list/l1' render={()=><h3>列表组件1</h3>}></Route>
      <Route path='/list/l2' render={()=><h3>列表组件2</h3>}></Route>
    </div>
  }
}
class App extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        return <div className=''>
          
          <Link to='/home?qq=123'>首页</Link>
          <Link to='/list/123454323456'>列表页</Link>
          {/* <Route path='/home' render={()=><h1>首页</h1>}>2341</Route>
          <Route path='/list' render={()=><h1>列表页</h1>}></Route> */}
          {/* <Route path='/' exact>1234567876543</Route> */}
          <Switch>
            {/* Switch组件的作用 就是当匹配到一个路径之后 下边路径不再查看 */}
            <Route path='/home' component={Home}></Route>
            <Route path='/list/:www' component={List}></Route>
            <Route path='/' exact>666666</Route>
            <Route render={()=><h3>404</h3>}></Route>
          </Switch>
        </div>;
    }
}

ReactDOM.render(<HashRouter>
  <App/>
</HashRouter>,document.getElementById('root'))