import React, { useEffect, useState,Fragment } from "react";
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
    setItemlist,
  } = props;
  //拿到store中 header模块的store数据
  const {
    currentTitle,
    menu,
    currentPage,
    searchValue,
    searchTransition,
    serachList,
    page,
    totalPage
  } = store.getState().header;
  //数据响应
  setCurrentTitle(currentTitle);
  setMenu(menu);
  setCurrentPage(currentPage);
  setSearchValue(searchValue);
  setSearchTransition(searchTransition);
  
  if(serachList.length>1){
    //根据page对数据分页，返回
    const resultList = [];
    for(let i=page * 6; i < (page+1)*6; i++){
      if(serachList[i]){
        resultList.push(serachList[i]);
      }     
    }
    setItemlist(resultList);
  }else{
    setItemlist(serachList);
  }
  // 返回出去，别的函数要用
  return { serachList,page,totalPage};
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
const handleHuanyihuan = (rotate,setRotate) => {
  //icon小图标旋转
  if(rotate){
    setRotate(false)
  }else{
    setRotate(true)
  }
  let { page,totalPage } = thisState(); //获取store数据
  //改变page
  if(page < totalPage-1){
    page++;
  }else{
    page = 0;
  }
  //改变store中的page
  const action = actionCreators.getSearchPageAction(page);
  store.dispatch(action);

  setTimeout(() => {
    inputSearch.focus();
  }, 30); //input获取焦点
};

//search搜索提示获取数据
const getSearchList = () => {
  const { serachList } = thisState(); //获取store数据
  if (serachList.length > 1) return;
  const action = actionCreators.getSearchListAction("/api/header.json");
  store.dispatch(action);
};


const Header = () => {
  //用useState定义
  const [currentTitle, setCurrentTitle] = useState("");
  const [menu, setMenu] = useState([]);
  const [currentPage, setCurrentPage] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [searchTransition, setSearchTransition] = useState(false);
  const [itemlist, setItemlist] = useState([]);
  const [lock, setLock] = useState(true); //关闭动画执行的锁
  const [rotate,setRotate] = useState(false);
  useEffect(() => {
    document.title = currentTitle;
    //把 useState的设置数据方法 存到这个变量
    useStateSet = {
      setCurrentTitle,
      setMenu,
      setCurrentPage,
      setSearchValue,
      setSearchTransition,
      setItemlist,
    };

    //修改数据
    thisState();

    //侦听store变化，设置修改数据
    store.subscribe(thisState);
  }, [currentTitle]);

  return (
    <Fragment>
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
                <SearchinfoSwitch onClick={()=>handleHuanyihuan(rotate,setRotate)}>
                  <span className={rotate?"iconfont icon-shuaxin1 routate":"iconfont icon-shuaxin1"}></span>
                  换一换
                </SearchinfoSwitch>
              </SearchinfoTitle>
              <div style={{ overflow: "hidden" }}>
                {itemlist.map((item, index) => {
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
    <div className='header_space'></div>
    </Fragment>
  );
};

export default Header;
