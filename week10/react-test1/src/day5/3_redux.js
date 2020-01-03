import React from 'react';
import ReactDOM from 'react-dom'
import {createStore,combineReducers} from 'redux' ;// redux是用来产生数据源的 及更改数据的方法
import {Provider,connect} from 'react-redux';// react-redux是把redux和react联系到一起
// 在 react中  reducer就是纯函数的简称
function countReducer(state={count:100},action){
  // 该函数 接收两个参数 一个state 一个action ；state是存放数据的 action是用来更改数据的依赖
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        count:state.count + action.qqq
      }
      break;
    case "MINUS":
      return {
        ...state,
        count:state.count - action.qqq
      }  
    default:
      return {
        ...state
      }
  }
}
function colorReducer(state={color:'blue'},action){
  switch (action.type) {
    case 'CHANGECOLOR':
      return {
        ...state,
        color:action.color
      }
      
    default:
      return {
        ...state
      }
      break;
  }
}

//combineReducers 把多个reducer 合并成一个；
let store = createStore(combineReducers({
  qqq:countReducer,
  www:colorReducer
}));
console.log(store.getState())




class Show extends React.Component{
  render(){
    return <div>
      <h1 style={{color:this.props.color}}>当前数字是：{this.props.count123}</h1>
    </div>
  }
}
// connect 有两层参数 第一层是两回调函数
//（第一个回调函数 返回的对象包含的是数据，第二个回调函数返回的对象包含的是方法）； 
// 第二层是组件
Show = connect((state)=>{
  // return state
  return {
    count123:state.qqq.count,
    color:state.www.color
  }
},(dispatch)=>{
  return{}
})(Show)

class Button extends React.Component{
  render(){
    console.log(this.props.dispatch)
    return <div>
      <button onClick={()=>this.props.dispatch({type:"ADD",qqq:10})}>+</button>
      <button onClick={()=>this.props.dispatch({type:"MINUS",qqq:5})}>-</button>
      <button onClick={this.props.change.bind(this,{type:"CHANGECOLOR",color:'red'})}>变色</button>
    </div>
  }
}
Button = connect((state)=>{
  return {}
},(dispatch)=>{
  return {
    dispatch,
    change(action){
      dispatch(action)
    }
  }
})(Button)

class App extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        return <div className=''>
          <Show></Show>
          <Button></Button>
        </div>;
    }
}
ReactDOM.render(<Provider store={store}>
  {/* Provider 是一个容器； 该容器 把store放到了 react的组件中*/}
  <App/>
</Provider>,document.getElementById('root'))