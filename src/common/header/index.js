import React, { useEffect, useState } from "react";
import { getSearchValueChangeAction,getSearchTransitionAction } from "../../store/actionCreators";
import { Search, Write } from "@icon-park/react";

//引入CSSTransition,单个组件出、入场
import { CSSTransition } from "react-transition-group";

//引入样式
import "./header.scss";
//引入样式css-in-js
// import HeaderWrap from './headerStyle.js';

//引入logo图片路径
import logoPic from "../../assets/images/logo.png";

//引入store
import store from "../../store/index";

//useState方法
let useStateSet = {};

const thisState = (props = useStateSet) => {
  const { setCurrentTitle, setMenu, setCurrentPage, setSearchValue,setSearchTransition } = props;
  //拿到store数据
  const { currentTitle, menu, currentPage, searchValue,searchTransition } = store.getState();
  setCurrentTitle(currentTitle);
  setMenu(menu);
  setCurrentPage(currentPage);
  setSearchValue(searchValue);
  setSearchTransition(searchTransition);
};

//修改 搜索框 input的value值
const ChangSearchValue = (e) => {
  const action = getSearchValueChangeAction(e.target.value);
  store.dispatch(action);
};
//serach框动画控制
const transitionToggle = (searchValue) => {
  if (searchValue === "") {
    const action = getSearchTransitionAction();
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
