import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable';

const changeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
})

const addHomeList = (list) => ({
    type: constants.ADD_HOME_LIST,
    list: fromJS(list)
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
export const getMoreList = () => {
    return (dispatch) => {
        axios.get('api/homeList.json').then((res)=> {

            const result = res.data.data
            console.log('result: ', result)
            console.log('addhomelist: ',addHomeList(result))
            dispatch(addHomeList(result))
        })
    }
}
