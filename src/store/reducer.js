import { combineReducers } from 'redux-immutable'; // immutable reducer
import { reducer as headerReducer } from '../common/header/store'; // import from index file
import { reducer as homeReducer} from '../pages/home/store';


const reducer = combineReducers ({
    header: headerReducer,
    home: homeReducer
})

export default reducer;
