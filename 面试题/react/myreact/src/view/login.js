import React from 'react';
import { Input,Button } from "antd";
class App extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        return <div className='login_box'>
          <div className="formBox">
            <Input placeholder="姓名"/>
            <Input.Password placeholder="密码" />
            <Button>登录</Button>
          </div>
        </div>;
    }
}

export default App