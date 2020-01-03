import React from 'react';
import ReactDOM from 'react-dom'

const connect = (Temp)=>{
  return class App extends React.Component{
    render(){
      console.log(this.props)
      return <Temp q={123} w={234} e={[1,2,3]} {...this.props}></Temp>
    }
  }
}

class Child extends React.Component{
  render(){
    console.log(this.props)
    return (
      <div>
        <h2>hello  珠峰  {this.props.name} {this.props.age}</h2>
      </div>
    )
  }
}
Child = connect(Child);
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
        </div>;
    }
}
ReactDOM.render(<App/>,document.getElementById('root'))