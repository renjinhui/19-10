import React from 'react';
import { addDepartment } from "../../api/home";
import { Form, Input, Button, Modal, Checkbox } from 'antd';
const { confirm } = Modal;

const formItemLayout = {
  labelCol: { span: 4 },// 文字框的宽度
  wrapperCol: { span: 8 },// 输入框的宽度
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
};
class DynamicRule extends React.Component {
  state = {
    checkNick: false,
    initName:"账单",
    initDesc:"长得得分赋给"
  };

  add = (option)=>{
    addDepartment(option).then(data=>{
        console.log(this)
        this.props.history.push('/home/org/department')
    })  
    // console.log(option)
  }
  check = (...arr) => {
    //   console.log(arr,this.props.form.getFieldsValue())
    this.props.form.validateFields(err => {
        // 校验数据是否合规
      if (!err) {
        let obj = this.props.form.getFieldsValue();// 用来获取表单数据
        // this.add(obj)
        confirm({
            title: '提示框',
            content: '是否确定创建？',
            onOk:()=> {
                this.add(obj)
            },
            onCancel() {
                console.log('Cancel');
            },
        });
        console.info('success');
      }
    });
  };

  handleChange = e => {
    this.setState(
      {
        checkNick: e.target.checked,
      },
      () => {
        this.props.form.validateFields(['nickname'], { force: true });
      },
    );
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form.Item {...formItemLayout} label="部门名称">
          {getFieldDecorator('name', {
            initialValue:this.state.initName,
            rules: [
              {
                required: true,
                message: '部门名称必填', // 规则验证不通过的时候的提示语
              },
            ],
          })(<Input placeholder="请输入部门名称" />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="部门描述">
          {getFieldDecorator('desc', {
            initialValue:this.state.initDesc,
            rules: [
              {
                required: this.state.checkNick,
                message: '部门描述必填',
              },
            ],
          })(<Input.TextArea placeholder="请输入部门描述" />)}
        </Form.Item>
        <Form.Item {...formTailLayout}>
          <Checkbox checked={this.state.checkNick} onChange={this.handleChange}>
                部门描述是否必填？
          </Checkbox>
        </Form.Item>
        <Form.Item {...formTailLayout}>
          <Button type="primary" onClick={this.check}>
            立即创建
          </Button>
          <Button onClick={this.check}>
            取消
          </Button>
        </Form.Item>
      </div>
    );
  }
}

const WrappedDynamicRule = Form.create({ name: 'addDepartment' })(DynamicRule);
export default WrappedDynamicRule