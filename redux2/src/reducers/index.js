import {combineReducers} from 'redux';
import article from './article_reducers';
import gallery from './gallery_reducers';


const rootReducer = combineReducers({
    article,
    gallery
})

export default rootReducer;