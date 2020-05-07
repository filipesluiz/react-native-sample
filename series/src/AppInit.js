import React from 'react';
import Router from './Router';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';//Using applyMiddleware for redux-thunk
import reduxThunk from 'redux-thunk';

import rootReducer from './redux/reducers';
import {composeWithDevTools} from 'remote-redux-devtools';

/** Resolve firestore bug: 'object is not a function' **/ 
import {decode, encode} from 'base-64'

if (!global.btoa) {  global.btoa = encode }

if (!global.atob) { global.atob = decode }
/** **/ 

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxThunk)));

export default function appInit(){
    return(
        <Provider store={store}>
            <Router/>
        </Provider>
    );
}