//css-in-js 模块
import styled from 'styled-components';

/*css样式*/
const HeaderWrap = styled.div`
  background:#f2f2f2;
  display:flex;
  justify-content: space-between;
  align-items: center;
  font-size:20px;
  .logo{
    color:red
  }
  p{color:blue}
`
const Logo = styled.a.attrs({
  href:'/'
})`
  display:block;
  widhth:100%;
  height:100%;
  &.logoActive{
    color:red
  }
`

const Searchinfo = styled.div`
  position:absolute;
  left:0;
  top:46px;
  width:275px;
  padding:15px 20px 5px;
  border-bottom:1px solid #f0f0f0;
  background:#fff;
  border-radius:4px;
  box-shadow:0 0 8px rgba(0,0,0,.2);
  transition: all .28s linear;
  z-index:100;
  opacity:1;
  transform: translateY(0px);
  &.searchinfo_none{
    opacity:0;
    z-index:-10;
    transform: translateY(20px);
  }
`

const SearchinfoTitle = styled.div`
margin:20px 0 15px 0px
line-height:20px;
font-size:14px;
color:#969696;
display:flex;
align-items:center;
justify-content: space-between;
margin-bottom:10px;
.search_info_title{ }
`
const SearchinfoSwitch = styled.div`
  cursor:pointer;
  transition:all .28s;
  font-size:13px;
  &:hover{color:#333}
  overfllow:hidden;
  span.iconfont{
    display:inline-block;
    text-align: center;
    line-height: 30px;
    height:30px;
    width:20px;
    vertical-align: middle;
    transition: all .28s linear;
    transform:rotate(0deg);
  }
  span.iconfont.routate{
    transform:rotate(360deg);
  }
`

const SearchinfoItem = styled.div`
  padding:0px 7px;
  font-size:12px;
  line-height:20px;
  color:#787878;
  border-radius:3px;
  border:1px solid #ddd;
  display:block;
  float:left;
  margin-right:10px;
  margin-bottom:15px;
  cursor:pointer;
  transition:all .28s;
  &:hover{color:#333}
`

export  {HeaderWrap , Logo, Searchinfo ,SearchinfoTitle ,SearchinfoSwitch,SearchinfoItem};