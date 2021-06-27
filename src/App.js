import React,{useEffect,Fragment} from "react";
import Header from "./common/header";

//引入toast弹窗提示
import Toast,{ showToastEffect ,} from './common/Toast/index';

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
    <Fragment>
      <Header />
      <Toast />
     </Fragment>
  );
}

export default App;
