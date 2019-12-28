import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Input,List,Modal } from 'antd'
let {confirm} = Modal;

class Input2 extends React.Component {
    render() {
        let { placeholder, value, onChange } = this.props;
        return <div>
            <input type="text" value={value} onChange={onChange} placeholder={placeholder} />
        </div>
    }
}

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            val: '',
            data:[]
        }
    }
    change = (e) => {
        this.setState({
            val: e.target.value
        })
    }
    submit=()=>{
      this.state.data.unshift(this.state.val);
      this.state.val='';
      this.setState({})
    }
    del=(index)=>{
      this.state.data.splice(index,1)
      this.setState({})
    }
    confirm=(index)=>{
      confirm({
        title: 'Are you sure delete this task?',
        content: 'Some descriptions',
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        onOk:()=>{
          this.del(index)
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    }
    render() {
        let { val,data } = this.state;
        return (<div className='' >
            <Input 
                style={{width:'300px'}} 
                placeholder='目标' 
                value={val} 
                onChange={this.change} />
            <Button onClick={this.submit}>提交</Button>
            {/* <Input2 placeholder='目标' value={val} onChange={this.change}/> */}
            <List
                size="small"
                style={{width:'400px'}} 
                // header={<div>Header</div>}
                // footer={<div>Footer</div>}
                bordered
                dataSource={data}
                renderItem={(item,index) => <List.Item>{
                    <div>
                    <span>{item}</span>
                    <Button type='danger' onClick={this.del.bind(this,index)}>删除</Button>
                    <Button  onClick={()=>{this.confirm(index)}} type="dashed">删除</Button>
                    </div>    
                }</List.Item>}
            />
        </div>)
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
