import React, { useState,useEffect } from "react";

import "./toast.scss";
import Loading from "./loading.gif";
let useStateSet={};

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
      {icon === "loading" ? (
        <div className="toast_img">
          <img src={Loading} alt="loading" />
        </div>
      ) : (
        <span></span>
      )}
      <div className="toast_title">{message}</div>
    </div>
  ) : (
    <div className="noneToast"></div>
  );
};



export default Toast;
