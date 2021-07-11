import React, { useEffect} from "react";

const Detail = (props) =>{
    useEffect(()=>{
        //url 的id
        const {id} = props.match.params;
        console.log(id)
    },[props]);
    return(
        <div>详情页</div>
    )
}

export default Detail;