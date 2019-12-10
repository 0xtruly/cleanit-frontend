import Homepage from './components/homepage';
import SignIn from './components/signin';
import Signup from './components/signup';
import VendorSignin from './components/vendorSignin';


// Defining App routes
const routes = [
    { component: Homepage, exact: true, path: '/' },
    { component: Signup, path: '/sign-up' },
    { component: SignIn, path: '/sign-in' },
    { component: VendorSignin, path: '/vendor-sign-in' },
];
export default routes;
