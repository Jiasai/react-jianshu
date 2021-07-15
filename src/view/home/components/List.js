import React from "react";

import { useListState } from "../hook/homeState";

const List = () =>{
    //从1个 Hooks中拿到数据
    const ListData = useListState();
    return(
        <div className="articleList">
            {
                ListData.map( item=>{
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