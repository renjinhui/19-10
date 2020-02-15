import React from 'react';
import { getDepartList } from '../../api/home'
import { Table, Divider, Tag, Button } from 'antd';
class List extends React.Component {
    constructor() {
        super();
        
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
                  <Button type="primary">编辑</Button>
                  <Divider type="vertical" />
                  <Button type="danger">删除</Button>
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