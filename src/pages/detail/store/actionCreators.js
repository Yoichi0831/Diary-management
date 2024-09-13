import axios from 'axios';
import * as constants from './constants';


export const changeDetail = (title, content) => ({
    type: constants.CHANGE_DETAIL,
    title,
    content
})


export const getDetail = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id=' + id).then((res) => {

            const result = res.data.data
            console.log("got it!!: ", result)
            dispatch(changeDetail(result.title, result.content))
        })
    }
}
