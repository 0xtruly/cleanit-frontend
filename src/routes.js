import Homepage from './components/homepage';
import SignIn from './components/signin';
import Signup from './components/signup';

// Defining App routes
const routes = [
    { component: Homepage, exact: true, path: '/' },
    { component: Signup, path: '/sign-up' },
    { component: SignIn, path: '/sign-in' },
];
export default routes;
