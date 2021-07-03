import React,{useEffect,Fragment} from "react";
import Header from "./common/header";

//引入toast弹窗提示
import Toast,{ showToastEffect ,} from './common/Toast/index';

const AppEffect=()=>{
  //toast弹窗组件提示应用示例：
  const {showToast} = showToastEffect();
  setTimeout(()=>{
    showToast({
      show:true,
      message:'加载中',
      icon:'loading'

    });
  },100);
   setTimeout(()=>{
    showToast({
      show:false
    });
  },2000); 
  setTimeout(()=>{
    showToast({
      show:true,
      message:'加载组件失败',
      icon:'fail',
      bgnone:true
    });
  },2000);
  setTimeout(()=>{
    showToast({
      show:true,
      message:'启动成功',
      icon:'success'
    });
  },3500);
  setTimeout(()=>{
    showToast({
      show:false
    });
  },5000); 
  setTimeout(()=>{
    showToast({
      show:true,
      message:'欢迎来到简书！',
      icon:'success',
      bgnone:true
    });
  },5000);
  setTimeout(()=>{
    showToast({
      show:false
    });
  },7000);


}

function App() {
  useEffect(AppEffect,[]);
  return (
    <Fragment>
      <Header />
      <Toast />
     </Fragment>
  );
}

export default App;
