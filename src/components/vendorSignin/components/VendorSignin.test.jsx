import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import VendorSignin from './index';
import store from '../../../store';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Provider store={store}>
            <Router>
                <VendorSignin />
            </Router>
        </Provider>,
        div
    );
});
