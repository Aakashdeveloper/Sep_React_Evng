import {combineReducers} from 'redux';
import articles from './article_reducers';

const rootReducer = combineReducers({
    articles
})

export default rootReducer;