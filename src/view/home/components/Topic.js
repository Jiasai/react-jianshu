import React, { useState, useEffect } from "react";

//引入store
import store from "../../../store/index";

//useState方法
let useStateSet = {};

const thisState = (props = useStateSet) => {
  const { setTopicList } = props;
  //拿到store中 index模块的store数据
  const { topicList } = store.getState().home;
  //数据响应
  setTopicList(topicList);

  // 返回出去，别的函数要用
  return { topicList };
};

const Topic = (props) => {
  const [topicList, setTopicList] = useState([]);
  useEffect(() => {
    //把 useState的设置数据方法 存到这个变量
    useStateSet = { setTopicList };

    //修改数据
    thisState();

    //侦听store变化，设置修改数据
    store.subscribe(thisState);
  }, [topicList]);
  return (
    <div className="topic">
      {
      topicList.map((item) => {
        return (
          <div className="topic_item" key={item.id} >
            <div className="topic_item_img">
              <img
                src={item.imgUrl}
                alt={item.title}
              />
            </div>
            <p className="topic_item_title">{item.title}</p>
          </div>
        )
      })
      }

      <div className="topic_more">更多热门专题>></div>
    </div>
  );
};

export default Topic;
