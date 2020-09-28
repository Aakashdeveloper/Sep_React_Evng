import React from 'react';
import ReactDOM from 'react-dom';
import Home from './container/Home';
import store from './store';
import {Provider} from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <Home/>
    </Provider>,document.getElementById('root')
)