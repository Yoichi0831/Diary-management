import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable';

const changeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
})

const addHomeList = (list, nextPage) => ({
    type: constants.ADD_HOME_LIST,
    list: fromJS(list),
    nextPage
})

export const getHomeDetail = () => {
    return (dispatch) => {
        axios.get('api/home.json').then((res)=> {
            const result = res.data.data
            console.log(result)
            dispatch(changeHomeData(result))
        })
    }
}

// redux thunk allow us to return a function
export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('api/homeList.json?page=' + page).then((res)=> {
            const result = res.data.data
            dispatch(addHomeList(result, page + 1))
        })
    }
}
