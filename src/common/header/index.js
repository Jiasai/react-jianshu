import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSearchValueChangeAction } from "../../store/actionCreators";
//引入样式
import "./header.scss";
//引入样式css-in-js
// import HeaderWrap from './headerStyle.js';

//引入logo图片路径
import logoPic from "../../assets/images/logo.png";

const Header = (props) => {
  const { currentTitle, menu, currentPage, searchValue, ChangSearchValue } =
    props;
  useEffect(() => {
    document.title = currentTitle;
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
            <input
              type="text"
              placeholder={searchValue ? searchValue : "搜索内容"}
              value={searchValue}
              onChange={ChangSearchValue}
            />
          </div>
        </div>
        <div className="header_menu_right">
          <div className="header_menu_right_set">
            <a href="/">Aa</a>
          </div>
          <div className="header_menu_right_login">
            <a href="/">登录</a>
          </div>
          <div className="header_menu_right_register">
            <a href="/">注册</a>
          </div>
          <div className="header_menu_right_writeArticle">
            <a href="/">
              <span></span>
              写文章
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

/*state数据*/
const propsState = (state) => {
  return {
    menu: state.menu,
    currentPage: state.currentPage,
    currentTitle: state.currentTitle,
    searchValue: state.searchValue,
  };
};

/*业务逻辑*/
const propsDispatch = (dispatch) => {
  return {
    //修改search搜索的value值
    ChangSearchValue(e) {
      const action = getSearchValueChangeAction(e.target.value);
      dispatch(action);
    },
  };
};

export default connect(propsState, propsDispatch)(Header);
