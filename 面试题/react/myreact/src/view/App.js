import React from 'react';
// import { connect } from 'react-redux'
import { BrowserRouter,Route,Link,Switch,Redirect } from "react-router-dom";
import Login from './login'
import Home from './home'
import Page404 from './404'

function Protect({component:Com,...others}){
  // console.log(props)
  return (
    <Route {...others} render={(props)=>{
      console.log(props)
      return (
        1 > 2 ?
        <Com {...props}/>:
        <Redirect to='/login'/>
      )
    }}></Route>
  )
}

class App extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        return <div className='box'>
          {/* hello wolrd {this.props.mycount} */}
          <BrowserRouter>
            <Switch>
              {/* <Redirect path='/' to={{path:'/home'}}></Redirect> */}
              {/* exact  属性 是控制 路径完全相等才能走这个组件 */}
              <Route path='/' exact render={()=>{
                return <Redirect to='/home'></Redirect>
              }}></Route>
              <Route path='/login' component={Login}></Route>
              {/* <Route path='/home' component={Home}></Route> */}
              <Protect path='/home' component={Home}></Protect>
              <Route path='*' render={()=><Page404/>}></Route>
            </Switch>
          </BrowserRouter>
        </div>;
    }
}
// App = connect((state)=>{
//   return {
//     mycount:state.countReducer.count
//   }
// },(dispatch)=>{
//   return {
//     dispatch
//   }
// })(App)

export default App