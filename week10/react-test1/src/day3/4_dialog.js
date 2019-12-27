import React from 'react';
import ReactDOM from 'react-dom';
import Model from './common/diaglog'
import './less/dialog.less'
class Dialog extends React.Component{
  constructor(){
    super();
    this.state = {
      flag:false
    }
  }
  render(){
    let {title,visible,onOk,onCancel,children} = this.props;
    // 从props中 把 title visible onOk  onCancel 获取到
    let {flag} = this.state;
    let _this = this;
    function cancel(){
      _this.setState({
        flag:true
      })
      setTimeout(() => {
        onCancel();
        _this.setState({
          flag:false
        })
      }, 500);
      
    }
    function ok(){
      _this.setState({
        flag:true
      })
      setTimeout(() => {
        onOk();
        _this.setState({
          flag:false
        })
      }, 500);
    }
    return (
      <div className={'mask'+(flag ? ' reverse' : '')} style={{display:visible ? 'block' : 'none'}}>
        <div className='contentBox'>
          <header>
            {title||"默认title"}
          </header>
          <main>
            {children}
          </main>
          <footer>
            <button onClick={()=>{cancel()}}>取消</button>
            <button onClick={()=>{ok()}}>确定</button>
          </footer>
        </div>
      </div>
    )
  }
}

class App extends React.Component {
    constructor() {
        super();
        this.state = {
          isShow:true
        }
    }
    ok=()=>{
      console.log('点击了确定按钮')
      this.setState({
        isShow:false
      })
    }
    cancel=()=>{
      console.log('点击了取消按钮')
      this.setState({
        isShow:false
      })
    }
    render() {
        let {isShow} = this.state;
        return <div className=''>
          <button onClick={()=>{this.setState({isShow:true})}}>显示dialog</button>
          <Model
            title='这是标题'
            visible={isShow}
            onOk={this.ok}
            onCancel={this.cancel}
            okText="你好"
            footer={
              <h1>这是自己的footer</h1>
            }
          >
            <h2>这是内容部分</h2>
            <h2>这是内容部分</h2>
            <h2>这是内容部分</h2>
          </Model>
        </div>;
    }
}

ReactDOM.render(<App/>,document.getElementById('root'))