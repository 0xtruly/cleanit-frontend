import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import AOS from 'aos';
import { Provider } from 'react-redux';
import Homepage from './components/homepage';
import Navbar from './components/navbar';
import SignIn from './components/signin';
import Signup from './components/signup';
import store from './store';

// Defining App routes
const routes = [
    { component: Homepage, exact: true, path: '/' },
    { component: Signup, path: '/sign-up' },
    { component: SignIn, path: '/sign-in' },
];

/**
 * Default AppJS file.
 * You must declare your Routes here to they Update appropriatele.
 * For each <Route/> it must be linked to a component and a path must be specified.
 * Read up on React Router DOM here: https://reacttraining.com/react-router/web/guides/quick-start
 *
 * To use urls to link to components use <Link to={ComponentName}>Link Text</Link>.
 * Remember to import Link from reaxct-router-dom
 *
 * AOS (Animate-On-Scroll) is a simple animation library.
 * Read about it here: https://github.com/michalsnik/aos
 */

class App extends Component {
    componentDidMount() {
        // Initializing the AOS library with options across the app

        AOS.init({
            delay: 10,
            duration: 1200,
            mirror: false,
            offset: 0,
        });
    }

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Navbar />
                    <Switch>
                        {routes.map(route => (
                            <Route
                                key={route.path}
                                path={route.path}
                                exact={route.exact}
                                component={route.component}
                            />
                        ))}
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

export default App;
