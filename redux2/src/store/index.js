import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';
import {looger} from 'redux-logger';
import reducers from '../reducers';

let store = createStore(reducers,applyMiddleware(promiseMiddleware,looger));

export default store;