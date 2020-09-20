import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './redux/helpers';
import { App } from './App';

// import { configureFakeBackend } from './redux/helpers';
// configureFakeBackend();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);