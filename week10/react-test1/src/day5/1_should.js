import React from 'react';
import ReactDOM from 'react-dom'

class Son extends React.PureComponent{
  
}

class Child extends React.Component{
  shouldComponentUpdate(nextProps,nextState){
    // nextProps 是新的 props  
    // nextState 是新的 state
    if(nextProps.name == this.props.name){
      return false;
    }else{
      return true;
    }
    /* 
      return true  则本组件重新更新DOM 否则不更新；
    */
  }
  render(){
    return (
      <div>
        <h2>hello  珠峰  {this.props.name} {this.props.age}</h2>
      </div>
    )
  }
}
class App extends React.Component {
    constructor() {
        super();
        this.state = {
          qqq:"china",
          age:18,
          ht:"<h1>你好</h1>"
        }
    }
    render() {
        return <div className=''>
          <input 
            type="text" 
            onChange={(e)=>{this.setState({age:e.target.value})}}
            value={this.state.age}/>
          <input 
            type="text" 
            onChange={(e)=>{this.setState({qqq:e.target.value})}}
            value={this.state.qqq}/>
          <Child name={this.state.qqq} age={this.state.age}></Child>

          <div dangerouslySetInnerHTML={{__html:this.state.ht}}>
          </div>
        </div>;
    }
}
ReactDOM.render(<App/>,document.getElementById('root'))