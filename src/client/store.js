import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import todoAppReducer from './reducers/TodoAppReducer';
import thunk from 'redux-thunk';

//Shen: need to allow asynchronous call 

export function configureStore(initialState = {}) {

    const enhancers = [
    applyMiddleware(thunk),
    ];

    return createStore(todoAppReducer, initialState, compose(...enhancers));    
}

