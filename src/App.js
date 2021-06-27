import React,{useEffect} from "react";
import Header from "./common/header";

//引入Provider连接器和store
import { Provider } from "react-redux";
import store from './store/index';

//引入toast弹窗提示
import Toast,{ showToastEffect } from './common/Toast/index';

const AppEffect=()=>{
  const {showToast} = showToastEffect();
  setTimeout(()=>{
    showToast({
      show:true,
      message:'加载中',
      icon:'loading',
      bgnone:true
    });
  },1000);
  setTimeout(()=>{
    showToast({
      show:false
    });
  },3500);

}

function App() {
  useEffect(AppEffect,[]);
  return (
    <Provider store = {store}>
      <Header />
      <Toast />
      </Provider>
  );
}

export default App;
