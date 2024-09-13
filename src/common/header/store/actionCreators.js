import * as constants from '../constants';
import { fromJS } from 'immutable';
import axios from 'axios';

const change_list = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data)
})


export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
});

export const getList = () => { //thunk helps you to return a function now
    return (dispatch) => { // asynchronous action
        axios.get('api/headerList.json').then((res) => {
            const data = res.data

            dispatch(change_list(data.data))
        }).catch(() => {
            console.log('error');
        })
    }
}
