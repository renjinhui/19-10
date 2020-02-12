import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider} from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import './index.css';

import App from './review/App';
import * as serviceWorker from './serviceWorker';

moment.locale('zh-cn');


ReactDOM.render(<ConfigProvider locale={zhCN}><App/></ConfigProvider>, document.getElementById('root'),function(){
  // DOM 渲染完成之后触发；
  console.log(document.getElementsByClassName('App'))
  
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
