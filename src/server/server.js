import path from 'path';
import express from 'express';
import compression from 'compression';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
//import path from 'path';
//import IntlWrapper from '../client/modules/Intl/IntlWrapper';
import webpack from 'webpack';
import config from '../../webpack.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const app = new express(); 

// // Run Webpack dev server in development mode
// if (process.env.NODE_ENV === 'development') {
//   const compiler = webpack(config);
//   app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
//   app.use(webpackHotMiddleware(compiler));
// }

// React And Redux Setup
import { configureStore } from '../client/store'; //Done
import { Provider } from 'react-redux';
import React from 'react';
import { renderToString } from 'react-dom/server';
//import { match, RouterContext } from 'react-router'; //Done

import {Router, browserHistory } from 'react-router';

// Import required modules
import routes from '../client/routes'; //Done
//import { fetchComponentData } from './util/fetchData';
//import posts from './routes/post.routes';
import dummyData from './dummyData';
import serverConfig from './config';
import App from '../client/components/App';

import todoRoutes from './routes/todo.routes';

import todoAppReducer from '../client/reducers/TodoAppReducer';

//Set native promises as mongoose promise
mongoose.Promise = global.Promise;

//MongoDB Connection
mongoose.connect(serverConfig.mongoURL, (error) => {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
    throw error;
  }

  // feed some dummy data in DB.
  //dummyData();
});



const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  publicPath: config.output.publicPath,
  noInfo: true
}));
app.use(webpackHotMiddleware(compiler));

// Apply body Parser and server public assets and routes
// app.use(compression());
// app.use(bodyParser.json({ limit: '20mb' }));
// app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
//app.use(Express.static(path.resolve(__dirname, '../dist')));

//Shen: not sure what is this doing here? 
app.use(bodyParser.json());
app.use('/api', todoRoutes);

import TodoItem from './models/todoItem';

//const myTodos = 

 app.use(handleRender);

 
//console.log("myTodos" + myTodos.toString());

function handleRender(req, res) {
  //Create a new Redux store instance
  // const todoItem1 = {id:1, text:"hello world", completed:false};
  // const todoItem2 = {id:2, text:"hello again", completed:false};
  // const todos = [todoItem1, todoItem2];

  TodoItem.find().exec((err, todos) => {
    if(err){
      res.status(500).send(err);
    }

    //set the itemIndex to be the max id number 
    var itemIndex = 0; 
    if(todos !== null){
      var myArray = todos.map((todo) => { return todo.id});
      //console.log("myArray is " + myArray.toString());
      itemIndex = Math.max(...myArray);
    }
    //console.log("itemIndex is " + itemIndex);
    const store = configureStore({todoList:{todos:[...todos], itemIndex:itemIndex}});

    const html = renderToString(
      <Provider store={store}>
        <App />
      </Provider>
    )

    // Grab the initial state from our Redux store
    const preloadedState = store.getState()

    // Send the rendered page back to the client
    res.send(renderFullPage(html, preloadedState))

  })
}

function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Todo by React Redux</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
        <div id="app">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
    `
}

//app.use('/api/todos', todoRoutes);

// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, './index.html'));
// });




// start app
app.listen(serverConfig.port, (error) => {
  if (!error) {
    console.log(`Shen test app is running on port: ${serverConfig.port}! Build something amazing!`); // eslint-disable-line
  }
});

export default app;