import react, { Component } from 'react';
import { ListItem, ListInfo, LoadMore } from '../style';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store'

class List extends Component {
    render() {
        const {list, getMoreList} = this.props;
        return (
            <div>
                {
                    list.map((item, index) => {
                        return (
                            <Link key={index} to={'detail/' + item.get('id')}>
                                <ListItem key={item.get('id')}>
                                    <img className="pic" src={item.get('imgUrl')} />
                                    <ListInfo>
                                        <h3 className='title'>{item.get('title')}</h3>
                                        <p className="description">{item.get('description')}</p>
                                    </ListInfo>
                                </ListItem> 
                            </Link>

                        )
                    })
                }
                <LoadMore onClick={getMoreList}>More</LoadMore>
            </div>)
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['home', 'articleList'])
})

const mapDispatchToProps = (dispatch) => ({
    getMoreList() {
        dispatch(actionCreators.getMoreList())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(List);