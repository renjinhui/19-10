import React from 'react';
import { NavLink } from "react-router-dom";
import { logout } from "../../api/login";
class MyHeader extends React.Component {
    constructor() {
        super();
        
    }
    logout=()=>{
      logout().then(data=>{
        this.props.history.push('/login')
      })
    }
    render() {
      // console.log(this.props)
        return <div className='header_box'>
          <h1>CRM管理系统</h1>
          <div className="tab_box">
            <NavLink to='/home/org'>组织结构</NavLink>
            <NavLink to='/home/crm'>客户管理</NavLink>
          </div>
          <div className="logout_box">
            您好<span></span>
            <a onClick={this.logout}>安全退出</a>
          </div>
        </div>;
    }
}

export default MyHeader