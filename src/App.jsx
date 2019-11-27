import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AOS from 'aos';
import { Signup } from './components/signup/components/index';
import 'aos/dist/aos.css';
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
 *Read about it here: https://github.com/michalsnik/aos
 */

class App extends Component {
    componentDidMount() {
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
                <Switch>
                    <Route path="/sign-up" exact component={Signup} />
                </Switch>
            </Router>
        );
    }
}

export default App;
