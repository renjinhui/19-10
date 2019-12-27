import React from 'react';
class App extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        return <div className="btnBox">
          <div className="leftBtn"> &lt; </div>
          <div className="rightBtn"> &gt; </div>
        </div>
    }
}

export default App