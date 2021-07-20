
import axios from "axios";
import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import Topic from "../components/Topic";
import "./hello.css";

const Hello = (props) => {
    const [username, setUsername] = useState('');
    const [isActive,] = useState(true);
    const [isUser, setIsUser] = useState(true);

    const getIsUser = async () => {
        const res = await axios.get(`/api/user/${username}`);
        if (res?.errno === 0) {
            setIsUser(res.data.isUser)
            setTimeout(() => { props.history.push(`/api/user/${username}`) }, 2000)
        }
    }

    useEffect(() => { 
        //useEffect如果没有第二个参数依赖，
        //React会在每次渲染后调用useEffect函数 —— 包括第一次渲染的时候
        console.log(username, "username发生变化，useEffect重新执行");
    }, [username])

    return (
        <Fragment>
            <div>Hello,world</div>
            <p>This is React！</p>
            <Link to={`/user/${username}`}>
                去主页链接
            </Link>
            <h1 className={isActive ? "active" : ""}>{props.pageTitle}</h1>
            <input type="text"
                value={username}
                onChange={(e) => { setUsername(e.target.value) }}
                style={{ backgroundColor: "#eee" }}
            />
            {
                isUser ? <span>用户名正确</span> : <span>用户名不正确，重新输入</span>
            }
            <button onClick={getIsUser}>验证</button>
            <ul>
                {
                    props.ListData.map((item, index) => {
                        return (
                            <li key={index}>{item.title}</li>
                        )
                    })
                }
            </ul>
            <Topic pageTitle={props.pageTitle} />
        </Fragment>
    )
}

/*在别的组件引用使用：
 <Hello pageTitle="这是Hello组件" ListData={[{title:'list数据1'},{title:'list数据2'}]} /> 
 */

export default Hello;