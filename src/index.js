import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import {Provider} from 'react-redux';
import rootReducer from "store/reducers";
import {getCovidData} from 'store/actions/liveStatsAction';

const store = createStore(
    rootReducer,
    {},
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);
store.dispatch(getCovidData());


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
