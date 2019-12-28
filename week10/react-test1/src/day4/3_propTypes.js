import React from 'react';
import ReactDOM from 'react-dom';
import qqq from 'prop-types'

class Child extends React.Component{
  // propTypes 这个词 是react规定的词汇; 、
  // 一般与propTypes结合使用， 用来控制 参数类型的
  static propTypes = {
    title:qqq.string.isRequired, // 说明类型需要是一个字符串
    data:qqq.object
  }
  //defaultProps 用来给参数默认值的；
  static defaultProps = {
    title:"这是个默认的title"
  }
  render(){
    return(
      <div>
        <header>
          {this.props.title}
        </header>
        <main>
          {this.props.children}
        </main>
        <ul>
          {
            Object.values(this.props.data).map(item=><li key={item}>{item}</li>)
          }
          
        </ul>
      </div>
    )
  }
}
class App extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        return <div className=''>
          <Child  data={{name:'珠峰',age:18}}>
            <h2>这是插槽内容部分</h2>
            <h2>这是插槽内容部分</h2>
            <h2>这是插槽内容部分</h2>
          </Child>
        </div>;
    }
}

// export default App
ReactDOM.render(<App/>,document.getElementById('root'))