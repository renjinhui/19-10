import React from 'react';
import logo from './logo.svg';
import { Button } from "antd";
import Comp123 from './Comp'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
function App2(){
  // {} 中只能书写表达式 不能编写语句
  let str = 'hello world';
  let obj = {a:123};
  let ary = [1,2,3,4];
  let eles = [<i key='1'>你好</i>,<i key='2'>你好</i>,<i key='3'>你好</i>,<i key='4'>你好</i>];
  function list(arr){
    var q = [];
    for(var i = 0; i < arr.length; i++){
      q.push(<li key={i}>{arr[i]}</li>)
    }
    return q;
  }
  let classStr = 'mybox';
  let sty = {
    color:'red',
    fontSize:'20px'
  }
  return(
    <div className='box' className={'box '+classStr} style={sty}>
      <h1>{str}</h1>
      <h2>{JSON.stringify(obj)}</h2>
      <h2>{ary}</h2>
      <ul>
        {/* react中的循环写法 */}
        {
          ary.map(item=><li key={item}>{item}</li>)
        }
      </ul>
      {
        eles
      }
      {
        list(ary)
      }
      <h2>自己写的文本</h2>
      {
        ary.length > 5 ? 
        <strong>你好</strong>:
        ary.length > 7 ?
        <i>qwerty</i>:
        <h4>6666</h4>
      }

      <Button onClick={(e)=>{console.log(e.target)}}>你好世界</Button>
    </div>
  )
}
function Home(){
  return <div>
    <Comp123></Comp123>
  </div>
}

export default Home
