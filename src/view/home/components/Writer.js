import React,{useState} from "react";
//引入样式css-in-js
import {SearchinfoSwitch,} from "../../../common/header/styledComponents";

import {useListState} from "../hook/homeState"

//换一换
const handleHuanyihuan = (rotate,setRotate) => {
    //icon小图标旋转
    if(rotate){
      setRotate(false)
    }else{
      setRotate(true)
    }
/*     let { page,totalPage } = thisState(); //获取store数据
    //改变page
    if(page < totalPage-1){
      page++;
    }else{
      page = 0;
    }
    //改变store中的page
    const action = actionCreators.getSearchPageAction(page);
    store.dispatch(action); */
  
  };

const Writer = () =>{
    const [rotate,setRotate] = useState(false);
    const {writerList} = useListState();
    return(
        <div className="writer">
            <div className="writer_top">
                <div className="writer_top_title">推荐作者</div>
                <SearchinfoSwitch onClick={()=>handleHuanyihuan(rotate,setRotate)}>
                  <span className={rotate?"iconfont icon-shuaxin1 routate":"iconfont icon-shuaxin1"}></span>
                  换一换
                </SearchinfoSwitch>
            </div>
            <ul className="wirter_list">
            {
                writerList.map(item=>{
                    return(
                        <li className="writer_item" key={item.id}>
                    <div className="writer_item_pic"><a href="/"><img src={item.imgUrl} alt="" /></a></div>
                    <div className="writer_item_text">
                        <div className="writer_item_text_name"><a href="/">{item.name}</a></div>
                        <div className="writer_item_text_Jieshao">{item.introduce}</div>
                    </div>
                </li>
                    )
                })
            }
                
            </ul>
        </div>
    )
}

export default Writer;