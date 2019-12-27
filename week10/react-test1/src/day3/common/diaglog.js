import React from 'react';
import '../less/dialog.less'
class Dialog extends React.Component {
    constructor() {
        super();
        this.state = {
          flag:false 
        }
    }
    render() {
        let {title,visible,children,onOk,onCancel,okText,cancelText,footer} = this.props; 
        let {flag} = this.state;
        let _this = this;
        function ok() {
          _this.setState({
            flag:true
          })
          setTimeout(() => {
            onOk();
            // _this.state.flag = false;
            _this.setState({
              flag:false
            })
          }, 500);
        }
        function cancel() {
          _this.setState({
            flag:true
          })
          setTimeout(() => {
            onCancel();
            _this.state.flag = false;
          }, 500);
        }

        return <div 
                  onClick={(e)=>{console.log(e.target);cancel()}} 
                  className={'mask'+(flag ? ' reverse' : '')} 
                  style={{display:visible ? 'block' : 'none'}}>
          <div className='contentBox'>
            <header>
              {title||"默认title"}
            </header>
            <main>
              {children}
            </main>
            {
              footer ? 
              footer:
              footer === null?
              '':
              <footer>
                <button onClick={()=>{cancel()}}>{cancelText||"取消"}</button>
                <button onClick={()=>{ok()}}>{okText || "确定"}</button>
              </footer>
            }
          </div>
        </div>
    }
}

export default Dialog