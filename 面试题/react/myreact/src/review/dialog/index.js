import React from 'react';
import Dialog from './dialog'
import { Button } from 'antd'
class App extends React.Component {
    constructor() {
        super();
        this.state = {
          isShow:false
        }
    }
    switchFn = (type)=>{
      this.setState({
        isShow:type
      })
    }
    render() {
        let { isShow } = this.state;
        return <div className=''>
          <Button onClick={this.switchFn.bind(this,true)}>显示弹框</Button>
          <Dialog isShow={isShow} onHide={this.switchFn}>
            <h2>这是自己定义的内容</h2>
            <h3>可以写很多</h3>
          
          </Dialog>
        </div>;
    }
}

export default App