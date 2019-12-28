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
          isStop:false,
          index:0 // 控制显示张数的索引
        }
    }
    stop=()=>{
      this.setState({
        isStop:true
      })
    }
    left=()=>{
      // let n = this.state.index;
      // this.setState({
      //   index:--n
      // })  
      this.refs.contentBox.move(-1)
    }
    right=()=>{
      // let n = this.state.index;
      // this.setState({
      //   index:++n
      // })
      this.refs.contentBox.move();//直接调用子组件中的函数
      // console.log(this.refs.qqq.move())
    }
    render() {
        let {isStop,index} = this.state;
        let {children} = this.props;
        return <div className='sliderBox' 
          onMouseEnter={this.stop} 
          onMouseLeave={()=>{this.setState({isStop:false})}}
          >
            <Content 
              ref='contentBox'
              isStop={isStop}
              index = {index}
              onChangeIndex={(num)=>{this.setState({index:num})}}
              // data={['http://cms-bucket.ws.126.net/2019/1227/11e0a90dj00q35c5c0024c000ak0057c.jpg','http://cms-bucket.ws.126.net/2019/1227/175f48f5j00q35f94001rc000cl0069c.jpg','https://yt-adp.ws.126.net/channel12/590185_bkrw_20191227.jpg']}
              >
                {children}
              </Content>
            <Btn onLeft={this.left} onRight={this.right}/>
            <Dot index = {index} length={children.length} onChange={(num)=>{this.setState({index:num})}}/>
        </div>;
    }
}
export default App;
// ReactDom.render(<App></App>,document.getElementById('root'));