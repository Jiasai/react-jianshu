import React, { useEffect, useState } from "react";
import { actionCreators } from "./store";
import { Search, Write } from "@icon-park/react";

//引入CSSTransition,单个组件出、入场
import { CSSTransition } from "react-transition-group";

//引入样式
import "./header.scss";
//引入样式css-in-js
import {Searchinfo,SearchinfoTitle, SearchinfoSwitch,SearchinfoItem} from './styledComponents.js';

//引入logo图片路径
import logoPic from "../../assets/images/logo.png";

//引入store
import store from "../../store/index";

//useState方法
let useStateSet = {};

const thisState = (props = useStateSet) => {
  const { setCurrentTitle, setMenu, setCurrentPage, setSearchValue,setSearchTransition } = props;
  //拿到header的store数据
  const { currentTitle, menu, currentPage, searchValue,searchTransition } = store.getState().header;
  setCurrentTitle(currentTitle);
  setMenu(menu);
  setCurrentPage(currentPage);
  setSearchValue(searchValue);
  setSearchTransition(searchTransition);
};

//修改 搜索框 input的value值
const ChangSearchValue = (e) => {
  const action = actionCreators.getSearchValueChangeAction(e.target.value);
  store.dispatch(action);
};
//serach框动画控制
const transitionToggle = (searchValue) => {
  if (searchValue === "") {
    const action = actionCreators.getSearchTransitionAction();
    store.dispatch(action)
  }
}

const Header = () => {
  //用useState定义
  const [currentTitle, setCurrentTitle] = useState("");
  const [menu, setMenu] = useState([]);
  const [currentPage, setCurrentPage] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [searchTransition, setSearchTransition] = useState(false);

  useEffect(() => {
    document.title = currentTitle;
    //把 useState的设置数据方法 存到这个变量
    useStateSet = { setCurrentTitle, setMenu, setCurrentPage, setSearchValue,setSearchTransition };

    //修改数据
    thisState();

    //侦听store变化，设置修改数据
    store.subscribe(thisState);

  }, [currentTitle]);

  return (
    <div className="header">
      <div className="header_mainwidth">
        <div className="header_left">
          <div className="header_logo">
            <a href="/" className="header_Link">
              <img src={logoPic} alt="logo" />
            </a>
          </div>
          <div className="header_menu">
            {menu.map((item, index) => {
              return (
                <div
                  className={
                    currentPage !== item.title
                      ? "header_menu_item"
                      : "header_menu_item active"
                  }
                  key={item.title}
                >
                  <a href={item.path}>{item.title}</a>
                </div>
              );
            })}
          </div>
          <div className="header_search">
            <CSSTransition
              in={searchTransition}
              timeout={280}
              classNames="fade"
            >
              <input
                type="text"
                placeholder={searchValue ? searchValue : "搜索内容"}
                value={searchValue}
                onChange={ChangSearchValue}
                onFocus={() =>transitionToggle(searchValue)}
                onBlur={() =>transitionToggle(searchValue)}
              />
            </CSSTransition>
            <CSSTransition
              in={searchTransition}
              timeout={280}
              classNames="bgcolor"
            >
              <Search
                theme="outline"
                size="17"
                fill={searchTransition ? "#fff" : "#999"}
              />
            </CSSTransition>
            <Searchinfo className={searchTransition?'':'searchinfo_none'}>
              <SearchinfoTitle>
                <div className='search_info_title'>热门搜索</div>
                <SearchinfoSwitch><span className='iconfont icon-shuaxin1'></span>换一换</SearchinfoSwitch>
                </SearchinfoTitle>         
                <div style={{"overflow":"hidden"}}>
                  <SearchinfoItem>教育</SearchinfoItem>
                  <SearchinfoItem>简书</SearchinfoItem>
                  <SearchinfoItem>生活</SearchinfoItem>
                  <SearchinfoItem>投稿</SearchinfoItem>
                  <SearchinfoItem>历史</SearchinfoItem>
                  <SearchinfoItem>人文</SearchinfoItem>
                  <SearchinfoItem>考研</SearchinfoItem>
                  <SearchinfoItem>ReactJs</SearchinfoItem>

                </div>   
            </Searchinfo>
          </div>
        </div>
        <div className="header_menu_right">
          <div className="header_menu_right_set">
            <a href="/">
              <span className="iconfont icon-aa"></span>
            </a>
          </div>
          <div className="header_menu_right_login">
            <a href="/">登录</a>
          </div>
          <div className="header_menu_right_register">
            <a href="/">注册</a>
          </div>
          <div className="header_menu_right_writeArticle">
            <a href="/">
              <Write theme="outline" size="18" fill="#fff" strokeWidth={4} />
              <span>写文章</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
