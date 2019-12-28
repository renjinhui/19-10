import React from 'react';
import ReactDom from 'react-dom'

import Slider from '../day3/slider'
class App extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        return <div className=''>
          <Slider>
            <h1>1</h1>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </Slider>
        </div>;
    }
}

ReactDom.render(<App></App>,document.getElementById('root'));