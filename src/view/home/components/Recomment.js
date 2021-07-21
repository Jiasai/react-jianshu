import React from "react";
import { useListState } from "../hook/homeState";

const Recomment = (props) =>{
    const {recommentList} = useListState();
    return(
        <div className="recomment">
            {
                recommentList.map(item => {
                   return( <div className="recomment_item" key={item.id}><img className="recomment_item_img" src={item.imgUrl} alt="" /></div>)
                })
            }
         
        </div>
    )
}

export default Recomment;