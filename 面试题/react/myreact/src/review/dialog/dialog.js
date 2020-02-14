import React from 'react';
import './1.css'
class Dialog extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        let { isShow,onHide,children } = this.props; 
        console.log(children)
        let content = <div className='dialogBox'>
          <div className="mask" onClick={onHide.bind(this,false)}></div>
          <div className="content">
            {children}
          </div>
        </div>
        return isShow ? content : null;
    }
}

export default Dialog