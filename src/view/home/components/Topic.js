import React from "react";
import { useListState } from "../hook/homeState";

const Topic = () => {
  const {topicList} = useListState();
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
