import React from 'react';
import {connect} from 'react-redux'
import { add,minus } from './store/actions';
class Button extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        return <div className=''>
          <button onClick={()=>this.props.dispatch(add(20))}>add</button>
          <button onClick={()=>this.props.dispatch(minus(10))}>minus</button>
        </div>;
    }
}
Button = connect((state)=>{
  return{

  }
},(dispatch)=>{
  return {
    dispatch
  }
})(Button)

export default Button