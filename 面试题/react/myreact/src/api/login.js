import http from './http'
import { message } from 'antd';
export function loginFn(data){
  return http.post('/user/login',data).then(data=>{
    if(data.code!=0){
      message.error('用户名密码错误',1);
    }
    return data;
  })
}
export function logout(){
  return http.get('/user/signout').then(data=>{
    if(data.code==0){
      localStorage.removeItem('power')
    }
    return data;
  })
}