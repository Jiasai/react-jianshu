import React, { useEffect, useState } from "react";
import { actionCreators } from "./store";
import { Search, Write } from "@icon-park/react";

//引入CSSTransition,单个组件出、入场
import { CSSTransition } from "react-transition-group";

//引入样式
import "./header.scss";
//引入样式css-in-js
import {
  Searchinfo,
  SearchinfoTitle,
  SearchinfoSwitch,
  SearchinfoItem,
} from "./styledComponents.js";

//引入logo图片路径
import logoPic from "../../assets/images/logo.png";

//引入store
import store from "../../store/index";

//useState方法
let useStateSet = {};
let inputSearch = "";

const thisState = (props = useStateSet) => {
  const {
    setCurrentTitle,
    setMenu,
    setCurrentPage,
    setSearchValue,
    setSearchTransition,
    setSerachList,
  } = props;
  //拿到store中 header模块的store数据
  const {
    currentTitle,
    menu,
    currentPage,
    searchValue,
    searchTransition,
    serachList,
  } = store.getState().header;
  setCurrentTitle(currentTitle);
  setMenu(menu);
  setCurrentPage(currentPage);
  setSearchValue(searchValue);
  setSearchTransition(searchTransition);
  setSerachList(serachList);
};

//修改 搜索框 input的value值
const ChangSearchValue = (e) => {
  const action = actionCreators.getSearchValueChangeAction(e.target.value);
  store.dispatch(action);
};

//serach框动画控制
const transitionToggle = (value, open = true) => {
  if (open) {
    const action = actionCreators.getSearchTransitionAction(value);
    store.dispatch(action);
  }
};
//关闭动画，失去光标
const closeTransition = () => {
  const action = actionCreators.getSearchTransitionAction(false);
  store.dispatch(action);
  inputSearch.blur(); //input失去焦点
};
//点击搜索提示，改变inputvalue
const infoItemSearchValue = (e) => {
  const action = actionCreators.getSearchValueChangeAction(
    e.target.dataset.title
  );
  store.dispatch(action);
  closeTransition();
};
//换一换
const handleHuanyihuan = () => {
  console.log("我被点击了");
  setTimeout(() => {
    inputSearch.focus();
  }, 30); //input获取焦点
};

//search搜索提示获取数据
const getSearchList = () => {
  const action = actionCreators.getSearchListAction();
  store.dispatch(action);
};

const Header = () => {
  //用useState定义
  const [currentTitle, setCurrentTitle] = useState("");
  const [menu, setMenu] = useState([]);
  const [currentPage, setCurrentPage] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [searchTransition, setSearchTransition] = useState(false);
  const [serachList, setSerachList] = useState([]);
  const [lock, setLock] = useState(true); //关闭动画执行的锁
  useEffect(() => {
    document.title = currentTitle;
    //把 useState的设置数据方法 存到这个变量
    useStateSet = {
      setCurrentTitle,
      setMenu,
      setCurrentPage,
      setSearchValue,
      setSearchTransition,
      setSerachList,
    };

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
                onFocus={() => {
                  transitionToggle(true);
                  getSearchList();
                }}
                onBlur={() => transitionToggle(false, lock)}
                ref={(input) => {
                  inputSearch = input;
                }}
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
                onMouseEnter={() => setLock(false)}
                onMouseLeave={() => setLock(true)}
                fill={searchTransition ? "#fff" : "#999"}
              />
            </CSSTransition>
            <Searchinfo
              className={searchTransition ? "" : "searchinfo_none"}
              onMouseEnter={() => setLock(false)}
              onMouseLeave={() => {
                setLock(true);
              }}
            >
              <SearchinfoTitle>
                <div className="search_info_title">热门搜索</div>
                <SearchinfoSwitch onClick={handleHuanyihuan}>
                  <span className="iconfont icon-shuaxin1"></span>换一换
                </SearchinfoSwitch>
              </SearchinfoTitle>
              <div style={{ overflow: "hidden" }}>
                {serachList.map((item, index) => {
                  return (
                    <SearchinfoItem
                      key={index}
                      data-title={item.title}
                      onClick={infoItemSearchValue}
                    >
                      {item.title}
                    </SearchinfoItem>
                  );
                })}
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
