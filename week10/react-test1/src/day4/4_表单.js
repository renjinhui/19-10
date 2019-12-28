import React from 'react';
import ReactDOM from 'react-dom';
import {Button,Input} from 'antd'
class App extends React.Component {
    state = {
      val:666
    }
    submit=()=>{
      // 1、通过获取input元素的方式 去获取框的内容
      // 这种方式编写的组件我们一般称为非受控组件
      console.log(this.refs.qqq.value)

      // 2、通过给input元素绑定 value和onChange事件
      // 表单元素的数据受statee或者props控制的表单我们成受控组件
      console.log(this.state.val)
    }
    componentDidMount(){
      this.refs.www.onclick = ()=>{
        // this.setState  这个是同步的
      }
    }
    change=(e)=>{
      console.log(e.target.value)
      this.setState({
        val:e.target.value
      })
    }
    render() {
        let {val} = this.state;
        return <div className=''>
          <Input type="text" />
          <input ref='qqq' type="text" placeholder='自己的框'/>
          <input type="text" value={val} onChange={this.change}/>
          <Button onClick={this.submit}>提交</Button>
          {/* 
            <button onClick></button> 在react元素上的事件 都是合成事件 
            在合成事件和钩子函数中使用的setState都是异步操作
          */}
          <button ref='www'>www</button>
        </div>;
    }
}


ReactDOM.render(<App/>,document.getElementById('root'))