import react, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { Link } from 'react-router-dom';
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


class Header extends Component {

    getListArea() {
        const { focused , list } = this.props;
        if (focused) {
            return (
                <SearchInfo>
                    <SearchInfoTitle>
                        Hot search
                        <SearchInfoSwitch>Change</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {
                            list.map((item) => {
                                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                            })
                        }
                    </SearchInfoList>
                </SearchInfo>
            );
        } else {
            return null;
        }
    }

    render() {
        const { focused , handleInputFocus , handleInputBlur} = this.props;
        return (
            <HeaderWrapper>
                <Link to='/'>
                    <Logo/>
                </Link>
                
                <Nav>
                    <NavItem className='left active'>Homepage</NavItem>
                    <NavItem className='left'>download</NavItem>
                    <NavItem className='right'>log in</NavItem>
                    <NavItem className='right'>
                        <span className="iconfont">&#xe674;</span>
                    </NavItem>

                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        ><NavSearch
                                className={focused ? 'focused': ''}
                                onFocus = {handleInputFocus}
                                onBlur = {handleInputBlur}
                        ></NavSearch>
                        </CSSTransition>
                        <span className={focused ? 'focused iconfont': 'iconfont'}>
                            &#xe60c;</span>
                        {this.getListArea()}
                    </SearchWrapper>

                    <Addition>
                        <Button className="reg">register</Button>
                        <Button className="writing">
                            <span className="iconfont" >&#xe600;</span>
                            write
                        </Button>
                    </Addition>
                </Nav>
            </HeaderWrapper>
        )
    }
}



const mapStateToProps = (state) => {
    // how store's data maps to Props

    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list'])
    }
};

const mapDispatchToProps = (dispatch) => {

    return {
        handleInputFocus() {
            dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },

        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        }
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(Header);