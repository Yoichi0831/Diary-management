import styled from 'styled-components'
import logo from '../../statics/logo.png'
export const HeaderWrapper = styled.div`
    position: relative;
    height: 58px;
    border-bottom: 1px solid #f0f0f0
`;

export const Logo = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    width: 100px;
    height: 58px;
    background: url(${logo});
    background-size: contain;
`

export const Nav = styled.div`
    width: 900px;
    height: 100%;
    margin: 0 auto;
    padding-right: 70px;
    box-sizing: border-box;
`

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696
    }
    &.active {
        color: #ea6f5a;
    }

`
export const SearchWrapper = styled.div`
    position: relative;
    float: left;




    .iconfont {
        position: absolute;
        right: 5px;
        bottom: 5px;
        background: green;
        width: 30px;
        line-height: 30px;
        border-radius: 15px;
        text-align: centre;
        &.focused {
            background: #777;
            color: red;
        }
    }

    }
`;

export const NavSearch = styled.input.attrs({placeholder: 'search'})`
    width: 160px;
    height: 38px;
    padding: 0px 30px 0px 20px;
    margin-top: 9px;
    margin-left: 20px
    box-sizing: border-box;
    border-radius: 19px;
    font-size: 14px;
    color: #666;
    border: none;
    outline: none;
    background: #eee;
    &::placeholder {
        color: #999
    }
    &.focused {
        width: 240px;
    }

    &.slide-enter{
        transition: all 0.2s ease-out;
        width: 240px;
    }
    &.slide-enter-active{
        width: 240px;
    }
    &.slide-exit {
        transition: all 0.2s ease-out;
    }
    &.slide-exit-active {
        width: 160px;
    }

`
export const SearchInfo = styled.div`
    position: absolute;
    left: 0;
    top: 56px;
    width: 240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
    background: #fff;
`
export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`;

export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
`;
export const SearchInfoList = styled.div`
    overflow: hidden;
`;

export const SearchInfoItem = styled.a`
    display: block;
    float: left;
    line-height: 20px;
    padding: 0 5px;
    margin-right: 10px;
    margin-bottom: 10px;
    font-size: 12px;
    border: 1px solid #ddd;
    color: #787878;
    border-radius: 3px;
`;

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`

export const Button = styled.button`
    float: right;
    margin-top: 9px;
    margin-right: 20px;
    line-height: 38px;
    border-radius: 19px;
    border: solid 1px #ec6149;
    padding: 0 20px;
    height: 40px;
    width: 100px;
    &.reg {
        color: #ec6149;
    }
    &.writing {
        color: #fff;
        background: #ec6149;
    }

`
