import React from 'react';
import { getDepartList,delDepartment } from '../../api/home'
import { Table, Divider, Modal, Button } from 'antd';
const { confirm } = Modal;
class List extends React.Component {
    constructor() {
        super();
        
    }
    emit=(record)=>{
      this.props.history.push('/home/org/addDepartment?id='+record.id)
      console.log(this.props.history)
    }
    del=(record)=>{
      confirm({
        title: '警告！',
        content: '是否确定删除？',
        onOk:()=> {
          delDepartment({departmentId:record.id}).then(data=>{
            getDepartList().then(data=>{
                this.setState({
                    data:data.data
                })
            })
          })
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    }
    state = {
        columns : [
            {
              title: '编号',
              dataIndex: 'id',
            //   key: 'id',
              render: (...arr)=>{
                  console.log(arr)
                  return <a>{arr[2]+1}</a>
                //   return <Tag color='geekblue' key={arr[0]}>
                //   {arr[2]+1}
                // </Tag>
              },
            },
            {
              title: '部门名称',
              dataIndex: 'name',
            //   key: 'name',
            },
            {
              title: '描述',
              dataIndex: 'desc',
            //   key: 'desc',
            },
            {
              title: '操作',
              key: 'action',
              render: (text, record) => (
                <span>
                  <Button type="primary" onClick={this.emit.bind(this,record)}>编辑</Button>
                  <Divider type="vertical" />
                  <Button type="danger" onClick={this.del.bind(this,record)}>删除</Button>
                </span>
              ),
            },
          ],
        data: [] ,
        page:{
            position:'bottom',
            total:50,
            pageSize:5
        }
    }
    componentDidMount(){
        getDepartList().then(data=>{
            // let ary = data.data.map(item=>{
            //     item.key=item.id
            //     return item
            // })
            this.setState({
                data:data.data
            })
        })
    }
    render() {
        let {columns,data} = this.state;
        return <div className=''>
          <Table columns={columns} dataSource={data} rowKey="id" pagination={this.state.page} />
        </div>;
    }
}

export default List