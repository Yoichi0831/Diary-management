import react from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    Addition,
    Button}
    from './style'

const getListArea = (show) => {
    if (show) {
        return (
        <SearchInfo>
            <SearchInfoTitle>
                Hot search
                <SearchInfoSwitch>Change</SearchInfoSwitch>
            </SearchInfoTitle>
            <SearchInfoList>
                <SearchInfoItem>learn</SearchInfoItem>
                <SearchInfoItem>learn</SearchInfoItem>
                <SearchInfoItem>learn</SearchInfoItem>
                <SearchInfoItem>learn</SearchInfoItem>
                <SearchInfoItem>learn</SearchInfoItem>
                <SearchInfoItem>learn</SearchInfoItem>
            </SearchInfoList>
        </SearchInfo>
        )
    } else {
        return null;
    }
}


const Header = (props) => {
    return (
        <HeaderWrapper>
            <Logo/>
            <Nav>
                <NavItem className='left active'>Homepage</NavItem>
                <NavItem className='left'>download</NavItem>
                <NavItem className='right'>log in</NavItem>
                <NavItem className='right'>
                    <span className="iconfont">&#xe674;</span>
                </NavItem>

                <SearchWrapper>
                    <CSSTransition
                        in={props.focused}
                        timeout={200}
                        classNames="slide"
                    ><NavSearch
                            className={props.focused ? 'focused': ''}
                            onFocus = {props.handleInputFocus}
                            onBlur = {props.handleInputBlur}
                    ></NavSearch>
                    </CSSTransition>
                    <span className={props.focused ? 'focused iconfont': 'iconfont'}>
                        &#xe60c;</span>
                    {getListArea(props.focused)}
                </SearchWrapper>

                <Addition>
                    <Button className="reg">register</Button>
                    <Button className="writing">
                        <span className="iconfont" >&#xe600;</span>
                        write diary
                    </Button>
                </Addition>
            </Nav>
        </HeaderWrapper>
    )

}

const mapStateToProps = (state) => {
    // how store's data maps to Props

    return {
        focused: state.getIn(['header', 'focused'])
    }
};

const mapDispatchToProps = (dispatch) => {

    return {
        handleInputFocus() {
            dispatch(actionCreators.searchFocus());
        },

        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        }
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(Header);