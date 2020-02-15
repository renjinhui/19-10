import React from 'react'
import { Route,Redirect } from 'react-router-dom'
function Protect({component:Com,type,...others}){
  let permission = localStorage.getItem('power')||'';
  permission = permission.split('|');
  return <Route {...others} render={(props)=>{
    if(permission.some(item=>item==type)){
        return <Com {...props}/>
    }else{
        return <Redirect to='/404'></Redirect>
    }
  }}></Route>
}
export default Protect