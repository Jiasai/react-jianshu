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

export  {HeaderWrap , Logo};