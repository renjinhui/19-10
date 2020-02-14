import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider} from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import './index.css';

import App from './view/App';
import * as serviceWorker from './serviceWorker';

import { Provider } from "react-redux";
// import store from './review/store'
import store from './store'

moment.locale('zh-cn');

console.log(store.getState());
ReactDOM.render(<Provider store={store}>
  <ConfigProvider locale={zhCN}><App/></ConfigProvider>
</Provider>, document.getElementById('root'),function(){
  // DOM 渲染完成之后触发；
  console.log(document.getElementsByClassName('App'))
  
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
