import React from 'react';
class App extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        let {onLeft,onRight} = this.props;
        return <div className="btnBox">
          <div className="leftBtn" onClick={onLeft}> &lt; </div>
          <div className="rightBtn" onClick={onRight}> &gt; </div>
        </div>
    }
}

export default App