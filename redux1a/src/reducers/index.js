import { combineReducers } from 'redux';
import movies from './movie_reducers';

const rootReducers = combineReducers({
    movies
})

export default rootReducers;
