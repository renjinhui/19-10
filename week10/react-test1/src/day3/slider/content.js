import React from 'react';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          // index:0, // 控制显示张数的索引  需要把index进行状态提升
          str:'left 0.5s',
          length:props.children.length
        }
    }
    move(i){
      let n = this.props.index;
      if(i == -1){
        // 向左移动
        n--
      }else{
        n++
      }
      if(n == this.state.length+1){
        n = 0;
        this.setState({
          str:'none'
        });
        // 闪到第一张之后 紧着这 我们要让他从第一张移动到第二张；
        setTimeout(() => {
          this.setState({
            str:'left 0.5s',
            // index:1
          })
          this.props.onChangeIndex(1)
        }, 0);
      }else if(n < 0){
        n = this.state.length;
        this.setState({
          str:'none'
        });
        // 闪到第最后一张之后 紧着这 我们要让他从最后一张移动到倒数第二张；
        setTimeout(() => {
          this.setState({
            str:'left 0.5s',
            // index:1
          })
          this.props.onChangeIndex(this.state.length-1)
        }, 0);
      }else{
        this.setState({
          str:'left 0.5s'
        })
      }
      // this.setState({
      //   index:n
      // })
      this.props.onChangeIndex(n)
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
        let {str} = this.state;
        let {index,isStop} = this.props;
        let ary = this.props.children.map(item=>item);// 数据从父组件获取
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
                {item}
              </li>
            })
          }
        </ul>
    }
}

export default App