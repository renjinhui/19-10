import React from 'react';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          index:0, // 控制显示张数的索引
          str:'left 0.5s',
          length:props.data.length
        }
    }
    move(){
      let n = ++this.state.index;
      if(n == this.state.length+1){
        n = 0;
        this.setState({
          str:'none'
        });
        // 闪到第一张之后 紧着这 我们要让他从第一张移动到第二张；
        setTimeout(() => {
          this.setState({
            str:'left 0.5s',
            index:1
          })
        }, 0);
      }else{
        this.setState({
          str:'left 0.5s'
        })
      }
      this.setState({
        index:n
      })
    }
    autoMove(){
      this.timer = setInterval(()=>{
        this.move();
      },2000)
    }
    stop=()=>{
      clearInterval(this.timer)
      this.timer = null;
    }
    componentDidMount(){
      // 就是vue的 mounted钩子
      this.autoMove();
    }
    render() {
        let {index,str} = this.state;
        let {isStop} = this.props;
        let ary = this.props.data;// 数据从父组件获取
        ary.push(ary[0])
        if(isStop){
          // 若父组件传进来的值是true 也就是要停止动画
          this.stop();
        }else{
          // this.timer === null ? (this.autoMove()) : null;
          if(this.timer === null){
            this.autoMove()
          }
        }
        
        return <ul 
          className='contentBox' 
          style={{left:-index*400+'px',width:ary.length*400+'px',transition:str}}
          >
          {
            ary.map((item,index)=>{
              return <li key={index}>
                <img src={item} alt="" />
              </li>
            })
          }
        </ul>
    }
}

export default App