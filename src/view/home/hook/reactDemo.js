
import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import "./hello.css";


const Hello = (props) =>{
    const [username,setUsername] = useState('');
    const [isActive,] = useState(true);
    const [isUser,setIsUser] = useState(true);
    useEffect(()=>{
        console.log(username) ;

    },[username])
    return (
        <Fragment>
            <div>Hello,world</div>
            <p>This is React！</p>
            <Link to = {`/user/${username}`}>
                去主页链接
            </Link>
            <h1 className={isActive?"active":""}>{props.pageTitle}</h1>
            <input type="text" 
            value = {username} 
            onChange={ (e)=>{setUsername(e.target.value)} } 
            style={ {backgroundColor:"#eee"} } 
            />
            {
                isUser?<span>用户名正确</span>:<span>用户名不正确，重新输入</span>
            }



        </Fragment>
    )
}

export default Hello ;