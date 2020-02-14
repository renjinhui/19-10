import React from 'react';
import './inp.css'
import { message,Button,Input } from 'antd'
class Child extends React.Component {
    constructor(props) {
        super(props);// this.props = props;
        this.state = {
          // react的两大数据源  状态(state) 属性(props)
          name:"珠峰培训"
        }
    }
    change1=(e)=>{
      // console.log(e,this)
      // this.state.name = e.target.value;
      this.setState({
        name: e.target.value
      })
      this.props.mychange(e.target.value)
      console.log(this.state.name)
    }
    render() {
        return <div className=''>
          <h4>这是一个子组件{this.props.name}</h4>
          <input type="text" value={this.state.name} onChange={this.change1}/>
          <input type="text" value={this.state.name} onChange={this.change1.bind(this)}/>
          <input type="text" value={this.state.name} onChange={(e)=>{this.change1(e)}}/>
          <Button onClick={()=>{message.success('This is a success message');}}>点击我</Button>
        </div>;
    }
}
class MyInput extends React.Component{
  render(){
    return <div className='inp_box'>
      <input type="text" value={this.props.value} onChange={this.props.onChange}/>
    </div>
  }
}
class Parent extends React.Component{
    constructor(){
      super();
      this.aaa = React.createRef();
    }
    state = {
      obj:{q:123},
      name:"珠峰培训"
    }
    change=(str)=>{
      this.setState({
        name:str
      })
    }
    change2=(e)=>{
      console.log(this.refs.qqq,this.qwe,this.aaa.current)
      this.setState({
        name:e.target.value
      })
    }
    render(){
      console.log(this.state)
      let {name} = this.state;
      return <div>
        <h2 ref='qqq'>这是一个父组件{this.state.obj.q}</h2>
        <Child ref={(el)=>{this.qwe = el}} name={name} mychange={this.change}></Child>

        <Input ref={this.aaa} value={name} onChange={this.change2}/>
        <MyInput value={name} onChange={this.change2}></MyInput>
      </div>
    }
}
console.dir(Parent)

export default Parent