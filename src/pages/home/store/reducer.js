
import { fromJS } from 'immutable';
import * as constants from './constants'

const defaultState = fromJS({
    topicList:
    [{
        id: 1,
        title: "happy",
        imgUrl: "https://www.gravatar.com/avatar/8edccfffaf92d3336a3eedf50fabc952?s=64&d=identicon&r=PG"
    },
    {
        id: 2,
        title: "sad",
        imgUrl: "https://www.gravatar.com/avatar/8edccfffaf92d3336a3eedf50fabc952?s=64&d=identicon&r=PG"
    },
    {
            id: 3,
            title: "unforgettable",
            imgUrl: "https://www.gravatar.com/avatar/8edccfffaf92d3336a3eedf50fabc952?s=64&d=identicon&r=PG"
    },
    {
            id: 4,
            title: "special day",
            imgUrl: "https://www.gravatar.com/avatar/8edccfffaf92d3336a3eedf50fabc952?s=64&d=identicon&r=PG"
    }],

    articleList:
    [{
        id: 1,
        title: "my special Uni orientation!!",
        description: "my special orientation day is so happy ",
        imgUrl: "https://www.gravatar.com/avatar/8edccfffaf92d3336a3eedf50fabc952?s=64&d=identicon&r=PG"
    },
    {
        id: 2,
        title: "my special primary school orientation!!",
        description: "my special orientation day is so unforgettable ",
        imgUrl: "https://www.gravatar.com/avatar/8edccfffaf92d3336a3eedf50fabc952?s=64&d=identicon&r=PG"
    }],
    articlePage: 1
});


export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_HOME_DATA:
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList),
            })
        case constants.ADD_HOME_LIST:
            console.log('here')
            return state.merge({
                'articleList': state.get('articleList').concat(action.list),
                'articlePage': action.nextPage
            })
            
            
        default:
            return state;
    }
}