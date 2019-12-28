import React from 'react';
class App extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        let {index,length,onChange} = this.props;
        // console.log(index)
        // index == length ? index = 0 : null;
        if(index==length){
            index = 0
        }
        function fn(){
            let ary = [];
            for(let i = 0 ; i < length; i++){
                ary.push(<li key={i} className={index==i?'active':''} onClick={()=>{onChange(i)}}></li>)
            }
            return ary;
        }
        return <ul className="dotBox">
          {fn()}
        </ul>
    }
}

export default App