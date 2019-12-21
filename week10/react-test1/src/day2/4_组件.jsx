import React from 'react'
import ReactDOM from 'react-dom'

function Child(props) {
  console.log(props)
  let {className,qqq,children} = props;
  return(
    <div className={className||''}>
      <h2>这是一个子组件</h2>
      <h3>{qqq.a}</h3>
      {
        children
      }
    </div>
  )
}

// 在组件的行内编写的属性  组件可以通过形参接收
// react组件不存在 slot  只有 children
ReactDOM.render(<Child className='box' qqq={{a:123,b:234}}>
  <div>
    <strong>您好 珠峰</strong>
  </div>
  
  <div>
    <strong>您好 配许</strong>
  </div>
</Child>,document.getElementById('root'))