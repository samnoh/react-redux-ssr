import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { loadableReady } from '@loadable/component';

import App from 'App';
import store from 'store';
import * as serviceWorker from './serviceWorker';

const AppRoot = () => (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

const root = document.getElementById('root');

if (process.env.NODE_ENV === 'production') {
    loadableReady(() => {
        ReactDOM.hydrate(<AppRoot />, root);
    });
} else {
    ReactDOM.render(<AppRoot />, root);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
