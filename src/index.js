import 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux';
import App from './App';
import { Theme } from './features';

const render = (Component) => {
    ReactDOM.render(
        <Provider store={store}>
            <Theme>
                <Component />
            </Theme>
        </Provider>,
        document.getElementById('moby-app'),
    );
};

render(App);

if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default;
        render(NextApp);
    });
}
