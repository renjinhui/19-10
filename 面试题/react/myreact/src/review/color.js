import React from 'react';
import { connect } from "react-redux";
class Color extends React.Component {
    constructor() {
        super();
        
    }
    change=(e)=>{
      this.props.dispatch({type:"CHANGECOLOR",color:e.target.value})
    }
    render() {
        return <div className=''>
          <h2 style={{color:this.props.color}}>我是color组件</h2>
          <input type="color" onChange={this.change}/>
        </div>;
    }
}
Color = connect((state)=>{
  return {
    color:state.color123.color
  }
},(dispatch)=>{
  return {
    dispatch
  }
})(Color)

export default Color