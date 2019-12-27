import React from 'react';
import ReactDom from 'react-dom'
import Content from './content'
import Btn from './btn'
import Dot from './dot'
import './slider.less'
class App extends React.Component {
    constructor() {
        super();
        this.state = {
          isStop:false
        }
    }
    stop=()=>{
      this.setState({
        isStop:true
      })
    }
    render() {
        let {isStop} = this.state;
        return <div className='sliderBox' 
          onMouseEnter={this.stop} 
          onMouseLeave={()=>{this.setState({isStop:false})}}
          >
            <Content 
              isStop={isStop}
              data={['http://cms-bucket.ws.126.net/2019/1227/11e0a90dj00q35c5c0024c000ak0057c.jpg','http://cms-bucket.ws.126.net/2019/1227/175f48f5j00q35f94001rc000cl0069c.jpg','https://yt-adp.ws.126.net/channel12/590185_bkrw_20191227.jpg']}/>
            <Btn/>
            <Dot/>
        </div>;
    }
}

ReactDom.render(<App></App>,document.getElementById('root'));