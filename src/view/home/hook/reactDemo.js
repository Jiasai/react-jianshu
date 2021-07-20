import axios from "axios";
import React, { useState, useEffect, Fragment } from "react"; //引入react内置API方法
import { Link } from "react-router-dom";                     //react-router路由跳转
import Topic from "../components/Topic";                    //引入使用的组件
import "./hello.css";                                       //写样式

const Hello = (props) => {                                 // 定义 函数组件 
    const [username, setUsername] = useState('');          // 定义响应式变量
    const [isActive,] = useState(true);             
    const [isUser, setIsUser] = useState(true);

    const handleGetIsUser = async () => {                       //定义一个发送请求函数
        const res = await axios.get(`/api/user/${username}`);
        if (res?.errno === 0) {
            setIsUser(res.data.isUser)   //修改响应式变量的值
            setTimeout(() => { props.history.push(`/detail/${username}`) }, 2000) //路由跳转
        }
    }

    useEffect(() => { 
        //useEffect如果没有第二个参数依赖，
        //React会在每次渲染后调用useEffect函数 —— 包括第一次渲染的时候
        console.log(username, "username发生变化，useEffect重新执行");
    }, [username])

    return ( // return Dom结构
        <Fragment>                              {/*占位符,jsx中，注释要这么写*/}
            <div>Hello,world</div>
            <p>This is React！</p>
            <Link to={`/user/${username}`}>     {/*js变量和语法写在 {} 中 */}
                去主页链接
            </Link>                                                          {/*props 接收组件的属性传值*/}
            <h1 className={isActive ? "active" : ""}>{props.pageTitle}</h1>  {/*Dom中文本变量放在 {} 中 */}
                                                   {/*通过onChange修改input的value值,username是响应式变量*/}
            <input type="text"
                value={username}
                onChange={(e) => { setUsername(e.target.value) }}  
                style={{ backgroundColor: "#eee" }}
            />
            {/*style样式要写在 {} 中，写成对象形式 */}
            {
                isUser ? <span>用户名正确</span> : <span>用户名不正确，重新输入</span>
            }
            {/*通过三元运算符，确定返回Dom的节点 */}
            {/*on关键字绑定事件：onClick、onChange、onFocus、onBlur、onMouseEnter */}
            <button onClick={handleGetIsUser}>验证</button>
            <ul>                                {/*.map()方法实现循环输出，vue中使用v-for指令*/}
                {
                    props.ListData.map((item, index) => {
                        return (
                            <li key={index}>{item.title}</li>
                        )
                    })
                }
            </ul>
            <Topic pageTitle={props.pageTitle} />   {/*组件属性传值*/}
        </Fragment>
    )
}

/*在别的组件引用使用：
 <Hello pageTitle="这是Hello组件" ListData={[{title:'list数据1'},{title:'list数据2'}]} /> 
 */

export default Hello;