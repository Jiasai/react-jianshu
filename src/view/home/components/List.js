import React, { useEffect, useState } from "react";

import { useListState } from "../hook/homeState";

const List = (props) =>{
    //从1个 Hooks中拿到数据
    const {articleList,setArticleList} = useListState();
    const [lock,setLock] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            if(!lock) return;           
            setLock(false); //锁定执行,不能放在下面,断开触发依赖
            setArticleList([{ //修改数据
                    id:6,
                    title:"年龄越大，越不在乎面子了",
                    abstract:"今天一个二十来岁的小姑娘到我店里买棒冰。她第一次拿了一根5元的，嫌贵，然后去冰箱里重新挑了一根，结果这根要6元。小姑娘显得有点窘迫，犹犹豫豫准备..",
                    imgUrl:""
            },...articleList]);     
            //因为依赖项 articleList变化，会一直触发useEffect执行，所以 用 lock 上锁，避免一直无意义触发
        },2500) 
    },[articleList,lock,setArticleList]) 

    return(
        <div className="articleList" >
            {
                articleList.map( item=>{
                    return(
                        <div className="articleList_item" key={item.id}>
                        <div className="articleList_item_text">
                            <h4><a href="/">{item.title}</a></h4>
                            <div className="articleList_item_text_abstract">                     
                            {item.abstract}
                            </div>
                        </div>
                        {
                            item.imgUrl?(
                                <div className="articleList_item_pic">
                                <a href="/">
                                    <img src={item.imgUrl} alt="" />
                                </a>
                            </div>
                            ):<div></div>
                        }                     
                    </div>
                    )
                } )
            }
        </div>
        
    )
}

export default List;