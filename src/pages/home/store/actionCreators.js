import axios from 'axios';
import * as constants from './constants';

export const changeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
})

export const getHomeDetail = () => {
    return (dispatch) => {
        axios.get('api/home.json').then((res)=> {
            const result = res.data.data
            dispatch(changeHomeData(result))
        })
    }
}

// redux thunk allow us to return a function
export const getMoreList = () => {
    return (dispatch) => {
        console.log()
    }
}
