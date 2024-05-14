import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false
});


export default (state = defaultState, action) => {
    if (action.type === constants.SEARCH_FOCUS) {
        // immutable object set method will get value from before and value setting now
        // and return a new object
        return state.set('focused', true);
    }

    if (action.type === constants.SEARCH_BLUR) {
        return state.set('focused', false);
    }
    return state;
}// given A input will give out B result only