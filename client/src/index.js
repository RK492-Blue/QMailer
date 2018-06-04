// Redux
// Data stuff

// webpack assumes npm module if no relative path given
// long version:
// import materializeCSS from 'materialize-css/dist/css/materialize.min.css';
// short version:
import 'materialize-css/dist/css/materialize.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
// Provider - Provides access to the Redux store
import { Provider } from 'react-redux';  
// createStore - creates the Redux store
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';


import App from './components/App';
import reducers from './reducers';

import axios from 'axios';
window.axios = axios;

// create the Redux store
// https://redux.js.org/api-reference/createstore
// createStore(reducer, initial_state, enhancers-ie.MiddleWare)
// Middleware extends Redux with custom functionality
// https://redux.js.org/api-reference/applymiddleware
const store = createStore(
                reducers, 
                {}, 
                applyMiddleware(reduxThunk)
            );


ReactDOM.render(
// reference on ReactDOM: https://reactjs.org/docs/react-dom.html
// 2 arguments - What and  where to render. Refer notes-client.txt
// Creates redux store at the top level of the application
// Refer react-redux.png diagram
// Provider is a React component that knows how to read changes from the Redux store.
// Whenever there is a change in the Redux store, it informs its child components, 
//   in this case <App />
    <Provider store = {store}>
        <App />
    </Provider>, 
    document.querySelector('#root')
);  

// console.log('Strip key: ', process.env.REACT_APP_STRIPE_KEY);
// console.log('Environment is: ', process.env.NODE_ENV);