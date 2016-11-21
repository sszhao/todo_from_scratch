import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import {Router, browserHistory } from 'react-router';

import App from './components/App';
import {configureStore} from './store';

import routes from './routes';


const preloadedState = window.__PRELOADED_STATE__;

const store = configureStore(preloadedState);

render(
    <Provider store={store} >
        <Router history={browserHistory} routes={routes} />
    </Provider>, 
    document.getElementById('app')
);