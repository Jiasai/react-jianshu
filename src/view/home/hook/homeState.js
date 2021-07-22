import { useState, useEffect } from "react";
import { get } from "../../../utils/request.js";

//假定发送http请求，得到listData、recommentList 、topic数据
const getListData = async (setArticleList) => {
  const result = await get("/api/home.json");
  if (result?.errno === 0) {
    setArticleList(result.data?.articleList);
  }
};
const getRecommentData = async (setRecommentList) => {
  const result = await get("/api/home.json");
  if (result?.errno === 0) {
    setRecommentList(result.data?.recommentList);
  }
};
const getTopicData = async (setTopicList) => {
  const result = await get("/api/home.json");
  if (result?.errno === 0) {
    setTopicList(result.data?.topicList);
  }
};
const getWriterData = async (setWriterList) => {
  const result = await get("/api/home.json");
  if (result?.errno === 0) {
    setWriterList(result.data?.writerList);
  }
};

//文章 list 数据
const useListState = () => {
  //这里面不可以直接定义变量，必须要写函数 才行
  const [articleList, setArticleList] = useState([]);
  const [recommentList, setRecommentList] = useState([]);
  const [topicList, setTopicList] = useState([]);
  const [writerList, setWriterList] = useState([]);

  useEffect(() => {
    //修改数据
    getListData(setArticleList);
    getRecommentData(setRecommentList);
    getTopicData(setTopicList);
    getWriterData(setWriterList);
  }, [])

  return {
    articleList,
    setArticleList,
    recommentList,
    setRecommentList,
    topicList,
    setTopicList,
    writerList,
    setWriterList,
  }
}

export { useListState };
