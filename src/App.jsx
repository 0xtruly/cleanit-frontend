import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AOS from 'aos';
import Homepage from './components/homepage/components';
import Login from './components/login/components/index';
import Navbar from './components/navbar/components';
import { Signup } from './components/signup/components';
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
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Homepage} />
                    <Route path="/sign-up" exact component={Signup} />
                    <Route path="/login" component={Login} />
                </Switch>
            </Router>
        );
    }
}

export default App;
