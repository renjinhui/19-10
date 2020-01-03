import React from 'react';
import ReactDOM from 'react-dom'
import {Provider,connect} from 'react-redux'
import store from './store/index'

import Button from './button'
class App extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        return <div className=''>
            <h1>数字是{this.props.count}</h1>
            <Button/>
        </div>;
    }
}
App = connect((state)=>{
  return{
    count:state.countReducer.count
  }
},(dispatch)=>{
  return {}
})(App)

ReactDOM.render(<Provider store={store}>
  <App/>
</Provider>,document.getElementById('root'))