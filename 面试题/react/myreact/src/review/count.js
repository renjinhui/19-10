import React from 'react';
import { connect } from "react-redux";
class Count extends React.Component {
    constructor() {
        super();
        
    }
    add=()=>{
      this.props.dispatch({type:"ADD",num:10})
    }
    minus=()=>{
      this.props.dispatch({type:"MINUS",num:5})
    }
    render() {
        return <div className=''>
          <h1 style={{color:this.props.color}}>
          当前数字是{this.props.countqqq}</h1>
          <button onClick={this.add}>+</button>
          <button onClick={this.minus}>-</button>
        </div>;
    }
}
Count = connect((state)=>{
  return {
    countqqq:state.count123.count,
    color:state.color123.color
  }
},(dispatch)=>{
  return {
    dispatch:dispatch
  }
})(Count)

export default Count