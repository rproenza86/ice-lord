import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { save, load } from 'redux-localstorage-simple';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { fetchProducts } from './redux/actions/productActions';
import rootReducer from './redux/reducers/rootReducer';
import products from './data/products.json';

// import './common/style/index.css';
import './assets/scss/style.scss';
import App from './components/App/App';

import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer, load(), composeWithDevTools(applyMiddleware(thunk, save())));

// fetch products from json file
store.dispatch((fetchProducts as any)(products));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
