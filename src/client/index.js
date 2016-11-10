import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { createStore } from 'redux';

import App from './components/App';
import todoAppReducer from './reducers/TodoAppReducer';

const store = createStore(todoAppReducer);

render(
    <Provider store={store} >
        <App />
    </Provider>, 
    document.getElementById('app')
);