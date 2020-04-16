import React from 'react';
import Router from './Router';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';//Using applyMiddleware for redux-thunk
import reduxThunk from 'redux-thunk';

import rootReducer from './redux/reducers';
import {composeWithDevTools} from 'remote-redux-devtools';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxThunk)));

export default function appInit(){
    return(
        <Provider store={store}>
            <Router/>
        </Provider>
    );
}