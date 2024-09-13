import react, { Component } from 'react';
import { ListItem, ListInfo, LoadMore } from '../style';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store'

class List extends Component {
    render() {
        const {list, getMoreList, page} = this.props;
        return (
            <div>
                {
                    list.map((item, index) => {
                        console.log('here11')
                        console.log('item: ', item)
                        return (
                            <Link key={index} to={'detail/' + item.get('id')}>
                                <ListItem key={index}>
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
                <LoadMore onClick={() => getMoreList(page)}>More</LoadMore>
            </div>)
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage'])
})

const mapDispatchToProps = (dispatch) => ({
    getMoreList(page) {
        dispatch(actionCreators.getMoreList(page))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(List);