import React, { useState,useEffect } from "react";

import "./toast.scss";
import Loading from "./loading.gif";
import Success from "./success.png";
import Fail from "./fail.png";
let useStateSet={};

const showIcon=(icon)=>{
  if(icon === 'loading'){
    return (
      <div className="toast_img">
          <img src={Loading} alt="loading" />
      </div>
    )
  }else if(icon === 'success'){
    return (
      <div className="toast_img">
          <img src={Success} alt="success" />
      </div>
    )
  }else if(icon === 'fail'){
    return (
      <div className="toast_img">
          <img src={Fail} alt="fail" />
      </div>
    )
  }else{
    return <span></span>
  }
}

export const showToastEffect=(props=useStateSet)=>{
    const {setShow,setMessage,setIcon,setBgnone} = props;
    const defaultMessage={
        show:false,
        message:'加载中',
        icon:'',
        bgnone:false
      };
    const showToast = (showMessage=defaultMessage)=>{
        const {show,message,icon,bgnone}=showMessage;
        setShow(show);
        setMessage(message);
        setIcon(icon);
        setBgnone(bgnone);  
    }
    return {showToast}
}

const Toast = (props) => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const [icon, setIcon] = useState("");
  const [bgnone, setBgnone] = useState(false);
  useEffect(()=>{
    useStateSet = {setShow,setMessage,setIcon,setBgnone};
  },[show,message]);
  return show ? (
    <div className={bgnone ? "toast bgnone" : "toast"}>
      {showIcon(icon)}
      <div className="toast_title">{message}</div>
    </div>
  ) : (
    <div className="noneToast"></div>
  );
};



export default Toast;
