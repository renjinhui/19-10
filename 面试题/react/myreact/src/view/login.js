import React from 'react';
import { Input,Button } from "antd";
import '../less/login.less'
import { loginFn } from "../api/login";
class App extends React.Component {
    constructor() {
        super();
        this.state = {
          name:'',
          psw:''
        }
    }
    changeName=(e)=>{
      this.setState({
        name:e.target.value
      })
    }
    changePsw=(e)=>{
      this.setState({
        psw:e.target.value
      })
    }
    submit=async ()=>{
      // loginFn({
      //   account:this.state.name,
      //   password:this.state.psw
      // }).then(data=>{
      //   console.log(data)
      // })
      let data = await loginFn({
        account:this.state.name,
        password:this.state.psw
      })
      if(data.power){
        localStorage.setItem('power',data.power);// 只要有power的就是登录态
        localStorage.setItem('loginTime',Date.now());// 只要有power的就是登录态
        this.props.history.push('/home');// 登录成功 跳转home
      }else{
        localStorage.removeItem('power')
      }
      
      console.log(data)
    }
    render() {
        let {name,psw} = this.state; 
        return <div className='login_box'>
          <div className="formBox">
            <Input placeholder="姓名" value={name} onChange={this.changeName}/>
            <Input.Password placeholder="密码" value={psw} onChange={this.changePsw}/>
            <Button onClick={this.submit}>登录</Button>
          </div>
        </div>;
    }
}

export default App