import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './1'
import Clock from './3_计时器'

ReactDOM.render(<div>
  <Hello/>
  <Clock/>
</div>,document.getElementById('root'),function(){
  //在DOM挂在完成之后触发
})